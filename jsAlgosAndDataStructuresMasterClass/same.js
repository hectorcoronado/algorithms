/**
 * write a function called `same` which accepts 2 arrays
 * 
 * the funciton should:
 *  - return `true`:
 *      - if every value in the first array has its corresponding
 *        value squared in the second array, and
 *      - the frequency of values matches
 * 
 * `same([1, 2, 3], [4, 1, 9])` // true
 * `same([1, 2, 3], [1, 9])` // false
 * `same([1, 2, 1], [4, 4, 1])` // false
 */

/**
 * `while` loop solution:
 */
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false

//     while (arr1.length) {
//         el = arr1[0]
//         squared = el * el
//         idxOfSquaredEl = arr2.indexOf(squared)

//         if (idxOfSquaredEl === -1) {
//             return false
//         } else if (idxOfSquaredEl >= 0) {
//             arr1.shift()
//             arr2.splice(idxOfSquaredEl, 1)
//         } else {
//             return false
//         }
//     }

//     return true
// }

/**
 * 
 */


console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false
