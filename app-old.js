const http = require('http');


http.createServer((req,res) => {

    // res.writeHead(200, {'Content-Type':'text/plain'});

    res.write('Hi world');
    res.end();

}).listen(8080);


console.log('Escucho puerto', 8080);