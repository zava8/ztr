const i_to_vhin_dict = {
	A : 'अ',
	k : 'क',
	z : 'ज',
	t : 'ट',
	d : 'ड',
	T : 'त',
	D : 'द',
	p : 'प',
	b : 'ब',	
	m : 'म',
	n : 'न',
	y : 'य',
	r : 'र',
	l : 'ल',
	v : 'व',
	s : 'स',
	H : 'ह'
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
