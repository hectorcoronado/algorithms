## frequency counters

this pattern can be useful for solving problems of the sort that ask for checking some sort of equivalence, e.g.:

- anagrams
- check if one number has the same digits as another
- check if one set of numbers is e.g. the same as another set of numbers when squared

the idea is to

1. create an `object` for each thing we need to compare that has
     - keys for every character, digit, etc, and
     - a corresponding value with the number of instances that that digit/character/etc appears
2. then compare the keys and their corresponding values