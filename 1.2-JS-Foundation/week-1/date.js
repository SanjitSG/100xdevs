const currentDate = new Date();

// console.log("current date: ", currentDate.getDate());
// console.log("current month: ", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
// console.log("Year:", currentDate.getFullYear());
// console.log("Hour", currentDate.getHours() % 12);
// console.log("Minutes", currentDate.getMinutes());
// console.log("Seconds", currentDate.getSeconds());

// console.log(currentDate.getUTCFullYear());

// creating a new date
// const newDate = new Date(2023, 9, 12);
// console.log(newDate);

// const newDate = new Date(2023, 8, 15); // Creating a new date
// console.log("New Date:", newDate);

currentDate.setMonth(1); // Setting month to June (zero-indexed)
console.log("After setMonth:", currentDate);
