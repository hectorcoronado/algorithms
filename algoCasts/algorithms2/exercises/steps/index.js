// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// const steps = n => {
//   let pyramid = ''
//
//   for (let i = 0; i < n; i += 1) {
//     pyramid += '#'
//     console.log(pyramid.padEnd(n, ' '))
//   }
// }

const steps = n => {
  for (let i = 1; i <= n; i += 1) {
    console.log('#'.repeat(i).padEnd(n, ' '))
  }
}

module.exports = steps
