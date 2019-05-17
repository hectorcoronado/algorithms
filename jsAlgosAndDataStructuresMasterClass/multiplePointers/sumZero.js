/**
  * write a function called `sumZero` that accepts a **sorted** array of integers
  * 
  * the function should find the **first** pair where the sum === 0
  * @return:
  * - array that includes both values that sum to 0, or
  * - `undefined` if a pair does not exist
  * 
  * sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
  * sumZero([-2, 0, 1, 3]) // undefined
  * sumZero([1, 2, 3]) // undefined
  */

// let arr1 = [-3, -2, -1, 0, 1, 2, 3]
// let arr2 = [-2, 0, 1, 3]
// let arr3 = [1, 2, 3]
// let arr4 = [-4, -3, -2, -1, 0, 1, 2, 5]

// const sumZero = arr => {
//     for (let i = 0; i < arr.length; i += 1) {
//         // console.log('i:', i)
//         for (let j = i + 1; j < arr.length; j += 1) {
//             // console.log('j:', j)
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
//     return undefined
// }

/**
  * the above works, but a better approach **assuming we have a sorted array** would be to:
  * 
  * 1. create a reference to the smallest element in the array, `smallest`, i.e. the first, and
  * 2. create a reference to the largest element in the array, `largest`, i.e. the last, and compare them;
  *     - *if* those numbers equal 0, we're done
  *     - *if* those numbers add up to > 0, we can remove the last element, move our `largest`
  *       reference the 2nd largest and compare them once again,
  *     - *if* those numbers add up to < 0, we can move our `smallest` reference to the 2nd smallest
  *       element, and restart the process
  */

 let arr1 = [-3, -2, -1, 0, 1, 2, 3]
 let arr4 = [-4, -3, -2, -1, 0, 1, 2, 5]
 
 let sumZero = arr => {
     let smallestEl = arr[0]
     let largestEl = arr[arr.length - 1]
 
      while(arr.length) {
         if (smallestEl + largestEl === 0) {
             return [smallestEl, largestEl]
         } else if (smallestEl + largestEl > 0) {
             arr.pop()
             sumZero(arr)
         } else if (smallestEl + largestEl < 0) {
             arr.shift()
             sumZero(arr)
         }
     }
     
     return undefined
 }
 
 console.log(sumZero(arr1))
 console.log(sumZero(arr4))