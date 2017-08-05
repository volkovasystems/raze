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

var assert = require("assert");





//: @bridge:
var path = require("path");
//: @end-bridge






//: @bridge:

describe("raze", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`raze( [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				return raze([1, 2, 3]);
			}).

			value;

			assert.deepEqual(result, [1, 2, 3]);

		});
	});


	describe("`raze( [ { 'name': 'simple' } ] )`", function () {
		it("should be equal to [ { 'name': 'simple' } ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( [ { "name": "simple" } ] ) );
   				}
   
   			).value;
   			//: @end-ignore

			assert.deepEqual(JSON.parse(result), [{ "name": "simple" }]);

		});
	});


	describe("`raze( )`", function () {
		it("should be equal to empty array", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), []);

		});
	});


	describe("`raze( null )`", function () {
		it("should be equal to empty array", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( null ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), []);

		});
	});


	describe("`raze( NaN )`", function () {
		it("should be equal to empty array", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( NaN ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), []);

		});
	});


	describe("`raze( Infinity )`", function () {
		it("should contain Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return raze( Infinity )[ 0 ] == Infinity;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});


	describe("`raze( true )`", function () {
		it("should contain true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( true ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [true]);

		});
	});


	describe("`raze( [ ] )`", function () {
		it("should be equal to empty array", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( [ ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), []);

		});
	});


	describe("`raze( { } )`", function () {
		it("should contain empty object", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( { } ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [{}]);

		});
	});


	describe("`raze( Symbol.for( 'hello' ) )`", function () {
		it("should contain hello symbol", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let test = raze( Symbol.for( "hello" ) )[ 0 ];
   					return test == Symbol.for( "hello" );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});


	describe("`raze( Object )`", function () {
		it("should contain Object function", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let test = raze( Object )[ 0 ];
   					return test == Object;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInJhemUiLCJ2YWx1ZSIsImRlZXBFcXVhbCIsIkpTT04iLCJwYXJzZSIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDSSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFQO0FBQ0EsSUFKVzs7QUFNWEMsUUFORjs7QUFRQWIsVUFBT2MsU0FBUCxDQUFrQk4sTUFBbEIsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBMUI7O0FBRUEsR0FaRDtBQWFBLEVBZEQ7OztBQWlCQUwsVUFBVSxvQ0FBVixFQUFnRCxZQUFPO0FBQ3RESSxLQUFJLDZDQUFKLEVBQW1ELFlBQU87QUFDekQ7QUFDSDs7Ozs7Ozs7O0FBU0E7O0FBRUdQLFVBQU9jLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWVIsTUFBWixDQUFsQixFQUF3QyxDQUFFLEVBQUUsUUFBUSxRQUFWLEVBQUYsQ0FBeEM7O0FBRUEsR0FmRDtBQWdCQSxFQWpCRDs7O0FBb0JBTCxVQUFVLFdBQVYsRUFBdUIsWUFBTztBQUM3QkksS0FBSSxnQ0FBSixFQUFzQyxZQUFPO0FBQzVDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9jLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWVIsTUFBWixDQUFsQixFQUF3QyxFQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQUwsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ2xDSSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDNUM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT2MsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZUixNQUFaLENBQWxCLEVBQXdDLEVBQXhDOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7O0FBbUJBTCxVQUFVLGVBQVYsRUFBMkIsWUFBTztBQUNqQ0ksS0FBSSxnQ0FBSixFQUFzQyxZQUFPO0FBQzVDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9jLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWVIsTUFBWixDQUFsQixFQUF3QyxFQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQUwsVUFBVSxvQkFBVixFQUFnQyxZQUFPO0FBQ3RDSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT2lCLEtBQVAsQ0FBY1QsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQUwsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ2xDSSxLQUFJLHFCQUFKLEVBQTJCLFlBQU87QUFDakM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT2MsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZUixNQUFaLENBQWxCLEVBQXdDLENBQUUsSUFBRixDQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQUwsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNJLEtBQUksZ0NBQUosRUFBc0MsWUFBTztBQUM1QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPYyxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlSLE1BQVosQ0FBbEIsRUFBd0MsRUFBeEM7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOzs7QUFtQkFMLFVBQVUsZUFBVixFQUEyQixZQUFPO0FBQ2pDSSxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT2MsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZUixNQUFaLENBQWxCLEVBQXdDLENBQUUsRUFBRixDQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQUwsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25ESSxLQUFJLDZCQUFKLEVBQW1DLFlBQU87QUFDekM7QUFDSDs7Ozs7Ozs7Ozs7QUFXQTs7QUFFR1AsVUFBT2lCLEtBQVAsQ0FBY1QsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWpCRDtBQWtCQSxFQW5CRDs7O0FBc0JBTCxVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENJLEtBQUksZ0NBQUosRUFBc0MsWUFBTztBQUM1QztBQUNIOzs7Ozs7Ozs7O0FBVUE7QUFDR1AsVUFBT2lCLEtBQVAsQ0FBY1QsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWZEO0FBZ0JBLEVBakJEOztBQW1CQSxDQXZORDs7QUF5TkEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJyYXplL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9yYXplLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuZGVzY3JpYmUoIFwicmF6ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJhemUoIFsgMSwgMiwgMyBdICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyAxLCAyLCAzIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgeyAnbmFtZSc6ICdzaW1wbGUnIH0gXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgeyAnbmFtZSc6ICdzaW1wbGUnIH0gXVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHJhemUoIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggKSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgcmF6ZSggbnVsbCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggbnVsbCApICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBOYU4gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHJhemUoIE5hTiApICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gSW5maW5pdHlcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJhemUoIEluZmluaXR5IClbIDAgXSA9PSBJbmZpbml0eTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCB0cnVlIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggdHJ1ZSApICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyB0cnVlIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggWyBdICkgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIHsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gZW1wdHkgb2JqZWN0XCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggeyB9ICkgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIHsgfSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBjb250YWluIGhlbGxvIHN5bWJvbFwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHJhemUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIClbIDAgXTtcclxuXHRcdFx0XHRcdHJldHVybiB0ZXN0ID09IFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgcmF6ZSggT2JqZWN0IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBPYmplY3QgZnVuY3Rpb25cIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSByYXplKCBPYmplY3QgKVsgMCBdO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3QgPT0gT2JqZWN0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
