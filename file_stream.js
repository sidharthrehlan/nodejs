var fs = require('fs');

var stream = fs.createReadStream('/media/BACKUP/movies/JATT&JULIET2/VTS_01_1.VOB');

stream.on('readable',function(){
console.log("readable");
	var chunk;
	while(chunk = stream.read()) {
		console.log('got npm data chunk of %d bytes',chunk.length);
	}
});




stream.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

stream.once('end',function(){
	console.log('stream ended');
});
