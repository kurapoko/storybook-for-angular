import { ButtonComponent } from '../app/shared/component/button/button.component';
import { TextComponent } from '../app/shared/component/text/text.component';

export default {
  title: 'App Component',
};

export const button = () => ({
  component: ButtonComponent,
  props: {},
});

export const text = () => ({
  component: TextComponent,
  props: {},
});

export const template = () => ({
  template: '<p>template</p>',
});