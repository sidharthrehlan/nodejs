var net = require('net');
var util = require('util');
var server = net.createServer();
util.inspect(console);
server.on('connection',function(stream){
	//console.log(stream);
	//util.log(stream);
	console.log(util.inspect(stream, { showHidden: true, depth: null, color : true }));

	stream.pipe(stream);
	//console.log(process);
	stream.pipe(process.stdout);

});

server.listen(7000);
