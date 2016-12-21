var webpack = require( "webpack" );

module.exports = {
	"entry": "./raze.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ]
	},
	"output": {
		"library": "raze",
		"libraryTarget": "umd",
		"filename": "raze.deploy.js"
	},
	"plugins": [
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } )
	]
};
