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


	describe("`raze( [ { 'name': 'simple' } ] )`", function () {
		it("should be equal to [ { 'name': 'simple' } ]", function () {

			assert.deepEqual(raze([{ "name": "simple" }]), [{ "name": "simple" }]);

		});
	});


	describe("`raze( )`", function () {
		it("should be equal to empty array", function () {

			assert.deepEqual(raze(), []);

		});
	});


	describe("`raze( null )`", function () {
		it("should be equal to empty array", function () {

			assert.deepEqual(raze(null), []);

		});
	});


	describe("`raze( NaN )`", function () {
		it("should be equal to empty array", function () {

			assert.deepEqual(raze(NaN), []);

		});
	});


	describe("`raze( Infinity )`", function () {
		it("should contain Infinity", function () {

			assert.deepEqual(raze(Infinity), [Infinity]);

		});
	});


	describe("`raze( true )`", function () {
		it("should contain true", function () {

			assert.deepEqual(raze(true), [true]);

		});
	});


	describe("`raze( [ ] )`", function () {
		it("should be equal to empty array", function () {

			assert.deepEqual(raze([]), []);

		});
	});


	describe("`raze( { } )`", function () {
		it("should contain empty object", function () {

			assert.deepEqual(raze({}), [{}]);

		});
	});


	describe("`raze( Symbol.for( 'hello' ) )`", function () {
		it("should contain hello symbol", function () {

			assert.deepEqual(raze((0, _for2.default)("hello")), [(0, _for2.default)("hello")]);

		});
	});


	describe("`raze( Object )`", function () {
		it("should contain Object function", function () {

			assert.deepEqual(raze(Object), [Object]);

		});
	});
});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicmF6ZSIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJOYU4iLCJJbmZpbml0eSIsIk9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7QUFDQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCQSxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFsQixFQUF1QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsb0NBQVYsRUFBZ0QsWUFBTztBQUN0REMsS0FBSSw2Q0FBSixFQUFtRCxZQUFPOztBQUV6REosVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxDQUFFLEVBQUUsUUFBUSxRQUFWLEVBQUYsQ0FBTixDQUFsQixFQUFvRCxDQUFFLEVBQUUsUUFBUSxRQUFWLEVBQUYsQ0FBcEQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLFdBQVYsRUFBdUIsWUFBTztBQUM3QkMsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssU0FBUCxDQUFrQkgsTUFBbEIsRUFBMkIsRUFBM0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sSUFBTixDQUFsQixFQUFnQyxFQUFoQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsZUFBVixFQUEyQixZQUFPO0FBQ2pDQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNSSxHQUFOLENBQWxCLEVBQStCLEVBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUgsVUFBVSxvQkFBVixFQUFnQyxZQUFPO0FBQ3RDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNSyxRQUFOLENBQWxCLEVBQW9DLENBQUVBLFFBQUYsQ0FBcEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSixVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUkscUJBQUosRUFBMkIsWUFBTzs7QUFFakNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sSUFBTixDQUFsQixFQUFnQyxDQUFFLElBQUYsQ0FBaEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGVBQVYsRUFBMkIsWUFBTztBQUNqQ0MsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxFQUFOLENBQWxCLEVBQStCLEVBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNDLEtBQUksNkJBQUosRUFBbUMsWUFBTzs7QUFFekNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sRUFBTixDQUFsQixFQUErQixDQUFFLEVBQUYsQ0FBL0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRDLEtBQUksNkJBQUosRUFBbUMsWUFBTzs7QUFFekNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sbUJBQVksT0FBWixDQUFOLENBQWxCLEVBQWlELENBQUUsbUJBQVksT0FBWixDQUFGLENBQWpEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNTSxNQUFOLENBQWxCLEVBQWtDLENBQUVBLE1BQUYsQ0FBbEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7QUFPQSxDQW5HRDtBQW9HQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJyYXplL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9yYXplLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwiLi9yYXplLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmRlc2NyaWJlKCBcInJhemVcIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzIF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgMSwgMiwgMyBdICksIFsgMSwgMiwgMyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIHsgJ25hbWUnOiAnc2ltcGxlJyB9IF0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIHsgJ25hbWUnOiAnc2ltcGxlJyB9IF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKSwgWyB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgcmF6ZSggKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBudWxsIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIG51bGwgKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBOYU4gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggTmFOICksIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgcmF6ZSggSW5maW5pdHkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBjb250YWluIEluZmluaXR5XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBJbmZpbml0eSApLCBbIEluZmluaXR5IF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIHRydWUgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBjb250YWluIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIHRydWUgKSwgWyB0cnVlIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIF0gKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCB7IH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBjb250YWluIGVtcHR5IG9iamVjdFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggeyB9ICksIFsgeyB9IF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHJhemUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gaGVsbG8gc3ltYm9sXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cdFxyXG5cclxuXHRkZXNjcmliZSggXCJgcmF6ZSggT2JqZWN0IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBPYmplY3QgZnVuY3Rpb25cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIE9iamVjdCApLCBbIE9iamVjdCBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxufSApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
