import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const todos = await fetch("http://localhost:3000/todos");
      const json = await todos.json();
      setTodos(json.todos);
    };
    getData();
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
