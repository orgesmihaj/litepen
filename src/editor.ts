import IDesigner from '@contracts/ui/designer';
import IEditor from '@contracts/editor';
import IOutline from '@contracts/outline/outline';
import IState from '@contracts/state';
import { TBlueprint } from 'types/editor';
import Settings from '@/settings';

class Editor implements IEditor {
	/**
	 * Modify the DOM of the editor.
	 */
	private readonly designer: IDesigner;

	/**
	 * Define the outline of the editor's content.
	 */
	private readonly outline: IOutline;

	/**
	 * Manage the state of the editor.
	 */
	private readonly state: IState;

	constructor(blueprint: TBlueprint) {
		this.designer = blueprint.designer;
		this.outline = blueprint.outline;
		this.state = blueprint.state;
	}

	/**
	 * Bootstrap the editor.
	 */
	ignite(): void {
		this.designer
			.on(Settings.get('holder'))
			.identifyAs('editor')
			.editable(Settings.get('editable'))
			.placeholder(Settings.get('placeholder'));

		this.outline.compose(this.state);
	}
}

export default Editor;
