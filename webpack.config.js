const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let CompressionPlugin = require("compression-webpack-plugin");
let webpack = require("webpack");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/font-woff'
						}
					}
				]
			}, {
				test: /\.(ttf|eot|svg|jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{ loader: 'file-loader' }
				]
			}
		]
	},
	plugins: [new BundleAnalyzerPlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': '"production"'
	}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new CompressionPlugin({
		filename: "[path].gz[query]",
		algorithm: "gzip",
		test: /\.js$|\.css$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	})],
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, './src'),
		historyApiFallback: true,
		inline: true,
		port: 8080
	}
};
