import fs from "fs";
//reading the data
// fs.readFile("data.txt", (err, data) => {
//   if (err) {
//     console.log("error :", err);
//   }
//   console.log("data :", data.toString());
// });

//write data
// fs.writeFile("employee.txt", "New EMployee", (err) => {
//   if (err) {
//     console.log("error :", err);
//   }
//   console.log("file is written");
// });

//append
// fs.appendFile("employee.txt", "\n second employee added", (err) => {
//   if (err) {
//     console.log("error :", err);
//   }
//   console.log("file is updated ");
// });
// console.log("this is another operation");

//delete
fs.unlink("employee.txt", (err) => {
  if (err) {
    console.log("error :", err);
  }
  console.log("file is deleted ");
});
