// :::::::::::::::::::::::::::: lec8 :::::::::::::::::::::::::
// -----------------------> 8.1 :::::::::::::::

// > 1 Syntax Error 2> Logical Error 3> Runtime Error

const http = require('http');
const testingSyntax = require('./syntax'); // this import syntax error
const runtime = require('./runtime'); // this import runtime error
const logical = require('./logicalerror');  // this import logical error

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // testingSyntax(); //  for  Syntax error
  // runtime();
  logical();
  res.end('Hello from the server!');
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
