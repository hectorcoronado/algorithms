var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var newMinimum;
    for (var i = 0; i < array.length; i++) {
        newMinimum = indexOfMinimum(array, i);
        swap(array, i, newMinimum);
    }
};


var array = [7, 11, 99, 88, 9, 22, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);


var array2 = [-4, 8, 9, 2, -11, -5000, 4000];
selectionSort(array2);
console.log("Array after sorting: " + array2);
