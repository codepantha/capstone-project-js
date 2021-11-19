/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/hp-bg.png */ "./src/assets/images/hp-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n    #E7E3AF\n    #CCAB6F\n    #7D5535\n    #662F18\n    #761919\n  */\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  background: #959595 url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nnav {\n  background-color: transparent;\n  height: 80px;\n  margin: 0;\n  border: 1px solid aliceblue;\n  box-shadow: 10px 10px 30px aliceblue;\n  opacity: 0.9;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row-reverse;\n  margin: 0;\n  padding-top: 10px;\n}\n\nli {\n  margin-right: 20px;\n  padding-top: 16px;\n}\n\n.link {\n  text-decoration: none;\n  color: #662f18;\n  font-size: 25px;\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;\n}\n\n.img {\n  float: left;\n  width: 160px;\n  height: auto;\n  padding-bottom: 10px;\n}\n\n.popup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  z-index: 1;\n\n  /* display: none; */\n}\n\n.btn {\n  background-color: #ccab6f;\n  color: #662f18;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.btn:hover {\n  background-color: #7d5535;\n  color: #e7e3af;\n  transition: ease-in-out 0.3s;\n}\n\n.link:hover {\n  background-color: #761919;\n  color: #e7e3af;\n  padding: 3px 7px;\n  border-radius: 3px;\n  transition: ease-in-out 0.8s;\n}\n\nmain {\n  width: 100%;\n}\n\n.side-img {\n  position: absolute;\n  top: 23%;\n  left: 2%;\n  height: 130px;\n}\n\n.cards {\n  width: 90%;\n  margin: 100px auto;\n  text-align: center;\n  display: grid;\n  grid-row-gap: 55px;\n  grid-template-columns: auto auto auto;\n}\n\n.card {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.character-name {\n  flex: 1;\n  align-self: center;\n  text-align: start;\n  font-weight: 700;\n  color: #fff;\n  font-size: 18px;\n}\n\n.icon {\n  font-size: 18px;\n}\n\n.icon.comment {\n  color: #fff;\n}\n\n.character-img {\n  width: 100%;\n  margin-bottom: 10px;\n  border: 1px solid #1f1d36;\n  border-radius: 25px;\n  box-shadow: 3px 6px 6px 3px #292748;\n  cursor: pointer;\n}\n\n.character-img:hover {\n  box-shadow: 3px 6px 3px 3px #292748;\n}\n\n.character-img:active {\n  box-shadow: 1px 3px 6px 3px #292748;\n}\n\n.likes-container {\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n}\n\n.comment-btn {\n  margin: 10px 0;\n  width: 100%;\n  height: 45px;\n  padding: 10px;\n  background-color: #1f1d36;\n  border-radius: 5px;\n  border: 1px solid #1f1d36;\n  cursor: pointer;\n}\n\n.flex-row {\n  display: flex;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.items-count {\n  text-align: end;\n  font-size: 24px;\n  margin-right: 20px;\n  font-weight: 600;\n  color: #fff;\n}\n\n.footer {\n  background: #662f18;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  padding: 5px;\n  text-align: center;\n  color: #fff;\n}\n\n.footer-text {\n  font-size: 18px;\n}\n\n.footer-link {\n  color: #e6e6e6;\n  text-decoration: none;\n}\n\n.footer-link:hover,\n.footer-link:visited {\n  color: rgb(194, 189, 189);\n}\n\n.modal {\n  text-align: center;\n  width: 100%;\n  min-height: 100vh;\n  position: absolute;\n  top: 10%;\n  background: red;\n}\n\n.modal-img {\n  width: 100%;\n}\n\n.modal-container {\n  text-align: center;\n  width: 90%;\n  min-height: 100vh;\n  margin: 0 auto;\n  background: white;\n  border: 5px solid #292748;\n}\n\n.comment-input {\n  width: 50%;\n  margin: 10px;\n  padding: 10px;\n}\n\n.submit-btn {\n  margin-bottom: 30px;\n  width: 10%;\n  padding: 10px;\n}\n\n@media screen and (max-width: 900px) {\n  .cards {\n    grid-template-columns: auto auto;\n  }\n}\n\n@media screen and (max-width: 590px) {\n  .cards {\n    grid-template-columns: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n    #E7E3AF\n    #CCAB6F\n    #7D5535\n    #662F18\n    #761919\n  */\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  background: #959595 url(\"../src/assets/images/hp-bg.png\");\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nnav {\n  background-color: transparent;\n  height: 80px;\n  margin: 0;\n  border: 1px solid aliceblue;\n  box-shadow: 10px 10px 30px aliceblue;\n  opacity: 0.9;\n}\n\nul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row-reverse;\n  margin: 0;\n  padding-top: 10px;\n}\n\nli {\n  margin-right: 20px;\n  padding-top: 16px;\n}\n\n.link {\n  text-decoration: none;\n  color: #662f18;\n  font-size: 25px;\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;\n}\n\n.img {\n  float: left;\n  width: 160px;\n  height: auto;\n  padding-bottom: 10px;\n}\n\n.popup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  z-index: 1;\n\n  /* display: none; */\n}\n\n.btn {\n  background-color: #ccab6f;\n  color: #662f18;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: 'Roboto', sans-serif;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.btn:hover {\n  background-color: #7d5535;\n  color: #e7e3af;\n  transition: ease-in-out 0.3s;\n}\n\n.link:hover {\n  background-color: #761919;\n  color: #e7e3af;\n  padding: 3px 7px;\n  border-radius: 3px;\n  transition: ease-in-out 0.8s;\n}\n\nmain {\n  width: 100%;\n}\n\n.side-img {\n  position: absolute;\n  top: 23%;\n  left: 2%;\n  height: 130px;\n}\n\n.cards {\n  width: 90%;\n  margin: 100px auto;\n  text-align: center;\n  display: grid;\n  grid-row-gap: 55px;\n  grid-template-columns: auto auto auto;\n}\n\n.card {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.character-name {\n  flex: 1;\n  align-self: center;\n  text-align: start;\n  font-weight: 700;\n  color: #fff;\n  font-size: 18px;\n}\n\n.icon {\n  font-size: 18px;\n}\n\n.icon.comment {\n  color: #fff;\n}\n\n.character-img {\n  width: 100%;\n  margin-bottom: 10px;\n  border: 1px solid #1f1d36;\n  border-radius: 25px;\n  box-shadow: 3px 6px 6px 3px #292748;\n  cursor: pointer;\n}\n\n.character-img:hover {\n  box-shadow: 3px 6px 3px 3px #292748;\n}\n\n.character-img:active {\n  box-shadow: 1px 3px 6px 3px #292748;\n}\n\n.likes-container {\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n}\n\n.comment-btn {\n  margin: 10px 0;\n  width: 100%;\n  height: 45px;\n  padding: 10px;\n  background-color: #1f1d36;\n  border-radius: 5px;\n  border: 1px solid #1f1d36;\n  cursor: pointer;\n}\n\n.flex-row {\n  display: flex;\n}\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.items-count {\n  text-align: end;\n  font-size: 24px;\n  margin-right: 20px;\n  font-weight: 600;\n  color: #fff;\n}\n\n.footer {\n  background: #662f18;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  padding: 5px;\n  text-align: center;\n  color: #fff;\n}\n\n.footer-text {\n  font-size: 18px;\n}\n\n.footer-link {\n  color: #e6e6e6;\n  text-decoration: none;\n}\n\n.footer-link:hover,\n.footer-link:visited {\n  color: rgb(194, 189, 189);\n}\n\n.modal {\n  text-align: center;\n  width: 100%;\n  min-height: 100vh;\n  position: absolute;\n  top: 10%;\n  background: red;\n}\n\n.modal-img {\n  width: 100%;\n}\n\n.modal-container {\n  text-align: center;\n  width: 90%;\n  min-height: 100vh;\n  margin: 0 auto;\n  background: white;\n  border: 5px solid #292748;\n}\n\n.comment-input {\n  width: 50%;\n  margin: 10px;\n  padding: 10px;\n}\n\n.submit-btn {\n  margin-bottom: 30px;\n  width: 10%;\n  padding: 10px;\n}\n\n@media screen and (max-width: 900px) {\n  .cards {\n    grid-template-columns: auto auto;\n  }\n}\n\n@media screen and (max-width: 590px) {\n  .cards {\n    grid-template-columns: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCharactersAndLikes": () => (/* binding */ getCharactersAndLikes),
/* harmony export */   "like": () => (/* binding */ like),
/* harmony export */   "getPopUpCharacter": () => (/* binding */ getPopUpCharacter),
/* harmony export */   "getPopUpCharacterComments": () => (/* binding */ getPopUpCharacterComments),
/* harmony export */   "addNewComment": () => (/* binding */ addNewComment)
/* harmony export */ });
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card */ "./src/components/card.js");
/* harmony import */ var _appId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appId */ "./src/appId.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ "./src/components/modal.js");
/* eslint-disable import/no-cycle */





