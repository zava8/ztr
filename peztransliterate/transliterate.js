// const u_to_a = require('./u_to_a.js');
var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
var buttonTranslate = document.querySelector('#btn-translate');
var apiUrl = "https://api.funtranslations.com/translate/minion.json";

function errorHandle(error) { 
	// In case error occurs the errorHandle
	// function will be called
	alert('Error occurred')
	console.log("error occurred", error);
}

function clickHandler() {	 
	// When someone clicks on translate
	// button clickHandler will be called
	var text = inputText.value;
	var updatedUrl = apiUrl + "?text=" + text;
	fetch(updatedUrl).then(response =>
	response.json()).then(json =>
	outputText.innerText = 
		(json.contents.translated)).catch(errorHandle);
}



buttonTranslate.addEventListener("click", clickHandler); 
// Adding the event listener click
////////////
function getComboA(selectObject) {
  var text = inputText.value;
  var value = selectObject.value;  
	switch(value) {
		case "unicode_to_inglish" :
		  outputText.innerText = u_to_a(text,false);
		break;
		case "inglish_to_vovelhindi" :
		  outputText.innerText = i_to_vhin(text);
		break;
		case "unicode_to_vovelhindi" :
		  // alert(text);
		  outputText.innerText = u_to_u8(text,false);
		break;i_to_vhin
    }
}
