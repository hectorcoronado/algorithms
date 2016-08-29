/*
Return the length of the longest word in a provided sentence.

Your response should be a number.
*/


function findLongestWord(str) {
  var arrayOfStrings = str.split(' '),
      lgth = 0,
      longest;
  for(var i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > lgth) {
      lgth = arrayOfStrings[i].length;
      longest = arrayOfStrings[i];
    }
  }
  return longest.length;
}
