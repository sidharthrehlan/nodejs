var net = require('net');
var server = net.createServer();
server.on('connection',function(stream){
	stream.setEncoding('utf8');
	console.log('-on connection - new stream');
	console.log(stream);

	//data - readable event
	stream.on('data',function(data){
		console.log('data :'+data);
				stream.write(data.toUpperCase());
	});

	//end
	stream.on('end',function(){
		console.log('- stream ended');
	});

	stream.on('error',function(){
		console.log('error');
	});

	stream.on('close',function(){
		console.log('close');
	});

	//writable event
	stream.on('pipe',function(){
		console.log('pipe');
	});

	stream.on('drain',function(){
		console.log('drain');
	});





	console.log("stream is readable : "+stream.readable);
	console.log("steam is writable : "+stream.writable);


});

server.listen(7000);

