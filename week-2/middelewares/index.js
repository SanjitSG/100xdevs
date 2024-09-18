import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneysLength = kidneys.length;

  res.send("You have " + kidneysLength + " kidneys");
});

app.listen(PORT);
