import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setA(10);
    }, 1000);

    setTimeout(() => {
      setB(20);
    }, 5000);

    setTimeout(() => {
      setC(20);
    }, 7000);
  }, []);

  const calcSum = useCallback(() => {
    console.log("first");

    return a + b;
  }, [a, b]);

  return (
    <div>
      <h1>Home</h1>
      <Result calcSum={calcSum} />
    </div>
  );
}

const Result = memo(({ calcSum }) => {
  const sum = calcSum();
  console.log("CHild renders");

  return (
    <>
      <h3>Sum is {sum}</h3>
    </>
  );
});

export default App;
