module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 


		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.date((new Date()).getTime() + 3600000*2,"yyyy-mm-dd HH:MM") %> */\n',
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
				'client/<%= pkg.name %>.min.js': ['client/<%= pkg.name %>.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
	
	grunt.registerTask('travis', 'default');
};
