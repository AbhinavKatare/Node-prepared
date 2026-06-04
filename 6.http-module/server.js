const http = require('http'); 

const server = http.createServer((req, res) => {
    console.log(req, 'Req'); 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World from Node.js HTTP module Server!');
}); 

const port = 3000; 
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}); 