import type { IContent } from 'contracts/outline/content';
import type { IState } from 'contracts/state/state';

/**
 * Define the outline of the editor's content.
 */
export interface IOutline {
	/**
	 * Compose the outline from the state.
	 */
	compose(state: IState): void;

	/**
	 * Add the content to the editor's outline.
	 */
	define(content: IContent): void;
}
