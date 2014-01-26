module.exports = function(grunt) {
	grunt.initConfig({
		//arbitrary properties
		author : 'sidharth',
		pkg: grunt.file.readJSON('package.json'),
		
		//tasks
		uglify : {
			//default options
			options : {
				     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				 },
			//target
			//calling target dist : grunt uglify:dist	 
			dist : {
				//task level options
				options : {
				     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= author %>*/\n'
				 },
				files : {
					'dist/output.min.js' : ['src/input1.js','src/input2.js']

				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['uglify']);
	grunt.registerTask('mycustom','Log some custom stuff',function(){
		grunt.log.write("logging some stuff....").ok();
	});
};
