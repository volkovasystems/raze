"use strict";

const webpack = require( "webpack" );
const UglifyJSPlugin = require( "uglifyjs-webpack-plugin" );

const DefinePlugin = webpack.DefinePlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;

module.exports = {
	"entry": "./raze.support.js",
	"resolve": {
		"descriptionFiles": [
			"bower.json",
			"package.json"
		],
		"modules": [
			"bower_components",
			"node_modules"
		],
		"mainFields": [
			"support",
			"browser",
			"module",
			"main"
		]
	},
	"module": {
		"rules": [
			{
				"test": /\.support\.js$/,
				"loader": "source-map-loader",
				"enforce": "pre"
			}
		]
	},
	"output": {
		"library": "raze",
		"libraryTarget": "umd",
		"filename": "raze.deploy.js"
	},
	"plugins": [
		new DefinePlugin( {
			"process.env.NODE_ENV": '"production"'
		} ),

		new ModuleConcatenationPlugin( ),

		new UglifyJSPlugin( {
			"uglifyOptions": {
				"compress": {
					"keep_fargs": true,
					"keep_fnames": true,
					"keep_infinity": true,
					"warnings": false
				},
				"mangle": {
					"keep_fnames": true,
					"keep_classnames": true
				},
				"output": {
					"comments": /^;/
				}
			},
			"parallel": {
				"cache": true
			},
			"sourceMap": false
		} )
	]
};
