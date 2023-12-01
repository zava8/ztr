#### **[ztr firefox webextension][ztrurl]** to transliterate below writings/languages in :
1. malayalam hindi, kannada, tamil, telugu, punzabi, guzrati, marathi, bengali/baNgla/oriya) to kvzabc.
  1. kvzabc - AaiueoNyH k/kh g/gh c/ch z/zh t/th d/dh T/Th D/Dh s/sh n p/ph b/bh m y r/rr l/ll v H
  2. [source code phur ztr](git clone https://gitlab.com/zava810/ztr.git)
  3. uzing library [libindik-transliteration npmzs lib](https://www.npmjs.com/package/libindik-transliteration)
  4. [source libindik-transliteration](https://gitlab.com/hscii810/transliteration.git)
  8.

## hou to 1.clone 2.install 3.build 4.run 5.test steps :
1. in cmd prompt run belou git clone command. it vill zenerate ztr folder vith **.git** folder inside.
   > git clone https://gitlab.com/zava810/ztr.git
2. install [nvm->node->npm](https://github.com/nvm-sh/nvm) & run npm install command. it vill zenerate ztr/**node_modules** folder.
   > npm install
3. build firefox extension by running belou **build** command. it vill zenerate ztr/**extension/[firefox , firefox.xpi]** folder tree.
   > npm run build:firefox
4. open firefox & type url **about:debugging#/runtime/this-firefox**
5. click **load temporary add-on** button & select
6. **ztr/extension/firefox/manifest.json** file.
7. in firefox open [zee hindi](https://zeenews.india.com/hindi) in neu table
8. in firefox extension bar click **ztr(z icon)**
9. click **transliterate button** & check/test if translierated in zabc properply.
10. list phur good sites to test phur languages:
  1. [hinDi_mrathi_punzabi_guzraTi](https://zeenews.india.com/hindi)
  2. [Tmil_niyuz](https://www.dinamalar.com/)
  3. [mlyalm niyuz](https://www.manoramaonline.com/home.html)
  4. [hindi food recepies](https://nishamadhulika.com/category/355-puri-recipe.html)
  5. [bbc hindi](https://www.bbc.com/hindi)
  6. [pnzabi_gurumukhi niyuz](https://jagbani.punjabkesari.in/)
  7. [Telugu niyuz](https://telugu.oneindia.com/)
  8. [kannada niyuz](https://kannada.oneindia.com)
  9. [bNgali_baNgla](https://bengali.oneindia.com)
  10. [guzraTi niyuz](https://gujarati.oneindia.com)
  11. [urriya niyuz](https://odia.oneindia.com)


made with help of the awesome [web-extension-starter](https://github.com/abhijithvijayan/web-extension-starter).

## usage

install the extension and you'll see ztr icon on your browser toolbar. click on it and simply click "transliterate".

### features

* supports :
  1. mlyalm
  2. hinDi/Devanagri
  3. knrra/Tullu
  4. Tmil
  5. Telugu
  6. mrathi
  7. guzraTi
  8. pnzabi/gurumukhi
  9. bNgali/baNgla
  [ztr](//gitlab.com/zava810/ztr)
* auto transliterate page on load
* offline [requires no internet to transliterate]
* options page has a transliterator tool for manual text

## development setup

* clone
* `npm install`
* `npm run dev:firefox` to start the development server for firefox addon
* `npm run build:firefox` to build `.xpi`


ztr , addon/extension can transliterate all 9 indian languages as listed above.

[learn hindi_abc](http://zinglish.vercel.app) is very helpful to learn basic hindi.

my dev setup :

* os : `linux mint 19 [ubuntu 18.04 lts]`
* node : `14.17.0` & npm : `6.14.13`
* node : `12.14.0` & npm : `7.14.0`

but it'll work on majority others too.
[ztrurl]: https://addons.mozilla.org/en-US/firefox/addon/ztr/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search
