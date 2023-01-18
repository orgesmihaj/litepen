import { TListenerCallback } from 'types/listeners';

/**
 * A subscription mechanism to the editor's events.
 * */
interface IListeners {
	/**
	 * Subscribe to a listener.
	 * */
	subscribe: (event: string, callback: TListenerCallback) => void;

	/**
	 * Unsubscribe from a listener.
	 * */
	unsubscribe: (event: string) => void;

	/**
	 * Detach all listeners.
	 * */
	detach: () => void;
}

export default IListeners;
