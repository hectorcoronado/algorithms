/*
A function that reverses a string
The split() method splits a String object into an array of string by separating the string into sub strings.
The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
The join() method joins all elements of an array into a string.
*/

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

/*
Another (faster?) solution
*/

var reverseString = function(s) {
  let revString = '';
  for (var i = s.length - 1; i >= 0; i--) {
    revString += s[i];
  }
  return revString;
};
