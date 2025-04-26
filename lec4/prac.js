//  Q :=> create a page that shows a navigation bar of myntra wirh the folowing link like home,men,women,cart, after click 
// that link the page is transfer to welcome to section text
const http  = require('http');

const server =  http.createServer((req,res) =>{
console.log(req.url, req.method);

if(res.url === "/home"){
  res.write('<h1>Welcome to Home</h1>');
  return res.end();
}
else if(req.url === "/men"){
  res.write('<h1>Welcome to Men Section');
  return res.end();
  
}
else if(req.url === "/women"){
  res.write('<h1>Welcome to Women Section');
  return res.end();
  
}
else if(req.url === "/cart"){
  res.write('<h1>Welcome to Cart Section');
  return res.end();
  
}
else if(req.url === "/kids"){
  res.write('<h1>Welcome to kids Section');
  return res.end();
  
}


res.write(`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">cart</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>`);
res.end();
});

server.listen(3001, ()=>{
  console.log('Server running on address http://localhost:3001')
})