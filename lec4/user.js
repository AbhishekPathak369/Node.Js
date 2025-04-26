const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.headers, req.url, req.method);  // log request headers, url, and method

  // > if user visits "/profile" url
  if (req.url === '/profile') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>profile</title></head>');
    res.write('<body><h1>Hii, Welcome to your profile</h1></body>');
    res.write('</html>');
    return res.end();
  } 
  
  // > if user visits "/user" url, show a form to collect input
  else if (req.url === '/user') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to Products</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');

    // > a form to collect user data, which will be sent to "/submit-details" using POST method
    res.write('<form action="/submit-details" method="POST">'); 
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');

    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');

    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" />');

    res.write('<br><button type="submit">Submit</button>');
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  // > handle the POST request when form is submitted to "/submit-details"
  else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    let body = '';

    // > collect data chunks sent from the form
    req.on('data', chunk => {
      body += chunk.toString(); // convert buffer to string
    });

    // > once all data is received, save it to a file and redirect
    req.on('end', () => {
      fs.writeFileSync('user.txt', body); // write the form data to a file

      // > redirect user to home page after submission
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return;
  }

  // > default route - home page
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>This is home page</h1></body>');
  res.write('</html>');
  res.end();
});

// > start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
