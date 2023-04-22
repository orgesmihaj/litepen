import IKeyboard from "@contracts/ui/keyboard";
import IListeners from "@contracts/listeners";
import { TBlueprint } from "types/designer/keyboard";
import { TListenerCallback } from "types/listeners";

/**
 * Handle keyboard-related events.
 * */
class Keyboard implements IKeyboard {
  /**
   * A map of listeners attached to the editor.
   * */
  private listeners: IListeners;

  constructor(blueprint: TBlueprint) {
	this.listeners = blueprint.listeners;
  }

  /**
   * Run a callback when the defined key is pressed.
   * */
  whenPressing(key: string, callback: TListenerCallback): void {
	this.listeners.subscribe('keydown', event => {
	  if ((event as KeyboardEvent).key === key) {
		callback(event);
	  }
	});
  }
}

export default Keyboard;
