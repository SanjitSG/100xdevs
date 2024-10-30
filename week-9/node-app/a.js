"use strict";
// 1. Giving type to function argument
function greet(firstName) {
    console.log(`Hello ${firstName}`);
}
greet("Sanjit");
// return type of a function (explicite)
function sum(a, b) {
    return a + b;
}
const x = sum(10, 2);
// implicite return type - based on internal logic
function isLegal(age) {
    if (age > 18)
        return true;
    return false;
}
const st = isLegal(20);
function pa(cb) {
    setTimeout(cb, 1000);
}
pa(() => {
    console.log("Hello");
});
