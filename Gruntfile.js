module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), 

        tslint: {
            files: {
                src: [
                      "./client/src/**/*.ts",
                      "!./client/src/interfaces/**",
                      "./common/src/**/*.ts",
                      "./server/src/**/*.ts",
                      "!./server/src/@types/**"
                ]
            },
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            }
        },
        
        ts: {
            client: {
                tsconfig: "./client/tsconfig-client.json"
            },
            server: {
                tsconfig: "./server/tsconfig-server.json"
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true, 
                    cwd: ".", 
                    src: [
                        "./server/dist/**/*.js"
                    ],

                    dest: ".", 
                    rename: function(dest, src) {
                        if(!src.includes("/models/") || src.endsWith("/models/index.js")) {
                            return dest + "/" + src.replace(".js",".mjs");
                        } else {
                            return dest + "/" + src;
                        }
                    }
                }]
            }
        },

        clean: {
            options: { 
                force: true
            },
            pre: {
                src: [
                    "./client/dist/**",
                    "./server/dist/**"
                ]
            },
            post: {
                src: [
                    "./server/dist/**/*.js",
                    "!./server/dist/**/models/*.js",
                    "./server/dist/**/models/index.js"
                ]
            }
        },
        
        babel: {
            options: {
                presets: ["@babel/preset-env"]
            },
            dist: {
                files: {
                    "./client/dist/<%= pkg.name %>-client.es5.js": "./client/dist/<%= pkg.name %>-client.js"
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
                    "./client/dist/<%= pkg.name %>-client.min.js": ["./client/dist/<%= pkg.name %>-client.es5.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    
    grunt.registerTask("task_lint", "Clean the dist folders and execute tslint (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["clean:pre","tslint"]);
    });
    grunt.registerTask("task_compile", "Execute ts (cannot fail)", ["ts:client","ts:server","copy","clean:post"]);
    grunt.registerTask("task_minify", "Execute babel and uglify (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["babel","uglify"]);
    });
    grunt.registerTask("l4w-build-pipeline", ["task_lint","task_compile","task_minify"]);
	grunt.registerTask("default","l4w-build-pipeline");
};
