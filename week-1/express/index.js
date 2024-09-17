import express from "express";

const app = express();
const PORT = 3000;

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  // return total no of kidneys - healthy kidneys - unhealthy kidneys

  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;

  let numberOfHealthyKidneys = 0;
  const healthyKidneys = johnKidneys.filter((kidney) => {
    kidney.healthy == true;
  });

  numberOfHealthyKidneys = healthyKidneys.length;
  const unhealthyKidneys = numberOfKidneys - healthyKidneys.length;

  res.send({
    numberOfKidneys,
    numberOfHealthyKidneys,
    unhealthyKidneys,
  });
});

app.listen(PORT);
