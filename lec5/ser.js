// this ser.js  connect with temp.js
// this file only for server

const http = require('http');
const userrequestHandler = require('./temp');
const server = http.createServer(userrequestHandler);

const PORT = 3000;
server.listen(PORT, () =>{
  console.log(`server is running on address http://localhost:${PORT}`)
})