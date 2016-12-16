/*
A weird and not very useful implementation of inserting values
into JavaScript arrays -- from Khan Academy's implementation of
Insertion Sort. Values from array[0] to array[rightIndex] are
assumed to be already sorted???
*/

var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
console.log("Array after inserting 2:  " + array);
// should log out: (array, [2, 3, 5, 7, 11, 13, 9, 6])

insert(array, 5, 9);
console.log("Array after inserting 9:  " + array);
// should log out: (array, [2, 3, 5, 7, 9, 11, 13, 6])

insert(array, 6, 6);
console.log("Array after inserting 6:  " + array);
// should log out: (array, [2, 3, 5, 6, 7, 9, 11, 13])
