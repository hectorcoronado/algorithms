/*
Write a function that can take any non-negative integer as a argument and return it with it's digits in
descending order. Descending order means that you take the highest digit and place the next highest
digit immediately after it.

All of the following solutions do the same thing:
*/

// ES5
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''));
}


// ES6
const descendingOrder = n => parseInt(String(n).split('').sort().reverse().join(''));



// Uglified ES5:
function descendingOrder(n){
  var array = n.toString(10).split("").map(Number);
  var descendingNumbers = [];

  function getMaxOfArray(array) {

    max = Math.max.apply(null, array);
    descendingNumbers.push(max);
    array.splice(array.indexOf(max), 1);

    while(array.length) {
        getMaxOfArray(array);
    }

    descendingNumbers = descendingNumbers.map(String);
  }

  getMaxOfArray(array);

  descendingNumbers = descendingNumbers.join('');
  console.log(descendingNumbers);

  return parseInt(descendingNumbers);
}
