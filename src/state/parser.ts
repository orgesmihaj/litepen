import IContent from '@contracts/outline/content';
import IParser from '@contracts/state/parser';
import { TJsonContent } from 'types/state/parser';
import { TState } from 'types/state';

/**
 * Parse state into different formats.
 */
class Parser implements IParser {
	/**
	 * Convert the `State` to HTML.
	 */
	toHTML(state: IState): any {
		console.log(state);
	}

	/**
	 * Convert the `State` to JSON.
	 */
	toJson(state: TState): Array<TJsonContent> {
		const document: Array<TJsonContent> = [];

		state.forEach((content: IContent): void => {
			const section: TJsonContent = {};

			section.id = content.id;
			section.type = content.type;
			section.content = Object.fromEntries(content.content);

			document.push(section);
		});

		return document;
	}
}

export default Parser;
