// Simple function to swap out elements of an array:

function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};
