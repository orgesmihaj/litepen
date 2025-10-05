import Composer from '@litepen/editor';

new Composer({
  holder: document.querySelector<HTMLDivElement>('#editor')!,
  content: {},
  format: 'json',
  editable: true,
  autofocus: true,
  placeholder: 'What\'s on your mind? ✏️',
  debounce: 300,
  extensions: [],
  onUpdate: () => console.log('Editor updated')
})
