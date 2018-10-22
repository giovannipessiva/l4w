const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		game: "./client/src/game/Game.ts",
		mapper: "./client/src/tool/mapper/MapperPage.ts",
		tilesetter: "./client/src/tool/tilesetter/TilesetterPage.ts",
		tester: "./client/src/tool/test/Tester.ts"
	},
	output: {
		filename: "l4w-[name].js",
		library: "L4W_[name]",
		path: path.resolve(__dirname, "client/dist")
	},
	devtool: "source-map",
	resolve: {
        extensions: [ ".ts", ".js" ]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				loader: "ts-loader",
				options: {
					configFile: "client/tsconfig-client.json"
				}
			}
		]
	}
}