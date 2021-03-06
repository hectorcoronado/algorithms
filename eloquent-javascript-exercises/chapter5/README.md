##Higher order functions:
Functions that operate on other functions, either by taking them as arguments or by returning them.

Example:

```javascript
function greaterThan(n) {
  return function(m) { return m > n; };
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// -> true
```

And you can have functions that change other functions:

```javascript
function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    let val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

noisy(Boolean)(0);
// -> calling with 0
// -> called with 0 - got false
```
As we can see, the second set of parentheses is used to pass in a value to the 'inner' function.

#### **Apply**

The `apply()` method calls a function with a given `this` value and `arguments` provided as an array

```javascript
fun.apply(thisArg, [argsArray])
```
In our `noisy(f)` example, if `f` takes more than one parameter, it geets only the first one. Defining more would be unwieldy, and would deprive `f` of the information in `arguments.length`. For these kinds of situations, we can use `apply()`

#### **Bind**

The `bind()` method, which all functions have, creates a new function that will call the original function but with some of the arguments already fixed.

```javascript
var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));
// -> [{name: "maria van Brussel", ...},
//     {name: "Carel Haverbeke", ...}]
console.log(ancestry.filter(isInSet.bind(null, theSet)));
// -> ...same result
```

The call to `bind` returns a function that will call `isInSet` with `theSet` as first argument, followed by any remaining arguments given to the bound function.

The first argument, where the example passes `null`, is used for method calls, similar to the first argument to `apply`.
