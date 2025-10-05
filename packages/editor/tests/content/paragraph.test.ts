import type { ICatalogue } from 'contracts/outline/catalogue';
import type { IContent } from 'contracts/outline/content';
import FCatalogue from 'factories/outline/catalogue';

import { describe, expect, it } from 'vitest';

/**
 * 🔎
 */
describe('Paragraph', () => {
	const catalogue: ICatalogue = new FCatalogue().assemble();
	const paragraph: IContent = catalogue.pick('paragraph');

	it('should be of type paragraph.', (): void => {
		expect(paragraph.type).toBe('paragraph');
	});

	it('should initialize with a default state.', (): void => {
		expect(paragraph.get()).toEqual(new Map().set("text", ""));
	});

	it('should contain a paragraph element with a trailing break element.', (): void => {
		const element: HTMLElement = paragraph.element();

		expect(element.tagName).toBe('P');
		expect(element.childNodes.length).toBe(1);
		expect(element.childNodes[0].nodeName).toBe('BR');
	});
});