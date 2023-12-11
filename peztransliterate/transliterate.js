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
function i_to_u8hin_click(){ doztr("i_to_u8hin"); }
function i_to_u8pnz_click(){ doztr("i_to_u8pnz"); }
function i_to_u8tmil_click(){ doztr("i_to_u8tmil"); }
function u_to_u8hin_click(){
	doztr("u_to_u8hin");
}
function u_to_u8pnz_click(){
	doztr("u_to_u8pnz");
}
function doztr(selectedztr) {
	var text = inputText.value;
	switch(selectedztr) {
	case "unicode_to_inglish" : outputText.innerText = u_to_a(text,false); break;
	case "i_to_u8hin" : outputText.innerText = i_to_u8hin(text); break;
	case "i_to_u8pnz" : outputText.innerText = i_to_u8pnz(text); break;
	case "i_to_u8tmil" : outputText.innerText = i_to_u8tmil(text); break;
	case "u_to_u8hin" : outputText.innerText = u_to_u8hin(text,false);break;
	case "u_to_u8pnz" : outputText.innerText = u_to_u8pnz(text,false);break;
    }
}
