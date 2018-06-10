// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
  * common questions that can use the same technique as below:
  * - what is the most common character in a string?
  * - does stringA have same characters as stringB (anagram)?
  * - does the given string have any repeated characters in it?
  *
  * you must convert the string to an object, with each character
  * - becoming a key, and the number of times it's found in the
  * - string its value
  *
  * once you build out the object, the key with the highest value
  * - is the answer

  chars[char] = chars[char] + 1 || 1
  */

// const maxChar = str => {
//   let chars = {}
//   str = str.split('')
//
//   str.forEach(char => {
//     chars[char] = chars[char] + 1 || 1
//   })
//
//   return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b)
// }

// const maxChar = str => {
//   let chars = {}
//
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1
//   }
//
//   console.log(chars)
//
//   return Object.keys(chars).reduce((a, b) =>
//     chars[a] > chars[b] ? a : b
//   )
// }

const maxChar = str => {
  const charMap = {}

  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] += 1
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

maxChar('abbcccddddeeeee')

module.exports = maxChar
