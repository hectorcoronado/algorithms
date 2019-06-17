/**
 * write a function called `isSubsequence` which
 * - takes in 2 strings and
 * - checks whether the characters in the 1st string
 * - appear somewhere in the 2nd string
 * - **without** changing their order
 * 
 * isSubsequence('hello', 'hello world') // true
 * isSubsequence('sing', 'sting') // true
 * isSubsequence('abc', 'abracadabra') // true
 * isSubsequence('abc', 'acb') // false
 */

const isSubsequence = (str1, str2) => {
    let str1Char = 0
    let str2Char = 0

    while (str1Char < str1.length) {
        if (str2Char < str2.length) {
            if (str1[str1Char] === str2[str2Char]) {
                str1Char += 1
                str2Char += 1
            } else {
                str2Char += 1
            }
        } else return false
    }

    return true
}

/** other solutions

// iterative solution; it doesn't increment `j` unless str2[j] !== str1[i]

const isSubsequence = (str1, str2) => {
    let i = 0
    let j = 0

    if (!str1) return true

    // start at beginning of `str2`
    while (j < str2.length) {

        // are characters equal? if so, compare next character in `str1`
        if (str2[j] === str1[i]) i += 1

        // if we've reached the end of `str1` without breaking out of
        // this `while` loop, we've checked every element and found its
        // analogue in `str2`, so we return true
        if (i === str1.length) return true

        // otherwise, we start comparing to next char in `str2`
        j += 1
    }

    return false
}

// recursive, but not O(1)

const isSubsequence = (str1, str2) => {
    if (str1.length === 0) return true

    if (str2.length === 0) return false

    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))

    return isSubsequence(str1, str2.slice(1))
}

 */

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false