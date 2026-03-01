import type { TEditorContent, TExtension } from './editor.types';

export type TSettings = {
	autofocus: boolean;
	content: TEditorContent;
	debounce: number;
	editable: boolean;
	extensions: TExtension[];
	format: 'html' | 'json' | 'md';
	holder: Element;
	onUpdate: () => void;
	placeholder: string;
};

export type TSettingsOverrides = Partial<Omit<TSettings, 'holder'>> & {
	holder?: Element | null;
};
