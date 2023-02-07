/**
 * Accessibility helper.
 */
class HAccessibility {
	/**
	 * Check if the element has ARIA attributes.
	 */
	static hasARIA = (tag: HTMLElement): boolean => {
		const hasRole = tag.hasAttribute('role');
		const hasLabel = tag.hasAttribute('aria-label');
		const hasLabelledBy = tag.hasAttribute('aria-labelledby');
		const hasDescribedBy = tag.hasAttribute('aria-describedby');

		return hasRole || hasLabel || hasLabelledBy || hasDescribedBy;
	};

	/**
	 * Check if the element is a semantic tag.
	 */
	static hasSemanticTag = (tag: HTMLElement): boolean => {
		const semanticTags = [
			'a',
			'abbr',
			'address',
			'article',
			'aside',
			'b',
			'bdi',
			'bdo',
			'blockquote',
			'button',
			'caption',
			'cite',
			'code',
			'data',
			'dd',
			'del',
			'dfn',
			'details',
			'div',
			'dl',
			'dt',
			'em',
			'figcaption',
			'figure',
			'footer',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'header',
			'hgroup',
			'i',
			'ins',
			'kbd',
			'label',
			'legend',
			'li',
			'mark',
			'meter',
			'nav',
			'ol',
			'p',
			'pre',
			'progress',
			'q',
			'rp',
			'rt',
			'ruby',
			's',
			'samp',
			'section',
			'small',
			'strong',
			'sub',
			'summary',
			'sup',
			'table',
			'tbody',
			'td',
			'tfoot',
			'th',
			'thead',
			'time',
			'tr',
			'u',
			'ul',
			'var',
			'wbr',
		];

		return semanticTags.includes(tag.tagName.toLowerCase());
	};
}

export default HAccessibility;
