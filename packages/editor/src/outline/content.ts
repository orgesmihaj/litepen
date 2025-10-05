import type { IContent } from 'contracts/outline/content';

import type { TContentCatalogue } from 'types/catalogue';
import type { TContent } from 'types/content';


/**
 * Operations that are common to both simple and complex
 * elements of the editor's content.
 */
// @ts-ignore
abstract class Content implements IContent {

	/**
	 * Unique identifier of the content.
	 */
	readonly id: string = Date.now().toString() + '-' + Math.random().toString(16).slice(2);

	/**
	 * Type of the content as defined in the
	 * content catalogue.
	 */
	readonly type: keyof TContentCatalogue = 'paragraph';

	/*
	 * The DOM element that represents the content.
	 */
	abstract element(): HTMLElement;

	/**
	 * Update the content.
	 */
	abstract update(revision: TContent): void;
}

export default Content;
