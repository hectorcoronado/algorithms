function chessBoard(num) {
  var str = "";
  var hash = "#";
  var blank = " ";
  var newLine = "\n";

  for (var i = 1; i < Math.pow((num+1), 2); i++) {
    if (num === 1) {
      return hash;
    } else if ((i >= num) && (i % (num + 1)) === 0) {
      str += newLine;
    } else if (str.charAt(i-1) === hash) {
      str += blank;
    } else if (str.charAt(i-1) === blank) {
       str += hash;
    } else if (str.charAt(i-1) === newLine) {
      if (str.charAt(i-2) === hash) {
        str += blank;
      } else {
        str += hash;
      }
    }
  }
  console.log(str);
}

chessBoard(8);
