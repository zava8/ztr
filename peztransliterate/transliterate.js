// const u_to_a = require('./u_to_a.js');
var inputText = document.querySelector('#ita');
var outputText = document.querySelector('#output-text');
var selectedztr = null;
function errorHandle(error) { 
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
function u_to_u8hin_click(){ doztr("u_to_u8hin"); }
function u_to_u8pnz_click(){ doztr("u_to_u8pnz"); }
function doztr(selectedztr) {
	let ota = document.querySelector('#ota');
	const itekst = document.querySelector('#ita').value;
	switch(selectedztr) {
	case "unicode_to_inglish" : ota.innerText = u_to_a(itekst,false); break;
	case "i_to_u8hin" : ota.innerText = i_to_u8hin(itekst); break;
	case "i_to_u8pnz" : ota.innerText = i_to_u8pnz(itekst); break;
	case "i_to_u8tmil" : ota.innerText = i_to_u8tmil(itekst); break;
	case "u_to_u8hin" : ota.innerText = u_to_u8hin(itekst,false);break;
	case "u_to_u8pnz" : ota.innerText = u_to_u8pnz(itekst,false);break;
    }
}
