const fs = require("fs");

// async approach
// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     return;
//   }
//   console.log(("File Content: ", data));
// });
//synchronous way
const readData = () => {
  const data = fs.readFileSync("demo.txt", "utf-8");
  console.log(data);
};
readData();
