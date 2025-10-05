import Content from '../outline/content';

/**
 * Define a paragraph as part of the editor's content.
 */
class Paragraph extends Content {

	/**
	 * Define the content's DOM element.
	 */
	element(): HTMLElement {
		const paragraph: HTMLElement = document.createElement('p');

		paragraph.setAttribute(`data-content-id`, this.id);
		paragraph.appendChild(this.trailingElement());

		return paragraph;
	}

	/**
	 * Add a trailing element to the content.
	 *
	 * @note The trailing element is necessary because without it, an empty
	 * 			 contenteditable element may not have a visual representation,
	 * 			 leading to difficulties in formatting and editing.
	 */
	trailingElement(): HTMLElement {
		return document.createElement('br');
	}

	/**
	 * Update the content.
	 */
	update(): void {
		// this.content.set('text', content.get('text') || '');
		//
		// return this;
	}
}

export default Paragraph;
