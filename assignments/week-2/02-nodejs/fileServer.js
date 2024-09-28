/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const folderPath = path.join(__dirname, "files");

app.get("/files", (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    try {
      res.json({ files });
    } catch (error) {
      console.log(error);
    }
  });
});

app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(folderPath, filename);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("File not found");
    }

    // Read the file content if it exists
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return res.status(500).send("Error reading file");
      }
      res.status(200).send(data);
    });
  });
});
// app.get("/files/:filename", (req, res) => {
//   const fileName = req.params.filename;
//   const filePath = path.join(__dirname, fileName);
//   console.log(fileName, filePath);

//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       return res.status(404).send("file not found");
//     }

//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) {
//         return res.status(500).send("error reading file");
//       }
//       res.status(200).json({ data });
//     });
//   });
// });
app.listen(3000);
module.exports = app;
