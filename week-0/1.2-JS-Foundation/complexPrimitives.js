// Q. Print all even numbers in an array.
/**
 
let arr = [21, 22, 23, 24, 25];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
*/

// Q. Print Biggest numbers in an array.
/*

let arr1 = [12, 23, 24, 83, 2, 92];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
        max = arr[i];
      }
    }
    console.log(max);
    console.log(Math.max(...arr));

*/

// Q. Print reverse an array.
/**
 

let arr = [12, 23, 24, 83, 2, 92];
console.log("Original arr: ", arr);
let n = arr.length;
let i = 0;
while (i < n / 2) {
  let temp = arr[i];
  arr[i] = arr[n - 1 - i];
  arr[n - 1 - i] = temp;
  i++;
  }
  
  console.log("Reversed arr: ", arr);
  
  */

// Q. write a program to print all the male people's first name given a complex object

const employees = [
  { firstName: "Bob", gender: "male", age: 28 },
  { firstName: "Alice", gender: "female", age: 27 },
  { firstName: "Eon", gender: "male", age: 26 },
];

for (let i = 0; i < employees.length; i++) {
  if (employees[i]["gender"] == "male") {
    console.log(employees[i]["firstName"]);
  }
}
