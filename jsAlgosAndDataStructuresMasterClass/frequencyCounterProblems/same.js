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
 * `while` loop solution
 * 
 * as written it's not as good as the `for` loop one, because you have to call `shift()` on arr1
 */
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false

//     while (arr1.length) {
//         el = arr1[0]
//         squared = el * el
//         idxOfSquaredEl = arr2.indexOf(squared)

//         if (idxOfSquaredEl === -1) {
//             return false
//         } else {
//             arr1.shift()
//             arr2.splice(idxOfSquaredEl, 1)
//         }
//     }

//     return true
// }

/**
 * nested `for` loop solution:
 */

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false

//     for (let i = 0; i < arr1.length; i += 1) {
//         let correctIdx = arr2.indexOf(arr1[i] ** 2) // `indexOf` is itself looping, hence nested

//         if (correctIdx === -1) return false

//         arr2.splice(correctIdx, 1)
//     }

//     return true
// }

/**
  * both of the above solutions run at 0n^2 -- this is really bad;
  * the operations grow exponentially:
  *     - if the first array is 1000 elements long
  *     - and the second array is also 1000 elements long
  *     - we have to make 1,000,000 operations
  * 
  * *much* better is to have two loops, one for each array, as below:
  */

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] ? frequencyCounter1[val] += 1 : frequencyCounter1[val] = 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) return false

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

console.log(same([1, 2, 3, 2, 5], [1, 9, 4, 25, 4])) //
console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false
