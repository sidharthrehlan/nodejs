module.exports = function(grunt) {
	grunt.initConfig({
		//arbitrary properties
		author : 'sidharth',
		
		//tasks
		cssmin : {
		
			dist : {
				//task level options
				options : {
				     banner: '/* Css min demo and  author  : <%=author%> */\n'
				 },
				files : {
					'dest/output.min.css' : ['src/form.css','src/core.css']

				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['cssmin']);
};
