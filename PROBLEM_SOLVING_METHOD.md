# How can we solve these kinds of problems?
----------------

## I. Understand the problem:

Carry out the following steps when given a problem to solve **before beginning to solve**:

1. Restate the problem in your own words
2. Establish *inputs* required for the problem
3. Establish *output(s)* required of the solution
4. Determine if output(s) can be obtained with the given inputs. I.e. is there enough information to solve the problem? This question may not be fully answerable until after one sets about solving the problem, but is worth considering from the outset.
5. Determine how to label the pertinent data that are part of the problem.

## II. Explore examples

1. Formulate examples to clarify the problem.
    - Begin with simple examples;
    - progress to more complex ones;
    - explore examples with empty inputs;
    - explore examples with invalid inputs.

2. Examples will also provide sanity checks that increase likelihood of eventual solution working as expected.

## III. Break down the problem

1. Say you're given a problem of counting the number of times a character appears in a string
2. You may begin by writing the most high-level possible pseudo-code:

```javascript
const charCount(str) => {
    // do something

    // return an object with
        // letters for keys and 
        // numbers for times each letter was found
}
```

3. You can then start providing a bit more detail one step at a time

```javascript
const charCount(str) => {
    // create an object

    // loop over the string

    // return the created object with
        // letters for keys and 
        // numbers for times each letter was found
}
```

## IV. Solve/Simplify

1. If you've gone through the steps above and got a structure set up such that you can attempt a solution, attempt the solution.

2. If not, try to solve a simpler problem:
    - find the core difficulty in what you're trying to do
    - temporarily ignore that difficulty
    - write a simplified solution
    - then incorporate the difficulty back in

## V. Review your own code & refactor
1. Can you check the result?
2. Can you derive the result differently?
3. Can you understand it at a glance?
4. Can you use the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have others solved this problem?


