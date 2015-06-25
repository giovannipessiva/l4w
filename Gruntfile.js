module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 

		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';'
			},
			dist: {
				// the files to concatenate
				src: ['client/modules/*.js'],
				// the location of the resulting JS file
				dest: 'client/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				compress: {
					properties: true,
					unsafe: true,
					comparisons: true,
					evaluate: true,
					booleans: true,
					loops: true,
					if_return: true,
					join_vars: true,
					options: {
						mangle: false
					}
				},
				screwIE8: {}
			},
			dist: {
				files: {
				'client/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);
	
	grunt.registerTask('travis', 'default');
};
