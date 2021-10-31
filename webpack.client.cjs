const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = function(mode) {
	if(mode !== "development") {
		mode = "production";
	}
	return {
		mode: mode,
		target: "web",
		entry: {
			game: "./src/client/game/Game.ts",
			mapper: "./src/client/tool/mapper/MapperPage.ts",
			autotiler: "./src/client/tool/autotiler/AutotilerPage.ts",
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
					loader: "vue-style-loader"
				},
				{
					test: /\.css$/,
					loader: 'css-loader',
					options: {
						/* https://github.com/vuejs/vue-style-loader/issues/46#issuecomment-670624576 */
						esModule: false
					}
				},
			]
		},
		plugins: [
			new VueLoaderPlugin()
		]
	}
}