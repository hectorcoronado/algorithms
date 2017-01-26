/*
filter() uses the argument 'test', a function value, to fill in a gap in the computation. test() is called for each elemnent, and its return value determines whether an elemnent is included in the returned array. If our implementation of test() returns true, an element is added to the 'passed' array.

filter() does not delete elements from the array in arguments, it builds up a new array with only the elements that pass the test. This function is pure.
*/

var ANCESTRY_FILE = require('./ancestryFile');

var ancestry = JSON.parse(ANCESTRY_FILE);



function filter(array, test) {
  var passed = [];

  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i]);
    }
  }
  return passed;
}




console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));
