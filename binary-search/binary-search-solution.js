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
  // not found? fuck it, return -1
  return -1;
}

//2. while the low is less than the high:

/*
1. sort array
2. compare targetValue to middle value; if targetValue === middleValue, return & done!

3.
  a. if less than middle value, search left half
  b. if greater than middle value, searh right half
4. repeat
*/
