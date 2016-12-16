var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for (var i = 0 ; i < array.length-1 ; i++) {
        insert(array, i, array[i+1]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
// will log array: [7, 9, 11, 22, 42, 88, 99]);

var array2 = [-Infinity, +Infinity, 300, 2, -0.4002, 37];
insertionSort(array2);
console.log("Array after sorting:  " + array2);
// will log array: [-Infinity, -0.4002, 2, 37, 300, Infinity]);
