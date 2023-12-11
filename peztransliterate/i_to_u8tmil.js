const i_to_u8tmil_dict = {
	I : 'i',
	O : 'o',
	E : 'e',
	U : 'u',
	A : 'அ',
	k : 'க',
	K : 'க',
	z : 'ஜ',
	j : 'ஜ',
	Z : 'ஜ',
	J : 'ஜ',
	t : 'ட',
	d : 'd',
	T : 'த',
	D : 'D',
	p : 'ப',
	P : 'ப',
	b : 'ਬ',	
	B : 'ਬ',	
	m : 'ம',
	B : 'ம',
	n : 'ந',
	N : 'ந',
	y : 'ய',
	Y : 'ய',
	r : 'ர',
	R : 'ர',
	l : 'ல',
	L : 'ல',
	v : 'வ',
	V : 'வ',
	S : 'ஸ',
	s : 'ஸ',
	H : 'ஹ',	
	
};
var i_to_u8tmil = function (input) {
  const inputLength = input.length; alert(inputLength);
  let indeks = 0;
  let output = '';
  let curr_char = ''; let nekst_char = '';
  curr_char = input[indeks];  
  while (indeks < inputLength) {
	
	if(curr_char in i_to_u8tmil_dict) {output += i_to_u8tmil_dict[curr_char];}
	else {output += curr_char;}
    indeks++ ;
	curr_char = input[indeks];
  }
  return output;
}
module.exports = i_to_u8tmil
