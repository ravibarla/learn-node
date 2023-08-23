//create server using node JS

//1. import http/mode library
const http = require("http");

//2. creating a port
const port = 8000;

//3. create file system
const fs = require("fs");

//4. create request listener function
function requestListener(req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log('error :',err);
      return res.end('<h1>Error  </h1>')
    }
return res.end(data)
  });
}
//5. create server
const server = http.createServer(requestListener);

//6. specify a port to listen client request
server.listen(port, () => console.log("server is listening in port 8000"));
