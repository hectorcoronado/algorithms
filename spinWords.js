/*
Write a function that takes in a string of one or more words, and returns the same string, but with
all five or more letter words reversed (Just like the name of this Kata). Strings passed in will
consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

function spinWords(input) {
  if (input.length < 5) {
    return input;
  };

  let arrayOfWords = input.split(' ');

  for (var i = 0; i < arrayOfWords.length; i++) {
    let word = arrayOfWords[i];
    if (word.length > 4) {
      arrayOfWords[i] = word.split('').reverse().join('');
    }
  }

  return arrayOfWords.join(' ');
}
