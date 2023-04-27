import IFactory from "@contracts/factory";
import IOutline from "@contracts/outline/outline";
import FAccessibility from "@factories/designer/accessibility";
import FCaret from "@factories/designer/caret";
import FCatalogue from "@factories/outline/catalogue";
import FDesigner from "@factories/designer/designer";
import FKeyboard from "@factories/designer/keyboard";
import FMutation from "@factories/designer/mutation";
import { TBlueprint } from "types/outline";
import Outline from "@/outline/outline";

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
			 * Manage the caret position in the editor.
			 */
			caret: new FCaret().assemble(),

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
