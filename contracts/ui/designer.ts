import IContent from '@contracts/outline/content';
import { TMutationCallback } from 'types/designer/mutation';

/**
 * Modify the DOM of an element.
 */
interface IDesigner {
	/**
	 * Create a DOM element to represent the content.
	 */
	create(content: IContent): HTMLElement;

	/**
	 * Make the element editable or not.
	 */
	editable(status: boolean | undefined): this;

	/**
	 * Check if the element has a placeholder.
	 */
	hasPlaceholder(): boolean;

	/**
	 * Attach a `data-*` attribute to the element.
	 */
	identifyAs(name: string): this;

	/**
	 * Insert the element at the caret position or
	 * at the end of the holder.
	 */
	insert(element: HTMLElement): HTMLElement;

	/**
	 * Check if the element is editable.
	 */
	isEditable(): boolean;

	/**
	 * Assign the element to the designer.
	 */
	on(element: Element): this;

	/**
	 * Capture any change in the editor's content.
	 */
	onChange(callback: TMutationCallback): this;

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(message?: string | false | undefined): this;
}

export default IDesigner;
