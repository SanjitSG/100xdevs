import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
};

export default Todo;
