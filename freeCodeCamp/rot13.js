/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  var isAThroughM = /[A-M]/,
      isNThroughZ = /[N-Z]/;

  var result = "";

  for (var i = 0; i < str.length; i++) {
    if (isAThroughM.test(str[i])) {
      plusThirteen = str.charCodeAt(i) + 13;
      result += String.fromCharCode(plusThirteen);
    } else if (isNThroughZ.test(str[i])) {
      minusThirteen = str.charCodeAt(i) - 13;
      result += String.fromCharCode(minusThirteen);
    } else {
      result += str[i];
    }
  }
  // console.log(result);
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
