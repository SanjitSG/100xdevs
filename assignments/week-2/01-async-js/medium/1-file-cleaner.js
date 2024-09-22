const fs = require("fs");

function fileCleaner(path) {
  let fileData = fs.readFileSync(path, "utf-8");
  fileData = fileData.replace(/\s+/g, " ");

  fs.writeFileSync("cleaned-file.txt", fileData, (err) => {});
}

fileCleaner("./uncleaned.txt");
