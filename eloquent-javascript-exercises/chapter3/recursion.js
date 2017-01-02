// A brief explanation of recursive functions:

function findSolution(target) {
  function find(start, history) {
    if (start === target) {
      return history;
    } else if (start > target) {
      return null;
    } else {
      return find(start + 5, "(" + history + " + 5)") ||
        find(start * 3, "(" + history + " * 3)");
    }
  }
  return find(1, "1");
}

/*
- The inner function find() does the recursing, it takes 2 args:
  - current number,
  - a string that records how we've reached this number,
- and returns:
  - a string that shows how to get to the target, or
  - null

To do this, function performs one of three actions:
  1. if the current number is the target number, the current history is a way to reach that target
      so it is returned
  2. if the current number is greater than the target, there's no sense in furthering history,
      since both adding and multiplying only make the number bigger
  3. if we're still below the target, the function tries both possible paths that start from the
      current number, by calling itself twice, once for each of the allowed next steps:
      - if the first call returns !null, it is returned
      - otherwise, the second call is returned -- regardless of whether it produces a string or null

if we called findSolution(target) with 13 as its argument, it would look like this:


find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!!!

- The first time find() is called, it calls itself twice to explore solutions starting with (1 + 5)
  and (1 * 3)
  - first call tries to find a solution that starts with (1 + 5) and, recursively, explores EVERY
    solution that yields a number less than or equal to the target number
    - since it doesn't find a solution that hits the target, it returns null back to the first call
    - the || operator causes the call that explores (1 * 3) to happen

*/
