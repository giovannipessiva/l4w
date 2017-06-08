module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), 

        tslint: {
            files: {
                src: ["client/modules/**/*.ts","!client/modules/interfaces/*.ts"]
            },
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            }
        },
        
        ts: {
            dev: {
                src: ["client/modules/**/*.ts"],
                out: "client/<%= pkg.name %>.js",
                options: {
                    target: "es6",
                    sourceMap: false,
                    additionalFlags: "--noUnusedParameters --noUnusedLocals"
                }
            }
        },
        
        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    "client/<%= pkg.name %>.es5.js": "client/<%= pkg.name %>.js"
                }
            }
        },
    
        uglify: {
            options: {
                banner: "/* <%= pkg.name %> <%= grunt.template.date((new Date()).getTime() + 3600000*2,'yyyy-mm-dd HH:MM') %> */\n",
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
                mangle: true
            },
            dist: {
                files: {
                    "client/<%= pkg.name %>.min.js": ["client/<%= pkg.name %>.es5.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-babel");
    
    grunt.registerTask("task_lint", "Execute tslint (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["tslint"]);
    });
    grunt.registerTask("task_compile", "Execute ts (cannot fail)", "ts:dev");
    grunt.registerTask("task_minify", "Execute uglify (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["babel","uglify"]);
    });
    grunt.registerTask("travis", ["task_lint","task_compile","task_minify"]);
};
