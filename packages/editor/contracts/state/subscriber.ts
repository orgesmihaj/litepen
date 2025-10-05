import type { TState } from 'types/state';

/**
 * A subscriber that listens to the state.
 */
export interface IStateSubscriber {
	/**
	 * When the state is updated, this method is called.
	 */
	announce(state: TState): void;
}

