//create server using node JS

//1. import http/mode library
const http = require("http");

//2. create server
const server = http.createServer((req, res) => {
  //here comes the request
  console.log(req.url);
  if (req.url == "/product") {
    return res.end("<h1>this is product </h1>");
  } else if (req.url == "/user") {
    return res.end("<h1>this is user </h1>");
  }

  return res.end("welcome to node");
});

//3. specify a port to listen client request
server.listen(3100, () => console.log("server is listening in port 3100"));

// console.log("server is listening in port 3100");
