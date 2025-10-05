import type { IContent } from 'contracts/outline/content';
import type { IState } from 'contracts/state/state';
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
 * - Call `delete(content)` to remove content.
 * - Call `clear()` to reset the state to an empty set.
 * - Subscribe to changes via `subscribe()` and `unsubscribe()` to keep track of updates
 *   in real-time.
 *
 * Example:
 * ```ts
 * const editor: IEditor = new FEditor().assemble();
 * const state: IState = new FState().assemble();
 * const content: IContent = new FCatalogue().assemble().pick('paragraph');
 *
 * state.write(content);
 *
 * if (state.has(content)) {
 *   console.log('Content is in the state');
 * }
 *
 * state.delete(content);
 *
 * state.subscribe(editor);
 * ```
 */
class State implements IState {

	private state: TState = new Map();

	private readonly subscribers: Set<IStateSubscriber> = new Set();

	/**
	 * Return a snapshot of the current state as a new Map,
	 * ensuring external code cannot mutate the internal state.
	 */
	structure(): TState {
		return new Map(this.state);
	}

	/**
	 * Check whether the state contains the content.
	 */
	has(content: IContent): boolean {
		return this.state.has(content.id);
	}

	/**
	 * Checks whether the state currently holds any content.
	 */
	isEmpty(): boolean {
		return this.state.size === 0;
	}

	/**
	 * Write a piece of content into the state,
	 * then notify subscribers.
	 */
	write(content: IContent): void {
		const state: TState = this.structure();
		state.set(content.id, content);
		this.state = state;

		this.notifySubscribers();
	}

	/**
	 * Remove the content from the state if it exists,
	 * then notify subscribers.
	 */
	delete(content: IContent): void {
		if (!this.has(content)) {
			return;
		}

		const state: TState = this.structure();
		state.delete(content.id);
		this.state = state;

		this.notifySubscribers();
	}

	/**
	 * Clear the state and notify subscribers.
	 */
	clear(): void {
		this.state = new Map();

		this.notifySubscribers();
	}

	/**
	 * Register a subscriber to be notified on state changes.
	 */
	subscribe(subscriber: IStateSubscriber): IStateSubscriber {
		this.subscribers.add(subscriber);

		return subscriber;
	}

	/**
	 * Unregister a previously subscribed entity, stopping it
	 * from receiving notifications.
	 */
	unsubscribe(subscriber: IStateSubscriber): void {
		this.subscribers.delete(subscriber);
	}

	/**
	 * Notify all subscribers of the current state snapshot.
	 */
	private notifySubscribers(): void {
		const snapshot: TState = this.structure();

		for (const subscriber of this.subscribers) {
			subscriber.announce(snapshot);
		}
	}
}

export default State;
