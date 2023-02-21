import ICatalogue from '@contracts/outline/catalogue';
import IContent from '@contracts/outline/content';
import IState from '@contracts/state';
import { TBlueprint } from 'types/state';

/**
 * Manage the state of the editor.
 */
class State implements IState {
	/**
	 * Define content that can be part of the editor's outline.
	 */
	private readonly catalogue: ICatalogue;

	/**
	 * The content that has been written to the state.
	 */
	private state: Map<string, IContent> = new Map();

	constructor(blueprint: TBlueprint) {
		this.catalogue = blueprint.catalogue;
	}

	/**
	 * Check whether the state contains the content.
	 */
	has(content: IContent): boolean {
		return this.state.has(content.id);
	}

	/**
	 * Return the content that has been written.
	 */
	structure(): Map<string, IContent> {
		if (this.state.size === 0) {
			this.write(this.catalogue.pick('paragraph'));
		}
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
