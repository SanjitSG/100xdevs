/**
 * 
 
let time = 10;

let timerId = setInterval(countDown, 1000);

function countDown() {
  if (time == 0) {
    clearInterval(timerId);
    console.log("time's up");
  } else {
    console.log(time);
  time--;
}
}
*/

// let startTime = Date.now();

// setTimeout(() => {
//   let endTime = Date.now();

//   let timeTaken = endTime - startTime;

//   console.log(`Time taken: ${timeTaken} ms`);
// }, 1000);

function displayTime() {
  let now = new Date();

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  let timeString = `${hours}:${minutes}:${seconds}`;

  console.clear();
  console.log("Time: ", timeString);
}

setInterval(displayTime, 1000);
