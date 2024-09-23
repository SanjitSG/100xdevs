/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }, n);
}

module.exports = wait;
