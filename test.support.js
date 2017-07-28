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



//: @client:
var raze = require("./raze.support.js");
//: @end-client






//: @client: 
describe("raze", function () {

	describe("`raze( [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {

			assert.deepEqual(raze([1, 2, 3]), [1, 2, 3]);

		});
	});

});
//: @end-client








// assert.deepEqual( raze( [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be equal" );

// assert.deepEqual( raze( [ { "name": "simple" } ] ), [ { "name": "simple" } ], "should be equal" );

// assert.deepEqual( raze( ), [ ], "should be empty array" );

// assert.deepEqual( raze( null ), [ ], "should be empty array" );

// assert.deepEqual( raze( NaN ), [ ], "should be empty array" );

// assert.deepEqual( raze( Infinity ), [ Infinity ], "should contain Infinity" );

// assert.deepEqual( raze( true ), [ true ], "should contain true" );

// assert.deepEqual( raze( [ ] ), [ ], "should be empty array" );

// assert.deepEqual( raze( { } ), [ { } ], "should contain empty object" );

// assert.deepEqual( raze( Symbol.for( "hello" ) ), [ Symbol.for( "hello" ) ], "should contain hello symbol" );

// let duration = Date.now( );

// assert.deepEqual( raze( Object ), [ Object ], "should contain Object function" );

// console.log( "ok", Date.now( ) - duration, "ms" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicmF6ZSIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BO0FBQ0FFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QkEsVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQU4sQ0FBbEIsRUFBdUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBdkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0FWRDtBQVdBOzs7Ozs7Ozs7QUFTQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJyYXplL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9yYXplLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwiLi9yYXplLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6IFxyXG5kZXNjcmliZSggXCJyYXplXCIsICggKSA9PiB7XHJcblx0XHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzIF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgMSwgMiwgMyBdICksIFsgMSwgMiwgMyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyAxLCAyLCAzIF0gKSwgWyAxLCAyLCAzIF0sIFwic2hvdWxkIGJlIGVxdWFsXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKSwgWyB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gXSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggKSwgWyBdLCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBudWxsICksIFsgXSwgXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggTmFOICksIFsgXSwgXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggSW5maW5pdHkgKSwgWyBJbmZpbml0eSBdLCBcInNob3VsZCBjb250YWluIEluZmluaXR5XCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIHRydWUgKSwgWyB0cnVlIF0sIFwic2hvdWxkIGNvbnRhaW4gdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIF0gKSwgWyBdLCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCB7IH0gKSwgWyB7IH0gXSwgXCJzaG91bGQgY29udGFpbiBlbXB0eSBvYmplY3RcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdLCBcInNob3VsZCBjb250YWluIGhlbGxvIHN5bWJvbFwiICk7XHJcblxyXG4vLyBsZXQgZHVyYXRpb24gPSBEYXRlLm5vdyggKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIE9iamVjdCApLCBbIE9iamVjdCBdLCBcInNob3VsZCBjb250YWluIE9iamVjdCBmdW5jdGlvblwiICk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyggXCJva1wiLCBEYXRlLm5vdyggKSAtIGR1cmF0aW9uLCBcIm1zXCIgKTtcclxuIl19
//# sourceMappingURL=test.support.js.map
