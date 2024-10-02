import mongoose from "mongoose";

mongoose.connect("mongodb+srv://sanjit:xt22Uu76Ki7ceEMd@posttracket.plwpuqj.mongodb.net/todo");

// schema -> what table should look like
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// const collectionName = mongoose.model("table-name", schema)
export const todo = mongoose.model("totos", todoSchema);
