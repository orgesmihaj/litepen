interface IEditor {
	/**
	 * Detect any change in the editor content.
	 */
	onChange(): void;

	/**
	 * Convert the content to JSON or HTML.
	 */
	onSave(records: MutationRecord[]): void;

	/**
	 * Bootstrap the editor.
	 */
	ignite(): void;
}

export default IEditor;
