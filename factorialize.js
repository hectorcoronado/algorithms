/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

// Recursive function:

function factorialize(num) {
  if (num === 0 || num === 1) {
    return (num = 1);
  }
  return factorialize(num - 1) * num;
}

// Loop function:

function factorialize(n) {
  j = 1;
  for (i = 1; i <= n; i++) {
    j = j * i;
  }
  return j;
}
