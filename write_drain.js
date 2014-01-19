var fs = require('fs');
//console.log(__dirname+'/out.txt');
var stream = fs.createWriteStream(__dirname + '/out.txt');

for(var i=0;i<=50;i++){
	var txt = stream.write(i.toString()+'');
	console.log(txt);
	if(!stream.write(i.toString()+'')){
		console.log('not flushed');
	}
	else {
		console.log('flushed');
	}
}

console.log('write log');

stream.on('drain',function(){
	console.log('drained');
});


