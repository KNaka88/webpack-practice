/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img'); // if file is not exported, just specify the path
// if it is not js file, specify extentions .css

image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe844131b30838f4e6bd3c70c0391b4e.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);