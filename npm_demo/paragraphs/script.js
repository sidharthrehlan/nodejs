var argv = require('optimist').argv;
var cheerio = require('cheerio');
var fs = require('fs');

var file = argv._[0];

var html = fs.readFileSync(file,'UTF-8');
var $ = cheerio.load(html);

console.log($('html').find('p'));

/*$('html').find('p').each(index,function(){
	var content = $(this).html();
	console.log("paragraph"+index+" : "+content );

});*/
