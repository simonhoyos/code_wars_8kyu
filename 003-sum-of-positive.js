// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((sum, val) => sum + val, 0)
}