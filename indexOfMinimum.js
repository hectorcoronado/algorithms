/*
A function that is passed an array of integers,
and returns the INDEX of the minimum integer;
this is a usable helper function in a Selection Sort algorithm
*/

function indexOfMinimum(array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  var minValue = array[startIndex];
  var minIndex = startIndex;

  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:
  for (var nextIndex = minIndex + 1; nextIndex < array.length; nextIndex++) {
    if (array[nextIndex] < minValue) {
      minIndex = nextIndex;
      minValue = array[nextIndex];
    };
  };

  return minIndex;
};
