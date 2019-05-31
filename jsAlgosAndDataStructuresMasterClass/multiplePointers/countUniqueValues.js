/**
 * Implement a function called `countUniqueValues`
 * 
 * it accepts a sorted array, and
 * counts the number of unique values in the array
 * 
 * there may be negative numbers in the array, but it
 * will always be sorted
 */

let arr1 = [1, 1, 1, 1, 1, 2] // 2
let arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 13] // 7
let arr3 = [] // 0
let arr4 = [-2, -1, -1, 0, 1] // 4
let arr5 = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]

// const countUniqueValues = arr => {
//     let uniqueVals = []

//     for (let num of arr) {
//         if (uniqueVals.indexOf(num) < 0) {
//             uniqueVals.push(num)
//         }
//     }

//     console.log(uniqueVals.length)

//     return uniqueVals
// }

// `while` loop solution:
// const countUniqueValues = arr => {
//     if (!arr.length) return 0

//     let i = 0
//     let j = 1

//     while (j < arr.length) {
//         if (arr[i] === arr[j]) {
//             j += 1
//         } else {
//             i += 1
//             arr[i] = arr[j]
//         }
//     }
//     console.log(i + 1)
// }

// `for` loop solution:
const countUniqueValues = arr => {
    if (!arr.length) return 0

    let i = 0

    for (let j = 1; j < arr.length; j += 1) {
        if (arr[i] !== arr[j]) {
            i += 1
            arr[i] = arr[j]
        }
    }
}

countUniqueValues(arr1)
countUniqueValues(arr2)
countUniqueValues(arr3)
countUniqueValues(arr4)