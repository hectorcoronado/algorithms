/*
Compute the average age difference between mothers and children (the age of the mother when the child is born).
*/

var ANCESTRY_FILE = require('./ancestryFile');

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var ageDifferences = [];

function ageDifference() {

  for(var i = 0; i < ancestry.length; i++) {
    var child = ancestry[i];

    if(child.mother !== null && byName[child.mother] !== undefined) {
      var mother = byName[child.mother];
      var ageDifference = child.born - mother.born;

      ageDifferences.push(ageDifference);
    }
  }
  return ageDifferences;
}

ageDifference();
console.log(average(ageDifferences));
// → 31.2
