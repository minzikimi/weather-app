/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  user-select: none;\r\n  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)); \r\n}\r\n\r\n* {\r\n  font-family: \"Space Grotesk\", sans-serif;\r\n  font-optical-sizing: auto;\r\n  font-style: normal;\r\n}\r\n\r\n#background-image {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  z-index: -1;\r\n}\r\n\r\n.header {\r\n  color: rgba(88, 82, 82, 0.8); \r\n  width: 100%; \r\n}\r\n\r\n#date,\r\n#clock {\r\n  margin: 0;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n#clock{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.upper-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content:space-between;\r\n  gap: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 2.4rem;\r\n  height: 1.5rem;\r\n  margin-left:0.6rem;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 1rem;\r\n  width: 1rem;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n  border-radius: 50%;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2195f3c5; \r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(13px);\r\n}\r\n\r\n.search-bar{\r\n  padding-bottom: 3rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n#locationInput {\r\n  padding:10px;\r\n  font-size:1rem;\r\n  font-weight:bold;\r\n  border:none;\r\n  border-radius:5px;\r\n  margin:10px\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n  padding :10px 20px;\r\n  font-weight:bold;\r\n  font-size:1rem;\r\n  border:none;\r\n  border-radius:5px;\r\n  cursor:pointer;\r\n  transition:.3s;\r\n}\r\n\r\nbutton[type=\"submit\"]:hover {\r\n  background-color:#2196F3; \r\n  color:white; \r\n}\r\n\r\n#error-message {\r\n  display: none; \r\n  position: fixed; \r\n  top: 20px;\r\n  left: 50%; \r\n  transform: translateX(-50%); \r\n  background-color: rgba(255, 0, 0, 0.8); \r\n  color: white; \r\n  padding: 10px;\r\n  border-radius: 5px; \r\n  z-index: 10; \r\n}\r\n\r\n.weather-app {\r\n  position: relative;\r\n  background-color: rgba(255, 255, 255, 0.699); \r\n  height: 44rem;\r\n  max-width: 80rem;\r\n  align-self: center;\r\n  justify-self: center;\r\n  box-shadow: 0rem 0rem 2rem 1rem rgba(0, 0, 0, 0.363);\r\n  border-radius: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2rem;\r\n  transition: transform .3s ease;\r\n}\r\n\r\n\r\n.weather-app:hover {\r\n   transform: scale(1.02); \r\n}\r\n\r\n.weather-info {\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   justify-items: center;\r\n}\r\n\r\n\r\n#location {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap:1rem\r\n}\r\n.city{\r\n  font-size: 3rem;\r\n}\r\n.country{\r\n  font-weight: 100;\r\n  font-size: 1rem;\r\n}\r\n#temperature {\r\n   display:flex; \r\n   align-items:center; \r\n   justify-content:center; \r\n}\r\n\r\n.temp-value {\r\n   font-size:4rem; \r\n   font-weight:bold; \r\n}\r\n\r\n.temp-icon {\r\n   display:flex; \r\n   align-items:flex-start; \r\n   margin-left:5px; \r\n}\r\n\r\n.temp-icon img {\r\n   width:2rem; \r\n   height:auto; \r\n}\r\n\r\n#description{\r\n  font-size:1.5rem;\r\n  margin-top:0;\r\n  margin-bottom:3rem;\r\n}\r\n\r\n#humidity, #feels-like{\r\n  margin:0.5rem;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  body {\r\n    flex-direction: column; \r\n  }\r\n\r\n  .weather-app {\r\n    height: auto; \r\n    padding: 1rem; \r\n    margin: 0 1rem; \r\n    box-shadow: none; \r\n    border-radius: 1rem;\r\n  }\r\n\r\n  .header {\r\n    text-align: center; \r\n    padding-bottom: 1rem; \r\n  }\r\n\r\n  .upper-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.5rem; \r\n  }\r\n\r\n  #location {\r\n    font-size: 2rem; \r\n    text-align: center; \r\n    margin-top: 1rem; \r\n  }\r\n\r\n  .city {\r\n    font-size: 2.5rem; \r\n  }\r\n\r\n  .country {\r\n    font-size: 0.9rem; \r\n  }\r\n\r\n  #temperature {\r\n    flex-direction: column; \r\n    align-items: center;\r\n  }\r\n\r\n  .temp-value {\r\n    font-size: 3rem; \r\n  }\r\n\r\n  #description, #humidity, #feels-like {\r\n    font-size: 1rem; \r\n    text-align: center; \r\n    margin-top: 0.5rem;\r\n  }\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app-3-backup/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app-3-backup/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app-3-backup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/apiFetch.js":
/*!************************************!*\
  !*** ./src/components/apiFetch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData),\n/* harmony export */   getUserLocationAndWeather: () => (/* binding */ getUserLocationAndWeather)\n/* harmony export */ });\n//apiFetch.js\r\n\r\n\r\n// fetch weather API for both city and lat/lon\r\nasync function fetchWeatherData(latOrCity, lon) {\r\n  const apiKey = \"2d9ff376d70021060b412f16a78db804\"; \r\n  let apiURL;\r\n\r\n  if (typeof latOrCity === 'number' && typeof lon === 'number') {\r\n    // Search by latitude and longitude\r\n    apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latOrCity}&lon=${lon}&appid=${apiKey}&units=metric`;\r\n  } else {\r\n    // Search by city name\r\n    apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${latOrCity}&appid=${apiKey}&units=metric`;\r\n  }\r\n\r\n  try {\r\n    const response = await fetch(apiURL);\r\n\r\n    if (!response.ok) {\r\n      throw new Error(`HTTP error! status: ${response.status}`); \r\n    }\r\n\r\n    const data = await response.json(); \r\n    return data;\r\n  } catch (error) {\r\n    console.error(\"Error fetching weather data:\", error); // More specific error message\r\n  }\r\n}\r\n\r\n// Producing code for fetching user location\r\nfunction fetchCurrentUserLocation() {\r\n  return new Promise((resolve, reject) => {\r\n    if (navigator.geolocation) {\r\n      navigator.geolocation.getCurrentPosition(\r\n        (position) => {\r\n          const lat = position.coords.latitude;\r\n          const lon = position.coords.longitude;\r\n          console.log(lat,lon);\r\n          resolve({ lat, lon });\r\n        },\r\n        (error) => {\r\n          reject(error);\r\n        },\r\n        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }\r\n      );\r\n    } else {\r\n      reject(new Error(\"Geolocation is not supported by this browser.\"));\r\n    }\r\n  });\r\n}\r\n\r\n// Consuming code, handling getting weather data with user location\r\nasync function getUserLocationAndWeather() {\r\n  try {\r\n    const { lat, lon } = await fetchCurrentUserLocation(); \r\n    console.log(`lat: ${lat}, lon: ${lon}`);\r\n    \r\n    const userCurrentWeather = await fetchWeatherData(lat, lon); \r\n    return userCurrentWeather;\r\n  \r\n  } catch (error) {\r\n    console.error(\"We failed to fetch your location:\", error);\r\n    throw error; // 오류를 상위로 전파\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app-3-backup/./src/components/apiFetch.js?");

