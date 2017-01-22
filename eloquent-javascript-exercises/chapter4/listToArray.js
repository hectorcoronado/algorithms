function listToArray(list) {
  var resultingArray = [];
  for (var node = list; node; node = node.rest) {
    resultingArray.push(node.value);
  }
  return resultingArray;
}
