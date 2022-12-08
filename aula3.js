var http = require('http');
var url = require('url');

http.createServer(function (req, res){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(req, url);
    var q = url.parse(req.url, true).query;
    var txt = "<br>dia: "+q.dia+"<br> mes: "+q.ano;
    res.end(txt);
}).listen(80);