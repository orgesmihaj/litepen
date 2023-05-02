import IDesigner from '@contracts/designer/designer';
import IEditor from '@contracts/editor';
import IOutline from '@contracts/outline/outline';
import IState from '@contracts/state';
import IStateSubscriber from '@contracts/state/subscriber';
import { TBlueprint } from 'types/editor';
import { TState } from 'types/state';
import Settings from '@/settings';

class Editor implements IEditor, IStateSubscriber {
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

		this.state.subscribe(this);
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

	/**
	 * When the state is updated, this method is called.
	 */
	onUpdate(state: TState): void {
		Settings.get('onUpdate')?.(state);
	}
}

export default Editor;
