// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
// If array is empty, null or None, or if only 1 Element exists, return 0.

function sumArray(arr) {
  if (arr == null) return 0
  return arr.sort((a,b) =>a-b).slice(1, -1).reduce((sum, val) => sum + val, 0)
}