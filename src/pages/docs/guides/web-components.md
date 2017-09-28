---
title: "Web Components"
description: "Using metal components as custom elements (web components)."
layout: "guide"
weight: 230
---

<article id="web_components">

## [Custom Elements](#custom_elements)

Metal components are generally invoked in one of three ways.

1) JavaScript

```javascript
new metal.MyComponent({
	title: 'Hello, World!'
}, '#element');
```

2) Soy

```soy
{call MyComponent.render}
	{param title: "Hello, World!" /}
{/call}
```

3) JSX

```jsx
<MyComponent title="Hello, World" />
```

However, with the help of the [metal-custom-element](https://www.npmjs.com/package/metal-custom-element) package, Metal components can be invoked as [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) in
plain HTML.

```xml
<my-component title="Hello, World" />
```

</article>

<article id="install">

## [Install](#install)

First step is to install the `metal-custom-element` package.

```bash
npm i --save metal-custom-element
```

Currently custom elements do not work on every browser, so a pollyfill must be
used. Include the [webcomponents-lite pollyfill](https://www.webcomponents.org/polyfills) if
you intend to use custom elements on Firefox, Edge, or IE11.

</article>

<article id="define_custom_elements">

## [Define custom elements](#define_custom_elements)

This package exposes a single helper function that can be used to wrap any Metal
component in a custom element. It receives two arguments, the tag name you want
the custom element to receive, and the constructor of the Metal component.

```javascript
import JSXComponent from 'metal-jsx';
import defineWebComponent from 'metal-custom-element';

class MyComponent extends JSXComponent {
	render() {
		return <h1>{this.props.message}</h1>
	}
}

MyComponent.PROPS = {
	message: {
		value: ''
	}
};

defineWebComponent('my-component', MyComponent);
```

Now that the custom element is defined, it can be invoked in plain html.

```xml
<my-component message="This is a web component" />
```

This will then result in the following HTML on the page.

```xml
<h1>This is a web component</h1>
```

If you would like the component's markup to be rendered using the Shadow DOM,
simply set the `useshadowdom` attribute to `true` when calling the custom element.

```xml
<my-component message="This is a web component" useshadowdom="true" />
```

This means that any styling on the page will not cascade to your component's
markup. See [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM) for more info.

</article>