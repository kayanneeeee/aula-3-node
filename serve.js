var http = require('http');
var fs = require('fs'); //importar a biblioteca
http.createServer(function (req, res){
    res.readFile('index.html', funcition(err, data){ //abrir a biblioteca
        res.writeHead(200, {'content-type ' : 'text/html'};
        res.write(data);
        return res.end();
    });
}).listen(80)