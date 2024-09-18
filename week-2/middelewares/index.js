import express from "express";
import zod from "zod";
const app = express();

const PORT = 3000;
const schema = zod.array(zod.number());
app.use(express.json());

// zod

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  res.send({
    response,
  });
});

app.listen(PORT);
