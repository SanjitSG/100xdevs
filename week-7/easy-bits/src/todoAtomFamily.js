import axios from "axios"
import { atomFamily, selectorFamily } from "recoil";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => {
      const res = await axios.get(`https://todo-generator.onrender.com/todo?id=${id}`);
      return res.data.todo
    }
  })
})