import { TContent } from 'types/content';
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
	 * Add a trailing element to the content.
	 */
	trailingElement(): HTMLElement {
		return document.createElement('br');
	}

	/**
	 * Update the content.
	 */
	update(revision: TContent): void {
		this.content.set('text', revision.text);
	}
}

export default Paragraph;
