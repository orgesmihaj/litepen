C
import IEditorUI from '@contracts/ui/editorUI';
import IMutationUI from './contracts/ui/mutationUI';

class Editor implements IEditor {
	private element: IEditorUI;

	private mutation: IMutationUI;

	constructor(element: IEditorUI, mutation: IMutationUI) {
		this.element = element;
		this.mutation = mutation;
	}

	/**
	 * Detect any change in the editor content.
	 *
	 * @returns void
	 */
	onChange(): void {
		this.mutation.on(this.element).capture(record => {
			console.log(record);
		});
	}

	/**
	 * Convert the content to JSON or HTML.
	 *
	 * @param  {Boolean} asHTML
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
