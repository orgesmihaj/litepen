import Editor from '../src/editor';
import type { IEditor } from 'contracts/editor';
import type { IFactory } from 'contracts/factory';
import FState from '../factories/state';
import FKeyboard from '../factories/designer/keyboard';
import FMutation from '../factories/designer/mutation';
import FCatalogue from '../factories/outline/catalogue';
import type { TBlueprint } from 'types/editor';

class FEditor implements IFactory<IEditor> {
	/**
	 * Assemble a new `Editor` instance.
	 */
	assemble(): IEditor {
		const blueprint: TBlueprint = {
			state: new FState().assemble(),
			mutation: new FMutation().assemble(),
			catalogue: new FCatalogue().assemble(),
			keyboard: new FKeyboard().assemble()
		};

		return new Editor(blueprint);
	}
}

export default FEditor;
