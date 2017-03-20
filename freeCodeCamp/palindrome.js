/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

// Function that works with varying string formats & removes
// non-alphanumeric, special symbols:
function isPalindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  if (str === (str.split('').reverse().join(''))) {
    return true;
  } else {
    return false;
  }
}


// Function without manipulating string
function isPalindrome(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Recursive w/o for-loop, super verbose version:
var isPalindrome = function(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  function firstCharacter(str) {
    return str.slice(0, 1);
  };

  function lastCharacter(str) {
    return str.slice(-1);
  }

  function middleCharacters(str) {
    return str.slice(1, -1);
  }
  
  if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
  }
  // recursive case
  return isPalindrome(middleCharacters(str));
};
