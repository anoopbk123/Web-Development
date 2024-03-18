const path = require("path");
const http = require("http");
const fs = require("fs");
const port = 7000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  console.log(req.headers);
  let fileURL;
  if (req.method === "GET") {
    if (req.url === "/") fileURL = "/index.html";
    else fileURL = req.url;
    const filePath = path.resolve("./public" + fileURL);
    const fileExtension = path.extname(filePath);
    if (fileExtension === ".html") {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404;
          res.setHeader("Content-type", "text/html");
          res.end("<html><body><h1>File does not exist 404</h1></body></html>");
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-type", "text/html");
      res.end("<html><body><h1>404 invalid request</h1></body></html>");
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/html");
    res.end("<html><body><h1>404 invalid request</h1></body></html>");
  }
});

server.listen(port, hostName, () => {
  console.log("Server running at http://" + hostName + ":" + port);
});
