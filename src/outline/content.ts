import IContent from '@contracts/outline/content';
import { TBlueprint, TContent, TContentConstructor } from 'types/content';
import { TContentCatalogue } from 'types/catalogue';
import HContent from '@/helper/content';

/**
 * Operations that are common to both simple and complex
 * elements of the editor's content.
 */
abstract class Content implements IContent {
	/**
	 * The content written in the editor.
	 */
	protected content: TContent = new Map();

	/**
	 * Unique identifier of the content.
	 */
	readonly id: string = HContent.uniqueIdentifier();

	/**
	 * A composite of one or more pieces of content.
	 */
	protected structure: IContent[] = [];

	/**
	 * Type of the content as defined in the
	 * content catalogue.
	 */
	readonly type: keyof TContentCatalogue = 'paragraph';

	protected constructor(blueprint: TBlueprint) {
		this.id = blueprint?.id ?? this.id;
		this.content = blueprint?.content ?? this.content;
	}

	/**
	 * Return a copy of the content.
	 */
	copy(): IContent {
		const blueprint: TBlueprint = {
			content: this.content,
			id: this.id,
		};
		return new (this.constructor as TContentConstructor)(blueprint);
	}

	/*
	 * Retrieve the DOM element that represents
	 * the content.
	 */
	abstract element(): HTMLElement;

	/**
	 * Determine whether the content is a composite
	 * of one or more pieces of content.
	 */
	isComposite(): boolean {
		return false;
	}

	/**
	 * Update the content.
	 */
	abstract update(mutations: MutationRecord[]): void;
}

export default Content;
