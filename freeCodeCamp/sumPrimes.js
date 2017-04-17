/*
Given a number, sum all primes within the range 0 to the given number.
*/

function sumPrimes(num) {
  function isPrime(value) {
    for (var i = 2; i < value; i++) { // only check till we get to value -1
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  }
  var result = [];

  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result.reduce((a, b) => {
    return a + b;
  }, 0)
}
