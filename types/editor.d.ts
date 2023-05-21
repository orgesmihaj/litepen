import IDesigner from '@contracts/designer/designer';
import IOutline from '@contracts/outline/outline';
import IParser from '@contracts/state/parser';
import IState from '@contracts/state/state';

/**
 * The dependencies of the `Editor` instance.
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
	 * Parse state into different formats.
	 */
	parser: IParser;

	/**
	 * Manage the state of the editor.
	 */
	state: IState;
};
