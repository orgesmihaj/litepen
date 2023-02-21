import IContent from '@contracts/outline/content';
import { TContentCatalogue } from 'types/catalogue';

/**
 * Define content that can be part of the editor's outline.
 */
interface ICatalogue {
	/**
	 * Pick a new piece of content from the catalogue.
	 */
	pick<ContentType extends keyof TContentCatalogue>(
		contentType: ContentType
	): IContent;
}

export default ICatalogue;
