import IEditorUI from '@contracts/editorUI';
import IFactory from '@contracts/factory';
import FAccessibility from '@factories/accessability';
import FKeyboard from '@factories/keyboard';
import { TBlueprint } from 'types/editorUI';
import EditorUI from '@/editorUI';

class FEditorUI implements IFactory<IEditorUI> {
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
