/*
write a function that prints out:

*
**
***
****

...and so on, depending on the integer arg passed to it (assume it'll always be passed an integer)
*/

function triangle(num) {
  let str = "";

  for (var i = 1; i <= num; i++) {
    str += ("*" * i + "\n") ;
  }
  console.log(str);
}

triangle(3)
