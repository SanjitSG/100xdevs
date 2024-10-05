import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  useEffect(function () {
    setTimeout(function () {
      setA(10);
    }, 1000);

    setTimeout(function () {
      setB(20);
    }, 5000);

    setTimeout(function () {
      setC(20);
    }, 7000);
  }, []);

  const calcSum = useCallback(
    function () {
      console.log("calsum called");

      return a + b;
    },
    [a, b]
  );

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
