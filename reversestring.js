/*
A function that reverses a string
*/

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}
