// Take an array and remove every second element out of that array. Always
// keep the first element and start removing with the next element.

function removeEveryOther(arr){
  return arr.filter((a, i) => i % 2 === 0);
}
