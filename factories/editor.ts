import IFactory from '@contracts/factory';
import IEditor from '@contracts/editor';
import FEditorUI from '@factories/editorUI';
import FMutation from '@factories/mutation';
import Editor from '@/editor';

class FEditor implements IFactory {
	assemble(): IEditor {
		return new Editor(new FEditorUI().assemble(), new FMutation().assemble());
	}
}

export default FEditor;
