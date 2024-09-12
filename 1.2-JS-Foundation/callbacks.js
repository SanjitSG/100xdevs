function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}
function sumOfSomething(a, b, cb) {
  let val1 = cb(a);
  let val2 = cb(b);
  return val1 + val2;
}

//passing a function as an argument
let result = sumOfSomething(2, 3, square);
console.log(result);

//anonymous function
let result2 = sumOfSomething(2, 2, function (n) {
  return n * n * n;
});

console.log(result2);
