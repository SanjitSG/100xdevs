import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(2);

  return (
    <div>
      <button onClick={() => setSelected(1)}>1</button>
      <button onClick={() => setSelected(2)}>2</button>
      <button onClick={() => setSelected(3)}>3</button>
      <button onClick={() => setSelected(4)}>4</button>
      <Todo id={selected} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/todo?id=${id}`).then((res) => {
      console.log(res.data);
      setTodo(res.data.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>Title: {todo?.title}</h1>
      <h5>Description: {todo?.description}</h5>
    </div>
  );
}
export default App;
