import IContent from '@contracts/outline/content';

/**
 * Modify the DOM of the editor.
 */
interface IEditorUI {
	/**
	 * The DOM element where the editor will be attached.
	 */
	readonly element: Element;

	/**
	 * Attach the element to the editor's DOM.
	 */
	attach(content: IContent): this;

	/**
	 * Build the editor's DOM.
	 */
	build(): void;

	/**
	 * Make the element editable by the user.
	 */
	editable(status?: boolean): this;

	/**
	 * Attach a class-based identifier to the element
	 * in order to select it on a later time.
	 */
	identifyAs(identifier: string): this;

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(status?: boolean): this;
}

export default IEditorUI;
