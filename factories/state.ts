import IFactory from '@contracts/factory';
import IState from '@contracts/state/state';
import State from '@/state/state';

/**
 * Manage the state of the editor.
 */
class FState implements IFactory<IState> {
	/**
	 * Assemble a new `State` instance.
	 */
	assemble(): IState {
		return new State();
	}
}

export default FState;
