/*
reverseArray, takes an array as argument and produces a
new array that has the same elements in the inverse order
*/


function reverseArray(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
