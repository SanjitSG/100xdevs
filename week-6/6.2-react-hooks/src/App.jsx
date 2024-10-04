import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

  let sum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      console.log("t");

      sum += i;
    }
    return sum;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <br />
      Sum from 1 to {input} is {sum}
      <br />
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
