import IEditorUI from '@contracts/editorUI';
import IState from '@contracts/state';
import IOutline from '@contracts/outline/outline';

export type TBlueprint = {
	/**
	 * Modify the DOM of the editor.
	 */
	editorUI: IEditorUI;

	/**
	 * Define the outline of the editor's content.
	 */
	outline: IOutline;

	/**
	 * Manage the state of the editor.
	 */
	state: IState;
};
