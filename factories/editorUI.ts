import IFactory from '@contracts/factory';
import IEditorUI from '@contracts/ui/editorUI';
import EditorUI from '@ui/editorUI';

class FEditorUI implements IFactory {
	assemble(): IEditorUI {
		return new EditorUI();
	}
}

export default FEditorUI;
