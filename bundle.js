/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root.light {
  --bg: white;
  --mg: lightgray;
  --fg: black;
}

:root.dark {
  --bg: black;
  --mg: gray;
  --fg: white;
}

* {
  font-family: "Roboto Mono", monospace;
  margin: 0;
  color: var(--fg);
}

html {
  width: 100vw;
  overflow: hidden;
}

body {
  flex-direction: column;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  gap: 10px;
}

h1 {
  margin-top: 50px;
}

button, select {
  background-color: var(--mg);
  border: 1px solid var(--fg);
}

input::placeholder {
  color: var(--fg);
}

input {
  outline: 1px solid var(--fg);
  border: none;
  background-color: var(--bg);
  padding: 2px 10px;
}

input:focus {
  outline: none;
}

.task {
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr repeat(4, min-content);
  grid-template-rows: 1fr;
  border-bottom: 1px solid var(--fg);
}
.task button {
  transform: scale(0.7);
}

.task:last-child {
  border-bottom: none;
}

.notes {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.notes textarea {
  background-color: var(--bg);
}

.hidden {
  display: none;
}

#delete-project {
  transform: scale(0.7) translateX(-10px) translateY(8px);
}`, "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,eAAA;EACA,WAAA;AAAF;;AAEA;EACE,WAAA;EACA,UAAA;EACA,WAAA;AACF;;AAEA;EACA,qCAAA;EACA,SAAA;EACA,gBAAA;AACA;;AACA;EACE,YAAA;EACA,gBAAA;AAEF;;AAAA;EACE,sBAAA;EACA,2BAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AAGF;;AADA;EACE,gBAAA;AAIF;;AAFA;EACE,2BAAA;EACA,2BAAA;AAKF;;AAHA;EACE,gBAAA;AAMF;;AAJA;EACE,4BAAA;EACA,YAAA;EACA,2BAAA;EACA,iBAAA;AAOF;;AALA;EACE,aAAA;AAQF;;AALA;EACE,WAAA;EACA,aAAA;EACA,iDAAA;EACA,uBAAA;EACA,kCAAA;AAQF;AAPE;EACE,qBAAA;AASJ;;AANA;EACE,mBAAA;AASF;;AAPA;EAEE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AASF;AARA;EACE,2BAAA;AAUF;;AANA;EACI,aAAA;AASJ;;AALE;EACE,uDAAA;AAQJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n\n:root.light{\n  --bg: white;\n  --mg: lightgray;\n  --fg: black;\n}\n:root.dark{\n  --bg: black;\n  --mg: gray;\n  --fg: white;\n}\n\n*{\nfont-family: 'Roboto Mono', monospace;\nmargin: 0;\ncolor: var(--fg)\n}\nhtml{\n  width: 100vw;\n  overflow: hidden;\n}\nbody{\n  flex-direction: column;\n  background-color: var(--bg);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\nh1{\n  margin-top: 50px;\n}\nbutton, select{\n  background-color: var(--mg);\n  border: 1px solid var(--fg);\n}\ninput::placeholder{\n  color: var(--fg);\n}\ninput{\n  outline: 1px solid var(--fg);\n  border: none;\n  background-color: var(--bg);\n  padding: 2px 10px;\n}\ninput:focus{\n  outline:none;\n}\n\n.task{\n  width: 80vw;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, min-content);\n  grid-template-rows: 1fr;\n  border-bottom: 1px solid var(--fg);\n  button{\n    transform: scale(0.7);\n  }\n}\n.task:last-child{\n  border-bottom: none;\n}\n.notes{\n  \n  position: absolute;\n  display:flex;\n  flex-direction: column;\n  align-items: center;\ntextarea{\n  background-color: var(--bg);\n}\n\n}\n.hidden{\n    display: none;\n  }\n\n\n  #delete-project{\n    transform: scale(0.7) translateX(-10px) translateY(8px);\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/cut-task.ts":
/*!*************************!*\
  !*** ./src/cut-task.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cutTask = void 0;
var strorage_1 = __webpack_require__(/*! ./strorage */ "./src/strorage.ts");
function cutTask(container, taskData) {
    for (var i = 0; i < strorage_1.projects[strorage_1.index].tasks.length; i++) {
        if (strorage_1.projects[strorage_1.index].tasks[i].name == taskData.name) {
            console.log(i);
            strorage_1.projects[strorage_1.index].tasks.splice(i, 1);
        }
    }
    container.remove();
    (0, strorage_1.addToStorage)();
}
exports.cutTask = cutTask;


/***/ }),

/***/ "./src/notes.ts":
/*!**********************!*\
  !*** ./src/notes.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleNotes = void 0;
var strorage_1 = __webpack_require__(/*! ./strorage */ "./src/strorage.ts");
var noteDiv = document.querySelector(".notes");
var noteArea = noteDiv.querySelector("#notes");
var noteLabel = noteDiv.querySelector("label");
var currentContent;
function toggleNotes(name, content) {
    noteDiv.classList.remove("hidden");
    noteArea.focus();
    noteArea.value = content.text;
    currentContent = content;
    noteLabel.textContent = "Add notes for: ".concat(name);
}
exports.toggleNotes = toggleNotes;
noteArea.addEventListener("keypress", function () {
    currentContent.text = noteArea.value;
    (0, strorage_1.addToStorage)();
});
noteArea.addEventListener("focusout", function () { noteDiv.classList.add("hidden"); });


/***/ }),

/***/ "./src/project-creation.ts":
/*!*********************************!*\
  !*** ./src/project-creation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var project_1 = __webpack_require__(/*! ./project */ "./src/project.ts");
var strorage_1 = __webpack_require__(/*! ./strorage */ "./src/strorage.ts");
var addProject = document.querySelector("#new-project");
var projectNamer = document.querySelector("#project-namer");
var projectSelecter = document.querySelector("#project");
addProject.addEventListener("click", function () {
    if (projectNamer.className == "hidden") {
        projectNamer.classList.remove("hidden");
        projectNamer.focus();
    }
    else {
        submit();
        (0, strorage_1.updateIndex)(projectSelecter.selectedIndex);
    }
});
projectNamer.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        submit();
    }
});
function submit() {
    if (projectNamer.checkValidity() && checkName()) {
        projectNamer.classList.add("hidden");
        strorage_1.projects.push((0, project_1.Project)(projectNamer.value));
        projectNamer.value = "";
        (0, strorage_1.addToStorage)();
    }
    else {
        projectNamer.reportValidity();
    }
}
function checkName() {
    for (var i = 0; i < strorage_1.projects.length; i++) {
        if (projectNamer.value == strorage_1.projects[i].name) {
            alert("think of another name");
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/project.ts":
/*!************************!*\
  !*** ./src/project.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Project = void 0;
var projectSelecter = document.querySelector("#project");
function Project(name, tasks, project) {
    projectSelecter.innerHTML += "<option value=".concat(name, ">").concat(name, "</option>");
    projectSelecter.selectedIndex = projectSelecter.querySelectorAll("option").length - 1;
    tasks =  true && undefined !== void 0 ? undefined : [];
    project =  true && undefined !== void 0 ? undefined : {
        name: name,
        tasks: tasks
    };
    return project;
}
exports.Project = Project;
// project selection
var strorage_1 = __webpack_require__(/*! ./strorage */ "./src/strorage.ts");
var task_1 = __webpack_require__(/*! ./task */ "./src/task.ts");
var tasksDiv = document.querySelector(".tasks");
projectSelecter.selectedIndex = strorage_1.index;
projectSelecter.addEventListener("input", function () {
    (0, strorage_1.updateIndex)(projectSelecter.selectedIndex);
    tasksDiv.innerHTML = '';
    strorage_1.projects[strorage_1.index].tasks.forEach(function (task) {
        console.log(task);
        task = (0, task_1.Task)(task.name, task);
    });
});
//project deletion
var deleteButton = document.querySelector("#delete-project");
deleteButton.addEventListener("click", function () {
    if (projectSelecter.querySelectorAll("option").length > 1) {
        var selectedIndex = projectSelecter.selectedIndex;
        strorage_1.projects.splice(selectedIndex, 1);
        projectSelecter.removeChild(projectSelecter.querySelectorAll("option")[selectedIndex]);
        (0, strorage_1.updateIndex)(projectSelecter.selectedIndex);
        (0, strorage_1.addToStorage)();
    }
    else {
        alert("You need to have at least 1 project");
    }
});


/***/ }),

/***/ "./src/strorage.ts":
/*!*************************!*\
  !*** ./src/strorage.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateIndex = exports.addToStorage = exports.projects = exports.index = void 0;
var task_1 = __webpack_require__(/*! ./task */ "./src/task.ts");
var project_1 = __webpack_require__(/*! ./project */ "./src/project.ts");
var index = (localStorage.getItem("index") === null) ?
    0 : Number(JSON.parse(localStorage.getItem("index")));
exports.index = index;
var projects;
if (localStorage.getItem("projects") === null ||
    JSON.parse(localStorage.getItem("projects")) < 0) {
    exports.projects = projects = [(0, project_1.Project)("FirstProject")];
}
else {
    exports.projects = projects = JSON.parse(localStorage.getItem("projects"));
    repopulate();
}
function addToStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
}
exports.addToStorage = addToStorage;
function updateIndex(i) {
    exports.index = index = i;
    localStorage.setItem("index", JSON.stringify(index));
}
exports.updateIndex = updateIndex;
function repopulate() {
    projects.forEach(function (project) {
        project = (0, project_1.Project)(project.name, project.tasks);
    });
    projects[index].tasks.forEach(function (task) {
        task = (0, task_1.Task)(task.name, task);
    });
}


/***/ }),

/***/ "./src/task-creation.ts":
/*!******************************!*\
  !*** ./src/task-creation.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var task_1 = __webpack_require__(/*! ./task */ "./src/task.ts");
var strorage_1 = __webpack_require__(/*! ./strorage */ "./src/strorage.ts");
var newTask = document.querySelector("#new-task");
var input = document.querySelector("#task-namer");
newTask.addEventListener("click", function () {
    if (input.className == "hidden") {
        input.classList.remove("hidden");
        input.focus();
    }
    else {
        submit();
    }
});
input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        submit();
    }
});
function submit() {
    if (input.checkValidity() && checkName()) {
        input.classList.add("hidden");
        strorage_1.projects[strorage_1.index].tasks.push((0, task_1.Task)(input.value));
        input.value = "";
        console.log(strorage_1.projects);
        (0, strorage_1.addToStorage)();
    }
    else {
        input.reportValidity();
    }
}
function checkName() {
    for (var i = 0; i < strorage_1.projects[strorage_1.index].tasks.length; i++) {
        if (input.value == strorage_1.projects[strorage_1.index].tasks[i].name) {
            alert("think of another name");
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/task.ts":
/*!*********************!*\
  !*** ./src/task.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Task = void 0;
var tasksDiv = document.querySelector(".tasks");
function Task(name, taskData) {
    var container = document.createElement("div");
    var title = document.createElement("h2");
    var timer = document.createElement("p");
    var notes = document.createElement("button");
    var cut = document.createElement("button");
    var play = document.createElement("button");
    container.classList.add("task");
    play.classList.add("play_arrow");
    title.textContent = name;
    notes.innerHTML = '<span class="material-symbols-outlined">description</span>';
    cut.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    play.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
    container.appendChild(title);
    container.appendChild(timer);
    container.appendChild(play);
    container.appendChild(notes);
    container.appendChild(cut);
    tasksDiv.appendChild(container);
    if (!taskData) {
        taskData = {
            name: name,
            time: {
                counter: 0,
                interval: null
            },
            noteContent: {
                text: ''
            },
        };
    }
    if (taskData.time.counter) {
        console.log("i have time");
        timer.textContent = (0, time_1.displayTime)(taskData.time.counter);
    }
    cut.addEventListener("click", function () { return (0, cut_task_1.cutTask)(container, taskData); });
    play.addEventListener("click", function () { return (0, time_1.toggleTimer)(play, timer, taskData.time); });
    notes.addEventListener("click", function () { return (0, notes_1.toggleNotes)(name, taskData.noteContent); });
    return taskData;
}
exports.Task = Task;
var time_1 = __webpack_require__(/*! ./time */ "./src/time.ts");
var notes_1 = __webpack_require__(/*! ./notes */ "./src/notes.ts");
var cut_task_1 = __webpack_require__(/*! ./cut-task */ "./src/cut-task.ts");


/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/***/ (() => {

var button = document.querySelector("#theme");
var root = document.documentElement;
root.className = "dark";
button.addEventListener("click", function () {
    var evalTheme = (root.className == "dark") ? "light" : "dark";
    setTheme(evalTheme);
});
function setTheme(theme) {
    button.innerHTML = "<span class=\"material-symbols-outlined\">".concat(theme, "_mode</span>");
    root.className = theme;
}


/***/ }),

/***/ "./src/time.ts":
/*!*********************!*\
  !*** ./src/time.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayTime = exports.toggleTimer = void 0;
var strorage_1 = __webpack_require__(/*! ./strorage */ "./src/strorage.ts");
function toggleTimer(button, timer, time) {
    var status = button.className == "play_arrow" ? "pause" : "play_arrow";
    button.className = status;
    button.innerHTML = "<span class=\"material-symbols-outlined\">".concat(status, "</span>");
    if (status == "pause") {
        timer.textContent = displayTime(time.counter);
        time.interval = setInterval(function () {
            time.counter++;
            timer.textContent = displayTime(time.counter);
            (0, strorage_1.addToStorage)();
        }, 1000);
    }
    else {
        console.log("stopped timer");
        clearInterval(time.interval);
    }
}
exports.toggleTimer = toggleTimer;
function displayTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    seconds = pad(seconds);
    minutes = pad(minutes);
    if (hours)
        return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    return "".concat(minutes, ":").concat(seconds);
}
exports.displayTime = displayTime;
function pad(num) {
    return num < 10 ? "0".concat(num) : num;
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
__webpack_require__(/*! ./theme */ "./src/theme.ts");
__webpack_require__(/*! ./project-creation */ "./src/project-creation.ts");
__webpack_require__(/*! ./task-creation */ "./src/task-creation.ts");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsSUFBSSxLQUFLO1FBQUUsT0FBTyxVQUFHLEtBQUssY0FBSSxPQUFPLGNBQUksT0FBTyxDQUFFLENBQUM7SUFDbkQsT0FBTyxVQUFHLE9BQU8sY0FBSSxPQUFPLENBQUUsQ0FBQztBQUNqQyxDQUFDO0FBS3FCLGtDQUFXO0FBSGpDLFNBQVMsR0FBRyxDQUFDLEdBQVc7SUFDdEIsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFJLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDcEMsQ0FBQzs7Ozs7OztVQy9CRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQSw4REFBc0I7QUFDdEIscURBQWdCO0FBQ2hCLDJFQUEyQjtBQUMzQixxRUFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3V0LXRhc2sudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbm90ZXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1jcmVhdGlvbi50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0cm9yYWdlLnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2stY3JlYXRpb24udHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90aGVtZS50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90aW1lLnRzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LmxpZ2h0IHtcbiAgLS1iZzogd2hpdGU7XG4gIC0tbWc6IGxpZ2h0Z3JheTtcbiAgLS1mZzogYmxhY2s7XG59XG5cbjpyb290LmRhcmsge1xuICAtLWJnOiBibGFjaztcbiAgLS1tZzogZ3JheTtcbiAgLS1mZzogd2hpdGU7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWZnKTtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYm9keSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmJ1dHRvbiwgc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mZyk7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1mZyk7XG59XG5cbmlucHV0IHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWZnKTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YXNrIHtcbiAgd2lkdGg6IDgwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZmcpO1xufVxuLnRhc2sgYnV0dG9uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xufVxuXG4udGFzazpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLm5vdGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vdGVzIHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHRyYW5zbGF0ZVgoLTEwcHgpIHRyYW5zbGF0ZVkoOHB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBTEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtBQVFGO0FBUEU7RUFDRSxxQkFBQTtBQVNKOztBQU5BO0VBQ0UsbUJBQUE7QUFTRjs7QUFQQTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFTRjtBQVJBO0VBQ0UsMkJBQUE7QUFVRjs7QUFOQTtFQUNJLGFBQUE7QUFTSjs7QUFMRTtFQUNFLHVEQUFBO0FBUUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3QubGlnaHR7XFxuICAtLWJnOiB3aGl0ZTtcXG4gIC0tbWc6IGxpZ2h0Z3JheTtcXG4gIC0tZmc6IGJsYWNrO1xcbn1cXG46cm9vdC5kYXJre1xcbiAgLS1iZzogYmxhY2s7XFxuICAtLW1nOiBncmF5O1xcbiAgLS1mZzogd2hpdGU7XFxufVxcblxcbip7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG5tYXJnaW46IDA7XFxuY29sb3I6IHZhcigtLWZnKVxcbn1cXG5odG1se1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuYm9keXtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuaDF7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5idXR0b24sIHNlbGVjdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1nKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZnKTtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IHZhcigtLWZnKTtcXG59XFxuaW5wdXR7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZmcpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbmlucHV0OmZvY3Vze1xcbiAgb3V0bGluZTpub25lO1xcbn1cXG5cXG4udGFza3tcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mZyk7XFxuICBidXR0b257XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIH1cXG59XFxuLnRhc2s6bGFzdC1jaGlsZHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5ub3Rlc3tcXG4gIFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxudGV4dGFyZWF7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbn1cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcblxcbiAgI2RlbGV0ZS1wcm9qZWN0e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgdHJhbnNsYXRlWCgtMTBweCkgdHJhbnNsYXRlWSg4cHgpO1xcbiAgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUYXNrRGF0YSB9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IGFkZFRvU3RvcmFnZSwgcHJvamVjdHMsIGluZGV4IH0gZnJvbSBcIi4vc3Ryb3JhZ2VcIjtcblxuZnVuY3Rpb24gY3V0VGFzayhjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCB0YXNrRGF0YTogVGFza0RhdGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1tpbmRleF0udGFza3MubGVuZ3RoOyBpKyspIHtcblxuICAgIGlmIChwcm9qZWN0c1tpbmRleF0udGFza3NbaV0ubmFtZSA9PSB0YXNrRGF0YS5uYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgIHByb2plY3RzW2luZGV4XS50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gIH1cbiAgY29udGFpbmVyLnJlbW92ZSgpO1xuICBhZGRUb1N0b3JhZ2UoKTtcbn1cbmV4cG9ydCB7IGN1dFRhc2sgfTtcbiIsImltcG9ydCB7IGFkZFRvU3RvcmFnZSB9IGZyb20gXCIuL3N0cm9yYWdlXCJcbmNvbnN0IG5vdGVEaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKTtcbmNvbnN0IG5vdGVBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gbm90ZURpdi5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpO1xuY29uc3Qgbm90ZUxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gbm90ZURpdi5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG5sZXQgY3VycmVudENvbnRlbnQ6IHsgdGV4dDogc3RyaW5nIH07XG5mdW5jdGlvbiB0b2dnbGVOb3RlcyhuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHsgdGV4dDogc3RyaW5nIH0pIHtcbiAgbm90ZURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBub3RlQXJlYS5mb2N1cygpO1xuICBub3RlQXJlYS52YWx1ZSA9IGNvbnRlbnQudGV4dDtcbiAgY3VycmVudENvbnRlbnQgPSBjb250ZW50O1xuICBub3RlTGFiZWwudGV4dENvbnRlbnQgPSBgQWRkIG5vdGVzIGZvcjogJHtuYW1lfWBcbn1cbm5vdGVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoKSA9PiB7XG4gIGN1cnJlbnRDb250ZW50LnRleHQgPSBub3RlQXJlYS52YWx1ZTtcbiAgYWRkVG9TdG9yYWdlKCk7XG59KTtcbm5vdGVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7IG5vdGVEaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSB9KTtcbmV4cG9ydCB7IHRvZ2dsZU5vdGVzIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdHMsIGFkZFRvU3RvcmFnZSwgdXBkYXRlSW5kZXggfSBmcm9tIFwiLi9zdHJvcmFnZVwiO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3ROYW1lcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lclwiKTtcbmNvbnN0IHByb2plY3RTZWxlY3RlcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChwcm9qZWN0TmFtZXIuY2xhc3NOYW1lID09IFwiaGlkZGVuXCIpIHtcbiAgICBwcm9qZWN0TmFtZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgIHByb2plY3ROYW1lci5mb2N1cygpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN1Ym1pdCgpXG4gICAgdXBkYXRlSW5kZXgocHJvamVjdFNlbGVjdGVyLnNlbGVjdGVkSW5kZXgpO1xuICB9XG59KTtcbnByb2plY3ROYW1lci5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgIHN1Ym1pdCgpXG4gIH1cblxufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgaWYgKHByb2plY3ROYW1lci5jaGVja1ZhbGlkaXR5KCkgJiYgY2hlY2tOYW1lKCkpIHtcbiAgICBwcm9qZWN0TmFtZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBwcm9qZWN0cy5wdXNoKFByb2plY3QocHJvamVjdE5hbWVyLnZhbHVlKSk7XG4gICAgcHJvamVjdE5hbWVyLnZhbHVlID0gXCJcIjtcbiAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgfVxuICBlbHNlIHtcbiAgICBwcm9qZWN0TmFtZXIucmVwb3J0VmFsaWRpdHkoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja05hbWUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdE5hbWVyLnZhbHVlID09IHByb2plY3RzW2ldLm5hbWUpIHtcbiAgICAgIGFsZXJ0KFwidGhpbmsgb2YgYW5vdGhlciBuYW1lXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuIiwiaW1wb3J0IHsgVGFza0RhdGEsIFByb2plY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmNvbnN0IHByb2plY3RTZWxlY3RlcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIik7XG5mdW5jdGlvbiBQcm9qZWN0KG5hbWU6IHN0cmluZywgdGFza3M/OiBBcnJheTxUYXNrRGF0YT4sIHByb2plY3Q/OiBQcm9qZWN0VHlwZSkge1xuICBwcm9qZWN0U2VsZWN0ZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPSR7bmFtZX0+JHtuYW1lfTwvb3B0aW9uPmA7XG4gIHByb2plY3RTZWxlY3Rlci5zZWxlY3RlZEluZGV4ID0gcHJvamVjdFNlbGVjdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIikubGVuZ3RoIC0gMTtcblxuICB0YXNrcyA9IHVuZGVmaW5lZCA/PyBbXTtcbiAgcHJvamVjdCA9IHVuZGVmaW5lZCA/PyB7XG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogdGFza3NcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0XG59XG5leHBvcnQgeyBQcm9qZWN0IH1cblxuLy8gcHJvamVjdCBzZWxlY3Rpb25cbmltcG9ydCB7IHVwZGF0ZUluZGV4LCBhZGRUb1N0b3JhZ2UsIHByb2plY3RzLCBpbmRleCB9IGZyb20gXCIuL3N0cm9yYWdlXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xucHJvamVjdFNlbGVjdGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbnByb2plY3RTZWxlY3Rlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICB1cGRhdGVJbmRleChwcm9qZWN0U2VsZWN0ZXIuc2VsZWN0ZWRJbmRleCk7XG4gIHRhc2tzRGl2LmlubmVySFRNTCA9ICcnO1xuICBwcm9qZWN0c1tpbmRleF0udGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICB0YXNrID0gVGFzayh0YXNrLm5hbWUsIHRhc2spO1xuICB9KTtcbn0pO1xuLy9wcm9qZWN0IGRlbGV0aW9uXG5jb25zdCBkZWxldGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtcHJvamVjdFwiKTtcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAocHJvamVjdFNlbGVjdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIikubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBwcm9qZWN0U2VsZWN0ZXIuc2VsZWN0ZWRJbmRleDtcbiAgICBwcm9qZWN0cy5zcGxpY2Uoc2VsZWN0ZWRJbmRleCwgMSk7XG4gICAgcHJvamVjdFNlbGVjdGVyLnJlbW92ZUNoaWxkKHByb2plY3RTZWxlY3Rlci5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpW3NlbGVjdGVkSW5kZXhdKTtcbiAgICB1cGRhdGVJbmRleChwcm9qZWN0U2VsZWN0ZXIuc2VsZWN0ZWRJbmRleCk7XG4gICAgYWRkVG9TdG9yYWdlKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgYWxlcnQoXCJZb3UgbmVlZCB0byBoYXZlIGF0IGxlYXN0IDEgcHJvamVjdFwiKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxubGV0IGluZGV4OiBudW1iZXIgPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbmRleFwiKSA9PT0gbnVsbCkgP1xuICAwIDogTnVtYmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbmRleFwiKSkpO1xubGV0IHByb2plY3RzOiBBcnJheTxQcm9qZWN0VHlwZT47XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSA9PT0gbnVsbCB8fFxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIDwgMFxuKSB7XG4gIHByb2plY3RzID0gW1Byb2plY3QoXCJGaXJzdFByb2plY3RcIildXG59XG5lbHNlIHtcbiAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICByZXBvcHVsYXRlKCk7XG5cbn1cblxuZnVuY3Rpb24gYWRkVG9TdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5mdW5jdGlvbiB1cGRhdGVJbmRleChpOiBudW1iZXIpIHtcbiAgaW5kZXggPSBpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImluZGV4XCIsIEpTT04uc3RyaW5naWZ5KGluZGV4KSk7XG59XG5mdW5jdGlvbiByZXBvcHVsYXRlKCkge1xuXG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgcHJvamVjdCA9IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LnRhc2tzKTtcbiAgfSk7XG5cbiAgcHJvamVjdHNbaW5kZXhdLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgdGFzayA9IFRhc2sodGFzay5uYW1lLCB0YXNrKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGluZGV4LCBwcm9qZWN0cywgYWRkVG9TdG9yYWdlLCB1cGRhdGVJbmRleCB9O1xuXG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IGFkZFRvU3RvcmFnZSwgcHJvamVjdHMsIGluZGV4IH0gZnJvbSBcIi4vc3Ryb3JhZ2VcIjtcbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrXCIpO1xuY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZXJcIik7XG5uZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChpbnB1dC5jbGFzc05hbWUgPT0gXCJoaWRkZW5cIikge1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdWJtaXQoKTtcbiAgfVxuXG59KTtcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgc3VibWl0KClcbiAgfVxuXG59KTtcblxuXG5mdW5jdGlvbiBzdWJtaXQoKSB7XG4gIGlmIChpbnB1dC5jaGVja1ZhbGlkaXR5KCkgJiYgY2hlY2tOYW1lKCkpIHtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHByb2plY3RzW2luZGV4XS50YXNrcy5wdXNoKFRhc2soaW5wdXQudmFsdWUpKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIGFkZFRvU3RvcmFnZSgpO1xuICB9XG4gIGVsc2Uge1xuICAgIGlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoZWNrTmFtZSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1tpbmRleF0udGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgPT0gcHJvamVjdHNbaW5kZXhdLnRhc2tzW2ldLm5hbWUpIHtcbiAgICAgIGFsZXJ0KFwidGhpbmsgb2YgYW5vdGhlciBuYW1lXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuIiwiaW1wb3J0IHsgVGFza0RhdGEgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5cbmNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbmZ1bmN0aW9uIFRhc2sobmFtZTogc3RyaW5nLCB0YXNrRGF0YT86IFRhc2tEYXRhKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGN1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHBsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgcGxheS5jbGFzc0xpc3QuYWRkKFwicGxheV9hcnJvd1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBub3Rlcy5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVzY3JpcHRpb248L3NwYW4+J1xuICBjdXQuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRlbGV0ZTwvc3Bhbj4nXG4gIHBsYXkuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnBsYXlfYXJyb3c8L3NwYW4+J1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXQpO1xuICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5cbiAgaWYgKCF0YXNrRGF0YSkge1xuICAgIHRhc2tEYXRhID0ge1xuICAgICAgbmFtZSxcbiAgICAgIHRpbWU6IHtcbiAgICAgICAgY291bnRlcjogMCxcbiAgICAgICAgaW50ZXJ2YWw6IG51bGxcbiAgICAgIH0sXG4gICAgICBub3RlQ29udGVudDoge1xuICAgICAgICB0ZXh0OiAnJ1xuICAgICAgfSxcbiAgICB9XG4gIH1cbiAgaWYgKHRhc2tEYXRhLnRpbWUuY291bnRlcikge1xuICAgIGNvbnNvbGUubG9nKFwiaSBoYXZlIHRpbWVcIik7XG4gICAgdGltZXIudGV4dENvbnRlbnQgPSBkaXNwbGF5VGltZSh0YXNrRGF0YS50aW1lLmNvdW50ZXIpO1xuICB9XG4gIGN1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY3V0VGFzayhjb250YWluZXIsIHRhc2tEYXRhKSk7XG4gIHBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZVRpbWVyKHBsYXksIHRpbWVyLCB0YXNrRGF0YS50aW1lKSk7XG4gIG5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVOb3RlcyhuYW1lLCB0YXNrRGF0YS5ub3RlQ29udGVudCkpO1xuXG4gIHJldHVybiB0YXNrRGF0YTtcbn1cbmV4cG9ydCB7IFRhc2sgfTtcblxuaW1wb3J0IHsgdG9nZ2xlVGltZXIsIGRpc3BsYXlUaW1lIH0gZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IHsgdG9nZ2xlTm90ZXMgfSBmcm9tIFwiLi9ub3Rlc1wiO1xuaW1wb3J0IHsgY3V0VGFzayB9IGZyb20gXCIuL2N1dC10YXNrXCI7XG4iLCJjb25zdCBidXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGVtZVwiKTtcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5yb290LmNsYXNzTmFtZSA9IFwiZGFya1wiO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGV2YWxUaGVtZSA9IChyb290LmNsYXNzTmFtZSA9PSBcImRhcmtcIikgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcbiAgc2V0VGhlbWUoZXZhbFRoZW1lKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXRUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+JHt0aGVtZX1fbW9kZTwvc3Bhbj5gO1xuICByb290LmNsYXNzTmFtZSA9IHRoZW1lO1xufVxuXG4iLCJpbXBvcnQgeyBhZGRUb1N0b3JhZ2UgfSBmcm9tIFwiLi9zdHJvcmFnZVwiO1xuZnVuY3Rpb24gdG9nZ2xlVGltZXIoYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCwgdGltZXI6IEhUTUxFbGVtZW50LCB0aW1lOiB7IGNvdW50ZXI6IG51bWJlciwgaW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0IH0pIHtcbiAgY29uc3Qgc3RhdHVzID0gYnV0dG9uLmNsYXNzTmFtZSA9PSBcInBsYXlfYXJyb3dcIiA/IFwicGF1c2VcIiA6IFwicGxheV9hcnJvd1wiO1xuICBidXR0b24uY2xhc3NOYW1lID0gc3RhdHVzO1xuICBidXR0b24uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPiR7c3RhdHVzfTwvc3Bhbj5gO1xuICBpZiAoc3RhdHVzID09IFwicGF1c2VcIikge1xuICAgIHRpbWVyLnRleHRDb250ZW50ID0gZGlzcGxheVRpbWUodGltZS5jb3VudGVyKTtcbiAgICB0aW1lLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGltZS5jb3VudGVyKys7XG4gICAgICB0aW1lci50ZXh0Q29udGVudCA9IGRpc3BsYXlUaW1lKHRpbWUuY291bnRlcik7XG4gICAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQgdGltZXJcIik7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lLmludGVydmFsKTtcbiAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVRpbWUoc2Vjb25kczogYW55KSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gIHNlY29uZHMgPSBzZWNvbmRzICUgMzYwMDtcbiAgbGV0IG1pbnV0ZXM6IGFueSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcbiAgc2Vjb25kcyA9IHBhZChzZWNvbmRzKTtcbiAgbWludXRlcyA9IHBhZChtaW51dGVzKTtcbiAgaWYgKGhvdXJzKSByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG4gIHJldHVybiBgJHttaW51dGVzfToke3NlY29uZHN9YDtcbn1cblxuZnVuY3Rpb24gcGFkKG51bTogbnVtYmVyKSB7XG4gIHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bTtcbn1cbmV4cG9ydCB7IHRvZ2dsZVRpbWVyLCBkaXNwbGF5VGltZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiXG5pbXBvcnQgXCIuL3RoZW1lXCJcbmltcG9ydCBcIi4vcHJvamVjdC1jcmVhdGlvblwiXG5pbXBvcnQgXCIuL3Rhc2stY3JlYXRpb25cIlxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==