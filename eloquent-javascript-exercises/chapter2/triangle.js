//
// function triangle() {
//   var str = "#";
//   for (var i = 0; i < 6; i++) {
//     console.log(str);
//     str += "#";
//   }
//   return str;
// }
//
// triangle();

/**
  * @param num the number of lines to print out
  */

const triangle = num => {
  let str = '#'

  for (let i = 0; i < num; i++) {
    console.log(str)
    str += '#'
  }

  return str
}

console.log(triangle(10))
