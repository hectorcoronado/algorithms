let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let target;


function binarySearch(primes, target) {
  let min = 0,
      max = primes.length - 1,
      guess; // array's middle value

  while(min <= max) {
    guess = Math.floor((min + max) / 2);

    if ( primes[guess] === target ) {
      return guess;
    } else if ( primes[guess] < target ) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};
