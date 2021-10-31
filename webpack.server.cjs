const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = function() {
	return {
		// Set to "none", since setting "production" force SSL connection to PG ??
		mode: "none",
		target: "node",
		externals: [nodeExternals()],
		devtool: "source-map",
		entry: "./src/server/l4w-server.ts",
		output: {
			path: path.resolve(__dirname, "dist/server"),
			filename: "l4w-server.cjs",
		},
		resolve: {
			extensions: [".ts", ".js"]
		},
		module: {
			rules: [
				{
					test: /.tsx?$/,
					exclude: [/node_modules/],
					loader: "ts-loader",
					options: {
						configFile: "src/tsconfig-server.json"
					}
				}
			]
		}
	}
}