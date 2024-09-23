function displayTime() {
  console.clear();

  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

  let period = hours <= 12 ? "PM" : "AM";

  // Use padStart to ensure two-digit formatting
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  console.log(`Time - ${hours}: ${minutes}: ${seconds} ${period}`);
}

setInterval(displayTime, 1000);
