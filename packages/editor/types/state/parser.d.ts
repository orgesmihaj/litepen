import { TContentCatalogue } from '../catalogue';
import { TParagraph } from '../content';

/**
 * The structure of the parsing format.
 */
export type TFormat = 'html' | 'json';

/**
 * The structure of the `Content` in JSON format.
 */
export type TJsonContent = {
	content: TParagraph;
	id: string;
	type: keyof TContentCatalogue;
};
