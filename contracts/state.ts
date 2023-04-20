import IContent from "@contracts/outline/content";
import IStateSubscriber from "@contracts/state/StateSubscriber";

/**
 * Manage the state of the editor.
 */
interface IState {
	/**
	 * Remove the content from the state.
	 */
	delete(content: IContent): void;
	
	/**
	 * Check whether the state contains the content.
	 */
	has(content: IContent): boolean;

	/**
	 * Check whether the state is empty.
	 */
	isEmpty(): boolean;

	/**
	 * Return the content that has been written.
	 */
	structure(): Map<string, IContent>;

	/**
	 * Subscribe to the state.
	 */
	subscribe(subscriber: IStateSubscriber): IStateSubscriber;

	/**
	 * Unsubscribe from the state.
	 */
	unsubscribe(subscriber: IStateSubscriber): void;

	/**
	 * Write the editor content to the state.
	 */
	write(content: IContent): void;
}

export default IState;
