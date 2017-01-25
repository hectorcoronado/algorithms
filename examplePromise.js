/*
This is just a couple of simple examples of using promises in JS, not strictly speaking a coding challenge or algorithm.

setTimeout is used only to emulate the span of time it may take to resolve or reject a promise.
*/

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(80);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Oakland').then(function (temp) {
  console.log('The temperature in Oakland is: ', temp, ' degrees.');
}, function(err) {
  console.log('Promise error: ', err);
});


function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Need to pass in numbers');
      }
    }, 2000);
  });
}

addPromise(2, 2).then(function(sum) {
  console.log('Promise success: ', sum);
}, function(err) {
  console.log('Promise error: ', err);
});

addPromise(3, 'no').then(function(sum) {
  console.log('Promise success: ', sum);
}, function(err) {
  console.log('Promise error: ', err);
});
