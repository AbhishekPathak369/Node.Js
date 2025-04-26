 
const fs = require('fs');     // Module to read/write files

// Create the server
const userrequestHandler = (req, res) => { // we update temp here
  console.log(req.headers, req.url, req.method); // Show details of every request

  // Route: /profile → show a simple profile page
  if (req.url === '/profile') {
    res.setHeader('Content-Type', 'text/html'); // Set response type
    res.write('<html>');
    res.write('<head><title>Profile</title></head>'); // Page title
    res.write('<body><h1>Hi, Welcome to your profile</h1></body>'); // Page content
    res.write('</html>');
    return res.end(); // End the response
  }

  // Route: /user → show a form for user input
  else if (req.url === '/user') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User Form</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');

    // Form → submits to /submit-details via POST
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');

    // Gender radio options
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" />');

    res.write('<br><button type="submit">Submit</button>'); // Submit button
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  // Route: /submit-details (POST) → handle form submission
  else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = []; // To store data chunks

    // Event: when data chunk arrives → push to array
    req.on('data', chunk => {
      console.log(chunk); // Logs buffer (unreadable directly)
      body.push(chunk);   // Store each chunk
    });

    // Event: when all chunks are received
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString(); // Combine & convert to string
      console.log(fullBody); // Logs raw input (e.g., username=Abhi&gender=male)

      const params = new URLSearchParams(fullBody); // Convert raw string to key-value pairs
      const bodyObject = {}; // Object to hold parsed data

      // Loop through all form entries and store in object
      for (const [key, value] of params.entries()) {
        bodyObject[key] = value;
      }

      console.log(bodyObject); // Final structured output

      fs.writeFileSync('user.txt', JSON.stringify(bodyObject)); // Save data to file

      res.statusCode = 302;              // Redirect code
      res.setHeader('Location', '/');    // Redirect to homepage
      return res.end();
    });

    return; // Stop further execution
  }

  // Default route (homepage) → show welcome message
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Home</title></head>');
  res.write('<body><h1>This is the home page</h1></body>');
  res.write('</html>');
  res.end(); // End response
};

// ;::::::::::::::::::::::::   lec 5.7  using modules :::::::::::::

module.exports = userrequestHandler;

