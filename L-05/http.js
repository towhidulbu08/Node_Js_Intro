const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Programers");
    res.write("How are you doing?");
    res.end();
  } else if (req.url === "/about") {
    res.write("Do you about programmers");
    res.write("yes, of course ");
    res.end();
  } else {
    res.write("Not found");
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");
