function displayTime() {
  console.clear();

  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

  let period = hours <= 12 ? "PM" : "AM";
  console.log(`Time - ${hours}: ${minutes}: ${seconds} ${period}`);
}

setInterval(displayTime, 1000);
