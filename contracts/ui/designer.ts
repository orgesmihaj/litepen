import IContent from '@contracts/outline/content';

/**
 * Modify the DOM of an element.
 */
interface IDesigner {
	/**
	 * Add content as part of the Editor's DOM.
	 */
	add(content: IContent): HTMLElement;

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
}

export default IDesigner;
