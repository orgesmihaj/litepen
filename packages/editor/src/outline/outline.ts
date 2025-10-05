import type { ICatalogue } from 'contracts/outline/catalogue';
import type { IContent } from 'contracts/outline/content';
import type { IDesigner } from 'contracts/designer/designer';
import type { IOutline } from 'contracts/outline/outline';
import type { IState } from 'contracts/state/state';
import type { TBlueprint } from 'types/outline';
import type { TContent } from 'types/content';

/**
 * Define the outline of the editor's content.
 */
class Outline implements IOutline {
	/**
	 * Define content that can be part of the
	 * editor's outline.
	 */
	private readonly catalogue: ICatalogue;

	/**
	 * Modify the DOM of the editor.
	 */
	private readonly designer: IDesigner;

	/**
	 * Manage the state of the editor.
	 */
	private state: IState | undefined;

	constructor(blueprint: TBlueprint) {
		this.catalogue = blueprint.catalogue;
		this.designer = blueprint.designer;
	}

	/**
	 * Compose the outline from the state.
	 */
	compose(state: IState): void {
		this.state = state;

		if (this.state.isEmpty()) {
			const paragraph: IContent = this.catalogue.pick('paragraph');

			this.state.write(paragraph);
			this.define(paragraph);
			return;
		}

		this.state.structure().forEach((content: IContent): void => {
			this.define(content);
		});
	}

	/**
	 * Define a new piece of content and attach the listeners.
	 */
	define(content: IContent): void {
		const element: HTMLElement = this.designer.create(content);

		this.designer.on(element).onChange((revision: TContent) => {
			content.update(revision);
			this.state?.write(content);
		});
	}
}

export default Outline;
