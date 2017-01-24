/*
Write a function, deepEqual, that takes two values and returns true only if they are the same value
or are objects with the same properties whose values are also equal when compared with a recursive
call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking
at their properties, you can use the typeof operator. If it produces "object" for both values, you
should do a deep comparison. But you have to take one silly exception into account: by a historical
accident, typeof null also produces "object".
*/


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  else if ((typeof a === "object" && a !== null) && (typeof b === "object" && b !== null)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (var prop in a) {
      if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop)) {
        if (!deepEqual(a[prop], b[prop])) {
          return false;
        }
        return true;
      }
    }
  }
}
