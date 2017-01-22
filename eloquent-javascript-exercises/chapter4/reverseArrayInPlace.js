/*
reverseArrayInPlace, does what the reverse method does: it
modifies the array given as argument in order to reverse its elements.

The trick is to swap the first and last elements, then the second and second-to-last, and so on.
You can do this by looping over half the length of the array (use Math.floor to round down -- you
don’t need to touch the middle element in an array with an odd length) and swapping the element
at position i with the one at position array.length - 1 - i. You can use a local variable to
briefly hold on to one of the elements, overwrite that one with its mirror image, and then put the
value from the local variable in the place where the mirror image used to be.
*/

function reverseArrayInPlace(array) {
    var half = Math.floor(array.length / 2);

    for (var i = 0; i < half; i++) {
        var tempValue = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempValue;
    }
    return array;
}
