interface IEditor {
	/**
	 * Detect any change in the editor content.
	 */
	onChange(): void;

	/**
	 * Convert the content to JSON or HTML.
	 */
	onSave(asHTML: boolean): void;

	/**
	 * Bootstrap the editor.
	 */
	ignite(): Element;
}

export default IEditor;
