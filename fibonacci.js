/*
This function returns an array of Fibonacci series elements,
including all Fibonacci numbers less than or equal to maxNum.
*/


function fibonacci() {
  let fibonacciArray = new Array,
      maxNum = 1000;

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

fibonacci();
