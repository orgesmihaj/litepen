import IFactory from '@contracts/factory';
import FEditorUI from '@factories/editorUI';
import ISelection from '@contracts/selection';
import Selection from '@/selection';

class FSelection implements IFactory {
	assemble(): ISelection {
		return new Selection(new FEditorUI().assemble());
	}
}

export default FSelection;
