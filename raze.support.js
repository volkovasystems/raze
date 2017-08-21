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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhemUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJBUkdVTUVOVFNfUEFUVEVSTiIsInJhemUiLCJlbnRpdHkiLCJsZW5ndGgiLCJpc05hTiIsImFycmF5IiwidGVzdCIsIkFycmF5IiwiaXNBcnJheSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEsSUFBTUEsb0JBQW9CLHdCQUExQjs7QUFFQSxJQUFNQyxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QjtBQUNuQzs7Ozs7Ozs7QUFRQTs7Ozs7QUFLQTtBQUNHLFFBQU9BLE1BQVAsSUFBaUIsV0FBbkI7QUFDRSxRQUFPQSxNQUFQLElBQWlCLFFBQWpCLElBQTZCQSxPQUFPQyxNQUFQLElBQWlCLENBRGhEO0FBRUUsU0FBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUZ6QztBQUdFLFFBQU9BLE1BQVAsSUFBaUIsUUFBakIsSUFBNkJFLE1BQU9GLE1BQVAsQ0FKaEM7QUFLQztBQUNBLFNBQU8sRUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztBQVdBLEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QixTQUFPLENBQUVBLE1BQUYsQ0FBUDtBQUNBOztBQUVELEtBQUc7QUFDRixNQUFJRyxRQUFRLG9CQUFZSCxNQUFaLENBQVo7O0FBRUE7Ozs7Ozs7O0FBUUEsTUFBSUcsTUFBTUYsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN2QixPQUFJSCxrQkFBa0JNLElBQWxCLE1BQTRCSixNQUE1QixDQUFKLEVBQTZDO0FBQzVDLFdBQU9HLEtBQVA7QUFDQTs7QUFFRCxPQUFJRSxNQUFNQyxPQUFOLENBQWVOLE1BQWYsQ0FBSixFQUE2QjtBQUM1QixXQUFPRyxLQUFQO0FBQ0E7O0FBRUQsVUFBTyxDQUFFSCxNQUFGLENBQVA7QUFDQTs7QUFFRCxTQUFPRyxLQUFQOztBQUVBLEVBekJELENBeUJDLE9BQU9JLEtBQVAsRUFBYztBQUNkLFNBQU8sRUFBUDtBQUNBO0FBQ0QsQ0FsRUQ7O0FBb0VBQyxPQUFPQyxPQUFQLEdBQWlCVixJQUFqQiIsImZpbGUiOiJyYXplLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInJhemVcIixcblx0XHRcdFwicGF0aFwiOiBcInJhemUvcmF6ZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicmF6ZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJyYXplXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9yYXplLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicmF6ZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENvbnZlcnQgZW50aXR5IHRvIEFycmF5IGluc3RhbmNlLlxuXG5cdFx0VGhpcyB3aWxsIGFsd2F5cyByZXR1cm4gYSBuZXcgYXJyYXkuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cbiovXG5cbmNvbnN0IEFSR1VNRU5UU19QQVRURVJOID0gL15cXFtvYmplY3QgQXJndW1lbnRzXFxdJC87XG5cbmNvbnN0IHJhemUgPSBmdW5jdGlvbiByYXplKCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0SWYgZW50aXR5IGlzIGZhbHN5LCByZXR1cm4gZW1wdHkgYXJyYXkuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKFxuXHRcdCggdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICkgfHxcblx0XHQoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiAmJiBlbnRpdHkubGVuZ3RoID09IDAgKSB8fFxuXHRcdCggdHlwZW9mIGVudGl0eSA9PSBcIm9iamVjdFwiICYmIGVudGl0eSA9PSBudWxsICkgfHxcblx0XHQoIHR5cGVvZiBlbnRpdHkgPT0gXCJudW1iZXJcIiAmJiBpc05hTiggZW50aXR5ICkgKVxuXHQpe1xuXHRcdHJldHVybiBbIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdEFsbCBhcnJheXMsIGFycmF5LWxpa2UsIGl0ZXJhYmxlLCBhcmUgb2JqZWN0ICh3aXRoIHJhcmUgZXhjZXB0aW9uKilcblxuXHRcdFx0Tm9uLW9iamVjdHMgdGFrZSB1cCB0aGUgZmlyc3QgcG9zaXRpb24gb2YgdGhlIGFycmF5LlxuXG5cdFx0XHQqIEZ1bmN0aW9ucyB3aXRoIFN5bWJvbC5pdGVyYWJsZSBtaWdodCBiZSBhbiBleGNlcHRpb24gYnV0IGNoYW5jZXNcblx0XHRcdFx0b2YgdGhpcyBiZWluZyBpbXBsZW1lbnRlZCBpcyByYXJlIGNvbnNpZGVyaW5nIG5vIHByYWN0aWNhbCB1c2UgY2FzZXNcblx0XHRcdFx0YXMgb2YgdGhlIG1vbWVudC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJvYmplY3RcIiApe1xuXHRcdHJldHVybiBbIGVudGl0eSBdO1xuXHR9XG5cblx0dHJ5e1xuXHRcdGxldCBhcnJheSA9IEFycmF5LmZyb20oIGVudGl0eSApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0SWYgdGhlIGFycmF5IHJlc3VsdCBpcyBlbXB0eSwgdGhlbiBjaGVjayBpZiBpdCBpcyBhbiBhcmd1bWVudCBlbnRpdHksXG5cdFx0XHRcdFx0ZWxzZSByZXR1cm4gdGhlIGVudGl0eSBhcyB0aGUgZmlyc3QgcG9zaXRpb24gaW4gdGhlIG9iamVjdCBiZWNhdXNlXG5cdFx0XHRcdFx0dGhlIG9iamVjdCBpcyBub3QgYWJzb3JiZWQgYmVjYXVzZSB0aGUgb2JqZWN0IGlzIG5vdCBhcnJheS1saWtlIG9yXG5cdFx0XHRcdFx0aXRlcmFibGUuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCBhcnJheS5sZW5ndGggPT09IDAgKXtcblx0XHRcdGlmKCBBUkdVTUVOVFNfUEFUVEVSTi50ZXN0KCBgJHsgZW50aXR5IH1gICkgKXtcblx0XHRcdFx0cmV0dXJuIGFycmF5O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggQXJyYXkuaXNBcnJheSggZW50aXR5ICkgKXtcblx0XHRcdFx0cmV0dXJuIGFycmF5O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gWyBlbnRpdHkgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyYXk7XG5cblx0fWNhdGNoKCBlcnJvciApe1xuXHRcdHJldHVybiBbIF07XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmF6ZTtcbiJdfQ==
//# sourceMappingURL=raze.support.js.map
