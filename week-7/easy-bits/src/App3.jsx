import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./todoAtomFamily";

const App3 = () => {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>;
};

function Todo({ id }) {
  const currentTodo = useRecoilValue(todoAtomFamily(id))
  return <>
    <h2>{currentTodo.title}</h2>
    <h2>{currentTodo.description}</h2>
  </>
}
export default App3;
