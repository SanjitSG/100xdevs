import express from "express";
import zod from "zod";
const app = express();

const PORT = 3000;
app.use(express.json());

// zod
const schema = zod.array(zod.number());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  res.send({
    response,
  });
});

app.listen(PORT);

/**
 * import zod from "zod";

function validate(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
  });

  return schema.safeParse(obj);
}

const response = validate({
  email: "test@gmail.com",
  password: "Test@sdfsdf",
});

console.log(response);

 */
