const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler ", req.url); 
  // This logs a message to the console when this function is called,
  // showing that the request reached this point and displaying the requested URL.

  const body = []; 
  // An empty array is created to collect the chunks of data sent from the client.
  // When a form is submitted, the data doesn't always come all at once,
  // so we gather it piece by piece.

  req.on('data', chunk => body.push(chunk)); 
  // This listens for 'data' events, which are triggered whenever a chunk of data is received.
  // Each chunk is added (pushed) to the 'body' array.

  req.on('end', () => {
    // This event is triggered when all data has been received.
    // Now we can process the complete data.

    const bodyStr = Buffer.concat(body).toString(); 
    // All the chunks collected in the 'body' array are combined into one buffer.
    // Then, the buffer is converted to a readable string (e.g., "first=5&second=3").

    const params = new URLSearchParams(bodyStr); 
    // The URLSearchParams object is used to easily extract values from the form string.

    const bodyObj = Object.fromEntries(params); 
    // This converts the search parameters into a normal JavaScript object,
    // like: { first: '5', second: '3' }

    const result = Number(bodyObj.first) + Number(bodyObj.second); 
    // The form values come as strings, so we convert them to numbers using Number().
    // Then, we add the two numbers and store the result.

    console.log(result); 
    // Log the calculated result to the console for debugging purposes.

    res.setHeader('content-Type', 'text/html'); 
    // Set the response type to 'text/html' so the browser knows it's getting an HTML page.

    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1> 
          <!-- Show the calculated sum in an HTML heading -->
        </body>
      </html>
    `);
    
    return res.end(); 
    // End the response and send everything written above back to the browser.
  });
}

exports.sumRequestHandler = sumRequestHandler; 
// Exporting the 'sumRequestHandler' function so that it can be imported
// and used in other files (like in your main server setup).