const getCharactersAndLikes = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_appId__WEBPACK_IMPORTED_MODULE_1__["default"]}/likes`;
  const res = await fetch(url);
  const likes = await res.json();

  const result = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = await result.json();
  const characters = await data.slice(0, 10);

  (0,_components_card__WEBPACK_IMPORTED_MODULE_0__["default"])(characters, likes);
};

const like = async (characterId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_appId__WEBPACK_IMPORTED_MODULE_1__["default"]}/likes`;
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: characterId,
    }),
  });
};

const getPopUpCharacter = async (characterId) => {
  const result = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = await result.json();
  const characters = await data.slice(0, 10);
  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(characters[characterId], characterId);
};

const getPopUpCharacterComments = async (characterId) => {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_appId__WEBPACK_IMPORTED_MODULE_1__["default"]}/comments?item_id=${characterId}`);
  const data = await result.json();
  return data;
};

const addNewComment = async (userDetails) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_appId__WEBPACK_IMPORTED_MODULE_1__["default"]}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: userDetails.characterId,
      username: userDetails.username,
      comment: userDetails.comment,
    }),
  });
  await (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.displayComments)(userDetails.characterId);
};


/***/ }),

/***/ "./src/appId.js":
/*!**********************!*\
  !*** ./src/appId.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const appId = '1gPBmu94RP09f4VoDws0';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appId);

/***/ }),

/***/ "./src/commentsCounter.js":
/*!********************************!*\
  !*** ./src/commentsCounter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCounter = (comments) => comments.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _assets_images_hp_side_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/hp-side-img.png */ "./src/assets/images/hp-side-img.png");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _itemCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../itemCounter */ "./src/itemCounter.js");
/* eslint-disable import/no-cycle */






const card = (characters, likes = null) => {
  const cardsContainer = document.querySelector('.cards');
  const topImage = document.createElement('img');
  topImage.classList = 'side-img';
  topImage.src = _assets_images_hp_side_img_png__WEBPACK_IMPORTED_MODULE_1__;

  cardsContainer.innerHTML = '';

  (0,_itemCounter__WEBPACK_IMPORTED_MODULE_3__["default"])(characters);

  characters.forEach((character, index) => {
    const characterLikes = likes.filter((like) => Number(like.item_id) === index)[0];
    let likesCount = 0;
    if (characterLikes) {
      likesCount = characterLikes.likes;
    }
    cardsContainer.innerHTML += `
      <div class="card">
        <img class="character-img" alt=${character.name} src=${character.image} height=200 data-id=${index}>
        <div class="name-and-like-container flex-row">
          <span class="character-name">${character.name}</span>
          <div class="likes-container">
            <ion-icon class="icon like" name="heart-outline" data-id=${index}></ion-icon><br>
            <span class="likes">${likesCount} likes</span>
          </div>
        </div>
        <button type="button" id=comment-btn${index} class="comment-btn" data-id=${index}> 
          <ion-icon class="icon comment" name="chatbubble"></ion-icon>
        </button>
      </div>`;
  });

  document.body.appendChild(topImage);

  const likeButtons = document.querySelectorAll('.like');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      const likeSpan = likeButton.nextElementSibling.nextElementSibling;
      let currentLikesCount = Number(likeSpan.innerHTML.split(' ')[0]);
      currentLikesCount += 1;
      (0,_apiCalls__WEBPACK_IMPORTED_MODULE_2__.like)(likeButton.dataset.id);
      likeSpan.innerText = '';
      likeSpan.innerText = currentLikesCount;
    });
  });

  const commentButtons = document.querySelectorAll('.comment-btn');
  commentButtons.forEach((commentBtn) => {
    commentBtn.addEventListener('click', () => {
      const characterId = commentBtn.dataset.id;
      (0,_apiCalls__WEBPACK_IMPORTED_MODULE_2__.getPopUpCharacter)(characterId);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


const footer = () => {
  const footerElement = document.createElement('footer');
  footerElement.classList = 'footer';

  footerElement.innerHTML = `<p class='footer-text'>
    Made with ❤️ by <a class="footer-link" href="https://github.com/codepantherr">@codepantherr</a> & <a class="footer-link" href="https://github.com/carlos-ssh">@carlos-ssh</a>
  </p>`;
  document.body.appendChild(footerElement);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayComments": () => (/* binding */ displayComments),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _commentsCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commentsCounter */ "./src/commentsCounter.js");
/* eslint-disable import/no-cycle */



const displayComments = async (characterId) => {
  await (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.getPopUpCharacterComments)(characterId).then((comments) => {
    const commentsCount = (0,_commentsCounter__WEBPACK_IMPORTED_MODULE_1__["default"])(comments);
    document.getElementById('commentCount').innerText = commentsCount
      ? `Comments: ${commentsCount}`
      : `Comments: ${0}`;
    const modalComments = document.querySelector('.modal-comments');
    modalComments.innerHTML = '';
    comments.forEach((comment) => {
      modalComments.innerHTML += `
          <p class="modal-comment">${comment.creation_date} ${comment.username}: ${comment.comment}</p>
          `;
    });
  });
};

const modal = async (character, characterId) => {
  const popUpModal = document.createElement('div');
  popUpModal.classList = 'modal';
  popUpModal.innerHTML = `
    <div class="modal-container">
      <button class='close-modal'>X</button>
      <div class="modal-img">
        <img src=${character.image} alt="modal-img">
        <h2>${character.name}</h2>
      </div>
      <div class="modal-info-container">
        <div class="modal-info">
          <p class="modal-info-text">
            House: ${character.house}
          </p>
          <p class="modal-info-text">
            Gender: ${character.gender}
          </p>
          <p class="modal-info-text">
            Ancestry: ${character.ancestry}
          </p>
          <p class="modal-info-text">
            Species: ${character.species}
          </p>
        </div>
      </div>

      ${displayComments(characterId)}
    
      <div class="modal-comments-container">
        <div class="modal-comment-title">
          <h3 id="commentCount">Comments (2)</h3>
        </div>
        <div class="modal-comments">
        </div>
        <div class="add-comments">
          <h3>Add a comment</h3>
          <div 'comment-form-container'>
            <div class="flex-col">
              <input type='text' class="comment-input" placeholder="Angelina Jolie" required name="name">
              <input type="text" class="comment-input" placeholder="What is your comment?" required name="comment">
              <button type="submit" class="submit-btn">Comment</btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popUpModal);
  const closeModal = () => {
    document.querySelector('.modal').remove();
  };

  const submitBtn = document.querySelector('.submit-btn');

  submitBtn.addEventListener('click', () => {
    const usernameInput = document.querySelector('input[name="name"]');
    const commentInput = document.querySelector('input[name="comment"]');

    const username = usernameInput.value;
    const comment = commentInput.value;

    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.addNewComment)({ characterId, username, comment });

    usernameInput.value = '';
    commentInput.value = '';
  });

  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => closeModal());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_hp_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/hp-logo.png */ "./src/assets/images/hp-logo.png");


