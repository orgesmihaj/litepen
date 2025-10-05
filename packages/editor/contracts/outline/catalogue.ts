import type { IContent } from 'contracts/outline/content';
import type { TContentCatalogue } from 'types/catalogue';
import type { TBlueprint } from 'types/content';

/**
 * Define content that can be part of the
 * editor's outline.
 */
export interface ICatalogue {
	/**
	 * Pick a new piece of content from the catalogue.
	 */
	pick<TCategory extends keyof TContentCatalogue>(
		category: TCategory,
		blueprint?: TBlueprint,
	): IContent;
}
