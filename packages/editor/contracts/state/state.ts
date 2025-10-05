import type { IContent } from 'contracts/outline/content';
import type {
	IStateSubscriber
} from 'contracts/state/subscriber';
import type { TState } from 'types/state';

/**
 * # 🗃 Manage the editor's state.
 *
 * A centralized, immutable store for all editor content.
 * It encapsulates the current set of `IContent` items and ensures that any modifications
 * produce a new state snapshot. This immutability approach helps maintain
 * a predictable and testable state flow.
 *
 * Usage:
 * - Call `write(content)` to add or update content.
 * - Call `delete(content)` to remove content by its identifier.
 * - Call `clear()` to reset the state to an empty set.
 * - Subscribe to changes via `subscribe()` and `unsubscribe()` to keep track of updates
 *   in real-time.
 *
 * Example:
 * ```ts
 * const state = new State();
 * const content: IContent = { id: '123', ... };
 *
 * state.write(content);
 *
 * if (state.has(content)) {
 *   console.log('Content is in the state');
 * }
 *
 * state.delete(content);
 *
 * state.subscribe({
 *   announce: (snapshot) => console.log('State updated:', snapshot)
 * });
 * ```
 */
export interface IState {
	/**
	 * Return a snapshot of the current state as a new Map,
	 * ensuring external code cannot mutate the internal state.
	 */
	structure(): TState;

	/**
	 * Check whether the state contains the content.
	 */
	has(content: IContent): boolean;

	/**
	 * Checks whether the state currently holds any content.
	 */
	isEmpty(): boolean;

	/**
	 * Write a piece of content into the state,
	 * then notify subscribers.
	 */
	write(content: IContent): void;

	/**
	 * Remove the content from the state if it exists,
	 * then notify subscribers.
	 */
	delete(content: IContent): void;

	/**
	 * Clear the state and notify subscribers.
	 */
	clear(): void;

	/**
	 * Register a subscriber to be notified on state changes.
	 */
	subscribe(subscriber: IStateSubscriber): IStateSubscriber;

	/**
	 * Unregister a previously subscribed entity, stopping it
	 * from receiving notifications.
	 */
	unsubscribe(subscriber: IStateSubscriber): void;
}
