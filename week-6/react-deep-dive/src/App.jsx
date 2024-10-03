import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
let counter = 4;
function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "todo1",
      description: "go to gym @ 9",
    },
    {
      id: 2,
      title: "todo2",
      description: "DSA @10",
    },
    {
      id: 3,
      title: "todo3",
      description: "dev @12",
    },
  ]);

  function addTodoHandler() {
    setTodoList([...todoList, { id: counter++, title: "new Todo", description: "new todo desc" }]);
  }
  return (
    <div>
      <button onClick={addTodoHandler}>Add a Todo</button>
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
