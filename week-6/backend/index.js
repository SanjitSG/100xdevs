import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({}));

const todoData = [
  { id: 1, title: "Exercise", description: "Workout for 30 min" },
  { id: 2, title: "Sleep", description: "Sleep for 2 hours" },
  { id: 3, title: "Read", description: "Read a book for 1 hour" },
  { id: 4, title: "Cook", description: "Cook dinner" },
  { id: 5, title: "Study", description: "Study for coding interview" },
  { id: 6, title: "Meditate", description: "Meditate for 10 minutes" },
  { id: 7, title: "Walk", description: "Take a walk in the park" },
  { id: 8, title: "Grocery Shopping", description: "Buy groceries" },
  { id: 9, title: "Clean", description: "Clean your room" },
  { id: 10, title: "Call Friend", description: "Call a friend and catch up" },
];

const generateRandomTodos = () => {
  const numberOfTodos = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
  const shuffledTodos = todoData.sort(() => 0.5 - Math.random()); // Shuffle the predefined todos
  return shuffledTodos.slice(0, numberOfTodos); // Return a random subset
};

app.get("/todos", (req, res) => {
  // generate random set of todos
  const todos = generateRandomTodos();
  res.json({ todos });
});

app.get("/todo", (req, res) => {
  console.log(req.query);
  const { id } = req.query;

  const todo = todoData.find((todo) => todo.id === parseInt(id));
  console.log(todo);

  if (todo) {
    res.json({ todo });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// starting server
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
