/*
Return an array consisting of the largest number from a provided array's sub-arrays.
*/


function largestIntegersArrays(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var maximum = -Infinity;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maximum) {
        maximum = arr[i][j];
      }
    }
    newArr.push(maximum);
  }
  return newArr;
}
