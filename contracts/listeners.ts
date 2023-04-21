import { TListenerCallback } from 'types/listeners';

/**
 * A subscription mechanism to the editor's events.
 */
interface IListeners {
	/**
	 * Detach all listeners.
	 */
	detach(): void;

	/**
	 * Set the element to attach listeners to.
	 */
	on(element: HTMLElement | Element): this;

	/**
	 * Subscribe to a listener.
	 */
	subscribe(event: string, callback: TListenerCallback): void;

	/**
	 * Unsubscribe from a listener.
	 */
	unsubscribe(event: string): void;
}

export default IListeners;
