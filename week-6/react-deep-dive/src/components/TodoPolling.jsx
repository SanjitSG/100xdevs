import React from "react";

const TodoPolling = ({ todo }) => {
  const { id, title, description } = todo;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TodoPolling;
