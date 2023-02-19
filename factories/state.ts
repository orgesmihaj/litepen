import IFactory from '@contracts/factory';
import FCatalogue from '@factories/outline/catalogue';
import IState from '@contracts/state';
import { TBlueprint } from 'types/state';
import State from '@/state';

/**
 * Manage the state of the editor.
 */
class FState implements IFactory<IState> {
	/**
	 * Assemble a new instance of the state.
	 */
	assemble(): IState {
		const blueprint: TBlueprint = {
			/**
			 * Define content that can be part of the editor's outline.
			 */
			catalogue: new FCatalogue().assemble(),
		};

		return new State(blueprint);
	}
}

export default FState;
