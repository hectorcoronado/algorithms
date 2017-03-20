/*
function that returns an array with string representation of
numbers from 1 to n. For multiples of 3, it outputs "Fizz"
instead of number, multiples of 5 outputs "Buzz", multiples of
3 && 5 outputs "FizzBuzz"
*/

var fizzBuzz = function(n) {
    let result = [];
    let msg;
    for (let i = 1; i <= n; i++, msg = "" ){
        if(i % 15 === 0) {
            msg = "FizzBuzz";
            result.push(msg);
        } else if (i % 3 === 0) {
            msg = "Fizz";
            result.push(msg);
        } else if (i % 5 === 0) {
            msg = "Buzz";
            result.push(msg);
        } else {
            i = i.toString();
            result.push(i);
        }
    }
    console.log(result);
    return result;
};


fizzBuzz(500);
