// You need to write a function that reverses the words in a given string. A
// word can also fit an empty string. If this is not clear enough

function reverse(string){
  return string.split(' ').reverse().join(' ');
}