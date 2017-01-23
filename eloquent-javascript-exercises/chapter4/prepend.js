/*
write the helper functions prepend, which takes an element and a list and creates a new list that
adds the element to the front of the input list
*/


function prepend(el, list) {
  var newList = {}
  newList.value = el;
  newList.rest = list;
  return newList;
}
