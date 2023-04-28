import { TContentCatalogue } from 'types/catalogue';
import { TBlueprint, TParagraph } from 'types/content';
import Content from '@/outline/content';

/**
 * Define a paragraph as part of the editor's content.
 */
class Paragraph extends Content {
	protected content: TParagraph = {
		text: '',
	};

	/**
	 * Type of the content. This is used to identify the
	 * content when it is added to the outline.
	 */
	readonly type: keyof TContentCatalogue = 'paragraph';

	constructor(blueprint?: TBlueprint) {
		super(blueprint);

		this.content = blueprint?.content ?? this.content;
	}

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
	update(mutations: MutationRecord[]): void {
		mutations.forEach(mutation => {
			if (mutation.type === 'characterData') {
				this.content.text = mutation.target.textContent ?? '';
			}
		});
	}
}

export default Paragraph;
