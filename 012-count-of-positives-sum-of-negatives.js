// Given an array of integers.

// Return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers.

function countPositivesSumNegatives(input) {
  if (!input || input.length < 1) return [];
  let count = 0;
  let sum = 0;
  input.forEach((num) => num > 0 ? count++ : sum += num);
  return [count, sum];
}