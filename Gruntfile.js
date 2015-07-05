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
				src: [
					'client/modules/*.js',
					'client/modules/core/*.js',
					'client/modules/core/ui/*.js',
					'client/modules/core/util/*.js'
				],
				// the location of the resulting JS file
				dest: 'client/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.date((new Date()).getTime() + 36000*2,"yyyy-mm-dd HH:MM") %> */\n',
				compress: {
					properties: true,
					unsafe: true,
					comparisons: true,
					evaluate: true,
					booleans: true,
					loops: true,
					if_return: true,
					join_vars: true
				},
				screwIE8: true,
				mangle: true
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
