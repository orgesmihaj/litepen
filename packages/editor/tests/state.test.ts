import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { ICatalogue } from 'contracts/outline/catalogue';
import type { IContent } from 'contracts/outline/content';
import type { IState } from 'contracts/state/state';
import type {
	IStateSubscriber
} from 'contracts/state/subscriber';
import FCatalogue from 'factories/outline/catalogue';
import FState from 'factories/state';
import type { TState } from 'types/state';

/**
 * 🔎
 */
describe('State', (): void => {
	let catalogue: ICatalogue;
	let state: IState;

	beforeEach((): void => {
		catalogue = new FCatalogue().assemble();
		state = new FState().assemble();
	});

	it(`initially should be empty`, (): void => {
		expect(state.isEmpty()).toBe(true);
		expect(state.structure().size).toBe(0);
	});

	it(`should write content and reflect in the structure`, (): void => {
		const content: IContent = catalogue.pick('paragraph');

		state.write(content);

		expect(state.isEmpty()).toBe(false);
		expect(state.has(content)).toBe(true);

		const snapshot: TState = state.structure();

		expect(snapshot.size).toBe(1);
		expect(snapshot.get(content.id)).toBe(content);
	});

	it(`should delete existing content`, (): void => {
		const content: IContent = catalogue.pick('paragraph');

		state.write(content);

		expect(state.has(content)).toBe(true);

		state.delete(content);

		expect(state.has(content)).toBe(false);
		expect(state.isEmpty()).toBe(true);
	});

	it(`should not fail when deleting non-existing content`, (): void => {
		const content: IContent = catalogue.pick('paragraph');

		expect((): void => state.delete(content)).not.toThrow();
		expect(state.isEmpty()).toBe(true);
	});

	it(`should clear the state`, (): void => {
		const content: IContent = catalogue.pick('paragraph');

		state.write(content);

		expect(state.isEmpty()).toBe(false);

		state.clear();

		expect(state.isEmpty()).toBe(true);
		expect(state.structure().size).toBe(0);
	});

	it(`should notify subscribers on state changes`, (): void => {
		const subscriber: IStateSubscriber = { announce: vi.fn() };
		const content: IContent = catalogue.pick('paragraph');

		state.subscribe(subscriber);
		state.write(content);

		expect(subscriber.announce).toHaveBeenCalledTimes(1);
	});

	it(`should stop notifying unsubscribed subscribers`, (): void => {
		const editor: IStateSubscriber = { announce: vi.fn() };
		const parser: IStateSubscriber = { announce: vi.fn() };

		state.subscribe(editor);
		state.subscribe(parser);

		const content: IContent = catalogue.pick('paragraph');

		state.write(content);

		expect(editor.announce).toHaveBeenCalledTimes(1);
		expect(parser.announce).toHaveBeenCalledTimes(1);

		state.unsubscribe(parser);

		const newContent: IContent = catalogue.pick('paragraph');

		state.write(newContent);

		expect(editor.announce).toHaveBeenCalledTimes(2);
		expect(parser.announce).toHaveBeenCalledTimes(1);
	});
});
