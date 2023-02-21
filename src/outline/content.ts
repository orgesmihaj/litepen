import IContent from '@contracts/outline/content';
import { TContentCatalogue } from 'types/catalogue';
import HContent from '@/helper/content';

/**
 * Operations that are common to both simple and complex
 * elements of the editor's content.
 */
abstract class Content implements IContent {
	/**
	 * Unique identifier of the content.
	 */
	readonly id: string = HContent.uniqueIdentifier();

	/**
	 * Type of the content. This is used to identify the
	 * content when it is added to the outline.
	 */
	readonly type: keyof TContentCatalogue = 'paragraph';

	/*
	 * Retrieve the DOM element that represents
	 * the content.
	 */
	abstract element(): HTMLElement;

	/**
	 * Determine whether the content is a composite
	 * of one or more pieces of content.
	 */
	isComposite(): boolean {
		return false;
	}

	/**
	 * Retrieve the content's structure.
	 */
	structure(): IContent[] {
		return [];
	}
}

export default Content;
