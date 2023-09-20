var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

var dataAtual = new Date();
var dataFormatada = dataAtual.toDateString ('pt-BR');
 


 res.end('<h1 style="font-size: 24px;">Eduardo Gramignolli Pimentel</h1>\nData atual: ' + dataFormatada + '</p>');
}).listen(8002);
