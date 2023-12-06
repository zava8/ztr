// const u_to_a = require('./u_to_a.js');
var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
// var buttonTranslate = document.querySelector('#btn-translate');
// var apiUrl = "https://api.funtranslations.com/translate/minion.json";
var selectedztr = null;
function errorHandle(error) { 
	// In case error occurs the errorHandle
	// function will be called
	alert('Error occurred')
	console.log("error occurred", error);
}
function getComboA(selectObject) {
  selectedztr = selectObject.value;
  doztr(selectedztr);
}
function ztrclick() {
  doztr(selectedztr);// alert(selectedztr);
}
function doztr(selectedztr) {
	var text = inputText.value;
	switch(selectedztr) {
	case "unicode_to_inglish" : outputText.innerText = u_to_a(text,false); break;
	case "inglish_to_vovelhindi" : outputText.innerText = i_to_vhin(text); break;
	case "unicode_to_vovelhindi" : outputText.innerText = u_to_u8(text,false);break;
    }
}
