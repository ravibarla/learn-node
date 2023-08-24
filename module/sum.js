//import readline
import * as readline from "readline";
// const readline = require("readline");

//2. configure interface to connect with terminal /command line
const interface_ = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//3. reading values
interface_.question("enter the first number :", (num1) => {
  interface_.question("enter the second number :", (num2) => {
    //num 1+num2
    const sum = Number(num1) + Number(num2);
    console.log(sum);
  });
});
