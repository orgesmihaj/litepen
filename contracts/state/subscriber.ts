import { TState } from "types/state";

/**
 * A subscriber that listens to the state.
 */
interface IStateSubscriber {
	/**
	 * When the state is updated, this method is called.
	 */
	onUpdate(state: TState): void;
}

export default IStateSubscriber;