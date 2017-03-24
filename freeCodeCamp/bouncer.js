/*
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  return arr.filter((el) => {
    if (Boolean(el)) {
      return el;
    }
  });
}

bouncer([7, "ate", "", false, 9]);
