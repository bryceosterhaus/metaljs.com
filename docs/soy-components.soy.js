// This file was automatically generated from soy-components.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsSoyComponents.
 */

if (typeof docsSoyComponents == 'undefined') { var docsSoyComponents = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docsSoyComponents.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(docs.layout({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h1>Soy Components</h1><p>This section will explain how to build rich widgets on Metal.js, by taking advantage of the built-in <a href="http://developers.google.com/closure/templates">soy templates</a> integration, enabling you to easily separate business logic from rendering logic.</p><p>So, for example, let\'s say we want to create a component called <strong>MyComponent</strong>, that has a body and a footer with content. The soy file would look like this:</p>' + docsSoyComponents.soyExample(null, null, opt_ijData) + docsSoyComponents.jsExample(null, null, opt_ijData) + docsSoyComponents.runExample(null, null, opt_ijData))}, null, opt_ijData));
};
if (goog.DEBUG) {
  docsSoyComponents.soyweb.soyTemplateName = 'docsSoyComponents.soyweb';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docsSoyComponents.jsExample = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<p>Since all that rendering logic is done automatically for you just from creating a soy file, you don\'t actually need a JS file at all if that\'s all the component needs to do. When compiled, the soy file will already generate the appropriate component class for you.</p><p>Many components do need more behavior though, so to add more JS to a soy component you should have a JS file like this:</p><textarea class="code" data-mode="javascript">\nimport templates from \'./MyComponent.soy\';\nimport Component from \'metal-component\';\nimport Soy from \'metal-soy\';\n\nclass MyComponent extends Component {\n}\nSoy.register(MyComponent, templates);\n\nexport default MyComponent;</textarea><p>It basically just defines a class named <b>MyComponent</b> that extends Metal.js\'s <b>Component</b> class, and registers its soy templates (which are automatically exported from the soy file).</p><p>There are many ways to add behavior to your component. You can add handlers for <a href="/docs/inline-events.html">inline listeners</a>, add <a href="/docs/state.html">state configuration</a> or simply override <a href="/docs/component-lifecycle.html">lifecycle functions</a> to add any other logic you need.</p>');
};
if (goog.DEBUG) {
  docsSoyComponents.jsExample.soyTemplateName = 'docsSoyComponents.jsExample';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docsSoyComponents.soyExample = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(codeTabs.main({tabs: ['Soy', 'JSX'], content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<textarea class="code" data-mode="x-soy">\n&lbrace;namespace MyComponent&rbrace;\n\n/**\n* This renders the component\'s whole content.\n*/\n&lbrace;template .render&rbrace;\n&lbrace;@param bodyContent2: html&rbrace;\n&lbrace;@param footerContent: html&rbrace;\n&lt;p&gt;&lbrace;$bodyContent&rbrace;&lt;/p&gt;\n&lt;footer&gt;&lbrace;$footerContent&rbrace;&lt;/footer&gt;\n&lbrace;/template&rbrace;</textarea><textarea class="code hidden" data-mode="javascript">\nrender() {\nreturn null;\n}</textarea>')}, null, opt_ijData) + '<p>Looking at that you can see that it\'s just a basic soy file. Now let\'s understand how this integration with the template works.</p><p>Firstly, Metal.js will by default use the template named `render` as the component\'s content. You can have other templates in youy soy file, but the `render` template should be the main one.</p><p>Secondly, each param used on this main template will be automatically added to the component\'s <a href="/docs/state.html">state</a>. This basically means that Metal.js will set these params as properties of the component, as well as track any changes to them, automatically rerendering the component when necessary. In <b>MyComponent</b>\'s case this means that whenever the value of the <code>bodyContent</code> param is changed, that part of the component that uses it will be updated, even though there is no JavaScript code on MyComponent to handle this logic. The same goes for the <code>footerContent</code> param.</p><p>Metal.js\'s logic for updating the component\'s contents automatically is very smart, it uses <a href="http://google.github.io/incremental-dom">incremental-dom</a>, so it will only rerender the parts of the component that actually changed.</p>');
};
if (goog.DEBUG) {
  docsSoyComponents.soyExample.soyTemplateName = 'docsSoyComponents.soyExample';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docsSoyComponents.runExample = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<p>Finally, to use your new component, just call instantiate it, passing any attribute values that you want to initialize it with, as well as an optional parent element:</p><textarea class="code" data-mode="javascript">\nnew MyComponent({\n\tbodyContent: \'My Body\',\n\tfooterContent: \'&lt;footer&gt;My Footer.&lt;/footer&gt;\'\n}, parentElement);</textarea>');
};
if (goog.DEBUG) {
  docsSoyComponents.runExample.soyTemplateName = 'docsSoyComponents.runExample';
}
