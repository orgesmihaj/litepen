import { describe, it, expect } from 'vitest';
import FOutline from '@factories/outline/outline';
import FState from '@factories/state';
import IContent from '@contracts/outline/content';
import IOutline from '@contracts/outline/outline';
import IState from '@contracts/state';

/**
 * 🔎Editor's State instance:
 *
 * - must have a default content.
 * - should be able to write a piece of content to the editor's state.
 */
describe(`Editor's State instance`, () => {
	const outline: IOutline = new FOutline().assemble();

	/**
	 * Create a new state instance and check if the state's structure
	 * contains a paragraph.
	 */
	it('must have a default content.', () => {
		const state: IState = new FState().assemble();
		const structure: Map<string, IContent> = state.structure();

		expect(structure.size).toBe(1);
	});

	/**
	 * Create a new state instance and write a paragraph to it.
	 * Then check if the state's structure contains the paragraph.
	 */
	it("should be able to write a piece of content to the editor's state.", () => {
		const state: IState = new FState().assemble();
		const paragraph: IContent = outline.define('paragraph');

		state.write(paragraph);

		expect(state.has(paragraph)).toBe(true);
	});
});
