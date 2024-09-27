const fs = require("fs");

const data = "write this data in file.txt";

fs.writeFile("file.txt", data, "utf-8", (err) => {
  if (err) throw err;
  console.log("file has been saved");
});
