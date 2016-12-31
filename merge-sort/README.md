# Merge Sort

[CS50 Video](https://youtu.be/cDNqk4tdvqQ?t=39s)

Merge Sort works on the basic principle of dividing your list into sub-lists (recursively) until your sub-lists are of length one or zero.  Once your sub-lists are at that size, you merge with a neighboring sub-list.  When you merge them, you merge them in ascending or descending order, depending on your implementation.

![Merge Sort visualization](https://webdocs.cs.ualberta.ca/~holte/T26/Lecture6Fig6.gif)

There are TWO functions that work together to accomplish a Merge Sort:

-  A function that takes an array, splits the array in two, and calls a merge function.  

-  A function that takes two arrays as parameters, looks at the the first elements of the two lists, and assembles a resulting list based on the two lists 'zipped' together by pushing the lowest to highest valued elements.

### Resources

- [Merge sort on wikipedia](https://en.wikipedia.org/wiki/Merge_sort)

## Analysis:

Merge sort runs in Θ(*n* lg *n*) time in all cases.

Algorithm | Worst-case running | Best-case time | Average time
----------|--------------------|----------------|-------------
Selection |Θ(*n* ²)            |Θ(*n* ²)        |Θ(*n* ²)
Insertion |Θ(*n* ²)            |Θ(*n*)          |Θ(*n* ²)
Merge     |Θ(*n* lg *n*)       |Θ(*n* lg *n*)   |Θ(*n* lg *n*)
Quick     |Θ(*n* ²)            |Θ(*n* lg *n*)   |Θ(*n* lg *n*)

Merge sort works on a divide-and-conquer principle; the full problem is to sort an entire array, the subproblem is to sort a subarray. In particular, for subarray `array[p..r]` from  `array[0..n-1]`, it's sorting the subarray starting at index *p* and going through index *r*.

1. **Divide** the array by finding the number *q* of the position midway between *p* and *r*
2. **Conquer** by recursively sorting the subarrays in each of the two subproblems created by the divide step. Recursively sort the subarray `array[p..q]` and recursively sort the subarray `array[q+1..r]`
3. **Combine** by merging the two sorted subarrays back into the single sorted `array[p..r]`

## Merge function:
1. Merges two adjacent sorted subarrays, `array[p..q]` and `array[q+1..r]` into a single sorted subarray in `array[p..r]`
2. Given a total of *n* elements for the two subarrays:
    - we have to examine each of the elements in order to merge them together
    - the best we can hope for is a merging time of Θ(*n*)
3. In order to merge the sorted subarrays, we first need to make temporary arrays and copy `array[p..q]` and `array[q+1..r]` into them
    - this is because we cannot write over the positions in `array[p..r]` until we have the elements originally in `array[p..q]` and `array[q+1..r]` copied, so we need to copy all the elements in them to:
    - `lowHalf` for `array[p..q]`, and
    - `highHalf` for `array[q+1..r]`
4. We then merge the two sorted subarrays (`lowHalf` & `highHalf`) back into `array[p..r]`. Because the subarrays are sorted, the smallest value **must** be in one of just two places: `lowHalf[0]` or `highHalf[0]`. Possibly these may be equal, and then we can call either one the smallest value. We establish three variables to index into the arrays:
    - `i` indexes the next element of `lowHalf` that hasn't been copied back into `array`; initially, `i = 0`
    - `j` indexes the next element of `highHalf` that hasn't been copied back into `array`; initially, `j = 0`
    - `k` indexes the next location in `array` that we copy into; initially, `k = p`
5. After we copy from `lowHalf` or `highHalf` into `array`, we increment `k` by one, so that we copy the next smallest element into the next position of `array`
    - if we copied from `lowHalf`, then `i` must be incremented, and
    - if we copied from `highHalf`, then `j` must be incremented
