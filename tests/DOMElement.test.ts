import { expect, describe, it } from 'vitest';
import Settings from '../src/settings/settings';
import DOMElement from '../src/ui/DOMElement';

describe('DOMElement object', () => {
	it('will query and return the DOM element specified in the settings.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new DOMElement(
			new Settings({ holder: document.querySelector('.composer') })
		);
		expect(element.paint()).not.toBeNull();
	});

	it('will throw an error if there is no holder element.', () => {
		const element = new DOMElement(
			new Settings({ holder: document.querySelector('.non-existing-element') })
		);
		expect(() => element.paint()).toThrowError();
	});

	/**
	 * Testing `identifyAs` method.
	 */

	it('can add an identifier to the element using data attribute.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new DOMElement(
			new Settings({ holder: document.querySelector('.composer') })
		);
		element.identifyAs('composer');
		expect(element.paint().getAttribute('data-composer')).toBe('composer');
	});

	/**
	 * Testing `isEditable` method.
	 */

	it('can make a DOM element editable by the user.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new DOMElement(
			new Settings({ holder: document.querySelector('.composer') })
		);
		element.isEditable();
		expect(element.paint().getAttribute('contenteditable')).toBe('true');
	});

	it('can make an existing editable DOM element to be not editable.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new DOMElement(
			new Settings({ holder: document.querySelector('.composer') })
		).isEditable();

		element.isEditable(false);
		expect(element.paint().getAttribute('contenteditable')).toBe('false');
	});

	it('will return the DOMElement object whenever the `isEditable` method is called.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new DOMElement(
			new Settings({ holder: document.querySelector('.composer') })
		);
		expect(element.isEditable()).toBe(element);
	});

	/**
	 * Testing `hasPlaceholder` method.
	 */

	it('will add a placeholder to the element if defined in the Settings object.', () => {
		document.body.innerHTML = `<div class="composer"></div>`;

		const element = new DOMElement(
			new Settings({
				holder: document.querySelector('.composer'),
				placeholder: 'Write something cool...',
			})
		).hasPlaceholder();

		expect(element.paint().getAttribute('placeholder')).toBe(
			'Write something cool...'
		);
	});

	it("will add a placeholder to the element if defined as an attribute to the holder (and will override the settings' placeholder).", () => {
		document.body.innerHTML = `<div class="composer" placeholder="Write something new ..."></div>`;

		const element = new DOMElement(
			new Settings({
				holder: document.querySelector('.composer'),
				placeholder: 'Write something cool...',
			})
		).hasPlaceholder();

		expect(element.paint().getAttribute('placeholder')).toBe(
			'Write something new ...'
		);
	});
});
