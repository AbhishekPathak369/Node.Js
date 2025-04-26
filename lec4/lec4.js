// :::::::::::::::::::::::::::::::::: 4.4 
// const http = require('http');



// const server = http.createServer( (req,res) =>{
//   console.log(req.headers, req.url, req.method);
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>Complete Coding</title></head>');
//   res.write('<body><h1>Like ? share</h1></body>');
//   res.write('</html>');
//     res.end();
// });

// const  PORT = 3000;
// server.listen(PORT, () =>{
//   console.log(`server running at http://localhost:${PORT}`);
  
// })

//  :::::::::::::::::::::::::::::::::::: 4.5 (Routing Requests) ::::::::::::::::::::::::::::::::::
// > now we try to change web interface when req is change

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.headers, req.url, req.method);
// > to get your profile 
  if (req.url === '/profile') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>profile</title></head>');
    res.write('<body><h1>Welcome to your profile</h1></body>');
    res.write('</html>');
    return res.end();
  } 
  // > to get your products
  else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to Products</title></head>');
    res.write('<body><h1>select your product</h1></body>');
    res.write('</html>');
    return res.end();
  }

  //  this is default home page
   else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>this is home page</h1></body>');
    res.write('</html>');
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
