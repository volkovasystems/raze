"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "raze",
			"path": "raze/raze.js",
			"file": "raze.js",
			"module": "raze",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/raze.git",
			"test": "raze-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Delegate implementation of @code:Array.from;

		This module loads @code:Array.from; support module.

		When an array or array-like entity is raze, it will attach a raze bound to it self.

		If the a razed array raze another array it will append elements.

		Other parameters follow the documentation for @code:Array.from;
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"harden": "harden"
		}
	@end-include
*/

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doubt = require("doubt");
var harden = require("harden");

//: @support-module:
//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
_from2.default || (Array.from = function () {
	var r = Object.prototype.toString,
	    n = function n(_n) {
		return "function" == typeof _n || "[object Function]" === r.call(_n);
	},
	    t = function t(r) {
		var n = Number(r);
		return isNaN(n) ? 0 : 0 !== n && isFinite(n) ? (n > 0 ? 1 : -1) * Math.floor(Math.abs(n)) : n;
	},
	    e = Math.pow(2, 53) - 1,
	    o = function o(r) {
		var n = t(r);return Math.min(Math.max(n, 0), e);
	};
	return function (r) {
		var t = this,
		    e = Object(r);
		if (null == r) throw new TypeError("Array.from requires an array-like object - not null or undefined");
		var a,
		    u = arguments.length > 1 ? arguments[1] : void 0;if ("undefined" != typeof u) {
			if (!n(u)) throw new TypeError("Array.from: when provided, the second argument must be a function");
			arguments.length > 2 && (a = arguments[2]);
		}for (var i, f = o(e.length), c = n(t) ? Object(new t(f)) : new Array(f), h = 0; f > h;) {
			i = e[h], u ? c[h] = "undefined" == typeof a ? u(i, h) : u.call(a, i, h) : c[h] = i, h += 1;
		}return c.length = f, c;
	};
}());
//: @end-support-module

var raze = function raze(array, map, entity) {
	/*;
 	@meta-configuration:
 		{
 			"array:required": "[*]",
 			"map:optional": "function",
 			"entity:optional": "object"
 		}
 	@end-meta-configuration
 */

	array = doubt(array).AS_ARRAY ? array : doubt(this).AS_ARRAY ? this : [];

	var list = (0, _from2.default)(array, map, entity);

	if (array !== this && doubt(this).ARRAY) {
		list = list.concat(this);
	}

	harden("raze", raze.bind(list), list);

	return list;
};

