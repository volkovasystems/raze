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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge






//: @bridge:

describe("raze", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`raze( [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( raze( [ 1, 2, 3 ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [1, 2, 3]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJkZWVwRXF1YWwiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJlcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0ksS0FBSSxnQ0FBSixFQUFzQyxZQUFPO0FBQzVDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQVIsVUFBVSxvQ0FBVixFQUFnRCxZQUFPO0FBQ3RESSxLQUFJLDZDQUFKLEVBQW1ELFlBQU87QUFDekQ7QUFDSDs7Ozs7Ozs7O0FBU0E7O0FBRUdQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxDQUFFLEVBQUUsUUFBUSxRQUFWLEVBQUYsQ0FBeEM7O0FBRUEsR0FmRDtBQWdCQSxFQWpCRDs7O0FBb0JBUixVQUFVLFdBQVYsRUFBdUIsWUFBTztBQUM3QkksS0FBSSxnQ0FBSixFQUFzQyxZQUFPO0FBQzVDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxFQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQVIsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ2xDSSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDNUM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZQyxNQUFaLENBQWxCLEVBQXdDLEVBQXhDOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7O0FBbUJBUixVQUFVLGVBQVYsRUFBMkIsWUFBTztBQUNqQ0ksS0FBSSxnQ0FBSixFQUFzQyxZQUFPO0FBQzVDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxFQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQVIsVUFBVSxvQkFBVixFQUFnQyxZQUFPO0FBQ3RDSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1ksS0FBUCxDQUFjRCxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7O0FBbUJBUixVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENJLEtBQUkscUJBQUosRUFBMkIsWUFBTztBQUNqQztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlDLE1BQVosQ0FBbEIsRUFBd0MsQ0FBRSxJQUFGLENBQXhDOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7O0FBbUJBUixVQUFVLGVBQVYsRUFBMkIsWUFBTztBQUNqQ0ksS0FBSSxnQ0FBSixFQUFzQyxZQUFPO0FBQzVDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxFQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7OztBQW1CQVIsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDakNJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlDLE1BQVosQ0FBbEIsRUFBd0MsQ0FBRSxFQUFGLENBQXhDOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7O0FBbUJBUixVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QztBQUNIOzs7Ozs7Ozs7OztBQVdBOztBQUVHUCxVQUFPWSxLQUFQLENBQWNELE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FqQkQ7QUFrQkEsRUFuQkQ7OztBQXNCQVIsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDSSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDNUM7QUFDSDs7Ozs7Ozs7OztBQVVBO0FBQ0dQLFVBQU9ZLEtBQVAsQ0FBY0QsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWZEO0FBZ0JBLEVBakJEOztBQW1CQSxDQXpORDs7QUEyTkEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInJhemVcIixcblx0XHRcdFwicGF0aFwiOiBcInJhemUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JhemUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJyYXplXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggWyAxLCAyLCAzIF0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyAxLCAyLCAzIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIFsgeyAnbmFtZSc6ICdzaW1wbGUnIH0gXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIHsgJ25hbWUnOiAnc2ltcGxlJyB9IF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHJhemUoIFsgeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9IF0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCByYXplKCBudWxsICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgcmF6ZSggTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IGFycmF5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCByYXplKCBOYU4gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHJhemUoIEluZmluaXR5IClbIDAgXSA9PSBJbmZpbml0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCByYXplKCB0cnVlICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgdHJ1ZSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImByYXplKCBbIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgYXJyYXlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHJhemUoIFsgXSApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIGVtcHR5IG9iamVjdFwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcmF6ZSggeyB9ICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgeyB9IF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIGhlbGxvIHN5bWJvbFwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcmF6ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKVsgMCBdO1xuXHRcdFx0XHRcdHJldHVybiB0ZXN0ID09IFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHJhemUoIE9iamVjdCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIE9iamVjdCBmdW5jdGlvblwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcmF6ZSggT2JqZWN0IClbIDAgXTtcblx0XHRcdFx0XHRyZXR1cm4gdGVzdCA9PSBPYmplY3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
