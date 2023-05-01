import ICatalogue from '@contracts/outline/catalogue';
import IContent from '@contracts/outline/content';
import FParagraph from '@factories/outline/paragraph';
import { TBlueprint } from 'types/content';
import { TContentCatalogue } from 'types/catalogue';

/**
 * Define content that can be part of the
 * editor's outline.
 */
class Catalogue implements ICatalogue {
	/**
	 * A list of content that can be used in the outline.
	 */
	private readonly catalogue: TContentCatalogue = {
		paragraph: new FParagraph(),
	};

	/**
	 * Pick a new piece of content from the catalogue.
	 */
	pick<TCategory extends keyof TContentCatalogue>(
		category: TCategory,
		blueprint?: TBlueprint
	): IContent {
		return this.catalogue[category].assemble(blueprint);
	}
}

export default Catalogue;
