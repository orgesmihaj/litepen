import { TContentCatalogue } from 'types/catalogue';

/**
 * The structure of the `Paragraph` in JSON format.
 */
export type TJsonParagraph = {
	text: string;
};

/**
 * The structure of the `Content` in JSON format.
 */
export type TJsonContent = {
	content: TJsonParagraph;
	id: string;
	type: keyof TContentCatalogue;
};
