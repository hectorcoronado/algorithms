/*
Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding up, as in:

Math.ceil(person.died / 100)
*/

var ANCESTRY_FILE = require('./ancestryFile');

var ancestry = JSON.parse(ANCESTRY_FILE);


function byCenturyOfDeath(ancestry, person) {
  return ancestry.map(function(obj) {
    var rObj = {};
    var key = Math.ceil(person.died / 100);
    rObj.key = person.died;
  })

}

function groupBy(ancestry, byCenturyOfDeath) {

}
