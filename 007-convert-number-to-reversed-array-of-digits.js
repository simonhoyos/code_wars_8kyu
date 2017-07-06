// Convert number to reversed array of digits

// Given a random number You have to return the digits of this number within
// an array in reverse order.

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}