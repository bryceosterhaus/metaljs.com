// This file was automatically generated from intro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace intro.
 */

if (typeof intro == 'undefined') { var intro = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
intro.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(layout.page({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<header class="header"><div class="container">' + soy.$$escapeHtml(main.navbar(null, null, opt_ijData)) + '</div></header>')}, null, opt_ijData));
};
if (goog.DEBUG) {
  intro.soyweb.soyTemplateName = 'intro.soyweb';
}
