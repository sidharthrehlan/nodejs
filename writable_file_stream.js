var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/out.txt');
var i = 1;
var interval = setInterval(function() {
	stream.write('tick' + Date.now() +'\n');
	
	console.log('tick count -'+i+' and time - '+Date.now());
	i++;
	
},100);

setTimeout(function(){
	clearInterval(interval);
	stream.end();
},4950);

	
