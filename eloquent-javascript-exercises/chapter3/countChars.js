function countBs(string) {
  return countChars(string, "B");
}

countBs("Brenda Buchanan");

function countChars(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length-1; i++) {
    if (string.charAt(i) === letter) {
      count++
    }
  }
  console.log("Letter count = " + count);
  return count;
}

countChars("Hector Coronado", "o");
