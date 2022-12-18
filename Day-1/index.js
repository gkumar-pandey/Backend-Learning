const fs = require('fs');
//* fs module for handling file in node js
const fileText = fs.readFileSync('./files/file.txt', 'utf-8');
//? readFileSync is function used to read the file in synchronous way 

console.log(fileText)

//! Now write into file 

const textout = `${fileText} i am a engg student`

fs.writeFileSync('./files/outputfile.txt', textout);

console.log("file is written")