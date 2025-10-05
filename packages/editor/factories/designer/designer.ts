import type { IDesigner } from 'contracts/designer/designer';
import type { IFactory } from 'contracts/factory';
import FAccessibility from 'factories/designer/accessibility';
import FKeyboard from 'factories/designer/keyboard';
import FListeners from 'factories/listeners';
import FMutation from 'factories/designer/mutation';
import type { TBlueprint } from 'types/designer/designer';
import Designer from '@/designer/designer';

/**
 * Modify the DOM of an element.
 */
class FDesigner implements IFactory<IDesigner> {
	/**
	 * Assemble a new `Designer` instance.
	 */
	assemble(): IDesigner {
		const blueprint: TBlueprint = {
			/**
			 * Make DOM elements accessible to screen readers.
			 */
			accessibility: new FAccessibility().assemble(),

			/**
			 * Handle keyboard-related events.
			 */
			keyboard: new FKeyboard().assemble(),

			/**
			 * A subscription mechanism to the editor's events.
			 */
			listeners: new FListeners().assemble(),

			/**
			 * Detect changes made to the element.
			 */
			mutation: new FMutation().assemble(),
		};

		return new Designer(blueprint);
	}
}

export default FDesigner;
