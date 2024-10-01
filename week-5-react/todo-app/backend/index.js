import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { todo } from "./db.js";
const app = express();

app.use(express.json()); // automatic parsing json content

// creating todo
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Wrong input !!",
    });
    return;
  }

  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({ msg: "Todo Created" });
});

// getting all todos
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

// updating todos
app.post("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Wrong input!!",
    });
    return;
  }

  // updation code
  await todo.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked completed",
  });
});

app.listen(3000);
