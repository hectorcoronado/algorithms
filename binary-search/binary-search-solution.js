function binarySearch (searchArray, searchElement) {
  //1. declare vars for high, low, and mid points of the array
  var min = 0,
      max = searchArray.length - 1;
      mid,
      currentElement; // for comparisons

  // while the low is less than the high:
  while (min <= max) {
    // set mid equal to halfway between the low and the high
    mid = Math.floor( (min + max) / 2);
    // grab the value of the mid element
    currentElement = searchArray[mid];
    // target has been found as currentElement is searchElement! return index,
    if (currentElement === searchElement) {
      return mid;
    }
    // if target is to the right, cut out the left half of the array:
    else if (currentElement < searchElement) {
      min = mid + 1;
    }
    // else if target is to the let, cut out the right half of the collection
    else {
      max = mid - 1;
    }
  }
  // not found? very sad! return -1
  return -1;
}
