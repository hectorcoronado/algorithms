/**
  * Write a function called `areThereDuplicateArgs`, which accepts
  * - a variable number of arguments
  * 
  * ..and checks whether there are any duplicates among the arguments
  * passed in.
  * 
  * areThereDuplicateArgs(1, 2, 3) // false
  * areThereDuplicateArgs(1, 2, 2) // true
  * areThereDuplicateArgs('a', 'b', 'c', 'a') // true
  */

const areThereDuplicateArgs = (...args) => {
    if (!args) return false

    let argsFrequencyCounter = {}

    for (let arg of args) {
        if (!argsFrequencyCounter[arg]) {
            argsFrequencyCounter[arg] = 1
        } else return true 
    }

    return false
}

console.log(areThereDuplicateArgs(1, 2, 3)) // false
console.log(areThereDuplicateArgs(1, 2, 2)) // true
console.log(areThereDuplicateArgs('a', 'b', 'c', 'a')) // true