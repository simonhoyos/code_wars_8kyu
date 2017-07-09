// Complete the squareSum method so that it squares each number passed into it
// and then sums the results together.

function squareSum(numbers){
  return numbers.map((n) => n * n).reduce((sum, n) => sum + n);
}
