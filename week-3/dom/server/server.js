import express from "express";
const app = express();

app.get("/sum", (req, res) => {
  const num1 = Number.parseInt(req.query.num1);
  const num2 = Number.parseInt(req.query.num2);
  const sum = num1 + num2;

  res.json({
    sum,
  });
});

app.listen(5000);
