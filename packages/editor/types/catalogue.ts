import type { IFactory } from 'contracts/factory';
import type { IContent } from 'contracts/outline/content';

/**
 * The signature of each content in the content
 * catalogue.
 */
export type TContentCatalogue = {
	/**
	 * Define a paragraph as part of the editor's content.
	 */
	paragraph: IFactory<IContent>;
};
