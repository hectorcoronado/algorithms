/*
Simple function to swap out elements of an array, can be used
as a helper method in e.g. a SELECTION SORT algorithm.
*/

function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};
