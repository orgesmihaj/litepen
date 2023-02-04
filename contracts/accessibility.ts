/**
 * Make DOM elements accessible to screen readers.
 * */
interface IAccessibility {
	/**
	 * Change the paragraph separator tag used when new
	 * paragraphs are created.
	 * */
	paragraphSeparator: (tag: HTMLElement) => void;
}

export default IAccessibility;
