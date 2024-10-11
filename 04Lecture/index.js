const http = require("http");
const fs = require("fs");
const kushServer = http.createServer((req, res) => {
  console.log("New request");
  console.log(req);

  const log = `New request recevied ${Date.now()}:${req.url} \n`;

  fs.appendFile("log.txt", log, (err, data) => {
    // res.end("welcome user")
    switch (req.url) {
      case "/home":
        res.end("welcome to my Home page");

        break;

      case "/about":
        res.end("welcome to my about page");

        break;
      case "/contact":
        res.end("welcome to my contact page");

        break;

      case "/profile":
        res.end("welcome to my profile page");

        break;

      default :
      
      res.end("404 Error, Page Not Found!");
        // break;
    }
  });
});

kushServer.listen(2924, () => {
  console.log("server started");
});
