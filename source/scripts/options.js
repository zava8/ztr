/*
 * ztr : WebExtension to transliterate webpages
 * https://gitlab.com/zava810/ztr
 *
 * This vork is licensed under gnu general public license version 3.
 *
 * kopyright 2021 vimal kumar <zs810@vk.com>
*/
import transliterator from 'kvz-transliteration';
import '../styles/options.scss';
const form = document.getElementById('transliterate-form');
form.onsubmit = function(e) {
	e.preventDefault();
  const tr_selected_val = document.getElementById('id_tr_select').value;
  let input_str = document.getElementById('input').value;
  let t = new transliterator();
  document.getElementById('output').value = t.transliterate_input(input_str, tr_selected_val); //output;
  return false;
};
