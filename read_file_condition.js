var _filename = 'test.txt';
var fs = require('fs');
fs.stat(_filename,function(err,stats){
	if(err){
		console.error(err);
	}
	else 
	{
		if(stats.size < 1024){
		console.log('file size is : %d',stats.size); 
			fs.readFile(_filename,'utf-8',function(err,fileContent){	
				if(err){
					console.error(err);
				}
				else 
				{
					console.log('got file conent with size %d and  content :',stats.size,fileContent);
				}
			});
	
		}
		else {
			console.log('can read long file, its size is : %d',stats.size);
		}
	}
});
