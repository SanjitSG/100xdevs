## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




let count = 1;
function updateCount() {
  console.log(count++);

  setTimeout(updateCount, 1000);
}

updateCount()



































































(Hint: setTimeout)