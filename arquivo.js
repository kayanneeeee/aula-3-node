var http =  require('http');
var url = ('url');
var fs = ('fs');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    res.write('arquivo criado com sucesso');
    fs.appendFile(q.nome+'.txt', q.conteudo, function(err) {
        if (err) throw err;
    })
    res.end();
}).listen(80);

