# Algorithms
----------------

![Algorithms](http://i.giphy.com/eUo2LyzAqeddS.gif)

A collection of coding challenge/interview problems solved in JavaScript.

Also: solutions to (eventually) all exercises in Eloquent JavaScript.

Big Theta partial list of common functions in asymptotic notation, listed from slowest to fastest growing:

1. *Θ(1)*
2. *Θ(lg n)*
3. *Θ(n)*
4. *Θ(n lg n)*
5. *Θ(n²)*
6. *Θ(n²​​ lg n)*
7. *Θ(n³)*
8. *Θ(2^n)*

###Constant Growth

A function has *constant growth* if its output does not change based on the input, *n*.

###Logarithmic Growth

###Linear Growth

A function has *linear growth* if its output increases linearly with the size of its input. If *n* is never raised to a power greater than 1 or used as a power, it is linear, e.g. `3n`.

###Linearithmic Growth

A function is *linearithmic* if we multiply linear terms by a logarithm, they take the form: *n logK n*. With *n* being equal in both, then the growth is dependent on the base *k* of the logarithms. Lesser bases grow more quickly than higher bases, so e.g. *n log2 n* will grow more quickly than *n log6 n*

###Polynomial Growth

A function has *polynomial growth* if its output increases according to a polynomial expression. The way to identify polynomial functions is to find those where *n* is raised to a constant power, e.g. `2n³` or `3n³`.

###Exponential Growth

A function has *exponential growth* if its output increases according to an exponential expression. The way to identify exponential funcitons is to find those where a constant is raised to some expression involving *n*, e.g. `2^n` or `(3/2)^n`.
