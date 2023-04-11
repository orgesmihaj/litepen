import IContent from "@contracts/outline/content";
import { TMutationCallback } from "types/designer/mutation";

/**
 * Modify the DOM of an element.
 */
interface IDesigner {
	/**
	 * Add content as part of the Editor's DOM.
	 */
	create(content: IContent): this;

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
	 * Check if the element is editable.
	 */
	isEditable(): boolean;

	/**
	 * Assign the element to the designer.
	 */
	on(element: Element): this;

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(message?: string | false | undefined): this;

	/**
	 * Capture any change in the editor's content.
	 */
	whenMutations(callback: TMutationCallback): this;
}

export default IDesigner;
