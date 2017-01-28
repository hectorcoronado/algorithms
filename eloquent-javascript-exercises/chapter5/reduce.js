/*
A common pattern of computation on arrays is computing a single value from them.

The higher-order operation that represents this pattern is called 'reduce' -- it can be thought of as folding up the array, one element at a time.

The parameters to the 'reduce' function are, apart from the array, a combining function and a start value.
*/

function reduce(array, combine, start) {
  var current = start;

  for (var i = 0; i < array.length; i++) {
    current = combine(current, array[i]);
  }

  return current;
}

/*
If the array contains at least one element, 'start' argument may be may be left empty. The method will take the first element of the array as its start value and start reducing at the second element.

The following implementation of reduce() finds the most ancient known ancestor:
*/

var ANCESTRY_FILE = require('./ancestryFile');

var ancestry = JSON.parse(ANCESTRY_FILE);


console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born) {
    return cur;
  } else {
    return min;
  }
}));
