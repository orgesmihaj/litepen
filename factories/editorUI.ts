import IFactory from '@contracts/factory';
import IEditorUI from '@contracts/editorUI';
import FKeyboard from '@factories/keyboard';
import FAccessibility from '@factories/accessability';
import { TBlueprint } from 'types/editorUI';
import EditorUI from '@/editorUI';

class FEditorUI implements IFactory {
	assemble(): IEditorUI {
		const blueprint: TBlueprint = {
			/**
			 * Make DOM elements accessible to screen readers.
			 */
			accessibility: new FAccessibility().assemble(),

			/**
			 * Handle keyboard-related events.
			 */
			keyboard: new FKeyboard().assemble(),
		};

		return EditorUI.getInstance(blueprint);
	}
}

export default FEditorUI;
