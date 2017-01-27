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

	array = doubt(array, AS_ARRAY) ? array : doubt(this, AS_ARRAY) ? this : [];

	var list = (0, _from2.default)(array, map, entity);

	if (array !== this && doubt(this, ARRAY)) {
		list = list.concat(this);
	}

	harden("raze", raze.bind(list), list);

	return list;
};

module.exports = raze;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhemUuanMiXSwibmFtZXMiOlsiZG91YnQiLCJyZXF1aXJlIiwiaGFyZGVuIiwiQXJyYXkiLCJmcm9tIiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwibiIsImNhbGwiLCJ0IiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsImFicyIsImUiLCJwb3ciLCJvIiwibWluIiwibWF4IiwiVHlwZUVycm9yIiwiYSIsInUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwiZiIsImMiLCJoIiwicmF6ZSIsImFycmF5IiwibWFwIiwiZW50aXR5IiwiQVNfQVJSQVkiLCJsaXN0IiwiQVJSQVkiLCJjb25jYXQiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjs7QUFFQTtBQUNDO0FBQ0EsbUJBQWFFLE1BQU1DLElBQU4sR0FBVyxZQUFVO0FBQUMsS0FBSUMsSUFBRUMsT0FBT0MsU0FBUCxDQUFpQkMsUUFBdkI7QUFBQSxLQUFnQ0MsSUFBRSxXQUFTQSxFQUFULEVBQVc7QUFDaEYsU0FBTSxjQUFZLE9BQU9BLEVBQW5CLElBQXNCLHdCQUFzQkosRUFBRUssSUFBRixDQUFPRCxFQUFQLENBQWxEO0FBQTRELEVBRHpCO0FBQUEsS0FDMEJFLElBQUUsU0FBRkEsQ0FBRSxDQUFTTixDQUFULEVBQVc7QUFBQyxNQUFJSSxJQUFFRyxPQUFPUCxDQUFQLENBQU47QUFDM0UsU0FBT1EsTUFBTUosQ0FBTixJQUFTLENBQVQsR0FBVyxNQUFJQSxDQUFKLElBQU9LLFNBQVNMLENBQVQsQ0FBUCxHQUFtQixDQUFDQSxJQUFFLENBQUYsR0FBSSxDQUFKLEdBQU0sQ0FBQyxDQUFSLElBQVdNLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsR0FBTCxDQUFTUixDQUFULENBQVgsQ0FBOUIsR0FBc0RBLENBQXhFO0FBQTBFLEVBRnZDO0FBQUEsS0FHbkNTLElBQUVILEtBQUtJLEdBQUwsQ0FBUyxDQUFULEVBQVcsRUFBWCxJQUFlLENBSGtCO0FBQUEsS0FHaEJDLElBQUUsU0FBRkEsQ0FBRSxDQUFTZixDQUFULEVBQVc7QUFBQyxNQUFJSSxJQUFFRSxFQUFFTixDQUFGLENBQU4sQ0FBVyxPQUFPVSxLQUFLTSxHQUFMLENBQVNOLEtBQUtPLEdBQUwsQ0FBU2IsQ0FBVCxFQUFXLENBQVgsQ0FBVCxFQUF1QlMsQ0FBdkIsQ0FBUDtBQUFpQyxFQUgxQztBQUluQyxRQUFPLFVBQVNiLENBQVQsRUFBVztBQUFDLE1BQUlNLElBQUUsSUFBTjtBQUFBLE1BQVdPLElBQUVaLE9BQU9ELENBQVAsQ0FBYjtBQUNuQixNQUFHLFFBQU1BLENBQVQsRUFBVyxNQUFNLElBQUlrQixTQUFKLENBQWMsa0VBQWQsQ0FBTjtBQUNYLE1BQUlDLENBQUo7QUFBQSxNQUFNQyxJQUFFQyxVQUFVQyxNQUFWLEdBQWlCLENBQWpCLEdBQW1CRCxVQUFVLENBQVYsQ0FBbkIsR0FBZ0MsS0FBSyxDQUE3QyxDQUErQyxJQUFHLGVBQWEsT0FBT0QsQ0FBdkIsRUFBeUI7QUFDeEUsT0FBRyxDQUFDaEIsRUFBRWdCLENBQUYsQ0FBSixFQUFTLE1BQU0sSUFBSUYsU0FBSixDQUFjLG1FQUFkLENBQU47QUFDVEcsYUFBVUMsTUFBVixHQUFpQixDQUFqQixLQUFxQkgsSUFBRUUsVUFBVSxDQUFWLENBQXZCO0FBQXFDLFFBQUksSUFBSUUsQ0FBSixFQUFNQyxJQUFFVCxFQUFFRixFQUFFUyxNQUFKLENBQVIsRUFBb0JHLElBQUVyQixFQUFFRSxDQUFGLElBQy9ETCxPQUFPLElBQUlLLENBQUosQ0FBTWtCLENBQU4sQ0FBUCxDQUQrRCxHQUM5QyxJQUFJMUIsS0FBSixDQUFVMEIsQ0FBVixDQUR3QixFQUNYRSxJQUFFLENBREssRUFDSEYsSUFBRUUsQ0FEQztBQUNFSCxPQUFFVixFQUFFYSxDQUFGLENBQUYsRUFDdkNOLElBQUVLLEVBQUVDLENBQUYsSUFBSyxlQUFhLE9BQU9QLENBQXBCLEdBQXNCQyxFQUFFRyxDQUFGLEVBQUlHLENBQUosQ0FBdEIsR0FBNkJOLEVBQUVmLElBQUYsQ0FBT2MsQ0FBUCxFQUFTSSxDQUFULEVBQVdHLENBQVgsQ0FBcEMsR0FBa0RELEVBQUVDLENBQUYsSUFBS0gsQ0FEaEIsRUFDa0JHLEtBQUcsQ0FEckI7QUFERixHQUV5QixPQUFPRCxFQUFFSCxNQUFGLEdBQVNFLENBQVQsRUFBV0MsQ0FBbEI7QUFBb0IsRUFObEY7QUFNbUYsQ0FWM0QsRUFBeEI7QUFXRDs7QUFFQSxJQUFNRSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsR0FBdEIsRUFBMkJDLE1BQTNCLEVBQW1DO0FBQy9DOzs7Ozs7Ozs7O0FBVUFGLFNBQVFqQyxNQUFPaUMsS0FBUCxFQUFjRyxRQUFkLElBQTBCSCxLQUExQixHQUNQakMsTUFBTyxJQUFQLEVBQWFvQyxRQUFiLElBQXlCLElBQXpCLEdBQWdDLEVBRGpDOztBQUdBLEtBQUlDLE9BQU8sb0JBQVlKLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCQyxNQUF4QixDQUFYOztBQUVBLEtBQUlGLFVBQVUsSUFBVixJQUFrQmpDLE1BQU8sSUFBUCxFQUFhc0MsS0FBYixDQUF0QixFQUE0QztBQUMzQ0QsU0FBT0EsS0FBS0UsTUFBTCxDQUFhLElBQWIsQ0FBUDtBQUNBOztBQUVEckMsUUFBUSxNQUFSLEVBQWdCOEIsS0FBS1EsSUFBTCxDQUFXSCxJQUFYLENBQWhCLEVBQW1DQSxJQUFuQzs7QUFFQSxRQUFPQSxJQUFQO0FBQ0EsQ0F2QkQ7O0FBeUJBSSxPQUFPQyxPQUFQLEdBQWlCVixJQUFqQiIsImZpbGUiOiJyYXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJyYXplXCIsXG5cdFx0XHRcInBhdGhcIjogXCJyYXplL3JhemUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInJhemUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JhemUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJyYXplLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGVsZWdhdGUgaW1wbGVtZW50YXRpb24gb2YgQGNvZGU6QXJyYXkuZnJvbTtcblxuXHRcdFRoaXMgbW9kdWxlIGxvYWRzIEBjb2RlOkFycmF5LmZyb207IHN1cHBvcnQgbW9kdWxlLlxuXG5cdFx0V2hlbiBhbiBhcnJheSBvciBhcnJheS1saWtlIGVudGl0eSBpcyByYXplLCBpdCB3aWxsIGF0dGFjaCBhIHJhemUgYm91bmQgdG8gaXQgc2VsZi5cblxuXHRcdElmIHRoZSBhIHJhemVkIGFycmF5IHJhemUgYW5vdGhlciBhcnJheSBpdCB3aWxsIGFwcGVuZCBlbGVtZW50cy5cblxuXHRcdE90aGVyIHBhcmFtZXRlcnMgZm9sbG93IHRoZSBkb2N1bWVudGF0aW9uIGZvciBAY29kZTpBcnJheS5mcm9tO1xuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbi8vOiBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mcm9tXG5cdEFycmF5LmZyb218fChBcnJheS5mcm9tPWZ1bmN0aW9uKCl7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxuPWZ1bmN0aW9uKG4pe1xuXHRyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBufHxcIltvYmplY3QgRnVuY3Rpb25dXCI9PT1yLmNhbGwobil9LHQ9ZnVuY3Rpb24ocil7dmFyIG49TnVtYmVyKHIpO1xuXHRyZXR1cm4gaXNOYU4obik/MDowIT09biYmaXNGaW5pdGUobik/KG4+MD8xOi0xKSpNYXRoLmZsb29yKE1hdGguYWJzKG4pKTpufSxcblx0ZT1NYXRoLnBvdygyLDUzKS0xLG89ZnVuY3Rpb24ocil7dmFyIG49dChyKTtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwwKSxlKX07XG5cdHJldHVybiBmdW5jdGlvbihyKXt2YXIgdD10aGlzLGU9T2JqZWN0KHIpO1xuXHRpZihudWxsPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuXHR2YXIgYSx1PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB1KXtcblx0aWYoIW4odSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXHRhcmd1bWVudHMubGVuZ3RoPjImJihhPWFyZ3VtZW50c1syXSl9Zm9yKHZhciBpLGY9byhlLmxlbmd0aCksYz1uKHQpP1xuXHRPYmplY3QobmV3IHQoZikpOm5ldyBBcnJheShmKSxoPTA7Zj5oOylpPWVbaF0sXG5cdHU/Y1toXT1cInVuZGVmaW5lZFwiPT10eXBlb2YgYT91KGksaCk6dS5jYWxsKGEsaSxoKTpjW2hdPWksaCs9MTtyZXR1cm4gYy5sZW5ndGg9ZixjfX0oKSk7XG4vLzogQGVuZC1zdXBwb3J0LW1vZHVsZVxuXG5jb25zdCByYXplID0gZnVuY3Rpb24gcmF6ZSggYXJyYXksIG1hcCwgZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogXCJbKl1cIixcblx0XHRcdFx0XCJtYXA6b3B0aW9uYWxcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcImVudGl0eTpvcHRpb25hbFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRhcnJheSA9IGRvdWJ0KCBhcnJheSwgQVNfQVJSQVkgKT8gYXJyYXkgOlxuXHRcdGRvdWJ0KCB0aGlzLCBBU19BUlJBWSApPyB0aGlzIDogWyBdO1xuXG5cdGxldCBsaXN0ID0gQXJyYXkuZnJvbSggYXJyYXksIG1hcCwgZW50aXR5ICk7XG5cblx0aWYoIGFycmF5ICE9PSB0aGlzICYmIGRvdWJ0KCB0aGlzLCBBUlJBWSApICl7XG5cdFx0bGlzdCA9IGxpc3QuY29uY2F0KCB0aGlzICk7XG5cdH1cblxuXHRoYXJkZW4oIFwicmF6ZVwiLCByYXplLmJpbmQoIGxpc3QgKSwgbGlzdCApO1xuXG5cdHJldHVybiBsaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByYXplO1xuIl19
