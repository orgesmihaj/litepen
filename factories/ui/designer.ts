import IFactory from '@contracts/factory';
import IDesigner from '@contracts/ui/designer';
import FAccessibility from '@factories/accessability';
import FKeyboard from '@factories/keyboard';
import { TBlueprint } from 'types/ui/designer';
import Designer from '@ui/designer';
import FSelection from '@factories/selection';

class FDesigner implements IFactory<IDesigner> {
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
			 * Manage the selection of the editor's content.
			 */
			selection: new FSelection().assemble(),
		};

		return new Designer(blueprint);
	}
}

export default FDesigner;
