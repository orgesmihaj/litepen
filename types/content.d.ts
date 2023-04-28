import IContent from '@contracts/outline/content';

/**
 * The structure of a paragraph.
 */
export type TParagraph = {
	text: string;
};

/**
 * The structure of a content.
 */
export type TContent = TParagraph;

/**
 * The structure of a content constructor.
 */
export type TContentConstructor = new (blueprint?: TBlueprint) => IContent;

/**
 * The structure of the blueprint that can be used
 * to assemble a new piece of content.
 */
export type TBlueprint = {
	content?: TContent;
	id?: string;
};
