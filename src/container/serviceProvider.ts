import IContainer from '../contracts/container/container';
import ISettings from '../contracts/settings/settings';
import TSettings from '../types/settings';
import Settings from '../settings/settings';
import IDOMElement from '../contracts/ui/DOMElement';
import DOMElement from '../ui/DOMElement';
import Editor from '../editor';

class ServiceProvider {
	readonly container: IContainer;

	constructor(container: IContainer) {
		this.container = container;
	}

	/**
	 * @param  {TSettings} settings
	 * @returns void
	 */
	boot(settings: TSettings): void {
		this.container.register<ISettings>(Settings, () => new Settings(settings));

		this.container.register<IDOMElement>(
			DOMElement,
			() => new DOMElement(this.container.compose(Settings))
		);

		this.container.register<Editor>(
			Editor,
			() => new Editor(this.container.compose(DOMElement))
		);
	}
}

export default ServiceProvider;
