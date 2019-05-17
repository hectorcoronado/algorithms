/**
  * given 2 strings, write function to determine if the 2nd string is an anagram of the first
  */

// const validAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) return false

//     let str1Chars = {}
//     let str2Chars = {}

//     for (let char of str1) {
//         str1Chars[char] ? str1Chars[char] += 1 : str1Chars[char] = 1
//     }

//     for (let char of str2) {
//         str2Chars[char] ? str2Chars[char] += 1 : str2Chars[char] = 1
//     }

//     for (let key in str1Chars) {
//         if (!key in str2Chars) return false
//         if (str1Chars[key] !== str2Chars[key]) return false
//     }

//     return true
// }

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false

    const lookup = {}

    for (let i = 0; i < str1.length; i += 1) {
        let letter = str1[i]

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < str2.length; i += 1) {
        let letter = str2[i]

        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true
}

console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('', '')) // true
console.log(validAnagram('texttwiststime', 'timetwiststext')) // true
console.log(validAnagram('awesom', 'awesome')) // false