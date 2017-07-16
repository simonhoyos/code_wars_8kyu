// Given an array of numbers (s), check if any of the numbers are the
// character codes for lower case vowels.

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){ 
  let newArr = a.map(function(n) { 
    if (n === 97 || n === 101 || n === 105 || n === 111 || n === 117) {
      return String.fromCharCode(n);
    }
    return n;
  });
  
  return newArr;
}