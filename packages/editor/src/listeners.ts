import type { IListeners } from 'contracts/listeners';
import type { TListenerCallback, TListeners } from 'types/listeners';
import Settings from './settings';

/**
 * A subscription mechanism to the editor's events.
 */
class Listeners implements IListeners {
	/**
	 * The element to attach listeners to.
	 */
	private element: HTMLElement | Element = Settings.get('holder');

	/**
	 * The singleton instance of the Listeners class.
	 */
	private static instance: Listeners;

	/**
	 * A map of listeners attached to the editor.
	 */
	private listeners: TListeners = new Map();

	/**
	 * Get the singleton instance of the Listeners class.
	 */
	static getInstance(): IListeners {
		if (!Listeners.instance) {
			Listeners.instance = new Listeners();
		}
		return Listeners.instance;
	}

	/**
	 * Detach all listeners.
	 */
	detach(): void {
		this.listeners.forEach((callback: TListenerCallback, event: string) => {
			this.element?.removeEventListener(event, callback);
			this.listeners.delete(event);
		});
	}

	/**
	 * Set the element to attach listeners to.
	 */
	on(element: HTMLElement | Element): this {
		this.element = element;
		return this;
	}

	/**
	 * Subscribe to a listener.
	 */
	subscribe(event: string, callback: TListenerCallback): void {
		if (this.listeners.has(event)) {
			this.unsubscribe(event);
		}
		this.listeners.set(event, callback);
		this.element?.addEventListener(event, callback);
	}

	/**
	 * Unsubscribe from a listener.
	 */
	unsubscribe(event: string): void {
		if (!this.listeners.has(event)) {
			return;
		}
		const callback = this.listeners.get(event) as TListenerCallback;

		this.element?.removeEventListener(event, callback);
		this.listeners.delete(event);
	}
}

export default Listeners;
