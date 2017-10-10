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

var assert = require("should");



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

	describe("`raze( false )`", function () {
		it("should contain false", function () {

			assert.deepEqual(raze(false), [false]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicmF6ZSIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJOYU4iLCJJbmZpbml0eSIsIk9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7QUFDQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCQSxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFsQixFQUF1QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxvQ0FBVixFQUFnRCxZQUFPO0FBQ3REQyxLQUFJLDZDQUFKLEVBQW1ELFlBQU87O0FBRXpESixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsRUFBRSxRQUFRLFFBQVYsRUFBRixDQUFOLENBQWxCLEVBQW9ELENBQUUsRUFBRSxRQUFRLFFBQVYsRUFBRixDQUFwRDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxXQUFWLEVBQXVCLFlBQU87QUFDN0JDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILE1BQWxCLEVBQTJCLEVBQTNCOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sSUFBTixDQUFsQixFQUFnQyxFQUFoQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU1JLEdBQU4sQ0FBbEIsRUFBK0IsRUFBL0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFILFVBQVUsb0JBQVYsRUFBZ0MsWUFBTztBQUN0Q0MsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTUssUUFBTixDQUFsQixFQUFvQyxDQUFFQSxRQUFGLENBQXBDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBSixVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUkscUJBQUosRUFBMkIsWUFBTzs7QUFFakNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sSUFBTixDQUFsQixFQUFnQyxDQUFFLElBQUYsQ0FBaEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSxzQkFBSixFQUE0QixZQUFPOztBQUVsQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxLQUFOLENBQWxCLEVBQWlDLENBQUUsS0FBRixDQUFqQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sRUFBTixDQUFsQixFQUErQixFQUEvQjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNDLEtBQUksNkJBQUosRUFBbUMsWUFBTzs7QUFFekNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sRUFBTixDQUFsQixFQUErQixDQUFFLEVBQUYsQ0FBL0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV6Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxtQkFBWSxPQUFaLENBQU4sQ0FBbEIsRUFBaUQsQ0FBRSxtQkFBWSxPQUFaLENBQUYsQ0FBakQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsa0JBQVYsRUFBOEIsWUFBTztBQUNwQ0MsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTU0sTUFBTixDQUFsQixFQUFrQyxDQUFFQSxNQUFGLENBQWxDOztBQUVBLEdBSkQ7QUFLQSxFQU5EO0FBT0EsQ0FqR0Q7QUFrR0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJyYXplXCIsXG5cdFx0XHRcInBhdGhcIjogXCJyYXplL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9yYXplLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwiLi9yYXplLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcInJhemVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgcmF6ZSggWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyAxLCAyLCAzIF0gKSwgWyAxLCAyLCAzIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIHsgJ25hbWUnOiAnc2ltcGxlJyB9IF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyB7ICduYW1lJzogJ3NpbXBsZScgfSBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKSwgWyB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoICksIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggbnVsbCApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImByYXplKCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggTmFOICksIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIEluZmluaXR5IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gSW5maW5pdHlcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggSW5maW5pdHkgKSwgWyBJbmZpbml0eSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcmF6ZSggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggdHJ1ZSApLCBbIHRydWUgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIGZhbHNlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggZmFsc2UgKSwgWyBmYWxzZSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcmF6ZSggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgXSApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImByYXplKCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBlbXB0eSBvYmplY3RcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggeyB9ICksIFsgeyB9IF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImByYXplKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBoZWxsbyBzeW1ib2xcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcmF6ZSggT2JqZWN0IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gT2JqZWN0IGZ1bmN0aW9uXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIE9iamVjdCApLCBbIE9iamVjdCBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
