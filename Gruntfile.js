#!/usr/bin/env node

module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true
				},
				files: {
					'./assets/css/app.css': './sources/less/app.less',
					'./assets/css/style.css': './views/**/*.less'
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
					'./components/jasny-bootstrap/dist/js/jasny-bootstrap.js'
				],
				dest: './assets/js/app.js'
			},
			js_angular: {
				src: [
					'./views/routes.js',
					'./views/**/*.controller.js',
					'./views/**/*.factory.js'
				],
				dest: './assets/js/angular_app.js'
			}
		},
		uglify: {
			js_app: {
				files: {
					'./assets/js/app.min.js' : ['./assets/js/app.js']
				}
			}
		},
		watch: {
			all: {
				files: '**/*.html',
				options: {
					livereload: true
				}
			},
			less: {
				files: ['./sources/less/*.less', './views/**/*.less'],
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
					'./views/**/*.js',
					'!./views/**/*.controller.js',
					'!./views/routes.js'
				],
				tasks: ['concat:js_app',], // add 'uglify:js_app' to use uglify while watching
				options: {
					livereload: true
				}
			},
			js_angular: {
				files: [
					'./views/routes.js',
					'./views/**/*.controller.js'
				],
				tasks: ['concat:js_angular'],
				options: {
					livereload: true
				}
			}
		}
	});

	// Task definition
	grunt.registerTask('default', ['less','concat','uglify','watch']);
	grunt.registerTask('kijk', ['less','concat','watch']);
};
