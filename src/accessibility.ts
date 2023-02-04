import IAccessibility from '@contracts/accessibility';
import Settings from '@/settings';

/**
 * Make DOM elements accessible to screen readers.
 * */
class Accessibility implements IAccessibility {
	private readonly element = Settings.get('holder');

	/**
	 * Change the paragraph separator tag used when new
	 * paragraphs are created.
	 * */
	paragraphSeparator(tag: HTMLElement): void {
		const trailingLineBreak = document.createElement('br');

		tag.appendChild(trailingLineBreak);
		this.element.appendChild(tag);
	}
}

export default Accessibility;
