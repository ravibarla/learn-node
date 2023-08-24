//create server using node JS

//1. import http/mode library
const http = require("http");
//2. import file system
const fs = require("fs");
//3. create server
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("index.html").toString();
  res.end(data);
  //here comes the request
});

//3. specify a port to listen client request
server.listen(3100, () => console.log("server is listening in port 3100"));

// console.log("server is listening in port 3100");
