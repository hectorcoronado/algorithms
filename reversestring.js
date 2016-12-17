/*
A function that reverses a string
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
