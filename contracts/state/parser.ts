import IState from '@contracts/state/state';
import { TJsonContent } from 'types/state/parser';

/**
 * Parse state into different formats.
 */
interface IParser {
	/**
	 * Convert the state to HTML.
	 */
	toHTML(state: IState): any;

	/**
	 * Convert the state to JSON.
	 */
	toJson(state: IState): Array<TJsonContent>;

	/**
	 * Convert the state to a Map.
	 */
	toMap(state: IState): any;

	/**
	 * Convert the state to Markdown.
	 */
	toMarkdown(state: IState): any;
}

export default IParser;
