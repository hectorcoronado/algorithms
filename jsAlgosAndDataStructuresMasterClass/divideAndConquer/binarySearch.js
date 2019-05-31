// this implementation of binary search only works on a **sorted** array:

const binarySearch = (arr, val) => {
    let min = 0
    let max = array.length - 1

    while (min < max) {
        let middle = Math.floor((min + max) / 2)

        let currentElement = array[middle]

        /**
          * if middle el is less than required val,
          *  we can ignore the first half of the array
          */
        if (array[middle] < val) {
            min = middle + 1
        /**
          * if middle el is greater than required val,
          *  we can ignore the latter half of the array
          */
        } else if (array[middle] > val) {
            max = middle - 1
        // otherwise, we found the required value
        } else {
            return middle
        }
    }

    return -1 // not found
}