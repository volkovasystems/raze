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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/raze.git",
              			"test": "raze-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Convert entity to Array instance.
              
              		This will always return a new array.
              	@end-module-documentation
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var ARGUMENTS_PATTERN = /^\[object Arguments\]$/;

var raze = function raze(entity) {
	/*;
                                  	@meta-configuration:
                                  		{
                                  			"entity:required": "*"
                                  		}
                                  	@end-meta-configuration
                                  */

	/*;
                                     	@note:
                                     		If entity is falsy, return empty array.
                                     	@end-note
                                     */
	if (
	typeof entity == "undefined" ||
	typeof entity == "string" && entity.length == 0 ||
	(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object" && entity == null ||
	typeof entity == "number" && isNaN(entity))
	{
		return [];
	}

	/*;
   	@note:
   		All arrays, array-like, iterable, are object (with rare exception*)
   
   		Non-objects take up the first position of the array.
   
   		* Functions with Symbol.iterable might be an exception but chances
   			of this being implemented is rare considering no practical use cases
   			as of the moment.
   	@end-note
   */
	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object") {
		return [entity];
	}

	try {
		var array = (0, _from2.default)(entity);

		/*;
                                           	@note:
                                           		If the array result is empty, then check if it is an argument entity,
                                           			else return the entity as the first position in the object because
                                           			the object is not absorbed because the object is not array-like or
                                           			iterable.
                                           	@end-note
                                           */
		if (array.length === 0) {
			if (ARGUMENTS_PATTERN.test("" + entity)) {
				return array;
			}

			if (Array.isArray(entity)) {
				return array;
			}

			return [entity];
		}

		return array;

	} catch (error) {
		return [];
	}
};

