/*
Write a function that finds the most common character in a string. String can be assumed to be
composed of lowercase, a to z letters and not be empty. Return the most repeated character. For a string
with an equal number of characters (e.g. "aabb"), return either.

For "aaabbbbbbccc"  // > 'b'

For "abbickkdeimmmmm" // > 'm'
*/

function mostCommon(input) {
  if (input.length === 1) {
    return input;
  }

  var letterCount = {};
  var max = 0;
  var maxLetter;

  for (var i = 0; i < input.length; i++) {
      var key = input[i];
      typeof letterCount[key] === 'undefined' ?
        letterCount[key] = 1 : letterCount[key] ++;
  }

  for (keys in letterCount) {
      if( letterCount[keys] > max) {
          max = letterCount[keys];
          maxLetter = keys;
      }
  }
  return maxLetter;
}

mostCommon('abbcdefg');
