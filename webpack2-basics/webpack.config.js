var path = require('path');
const webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		home: './src/js/home.js',
		category: './src/js/category.js',
		giveaway: './src/js/giveaway.js',
		product: './src/js/product.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
//		publicPath: 'https://local.zalo.me/static'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
//		new UglifyJSPlugin({ uglifyOptions: {  } }),
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'master.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'master'
			,chunks: ['home', 'category', 'giveaway', 'product']
		})
		,new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
				,chunks: ['home', 'product']
		})
	]
};