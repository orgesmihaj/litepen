import IContent from '@contracts/outline/content';
import { TContentCatalogue } from 'types/catalogue';
import Content from '@/outline/content';

/**
 * Define a paragraph as part of the editor's content.
 */
class Paragraph extends Content {
	/**
	 * Type of the content. This is used to identify the
	 * content when it is added to the outline.
	 */
	readonly type: keyof TContentCatalogue = 'paragraph';

	/**
	 * Define the content's DOM element.
	 */
	element(): HTMLElement {
		return document.createElement('p');
	}

	/**
	 * Retrieve the content's structure.
	 */
	structure(): IContent[] {
		return [];
	}

	/**
	 * Add a trailing element to the content.
	 */
	trailingElement(): HTMLElement {
		return document.createElement('br');
	}
}

export default Paragraph;
