// this part is for server of prac5 

const http = require('http'); 
// Importing the 'http' module to create an HTTP server

const { requestHandler } = require('./prac5'); 
// Importing the request handler function from the 'prac5' module

const server = http.createServer(requestHandler); 
// Creating an HTTP server and passing the request handler to handle incoming requests

const PORT = 5000; 
// Defining the port number the server will listen on

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
}); 
// Starting the server and logging a message once it's running
