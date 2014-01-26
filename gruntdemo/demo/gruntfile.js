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
					'dest/output.min.css' : ['src/*.css']

				}
			}
		},
		//tasks
		uglify : {
		
			dist : {
				//task level options
				options : {
				     banner: '/* js min demo and  author  : <%=author%> */\n',
				     beautify : true
				 },
				files : {
					'dest/output.min.js' : ['src/*.js']

				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['cssmin','uglify']);
};
