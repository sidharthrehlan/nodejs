module.exports = function(grunt) {
	grunt.initConfig({
		uglify : {
			dist : {
				files : {
					'dist/output.min.js' : ['src/input1.js','src/input2.js']

				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['uglify']);
};
