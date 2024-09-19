import express from "express";
const app = express();

app.get("/calculate", (req, res) => {
  const { p, t, r } = req.query;

  const principal = parseFloat(p);
  const time = parseFloat(t);
  const rate = parseFloat(r);

  if (isNaN(principal) || isNaN(time) || isNaN(rate)) {
    return res.status(400).json({ error: "Invalid input values" });
  }

  // Calculate simple interest
  const interest = (principal * rate * time) / 100;

  res.json({ interest });
});

app.listen(3000);