module.exports = raze;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhemUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJBUkdVTUVOVFNfUEFUVEVSTiIsInJhemUiLCJlbnRpdHkiLCJsZW5ndGgiLCJpc05hTiIsImFycmF5IiwidGVzdCIsIkFycmF5IiwiaXNBcnJheSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEsSUFBTUEsb0JBQW9CLHdCQUExQjs7QUFFQSxJQUFNQyxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QjtBQUNuQzs7Ozs7Ozs7QUFRQTs7Ozs7QUFLQTtBQUNHLFFBQU9BLE1BQVAsSUFBaUIsV0FBbkI7QUFDRSxRQUFPQSxNQUFQLElBQWlCLFFBQWpCLElBQTZCQSxPQUFPQyxNQUFQLElBQWlCLENBRGhEO0FBRUUsU0FBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUZ6QztBQUdFLFFBQU9BLE1BQVAsSUFBaUIsUUFBakIsSUFBNkJFLE1BQU9GLE1BQVAsQ0FKaEM7QUFLQztBQUNBLFNBQU8sRUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztBQVdBLEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QixTQUFPLENBQUVBLE1BQUYsQ0FBUDtBQUNBOztBQUVELEtBQUc7QUFDRixNQUFJRyxRQUFRLG9CQUFZSCxNQUFaLENBQVo7O0FBRUE7Ozs7Ozs7O0FBUUEsTUFBSUcsTUFBTUYsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN2QixPQUFJSCxrQkFBa0JNLElBQWxCLE1BQTRCSixNQUE1QixDQUFKLEVBQTZDO0FBQzVDLFdBQU9HLEtBQVA7QUFDQTs7QUFFRCxPQUFJRSxNQUFNQyxPQUFOLENBQWVOLE1BQWYsQ0FBSixFQUE2QjtBQUM1QixXQUFPRyxLQUFQO0FBQ0E7O0FBRUQsVUFBTyxDQUFFSCxNQUFGLENBQVA7QUFDQTs7QUFFRCxTQUFPRyxLQUFQOztBQUVBLEVBekJELENBeUJDLE9BQU9JLEtBQVAsRUFBYztBQUNkLFNBQU8sRUFBUDtBQUNBO0FBQ0QsQ0FsRUQ7O0FBb0VBQyxPQUFPQyxPQUFQLEdBQWlCVixJQUFqQiIsImZpbGUiOiJyYXplLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJyYXplL3JhemUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwicmF6ZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInJhemVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcmF6ZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwicmF6ZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENvbnZlcnQgZW50aXR5IHRvIEFycmF5IGluc3RhbmNlLlxyXG5cclxuXHRcdFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIGEgbmV3IGFycmF5LlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuKi9cclxuXHJcbmNvbnN0IEFSR1VNRU5UU19QQVRURVJOID0gL15cXFtvYmplY3QgQXJndW1lbnRzXFxdJC87XHJcblxyXG5jb25zdCByYXplID0gZnVuY3Rpb24gcmF6ZSggZW50aXR5ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHQvKjtcclxuXHRcdEBub3RlOlxyXG5cdFx0XHRJZiBlbnRpdHkgaXMgZmFsc3ksIHJldHVybiBlbXB0eSBhcnJheS5cclxuXHRcdEBlbmQtbm90ZVxyXG5cdCovXHJcblx0aWYoXHJcblx0XHQoIHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiApIHx8XHJcblx0XHQoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiAmJiBlbnRpdHkubGVuZ3RoID09IDAgKSB8fFxyXG5cdFx0KCB0eXBlb2YgZW50aXR5ID09IFwib2JqZWN0XCIgJiYgZW50aXR5ID09IG51bGwgKSB8fFxyXG5cdFx0KCB0eXBlb2YgZW50aXR5ID09IFwibnVtYmVyXCIgJiYgaXNOYU4oIGVudGl0eSApIClcclxuXHQpe1xyXG5cdFx0cmV0dXJuIFsgXTtcclxuXHR9XHJcblxyXG5cdC8qO1xyXG5cdFx0QG5vdGU6XHJcblx0XHRcdEFsbCBhcnJheXMsIGFycmF5LWxpa2UsIGl0ZXJhYmxlLCBhcmUgb2JqZWN0ICh3aXRoIHJhcmUgZXhjZXB0aW9uKilcclxuXHJcblx0XHRcdE5vbi1vYmplY3RzIHRha2UgdXAgdGhlIGZpcnN0IHBvc2l0aW9uIG9mIHRoZSBhcnJheS5cclxuXHJcblx0XHRcdCogRnVuY3Rpb25zIHdpdGggU3ltYm9sLml0ZXJhYmxlIG1pZ2h0IGJlIGFuIGV4Y2VwdGlvbiBidXQgY2hhbmNlc1xyXG5cdFx0XHRcdG9mIHRoaXMgYmVpbmcgaW1wbGVtZW50ZWQgaXMgcmFyZSBjb25zaWRlcmluZyBubyBwcmFjdGljYWwgdXNlIGNhc2VzXHJcblx0XHRcdFx0YXMgb2YgdGhlIG1vbWVudC5cclxuXHRcdEBlbmQtbm90ZVxyXG5cdCovXHJcblx0aWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJvYmplY3RcIiApe1xyXG5cdFx0cmV0dXJuIFsgZW50aXR5IF07XHJcblx0fVxyXG5cclxuXHR0cnl7XHJcblx0XHRsZXQgYXJyYXkgPSBBcnJheS5mcm9tKCBlbnRpdHkgKTtcclxuXHJcblx0XHQvKjtcclxuXHRcdFx0QG5vdGU6XHJcblx0XHRcdFx0SWYgdGhlIGFycmF5IHJlc3VsdCBpcyBlbXB0eSwgdGhlbiBjaGVjayBpZiBpdCBpcyBhbiBhcmd1bWVudCBlbnRpdHksXHJcblx0XHRcdFx0XHRlbHNlIHJldHVybiB0aGUgZW50aXR5IGFzIHRoZSBmaXJzdCBwb3NpdGlvbiBpbiB0aGUgb2JqZWN0IGJlY2F1c2VcclxuXHRcdFx0XHRcdHRoZSBvYmplY3QgaXMgbm90IGFic29yYmVkIGJlY2F1c2UgdGhlIG9iamVjdCBpcyBub3QgYXJyYXktbGlrZSBvclxyXG5cdFx0XHRcdFx0aXRlcmFibGUuXHJcblx0XHRcdEBlbmQtbm90ZVxyXG5cdFx0Ki9cclxuXHRcdGlmKCBhcnJheS5sZW5ndGggPT09IDAgKXtcclxuXHRcdFx0aWYoIEFSR1VNRU5UU19QQVRURVJOLnRlc3QoIGAkeyBlbnRpdHkgfWAgKSApe1xyXG5cdFx0XHRcdHJldHVybiBhcnJheTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoIEFycmF5LmlzQXJyYXkoIGVudGl0eSApICl7XHJcblx0XHRcdFx0cmV0dXJuIGFycmF5O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gWyBlbnRpdHkgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByYXplO1xyXG4iXX0=
//# sourceMappingURL=raze.support.js.map
