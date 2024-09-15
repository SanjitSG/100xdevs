import express from "express";

const app = express();
const PORT = 3000;

function findSum(n) {
  return (n * (n + 1)) / 2;
}
app.get("/", (req, res) => {
  const n = req.query.n;
  const ans = findSum(parseInt(n));
  res.send(ans.toString());
});

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
