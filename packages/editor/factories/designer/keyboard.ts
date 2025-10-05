import type { IFactory } from 'contracts/factory';
import type { IKeyboard } from 'contracts/designer/keyboard';
import FListeners from '../../factories/listeners';
import type { TBlueprint } from 'types/designer/keyboard';
import Keyboard from '../../src/designer/keyboard';

/**
 * Handle keyboard-related events.
 */
class FKeyboard implements IFactory<IKeyboard> {
	/**
	 * Assemble a new `Keyboard` instance.
	 */
	assemble(): IKeyboard {
		/**
		 * A subscription mechanism to the editor's events.
		 */
		const blueprint: TBlueprint = {
			listeners: new FListeners().assemble(),
		};
		return new Keyboard(blueprint);
	}
}

export default FKeyboard;
