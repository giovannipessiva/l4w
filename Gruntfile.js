module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), 

        tslint: {
            files: {
                src: [
                      "client/modules/**/*.ts",
                      "!client/modules/interfaces/*.ts",
                      "common/modules/**/*.ts",
                      "server/modules/**/*.ts"
                ]
            },
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            }
        },
        
        ts: {
            client: {
                src: [
                    "client/modules/**/*.ts",
                	"common/modules/**/*.ts"
                ],
                out: "client/<%= pkg.name %>-client.js",
                options: {
                    target: "es6",
                    sourceMap: false
                }
            },
            server: {
                src: [
                	"server/modules/**/*.ts",
                	"common/modules/**/*.ts"
                ],
                out: "server/<%= pkg.name %>-server.js",
                options: {
                    target: "es6",
                    sourceMap: false
                }
            }
        },
        
        babel: {
            options: {
                presets: ["env"]
            },
            dist: {
                files: {
                    "client/<%= pkg.name %>-client.es5.js": "client/<%= pkg.name %>-client.js"
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
                    "client/<%= pkg.name %>-client.min.js": ["client/<%= pkg.name %>-client.es5.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask("task_lint", "Execute tslint (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["tslint"]);
    });
    grunt.registerTask("task_compile", "Execute ts (cannot fail)", ["ts:client","ts:server"]);
    grunt.registerTask("task_minify", "Execute babel and uglify (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["babel","uglify"]);
    });
    grunt.registerTask("travis", ["task_lint","task_compile","task_minify"]);
};
