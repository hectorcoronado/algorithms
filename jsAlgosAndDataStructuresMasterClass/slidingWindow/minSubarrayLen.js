/**
  * write a function called `minSubArrayLen` which accepts
  * - an array of positive integers, and
  * - a positive integer
  * 
  * this function should return the minimal length of a **contiguous**
  * subarray of which the sum is greater than or equal to the integer
  * passed to the function, or `0` if there isn't one.
  * 
  * minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> b/c [4, 3] is the smallest subarray
  * minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> b/c [5, 4] is the smallest subarray
  * minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> b/c [62] 
  * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
  * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
  * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 5
  * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
  */


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
    // initialize var `total` to 0
    // init var start at arr[0]
    // init var next at arr[1]
    // if arr[0] >= num return 1
    // else add arr[0] + arr[1], then
    //    increment next by 1, repeat

    let start = 0
    let next = 1
    let total = 1
    let sum = arr[start]
    let prevLowest = 0
    let currentLowest = 0
    
    while (start < arr.length - 1) {
        // console.log(`start === ${arr[start]} and next === ${arr[next]}`)
        
        if (arr[start] >= num || arr[next] >= num) {
            return 1
        }
        
        sum += arr[next]
        total += 1
        // console.log(`sum += arr[next] === ${sum}, and total === ${total}`)

        if (sum >= num) {
            if (currentLowest === 0 || currentLowest > total) {
                currentLowest = total
            } else {
                start +=1
                next = start + 1
                total = 1
                sum = arr[start]
            }
        } else if (next < arr.length) {
            next += 1
        } else {
            currentLowest = total
            start += 1
            next = start + 1
            total = 1
            sum = arr[start]
        }
    }
    return currentLowest
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> b/c [4, 3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> b/c [5, 4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> b/c [62] 
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 5
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0
