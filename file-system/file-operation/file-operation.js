//blocking code

import fs from "fs";
// console.log("fs :", fs);
// const fs = require("fs");
//to read file content using blocking code
// console.log("starting to read ");

// const buffer = fs.readFileSync("data.txt", { encoding: "utf-8" });
// console.log(buffer.toString());

//creating as well as writing the file
try {
  fs.writeFileSync("employee.txt", "Name: ZOndo, AGe :40, Position: manager");
} catch (err) {
  console.log("error :", err);
}
//append another employee data
fs.appendFileSync("employee.txt", "name : ravi, Age: 30, position: CEO");

//delete
try {
  fs.unlinkSync("employee.text");
} catch (err) {
  console.log("file doesn't exist");
}

console.log("this is another operation being performed ");
