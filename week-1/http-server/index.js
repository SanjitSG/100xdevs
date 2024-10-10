import bodyParser from "body-parser";
import express from "express";
const app = express();
console.log(app);
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Server started</h1>");
});

app.post("/m", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
