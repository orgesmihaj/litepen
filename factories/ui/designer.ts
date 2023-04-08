import IDesigner from "@contracts/ui/designer";
import IFactory from "@contracts/factory";
import FAccessibility from "@factories/accessability";
import FKeyboard from "@factories/keyboard";
import FMutation from "@factories/mutation";
import { TBlueprint } from "types/ui/designer";
import Designer from "@ui/designer";

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
			 * Detect changes made to the element.
			 */
			mutation: new FMutation().assemble(),
		};

		return new Designer(blueprint);
	}
}

export default FDesigner;
