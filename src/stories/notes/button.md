body {
    width: 0;
}

# テスト

## ソース

<div style="background: black;" class="source">
<button>aaaaaaaa</button>
</div>



|項目1|項目2|
|---|---|
|項目1|項目2|
|項目1|項目2|
|項目1|項目2|
|項目1|項目2|

```
storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [Button],
    })
  )
  .add('with text', () => ({
    template: `<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>`,
    props: {
      text: 'Hello Button',
      onClick: () => {},
    },
  }));
```