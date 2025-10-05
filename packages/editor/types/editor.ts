import type { IState } from 'contracts/state/state';
import type { IKeyboard } from 'contracts/designer/keyboard';
import type { IMutation } from 'contracts/designer/mutation';
import type { ICatalogue } from 'contracts/outline/catalogue';

/**
 * The dependencies of the `Editor` instance.
 */
export type TBlueprint = {
	/**
	 * Manage the state of the editor.
	 */
	state: IState;

	mutation: IMutation;

	catalogue: ICatalogue;

	keyboard: IKeyboard;
};
