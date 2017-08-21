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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicmF6ZSIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJOYU4iLCJJbmZpbml0eSIsIk9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7QUFDQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCQSxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFsQixFQUF1QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsb0NBQVYsRUFBZ0QsWUFBTztBQUN0REMsS0FBSSw2Q0FBSixFQUFtRCxZQUFPOztBQUV6REosVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxDQUFFLEVBQUUsUUFBUSxRQUFWLEVBQUYsQ0FBTixDQUFsQixFQUFvRCxDQUFFLEVBQUUsUUFBUSxRQUFWLEVBQUYsQ0FBcEQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLFdBQVYsRUFBdUIsWUFBTztBQUM3QkMsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssU0FBUCxDQUFrQkgsTUFBbEIsRUFBMkIsRUFBM0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sSUFBTixDQUFsQixFQUFnQyxFQUFoQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsZUFBVixFQUEyQixZQUFPO0FBQ2pDQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNSSxHQUFOLENBQWxCLEVBQStCLEVBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUgsVUFBVSxvQkFBVixFQUFnQyxZQUFPO0FBQ3RDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNSyxRQUFOLENBQWxCLEVBQW9DLENBQUVBLFFBQUYsQ0FBcEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSixVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUkscUJBQUosRUFBMkIsWUFBTzs7QUFFakNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sSUFBTixDQUFsQixFQUFnQyxDQUFFLElBQUYsQ0FBaEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGVBQVYsRUFBMkIsWUFBTztBQUNqQ0MsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxFQUFOLENBQWxCLEVBQStCLEVBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNDLEtBQUksNkJBQUosRUFBbUMsWUFBTzs7QUFFekNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sRUFBTixDQUFsQixFQUErQixDQUFFLEVBQUYsQ0FBL0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRDLEtBQUksNkJBQUosRUFBbUMsWUFBTzs7QUFFekNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sbUJBQVksT0FBWixDQUFOLENBQWxCLEVBQWlELENBQUUsbUJBQVksT0FBWixDQUFGLENBQWpEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNTSxNQUFOLENBQWxCLEVBQWtDLENBQUVBLE1BQUYsQ0FBbEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7QUFPQSxDQW5HRDtBQW9HQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInJhemVcIixcblx0XHRcdFwicGF0aFwiOiBcInJhemUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JhemUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCByYXplID0gcmVxdWlyZSggXCIuL3JhemUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwicmF6ZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcmF6ZSggWyB7ICduYW1lJzogJ3NpbXBsZScgfSBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgeyAnbmFtZSc6ICdzaW1wbGUnIH0gXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSBdICksIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoICksIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcmF6ZSggbnVsbCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBudWxsICksIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcmF6ZSggTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIE5hTiApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIEluZmluaXR5IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gSW5maW5pdHlcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggSW5maW5pdHkgKSwgWyBJbmZpbml0eSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCB0cnVlICksIFsgdHJ1ZSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyBdICksIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcmF6ZSggeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gZW1wdHkgb2JqZWN0XCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIHsgfSApLCBbIHsgfSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBoZWxsbyBzeW1ib2xcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCBPYmplY3QgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBPYmplY3QgZnVuY3Rpb25cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggT2JqZWN0ICksIFsgT2JqZWN0IF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
