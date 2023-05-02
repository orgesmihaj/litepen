import IMutation from '@contracts/designer/mutation';
import { TMutationCallback, TMutationDebounce } from 'types/designer/mutation';
import Messages from '@logger/messages';
import Settings from '../settings';

/**
 * Detect changes made to the element.
 */
class Mutation implements IMutation {
	/**
	 * The observable DOM element.
	 */
	private element: HTMLElement | undefined;

	/**
	 * Describe which DOM mutations should be reported
	 * to mutationObserver's callback
	 */
	private options: MutationObserverInit = {
		attributes: true,
		characterData: true,
		childList: true,
		subtree: true,
	};

	/**
	 * Capture any change in the element content.
	 */
	capture(onMutation: TMutationCallback): void {
		if (!this.element) {
			throw new Error(Messages.NO_ELEMENT_TO_OBSERVE);
		}
		const observer = new MutationObserver(
			this.debounce(onMutation, Settings.get('debounce'))
		);

		observer.observe(this.element, this.options);
	}

	/**
	 * Wait until a certain amount of time has passed
	 * before triggering the callback.
	 * */
	debounce(
		onMutation: TMutationCallback,
		pause: number = Settings.get('debounce') ?? 330
	): TMutationDebounce {
		let timeout: ReturnType<typeof setTimeout>;

		return (mutations: MutationRecord[]): void => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				onMutation(mutations);
			}, pause);
		};
	}

	/**
	 * Define the element to be observed.
	 */
	on(element: HTMLElement): this {
		this.element = element;

		return this;
	}
}

export default Mutation;
