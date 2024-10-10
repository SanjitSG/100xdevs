import express from "express"
const app = express();

function notificationGenerator() {

  const myNetwork = Math.floor(Math.random() * 1000);
  const jobs = Math.floor(Math.random() * 5);
  const notifications = Math.floor(Math.random() * 20);
  const messages = Math.floor(Math.random() * 10);

  return ({ myNetwork, jobs, notifications, messages })
}

app.get("/", (req, res) => {
  res.status(200).send("server has started")
})

app.get("/notifications", (req, res) => {
  const notifications = notificationGenerator();
  console.log(notifications);

  res.status(200).json({ notifications })
})
app.listen(3000)