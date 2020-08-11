import { ButtonComponent } from '../app/shared/component/button/button.component';
import { TextComponent } from '../app/shared/component/text/text.component';
import { withNotes } from '@storybook/addon-notes'
import buttonNote from './notes/button.md';

export default {
  title: 'App Component',
  parameters: {
    notes: 'some documentation herefaisdjafijisfjai',
  },
};

export const button = () => ({
  component: ButtonComponent,
  props: {},
});

button.story = {
  parameters: {
    notes: {markdown: buttonNote},
  }
}



export const text = () => ({
  component: TextComponent,
  props: {},
});

export const template = () => ({
  template: '<p>template</p>',
});