/***/ }),

/***/ "./src/components/clock.js":
/*!*********************************!*\
  !*** ./src/components/clock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startClock: () => (/* binding */ startClock)\n/* harmony export */ });\nconst clock = document.querySelector(\"h2#clock\");\r\n\r\nfunction getClock() {\r\n  const date = new Date();\r\n  const hours = String(date.getHours()).padStart(2, \"0\");\r\n  const minutes = String(date.getMinutes()).padStart(2, \"0\");\r\n  const seconds = String(date.getSeconds()).padStart(2, \"0\");\r\n  \r\n  clock.textContent = `${hours}:${minutes}:${seconds}`;\r\n}\r\n\r\n// Initialize the clock and set an interval to update it every second\r\nfunction startClock() {\r\n  getClock();\r\n  setInterval(getClock, 1000);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app-3-backup/./src/components/clock.js?");

/***/ }),

/***/ "./src/components/date.js":
/*!********************************!*\
  !*** ./src/components/date.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startDate: () => (/* binding */ startDate)\n/* harmony export */ });\nconst dateDisplay = document.querySelector(\"h2#date\");\r\n\r\nfunction getDate() {\r\n  const date = new Date();\r\n  const options = { \r\n    weekday: 'long', \r\n    year: 'numeric', \r\n    month: 'long', \r\n    day: 'numeric' \r\n  };\r\n  \r\n  const formattedDate = date.toLocaleDateString('en-US', options);\r\n  dateDisplay.textContent = formattedDate;\r\n}\r\n\r\n\r\nfunction startDate() {\r\n  getDate();\r\n  setInterval(getDate, 86400000);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app-3-backup/./src/components/date.js?");

