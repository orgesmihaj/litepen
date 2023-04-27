import IContent from '@contracts/outline/content';
import { TBlueprint } from 'types/content';
import { TContentCatalogue } from 'types/catalogue';

/**
 * Define content that can be part of the
 * editor's outline.
 */
interface ICatalogue {
	/**
	 * Pick a new piece of content from the catalogue.
	 */
	pick<TCategory extends keyof TContentCatalogue>(
		category: TCategory,
		blueprint?: TBlueprint
	): IContent;
}

export default ICatalogue;
