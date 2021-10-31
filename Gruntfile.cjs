const webpackConfigClient = require("./webpack.client.cjs");
const webpackConfigServer = require("./webpack.server.cjs");
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
                      "./src/server/**/*.ts"
                ]
            },
            options: {
                overrideConfigFile: path.resolve(__dirname, ".eslintrc.cjs")
            }
        },

        webpack: {
            server: webpackConfigServer(),
            client_dev: webpackConfigClient("development"),
            client_prod: webpackConfigClient("production")
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
                src: [
                    "./dist/client/l4w"
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
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-webpack");

    // Build sub-tasks
    grunt.registerTask("task_lint", "Clean the dist folders and execute eslint (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["clean:client","clean:server","eslint"]);
    });
    grunt.registerTask("task_compile", "Execute ts (cannot fail)", function () {
        grunt.option("force", false);
        grunt.task.run(["webpack:server","webpack:client_prod","clean:post"]);
    });
    grunt.registerTask("task_minify", "Execute babel and uglify (can fail)", function () {
        grunt.option("force", true);
        grunt.task.run(["babel","uglify"]);
    });

    // Production task (default)
    grunt.registerTask("l4w-build-pipeline", ["task_lint","task_compile","task_minify"]);
    grunt.registerTask("default","l4w-build-pipeline");

    // Dev tasks (faster, no linter, only client or server)
    grunt.registerTask("l4w-build-client", ["clean:client","webpack:client_dev"]);
    grunt.registerTask("l4w-build-server", ["clean:server","webpack:server"]);
};
