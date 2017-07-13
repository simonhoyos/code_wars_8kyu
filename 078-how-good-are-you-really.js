// There was a test in your class and you passed it. Congratulations! But
// you're an ambitious person. You want to know if you're better than the
// average student in your class. You got an array with your colleges' points.
// Now calculate the average to your points!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let classAverage = classPoints.reduce((a, b) => a + b) / classPoints.length;
  return yourPoints >= classAverage ? true : false;
}