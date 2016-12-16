#Insertion Sort

[Insertion Sort YouTube Video](https://youtu.be/DFG-XuyPYUQ)

An implementation in JavaScript:

```javascript
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
```

###Analysis:

Like selection sort, insertion sort loops over the indices of an array, and calls `insert` on the elements at `1, 2, 3,...n-1`. As each call to `indexOfMinimum` took an amount of time that depended on the size of the sorted subarray, so **can** (not necessarily "does") each call to `insert`.

In general, if we're inserting into a subarray with *k* elements, all *k* elements may have to slide over by one position.The number of times we need to test an element against a key and slide the element is **constant**, we can call it *c*. It may take up to *c · k* times to insert into a subarray of *k* elements.

In the worst case, every time we insert a value, that value is less than every element in the subarray to its left. In this case, *k = 1* on the first call to `insert`, *k = 2* on the second, *k = 3* on the third, up through the last time, when *k = n - 1*. Therefore, the total time spent inserting into sorted subarrays is:

> c · 1 + c · 2 + c · 3 + ... c · (n - 1) === c · (1 + 2 + 3 + ... + (n - 1))

This sum is an **arithmetic series**, except it goes up to *n - 1* rather than *n*. Using the arithmetic series formula, we get the following total time spent inserting into sorted subarrays:

> c · (n - 1 + 1)((n - 1)/2) = cn²/2 - cn/2

Using big-Θ, we ignore the low-order term *cn/2* and the constants *c* and *1/2*, so the running time, in this case, is *Θ(n²)*. This is the case with a reverse-sorted array.

In the best case, with a sorted array, the running time is reduced to *Θ(n)*. In this case, each call to `insert` takes constant time. Because there are *n - 1* calls to `insert`, if each call takes time that is some constant *c*, then the total time for insertion sort is *c ⋅ (n - 1)*, which is *Θ(n)*.

If we're making a blanket statement that applies to all cases of insertion sort, we would say that it runs in *O(n²)*.
