// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
  * parseInt Math.sign toString
  */

function reverseInt (n) {
  let sign = Math.sign(n)
  n = n.toString().split('').reverse().join('')

  return parseInt(n) * sign
}

module.exports = reverseInt;
