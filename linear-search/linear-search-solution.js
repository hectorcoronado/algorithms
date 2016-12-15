function linearSearch(arr, target) {
  for (var element = 0; element < arr.length; element++) {
    if (arr[element] === target) {
      return element; // target found in array
    }
  }
  return -1; // target not in array
};
