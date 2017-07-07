// Given a set of numbers, return the additive inverse of each. Each positive
// becomes negatives, and the negatives become positives.

// You can assume that all values are integers.

function invert(array) {
   return array.map((n) => n == 0 ? 0 : -n);
}