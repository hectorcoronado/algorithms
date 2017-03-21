/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
  var result = [];
  while(arr.length) {
    result.push(arr.splice(0, size));
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
