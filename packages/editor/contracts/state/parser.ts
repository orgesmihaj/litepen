import type { TState } from 'types/state';
import type { TJsonContent } from 'types/state/parser';

/**
 * Parse state into different formats.
 */
export interface IParser {
	/**
	 * Convert the state to the given format.
	 */
	convert(state: TState, mode: string): any;

	/**
	 * Convert the state to HTML.
	 */
	toHTML(state: TState): any;

	/**
	 * Convert the state to JSON.
	 */
	toJson(state: TState): Array<TJsonContent>;

	/**
	 * Convert the state to a Map.
	 */
	toMap(state: TState): any;
}
