import { describe, it, expect } from 'vitest';
import ICatalogue from '@contracts/outline/catalogue';
import IContent from '@contracts/outline/content';
import IState from '@contracts/state/state';
import FCatalogue from '@factories/outline/catalogue';
import FState from '@factories/state';

/**
 * 🔎 Testing the `State` instance.
 */
describe(`The State instance`, (): void => {
	const catalogue: ICatalogue = new FCatalogue().assemble();

	/**
	 * Writing a new paragraph to the state.
	 */
	it('can write content to the state.', (): void => {
		const state: IState = new FState().assemble();
		const paragraph: IContent = catalogue.pick('paragraph');

		state.write(paragraph);

		expect(state.has(paragraph)).toBe(true);
	});

	/**
	 * Deleting a paragraph from the state.
	 */
	it('can delete content from the state.', (): void => {
		const state: IState = new FState().assemble();
		const paragraph: IContent = catalogue.pick('paragraph');

		state.write(paragraph);
		state.delete(paragraph);

		expect(state.has(paragraph)).toBe(false);
	});

	/**
	 * Checking whether the state is empty.
	 */
	it('can check whether the state is empty.', (): void => {
		const state: IState = new FState().assemble();

		expect(state.isEmpty()).toBe(true);
	});

	/**
	 * Checking whether the state is not empty.
	 */
	it('can check whether the state is not empty.', (): void => {
		const state: IState = new FState().assemble();
		const paragraph: IContent = catalogue.pick('paragraph');

		state.write(paragraph);

		expect(state.isEmpty()).toBe(false);
	});

	/**
	 * Checking whether the state contains a piece of content.
	 */
	it('can check whether the state contains a piece of content.', (): void => {
		const state: IState = new FState().assemble();
		const paragraph: IContent = catalogue.pick('paragraph');

		state.write(paragraph);

		expect(state.has(paragraph)).toBe(true);
	});

	/**
	 * Returning the content that has been written.
	 */
	it('can return the content that has been written.', (): void => {
		const state: IState = new FState().assemble();
		const paragraph: IContent = catalogue.pick('paragraph');

		state.write(paragraph);

		expect(state.structure()).toEqual(new Map().set(paragraph.id, paragraph));
	});
});
