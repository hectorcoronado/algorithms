/*
This function returns an array of Fibonacci series elements,
including all Fibonacci numbers less than or equal to maxNum.
*/


function fibonacci() {
  let fibonacciArray = new Array,
      maxNum = 12586269025;

  let a = 0,
      b = 0,
      c = 1;

  while (c < maxNum) {
    fibonacciArray[fibonacciArray.length] = c;
    a = b; // 0 in the first loop
    b = c; // 1 in the first loop
    c = a + b;
  }
  console.log(fibonacciArray);
  return fibonacciArray;
}

// will create array with first 49 terms:
console.log(fibonacci());


/*
and this fibonacci function will return the value of the nth term passed in as an argument... but will be ponderously slow above plus or minus 50 -- as in, don't run it, will literally take an unknown amount of time:
*/
function fibonacci(n) {
  if(n === 0 || n === 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}


/*
and this does the same, efficiently
*/

let fibonacci = (function() {
  let mem = {};

  function f(num) {
    let value;

    if (num in mem) {
      value = mem[num];
    } else {
      if (num === 0 || num === 1) {
        value = num;
      } else {
        value = f(num - 1) + f(num - 2);
      }
      mem[num] = value;
    }
    return value;
  }

  return f;
})();

console.log(fibonacci(200));
