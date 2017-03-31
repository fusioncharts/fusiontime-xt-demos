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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  chart: 'fusiontime'\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL0Vib2xhLmpzPzZhNmUiXSwibmFtZXMiOlsiY2hhcnQiXSwibWFwcGluZ3MiOiJBQUFBLHlEQUFlO0FBQ2JBLFNBQU87QUFETSxDQUFmIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNoYXJ0OiAnZnVzaW9udGltZScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGF0YS9FYm9sYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_Ebola__ = __webpack_require__(0);\n\n\nconst data = {\n  ebola: {\n    metadata: {\n      name: 'Ebola',\n      desc: 'Ebola Data'\n    },\n    data: __WEBPACK_IMPORTED_MODULE_0__data_Ebola__[\"a\" /* default */]\n  }\n};\n\nwindow.data = data;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbImRhdGEiLCJlYm9sYSIsIm1ldGFkYXRhIiwibmFtZSIsImRlc2MiLCJFYm9sYSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQSxPQUFPO0FBQ1hDLFNBQU87QUFDTEMsY0FBVTtBQUNSQyxZQUFNLE9BREU7QUFFUkMsWUFBTTtBQUZFLEtBREw7QUFLTEosVUFBTSw0REFBQUs7QUFMRDtBQURJLENBQWI7O0FBVUFDLE9BQU9OLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVib2xhIGZyb20gJy4vZGF0YS9FYm9sYSc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGVib2xhOiB7XG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIG5hbWU6ICdFYm9sYScsXG4gICAgICBkZXNjOiAnRWJvbGEgRGF0YSdcbiAgICB9LFxuICAgIGRhdGE6IEVib2xhXG4gIH1cbn07XG5cbndpbmRvdy5kYXRhID0gZGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);