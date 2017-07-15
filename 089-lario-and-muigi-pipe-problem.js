// #Issue Looks like some hoodlum plumber and his brother has been running
// #around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before
// you recieve any more complaints. Each pipe should be connecting, since the
// levels ascend, you can assume every number in the sequence after the first
// index will be greater than the previous and that there will be no
// duplicates.

// #Task Given the a list of numbers, return the list so that the values
// #increment by 1 for each index up to the maximum value.

function pipeFix(numbers){
  let min = numbers.sort((a,b) => a-b)[0];
  let max = numbers.sort((a,b) => b-a)[0];
  let newArray = [];
  
  for (min; min <= max; min++) {
    newArray.push(min);
  }
  
  return newArray;
}