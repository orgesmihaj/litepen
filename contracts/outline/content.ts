import { TContentCatalogue } from 'types/catalogue';

/**
 * Operations that are common to both simple
 * and complex elements of the editor's content.
 */
interface IContent {
  /**
   * Unique identifier of the content.
   */
  readonly id: string;

  /**
   * Type of the content as defined in the
   * content catalogue.
   */
  readonly type: keyof TContentCatalogue;

  /**
   * Add a piece of content to the editor's state.
   */
  add?(content: IContent): void;

  /**
   * Define the content's DOM element.
   */
  element(): HTMLElement;

  /**
   * Erase a piece of content from the editor's state.
   */
  erase?(content: IContent): void;

  /**
   * Determine whether the content is a composite
   * of one or more pieces of content.
   */
  isComposite(): boolean;

  /**
   * Add a trailing element to the content.
   *
   * @note The trailing element is necessary because without it, an empty
   * 			 contenteditable element may not have a visual representation,
   * 			 leading to difficulties in formatting and editing.
   */
  trailingElement?(): HTMLElement;

  /**
   * Update the content.
   */
  update(mutations: MutationRecord[]): void;
}

export default IContent;
