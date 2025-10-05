import type { IListeners } from "contracts/listeners";

/**
 * The dependencies of the `Keyboard` instance.
 */
export type TBlueprint = {
	/**
	 * A subscription mechanism to the editor's events.
	 */
	listeners: IListeners;
};
