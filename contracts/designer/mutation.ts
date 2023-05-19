import { TMutationCallback } from 'types/designer/mutation';

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

	/**
	 * Revise the mutation records to fit the
	 * content's format.
	 */
	revise(mutations: MutationRecord[]): void;
}

export default IMutation;
