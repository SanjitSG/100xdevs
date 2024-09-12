const str = "Sanjit Gawade";

//length
console.log("lenght of the string: ", str.length);

//indexOf
console.log("Index of G is: ", str.indexOf("G"));

//slice
console.log(str.slice(0, 6));

//replace
console.log(str.replace("Sanj", "Ranj"));

//split
const array = str.split(" ");
console.log(array); //[ 'Sanjit', 'Gawade' ]

//trim
const str2 = "     cmomon satrv  ";
console.log(str2.trim());

//toUpperCase()
//toLowerCase()
