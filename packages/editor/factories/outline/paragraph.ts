import Paragraph from '../../src/outline/paragraph';
import type { IFactory } from 'contracts/factory';
import type { IContent } from 'contracts/outline/content';

/**
 * Define a paragraph as part of the editor's
 * content.
 */
class FParagraph implements IFactory<IContent> {
	/**
	 * Assemble a new `Paragraph` instance.
	 */
	assemble(): IContent {
		// @ts-ignore
		return new Paragraph();
	}
}

export default FParagraph;
