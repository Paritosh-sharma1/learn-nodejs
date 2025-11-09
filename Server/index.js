const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  //   console.log(req.headers);
  const log = `${Date.now()}: ${req.url}New Req Received\n`;
  //Async
  fs.appendFile("log.txt", log, (err, data) => {
    console.log(log);
    res.end("Hello from server!");
  });
});

myServer.listen(3000, () => console.log("Server Started!"));
