import IDesigner from '@contracts/ui/designer';
import IFactory from '@contracts/factory';
import FAccessibility from '@factories/designer/accessibility';
import FCaret from '@factories/designer/caret';
import FKeyboard from '@factories/designer/keyboard';
import FListeners from '@factories/listeners';
import FMutation from '@factories/designer/mutation';
import { TBlueprint } from 'types/designer/designer';
import Designer from '@ui/designer';

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
			 * Manage the caret position in the editor.
			 */
			caret: new FCaret().assemble(),

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
