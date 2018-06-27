// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// const chunk = (array, size) => {
//   let result = []
//
//   if (array.length < size) {
//     return result.push(array)
//   }
//
//   while (array.length) {
//     result.push(array.splice(0, size))
//   }
//   return result
// }

/**
  * 1. create empty array to hold `chunks`
  * 2. for each element in the `unchunked` array:
  *   - retrieve the last element in the `chunked` array
  *   - if last element does not exist, or its length is equal
  *     to chunk size
  *       - push a **new** chunk into `chunked` with the current element
  *   - *else* add the current element into the chunk
  */

// const chunk = (array, size) => {
//   let chunked = []
//
//   for (let element of array) {
//     let last = chunked[chunked.length - 1]
//
//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//
//   return chunked
// }

/**
  * 1.  create empty `chunked` array
  * 2.  create `index` var starting at 0
  * 3.  while index is less than array.length
  *       - push a slice of length `size` from `array` into `chunked`
  *       - add `size` to `index`
  */

const chunk = (array, size) => {
  let chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

module.exports = chunk
