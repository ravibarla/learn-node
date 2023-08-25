import fs from "fs";
import path from "path";
// console.log(path);
//reading the data
fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log("error :", err);
  }
  console.log("data :", data.toString());
});
// const filePath = path.join(
//   "/home/ravi/Downloads/ninja/node/learn-node/file-system/file-operation/employee.txt"
// );
const filePath = path.join(
  "learn-node",
  "file-system",
  "file-operation",
  "employee.txt"
);
const filePathResolved = path.resolve(
  "learn-node",
  "file-system",
  "file-operation",
  "employee.txt"
);
console.log(filePath);
console.log(filePathResolved);
console.log(path.extname(filePathResolved))
// write data
// fs.writeFile("employee.txt", "New EMployee", (err) => {
//   if (err) {
//     console.log("error :", err);
//   }
//   console.log("file is written");
// });

//append

// fs.appendFile(
//   "/home/ravi/Downloads/ninja/node/learn-node/file-system/file-operation/employee.txt",
//   "\n second employee added",
//   (err) => {
//     if (err) {
//       console.log("error :", err);
//     }
//     console.log("file is updated ");
//   }
// );
// console.log("this is another operation");

//delete
// fs.unlink("employee.txt", (err) => {
//   if (err) {
//     console.log("error :", err);
//   }
//   console.log("file is deleted ");
// });
