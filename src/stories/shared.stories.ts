import { ButtonComponent } from '../app/shared/component/button/button.component';
import { TextComponent } from '../app/shared/component/text/text.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
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

export const htmlTag = () => ({
  template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
  props: {
    text: 'Hello Button',
    onClick: (event: Event) => {
      console.log('some bindings work');
      console.log(event);
    },
  },
});