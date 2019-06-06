/**
 * write a function called `sameFrequency`
 * 
 * given 2 positive integers, find out if the two numbers
 * have the same frequency of digits
 * 
 * e.g.:
 * 
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 */

const sameFrequency = (num1, num2) => {
    num1 = String(num1)
    num2 = String(num2)

    if (num1.length !== num2.length) return false

    let num1Digits = {}

    for (let i = 0; i < num1.length; i += 1) {
        num1Digits[num1[i]] ? num1Digits[num1[i]] += 1 : num1Digits[num1[i]] = 1
    }

    for (let j = 0; j < num2.length; j += 1) {
        if (!num1Digits[num2[j]]) return false

        num1Digits[num2[j]] -= 1
    }

    return true
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(500, 1000)) // false
console.log(sameFrequency(111111, 1111)) // false
console.log(sameFrequency(3589578, 5879385)) // true
