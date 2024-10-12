import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";

const App2 = () => {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>;
};


function Todo({ id }) {
  const currentTodo = useRecoilValue(todoAtomFamily(id))
  return <>
    {currentTodo.title}
    {currentTodo.description}</>
}
export default App2;
