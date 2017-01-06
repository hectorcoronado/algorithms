/*
write a sum function that takes an array of numbers
and returns the sum of these numbers
*/

let sum = (array) =>
  array = array.reduce( (acc, cur ) => acc + cur, 0);

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sum(myArray));
