// To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will
// process every number from this array. Return a new array with processing
// every number of the input-array.

// The input array will always contain only positive numbers and will never be
// empty or null.

// The input array should not be modified!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function squareOrSquareRoot(array) {
  return array.map((n) => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n);  
}