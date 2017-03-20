/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/

function iqTest(numbers){
    numbers = numbers.split(' ');

    var oddNumbers = [],
        evenNumbers = [],
        evenIndex,
        oddIndex;

    numbers.map(function(el, i) {
        return parseInt(el[i]);
    });

    for (var i = 0; i < numbers.length; i++) {
        numbers[i] % 2 === 0 ?
            evenNumbers.push(numbers[i]) :
            oddNumbers.push(numbers[i])
    }


    if (evenNumbers.length < oddNumbers.length) {
        return evenIndex = numbers.indexOf(evenNumbers[0]) + 1;
    } else {
        return oddIndex = numbers.indexOf(oddNumbers[0]) + 1;
    }

}


function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});

  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}
