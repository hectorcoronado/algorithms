// This works if the exponent n is an integer.

var isEven = function(n) {
  return n % 2 === 0;
};

var isOdd = function(n) {
  return !isEven(n);
};

var power = function(x, n) {
  console.log("Computing " + x + " raised to power " + n + ".");
  // base case
  if (n === 0) {
    return 1;

  }

  // recursive case: n is negative
  if (n < 0) {
    return 1 / power(x, -n);
  }

  // recursive case: n is odd
  if (isOdd(n)) {
    return power(x, n - 1) * x;
  }

  // recursive case: n is even
  if (isEven(n)) {
    var y = power(x, n / 2);
    return y * y;
  }
};

/*
when n is POSITIVE and EVEN:
 - When you multiply powers of x, you add the exponents:
    x^a * x^b = x^a+b
 - Therefore, if n is positive and even, then
    x^n = x^(n/2) * x^(n/2)
 - If you were to compute y = x^n/2 recursively, then
    x^n = y * y

when n is POSITIVE and ODD:
 - x^n = x^(n-1) * x
 - and n-1 either is 0 or is positive and even
 - and so you could ompute x^(n-1) recursively and then
 - use this result to compute x^n = x^(n-1) * x

when n is NEGATIVE:
 - then x^n = 1/x^(-n),
 - and the exponent -n is positive,
 - so you can compute x^(-n) recursively and take its reciprocal
*/
