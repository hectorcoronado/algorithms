// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// const capitalize = str => {
//   let capitalized = ''
//   str = str.split(' ')
//
//   str.forEach(word => {
//     let newWord = ''
//     let capital = word[0].toUpperCase()
//     let remainder = word.slice(1)
//     newWord = newWord.concat(capital, remainder)
//     capitalized += `${newWord} `
//   })
//   return capitalized.trim()
// }

// const capitalize = str => {
//   let words = []
//
//   str.split(' ').forEach(word =>
//     words.push(word[0].toUpperCase() + word.slice(1))
//   )
//
//   return words.join(' ')
// }

/**
  * 1. create an empty string called 'result'
  * 2. for each character in the string
  *   - if the character to the left of the current char is a space
  *       - capitalize it and add it to 'result'
  *   - else
  *       - add it to 'result'
  */

const capitalize = str => {
  let result = str[0].toUpperCase()

  str = str.split('')

  for (let i = 1; i < str.length; i += 1) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}

capitalize('a lazy fox')

module.exports = capitalize
