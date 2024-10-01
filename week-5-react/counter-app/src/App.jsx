import { useState } from "react";
import "./App.css";
// todo application
/**
 *
 * todo : [{title: "todo1", description: "desc", completed: false}]
 *
 */
function App() {
  const [todos, setTodos] = useState([
    { title: "Study DSA", description: "Study Striver DSA", completed: false },
    { title: "Study Dev", description: "Study harkarit dev", completed: false },
  ]);

  return (
    <>
      {todos.map((todo, index) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            key={index}
          />
        );
      })}
    </>
  );

  function Todo(props) {
    const { title, description, completed, index } = props;

    return (
      <div key={index}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    );
  }
}

export default App;
