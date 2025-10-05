import Outline from '../../src/outline/outline';
import type { IFactory } from 'contracts/factory';
import type { IOutline } from 'contracts/outline/outline';
import FAccessibility from 'factories/designer/accessibility';
import FDesigner from 'factories/designer/designer';
import FKeyboard from 'factories/designer/keyboard';
import FMutation from 'factories/designer/mutation';
import FCatalogue from 'factories/outline/catalogue';
import type { TBlueprint } from 'types/outline';

/**
 * Define the outline of the editor's content.
 */
class FOutline implements IFactory<IOutline> {
	/**
	 * Instantiate a new outline object.
	 */
	assemble(): IOutline {
		const blueprint: TBlueprint = {
			/**
			 * Make DOM elements accessible to screen readers.
			 */
			accessibility: new FAccessibility().assemble(),

			/**
			 * Define content that can be part of the editor's
			 * outline.
			 */
			catalogue: new FCatalogue().assemble(),

			/**
			 * Modify the DOM of the editor.
			 */
			designer: new FDesigner().assemble(),

			/**
			 * Handle keyboard-related events.
			 * */
			keyboard: new FKeyboard().assemble(),

			/**
			 * Detect changes to the content.
			 */
			mutation: new FMutation().assemble(),
		};

		return new Outline(blueprint);
	}
}

export default FOutline;
