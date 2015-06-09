// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace index.
 */

if (typeof index == 'undefined') { var index = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
index.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(layout.page({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<header class="header"><div class="container"><div class="header-bg"></div>' + main.topbar(null, null, opt_ijData) + home.tagline(null, null, opt_ijData) + '</div></header><main>' + home.features(null, null, opt_ijData) + home.architecture(null, null, opt_ijData) + soy.$$escapeHtml(home.collections(null, null, opt_ijData)) + '</main>')}, null, opt_ijData));
};
if (goog.DEBUG) {
  index.soyweb.soyTemplateName = 'index.soyweb';
}
