/* * Thanks Subin Siby  https://subinsb.com/indicen
 * ztr : WebExtension to transliterate webpages
 * https://vk.com/zs810
 *
 * authors:
 * subin <mail@subinsb.com> copyright 2020 Subin Siby <mail@subinsb.com>
 * viml kumar <zs810@vk.com> : modifications for multilingual birectional transliteration using modulo method
 * viml kumar <zs810@vk.com> : copyright 2021 viml kumar <zs810@vk.com>
*/
import browser from 'webextension-polyfill';
import transliterator from 'kvz-transliteration';
import Tooltip from './tooltip.js';
import '../styles/contentStyle.scss';

var t, transliterated_webpage = false ,observer = null, overlay = false ;
function detectMob() {
  const toMatch = [ /Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i ];
  return toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem); });
}
function transliterate_webpage(tr_selected_value="0") {
  t = new transliterator();
  t.transliterate_dom_node(document.body,tr_selected_value)
  if (overlay && !detectMob()) {
    let onMouseOver = async (e) => { Tooltip.init('oriznl_yunikod'); document.removeEventListener('mouseover', onMouseOver); }
    document.addEventListener('mouseover', onMouseOver);
  }
  transliterated_webpage = true
}
function untransliterate_webpage() {
  Tooltip.destroy()
  if (observer) observer.disconnect()
  t.untransliterate_dom_node();
  transliterated_webpage = false;
}
function init() {
  browser.storage.sync.get({ auto: false, overlay: true, tr_selected_value: "0" }).then((result) => {
    var tr_selected_value = result.tr_selected_value; overlay = result.overlay;
    if (result.auto) {
      transliterate_webpage(tr_selected_value);
      observer = new MutationObserver(mutationsList => {
        for (let mutation of mutationsList) {
          if (
            mutation.type === 'childList' && mutation.target.className !== 'ztred' && mutation.target.parentNode &&
            mutation.target.parentNode.className.indexOf('ztr-tooltip-container') === -1
          ) { for (let mutated_node of mutation.addedNodes) { t.transliterate_dom_node(mutated_node, tr_selected_value); } }
        }
      });
      observer.observe( document.body, { characterData: false, attributes: false, childList: true, subtree: true } );
    }
  }, (err) => { console.log(err); });
}
browser.runtime.onMessage.addListener(request => {
  if (0 <= request.tr_selected_value) { init(); transliterate_webpage(request.tr_selected_value); }
  else if (request.untransliterate) { untransliterate_webpage(); }
  else { return Promise.resolve(transliterated_webpage); }
}); // On popup button click
init();
