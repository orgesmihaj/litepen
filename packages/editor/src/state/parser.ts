import type { IContent } from 'contracts/outline/content';
import type { IParser } from 'contracts/state/parser';
import type { TJsonContent } from 'types/state/parser';
import type { TState } from 'types/state';

/**
 * Parse state into different formats.
 */
class Parser implements IParser {
	/**
	 * Convert the state to the given format.
	 */
	convert(state: TState, format: string): any {
		if (format === 'html') {
			return this.toHTML(state);
		}
		return this.toJson(state);
	}

	/**
	 * Convert the `State` to HTML.
	 */
	toHTML(state: TState): any {
		console.log(state);
	}

	/**
	 * Convert the `State` to JSON.
	 */
	toJson(state: TState): Array<TJsonContent> {
		const document: Array<TJsonContent> = [];

		state.forEach((content: IContent): void => {
			const section: TJsonContent = {
				id: content.id,
				type: content.type,
				content: Object.fromEntries(content.get()),
			};

			document.push(section);
		});

		return document;
	}

	/**
	 * Convert the `State` to HTML.
	 */
	toMap(state: TState): any {
		console.log(state);
	}
}

export default Parser;
