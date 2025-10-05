import Settings from '@/settings';
import type { IEditor } from 'contracts/editor';
import FEditor from 'factories/editor';
import { describe, expect, it } from 'vitest';

/**
 * 🔎
 */
describe('Editor', (): void => {
	const editor: IEditor = new FEditor().assemble();

	it('should be able to set the editor as editable', (): void => {
		editor.editable(Settings.get('editable'));

		expect(editor.isEditable()).toBe(Settings.get('editable'));
	});
	
	it('should be able to set a placeholder', (): void => {
		editor.setPlaceholder(Settings.get('placeholder'));

		expect(editor.placeholder()).toBe(Settings.get('placeholder'));
	});
});
