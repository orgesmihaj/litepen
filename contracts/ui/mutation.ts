import { TMutationCallback } from "types/ui/mutation";

/**
 * Detect changes made to the element.
 */
interface IMutation {
	/**
	 * Capture any change in the editor's content.
	 */
	capture(callback: TMutationCallback): void;

	/**
	 * Define the element to be observed.
	 */
	on(element: Element): this;
}

export default IMutation;
