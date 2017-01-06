/*
Write a range function that takes two arguments,
start and end,
and returns an array containing all the numbers
from start up to (and including) end.
*/

// function range(start, end) {
//   var result = []
//   for (var i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }


let range = (start, end) => {
  let result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  console.log(result);
  return result;
}

range(1, 10);
