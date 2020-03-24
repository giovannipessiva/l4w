const path = require("path");

module.exports = {
	mode: "production",
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
			".js"
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
					configFile: "src/tsconfig-client.json"
				}
			}
		]
	}
}