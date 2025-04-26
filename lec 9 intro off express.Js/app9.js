// :::::::::::::::::::::::::::: lec 9:::::::::::::::::::::::::
// > learn about how express easy to create backent  by little use of nodejs

// Core Module :- 
// const http = require('http');  //> old server no need


// Express Module:-
const express = require('express');

// Local module
const requestHandler = require('./user'); // Note: Make sure './user.js' exists and exports something if you plan to use it

const app9 = express();

// create express concept

app9.use("/",(req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});

app9.use("/sumbit-details",(req, res, next) => {
  console.log("Came in Second middleware", req.url, req.method);
  res.send("<p>WELcome to sumbit detail ");
});

// const server = http.createServer(app9); // no need of this server line


const PORT = 3002;

app9.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
