import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

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

// GET
app.get("/", (req, res) => {
  // return total no of kidneys - healthy kidneys - unhealthy kidneys

  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;

  let numberOfHealthyKidneys = 0;
  const healthyKidneys = johnKidneys.filter((kidney) => {
    return kidney.healthy === true;
  });

  numberOfHealthyKidneys = healthyKidneys.length;
  const unhealthyKidneys = numberOfKidneys - healthyKidneys.length;

  res.send({
    numberOfKidneys,
    numberOfHealthyKidneys,
    unhealthyKidneys,
  });
});

// 2. POST
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

// 3. PUT
app.put("/", (req, res) => {
  users[0].kidneys.forEach((kidney) => (kidney.healthy = true));
  res.json({ success: "true" });
});

//4. DELETE
app.delete("/", (req, res) => {
  users[0].kidneys = users[0].kidneys.filter((kidney) => {
    return kidney.healthy == true;
  });

  res.json({ success: "true" });
});

app.listen(PORT);
