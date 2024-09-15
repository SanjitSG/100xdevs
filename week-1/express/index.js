import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>server started</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});