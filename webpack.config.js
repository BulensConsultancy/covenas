var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/js');
var APP_DIR = path.resolve(__dirname, 'src/components');

var config = {	
	entry: APP_DIR + '/index.jsx',
	module : {
		loaders : [{
			test : /\.jsx?/,
			include : APP_DIR,
			loader : 'babel-loader'
		}]
	},
	output: {
		path: BUILD_DIR,
		filename: 'app.js'
	}
};

module.exports = config;