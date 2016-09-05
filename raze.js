"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "raze",
			"path": "raze/raze.js",
			"file": "raze.js",
			"module": "raze",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/raze.git",
			"test": "raze-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Delegate implementation of @code:Array.from;

		This module loads @code:Array.from; support module.

		When an array or array-like entity is raze, it will attach a raze bound to it self.

		If the a razed array raze another array it will append elements.

		Other parameters follow the documentation for @code:Array.from;
	@end-module-documentation

	@include:
		{
			"harden": "harden"
		}
	@end-include
*/

//: @support-module:
	// Production steps of ECMA-262, Edition 6, 22.1.2.1
	// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
	Array.from||(Array.from=function(){var r=Object.prototype.toString,n=function(n){
	return"function"==typeof n||"[object Function]"===r.call(n)},t=function(r){var n=Number(r);
	return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},
	e=Math.pow(2,53)-1,o=function(r){var n=t(r);return Math.min(Math.max(n,0),e)};
	return function(r){var t=this,e=Object(r);
	if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");
	var a,u=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof u){
	if(!n(u))throw new TypeError("Array.from: when provided, the second argument must be a function");
	arguments.length>2&&(a=arguments[2])}for(var i,f=o(e.length),c=n(t)?
	Object(new t(f)):new Array(f),h=0;f>h;)i=e[h],
	u?c[h]="undefined"==typeof a?u(i,h):u.call(a,i,h):c[h]=i,h+=1;return c.length=f,c}}());
//: @end-support-module


if( typeof window == "undefined" ){
	var harden = require( "harden" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

var raze = function raze( array, map, entity ){
	/*;
		@meta-configuration:
			{
				"array:required": "[*]",
				"map:optional": "function",
				"entity:optional": "object"
			}
		@end-meta-configuration
	*/

	array = typeof arguments[ 0 ] != "undefined" &&
		( /Arguments/ ).test( arguments[ 0 ].toString( ) )? arguments[ 0 ] :
		Array.isArray( arguments[ 0 ] )? arguments[ 0 ] :
		Array.isArray( this )? this : [ ];

	var list = Array.from( array, map, entity );

	if( array !== this &&
		Array.isArray( this ) )
	{
		list = list.concat( this );
	}

	harden( "raze", raze.bind( list ), list );

	return list;
};

if( typeof module != "undefined" ){
	module.exports = raze;
}
