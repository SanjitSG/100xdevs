import mongoose from "mongoose";

// schema -> what table should look like
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// const collectionName = mongoose.model("table-name", schema)
export const todo = mongoose.model("totos", todoSchema);
