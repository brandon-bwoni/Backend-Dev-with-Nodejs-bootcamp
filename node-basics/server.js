const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {

  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><h1>Hello from node</h1></body></html>');
  res.end();
});

server.listen(3000);