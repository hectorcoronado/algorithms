/*
a function that does the same thing that JS forEach method does:
*/

function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}
