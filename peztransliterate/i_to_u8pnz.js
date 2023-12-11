const i_to_u8pnz_dict = {
	I : 'i',
	O : 'o',
	E : 'e',
	U : 'u',
	A : 'ਅ',
	k : 'ਕ',
	K : 'ਕ',
	z : 'ਜ',
	j : 'ਜ',
	Z : 'ਜ',
	J : 'ਜ',
	t : 'ਟ',
	d : 'ਡ',
	T : 'ਤ',
	D : 'ਦ',
	p : 'ਪ',
	P : 'ਪ',
	b : 'ਬ',	
	B : 'ਬ',	
	m : 'ਮ',
	B : 'ਮ',
	n : 'ਨ',
	N : 'ਨ',
	y : 'ਯ',
	Y : 'ਯ',
	r : 'ਰ',
	R : 'ਰ',
	l : 'ਲ',
	L : 'ਲ',
	v : 'ਵ',
	V : 'ਵ',
	S : 'ਸ',
	s : 'ਸ',
	H : 'ਹ',	
	
};
var i_to_u8pnz = function (input) {
  const inputLength = input.length; alert(inputLength);
  let indeks = 0;
  let output = '';
  let curr_char = ''; let nekst_char = '';
  curr_char = input[indeks];  
  while (indeks < inputLength) {
	
	if(curr_char in i_to_u8pnz_dict) {output += i_to_u8pnz_dict[curr_char];}
	else {output += curr_char;}
    indeks++ ;
	curr_char = input[indeks];
  }
  return output;
}
module.exports = i_to_u8pnz
