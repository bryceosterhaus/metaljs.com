// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsIndex.
 */

if (typeof docsIndex == 'undefined') { var docsIndex = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
docsIndex.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(docs.layout({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h1>Creating your own component</h1><p>There are many different ways to create a new component using Metal.js. You can use the built-in integration with soy templates, or build your own template abstraction on top of Metal.js and use it instead. You can build the ES6 code using babel, traceur or any other transpiler. You can test using karma, jasmine or any other test framework, and can use any directory structure for your project. To sum it up, you can customize everything to your own needs. The world is your oyster.</p><p>This guide will focus on a quick and easy way to get started with Metal.js, using soy templates and <strong>generator-metal</strong> for the project structure and workflow.</p><h2>Dependencies</h2><ul><li>For importing the source code you\'ll need <a href="http://bower.io/">Bower</a>.</li><li>For build tooling, you\'ll need <a href="https://nodejs.org/download/">Node.js</a> v0.10 or newer.</li><li>For Soy templates compilation, you\'ll need Java SDK v1.7 or newer.</li></ul><h2>Creating the project structure</h2><p>We\'ve built a <a href="https://www.npmjs.com/package/generator-metal">Yeoman generator</a> for creating the initial project structure together with some useful dependencies. To use it:</p><ol><li>Install Yeoman and <strong>generator-metal</strong>:<br><code>[sudo] npm i -g yo generator-metal</code></li><li>Open the folder that you want to use on your terminal and type:<br><code>yo metal</code></li><li>Answer the generator prompts</li><li>Wait for the generator to finish fetching dependencies</li></ol><p>So, for example, let\'s say you\'ve decided to name your component <strong>MyComponent</strong>. After those steps you\'ll get a directory tree similar to this:</p><textarea class="code" data-mode="javascript">\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 demos\n\u2502\u00A0\u00A0 \u2514\u2500\u2500 index.html\n\u251C\u2500\u2500 gulpfile.js\n\u251C\u2500\u2500 node_modules\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 src\n\u2502\u00A0\u00A0 \u251C\u2500\u2500 MyComponent.js\n\u2502\u00A0\u00A0 \u251C\u2500\u2500 MyComponent.soy\n\u2502\u00A0\u00A0 \u2514\u2500\u2500 myComponent.scss\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 MyComponent.js</textarea><p>Building your component is now just a matter of adding code to the correct files:</p><ul><li><code>src/MyComponent.js</code> - Main JavaScript logic</li><li><code>src/MyComponent.soy</code>- Soy templates</li><li><code>src/myComponent.scss</code> - CSS rules</li><li><code>test/MyComponent.js</code> - Test cases</li><li><code>demos/index.js</code> - Demo</li></ul><h2>Soy</h2><p>Now we can actually start to code our new component. We\'ll be taking advantage of the built-in <a href="http://developers.google.com/closure/templates">soy templates</a> integration, enabling you to easily separate business logic from rendering logic.</p><p>So, for example, let\'s say that <strong>MyComponent</strong> should have a body and a footer with content. The soy file (<code>src/MyComponent.soy</code>) would look like this:</p>' + docsSoyComponents.soyExample(null, null, opt_ijData) + '<h2>JS</h2>' + docsSoyComponents.jsExample(null, null, opt_ijData) + '<h2>Next steps</h2><p>Now that you know how to create your own components, let\'s learn how to transpile the ES6 code and build its modules to a desired format.</p><p><strong><a href="/docs/building.html">\u21AA Transpiling and building your component</a></strong></p>')}, null, opt_ijData));
};
if (goog.DEBUG) {
  docsIndex.soyweb.soyTemplateName = 'docsIndex.soyweb';
}
