const webpackConfig = require('./webpack.config.js');

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
        
        webpack: {
            prod: webpackConfig,
            dev: webpackConfig
        },

        clean: {
            options: { 
                force: true
            },
            client: {
                src: [
                    "./client/dist/**"
                ]
            },
            server: {
                src: [
                    "./server/dist/**"
                ]
            },
            post: {
                src: [
                    "./client/dist/l4w",
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
                    "./client/dist/<%= pkg.name %>-game.es5.js": "./client/dist/<%= pkg.name %>-game.js",
                    "./client/dist/<%= pkg.name %>-mapper.es5.js": "./client/dist/<%= pkg.name %>-mapper.js",
                    "./client/dist/<%= pkg.name %>-tilesetter.es5.js": "./client/dist/<%= pkg.name %>-tilesetter.js",
                    "./client/dist/<%= pkg.name %>-tester.es5.js": "./client/dist/<%= pkg.name %>-tester.js"
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
                    "./client/dist/<%= pkg.name %>-game.min.js": ["./client/dist/<%= pkg.name %>-game.es5.js"],
                    "./client/dist/<%= pkg.name %>-mapper.min.js": ["./client/dist/<%= pkg.name %>-mapper.es5.js"],
                    "./client/dist/<%= pkg.name %>-tilesetter.min.js": ["./client/dist/<%= pkg.name %>-tilesetter.es5.js"],
                    "./client/dist/<%= pkg.name %>-tester.min.js": ["./client/dist/<%= pkg.name %>-tester.es5.js"],
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
    grunt.loadNpmTasks("grunt-webpack");
    
    // Default L4W build task (linter, client and server)
    grunt.registerTask("task_lint", "Clean the dist folders and execute tslint (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["clean:client","clean:server","tslint"]);
    });
    grunt.registerTask("task_compile", "Execute ts (cannot fail)", ["ts:server","copy","webpack"]);
    grunt.registerTask("task_minify", "Execute last cleanup, babel and uglify (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["clean:post","babel","uglify"]);
    });
    grunt.registerTask("l4w-build-pipeline", ["task_lint","task_compile","task_minify"]);

    // Fast L4W build tasks (no linter, only client or server)
    grunt.registerTask("l4w-build-client", ["clean:client","webpack"]);
    grunt.registerTask("l4w-build-server", ["clean:server","ts:server","copy"]);

    // Default task
    grunt.registerTask("default","l4w-build-pipeline");
};
