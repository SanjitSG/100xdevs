const displyTime = () => {
  console.clear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  hours > 12 ? hours - 12 : hours;
  console.log(`${hours}:${minutes}:${seconds}`);
};

setInterval(displyTime, 1000);
