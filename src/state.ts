import IContent from "@contracts/outline/content";
import IState from "@contracts/state";

/**
 * Manage the state of the editor.
 */
class State implements IState {
	/**
	 * The content that has been written to the state.
	 */
	private state: Map<string, IContent> = new Map();

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
	structure(): Map<string, IContent> {
		return this.state;
	}

	/**
	 * Write a piece of content to the state.
	 */
	write(content: IContent): void {
		this.state.set(content.id, content);
	}
}

export default State;
