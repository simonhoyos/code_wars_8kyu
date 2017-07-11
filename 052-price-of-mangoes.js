// There's a 3 for 2 offer on mangoes. For a given price and quantity, calculate
// the total cost of the mangoes.

function mango(quantity, price){
  return ((quantity - quantity % 3) * price * 2/3) + ((quantity % 3) * price);
}