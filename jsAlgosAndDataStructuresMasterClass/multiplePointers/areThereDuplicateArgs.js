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

    let left = 0
    let right = args.length - 1

    while (left < right || left === right) {
        if (left !== right && args[left] === args[right]) {
            return true
        } else if (right > left) {
            right -= 1
        } else {
            left += 1
            right = args.length - 1
        }
    }

    return false
}

console.log(areThereDuplicateArgs(1, 2, 3)) // false
console.log(areThereDuplicateArgs(1, 2, 2)) // true
console.log(areThereDuplicateArgs('a', 'b', 'c', 'a')) // true