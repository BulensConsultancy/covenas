var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/js');
var APP_DIR = path.resolve(__dirname, 'src/components');

var config = {	
	entry: APP_DIR + '/index.jsx',
	
	entry : {
		index: APP_DIR + '/index.jsx',
		index2: APP_DIR + '/index2.jsx',
		router: APP_DIR + '/router.jsx',
		gallery: APP_DIR + '/gallery.jsx'
	},  
	module : {
		loaders : [{
			test : /\.jsx?/,
			include : APP_DIR,
			loader : 'babel-loader'
		}]
	},
	
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},	
};

module.exports = config;