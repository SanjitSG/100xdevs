import React from "react";

const CreateTodo = () => {
  return (
    <>
      <input type="text" name="title" id="title" placeholder="Title" style={{ padding: 10, margin: 10 }} /> <br />
      <input type="text" name="title" id="title" placeholder="Description" style={{ padding: 10, margin: 10 }} /> <br />
      <button>Add a Todo</button>
    </>
  );
};

export default CreateTodo;
