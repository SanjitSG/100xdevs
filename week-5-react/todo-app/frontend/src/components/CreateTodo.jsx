import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        style={{ padding: 10, margin: 10 }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Description"
        style={{ padding: 10, margin: 10 }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo Added");
          });
        }}>
        Add a Todo
      </button>
    </>
  );
};

export default CreateTodo;
