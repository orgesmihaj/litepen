import IDesigner from '@contracts/ui/designer';
import IOutline from '@contracts/outline/outline';
import IState from '@contracts/state';

/**
 * The dependencies of the editor.
 */
export type TBlueprint = {
	/**
	 * Modify the DOM of the editor.
	 */
	designer: IDesigner;

	/**
	 * Define the outline of the editor's content.
	 */
	outline: IOutline;

	/**
	 * Manage the state of the editor.
	 */
	state: IState;
};
