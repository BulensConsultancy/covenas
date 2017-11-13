var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/js');
var APP_DIR = path.resolve(__dirname, 'src/components');

var config = {	
	entry: APP_DIR + '/index.jsx',
	
	entry : {
		index: APP_DIR + '/index.jsx',
		environment: APP_DIR + '/environment.jsx',
		about: APP_DIR + '/about.jsx',
		courses: APP_DIR + '/courses.jsx',
		gallery: APP_DIR + '/gallery.jsx',
		contact: APP_DIR + '/contact.jsx'	
	},  
	module : {
		loaders : [{
			test : /\.jsx?/,
			include : APP_DIR,
			loader : 'babel-loader?presets[]=es2015'
		}]
	},
	
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},	
};

module.exports = config;