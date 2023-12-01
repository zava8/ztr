/*
 * ztr : WebExtension to transliterate webpages
 * https://gitlab.com/zava810/ztr
 *
 * This work is licensed under GNU General Public License version 3.
 *
 * Copyright 2021 vimal kumar <zs810@vk.com>
*/

import browser from 'webextension-polyfill';

import '../styles/popup.scss';

document.addEventListener('DOMContentLoaded', async () => {
  const tr_select_elem = document.getElementById('id_tr_select');
  var tr_selected_value = 0;
  // Restore options
  browser.storage.sync.get({ auto: false, overlay: true, tr_selected_value: tr_selected_value }).
    then((result) => {
      document.getElementById('auto_transliterate').checked = result.auto;
      document.getElementById('overlay').checked = result.overlay;
      tr_selected_value = result.tr_selected_value
    }, (err) => { console.log(err); });
  // There will be only one active tab
  let tab = await browser.tabs.query({ active: true });
  tab = tab[0];
  document.getElementById('transliterate').addEventListener('click', async () => {
    browser.tabs.sendMessage( tab.id, { tr_selected_value: tr_selected_value } ).catch(error => { console.log(error); });
    document.getElementById('transliterate').style.display = 'none'
    document.getElementById('untransliterate').style.display = 'inline'
  });

  document.getElementById('untransliterate').addEventListener('click', async () => {
    browser.tabs.sendMessage( tab.id, { untransliterate: true } );
    document.getElementById('transliterate').style.display = 'inline';
    document.getElementById('untransliterate').style.display = 'none';
  });

  // Check if page transliterated (auto mode on)
  browser.tabs.sendMessage( tab.id, { transliterated_webpage: '?' } ).then(transliterated_webpage => {
    if (transliterated_webpage) {
      document.getElementById('transliterate').style.display = 'none'
      document.getElementById('untransliterate').style.display = 'inline'
    }
  });
  var save_settings = () => {
    browser.storage.sync.set({
      auto: document.getElementById('auto_transliterate').checked,
      overlay: document.getElementById('overlay').checked,
      tr_selected_value: tr_selected_value
    });
  }
  tr_select_elem.addEventListener('change', () => { tr_selected_value = tr_select_elem.value; save_settings(); });
  document.getElementById('auto_transliterate').addEventListener('change', () => { save_settings(); });
  document.getElementById('overlay').addEventListener('change', () => { save_settings(); });
});
