const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = function(mode) {
	if(mode !== "development") {
		mode = "production";
	}
	return {
		mode: mode,
		entry: {
			game: "./src/client/game/Game.ts",
			mapper: "./src/client/tool/mapper/MapperPage.ts",
			tilesetter: "./src/client/tool/tilesetter/TilesetterPage.ts",
			tester: "./src/client/tool/test/Tester.ts"
		},
		output: {
			filename: "l4w-[name].js",
			library: "L4W_[name]",
			path: path.resolve(__dirname, "dist/client")
		},
		devtool: "source-map",
		resolve: {
			extensions: [
				".ts",
				".js",
				".vue"
			],
			alias: {
				"vue$": "vue/dist/vue.esm.js"
			}
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: [/node_modules/],
					loader: "ts-loader",
					options: {
						appendTsSuffixTo: [/\.vue$/],
						configFile: "src/tsconfig-client.json"
					}
				},
				{
					test: /\.vue$/,
					loader: "vue-loader"
				},
				{
					test: /\.css$/,
					use: [
						"vue-style-loader",
						"css-loader"
					]
				},
			]
		},
		plugins: [
			new VueLoaderPlugin()
		]
	}
}