import React from "react";
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./todoAtomFamily";

const App3 = () => {
  return <RecoilRoot>
    <Todo id={3} />
    <Todo id={19} />
  </RecoilRoot>;
};

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todoAtomFamily(id))
  if (todo.state === "loading") {
    return <div>
      <h2>Loading...</h2>
    </div>
  }
  if (todo.state === "hasValue") {
    return <>
      <h2>{todo.contents.title}</h2>
      <h2>{todo.contents.description}</h2>
    </>
  }
  if (todo.state === "hasError") {
    return <>
      Errro while getting data</>
  }
}
export default App3;
