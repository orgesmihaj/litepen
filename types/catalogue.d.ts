import IContent from '@contracts/outline/content';
import IFactory from '@contracts/factory';

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
