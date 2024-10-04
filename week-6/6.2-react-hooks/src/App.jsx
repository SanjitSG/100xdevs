import "./App.css";
import { memo, useCallback, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const printHello = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <div>
      <NewButton prop={printHello} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Counter ({counter})
      </button>
    </div>
  );
}

const NewButton = memo(function ({ prop }) {
  console.log("newBtn rendered");

  return (
    <div>
      <button>New Button</button>
    </div>
  );
});

export default App;
