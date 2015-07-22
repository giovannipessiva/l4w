module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 

		ts: {	
            options: {
                target: 'es6',
                sourceMap: false,
            },
            dev: {
                src: ['client/**/*.ts'],
                out: 'client/<%= pkg.name %>.js',
            }
        },

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

	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['ts:dev','uglify']);
	
	grunt.registerTask('travis', 'default');
};
