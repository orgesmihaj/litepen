import IMutation from '@contracts/designer/mutation';
import { TMutationCallback, TMutationDebounce } from 'types/designer/mutation';
import { TContent } from 'types/content';
import Settings from '../settings';

/**
 * Detect changes made to the element.
 */
class Mutation implements IMutation {
	/**
	 * The observable DOM element.
	 */
	private element!: HTMLElement;

	/**
	 * Describe which DOM mutations should be reported
	 * to mutationObserver's callback
	 */
	private options: MutationObserverInit = {
		characterData: true,
		subtree: true,
	};

	/**
	 * Capture any change in the element content.
	 */
	capture(onMutation: TMutationCallback): void {
		const observer: MutationObserver = new MutationObserver(
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

			timeout = setTimeout((): void => {
				onMutation(this.revise(mutations));
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

	/**
	 * Revise the mutation records to fit the
	 * content's format.
	 */
	revise(mutations: MutationRecord[]): TContent {
		const revision: TContent = new Map();

		mutations.forEach((mutation: MutationRecord): void => {
			if (mutation.type === 'characterData') {
				revision.set('text', mutation.target.textContent ?? '');
			}
		});

		return revision;
	}
}

export default Mutation;
