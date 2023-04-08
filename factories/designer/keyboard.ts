import IFactory from "@contracts/factory";
import IKeyboard from "@contracts/ui/keyboard";
import FListeners from "@factories/listeners";
import Keyboard from "@ui/keyboard";
import { TBlueprint } from "types/keyboard";

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