const nav = () => {
  const header = document.getElementById('header');
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="#" class="logo">
      <img class="img" src="${_assets_images_hp_logo_png__WEBPACK_IMPORTED_MODULE_0__}" alt="Logo Harry">
    </a>
    <ul>
      <li>
        <a class="link" href="#">About</a>
      </li>
      <li>
        <a class="link" href="#">Home</a>
      </li>
    </ul>
  `;
  header.appendChild(nav);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);

/***/ }),

/***/ "./src/itemCounter.js":
/*!****************************!*\
  !*** ./src/itemCounter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = (items) => {
  const counterElement = document.querySelector('.items-count');
  counterElement.innerText = `Characters: ${items.length}`;
  return items.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),

/***/ "./src/assets/images/hp-bg.png":
/*!*************************************!*\
  !*** ./src/assets/images/hp-bg.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22b24c73be5cbee1c13f.png";

/***/ }),

/***/ "./src/assets/images/hp-logo.png":
/*!***************************************!*\
  !*** ./src/assets/images/hp-logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c8617712e557e0be3b8.png";

/***/ }),

/***/ "./src/assets/images/hp-side-img.png":
/*!*******************************************!*\
  !*** ./src/assets/images/hp-side-img.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "328ce017676dee09c0fc.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav */ "./src/components/nav.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");





const displayCharacterCards = async () => {
  (0,_apiCalls__WEBPACK_IMPORTED_MODULE_3__.getCharactersAndLikes)();
};

const startApp = () => {
  (0,_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  displayCharacterCards();
  (0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

startApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSw0R0FBNEcsY0FBYyxlQUFlLGdCQUFnQixnRUFBZ0UsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsVUFBVSwy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QUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ2M7QUFDTTtBQUNVOztBQUVuRDtBQUNBLEVBQUUsZ0VBQXFCO0FBQ3ZCOztBQUVBO0FBQ0EsRUFBRSwyREFBRztBQUNMO0FBQ0EsRUFBRSw4REFBTTtBQUNSOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9hcHBJZC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2NvbW1lbnRzQ291bnRlci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvaXRlbUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvaHAtYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gICAgI0U3RTNBRlxcbiAgICAjQ0NBQjZGXFxuICAgICM3RDU1MzVcXG4gICAgIzY2MkYxOFxcbiAgICAjNzYxOTE5XFxuICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzk1OTU5NSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogODBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGFsaWNlYmx1ZTtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IGFsaWNlYmx1ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG59XFxuXFxuLmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM2NjJmMTg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmltZyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2FiNmY7XFxuICBjb2xvcjogIzY2MmYxODtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkNTUzNTtcXG4gIGNvbG9yOiAjZTdlM2FmO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG59XFxuXFxuLmxpbms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2MTkxOTtcXG4gIGNvbG9yOiAjZTdlM2FmO1xcbiAgcGFkZGluZzogM3B4IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuOHM7XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlLWltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIzJTtcXG4gIGxlZnQ6IDIlO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG59XFxuXFxuLmNhcmRzIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3ctZ2FwOiA1NXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2hhcmFjdGVyLW5hbWUge1xcbiAgZmxleDogMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5pY29uLmNvbW1lbnQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jaGFyYWN0ZXItaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFkMzY7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDZweCA2cHggM3B4ICMyOTI3NDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGFyYWN0ZXItaW1nOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDNweCA2cHggM3B4IDNweCAjMjkyNzQ4O1xcbn1cXG5cXG4uY2hhcmFjdGVyLWltZzphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggM3B4ICMyOTI3NDg7XFxufVxcblxcbi5saWtlcy1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZDM2O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmMWQzNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtcy1jb3VudCB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogIzY2MmYxODtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5mb290ZXItbGluayB7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmZvb3Rlci1saW5rOmhvdmVyLFxcbi5mb290ZXItbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2IoMTk0LCAxODksIDE4OSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMCU7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5tb2RhbC1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMyOTI3NDg7XFxufVxcblxcbi5jb21tZW50LWlucHV0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgd2lkdGg6IDEwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2FyZHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkwcHgpIHtcXG4gIC5jYXJkcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0dBTUc7O0FBRUg7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCwyREFBeUQ7QUFDM0Q7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osU0FBUztFQUNULDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsVUFBVTs7RUFFVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICAgICNFN0UzQUZcXG4gICAgI0NDQUI2RlxcbiAgICAjN0Q1NTM1XFxuICAgICM2NjJGMThcXG4gICAgIzc2MTkxOVxcbiAgKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICM5NTk1OTUgdXJsKFxcXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9ocC1iZy5wbmdcXFwiKTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBhbGljZWJsdWU7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCBhbGljZWJsdWU7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxufVxcblxcbi5saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjNjYyZjE4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5pbWcge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxuICB6LWluZGV4OiAxO1xcblxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NhYjZmO1xcbiAgY29sb3I6ICM2NjJmMTg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDU1MzU7XFxuICBjb2xvcjogI2U3ZTNhZjtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NjE5MTk7XFxuICBjb2xvcjogI2U3ZTNhZjtcXG4gIHBhZGRpbmc6IDNweCA3cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjhzO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZS1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMyU7XFxuICBsZWZ0OiAyJTtcXG4gIGhlaWdodDogMTMwcHg7XFxufVxcblxcbi5jYXJkcyB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtcm93LWdhcDogNTVweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNoYXJhY3Rlci1uYW1lIHtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaWNvbi5jb21tZW50IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2hhcmFjdGVyLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMWYxZDM2O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJveC1zaGFkb3c6IDNweCA2cHggNnB4IDNweCAjMjkyNzQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hhcmFjdGVyLWltZzpob3ZlciB7XFxuICBib3gtc2hhZG93OiAzcHggNnB4IDNweCAzcHggIzI5Mjc0ODtcXG59XFxuXFxuLmNoYXJhY3Rlci1pbWc6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDFweCAzcHggNnB4IDNweCAjMjkyNzQ4O1xcbn1cXG5cXG4ubGlrZXMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWQzNjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFkMzY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbXMtY291bnQge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICM2NjJmMTg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5mb290ZXItbGluazpob3ZlcixcXG4uZm9vdGVyLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiKDE5NCwgMTg5LCAxODkpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAlO1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ubW9kYWwtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMjkyNzQ4O1xcbn1cXG5cXG4uY29tbWVudC1pbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHdpZHRoOiAxMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNhcmRzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5MHB4KSB7XFxuICAuY2FyZHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuXG5pbXBvcnQgY2FyZCBmcm9tICcuL2NvbXBvbmVudHMvY2FyZCc7XG5pbXBvcnQgYXBwSWQgZnJvbSAnLi9hcHBJZCc7XG5pbXBvcnQgbW9kYWwsIHsgZGlzcGxheUNvbW1lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcblxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnNBbmRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2xpa2VzYDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vaHAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL2NoYXJhY3RlcnMnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBkYXRhLnNsaWNlKDAsIDEwKTtcblxuICBjYXJkKGNoYXJhY3RlcnMsIGxpa2VzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaWtlID0gYXN5bmMgKGNoYXJhY3RlcklkKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlc2A7XG4gIGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBjaGFyYWN0ZXJJZCxcbiAgICB9KSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UG9wVXBDaGFyYWN0ZXIgPSBhc3luYyAoY2hhcmFjdGVySWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9ocC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvY2hhcmFjdGVycycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgY29uc3QgY2hhcmFjdGVycyA9IGF3YWl0IGRhdGEuc2xpY2UoMCwgMTApO1xuICBtb2RhbChjaGFyYWN0ZXJzW2NoYXJhY3RlcklkXSwgY2hhcmFjdGVySWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBvcFVwQ2hhcmFjdGVyQ29tbWVudHMgPSBhc3luYyAoY2hhcmFjdGVySWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtjaGFyYWN0ZXJJZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZE5ld0NvbW1lbnQgPSBhc3luYyAodXNlckRldGFpbHMpID0+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiB1c2VyRGV0YWlscy5jaGFyYWN0ZXJJZCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyRGV0YWlscy51c2VybmFtZSxcbiAgICAgIGNvbW1lbnQ6IHVzZXJEZXRhaWxzLmNvbW1lbnQsXG4gICAgfSksXG4gIH0pO1xuICBhd2FpdCBkaXNwbGF5Q29tbWVudHModXNlckRldGFpbHMuY2hhcmFjdGVySWQpO1xufTtcbiIsImNvbnN0IGFwcElkID0gJzFnUEJtdTk0UlAwOWY0Vm9Ed3MwJztcblxuZXhwb3J0IGRlZmF1bHQgYXBwSWQ7IiwiY29uc3QgY29tbWVudHNDb3VudGVyID0gKGNvbW1lbnRzKSA9PiBjb21tZW50cy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzQ291bnRlcjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNpZGVJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hwLXNpZGUtaW1nLnBuZyc7XG5pbXBvcnQgeyBnZXRQb3BVcENoYXJhY3RlciwgbGlrZSB9IGZyb20gJy4uL2FwaUNhbGxzJztcbmltcG9ydCBpdGVtQ291bnRlciBmcm9tICcuLi9pdGVtQ291bnRlcic7XG5cbmNvbnN0IGNhcmQgPSAoY2hhcmFjdGVycywgbGlrZXMgPSBudWxsKSA9PiB7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG4gIGNvbnN0IHRvcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHRvcEltYWdlLmNsYXNzTGlzdCA9ICdzaWRlLWltZyc7XG4gIHRvcEltYWdlLnNyYyA9IHNpZGVJbWFnZTtcblxuICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICBpdGVtQ291bnRlcihjaGFyYWN0ZXJzKTtcblxuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjaGFyYWN0ZXJMaWtlcyA9IGxpa2VzLmZpbHRlcigobGlrZSkgPT4gTnVtYmVyKGxpa2UuaXRlbV9pZCkgPT09IGluZGV4KVswXTtcbiAgICBsZXQgbGlrZXNDb3VudCA9IDA7XG4gICAgaWYgKGNoYXJhY3Rlckxpa2VzKSB7XG4gICAgICBsaWtlc0NvdW50ID0gY2hhcmFjdGVyTGlrZXMubGlrZXM7XG4gICAgfVxuICAgIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiY2hhcmFjdGVyLWltZ1wiIGFsdD0ke2NoYXJhY3Rlci5uYW1lfSBzcmM9JHtjaGFyYWN0ZXIuaW1hZ2V9IGhlaWdodD0yMDAgZGF0YS1pZD0ke2luZGV4fT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUtYW5kLWxpa2UtY29udGFpbmVyIGZsZXgtcm93XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFyYWN0ZXItbmFtZVwiPiR7Y2hhcmFjdGVyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImljb24gbGlrZVwiIG5hbWU9XCJoZWFydC1vdXRsaW5lXCIgZGF0YS1pZD0ke2luZGV4fT48L2lvbi1pY29uPjxicj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXNcIj4ke2xpa2VzQ291bnR9IGxpa2VzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9Y29tbWVudC1idG4ke2luZGV4fSBjbGFzcz1cImNvbW1lbnQtYnRuXCIgZGF0YS1pZD0ke2luZGV4fT4gXG4gICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwiaWNvbiBjb21tZW50XCIgbmFtZT1cImNoYXRidWJibGVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PmA7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9wSW1hZ2UpO1xuXG4gIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UnKTtcbiAgbGlrZUJ1dHRvbnMuZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4ge1xuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBsaWtlU3BhbiA9IGxpa2VCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGxldCBjdXJyZW50TGlrZXNDb3VudCA9IE51bWJlcihsaWtlU3Bhbi5pbm5lckhUTUwuc3BsaXQoJyAnKVswXSk7XG4gICAgICBjdXJyZW50TGlrZXNDb3VudCArPSAxO1xuICAgICAgbGlrZShsaWtlQnV0dG9uLmRhdGFzZXQuaWQpO1xuICAgICAgbGlrZVNwYW4uaW5uZXJUZXh0ID0gJyc7XG4gICAgICBsaWtlU3Bhbi5pbm5lclRleHQgPSBjdXJyZW50TGlrZXNDb3VudDtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgY29tbWVudEJ1dHRvbnMuZm9yRWFjaCgoY29tbWVudEJ0bikgPT4ge1xuICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjaGFyYWN0ZXJJZCA9IGNvbW1lbnRCdG4uZGF0YXNldC5pZDtcbiAgICAgIGdldFBvcFVwQ2hhcmFjdGVyKGNoYXJhY3RlcklkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlckVsZW1lbnQuY2xhc3NMaXN0ID0gJ2Zvb3Rlcic7XG5cbiAgZm9vdGVyRWxlbWVudC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9J2Zvb3Rlci10ZXh0Jz5cbiAgICBNYWRlIHdpdGgg4p2k77iPIGJ5IDxhIGNsYXNzPVwiZm9vdGVyLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGVwYW50aGVyclwiPkBjb2RlcGFudGhlcnI8L2E+ICYgPGEgY2xhc3M9XCJmb290ZXItbGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2FybG9zLXNzaFwiPkBjYXJsb3Mtc3NoPC9hPlxuICA8L3A+YDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgYWRkTmV3Q29tbWVudCwgZ2V0UG9wVXBDaGFyYWN0ZXJDb21tZW50cyB9IGZyb20gJy4uL2FwaUNhbGxzJztcbmltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi4vY29tbWVudHNDb3VudGVyJztcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlDb21tZW50cyA9IGFzeW5jIChjaGFyYWN0ZXJJZCkgPT4ge1xuICBhd2FpdCBnZXRQb3BVcENoYXJhY3RlckNvbW1lbnRzKGNoYXJhY3RlcklkKS50aGVuKChjb21tZW50cykgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBjb21tZW50c0NvdW50ZXIoY29tbWVudHMpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Q291bnQnKS5pbm5lclRleHQgPSBjb21tZW50c0NvdW50XG4gICAgICA/IGBDb21tZW50czogJHtjb21tZW50c0NvdW50fWBcbiAgICAgIDogYENvbW1lbnRzOiAkezB9YDtcbiAgICBjb25zdCBtb2RhbENvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbW1lbnRzJyk7XG4gICAgbW9kYWxDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBtb2RhbENvbW1lbnRzLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC1jb21tZW50XCI+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICBgO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vZGFsID0gYXN5bmMgKGNoYXJhY3RlciwgY2hhcmFjdGVySWQpID0+IHtcbiAgY29uc3QgcG9wVXBNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3BVcE1vZGFsLmNsYXNzTGlzdCA9ICdtb2RhbCc7XG4gIHBvcFVwTW9kYWwuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9J2Nsb3NlLW1vZGFsJz5YPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaW1nXCI+XG4gICAgICAgIDxpbWcgc3JjPSR7Y2hhcmFjdGVyLmltYWdlfSBhbHQ9XCJtb2RhbC1pbWdcIj5cbiAgICAgICAgPGgyPiR7Y2hhcmFjdGVyLm5hbWV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWluZm8tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC1pbmZvLXRleHRcIj5cbiAgICAgICAgICAgIEhvdXNlOiAke2NoYXJhY3Rlci5ob3VzZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC1pbmZvLXRleHRcIj5cbiAgICAgICAgICAgIEdlbmRlcjogJHtjaGFyYWN0ZXIuZ2VuZGVyfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLWluZm8tdGV4dFwiPlxuICAgICAgICAgICAgQW5jZXN0cnk6ICR7Y2hhcmFjdGVyLmFuY2VzdHJ5fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLWluZm8tdGV4dFwiPlxuICAgICAgICAgICAgU3BlY2llczogJHtjaGFyYWN0ZXIuc3BlY2llc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgICR7ZGlzcGxheUNvbW1lbnRzKGNoYXJhY3RlcklkKX1cbiAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb21tZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbW1lbnQtdGl0bGVcIj5cbiAgICAgICAgICA8aDMgaWQ9XCJjb21tZW50Q291bnRcIj5Db21tZW50cyAoMik8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbW1lbnRzXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRzXCI+XG4gICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxuICAgICAgICAgIDxkaXYgJ2NvbW1lbnQtZm9ybS1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz1cImNvbW1lbnQtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkFuZ2VsaW5hIEpvbGllXCIgcmVxdWlyZWQgbmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjb21tZW50LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHlvdXIgY29tbWVudD9cIiByZXF1aXJlZCBuYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idG5cIj5Db21tZW50PC9idG4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcFVwTW9kYWwpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpO1xuICAgIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb21tZW50XCJdJyk7XG5cbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWU7XG4gICAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRJbnB1dC52YWx1ZTtcblxuICAgIGFkZE5ld0NvbW1lbnQoeyBjaGFyYWN0ZXJJZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSk7XG5cbiAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gIH0pO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XG4iLCJpbXBvcnQgTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hwLWxvZ28ucG5nJztcblxuY29uc3QgbmF2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuaW5uZXJIVE1MID0gYFxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsb2dvXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiaW1nXCIgc3JjPVwiJHtMb2dvfVwiIGFsdD1cIkxvZ28gSGFycnlcIj5cbiAgICA8L2E+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiI1wiPkFib3V0PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgY2xhc3M9XCJsaW5rXCIgaHJlZj1cIiNcIj5Ib21lPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdjsiLCJjb25zdCBpdGVtQ291bnRlciA9IChpdGVtcykgPT4ge1xuICBjb25zdCBjb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1jb3VudCcpO1xuICBjb3VudGVyRWxlbWVudC5pbm5lclRleHQgPSBgQ2hhcmFjdGVyczogJHtpdGVtcy5sZW5ndGh9YDtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1Db3VudGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG5hdiBmcm9tICcuL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgeyBnZXRDaGFyYWN0ZXJzQW5kTGlrZXMgfSBmcm9tICcuL2FwaUNhbGxzJztcblxuY29uc3QgZGlzcGxheUNoYXJhY3RlckNhcmRzID0gYXN5bmMgKCkgPT4ge1xuICBnZXRDaGFyYWN0ZXJzQW5kTGlrZXMoKTtcbn07XG5cbmNvbnN0IHN0YXJ0QXBwID0gKCkgPT4ge1xuICBuYXYoKTtcbiAgZGlzcGxheUNoYXJhY3RlckNhcmRzKCk7XG4gIGZvb3RlcigpO1xufTtcblxuc3RhcnRBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=