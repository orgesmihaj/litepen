import IFactory from "@contracts/factory";
import IState from "@contracts/state";
import FCatalogue from "@factories/outline/catalogue";
import { TBlueprint } from "types/state";
import State from "@/state";

/**
 * Manage the state of the editor.
 */
class FState implements IFactory<IState> {
	/**
	 * Assemble a new `State` instance.
	 */
	assemble(): IState {
		const blueprint: TBlueprint = {
			/**
			 * Define content that can be part of the
			 * editor's outline.
			 */
			catalogue: new FCatalogue().assemble(),
		};

		return new State(blueprint);
	}
}

export default FState;
