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
			assert.deepEqual(raze([1, 2, 3]), [1, 2, 3]);

		});
	});

	describe("`raze( [ { name: simple } ] )`", function () {
		it("should be equal to [ { name: simple } ]", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze([{ "name": "simple" }]), [{ "name": "simple" }]);

		});
	});

	describe("raze( )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze(), []);

		});
	});

	describe("raze( null )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze(null), []);

		});
	});

	describe("raze( Nan )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze(NaN), []);

		});
	});

	describe("raze( Infinity )", function () {
		it("should contain Infinity", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze(Infinity), [Infinity]);

		});
	});

	describe("raze( true )", function () {
		it("should contain true", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze(true), [true]);

		});
	});

	describe("raze( [ ] )", function () {
		it("should be empty array", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze([]), []);

		});
	});

	describe("raze( { } )", function () {
		it("should contain empty object", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze({}), [{}]);

		});
	});

	describe("raze( Symbol.for( hello ) )", function () {
		it("should contain hello symbol", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze((0, _for2.default)("hello")), [(0, _for2.default)("hello")]);

		});
	});

	describe("raze( Object )", function () {
		it("should contain Object function", function () {
			var result = browser.url(bridgeURL).execute(function () {return raze();});
			assert.deepEqual(raze(Object, [Object]));

		});
	});

});


//: @end-bridge





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJyYXplIiwiZGVlcEVxdWFsIiwiTmFOIiwiSW5maW5pdHkiLCJPYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOzs7QUFHeEIsS0FBSUMsWUFBWUMsU0FBaEI7QUFDQSxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNILFNBQWQsRUFBeUIsYUFBekIsQ0FBakI7QUFDQSxLQUFJSSx3QkFBdUJGLFVBQTNCOzs7QUFHQUgsVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDTSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDNUMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBUCxFQUFsQyxDQUFiO0FBQ0FkLFVBQU9lLFNBQVAsQ0FBa0JELEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFsQixFQUF1QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQVgsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ25ETSxLQUFJLHlDQUFKLEVBQStDLFlBQU87QUFDcEQsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixD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b0JBQU9DLE1BQVAsRUFBbEMsQ0FBYjtBQUNBZCxVQUFPZSxTQUFQLENBQWtCRCxLQUFNLG1CQUFZLE9BQVosQ0FBTixDQUFsQixFQUFpRCxDQUFFLG1CQUFZLE9BQVosQ0FBRixDQUFqRDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQVgsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ25DTSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDM0MsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBUCxFQUFsQyxDQUFiO0FBQ0FkLFVBQU9lLFNBQVAsQ0FBa0JELEtBQVFJLE1BQVIsRUFBa0IsQ0FBRUEsTUFBRixDQUFsQixDQUFsQjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQSxDQWhHRDs7O0FBbUdBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJyYXplXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInJhemUvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JhemUuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuZGVzY3JpYmUoIFwicmF6ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcclxuXHRsZXQgZGlyZWN0b3J5ID0gX19kaXJuYW1lO1xyXG5cdGxldCB0ZXN0QnJpZGdlID0gcGF0aC5yZXNvbHZlKCBkaXJlY3RvcnksIFwiYnJpZGdlLmh0bWxcIiApO1xyXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHRlc3RCcmlkZ2UgfWA7XHJcblxyXG5cdFxyXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyAxLCAyLCAzIF0gKSwgWyAxLCAyLCAzIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcmF6ZSggWyB7IG5hbWU6IHNpbXBsZSB9IF0gKWBcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyB7IG5hbWU6IHNpbXBsZSB9IF1cIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcmF6ZSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSBdICksIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRcdGRlc2NyaWJlKCBcInJhemUoIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcmF6ZSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCApLCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJyYXplKCBudWxsIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcmF6ZSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBudWxsICksIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIE5hbiApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggTmFOICksIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIEluZmluaXR5IClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgY29udGFpbiBJbmZpbml0eVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiByYXplKCApICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIEluZmluaXR5ICksIFsgSW5maW5pdHkgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIHRydWUgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcmF6ZSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCB0cnVlICksIFsgdHJ1ZSBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggWyBdIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcmF6ZSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIF0gKSwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwicmF6ZSggeyB9IClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgY29udGFpbiBlbXB0eSBvYmplY3RcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gcmF6ZSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByYXplKCB7IH0gKSwgWyB7IH0gXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIFN5bWJvbC5mb3IoIGhlbGxvICkgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBjb250YWluIGhlbGxvIHN5bWJvbFwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiByYXplKCApICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICksIFsgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInJhemUoIE9iamVjdCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGNvbnRhaW4gT2JqZWN0IGZ1bmN0aW9uXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHJhemUoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggKCBPYmplY3QgKSwgWyBPYmplY3QgXSApICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcblxyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggWyB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gXSApLCBbIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSBdLCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCApLCBbIF0sIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIG51bGwgKSwgWyBdLCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBOYU4gKSwgWyBdLCBcInNob3VsZCBiZSBlbXB0eSBhcnJheVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBJbmZpbml0eSApLCBbIEluZmluaXR5IF0sIFwic2hvdWxkIGNvbnRhaW4gSW5maW5pdHlcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggdHJ1ZSApLCBbIHRydWUgXSwgXCJzaG91bGQgY29udGFpbiB0cnVlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIFsgXSApLCBbIF0sIFwic2hvdWxkIGJlIGVtcHR5IGFycmF5XCIgKTtcclxuXHJcbi8vIGFzc2VydC5kZWVwRXF1YWwoIHJhemUoIHsgfSApLCBbIHsgfSBdLCBcInNob3VsZCBjb250YWluIGVtcHR5IG9iamVjdFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCByYXplKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0sIFwic2hvdWxkIGNvbnRhaW4gaGVsbG8gc3ltYm9sXCIgKTtcclxuXHJcbi8vIGxldCBkdXJhdGlvbiA9IERhdGUubm93KCApO1xyXG5cclxuLy8gYXNzZXJ0LmRlZXBFcXVhbCggcmF6ZSggT2JqZWN0ICksIFsgT2JqZWN0IF0sIFwic2hvdWxkIGNvbnRhaW4gT2JqZWN0IGZ1bmN0aW9uXCIgKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCBcIm9rXCIsIERhdGUubm93KCApIC0gZHVyYXRpb24sIFwibXNcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
