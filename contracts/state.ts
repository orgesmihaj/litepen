import IContent from "@contracts/outline/content";

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
	 * Write the editor content to the state.
	 */
	write(content: IContent): void;
}

export default IState;
