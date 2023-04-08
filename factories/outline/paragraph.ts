import IContent from "@contracts/outline/content";
import IFactory from "@contracts/factory";
import Paragraph from "@/outline/paragraph";

/**
 * Define a paragraph as part of the editor's
 * content.
 */
class FParagraph implements IFactory<IContent> {
	/**
	 * Assemble a new `Paragraph` instance.
	 */
	assemble(): IContent {
		return new Paragraph();
	}
}

export default FParagraph;
