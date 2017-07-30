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

			assert.deepEqual(raze(Object), [Object]);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicmF6ZSIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJOYU4iLCJJbmZpbml0eSIsIk9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7QUFDQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCQSxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFsQixFQUF1QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ25EQyxLQUFJLHlDQUFKLEVBQStDLFlBQU87O0FBRXBESixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsRUFBRSxRQUFRLFFBQVYsRUFBRixDQUFOLENBQWxCLEVBQW9ELENBQUUsRUFBRSxRQUFRLFFBQVYsRUFBRixDQUFwRDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxTQUFWLEVBQXFCLFlBQU87QUFDNUJDLEtBQUksdUJBQUosRUFBNkIsWUFBTzs7QUFFbENKLFVBQU9LLFNBQVAsQ0FBa0JILE1BQWxCLEVBQTJCLEVBQTNCOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGNBQVYsRUFBMEIsWUFBTztBQUNqQ0MsS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVsQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxJQUFOLENBQWxCLEVBQWdDLEVBQWhDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGFBQVYsRUFBeUIsWUFBTztBQUNoQ0MsS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVsQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTUksR0FBTixDQUFsQixFQUErQixFQUEvQjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUgsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3JDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXBDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNSyxRQUFOLENBQWxCLEVBQW9DLENBQUVBLFFBQUYsQ0FBcEM7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFKLFVBQVUsY0FBVixFQUEwQixZQUFPO0FBQ2pDQyxLQUFJLHFCQUFKLEVBQTJCLFlBQU87O0FBRWhDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLElBQU4sQ0FBbEIsRUFBZ0MsQ0FBRSxJQUFGLENBQWhDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGFBQVYsRUFBeUIsWUFBTztBQUNoQ0MsS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVsQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxFQUFOLENBQWxCLEVBQStCLEVBQS9COztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGFBQVYsRUFBeUIsWUFBTztBQUNoQ0MsS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV4Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxFQUFOLENBQWxCLEVBQStCLENBQUUsRUFBRixDQUEvQjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQ2hEQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87O0FBRXhDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLG1CQUFZLE9BQVosQ0FBTixDQUFsQixFQUFpRCxDQUFFLG1CQUFZLE9BQVosQ0FBRixDQUFqRDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ25DQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTNDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFPTSxNQUFQLENBQWxCLEVBQW1DLENBQUVBLE1BQUYsQ0FBbkM7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUEsQ0ExRkQ7O0FBNEZBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJyYXplXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInJhemUvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JhemUuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCIuL3JhemUuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcbmRlc2NyaWJlKCBcInJhemVcIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggXCJgcmF6ZSggWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyAxLCAyLCAzIF0gKSwgWyAxLCAyLCAzIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcmF6ZSggWyB7IG5hbWU6IHNpbXBsZSB9IF0gKWBcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyB7IG5hbWU6IHNpbXBsZSB9IF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKSwgWyB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoICksIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIG51bGwgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggbnVsbCApLCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCBOYW4gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggTmFOICksIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIEluZmluaXR5IClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgY29udGFpbiBJbmZpbml0eVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggSW5maW5pdHkgKSwgWyBJbmZpbml0eSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggdHJ1ZSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGNvbnRhaW4gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggdHJ1ZSApLCBbIHRydWUgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIFsgXSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIF0gKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggeyB9IClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgY29udGFpbiBlbXB0eSBvYmplY3RcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIHsgfSApLCBbIHsgfSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggU3ltYm9sLmZvciggaGVsbG8gKSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGNvbnRhaW4gaGVsbG8gc3ltYm9sXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCBPYmplY3QgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIE9iamVjdCBmdW5jdGlvblwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggIE9iamVjdCApLCBbIE9iamVjdCBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
