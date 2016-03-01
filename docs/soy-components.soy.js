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
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(docs.layout({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h1>Soy Components</h1><p>This section will explain how to build rich widgets on Metal.js, by taking advantage of the <strong>SoyComponent</strong> class. By using SoyComponent, you\'ll be able to easily separate business logic from rendering logic, as it provides an integration with <a href="http://developers.google.com/closure/templates">soy templates</a>.</p><p>Building a widget with SoyComponent is simple, you just need to create two files: one with your soy templates, and the other with your JavaScript logic.</p><p>So, for example, let\'s say we want to create a widget called <strong>MyComponent</strong>, that has a body and a footer with content. The JavaScript file would look like this:</p>' + soy.$$escapeHtml(docsSoyComponents.jsExample(null, null, opt_ijData)) + '<p>Now we just need a soy file for MyComponent\'s rendering logic. It would look like this:</p><textarea class="code" data-mode="x-soy">\n&lbrace;namespace Templates.MyComponent&rbrace;\n\n/**\n * This renders the component\'s whole content.\n * @param elementClasses\n * @param id\n */\n&lbrace;template .content&rbrace;\n  &lt;div id="&lbrace;$id&rbrace;" class="&lbrace;$elementClasses&rbrace;"&gt;\n    &lbrace;call .body data="all" /&rbrace;\n    &lbrace;call .footer data="all" /&rbrace;\n  &lt;/div&gt;\n&lbrace;/template&rbrace;\n\n/**\n * This renders the body part of the component.\n * @param bodyContent\n * @param id\n */\n&lbrace;template .body&rbrace;\n  &lt;div id="&lbrace;$id&rbrace;-body"&gt;\n    &lt;p&gt;&lbrace;$bodyContent&rbrace;&lt;/p&gt;\n  &lt;/div&gt;\n&lbrace;/template&rbrace;\n\n/**\n * This renders the footer part of the component.\n * @param footerContent\n * @param id\n */\n&lbrace;template .footer&rbrace;\n  &lt;div id="&lbrace;$id&rbrace;-footer"&gt;\n    &lt;footer&gt;&lbrace;$footerContent&rbrace;&lt;/footer&gt;\n  &lt;/div&gt;\n&lbrace;/template&rbrace;</textarea><p>Looking at that you can see that it\'s just a basic soy file that defines some templates. For this soy file to work well with SoyComponent its namespace just needs to be in the format: <code>Templates.&lbrace;name of widget&rbrace;</code>.</p><p>Note that, on the soy file, we have divided the main template into subtemplates, one for the body content and one for the footer. This is not necessary, but can be really helpful, as SoyComponent will handle these as special parts of the widget, automatically rerendering them when one of the attributes listed as params of a template changes. In MyComponent\'s case this means that whenever the value of the <code>bodyContent</code> attribute is changed, the <code>body</code> template will be called, and that part of the widget will be updated, even though there is no JavaScript code on MyComponent to handle this logic. The same goes for the <code>footerContent</code> attribute and the <code>footer</code> template.</p><p>SoyComponent\'s logic for updating the widget\'s contents automatically is very smart, so it won\'t cause a rerender unless it\'s necessary. So if a change causes a template to be called again, but the resulting HTML from the template is the same that was rendered for the last time, it will be ignored. This is done by compressing and caching the hash code of a template\'s results when it\'s called, and later using it to compare with new results to decide if a new content should be rendered or not.</p><p>Finally, to render an instance of MyComponent, just call <code>render</code>, passing any attribute values that you want to initialize:</p><textarea class="code" data-mode="javascript">\nnew MyComponent({\n\theaderContent: \'My Header\'\n}).render(parentElement);</textarea>')}, null, opt_ijData));
};
if (goog.DEBUG) {
  docsSoyComponents.soyweb.soyTemplateName = 'docsSoyComponents.soyweb';
}
