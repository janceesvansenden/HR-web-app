module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true
				},
				files: {
					"./assets/css/app.css": "./sources/less/app.less",
					"./assets/css/style.css": "./sources/less/style.less"
				}
			}
		},
		concat: {
			options: {
				seperator: ';'
			},
			js_app: {
				src: [
					'./components/jquery/dist/jquery.js',
					'./components/bootstrap/dist/js/bootstrap.js',
					'./components/jasny-bootstrap/dist/js/jasny-bootstrap.js',
					'./sources/js/custom.js'
				],
				dest: './assets/js/app.js'
			}
		},
		// uglify: {
		// 	options: {
		// 		mangle: false
		// 	},
		// 	app: {
		// 		files: {
		// 			'.assets/js/app.js': '.assets/js/app.js'
		// 		}
		// 	}
		// },
		watch: {
			all: {
				files: '**/*.html',
				options: {
					livereload: true
				}
			},
			less: {
				files: ['./sources/less/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			js_app: {
				files: [
					'./components/jquery/dist/jquery.js',
					'./components/bootstrap/dist/js/bootstrap.js',
					'./components/jasny-bootstrap/dist/js/jasny-bootstrap.js',
					'./sources/js/custom.js'
				],
				tasks: ['concat:js_app','uglify:js_app'],
				options: {
					livereload: true
				}
			}
		}
	});

	// Task definition
	grunt.registerTask('default', ['less','concat','watch']);
};