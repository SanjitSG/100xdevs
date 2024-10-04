import { memo } from "react";
import "./App.css";
import useTodo from "./hooks/useTodo";

function App() {
  const { todos, isLoading } = useTodo();

  return <>{isLoading ? <div>Loading</div> : todos.map((todo) => <Todo key={todo.id} todo={todo} />)}</>;
}

const Todo = memo(({ todo }) => {
  const { title, description } = todo;
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}, []);
export default App;
