import IListeners from '@contracts/listeners';
import { TSettings } from 'types/settings';
import { TListenerCallback, TListeners } from 'types/listeners';
import Settings from '@/settings';

/**
 * A subscription mechanism to the editor's events.
 * */
class Listeners implements IListeners {
	/**
	 * A map of listeners attached to the editor.
	 * */
	private listeners: TListeners = new Map();

	/**
	 * The singleton instance.
	 * */
	private static instance: Listeners;

	private readonly element: TSettings['holder'];

	private constructor() {
		this.element = Settings.get('holder');
	}

	/**
	 * Control access to the singleton instance.
	 * */
	static getInstance(): IListeners {
		if (!Listeners.instance) {
			Listeners.instance = new Listeners();
		}
		return Listeners.instance;
	}

	/**
	 * Subscribe to a listener.
	 * */
	subscribe(event: string, callback: TListenerCallback): void {
		if (this.listeners.has(event)) {
			this.unsubscribe(event);
		}
		this.listeners.set(event, callback);
		this.element?.addEventListener(event, callback);
	}

	/**
	 * Unsubscribe from a listener.
	 * */
	unsubscribe(event: string): void {
		if (!this.listeners.has(event)) {
			return;
		}
		const callback = this.listeners.get(event) as TListenerCallback;

		this.element?.removeEventListener(event, callback);
		this.listeners.delete(event);
	}

	/**
	 * Detach all listeners.
	 * */
	detach(): void {
		this.listeners.forEach((callback, event) => {
			this.element?.removeEventListener(event, callback);
			this.listeners.delete(event);
		});
	}
}

export default Listeners;
