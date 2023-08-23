//create server using node JS

//1. import http/mode library
const http = require("http");

//2. create server
const server = http.createServer((req, res) => {
  //here comes the request
  res.end("welcome to node");
});

//3. specify a port to listen client request
server.listen(3100, () => console.log("server is listening in port 3100"));

// console.log("server is listening in port 3100");
