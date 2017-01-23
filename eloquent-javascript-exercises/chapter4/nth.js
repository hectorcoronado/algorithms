/*
recursive version of nth will, similarly, look at an ever smaller part of the “tail” of the list
and at the same time count down the index until it reaches zero, at which point it can return the
value property of the node it is looking at. To get the zeroeth element of a list, you simply take
the value property of its head node. To get element N + 1, you take the Nth element of the list
that’s in this list’s rest property.
*/

function nth(list, num) {
  if (!list) {
  	return undefined;
  }

  else if(num === 0) {
  	return list.value;
  }

  else {
    return nth(list.rest, num - 1)
  };
}
