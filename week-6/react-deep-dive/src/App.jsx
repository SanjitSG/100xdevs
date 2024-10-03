import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [title1, setTitle1] = useState("Header1");

  function titleHandler() {
    setTitle1("Updated Header " + (Math.random() * 100).toFixed(0));
  }
  return (
    <div>
      <button onClick={titleHandler}>Click me to change title</button>
      <Header title={title1} />
      <Header title="Header2" />
      <Header title="Header3" />
      <Header title="Header4" />
      <Header title="Header5" />
    </div>
  );
}

export default App;
