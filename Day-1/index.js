const fs = require("fs");
//* fs module for handling file in node js
const fileText = fs.readFileSync("./files/file.txt", "utf-8");
//? readFileSync is function used to read the file in synchronous way

// console.log(fileText);

//! Now write into file

const textout = `${fileText} i am a engg student`;

fs.writeFileSync("./files/outputfile.txt", textout);

// console.log("file is written");

// ** File read and write in asynchronus way
//? Read file
fs.readFile("./files/file.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("file is written");

//? Write File
const writeInFile = "How are your? ";
fs.writeFile(
  "./files/outputfile.txt",
  `${writeInFile}`,
  "utf-8",
  (err, data) => {
    console.log("file is written now");
  }
);
