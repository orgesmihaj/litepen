import IFactory from '@contracts/factory';
import IContent from '@contracts/outline/content';
import Paragraph from '@/outline/paragraph';

/**
 * Define a paragraph as part of the editor's
 * content.
 */
class FParagraph implements IFactory<IContent> {
	/**
	 * Instantiate a new paragraph.
	 */
	assemble(): IContent {
		return new Paragraph();
	}
}

export default FParagraph;
