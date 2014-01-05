var rl = require("readline");

var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("How many serving fruits do you eat each day?",function(servings){
	var message = "Nuber of fruits you eat are "+servings;
	console.log(message);
	process.exit();
});
