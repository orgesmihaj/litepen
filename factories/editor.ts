import FDesigner from '@factories/ui/designer';
import FOutline from '@factories/outline/outline';
import FState from '@factories/state';
import IEditor from '@contracts/editor';
import IFactory from '@contracts/factory';
import { TBlueprint } from 'types/editor';
import Editor from '@/editor';

class FEditor implements IFactory<IEditor> {
	assemble(): IEditor {
		const blueprint: TBlueprint = {
			/**
			 * Modify the DOM of the editor.
			 */
			designer: new FDesigner().assemble(),

			/**
			 * Define the outline of the editor's content.
			 */
			outline: new FOutline().assemble(),

			/**
			 * Manage the state of the editor.
			 */
			state: new FState().assemble(),
		};

		return new Editor(blueprint);
	}
}

export default FEditor;
