/*
write a function that creates a string that represents a num X num grid,
using "\n" to separate lines; at each position of the grid, there is either
a space " ", or a "#" character; the characters should form a chess board

passing the string to console.log for chessBoard(8) should show:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

function chessBoard(num) {
  var board = "";

  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      if((i + j) % 2 === 0) {
        board += "#";
      } else {
        board += " ";
      }
    }
    board += "\n";
  }
  console.log(board);
}
