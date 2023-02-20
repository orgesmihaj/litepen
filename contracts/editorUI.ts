import IContent from '@contracts/outline/content';

/**
 * Modify the DOM of the editor.
 */
interface IEditorUI {
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
	 * Return the element specified in the settings.
	 */
	paint(): Element;

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(status?: boolean): this;
}

export default IEditorUI;
