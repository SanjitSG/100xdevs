import axios from "axios";
import { useEffect, useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://todo-generator.onrender.com/todos").then((res) => {
      setTodos(res.data.todos);
      setIsLoading(false);
    });
  }, []);

  return { todos, isLoading };
};

export default useTodo;
