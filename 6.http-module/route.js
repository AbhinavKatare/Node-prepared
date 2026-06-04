const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url; 
  if (url === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('Welcome to the homepage!'); 
  } else if (url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('This is the about page.'); 
  } else if (url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('This is the contact page.'); 
  } else if (url === '/api/data') {
    res.writeHead(200, {'Content-Type': 'application/json'}); 
    res.end(JSON.stringify({ message: 'This is the API data.' })); 
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'}); 
    res.end('Page not found.'); 
  }
});

const port = 3000; 
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 