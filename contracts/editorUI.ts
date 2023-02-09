/**
 * Modifies the DOM of the editor.
 */
interface IEditorUI {
	/**
	 * Attach the element to the editor's DOM.
	 *
	 * @note: The trailing tag is necessary because without it, an empty
	 * 				contenteditable element may not have a visual representation,
	 * 				leading to difficulties in formatting and editing.
	 */
	attach(element: HTMLElement, trailingElement?: HTMLElement): this;

	/**
	 * Set the placeholder for the element.
	 */
	placeholder(status?: boolean): this;

	/**
	 * Attach a class-based identifier to the element
	 * in order to select it on a later time.
	 */
	identifyAs(identifier: string): this;

	/**
	 * Make the element editable by the user.
	 */
	editable(status?: boolean): this;

	/**
	 * Return the element specified in the settings.
	 */
	paint(): Element;
}

export default IEditorUI;
