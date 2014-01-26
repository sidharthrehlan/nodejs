var _filename = 'test.txt';
var fs = require('fs');
fs.readFile(_filename,'utf8',function(err,fileContent){
	if(err){
		console.error(err);
	}
	else 
	{
		console.log('got file content:',fileContent);
	}
    });
