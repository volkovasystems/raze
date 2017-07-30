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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

	describe("`raze( [ { name: simple } ] )`", function () {
		it("should be equal to [ { name: simple } ]", function () {

			assert.deepEqual(raze([{ "name": "simple" }]), [{ "name": "simple" }]);

		});
	});

	describe("raze( )", function () {
		it("should be empty array", function () {

			assert.deepEqual(raze(), []);

		});
	});

	describe("raze( null )", function () {
		it("should be empty array", function () {

			assert.deepEqual(raze(null), []);

		});
	});

	describe("raze( Nan )", function () {
		it("should be empty array", function () {

			assert.deepEqual(raze(NaN), []);

		});
	});

	describe("raze( Infinity )", function () {
		it("should contain Infinity", function () {

			assert.deepEqual(raze(Infinity), [Infinity]);

		});
	});

	describe("raze( true )", function () {
		it("should contain true", function () {

			assert.deepEqual(raze(true), [true]);

		});
	});

	describe("raze( [ ] )", function () {
		it("should be empty array", function () {

			assert.deepEqual(raze([]), []);

		});
	});

	describe("raze( { } )", function () {
		it("should contain empty object", function () {

			assert.deepEqual(raze({}), [{}]);

		});
	});

	describe("raze( Symbol.for( hello ) )", function () {
		it("should contain hello symbol", function () {

			assert.deepEqual(raze((0, _for2.default)("hello")), [(0, _for2.default)("hello")]);

		});
	});

	describe("raze( Object )", function () {
		it("should contain Object function", function () {

			assert.deepEqual(raze(Object, [Object]));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicmF6ZSIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJOYU4iLCJJbmZpbml0eSIsIk9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7QUFDQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCQSxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFsQixFQUF1QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ25EQyxLQUFJLHlDQUFKLEVBQStDLFlBQU87O0FBRXBESixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsRUFBRSxRQUFRLFFBQVYsRUFBRixDQUFOLENBQWxCLEVBQW9ELENBQUUsRUFBRSxRQUFRLFFBQVYsRUFBRixDQUFwRDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxTQUFWLEVBQXFCLFlBQU87QUFDNUJDLEtBQUksdUJBQUosRUFBNkIsWUFBTzs7QUFFbENKLFVBQU9LLFNBQVAsQ0FBa0JILE1BQWxCLEVBQTJCLEVBQTNCOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGNBQVYsRUFBMEIsWUFBTztBQUNqQ0MsS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVsQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxJQUFOLENBQWxCLEVBQWdDLEVBQWhDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGFBQVYsRUFBeUIsWUFBTztBQUNoQ0MsS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVsQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTUksR0FBTixDQUFsQixFQUErQixFQUEvQjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUgsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3JDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXBDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNSyxRQUFOLENBQWxCLEVBQW9DLENBQUVBLFFBQUYsQ0FBcEM7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFKLFVBQVUsY0FBVixFQUEwQixZQUFPO0FBQ2pDQyxLQUFJLHFCQUFKLEVBQTJCLFlBQU87O0FBRWhDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLElBQU4sQ0FBbEIsRUFBZ0MsQ0FBRSxJQUFGLENBQWhDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGFBQVYsRUFBeUIsWUFBTztBQUNoQ0MsS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVsQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxFQUFOLENBQWxCLEVBQStCLEVBQS9COztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGFBQVYsRUFBeUIsWUFBTztBQUNoQ0MsS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV4Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxFQUFOLENBQWxCLEVBQStCLENBQUUsRUFBRixDQUEvQjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQ2hEQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87O0FBRXhDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLG1CQUFZLE9BQVosQ0FBTixDQUFsQixFQUFpRCxDQUFFLG1CQUFZLE9BQVosQ0FBRixDQUFqRDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ25DQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTNDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFRTSxNQUFSLEVBQWtCLENBQUVBLE1BQUYsQ0FBbEIsQ0FBbEI7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUEsQ0ExRkQ7O0FBNEZBOzs7Ozs7Ozs7QUFTQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJyYXplL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9yYXplLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwiLi9yYXplLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6IFxyXG5kZXNjcmliZSggXCJyYXplXCIsICggKSA9PiB7XHJcblx0XHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzIF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgMSwgMiwgMyBdICksIFsgMSwgMiwgMyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgeyBuYW1lOiBzaW1wbGUgfSBdIClgXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgeyBuYW1lOiBzaW1wbGUgfSBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSBdICksIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCApLCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCBudWxsIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIG51bGwgKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggTmFuIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIE5hTiApLCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCBJbmZpbml0eSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGNvbnRhaW4gSW5maW5pdHlcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIEluZmluaXR5ICksIFsgSW5maW5pdHkgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIHRydWUgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIHRydWUgKSwgWyB0cnVlIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCBbIF0gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyBdICksIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIHsgfSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGNvbnRhaW4gZW1wdHkgb2JqZWN0XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCB7IH0gKSwgWyB7IH0gXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIFN5bWJvbC5mb3IoIGhlbGxvICkgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIGhlbGxvIHN5bWJvbFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggT2JqZWN0IClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgY29udGFpbiBPYmplY3QgZnVuY3Rpb25cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoICggT2JqZWN0ICksIFsgT2JqZWN0IF0gKSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gXSApLCBbIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSBdLCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCApLCBbIF0sIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIG51bGwgKSwgWyBdLCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBOYU4gKSwgWyBdLCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBJbmZpbml0eSApLCBbIEluZmluaXR5IF0sIFwic2hvdWxkIGNvbnRhaW4gSW5maW5pdHlcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggdHJ1ZSApLCBbIHRydWUgXSwgXCJzaG91bGQgY29udGFpbiB0cnVlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgXSApLCBbIF0sIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIHsgfSApLCBbIHsgfSBdLCBcInNob3VsZCBjb250YWluIGVtcHR5IG9iamVjdFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0sIFwic2hvdWxkIGNvbnRhaW4gaGVsbG8gc3ltYm9sXCIgKTtcclxuXHJcbi8vIGxldCBkdXJhdGlvbiA9IERhdGUubm93KCApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggT2JqZWN0ICksIFsgT2JqZWN0IF0sIFwic2hvdWxkIGNvbnRhaW4gT2JqZWN0IGZ1bmN0aW9uXCIgKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCBcIm9rXCIsIERhdGUubm93KCApIC0gZHVyYXRpb24sIFwibXNcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.support.js.map
