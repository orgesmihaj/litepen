import IEditor from '@contracts/editor';
import IEditorUI from '@contracts/editorUI';
import IOutline from '@contracts/outline/outline';
import IState from '@contracts/state';
import { TBlueprint } from 'types/editor';

class Editor implements IEditor {
	/**
	 * Modify the DOM of the editor.
	 */
	private readonly editorUI: IEditorUI;

	/**
	 * Define the outline of the editor's content.
	 */
	private readonly outline: IOutline;

	/**
	 * Manage the state of the editor.
	 */
	private readonly state: IState;

	constructor(blueprint: TBlueprint) {
		this.editorUI = blueprint.editorUI;
		this.outline = blueprint.outline;
		this.state = blueprint.state;
	}

	/**
	 * Bootstrap the editor.
	 */
	ignite(): void {
		this.editorUI.build();

		this.outline.compose(this.state);
	}
}

export default Editor;
