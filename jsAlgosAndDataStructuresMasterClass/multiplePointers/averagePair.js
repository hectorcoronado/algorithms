/**
 * write a function called `averagePair`, which given
 * - a sorted array of integers, and
 * - a target average
 * 
 * ...determines if there is a pair of values in the array
 * where the average of the pair equals the target average.
 * 
 * there may be more than one pair that matches the average target
 * 
 * const countUniqueValues = arr => {
    if (!arr.length) return 0

    let i = 0

    for (let j = 1; j < arr.length; j += 1) {
        if (arr[i] !== arr[j]) {
            i += 1
            arr[i] = arr[j]
        }
    }
}
 */

const averagePair = (arr, avg) => {
    if ( arr.length < 2 ) return false

    let i = 0
    let j = 1

    while (i < arr.length - 1) {
        if (j < arr.length) {
            if ( (arr[i] + arr[j]) / 2 === avg ) {
                return true
            } else {
                j += 1
            }
        } else {
            i += 1
            j = i + 1
        }
    }

    return false
}

/** other solutions:

// this works because we're given a **sorted** array:
const averagePair = (arr, num) => {
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2

        if (avg === num) return true

        else if (avg < num) start += 1

        else end -= 1
    }

    return false
}

 */

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false