module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 

		ts: {	
	        options: {
	            target: 'es6',
	            sourceMap: false,
	            fast: 'never'
	        },
	        dev: {
	            src: ['client/modules/**/*.ts'],
	            out: 'client/<%= pkg.name %>.js'
	        }
	    },
	        
	    typescript: {
		    base: {
		    	src: ['client/modules/**/*.ts'],
		      	dest: 'client/l4w.js',
		      	options: {
		        	target: 'es6'
		      	}
			}
		},
		
		tslint: {
    		options: {
      			configuration: grunt.file.readJSON("tslint.json")
      		},
      	    files: {
	            src: ['client/modules/**/*.ts']
	        },
	        outputFile: "tslint.out.txt"
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
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-tslint');
	
	grunt.registerTask('optionalTasks', 'tasks that can fail', function () {
	    grunt.option('force', true);
	    grunt.task.run(['tslint']);
	});
	
	//FIXME typescript compilation doesnt work as it should..l
	//grunt.registerTask('requiredTasks', ['typescript','uglify']);
	//grunt.registerTask('requiredTasks', ['ts:dev','uglify']);
	grunt.registerTask('requiredTasks', ['uglify']);
	
	grunt.registerTask('travis', ['optionalTasks','requiredTasks']);
};
