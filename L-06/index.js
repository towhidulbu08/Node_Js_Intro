const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/file.txt`, "utf8");
  myReadStream.pipe(res);
});

server.listen(3000);

console.log("listening on port 3000");

// const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/file.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// // ourReadStream.on("data", (chunk) => {
// //   ourWriteStream.write(chunk);
// //   console.log(chunk);
// // });

// ourReadStream.pipe(ourWriteStream);

// console.log("hello");
