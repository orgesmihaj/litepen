import IContent from '@contracts/outline/content';
import IState from '@contracts/state/state';
import IStateSubscriber from '@contracts/state/subscriber';
import { TState } from 'types/state';

/**
 * Manage the state of the editor.
 */
class State implements IState {
	/**
	 * The content that has been written to the state.
	 */
	private state: TState = new Map();

	/**
	 * The subscribers that are listening to the state.
	 */
	private subscribers: Set<IStateSubscriber> = new Set();

	/**
	 * Clear the state.
	 */
	clear(): void {
		this.state.clear();
	}

	/**
	 * Remove the content from the state.
	 */
	delete(content: IContent): void {
		this.state.delete(content.id);
	}

	/**
	 * Check whether the state contains the content.
	 */
	has(content: IContent): boolean {
		return this.state.has(content.id);
	}

	/**
	 * Check whether the state is empty.
	 */
	isEmpty(): boolean {
		return this.state.size === 0;
	}

	/**
	 * Return the content that has been written.
	 */
	structure(): TState {
		return this.state;
	}

	/**
	 * Subscribe to the state.
	 */
	subscribe(subscriber: IStateSubscriber): IStateSubscriber {
		this.subscribers.add(subscriber);

		return subscriber;
	}

	/**
	 * Unsubscribe from the state.
	 */
	unsubscribe(subscriber: IStateSubscriber): void {
		this.subscribers.delete(subscriber);
	}

	/**
	 * Write a piece of content to the state.
	 */
	write(content: IContent): void {
		this.state.set(content.id, content.copy());

		this.subscribers.forEach((subscriber: IStateSubscriber) => {
			subscriber.onUpdate(this.state);
		});
	}
}

export default State;
