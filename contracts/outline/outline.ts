import IContent from '@contracts/outline/content';
import IState from '@contracts/state';

/**
 * Define the outline of the editor's content.
 */
interface IOutline {
	/**
	 * Compose the outline from the state.
	 */
	compose(state: IState): void;

	/**
	 * Add the content to the editor's outline.
	 */
	define(content: IContent): void;
}

export default IOutline;
