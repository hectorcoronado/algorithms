/*
The 'map' method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been "mapped" to a new form by the function:
*/

var ANCESTRY_FILE = require('./ancestryFile');

var ancestry = JSON.parse(ANCESTRY_FILE);



function map(array, transform) {
  var mapped = [];

  for (var i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]));
  }

  return mapped;
}



var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
  return person.name;
}))
