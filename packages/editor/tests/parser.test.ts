import { beforeEach, describe, expect, it } from 'vitest';

import type { ICatalogue } from 'contracts/outline/catalogue';
import type { IContent } from 'contracts/outline/content';
import type { IParser } from 'contracts/state/parser';
import type { IState } from 'contracts/state/state';
import FCatalogue from 'factories/outline/catalogue';
import FParser from 'factories/state/parser';
import FState from 'factories/state';
import type { TContent } from 'types/content';
import type { TJsonContent } from 'types/state/parser';
import type { TState } from 'types/state';

/**
 * 🔎Testing the `Parser` instance.
 */
describe('The Parser instance:', (): void => {
	const catalogue: ICatalogue = new FCatalogue().assemble();
	const parser: IParser = new FParser().assemble();
	const state: IState = new FState().assemble();

	beforeEach((): void => {
		state.clear();
	});

	/**
	 * Ensure that an empty state can be converted to JSON.
	 */
	it('should be able to convert an empty state to JSON.', (): void => {
		const structure: TState = state.structure();
		const document: Array<TJsonContent> = parser.toJson(structure);

		expect(document).toBeInstanceOf(Array);
		expect(document).toHaveLength(0);
	});

	/**
	 * Ensure that a converted state contains the correct properties.
	 */
	it('should contain the correct properties after converting to JSON.', (): void => {
		const paragraph: IContent = catalogue.pick('paragraph');

		state.write(paragraph);

		const structure: TState = state.structure();
		const document: Array<TJsonContent> = parser.toJson(structure);
		const section: TJsonContent = document[0];

		expect(document).toHaveLength(1);
		expect(section).toHaveProperty('id', paragraph.id);
		expect(section).toHaveProperty('type', paragraph.type);
		expect(section).toHaveProperty('content', {});
	});

	/**
	 * Ensure that a converted state contains the correct content.
	 */
	it('should contain the correct content after converting state to JSON.', (): void => {
		const paragraph: IContent = catalogue.pick('paragraph');
		const revision: TContent = new Map([['text', 'Hello, world!']]);

		paragraph.update(revision);
		state.write(paragraph);

		const structure: TState = state.structure();
		const document: Array<TJsonContent> = parser.toJson(structure);
		const section: TJsonContent = document[0];

		expect(section).toHaveProperty('content', {
			text: revision.get('text'),
		});
	});

	/**
	 * Ensure that multiple pieces of content can be converted to JSON.
	 */
	it('should be able to convert multiple pieces of content to JSON.', (): void => {
		const paragraphs: Array<IContent> = [
			catalogue.pick('paragraph'),
			catalogue.pick('paragraph'),
			catalogue.pick('paragraph'),
		];

		paragraphs.forEach((paragraph: IContent): void => {
			state.write(paragraph);
		});

		const structure: TState = state.structure();
		const document: Array<TJsonContent> = parser.toJson(structure);

		expect(document).toHaveLength(3);
	});
});
