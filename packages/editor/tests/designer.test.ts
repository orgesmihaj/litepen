import Settings from '@/settings';
import type { IDesigner } from 'contracts/designer/designer';
import FDesigner from 'factories/designer/designer';

import { describe, expect, it } from 'vitest';

/**
 * 🔎
 */
describe('Designer', () => {
	const designer: IDesigner = new FDesigner().assemble();

	/**
	 * Ensure that the Editor can be found in the DOM by using
	 * a data attribute as an identifier.
	 */
	it('should be able to give a name to the editor.', () => {
		const editor: Element = Settings.get('holder');

		designer.identifyAs('editor');

		expect(editor.getAttribute('data-editor')).toBe('editor');
	});
});
