const webpackConfig = require("./webpack.config.cjs");
const path = require("path");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        eslint: {
            files: {
                src: [
                      "./src/client/**/*.ts",
                      "!./src/client/interfaces/**",
                      "./src/common/**/*.ts",
                      "./src/server/**/*.ts",
                      "!./src/server/@types/**"
                ]
            },
            options: {
                configFile: path.resolve(__dirname, ".eslintrc.cjs")
            }
        },

        ts: {
            server: {
                tsconfig: "./src/tsconfig-server.json"
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: ".",
                    src: [
                        "./dist/server/**/*.js"
                    ],

                    dest: ".",
                    rename: function(dest, src) {
                        if(!src.includes("/models/") || src.endsWith("/models/index.js")) {
                            return dest + "/" + src.replace(".js",".mjs");
                        } else {
                            return dest + "/" + src.replace(".js",".cjs");
                        }
                    }
                }]
            }
        },

        webpack: {
            dev: webpackConfig("development"),
            prod: webpackConfig("production")
        },

        clean: {
            options: {
                force: true
            },
            client: {
                src: [
                    "./dist/client/**"
                ]
            },
            server: {
                src: [
                    "./dist/server/**"
                ]
            },
            post: {
                // This is important for the server, in order to remove .js modules
                // and make it use the .mjs modules
                src: [
                    "./dist/client/l4w",
                    "./dist/server/**/*.js",
                    "./dist/server/**/models/index.js"
                ]
            }
        },

        babel: {
            options: {
                presets: ["@babel/preset-env"]
            },
            dist: {
                files: {
                    "./dist/client/<%= pkg.name %>-game.es5.js": "./dist/client/<%= pkg.name %>-game.js",
                    "./dist/client/<%= pkg.name %>-mapper.es5.js": "./dist/client/<%= pkg.name %>-mapper.js",
                    "./dist/client/<%= pkg.name %>-tilesetter.es5.js": "./dist/client/<%= pkg.name %>-tilesetter.js",
                    "./dist/client/<%= pkg.name %>-tester.es5.js": "./dist/client/<%= pkg.name %>-tester.js"
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
                    "./dist/client/<%= pkg.name %>-game.min.js": ["./dist/client/<%= pkg.name %>-game.es5.js"],
                    "./dist/client/<%= pkg.name %>-mapper.min.js": ["./dist/client/<%= pkg.name %>-mapper.es5.js"],
                    "./dist/client/<%= pkg.name %>-tilesetter.min.js": ["./dist/client/<%= pkg.name %>-tilesetter.es5.js"],
                    "./dist/client/<%= pkg.name %>-tester.min.js": ["./dist/client/<%= pkg.name %>-tester.es5.js"],
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-webpack");

    // Default L4W build task (linter, client and server)
    grunt.registerTask("task_lint", "Clean the dist folders and execute eslint (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["clean:client","clean:server","eslint"]);
    });
    grunt.registerTask("task_compile", "Execute ts (cannot fail)", ["ts:server","copy","webpack:prod","clean:post"]);
    grunt.registerTask("task_minify", "Execute babel and uglify (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["babel","uglify"]);
    });
    grunt.registerTask("l4w-build-pipeline", ["task_lint","task_compile","task_minify"]);

    // Fast L4W build tasks (no linter, only client or server)
    grunt.registerTask("l4w-build-client", ["clean:client","webpack:dev"]);
    grunt.registerTask("l4w-build-server", ["clean:server","ts:server","copy","clean:post"]);

    // Default task
    grunt.registerTask("default","l4w-build-pipeline");
};