/***/ }),

/***/ "./src/components/weatherModule.js":
/*!*****************************************!*\
  !*** ./src/components/weatherModule.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initWeatherApp: () => (/* binding */ initWeatherApp)\n/* harmony export */ });\n/* harmony import */ var _apiFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFetch.js */ \"./src/components/apiFetch.js\");\n/* harmony import */ var _img_thunder_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/thunder.gif */ \"./src/img/thunder.gif\");\n/* harmony import */ var _img_drizzle_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/drizzle.gif */ \"./src/img/drizzle.gif\");\n/* harmony import */ var _img_rain_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/rain.gif */ \"./src/img/rain.gif\");\n/* harmony import */ var _img_snowy_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/snowy.gif */ \"./src/img/snowy.gif\");\n/* harmony import */ var _img_foggy_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/foggy.gif */ \"./src/img/foggy.gif\");\n/* harmony import */ var _img_sandy_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/sandy.gif */ \"./src/img/sandy.gif\");\n/* harmony import */ var _img_sunny_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/sunny.gif */ \"./src/img/sunny.gif\");\n/* harmony import */ var _img_cloudy_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/cloudy.gif */ \"./src/img/cloudy.gif\");\n/* harmony import */ var _img_hot_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/hot.gif */ \"./src/img/hot.gif\");\n/* harmony import */ var _img_temperature_celsius_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/temperature-celsius.svg */ \"./src/img/temperature-celsius.svg\");\n/* harmony import */ var _img_fahrenheit_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/fahrenheit.png */ \"./src/img/fahrenheit.png\");\n//weatherModule.js\r\n\r\n\r\n\r\n\r\nlet isCelsius = true;\r\nlet currentTemp = 0;\r\nlet currentFeelsLike = 0;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction initWeatherApp() {\r\n  window.addEventListener(\"load\", async () => {\r\n    try {\r\n      const weatherData = await (0,_apiFetch_js__WEBPACK_IMPORTED_MODULE_0__.getUserLocationAndWeather)();\r\n      displayWeatherInfo(weatherData);\r\n    } catch (error) {\r\n      console.error(\"Error getting weather data:\", error);\r\n      displayError(\"There was a problem retrieving weather information.\");\r\n    }\r\n  });\r\n\r\n  const weatherForm = document.querySelector(\".weather-form\");\r\n  weatherForm.addEventListener(\"submit\", onCitySearchSubmit);\r\n\r\n  const toggleTempButton = document.querySelector(\"#toggleTemp\");\r\n  toggleTempButton.addEventListener(\"change\", () => {\r\n    isCelsius = !isCelsius;\r\n    updateTempDisplay();\r\n  });\r\n}\r\n\r\n\r\n//handling City search \r\nasync function onCitySearchSubmit(e) {\r\n  e.preventDefault();\r\n  const userInput = document.querySelector(\"#locationInput\");\r\n  const city = userInput.value.toLowerCase();\r\n  \r\n  if (city) {\r\n    try {\r\n      const weatherData = await (0,_apiFetch_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(city); \r\n      displayWeatherInfo(weatherData);\r\n\r\n      userInput.value = \"\"; \r\n    } catch (error) {\r\n      console.error(error);\r\n      displayError(error);\r\n    }\r\n  } else {\r\n    displayError(\"Enter a city name.\");\r\n    userInput.value = \"\"; \r\n  }\r\n}\r\n\r\n\r\nfunction celsiusToFahrenheit(celsius) {\r\n  return Math.round((celsius * 9/5 + 32) * 10) / 10;\r\n}\r\n\r\n\r\nfunction updateTempDisplay() {\r\n  const tempValueElement = document.querySelector('#temperature .temp-value');\r\n  const tempUnitElement = document.querySelector(\"#temp-unit\");\r\n  const feelsLikeElement = document.querySelector(\"#feels-like\");\r\n  const tempIconElement = document.querySelector(\".temp-unit-icon\");\r\n\r\n  if (isCelsius) {\r\n    tempValueElement.textContent = Math.round(currentTemp);\r\n    tempUnitElement.textContent = \"°C\";\r\n    feelsLikeElement.textContent = `Feels like: ${Math.round(currentFeelsLike)}°C`;\r\n    tempIconElement.src = _img_temperature_celsius_svg__WEBPACK_IMPORTED_MODULE_10__; \r\n    tempIconElement.alt = \"celsius\";\r\n   \r\n  } else {\r\n    const tempF = celsiusToFahrenheit(currentTemp);\r\n    const feelsLikeF = celsiusToFahrenheit(currentFeelsLike);\r\n    tempValueElement.textContent = Math.round(tempF);\r\n    tempUnitElement.textContent = \"°F\";\r\n    feelsLikeElement.textContent = `Feels like: ${Math.round(feelsLikeF)}°F`;\r\n\r\n    tempIconElement.src = _img_fahrenheit_png__WEBPACK_IMPORTED_MODULE_11__; \r\n    tempIconElement.alt = \"fahrenheit\";\r\n  }\r\n}\r\n\r\nfunction displayWeatherInfo(data) {\r\n  const { \r\n    name: city, \r\n    sys: { country }, \r\n    main: { temp, humidity, feels_like },\r\n    weather: [{ description, icon, id }] \r\n  } = data;\r\n\r\n  currentTemp = temp;\r\n  currentFeelsLike = feels_like;\r\n  \r\n  const locationElement = document.querySelector(\"#location .city\");\r\n  const countryElement = document.querySelector(\"#location .country\");\r\n  const descriptionElement = document.querySelector(\"#description\");\r\n  const humidityElement = document.querySelector(\"#humidity\");\r\n  const weatherIconElement = document.querySelector(\"img[alt='icon']\");\r\n\r\n  locationElement.textContent = city; \r\n  countryElement.textContent = country;\r\n\r\n  updateTempDisplay();\r\n  \r\n  descriptionElement.textContent = description; \r\n  humidityElement.textContent = `Humidity: ${humidity}%`;\r\n  weatherIconElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; \r\n\r\n  const bgImage = document.querySelector(\"#background-image\");\r\n  const bgImageUrl = getWeatherBackground(id);\r\n  bgImage.src = bgImageUrl;\r\n\r\n// Add error handling for background image\r\n  bgImage.onerror = () => {\r\n  console.error(\"Failed to load background image:\", bgImageUrl);\r\n  bgImage.src = _img_hot_gif__WEBPACK_IMPORTED_MODULE_9__; // Fallback to a default image\r\n};\r\n}\r\n\r\n\r\nfunction getWeatherBackground(weatherID) {\r\n  switch(true) {\r\n    case (weatherID >= 200 && weatherID < 300):\r\n      return _img_thunder_gif__WEBPACK_IMPORTED_MODULE_1__;\r\n    case (weatherID >= 300 && weatherID < 400):\r\n      return _img_drizzle_gif__WEBPACK_IMPORTED_MODULE_2__;\r\n    case (weatherID >= 500 && weatherID < 600):\r\n      return _img_rain_gif__WEBPACK_IMPORTED_MODULE_3__;\r\n    case (weatherID >= 600 && weatherID < 700):\r\n      return _img_snowy_gif__WEBPACK_IMPORTED_MODULE_4__;\r\n    case (weatherID >= 700 && weatherID <= 741):\r\n      return _img_foggy_gif__WEBPACK_IMPORTED_MODULE_5__;\r\n    case (weatherID >= 751 && weatherID <= 781):\r\n      return _img_sandy_gif__WEBPACK_IMPORTED_MODULE_6__;\r\n    case (weatherID === 800):\r\n      return _img_sunny_gif__WEBPACK_IMPORTED_MODULE_7__;\r\n    case (weatherID > 800 && weatherID <= 804):\r\n      return _img_cloudy_gif__WEBPACK_IMPORTED_MODULE_8__;\r\n    default:\r\n      return _img_hot_gif__WEBPACK_IMPORTED_MODULE_9__; // Ensure this path is correct\r\n  }\r\n}\r\n\r\n\r\nfunction displayError(message) {\r\n  const errorDisplay = document.querySelector(\"#error-message p\");\r\n  const errorContainer = document.querySelector(\"#error-message\");\r\n\r\n  errorDisplay.textContent = message;  \r\n  errorContainer.style.display = \"block\"; // Show the error message\r\n\r\n  setTimeout(() => {\r\n      errorContainer.style.display = \"none\"; // Hide after timeout\r\n  }, 3000); // Adjust time as needed (e.g., 3000ms = 3 seconds)\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app-3-backup/./src/components/weatherModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_clock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/clock.js */ \"./src/components/clock.js\");\n/* harmony import */ var _components_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/date.js */ \"./src/components/date.js\");\n/* harmony import */ var _components_weatherModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weatherModule.js */ \"./src/components/weatherModule.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n  (0,_components_weatherModule_js__WEBPACK_IMPORTED_MODULE_2__.initWeatherApp)();\r\n  (0,_components_clock_js__WEBPACK_IMPORTED_MODULE_0__.startClock)();\r\n  (0,_components_date_js__WEBPACK_IMPORTED_MODULE_1__.startDate)();\r\n});\r\n\n\n//# sourceURL=webpack://weather-app-3-backup/./src/index.js?");

