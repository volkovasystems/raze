"use strict";

const webpack = require( "webpack" );
const UglifyJSPlugin = require( "uglifyjs-webpack-plugin" );

const DefinePlugin = webpack.DefinePlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;

module.exports = {
	"entry": "./raze.js",
	"resolve": {
		"descriptionFiles": [
			"package.json"
		],
		"modules": [
			"node_modules"
		],
		"mainFields": [
			"main"
		]
	},
	"target": "node",
	"output": {
		"library": "raze",
		"libraryTarget": "umd",
		"filename": "raze.pack.js"
	},
	"plugins": [
		new DefinePlugin( {
			"process.env.NODE_ENV": '"production"'
		} ),

		new ModuleConcatenationPlugin( ),

		/*;
			@note:
				The plugin for uglifyjs-es on webpack is currently buggy.
				We will use external command for this in the mean time.
			@end-note
		*/
		/*;
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
		*/
	]
};
