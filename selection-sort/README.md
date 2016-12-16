#Selection Sort
---

An implementation of this algorithm in JavaScript:

```javascript
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
```

###Analysis:

In this implementation, `swap` takes *constant time*. There are *n* calls to it.

There is a loop inside of `indexOfMinimum`. How many times does this loop execute? It depends on the sie of the subarray that it's iterating over; on the first step it must iterate over the entire array. The loop runs *n* times, where *n* is equal to the length of the array.

On each subsequent loop, the subarray it must iterate over will be diminished by one.

For an array with e.g. 8 elements, the loop will run:
> 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36

times.

* Sidenote: we can figure out the sum of a series from 1...*n* with the following formula: `(n + 1)(n/2)` ... or put another way: `n^2/2 + n/2`. This is known as an **arithmetic series**

###Asymptotic running-time for selection sort: *Θ(n^2)*

Total running time must account for three things:
1. The running time for all calls to `indexOfMinimum`
2. The running time for all calls to `swap`
3. The running time for the rest of the loop in `selectionSort` function.

There are *n* calls to `swap` and each call takes constant time, so it's *Θ(n)*.

The loop in `selectionSort` tests and increments the loop variable, and calls `indexOfMinimum` and `swap`, which takes constant time for each of the *n* iterations, for another *Θ(n)* time.

For `indexOfMinimum`, each iteration of the loop can be described by an **arithmetic series** which evaluates to `(n+1)(n/2)`, which is equal to `n^2/2 + n/2`. In terms of big-Θ notation, we disregard the constant factor, the factor of 1/2, and the low-order term. The result is that the running time for `indexOfMinimum` is *Θ(n^2)*.

Let's say that selection sort takes around `n^2/10^6` seconds to sort *n* values. If *n* = 100, the running time is about `100^2/10^6 = 1/100` seconds. But if *n* = 1000, it takes about `1000^2/10^6 = 1` second. If *n* = 1,000,000, sort takes `1,000,000^2/10^6 = 1,000,000` seconds, which is about 11.5 **days**. Increasing the array size by a factor of 1000 increases the running time a million times.
