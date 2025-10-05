import type { TMutationCallback } from 'types/designer/mutation';

/**
 * 🧬Detect changes made to the element.
 */
export interface IMutation {
	/**
	 * Capture any change in the element content with
	 * a debounced callback to manage frequent updates.
	 */
	capture(callback: TMutationCallback): void;

	/**
	 * Debounce callback execution to limit frequency,
	 * improving performance.
	 */
	debounce(callback: TMutationCallback, pause: number): void;

	/**
	 * Set the target element for mutation observation.
	 */
	on(element: Element): this;
}


