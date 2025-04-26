// Q :=> Create a Calculator   

// Importing the function 'sumRequestHandler' from the 'sum.js' file
// This function will handle the logic for calculating the sum of two numbers
const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method); 
  // Logging the URL and method (GET or POST) of each incoming request for debugging

  if (req.url === '/') {
    // If the user visits the home page ("/")
    res.setHeader('content-Type', 'text/html'); // Set response type to HTML
    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Welcome To Calculator</h1>
          <a href="/calculator">Open Calculator</a> 
          <!-- Link to go to the calculator form -->
        </body>
      </html>
    `);
    return res.end(); // End and send the response
  }

  else if (req.url.toLowerCase() === "/calculator") {
    // If the user visits the calculator page
    res.setHeader('content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Here is the Calculator</h1>
          <!-- A form to input two numbers and submit for addition -->
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="first num" name="first"/>
            <input type="text" placeholder="second num " name="second"/>
            <button type="submit">Sum</button>
          </form>
        </body>
      </html>
    `);
    return res.end(); // Send the calculator form to the browser
  }

  else if (req.url.toLowerCase() === "/calculate-result" && req.method === 'POST') {
    // When the user submits the form (POST request to /calculate-result)
    // This part calls the function that handles reading the input numbers and calculates the sum
    return sumRequestHandler(req, res); 
  }

  // If the requested URL doesn't match any of the above, show a 404 page
  res.setHeader('content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practise Set</title></head>
      <body>
        <h1>404 PAGE NOT EXIST</h1>
        <a href="/">Go to home</a> 
      </body>
    </html>
  `);
};

exports.requestHandler = requestHandler;
// Exporting the requestHandler so it can be used in the main server file
