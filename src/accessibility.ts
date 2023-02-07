import IAccessibility from '@contracts/accessibility';
import Settings from '@/settings';
import HAccessibility from '@/helper/accessability';

/**
 * Make DOM elements accessible to screen readers.
 * */
class Accessibility implements IAccessibility {
	private readonly element = Settings.get('holder');

	/**
	 * Change the paragraph separator tag used when new
	 * paragraphs are created.
	 */
	paragraphSeparator(tag: HTMLElement): void {
		const trailingLineBreak = document.createElement('br');

		tag.appendChild(trailingLineBreak);
		this.element.appendChild(tag);
	}

	/**
	 * Check if the element has semantic meaning.
	 */
	hasSemanticMeaning(tag: HTMLElement): boolean {
		return HAccessibility.hasARIA(tag) || HAccessibility.isSemanticTag(tag);
	}
}

export default Accessibility;
