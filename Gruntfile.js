module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 

		ts: {
	        dev: {
                src: ['client/modules/**/*.ts'],
                out: 'client/<%= pkg.name %>.ts.js',
                options: {
    	            target: 'es6',
    	            module: 'amd',
    	            sourceMap: false,
    	            fast: 'never',
    	            removeComments: true
    	        }
            }
	    },
		
        tslint: {
            files: {
                src: ['client/modules/**/*.ts','!client/modules/interfaces/*.ts']
            },
            options: {
                configuration: grunt.file.readJSON("tslint.json")
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
	grunt.loadNpmTasks('grunt-tslint');
	
	grunt.registerTask('optionalTasks', 'tasks that can fail', function () {
	    grunt.option('force', true);
	    grunt.task.run(['tslint']);
	});
	
	grunt.registerTask('requiredTasks', ['uglify','ts:dev']);
	
	grunt.registerTask('travis', ['optionalTasks','requiredTasks']);
};
