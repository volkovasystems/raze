!function webpackUniversalModuleDefinition(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.raze=r():e.raze=r()}(this,function(){return function(e){function __webpack_require__(t){if(r[t])return r[t].exports;var _=r[t]={i:t,l:!1,exports:{}};return e[t].call(_.exports,_,_.exports,__webpack_require__),_.l=!0,_.exports}var r={};return __webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},__webpack_require__.n=function(e){var r=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,r,t){"use strict";const _=/^\[object Arguments\]$/;e.exports=function raze(e){if(void 0===e||"string"==typeof e&&0==e.length||"object"==typeof e&&null==e||"number"==typeof e&&isNaN(e))return[];if("object"!=typeof e)return[e];try{let r=Array.from(e);return 0===r.length?_.test(`${e}`)?r:Array.isArray(e)?r:[e]:r}catch(e){return[]}}}])});