module.exports = raze;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhemUuanMiXSwibmFtZXMiOlsiZG91YnQiLCJyZXF1aXJlIiwiaGFyZGVuIiwiQXJyYXkiLCJmcm9tIiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwibiIsImNhbGwiLCJ0IiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsImFicyIsImUiLCJwb3ciLCJvIiwibWluIiwibWF4IiwiVHlwZUVycm9yIiwiYSIsInUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwiZiIsImMiLCJoIiwicmF6ZSIsImFycmF5IiwibWFwIiwiZW50aXR5IiwiQVNfQVJSQVkiLCJsaXN0IiwiQVJSQVkiLCJjb25jYXQiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjs7QUFFQTtBQUNDO0FBQ0EsbUJBQWFFLE1BQU1DLElBQU4sR0FBVyxZQUFVO0FBQUMsS0FBSUMsSUFBRUMsT0FBT0MsU0FBUCxDQUFpQkMsUUFBdkI7QUFBQSxLQUFnQ0MsSUFBRSxXQUFTQSxFQUFULEVBQVc7QUFDaEYsU0FBTSxjQUFZLE9BQU9BLEVBQW5CLElBQXNCLHdCQUFzQkosRUFBRUssSUFBRixDQUFPRCxFQUFQLENBQWxEO0FBQTRELEVBRHpCO0FBQUEsS0FDMEJFLElBQUUsU0FBRkEsQ0FBRSxDQUFTTixDQUFULEVBQVc7QUFBQyxNQUFJSSxJQUFFRyxPQUFPUCxDQUFQLENBQU47QUFDM0UsU0FBT1EsTUFBTUosQ0FBTixJQUFTLENBQVQsR0FBVyxNQUFJQSxDQUFKLElBQU9LLFNBQVNMLENBQVQsQ0FBUCxHQUFtQixDQUFDQSxJQUFFLENBQUYsR0FBSSxDQUFKLEdBQU0sQ0FBQyxDQUFSLElBQVdNLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsR0FBTCxDQUFTUixDQUFULENBQVgsQ0FBOUIsR0FBc0RBLENBQXhFO0FBQTBFLEVBRnZDO0FBQUEsS0FHbkNTLElBQUVILEtBQUtJLEdBQUwsQ0FBUyxDQUFULEVBQVcsRUFBWCxJQUFlLENBSGtCO0FBQUEsS0FHaEJDLElBQUUsU0FBRkEsQ0FBRSxDQUFTZixDQUFULEVBQVc7QUFBQyxNQUFJSSxJQUFFRSxFQUFFTixDQUFGLENBQU4sQ0FBVyxPQUFPVSxLQUFLTSxHQUFMLENBQVNOLEtBQUtPLEdBQUwsQ0FBU2IsQ0FBVCxFQUFXLENBQVgsQ0FBVCxFQUF1QlMsQ0FBdkIsQ0FBUDtBQUFpQyxFQUgxQztBQUluQyxRQUFPLFVBQVNiLENBQVQsRUFBVztBQUFDLE1BQUlNLElBQUUsSUFBTjtBQUFBLE1BQVdPLElBQUVaLE9BQU9ELENBQVAsQ0FBYjtBQUNuQixNQUFHLFFBQU1BLENBQVQsRUFBVyxNQUFNLElBQUlrQixTQUFKLENBQWMsa0VBQWQsQ0FBTjtBQUNYLE1BQUlDLENBQUo7QUFBQSxNQUFNQyxJQUFFQyxVQUFVQyxNQUFWLEdBQWlCLENBQWpCLEdBQW1CRCxVQUFVLENBQVYsQ0FBbkIsR0FBZ0MsS0FBSyxDQUE3QyxDQUErQyxJQUFHLGVBQWEsT0FBT0QsQ0FBdkIsRUFBeUI7QUFDeEUsT0FBRyxDQUFDaEIsRUFBRWdCLENBQUYsQ0FBSixFQUFTLE1BQU0sSUFBSUYsU0FBSixDQUFjLG1FQUFkLENBQU47QUFDVEcsYUFBVUMsTUFBVixHQUFpQixDQUFqQixLQUFxQkgsSUFBRUUsVUFBVSxDQUFWLENBQXZCO0FBQXFDLFFBQUksSUFBSUUsQ0FBSixFQUFNQyxJQUFFVCxFQUFFRixFQUFFUyxNQUFKLENBQVIsRUFBb0JHLElBQUVyQixFQUFFRSxDQUFGLElBQy9ETCxPQUFPLElBQUlLLENBQUosQ0FBTWtCLENBQU4sQ0FBUCxDQUQrRCxHQUM5QyxJQUFJMUIsS0FBSixDQUFVMEIsQ0FBVixDQUR3QixFQUNYRSxJQUFFLENBREssRUFDSEYsSUFBRUUsQ0FEQztBQUNFSCxPQUFFVixFQUFFYSxDQUFGLENBQUYsRUFDdkNOLElBQUVLLEVBQUVDLENBQUYsSUFBSyxlQUFhLE9BQU9QLENBQXBCLEdBQXNCQyxFQUFFRyxDQUFGLEVBQUlHLENBQUosQ0FBdEIsR0FBNkJOLEVBQUVmLElBQUYsQ0FBT2MsQ0FBUCxFQUFTSSxDQUFULEVBQVdHLENBQVgsQ0FBcEMsR0FBa0RELEVBQUVDLENBQUYsSUFBS0gsQ0FEaEIsRUFDa0JHLEtBQUcsQ0FEckI7QUFERixHQUV5QixPQUFPRCxFQUFFSCxNQUFGLEdBQVNFLENBQVQsRUFBV0MsQ0FBbEI7QUFBb0IsRUFObEY7QUFNbUYsQ0FWM0QsRUFBeEI7QUFXRDs7QUFFQSxJQUFNRSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsR0FBdEIsRUFBMkJDLE1BQTNCLEVBQW1DO0FBQy9DOzs7Ozs7Ozs7O0FBVUFGLFNBQVFqQyxNQUFPaUMsS0FBUCxFQUFlRyxRQUFmLEdBQXlCSCxLQUF6QixHQUNQakMsTUFBTyxJQUFQLEVBQWNvQyxRQUFkLEdBQXdCLElBQXhCLEdBQStCLEVBRGhDOztBQUdBLEtBQUlDLE9BQU8sb0JBQVlKLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCQyxNQUF4QixDQUFYOztBQUVBLEtBQUlGLFVBQVUsSUFBVixJQUFrQmpDLE1BQU8sSUFBUCxFQUFjc0MsS0FBcEMsRUFBMkM7QUFDMUNELFNBQU9BLEtBQUtFLE1BQUwsQ0FBYSxJQUFiLENBQVA7QUFDQTs7QUFFRHJDLFFBQVEsTUFBUixFQUFnQjhCLEtBQUtRLElBQUwsQ0FBV0gsSUFBWCxDQUFoQixFQUFtQ0EsSUFBbkM7O0FBRUEsUUFBT0EsSUFBUDtBQUNBLENBdkJEOztBQXlCQUksT0FBT0MsT0FBUCxHQUFpQlYsSUFBakIiLCJmaWxlIjoicmF6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicmF6ZS9yYXplLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJyYXplLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInJhemVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9yYXplLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicmF6ZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdERlbGVnYXRlIGltcGxlbWVudGF0aW9uIG9mIEBjb2RlOkFycmF5LmZyb207XG5cblx0XHRUaGlzIG1vZHVsZSBsb2FkcyBAY29kZTpBcnJheS5mcm9tOyBzdXBwb3J0IG1vZHVsZS5cblxuXHRcdFdoZW4gYW4gYXJyYXkgb3IgYXJyYXktbGlrZSBlbnRpdHkgaXMgcmF6ZSwgaXQgd2lsbCBhdHRhY2ggYSByYXplIGJvdW5kIHRvIGl0IHNlbGYuXG5cblx0XHRJZiB0aGUgYSByYXplZCBhcnJheSByYXplIGFub3RoZXIgYXJyYXkgaXQgd2lsbCBhcHBlbmQgZWxlbWVudHMuXG5cblx0XHRPdGhlciBwYXJhbWV0ZXJzIGZvbGxvdyB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgQGNvZGU6QXJyYXkuZnJvbTtcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG4vLzogQHN1cHBvcnQtbW9kdWxlOlxuXHQvLzogQHJlZmVyZW5jZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZnJvbVxuXHRBcnJheS5mcm9tfHwoQXJyYXkuZnJvbT1mdW5jdGlvbigpe3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbj1mdW5jdGlvbihuKXtcblx0cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbnx8XCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09ci5jYWxsKG4pfSx0PWZ1bmN0aW9uKHIpe3ZhciBuPU51bWJlcihyKTtcblx0cmV0dXJuIGlzTmFOKG4pPzA6MCE9PW4mJmlzRmluaXRlKG4pPyhuPjA/MTotMSkqTWF0aC5mbG9vcihNYXRoLmFicyhuKSk6bn0sXG5cdGU9TWF0aC5wb3coMiw1MyktMSxvPWZ1bmN0aW9uKHIpe3ZhciBuPXQocik7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sMCksZSl9O1xuXHRyZXR1cm4gZnVuY3Rpb24ocil7dmFyIHQ9dGhpcyxlPU9iamVjdChyKTtcblx0aWYobnVsbD09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0dmFyIGEsdT1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMDtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdSl7XG5cdGlmKCFuKHUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcblx0YXJndW1lbnRzLmxlbmd0aD4yJiYoYT1hcmd1bWVudHNbMl0pfWZvcih2YXIgaSxmPW8oZS5sZW5ndGgpLGM9bih0KT9cblx0T2JqZWN0KG5ldyB0KGYpKTpuZXcgQXJyYXkoZiksaD0wO2Y+aDspaT1lW2hdLFxuXHR1P2NbaF09XCJ1bmRlZmluZWRcIj09dHlwZW9mIGE/dShpLGgpOnUuY2FsbChhLGksaCk6Y1toXT1pLGgrPTE7cmV0dXJuIGMubGVuZ3RoPWYsY319KCkpO1xuLy86IEBlbmQtc3VwcG9ydC1tb2R1bGVcblxuY29uc3QgcmF6ZSA9IGZ1bmN0aW9uIHJhemUoIGFycmF5LCBtYXAsIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFwiWypdXCIsXG5cdFx0XHRcdFwibWFwOm9wdGlvbmFsXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJlbnRpdHk6b3B0aW9uYWxcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0YXJyYXkgPSBkb3VidCggYXJyYXkgKS5BU19BUlJBWT8gYXJyYXkgOlxuXHRcdGRvdWJ0KCB0aGlzICkuQVNfQVJSQVk/IHRoaXMgOiBbIF07XG5cblx0bGV0IGxpc3QgPSBBcnJheS5mcm9tKCBhcnJheSwgbWFwLCBlbnRpdHkgKTtcblxuXHRpZiggYXJyYXkgIT09IHRoaXMgJiYgZG91YnQoIHRoaXMgKS5BUlJBWSApe1xuXHRcdGxpc3QgPSBsaXN0LmNvbmNhdCggdGhpcyApO1xuXHR9XG5cblx0aGFyZGVuKCBcInJhemVcIiwgcmF6ZS5iaW5kKCBsaXN0ICksIGxpc3QgKTtcblxuXHRyZXR1cm4gbGlzdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmF6ZTtcbiJdfQ==
