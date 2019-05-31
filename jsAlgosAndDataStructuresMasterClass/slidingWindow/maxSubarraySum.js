/**
 * write a function `maxSubarraySum` which accepts:
 * - an array of integers, and
 * - a number called `n`
 * 
 * the function should calculate the max sum of `n` consecutive
 * elements in the array
 */

const arr1 = [1, 2, 5, 2, 8, 1, 5] // n = 2, returns 10
const arr2 = [1, 2, 5, 2, 8, 1, 5] // n = 4, returns 17
const arr3 = [4, 2, 1, 6] // n = 1, returns 6
const arr4 = [4, 2, 1, 6, 2] // n = 4, returns 13
const arr5 = [] // n = 4, returns null

/**
 * nested `for` loop solution:
 * 
 * const maxSubarraySum = (arr, n) => {
 *     if ( num > arr.length) {
 *         return null
 *     }
 *     
 *     let max = -Infinity
 * 
 *     for (let i = 0; i < arr.length - num + 1; i += 1) {
 *         let temp = 0
 *         
 *         for (let j = 0; j < num; j += 1) {
 *             temp += arr[i + j] // adds each element to temp
 *         }
 * 
 *         if (temp > max) {
 *             max = temp
 *         }
 *     }
 *     
 *     return max
 * }
 */

// const maxSubarraySum = (arr, n) => {
//     let max = -Infinity
//     let temp = []

//     if (n > arr.length) return(console.log(null))

//     if (n === 1) {
//         for (let i = 0; i < arr.length; i += 1) {
//             if (arr[i] > max) {
//                 max = arr[i]
//             }
//         }
//     }

//     for (let i = 0, j = n; i < arr.length - n + 1; i += 1, j = i + n) {
//         temp = arr.slice(i, j)
//         let sum = temp.reduce((accumulator, currentValue) => accumulator + currentValue)
//         if (sum > max) {
//             max = sum
//         }
//     }
//     console.log(max)
//     return max
// }

const maxSubarraySum = (arr, num) => {
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null

    for (let i = 0; i < num; i += 1) {
        maxSum += arr[i] // create initial sum of sub-array from arr[0] to arr[num]
    }

    tempSum = maxSum

    for (let i = num; i < arr.length; i += 1) {
        tempSum = tempSum - arr[i - num] + arr[i] // remove first element from sum, add next one, then..
        maxSum = Math.max(maxSum, tempSum) // ..hang on to the greater of the two sums
    }

    console.log(maxSum)
    return maxSum
}

maxSubarraySum(arr1, 2)
maxSubarraySum(arr2, 4)
maxSubarraySum(arr3, 1)
maxSubarraySum(arr4, 4)
maxSubarraySum(arr5, 4)