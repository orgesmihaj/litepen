import type { IMutation } from 'contracts/designer/mutation';

/**
 * The structure of the `Paragraph` in JSON format.
 */
export type TParagraph = {
	[text: string]: string;
};

/**
 * The structure of a piece of content.
 */
export type TContent = Map<string, string>;

export type TBlueprint = {
	mutation: IMutation
};
