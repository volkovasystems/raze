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





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("raze", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;


	describe("`raze( [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, [1, 2, 3]);

		});
	});

	describe("`raze( [ { name: simple } ] )`", function () {
		it("should be equal to [ { name: simple } ]", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, [{ "name": "simple" }]);

		});
	});

	describe("raze( )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, []);

		});
	});

	describe("raze( null )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, []);

		});
	});

	describe("raze( Nan )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, []);

		});
	});

	describe("raze( Infinity )", function () {
		it("should contain Infinity", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, [Infinity]);

		});
	});

	describe("raze( true )", function () {
		it("should contain true", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, [true]);

		});
	});

	describe("raze( [ ] )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, []);

		});
	});

	describe("raze( { } )", function () {
		it("should contain empty object", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, [{}]);

		});
	});

	describe("raze( Symbol.for( hello ) )", function () {
		it("should contain hello symbol", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, [(0, _for2.default)("hello")]);

		});
	});

	describe("raze( Object )", function () {
		it("should contain Object function", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(result.value, [Object]);

		});
	});

});


//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJyYXplIiwiZGVlcEVxdWFsIiwidmFsdWUiLCJJbmZpbml0eSIsIk9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87OztBQUd4QixLQUFJQyxZQUFZQyxTQUFoQjtBQUNBLEtBQUlDLGFBQWFKLEtBQUtLLE9BQUwsQ0FBY0gsU0FBZCxFQUF5QixhQUF6QixDQUFqQjtBQUNBLEtBQUlJLHdCQUF1QkYsVUFBM0I7OztBQUdBSCxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNNLEtBQUksZ0NBQUosRUFBc0MsWUFBTztBQUM1QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxNQUFQLEVBQWxDLENBQWI7QUFDQWQsVUFBT2UsU0FBUCxDQUFrQkwsT0FBT00sS0FBekIsRUFBZ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBaEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFiLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNuRE0sS0FBSSx5Q0FBSixFQUErQyxZQUFPO0FBQ3BELE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JB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Q0FBRixDQUFoQzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQWIsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ25DTSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDM0MsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBUCxFQUFsQyxDQUFiO0FBQ0FkLFVBQU9lLFNBQVAsQ0FBa0JMLE9BQU9NLEtBQXpCLEVBQWdDLENBQUVFLE1BQUYsQ0FBaEM7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUEsQ0FoR0Q7OztBQW1HQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJyYXplXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInJhemUvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JhemUuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuZGVzY3JpYmUoIFwicmF6ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcclxuXHRsZXQgZGlyZWN0b3J5ID0gX19kaXJuYW1lO1xyXG5cdGxldCB0ZXN0QnJpZGdlID0gcGF0aC5yZXNvbHZlKCBkaXJlY3RvcnksIFwiYnJpZGdlLmh0bWxcIiApO1xyXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHRlc3RCcmlkZ2UgfWA7XHJcblxyXG5cdFxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LnZhbHVlLCBbIDEsIDIsIDMgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIHsgbmFtZTogc2ltcGxlIH0gXSApYFwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIHsgbmFtZTogc2ltcGxlIH0gXVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiByYXplKCApICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdC52YWx1ZSwgWyB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdFx0ZGVzY3JpYmUoIFwicmF6ZSggKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiByYXplKCApICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdC52YWx1ZSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggbnVsbCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LnZhbHVlLCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCBOYW4gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiByYXplKCApICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdC52YWx1ZSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggSW5maW5pdHkgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIEluZmluaXR5XCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LnZhbHVlLCBbIEluZmluaXR5IF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCB0cnVlIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgY29udGFpbiB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LnZhbHVlLCBbIHRydWUgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIFsgXSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LnZhbHVlLCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCB7IH0gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIGVtcHR5IG9iamVjdFwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiByYXplKCApICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdC52YWx1ZSwgWyB7IH0gXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIFN5bWJvbC5mb3IoIGhlbGxvICkgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIGhlbGxvIHN5bWJvbFwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiByYXplKCApICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdC52YWx1ZSwgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggT2JqZWN0IClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgY29udGFpbiBPYmplY3QgZnVuY3Rpb25cIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcmF6ZSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQudmFsdWUsIFsgT2JqZWN0IF0gICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcblxyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