/***/ }),

/***/ "./src/img/cloudy.gif":
/*!****************************!*\
  !*** ./src/img/cloudy.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed602223f457356b883d.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/cloudy.gif?");

/***/ }),

/***/ "./src/img/drizzle.gif":
/*!*****************************!*\
  !*** ./src/img/drizzle.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdd8ac64f3740b0b1576.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/drizzle.gif?");

/***/ }),

/***/ "./src/img/fahrenheit.png":
/*!********************************!*\
  !*** ./src/img/fahrenheit.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cab6bbec3428344f0cb.png\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/fahrenheit.png?");

/***/ }),

/***/ "./src/img/foggy.gif":
/*!***************************!*\
  !*** ./src/img/foggy.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f81443b28842834be783.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/foggy.gif?");

/***/ }),

/***/ "./src/img/hot.gif":
/*!*************************!*\
  !*** ./src/img/hot.gif ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3a9f3b2da000d82d431.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/hot.gif?");

/***/ }),

/***/ "./src/img/rain.gif":
/*!**************************!*\
  !*** ./src/img/rain.gif ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2fe47d211f7432517e92.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/rain.gif?");

/***/ }),

/***/ "./src/img/sandy.gif":
/*!***************************!*\
  !*** ./src/img/sandy.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae7a828808a1dbe4e9ac.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/sandy.gif?");

/***/ }),

/***/ "./src/img/snowy.gif":
/*!***************************!*\
  !*** ./src/img/snowy.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7affdce336adc5187d9.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/snowy.gif?");

/***/ }),

/***/ "./src/img/sunny.gif":
/*!***************************!*\
  !*** ./src/img/sunny.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"480ba69e60bff2b3049b.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/sunny.gif?");

/***/ }),

/***/ "./src/img/temperature-celsius.svg":
/*!*****************************************!*\
  !*** ./src/img/temperature-celsius.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58f749ccff5b82e01e1f.svg\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/temperature-celsius.svg?");

/***/ }),

/***/ "./src/img/thunder.gif":
/*!*****************************!*\
  !*** ./src/img/thunder.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccfff0ce6d57189e83ff.gif\";\n\n//# sourceURL=webpack://weather-app-3-backup/./src/img/thunder.gif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;