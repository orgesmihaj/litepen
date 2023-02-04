interface IEditorUI {
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
