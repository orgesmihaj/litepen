import Settings from '../settings';
import type { IMutation } from 'contracts/designer/mutation';
import type { TContent } from 'types/content';
import type { TMutationCallback, TMutationDebounce } from 'types/designer/mutation';

/**
 * 🧬Detect changes made to the element.
 */
class Mutation implements IMutation {
	/**
	 * Element being monitored for changes.
	 */
	private element!: HTMLElement;

	/**
	 * Configuration for what mutations to observe.
	 */
	private options: MutationObserverInit = {
		attributes: true,
		characterData: true,
		characterDataOldValue: true,
		childList: true,
		subtree: true,
	};

	/**
	 * Capture any mutation in the element content.
	 */
	capture(onMutation: TMutationCallback): void {
		const pause: number = Settings.get('debounce') ?? 330;
		const observer: MutationObserver = new MutationObserver(this.debounce(onMutation, pause));

		observer.observe(this.element, this.options);
	}

	/**
	 * Debounce callback execution to limit frequency,
	 * improving performance.
	 */
	debounce(onMutation: TMutationCallback, pause: number): TMutationDebounce {
		let timeout: ReturnType<typeof setTimeout>;

		return (mutations: MutationRecord[]): void => {
			clearTimeout(timeout);

			timeout = setTimeout((): void => {
				onMutation(this.revise(mutations));
			}, pause);
		};
	}

	/**
	 * Set the target element for mutation observation.
	 */
	on(element: HTMLElement): this {
		this.element = element;

		return this;
	}

	/**
	 * Adapt mutation records into a consumable format for callbacks.
	 */
	private revise(mutations: MutationRecord[]): TContent {
		const content: TContent = new Map();

		for (const mutation of mutations) {
			if (mutation.type === 'characterData') {
				content.set('text', mutation.target.textContent ?? '');
			}
		}
		
		return content;
	}
}

export default Mutation;
