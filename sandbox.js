let numbers = [10, 20, 30];
let sum = 0;


for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}


numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

let primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function(acc, primaryColor) {
  acc.push(primaryColor.color);
  return acc;
}, []);
