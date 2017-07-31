"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
	@end-test-license

	@test-configuration:
		{
			"package": "raze",
			"path": "raze/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/raze.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"raze": "raze"
		}
	@end-include
*/

const assert = require( "assert" );

//: @server:
const raze = require( "./raze.js" );
//: @end-server

//: @client:
const raze = require( "./raze.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:
describe( "raze", ( ) => {

	describe( "`raze( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( raze( [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`raze( [ { name: simple } ] )`", ( ) => {
	it( "should be equal to [ { name: simple } ]", ( ) => {

			assert.deepEqual( raze( [ { "name": "simple" } ] ), [ { "name": "simple" } ] );

		} );
	} );

	describe( "raze( )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( ), [ ] );

		} );
	} );

	describe( "raze( null )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( null ), [ ] );

		} );
	} );

	describe( "raze( Nan )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( NaN ), [ ] );

		} );
	} );

	describe( "raze( Infinity )", ( ) => {
	it( "should contain Infinity", ( ) => {

			assert.deepEqual( raze( Infinity ), [ Infinity ] );

		} );
	} );

	describe( "raze( true )", ( ) => {
	it( "should contain true", ( ) => {

			assert.deepEqual( raze( true ), [ true ] );

		} );
	} );

	describe( "raze( [ ] )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( [ ] ), [ ] );

		} );
	} );

	describe( "raze( { } )", ( ) => {
	it( "should contain empty object", ( ) => {

			assert.deepEqual( raze( { } ), [ { } ] );

		} );
	} );

	describe( "raze( Symbol.for( hello ) )", ( ) => {
	it( "should contain hello symbol", ( ) => {

			assert.deepEqual( raze( Symbol.for( "hello" ) ), [ Symbol.for( "hello" ) ] );

		} );
	} );

	describe( "raze( Object )", ( ) => {
	it( "should contain Object function", ( ) => {

			assert.deepEqual( raze( Object ), [ Object ] );

		} );
	} );

} );


//: @end-server


//: @client:
describe( "raze", ( ) => {

	describe( "`raze( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( raze( [ 1, 2, 3 ] ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`raze( [ { name: simple } ] )`", ( ) => {
	it( "should be equal to [ { name: simple } ]", ( ) => {

			assert.deepEqual( raze( [ { "name": "simple" } ] ), [ { "name": "simple" } ] );

		} );
	} );

	describe( "raze( )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( ), [ ] );

		} );
	} );

	describe( "raze( null )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( null ), [ ] );

		} );
	} );

	describe( "raze( Nan )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( NaN ), [ ] );

		} );
	} );

	describe( "raze( Infinity )", ( ) => {
	it( "should contain Infinity", ( ) => {

			assert.deepEqual( raze( Infinity ), [ Infinity ] );

		} );
	} );

	describe( "raze( true )", ( ) => {
	it( "should contain true", ( ) => {

			assert.deepEqual( raze( true ), [ true ] );

		} );
	} );

	describe( "raze( [ ] )", ( ) => {
	it( "should be empty array", ( ) => {

			assert.deepEqual( raze( [ ] ), [ ] );

		} );
	} );

	describe( "raze( { } )", ( ) => {
	it( "should contain empty object", ( ) => {

			assert.deepEqual( raze( { } ), [ { } ] );

		} );
	} );

	describe( "raze( Symbol.for( hello ) )", ( ) => {
	it( "should contain hello symbol", ( ) => {

			assert.deepEqual( raze( Symbol.for( "hello" ) ), [ Symbol.for( "hello" ) ] );

		} );
	} );

	describe( "raze( Object )", ( ) => {
	it( "should contain Object function", ( ) => {

			assert.deepEqual( raze(  Object ), [ Object ] );

		} );
	} );

} );

//: @end-client
