import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const todoData = [
  { title: "Exercise", description: "Workout for 30 min" },
  { title: "Sleep", description: "Sleep for 2 hours" },
  { title: "Read", description: "Read a book for 1 hour" },
  { title: "Cook", description: "Cook dinner" },
  { title: "Study", description: "Study for coding interview" },
  { title: "Meditate", description: "Meditate for 10 minutes" },
  { title: "Walk", description: "Take a walk in the park" },
  { title: "Grocery Shopping", description: "Buy groceries" },
  { title: "Clean", description: "Clean your room" },
  { title: "Call Friend", description: "Call a friend and catch up" },
];

function generateRandomTodos() {
  const numberOfTodos = Math.floor(Math.random() * 10) + 1;
  const shuffledTodos = todoData.sort(() => 0.5 - Math.random());

  const todosWithId = shuffledTodos.slice(0, numberOfTodos).map((todo, index) => ({
    id: index + 1,
    ...todo,
  }));

  return todosWithId;
}
app.get("/todos", (req, res) => {
  // generate random set of todos
  const todos = generateRandomTodos();
  res.json({ todos });
});
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
