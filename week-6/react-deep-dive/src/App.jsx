import { useEffect, useState } from "react";
import "./App.css";
import TodoPolling from "./components/TodoPolling";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      const data = await fetch("http://localhost:3000/todos");
      const json = await data.json();
      setTodoList(json.todos);
    }

    setInterval(() => {
      fetchTodos();
    }, 5000);
  }, []);
  return (
    <div>
      {todoList.map((todo) => (
        <TodoPolling key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
