import fs from "fs";
// console.log("fs :", fs);
// const fs = require("fs");
//to read file content using blocking code
console.log("starting to read ");

const buffer = fs.readFileSync("data.txt", { encoding: "utf-8" });
console.log(buffer.toString());
// console.log("this is another operation being performed ");
