import FAccessibility from '@factories/accessability';
import FCatalogue from '@factories/outline/catalogue';
import FDesigner from '@factories/ui/designer';
import FMutation from '@factories/mutation';
import IFactory from '@contracts/factory';
import IOutline from '@contracts/outline/outline';
import { TBlueprint } from 'types/outline';
import Outline from '@/outline/outline';
import FKeyboard from '@factories/keyboard';

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
