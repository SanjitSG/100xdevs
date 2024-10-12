// import React, { useEffect } from "react";
// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { todoAtomFamily } from "./atom2";

// const App2 = () => {
//   return <RecoilRoot>
//     {/* <UpdaterComponent /> */}
//     <Todo id={1} />
//     <Todo id={2} />
//   </RecoilRoot>;
// };
// /*
// function UpdaterComponent() {
//   const updateTodo = useRecoilState(todoAtomFamily(2));

//   useEffect(() => {
//     setTimeout(() => {
//       updateTodo({
//         id: 2,
//         title: "new Go to eat food",
//         description: "new East food from 9-10"
//       })
//     }, 5000);
//   }, [])

//   return <></>
// }
//  */
// function Todo({ id }) {
//   const currentTodo = useRecoilValue(todoAtomFamily(id))
//   return <>
//     <h2>{currentTodo.title}</h2>
//     <h2>{currentTodo.description}<hr /><br /></h2></>
// }
// export default App2;
