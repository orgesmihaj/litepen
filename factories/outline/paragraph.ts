import IContent from '@contracts/outline/content';
import IFactory from '@contracts/factory';
import { TBlueprint } from 'types/content';
import Paragraph from '@/outline/paragraph';

/**
 * Define a paragraph as part of the editor's
 * content.
 */
class FParagraph implements IFactory<IContent> {
	/**
	 * Assemble a new `Paragraph` instance.
	 */
	assemble(blueprint?: TBlueprint): IContent {
		return new Paragraph(blueprint);
	}
}

export default FParagraph;
