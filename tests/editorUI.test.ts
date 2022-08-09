import { expect, describe, it } from 'vitest';
import EditorUI from '../src/ui/editorUI';
import Settings from '../src/settings';

describe('EditorUI object', () => {
	it('will query and return the DOM element specified in the settings.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new EditorUI(
			new Settings({ holder: document.querySelector('.composer') })
		);
		expect(element.paint()).not.toBeNull();
	});

	it('will throw an error if there is no holder element.', () => {
		const element = new EditorUI(
			new Settings({ holder: document.querySelector('.non-existing-element') })
		);
		expect(() => element.paint()).toThrowError();
	});

	it('can add an identifier to the element using data attribute.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new EditorUI(
			new Settings({ holder: document.querySelector('.composer') })
		);
		element.identifyAs('composer');
		expect(element.paint().getAttribute('data-composer')).toBe('composer');
	});

	it('can make a DOM element editable.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new EditorUI(
			new Settings({ holder: document.querySelector('.composer') })
		);
		element.editable();
		expect(element.paint().getAttribute('contenteditable')).toBe('true');
	});

	it('can make an existing editable DOM element to be not editable.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new EditorUI(
			new Settings({ holder: document.querySelector('.composer') })
		).editable();

		element.editable(false);
		expect(element.paint().getAttribute('contenteditable')).toBe('false');
	});

	it('will return the EditorUI object whenever the `isEditable` method is called.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new EditorUI(
			new Settings({ holder: document.querySelector('.composer') })
		);
		expect(element.editable()).toBe(element);
	});

	it('will add a placeholder to the element if defined in the Settings object.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new EditorUI(
			new Settings({
				holder: document.querySelector('.composer'),
				placeholder: 'Write something cool...',
			})
		).placeholder();

		expect(element.paint().getAttribute('placeholder')).toBe(
			'Write something cool...'
		);
	});

	it("will add a placeholder to the element if defined as an attribute to the holder (and will override the settings' placeholder).", () => {
		document.body.innerHTML = `<div class="composer" placeholder="Write something new ..."></div>`;

		const element = new EditorUI(
			new Settings({
				holder: document.querySelector('.composer'),
				placeholder: 'Write something cool...',
			})
		).placeholder();

		expect(element.paint().getAttribute('placeholder')).toBe(
			'Write something new ...'
		);
	});
});
