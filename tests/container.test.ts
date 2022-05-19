import { expect, describe, it } from 'vitest';
import Container from '../src/container/container';
import Settings from '../src/settings/settings';
import ISettings from '../src/contracts/settings/settings';

describe('Container object', () => {
	document.body.innerHTML = `<div class="composer"></div>`;
	const holder = document.querySelector('.composer');

	it('will register a Settings object in the container.', () => {
		const container = new Container();

		container.register<ISettings>(Settings, () => new Settings({ holder }));

		expect(container.compose(Settings)).toBeInstanceOf(Settings);
	});
});
