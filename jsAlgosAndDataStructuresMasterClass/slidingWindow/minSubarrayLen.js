/**
 * write a function `minSubArrayLen` which takes
 * - an array of positive integers, and
 * - a positive integer, and
 * - returns the minimal length of a *contiguous* subarray
 *   of which the sum is greater than or equal to the int
 *   passed to the function
 * - if there isn't one, return 0
 *                 i
 * minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2, b/c [4, 3]
 *                    j
 * 
 * minSubArrayLen([2, 1, 6, 5, 4], 9) // 2, [5, 4]
 * minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1, [62]
 */

const minSubArrayLen = (arr, num) => {
    let start = 0
    let next = 1
    let sum = arr[start]
    let prevMinLen = 0
    let currMinLen = 1

    while (start < arr.length && arr[next]) {
        if (arr[start] >= num || arr[next] >= num) return 1

        
        sum += arr[next]
                
        if (sum < num && next < arr.length) {
            currMinLen += 1
            next += 1
        } else if (sum >= num) {
            currMinLen += 1

            if (prevMinLen === 0 || currMinLen < prevMinLen) {
                prevMinLen = currMinLen
            }

            currMinLen = 1
            start += 1
            next = start + 1
            sum = arr[start]

        } else {
            start += 1
            next = start + 1
            sum = arr[start]
            currMinLen = 1
        }
    }
    return prevMinLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))