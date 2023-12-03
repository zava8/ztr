const i_to_vhin_dict = {
	I : 'i',
	O : 'o',
	E : 'e',
	U : 'u',
	A : 'अ',
	k : 'क',
	K : 'क',
	z : 'ज',
	j : 'ज',
	Z : 'ज',
	J : 'ज',
	t : 'ट',
	d : 'ड',
	T : 'त',
	D : 'द',
	p : 'प',
	P : 'प',
	b : 'ब',	
	B : 'ब',	
	m : 'म',
	B : 'म',
	n : 'न',
	N : 'न',
	y : 'य',
	Y : 'य',
	r : 'र',
	R : 'र',
	l : 'ल',
	L : 'ल',
	v : 'व',
	V : 'व',
	S : 'स',
	s : 'स',
	H : 'ह',
	
	
};
var i_to_vhin = function (input) {
  const inputLength = input.length; //alert(inputLength);
  let indeks = 0;
  let output = '';
  let curr_char = ''; let nekst_char = '';
  curr_char = input[indeks];  
  while (indeks < inputLength) {
	
	if(curr_char in i_to_vhin_dict) {output += i_to_vhin_dict[curr_char];}
	else {output += curr_char;}
    indeks++ ;
	curr_char = input[indeks];
  }
  return output;
}
module.exports = i_to_vhin
