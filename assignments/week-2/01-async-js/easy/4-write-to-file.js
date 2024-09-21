// const fs = require("fs").promises;

// async function writeToFile() {
//   try {
//     await fs.writeFile("write-example.txt", "test\n");
//     console.log("Initial write success");

//     //append numbers
//     for (let i = 0; i < 10000; i++) {
//       await fs.appendFile("write-example.txt", `${i}\n`);
//     }
//     console.log("Appending complete");
//   } catch (err) {
//     console.error(err);
//   }
// }

// writeToFile();

const fs = require("fs");

const stream = fs.createWriteStream("write-example.txt");

stream.write("test\n");

for (let i = 0; i < 1000; i++) {
  stream.write(`${i}\n`);
}
stream.end();

stream.on("finish", () => {
  console.log("All data has been written.");
});
stream.on("error", (err) => {
  console.error("Error:", err);
});
