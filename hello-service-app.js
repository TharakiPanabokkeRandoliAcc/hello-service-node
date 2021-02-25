var http = require("http");

http.createServer(function (request, response) {

    if (request.url === '/')
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello! This is Hello-service (Node)\n');
    }

    if (request.url === '/hello')
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello! This is a route in Hello-service (Node)\n');
    }

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');