// Takes in an array that has two sorted subarrays,
// from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  // Repeatedly compare the lowest untaken element in
  // lowHalf with the lowest untaken element in highHalf
  // and copy the lower of the two back into array

  while ((i <= (q - p) && j <= (r - q - 1))) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;

    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;

  }

  // Once one of lowHalf and highHalf has been fully copied
  // back into array, copy the remaining elements from the
  // other temporary array back into the array
  while (i <= (q - p)) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }

  while (j <= (r - q - 1)) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
};
