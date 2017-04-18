/*
Given a string of random parentheses, return true if they're balanced and false otherwise.

For example:
'()' // true
')(' // false
'((()))' // true
')))))' // false
*/

function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    // If ever our counter is < 0, parens are unbalanced
    if (previous < 0) {
      return previous;
    }
    // Every time we see an '(', ++ previous
    if (char === '(') {
      return ++previous;
    }
    // Every time we see an ')', -- previous
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParens('()');

balancedParens(')()');
