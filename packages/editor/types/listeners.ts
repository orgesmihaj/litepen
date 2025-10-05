/**
 * Define the structure of the map that holds
 * the listeners attached to the editor.
 * */
export type TListeners = Map<string, TListenerCallback>;

/**
 * Define the type of the callback function
 * attached to a listener.
 * */
export type TListenerCallback = (event: Event) => void;
