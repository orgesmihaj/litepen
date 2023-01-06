import IEditor from '@contracts/editor';
import IEditorUI from '@contracts/ui/editorUI';
import IMutation from '@contracts/mutation';

class Editor implements IEditor {
	private element: IEditorUI;

	private mutation: IMutation;

	constructor(element: IEditorUI, mutation: IMutation) {
		this.element = element;
		this.mutation = mutation;
	}

	/**
	 * Detect any change in the editor content.
	 *
	 * @returns void
	 */
	onChange(): void {
		this.mutation.on(this.element).capture(() => {});
	}

	/**
	 * Convert the content to JSON or HTML.
	 *
	 * @returns void
	 */
	onSave(): void {
		throw new Error('Method not implemented.');
	}

	ignite(): Element {
		const editor = this.element.identifyAs('editor').editable().placeholder();

		this.onChange();

		return editor.paint();
	}
}

export default Editor;
