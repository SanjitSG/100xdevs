const fs = require("fs").promises;

const getFileData = async () => {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    return data; // You can return the data
  } catch (err) {
    console.error(err);
  }
};

const writeData = async (data) => {
  try {
    await fs.writeFile("file.txt", data, "utf-8");
    console.log("File has been saved");
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

const main = async () => {
  try {
    const data = await getFileData();

    if (data) {
      await writeData(data.replace(/\s+/g, " "));
    }
  } catch (error) {
    console.error("An error occurred in the main function:", error);
  }
};

main();
