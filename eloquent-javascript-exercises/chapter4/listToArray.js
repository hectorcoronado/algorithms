/*
Every iteration of the loop, node points to the current sublist, and the body can read its value
property to get the current element. At the end of an iteration, node moves to the next sublist.
When that is null, we have reached the end of the list and the loop is finished.
*/

function listToArray(list) {
  var resultingArray = [];
  for (var node = list; node; node = node.rest) {
    resultingArray.push(node.value);
  }
  return resultingArray;
}
