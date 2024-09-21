let count = 1;
function updateCount() {
  setTimeout(() => {
    updateCount();
  }, 1000);
  console.log(count++);
}

updateCount();
