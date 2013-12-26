var http = require('http');

var urls = [
	'http://search.twitter.com/search.json?q=Node',
	//'http://search.twitter.com/search.json?q=javascript'

	];

var allResults = [];

var responded = 0;

function collectResponse(res){
	console.log(res);
	var responseBody = '';
	res.setEncoding('utf8');
	
	//collect the response body
	res.on('data', function(d){
		responseBody += d;
	});

	//when response ends, we should have all response body
	res.on('end',function(){
		var response = JSON.parse(responseBody);
		allResults = allResults.concat(response.results);
		console.log('I have %d results for',response.result.length, res.req.path);
		responded += 1;

		//check if we have responses to all requests
		if(responded == urls.length){
			console.log('All responses ended. Number of total results:', allResults.length);
		}
	});
}

urls.forEach(function(url){

	console.log(url);
	http.get(url,function(res){
		//console.log(res);		
		var fs = require('fs');
		fs.writeFile("/tmp/test", "Hey there!", function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
			}
		}); 
	});
});

