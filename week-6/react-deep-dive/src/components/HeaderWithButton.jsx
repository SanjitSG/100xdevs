import { useState } from "react";

function HeaderWithButton() {
  const [title, setTitle] = useState("Header1");

  function titleHandler() {
    setTitle("Updated Header " + (Math.random() * 100).toFixed(0));
  }
  return (
    <>
      <button onClick={titleHandler}>Click me to change title</button>
      <h1>{title}</h1>
    </>
  );
}

export default HeaderWithButton;
