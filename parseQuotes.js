const fs = require("fs").promises;
const path = require("path");

async function readAndWriteQuotes(csvFilePath) {
  try {
    const result = await parseCsv(csvFilePath);
    await writeContents(result);
  } catch (err) {
    console.error("Error reading or writing the file", err);
  }
}

async function parseCsv(csvFilePath) {
  const data = await fs.readFile(csvFilePath, "utf8");
  const lines = data.split("\n").filter(Boolean);
  const headers = lines[0].split(",");
  const values = lines.slice(1);

  return values.map((value) => {
    const obj = {};
    const commaIndexes = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] === ",") {
        commaIndexes.push(i);
      }
    }

    headers.forEach((header, index) => {
      if (index === 0) {
        obj.Quote = value.substring(0, commaIndexes[0]);
      } else {
        obj.Author = value.substring(commaIndexes[commaIndexes.length - 1] - 1).replace("\r", "");
      }
    });
    return obj;
  });
}

async function writeContents(fileContents) {
  const jsonString = JSON.stringify(fileContents, null, 2);
  const filePath = path.join(__dirname, "/data/output.json");
  try {
    await fs.writeFile(filePath, jsonString);
    console.log("Successfully wrote file");
  } catch (err) {
    console.error("Error writing file", err);
  }
}

// Provide the correct path to your CSV file here
const csvFilePath = path.join(__dirname, "/data/quotes.csv");
readAndWriteQuotes(csvFilePath);



