module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/style.css': 'assets/sass/main.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			grunt: {
				files: ['gruntfile.js']
			},
			sass: {
				files: 'assets/sass/**/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['build', 'watch']);
};