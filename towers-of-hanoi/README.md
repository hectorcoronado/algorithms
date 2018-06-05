#Towers Of Hanoi

Given a set of three pegs & *n* disks, with each disk a different size:

1. pegs can be called *a*, *b*, & *c*
2. disks can be numbered from 1, the smallest, to *n*, largest
3. at outset, all *n* disks are on peg *a*, in order of decreasing size from bottom to top, so that
    * disk *n* is on the bottom, &
    * disk 1 is on the top

    ![towers-of-hanoi](https://s3.amazonaws.com/ka-cs-algorithms/hanoi-5-init.png)
4. **move all** *n* **disks from peg a to peg b**

    ![solved-towers-of-hanoi](https://s3.amazonaws.com/ka-cs-algorithms/hanoi-5-final.png)

5. observing these rules:
    * move only one disk at a time
    * no disk may ever rest atop a smaller disk


###Pseudocode/plain-language solution:

For three disks:

1. recursively solve subproblem of moving disks 1 & 2 from peg b to a (move disk 1 from peg b to peg c; move disk 2 from peg b to peg a; move disk 1 from peg c to peg a)
2. disk 3 now exposed, move from peg b to peg c
3. recursively solve the subproblem of moving disks 1 and 2 from peg a to c (move disk 1 from peg a to peg b; move disk 2 from peg a to peg c; move disk 1 from peg b to peg c)

3 disks can be moved from any peg to any peg, moving disks **seven** times.

A discrete disk moves three times for each of the two times that we recursively solve the subproblem of moving disks 1 & 2, plus one more move for disk 3.

How about when *n* = 4?

1. recursively solve the subproblem of moving disks 1 through 3 from peg a to peg c (disks move 7 times)
2. move disk 4 from peg a to peg b (disk moves 1 time)
3. recursively solve the subproblem of moving disks 1 through 3 from peg c to peg b (disks move 7 times)

This solution moves disks 15 times (7 + 1 + 7).

Solving a problem for *n* disks requires 2^(n) - 1 moves.

For *n* = 1(2^(1) - 1 = 1, so one move is needed).
For *n* = 2(2^(2) - 1 = 3).
For *n* = 3(2^(3) - 1 = 7).
For *n* = 4(2^(4) - 1 = 15).

And if you can solve a problem for *n* - 1 disks in 2^(n-1) - 1 moves, then you can solve a problem for *n* disks in 2^(n) - 1 moves.

1. You need 2^(n-1) - 1 to recursively solve the first subproblem of moving disks 1 through *n* - 1,
2. one move to move disk *n*,
3. and another 2^(n-1) - 1 to recursively solve the second subproblem of moving disks 1 through *n* - 1.
4. Adding these moves up, we get:
    * 2^(n) - 1
