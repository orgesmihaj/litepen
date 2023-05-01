import IContent from '@contracts/outline/content';

/**
 * The structure of a piece of content.
 */
export type TContent = Map<string, any>;

/**
 * The structure of a content constructor.
 */
export type TContentConstructor = new (blueprint: TBlueprint) => IContent;

/**
 * The structure of the blueprint that can be used
 * to assemble a new piece of content.
 */
export type TBlueprint = {
	content: TContent;
	id: string;
};
