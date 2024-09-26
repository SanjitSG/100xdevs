// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

/*
let arr = [1, 2, 3];
console.log("Original array: ", arr);
//push()
arr.push(5);
console.log("After push ", arr);

//pop
arr.pop();
console.log("After pop", arr);

//shift
arr.shift();
console.log(arr);

//unshift

arr.unshift(7);
console.log("After unshifting 7: ", arr);

//splice -> starting form index 1 remove 2 elements and insert 9,3,4. alters original array.
arr.splice(1, 2, 9, 3, 4);
console.log(arr);

let arr1 = ["bob", "alice", "cart", "mae", "cage", "hite"];

//slice -> extracts slice of array (0,3]. do not alert original array
// console.log(arr2.slice(0, 3)); //[ 'bob', 'alice', 'cart' ]

//concat
let arr2 = [1, 2, 3];

const arr3 = arr2.concat(arr1);
console.log(arr3);
*/

// forEach
let array = [1, 2, 3, 4, 5];

function addTwo(num) {
  console.log(num + 2);
}

array.forEach(addTwo);
