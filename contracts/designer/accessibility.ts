/**
 * Make DOM elements accessible to screen readers.
 */
interface IAccessibility {
	/**
	 * Check if the element has semantic meaning.
	 */
	hasSemanticMeaning: (tag: HTMLElement) => boolean;

	/**
	 * Change the paragraph separator tag used when new
	 * paragraphs are created.
	 */
	paragraphSeparator: (tag: HTMLElement) => void;
}

export default IAccessibility;
