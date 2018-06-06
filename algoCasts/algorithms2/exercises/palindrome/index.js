// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const palindrome = str =>
//   str === str.split('').reverse().join('')

// const palindrome = str =>
//   str === str.split('').reduce((rev, char) => char + rev, '')

// const palindrome = str => {
//   str = str.split('')
//
//   return str.every(el => {
//     let i = str.indexOf(el) + 1
//     return el === str[str.length - i]
//   })
// }

// this isn't ideal, as it makes more checks than necessary.
const palindrome = str => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

module.exports = palindrome
