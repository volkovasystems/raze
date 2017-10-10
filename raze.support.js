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
              			"path": "raze/raze.module.js",
              			"file": "raze.module.js",
              			"module": "raze",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/raze.git",
              			"test": "test.module.js",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhemUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJBUkdVTUVOVFNfUEFUVEVSTiIsInJhemUiLCJlbnRpdHkiLCJsZW5ndGgiLCJpc05hTiIsImFycmF5IiwidGVzdCIsIkFycmF5IiwiaXNBcnJheSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEsSUFBTUEsb0JBQW9CLHdCQUExQjs7QUFFQSxJQUFNQyxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QjtBQUNuQzs7Ozs7Ozs7QUFRQTs7Ozs7QUFLQTtBQUNHLFFBQU9BLE1BQVAsSUFBaUIsV0FBbkI7QUFDRSxRQUFPQSxNQUFQLElBQWlCLFFBQWpCLElBQTZCQSxPQUFPQyxNQUFQLElBQWlCLENBRGhEO0FBRUUsU0FBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUZ6QztBQUdFLFFBQU9BLE1BQVAsSUFBaUIsUUFBakIsSUFBNkJFLE1BQU9GLE1BQVAsQ0FKaEM7QUFLQztBQUNBLFNBQU8sRUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztBQVdBLEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QixTQUFPLENBQUVBLE1BQUYsQ0FBUDtBQUNBOztBQUVELEtBQUc7QUFDRixNQUFJRyxRQUFRLG9CQUFZSCxNQUFaLENBQVo7O0FBRUE7Ozs7Ozs7O0FBUUEsTUFBSUcsTUFBTUYsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN2QixPQUFJSCxrQkFBa0JNLElBQWxCLE1BQTRCSixNQUE1QixDQUFKLEVBQTZDO0FBQzVDLFdBQU9HLEtBQVA7QUFDQTs7QUFFRCxPQUFJRSxNQUFNQyxPQUFOLENBQWVOLE1BQWYsQ0FBSixFQUE2QjtBQUM1QixXQUFPRyxLQUFQO0FBQ0E7O0FBRUQsVUFBTyxDQUFFSCxNQUFGLENBQVA7QUFDQTs7QUFFRCxTQUFPRyxLQUFQOztBQUVBLEVBekJELENBeUJDLE9BQU9JLEtBQVAsRUFBYztBQUNkLFNBQU8sRUFBUDtBQUNBO0FBQ0QsQ0FsRUQ7O0FBb0VBQyxPQUFPQyxPQUFQLEdBQWlCVixJQUFqQiIsImZpbGUiOiJyYXplLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInJhemVcIixcblx0XHRcdFwicGF0aFwiOiBcInJhemUvcmF6ZS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInJhemUubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInJhemVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JhemUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDb252ZXJ0IGVudGl0eSB0byBBcnJheSBpbnN0YW5jZS5cblxuXHRcdFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIGEgbmV3IGFycmF5LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG4qL1xuXG5jb25zdCBBUkdVTUVOVFNfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEFyZ3VtZW50c1xcXSQvO1xuXG5jb25zdCByYXplID0gZnVuY3Rpb24gcmF6ZSggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdElmIGVudGl0eSBpcyBmYWxzeSwgcmV0dXJuIGVtcHR5IGFycmF5LlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpZihcblx0XHQoIHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiApIHx8XG5cdFx0KCB0eXBlb2YgZW50aXR5ID09IFwic3RyaW5nXCIgJiYgZW50aXR5Lmxlbmd0aCA9PSAwICkgfHxcblx0XHQoIHR5cGVvZiBlbnRpdHkgPT0gXCJvYmplY3RcIiAmJiBlbnRpdHkgPT0gbnVsbCApIHx8XG5cdFx0KCB0eXBlb2YgZW50aXR5ID09IFwibnVtYmVyXCIgJiYgaXNOYU4oIGVudGl0eSApIClcblx0KXtcblx0XHRyZXR1cm4gWyBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRBbGwgYXJyYXlzLCBhcnJheS1saWtlLCBpdGVyYWJsZSwgYXJlIG9iamVjdCAod2l0aCByYXJlIGV4Y2VwdGlvbiopXG5cblx0XHRcdE5vbi1vYmplY3RzIHRha2UgdXAgdGhlIGZpcnN0IHBvc2l0aW9uIG9mIHRoZSBhcnJheS5cblxuXHRcdFx0KiBGdW5jdGlvbnMgd2l0aCBTeW1ib2wuaXRlcmFibGUgbWlnaHQgYmUgYW4gZXhjZXB0aW9uIGJ1dCBjaGFuY2VzXG5cdFx0XHRcdG9mIHRoaXMgYmVpbmcgaW1wbGVtZW50ZWQgaXMgcmFyZSBjb25zaWRlcmluZyBubyBwcmFjdGljYWwgdXNlIGNhc2VzXG5cdFx0XHRcdGFzIG9mIHRoZSBtb21lbnQuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKCB0eXBlb2YgZW50aXR5ICE9IFwib2JqZWN0XCIgKXtcblx0XHRyZXR1cm4gWyBlbnRpdHkgXTtcblx0fVxuXG5cdHRyeXtcblx0XHRsZXQgYXJyYXkgPSBBcnJheS5mcm9tKCBlbnRpdHkgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHRoZSBhcnJheSByZXN1bHQgaXMgZW1wdHksIHRoZW4gY2hlY2sgaWYgaXQgaXMgYW4gYXJndW1lbnQgZW50aXR5LFxuXHRcdFx0XHRcdGVsc2UgcmV0dXJuIHRoZSBlbnRpdHkgYXMgdGhlIGZpcnN0IHBvc2l0aW9uIGluIHRoZSBvYmplY3QgYmVjYXVzZVxuXHRcdFx0XHRcdHRoZSBvYmplY3QgaXMgbm90IGFic29yYmVkIGJlY2F1c2UgdGhlIG9iamVjdCBpcyBub3QgYXJyYXktbGlrZSBvclxuXHRcdFx0XHRcdGl0ZXJhYmxlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggYXJyYXkubGVuZ3RoID09PSAwICl7XG5cdFx0XHRpZiggQVJHVU1FTlRTX1BBVFRFUk4udGVzdCggYCR7IGVudGl0eSB9YCApICl7XG5cdFx0XHRcdHJldHVybiBhcnJheTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIEFycmF5LmlzQXJyYXkoIGVudGl0eSApICl7XG5cdFx0XHRcdHJldHVybiBhcnJheTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsgZW50aXR5IF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFycmF5O1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHRyZXR1cm4gWyBdO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJhemU7XG4iXX0=
//# sourceMappingURL=raze.support.js.map
