// When provided with a letter, return its position in the alphabet.

function position(letter){
  let abc = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${abc.indexOf(letter) + 1}`;
}