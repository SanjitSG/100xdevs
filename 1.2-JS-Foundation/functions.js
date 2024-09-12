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
