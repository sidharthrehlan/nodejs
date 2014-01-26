var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.write('hello...world');
	res.end();
});

var port = 8000;
server.listen(port);

server.once('listening',function(){
	console.log('please .....wait till port %d get ready',port);
});
