import { describe, it, expect } from 'vitest';
import FCatalogue from '@factories/outline/catalogue';
import FEditorUI from '@factories/editorUI';
import ICatalogue from '@contracts/outline/catalogue';
import IContent from '@contracts/outline/content';
import IEditorUI from '@contracts/editorUI';
import HEditorUI from '@/helper/editorUI';
import Settings from '@/settings';

/**
 * 🔎Editor's UI modification instance:
 *
 * - should be able to attach an identifier to the element
 * - should be able to attach the content element to the editor's DOM.
 * - should be able to build the editor's DOM.
 * - should be able to make the element editable or read-only.
 * - should be able to remove the placeholder set to the element.
 * - should be able to set a placeholder for the element using Editor's settings.
 * - should be able to set a placeholder for the element using an HTML attribute.
 *
 */
describe("Editor's UI modification instance", () => {
	const editorUI: IEditorUI = new FEditorUI().assemble();
	const catalogue: ICatalogue = new FCatalogue().assemble();

	/**
	 * Ensure that the Editor can be found in the DOM by using
	 * a data attribute as an identifier.
	 */
	it('should be able to attach an identifier to the element', () => {
		editorUI.identifyAs('editor');

		expect(editorUI.element.getAttribute('data-editor')).toBe('editor');
	});

	/**
	 * Make sure the content element is attached to the editor's DOM.
	 */
	it("should be able to attach the content element to the editor's DOM.", () => {
		const paragraph: IContent = catalogue.pick('paragraph');

		editorUI.attach(paragraph);

		expect(editorUI.element).toContain(paragraph.element());
	});

	/**
	 * Build the editor's DOM.
	 */
	it("should be able to build the editor's DOM.", () => {
		editorUI.build();

		expect(editorUI.element).toBeInstanceOf(HTMLElement);
	});

	/**
	 * Make sure that users can make the element editable or read-only.
	 */
	it('should be able to make the element editable or read-only.', () => {
		HEditorUI.dummyComposer();

		Settings.use({
			holder: document.querySelector('.composer') as HTMLElement,
		});

		editorUI.build();
		editorUI.editable();

		expect(editorUI.element.getAttribute('contenteditable')).toBe('true');

		editorUI.editable(false);

		expect(editorUI.element.getAttribute('contenteditable')).toBe('false');
	});

	/**
	 * Make sure that users can remove the placeholder set to the element
	 * by passing the `false` argument to the `placeholder` method.
	 */
	it('should be able to remove the placeholder set to the element.', () => {
		HEditorUI.dummyComposer({
			'data-placeholder': 'Write something...',
		});

		Settings.use({
			holder: document.querySelector('.composer') as HTMLElement,
		});

		editorUI.build();
		editorUI.placeholder(false);

		expect(editorUI.element.hasAttribute('data-placeholder')).toBe(false);
	});

	/**
	 * Make sure that users can set a placeholder for the element
	 * by using the settings.
	 */
	it("should be able to set a placeholder for the element using Editor's settings.", () => {
		HEditorUI.dummyComposer();

		Settings.use({
			holder: document.querySelector('.composer') as HTMLElement,
			placeholder: 'Write something...',
		});

		editorUI.build();

		expect(editorUI.element.getAttribute('data-placeholder')).toBe(
			'Write something...'
		);
	});

	/**
	 * Make sure that users can set a placeholder for the element
	 * by using the `data-placeholder` attribute.
	 */
	it('should be able to set a placeholder for the element using an HTML attribute.', () => {
		HEditorUI.dummyComposer({
			'data-placeholder': 'Write something...',
		});

		Settings.use({
			holder: document.querySelector('.composer') as HTMLElement,
		});

		editorUI.build();

		expect(editorUI.element.getAttribute('data-placeholder')).toBe(
			'Write something...'
		);
	});
});
