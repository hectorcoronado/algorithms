// anagramPalindrome
//
// input: string
// output: boolean
//
// input: 'carrace' --> 'racecar' --> 'carerac'
// output: true
//
// input: 'tcoocc'
// output: false

function anagramPalindrome(input){
  var characterCount = {};
  for(var i = 0; i < input.length; i++) {
    // 1) encounter character for the first time; not in the characterCount
    if (characterCount[input[i]] === undefined){
      characterCount[input[i]] = 1;
    }
    // 2) encounter character after first time
    else {
      characterCount[input[i]] ++;
    }
  }
  return characterCount;
}

console.log(anagramPalindrome('hello'));
