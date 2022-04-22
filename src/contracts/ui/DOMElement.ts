interface IDOMElement {
	/**
	 * Set the placeholder for the element.
	 *
	 * @param  {boolean} status - Define whether the placeholder will appear or not.
	 * @returns this
	 */
	hasPlaceholder(status: boolean): this;

	/**
	 * Attach a class-based identifier to the element
	 * in order to select it on a later time.
	 *
	 * @param  {string} identifier
	 * @returns this
	 */
	identifyAs(identifier: string): this;

	/**
	 * Make the element editable by the user.
	 *
	 * @returns this
	 */
	isEditable(status: boolean): this;

	/**
	 * Return the element specified in the settings.
	 *
	 * @returns this
	 */
	paint(): Element;
}

export default IDOMElement;
