interface IEditor {
	/**
	 * Detect any change in the editor content.
	 *
	 * @returns void
	 */
	onChange(): void;

	/**
	 * Convert the content to JSON or HTML.
	 *
	 * @param  {Boolean} asHTML
	 * @returns void
	 */
	onSave(asHTML: boolean): void;

	/**
	 * Bootstrap the editor.
	 *
	 * @returns Element
	 */
	ignite(): Element;
}

export default IEditor;
