/*
Write a range function that takes two arguments,
start and end,
and returns an array containing all the numbers
from start up to (and including) end.
*/

// ES5 solution
function range(start, end, step) {
  if (arguments.length < 3 && start < end) {
  	step = 1;
  } else if (arguments.length < 3 && start > end) {
  	step = -1;
  };
  var result = [];

  if (start < end) {
	for (var i = start; i <= end; i += step) {
    result.push(i);
  	};
  } else {
  	for (var i = start; i >= end; i += step) {
      result.push(i);
    };
  }
  return result;
}



/* ES6 solution without decremental loop
let range = (start, end, increment = 1) => {
  let result = [];
  for (var i = start; i <= end; i += increment) {
    result.push(i);
  }
  return result;
}

range(1, 10);
*/
