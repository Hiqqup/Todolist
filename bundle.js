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

body {
  flex-direction: column;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100vh;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,eAAA;EACA,WAAA;AAAF;;AAEA;EACE,WAAA;EACA,UAAA;EACA,WAAA;AACF;;AAEA;EACA,qCAAA;EACA,SAAA;EACA,gBAAA;AACA;;AACA;EACE,sBAAA;EACA,2BAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;AAEF;;AAAA;EACE,gBAAA;AAGF;;AADA;EACE,2BAAA;EACA,2BAAA;AAIF;;AAFA;EACE,gBAAA;AAKF;;AAHA;EACE,4BAAA;EACA,YAAA;EACA,2BAAA;EACA,iBAAA;AAMF;;AAJA;EACE,aAAA;AAOF;;AAJA;EACE,WAAA;EACA,aAAA;EACA,iDAAA;EACA,uBAAA;EACA,kCAAA;AAOF;AANE;EACE,qBAAA;AAQJ;;AALA;EACE,mBAAA;AAQF;;AANA;EAEE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAQF;AAPA;EACE,2BAAA;AASF;;AALA;EACI,aAAA;AAQJ;;AAJE;EACE,uDAAA;AAOJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n\n:root.light{\n  --bg: white;\n  --mg: lightgray;\n  --fg: black;\n}\n:root.dark{\n  --bg: black;\n  --mg: gray;\n  --fg: white;\n}\n\n*{\nfont-family: 'Roboto Mono', monospace;\nmargin: 0;\ncolor: var(--fg)\n}\nbody{\n  flex-direction: column;\n  background-color: var(--bg);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 100vh;\n}\nh1{\n  margin-top: 50px;\n}\nbutton, select{\n  background-color: var(--mg);\n  border: 1px solid var(--fg);\n}\ninput::placeholder{\n  color: var(--fg);\n}\ninput{\n  outline: 1px solid var(--fg);\n  border: none;\n  background-color: var(--bg);\n  padding: 2px 10px;\n}\ninput:focus{\n  outline:none;\n}\n\n.task{\n  width: 80vw;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, min-content);\n  grid-template-rows: 1fr;\n  border-bottom: 1px solid var(--fg);\n  button{\n    transform: scale(0.7);\n  }\n}\n.task:last-child{\n  border-bottom: none;\n}\n.notes{\n  \n  position: absolute;\n  display:flex;\n  flex-direction: column;\n  align-items: center;\ntextarea{\n  background-color: var(--bg);\n}\n\n}\n.hidden{\n    display: none;\n  }\n\n\n  #delete-project{\n    transform: scale(0.7) translateX(-10px) translateY(8px);\n  }\n"],"sourceRoot":""}]);
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
var options = projectSelecter.querySelectorAll("option");
function Project(name, tasks, project) {
    projectSelecter.innerHTML += "<option value=".concat(name, ">").concat(name, "</option>");
    projectSelecter.selectedIndex = options.length - 1;
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
    if (options.length > 1) {
        var selectedIndex = projectSelecter.selectedIndex;
        strorage_1.projects.splice(selectedIndex, 1);
        projectSelecter.removeChild(options[selectedIndex]);
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
    console.log("index updated");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLElBQUksS0FBSztRQUFFLE9BQU8sVUFBRyxLQUFLLGNBQUksT0FBTyxjQUFJLE9BQU8sQ0FBRSxDQUFDO0lBQ25ELE9BQU8sVUFBRyxPQUFPLGNBQUksT0FBTyxDQUFFLENBQUM7QUFDakMsQ0FBQztBQUtxQixrQ0FBVztBQUhqQyxTQUFTLEdBQUcsQ0FBQyxHQUFXO0lBQ3RCLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBSSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3BDLENBQUM7Ozs7Ozs7VUMvQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUEsOERBQXNCO0FBQ3RCLHFEQUFnQjtBQUNoQiwyRUFBMkI7QUFDM0IscUVBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2N1dC10YXNrLnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25vdGVzLnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtY3JlYXRpb24udHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHJvcmFnZS50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLWNyZWF0aW9uLnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2sudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGltZS50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdC5saWdodCB7XG4gIC0tYmc6IHdoaXRlO1xuICAtLW1nOiBsaWdodGdyYXk7XG4gIC0tZmc6IGJsYWNrO1xufVxuXG46cm9vdC5kYXJrIHtcbiAgLS1iZzogYmxhY2s7XG4gIC0tbWc6IGdyYXk7XG4gIC0tZmc6IHdoaXRlO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1mZyk7XG59XG5cbmJvZHkge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5idXR0b24sIHNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1nKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmcpO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZmcpO1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1mZyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFzayB7XG4gIHdpZHRoOiA4MHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZnKTtcbn1cbi50YXNrIGJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbn1cblxuLnRhc2s6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5ub3RlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub3RlcyB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNkZWxldGUtcHJvamVjdCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KSB0cmFuc2xhdGVYKC0xMHB4KSB0cmFuc2xhdGVZKDhweCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDQTs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0FBT0Y7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtBQU9GO0FBTkU7RUFDRSxxQkFBQTtBQVFKOztBQUxBO0VBQ0UsbUJBQUE7QUFRRjs7QUFOQTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFRRjtBQVBBO0VBQ0UsMkJBQUE7QUFTRjs7QUFMQTtFQUNJLGFBQUE7QUFRSjs7QUFKRTtFQUNFLHVEQUFBO0FBT0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3QubGlnaHR7XFxuICAtLWJnOiB3aGl0ZTtcXG4gIC0tbWc6IGxpZ2h0Z3JheTtcXG4gIC0tZmc6IGJsYWNrO1xcbn1cXG46cm9vdC5kYXJre1xcbiAgLS1iZzogYmxhY2s7XFxuICAtLW1nOiBncmF5O1xcbiAgLS1mZzogd2hpdGU7XFxufVxcblxcbip7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG5tYXJnaW46IDA7XFxuY29sb3I6IHZhcigtLWZnKVxcbn1cXG5ib2R5e1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuaDF7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5idXR0b24sIHNlbGVjdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1nKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZnKTtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IHZhcigtLWZnKTtcXG59XFxuaW5wdXR7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZmcpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbmlucHV0OmZvY3Vze1xcbiAgb3V0bGluZTpub25lO1xcbn1cXG5cXG4udGFza3tcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mZyk7XFxuICBidXR0b257XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIH1cXG59XFxuLnRhc2s6bGFzdC1jaGlsZHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5ub3Rlc3tcXG4gIFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxudGV4dGFyZWF7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbn1cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcblxcbiAgI2RlbGV0ZS1wcm9qZWN0e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgdHJhbnNsYXRlWCgtMTBweCkgdHJhbnNsYXRlWSg4cHgpO1xcbiAgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUYXNrRGF0YSB9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IGFkZFRvU3RvcmFnZSwgcHJvamVjdHMsIGluZGV4IH0gZnJvbSBcIi4vc3Ryb3JhZ2VcIjtcblxuZnVuY3Rpb24gY3V0VGFzayhjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCB0YXNrRGF0YTogVGFza0RhdGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1tpbmRleF0udGFza3MubGVuZ3RoOyBpKyspIHtcblxuICAgIGlmIChwcm9qZWN0c1tpbmRleF0udGFza3NbaV0ubmFtZSA9PSB0YXNrRGF0YS5uYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgIHByb2plY3RzW2luZGV4XS50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gIH1cbiAgY29udGFpbmVyLnJlbW92ZSgpO1xuICBhZGRUb1N0b3JhZ2UoKTtcbn1cbmV4cG9ydCB7IGN1dFRhc2sgfTtcbiIsImltcG9ydCB7IGFkZFRvU3RvcmFnZSB9IGZyb20gXCIuL3N0cm9yYWdlXCJcbmNvbnN0IG5vdGVEaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKTtcbmNvbnN0IG5vdGVBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gbm90ZURpdi5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpO1xuY29uc3Qgbm90ZUxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gbm90ZURpdi5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG5sZXQgY3VycmVudENvbnRlbnQ6IHsgdGV4dDogc3RyaW5nIH07XG5mdW5jdGlvbiB0b2dnbGVOb3RlcyhuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHsgdGV4dDogc3RyaW5nIH0pIHtcbiAgbm90ZURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBub3RlQXJlYS5mb2N1cygpO1xuICBub3RlQXJlYS52YWx1ZSA9IGNvbnRlbnQudGV4dDtcbiAgY3VycmVudENvbnRlbnQgPSBjb250ZW50O1xuICBub3RlTGFiZWwudGV4dENvbnRlbnQgPSBgQWRkIG5vdGVzIGZvcjogJHtuYW1lfWBcbn1cbm5vdGVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoKSA9PiB7XG4gIGN1cnJlbnRDb250ZW50LnRleHQgPSBub3RlQXJlYS52YWx1ZTtcbiAgYWRkVG9TdG9yYWdlKCk7XG59KTtcbm5vdGVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7IG5vdGVEaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSB9KTtcbmV4cG9ydCB7IHRvZ2dsZU5vdGVzIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdHMsIGFkZFRvU3RvcmFnZSwgdXBkYXRlSW5kZXggfSBmcm9tIFwiLi9zdHJvcmFnZVwiO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3ROYW1lcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lclwiKTtcbmNvbnN0IHByb2plY3RTZWxlY3RlcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChwcm9qZWN0TmFtZXIuY2xhc3NOYW1lID09IFwiaGlkZGVuXCIpIHtcbiAgICBwcm9qZWN0TmFtZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgIHByb2plY3ROYW1lci5mb2N1cygpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN1Ym1pdCgpXG4gICAgdXBkYXRlSW5kZXgocHJvamVjdFNlbGVjdGVyLnNlbGVjdGVkSW5kZXgpO1xuICB9XG59KTtcbnByb2plY3ROYW1lci5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgIHN1Ym1pdCgpXG4gIH1cblxufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgaWYgKHByb2plY3ROYW1lci5jaGVja1ZhbGlkaXR5KCkgJiYgY2hlY2tOYW1lKCkpIHtcbiAgICBwcm9qZWN0TmFtZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBwcm9qZWN0cy5wdXNoKFByb2plY3QocHJvamVjdE5hbWVyLnZhbHVlKSk7XG4gICAgcHJvamVjdE5hbWVyLnZhbHVlID0gXCJcIjtcbiAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgfVxuICBlbHNlIHtcbiAgICBwcm9qZWN0TmFtZXIucmVwb3J0VmFsaWRpdHkoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja05hbWUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdE5hbWVyLnZhbHVlID09IHByb2plY3RzW2ldLm5hbWUpIHtcbiAgICAgIGFsZXJ0KFwidGhpbmsgb2YgYW5vdGhlciBuYW1lXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuIiwiaW1wb3J0IHsgVGFza0RhdGEsIFByb2plY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmNvbnN0IHByb2plY3RTZWxlY3RlcjogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIik7XG5jb25zdCBvcHRpb25zID0gcHJvamVjdFNlbGVjdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XG5mdW5jdGlvbiBQcm9qZWN0KG5hbWU6IHN0cmluZywgdGFza3M/OiBBcnJheTxUYXNrRGF0YT4sIHByb2plY3Q/OiBQcm9qZWN0VHlwZSkge1xuICBwcm9qZWN0U2VsZWN0ZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPSR7bmFtZX0+JHtuYW1lfTwvb3B0aW9uPmA7XG4gIHByb2plY3RTZWxlY3Rlci5zZWxlY3RlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXG4gIHRhc2tzID0gdW5kZWZpbmVkID8/IFtdO1xuICBwcm9qZWN0ID0gdW5kZWZpbmVkID8/IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHRhc2tzOiB0YXNrc1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3Rcbn1cbmV4cG9ydCB7IFByb2plY3QgfVxuXG4vLyBwcm9qZWN0IHNlbGVjdGlvblxuaW1wb3J0IHsgdXBkYXRlSW5kZXgsIGFkZFRvU3RvcmFnZSwgcHJvamVjdHMsIGluZGV4IH0gZnJvbSBcIi4vc3Ryb3JhZ2VcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5jb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG5wcm9qZWN0U2VsZWN0ZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xucHJvamVjdFNlbGVjdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIHVwZGF0ZUluZGV4KHByb2plY3RTZWxlY3Rlci5zZWxlY3RlZEluZGV4KTtcbiAgdGFza3NEaXYuaW5uZXJIVE1MID0gJyc7XG4gIHByb2plY3RzW2luZGV4XS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgIHRhc2sgPSBUYXNrKHRhc2submFtZSwgdGFzayk7XG4gIH0pO1xufSk7XG4vL3Byb2plY3QgZGVsZXRpb25cbmNvbnN0IGRlbGV0ZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1wcm9qZWN0XCIpO1xuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChvcHRpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gcHJvamVjdFNlbGVjdGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgcHJvamVjdHMuc3BsaWNlKHNlbGVjdGVkSW5kZXgsIDEpO1xuICAgIHByb2plY3RTZWxlY3Rlci5yZW1vdmVDaGlsZChvcHRpb25zW3NlbGVjdGVkSW5kZXhdKTtcbiAgICB1cGRhdGVJbmRleChwcm9qZWN0U2VsZWN0ZXIuc2VsZWN0ZWRJbmRleCk7XG4gICAgYWRkVG9TdG9yYWdlKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgYWxlcnQoXCJZb3UgbmVlZCB0byBoYXZlIGF0IGxlYXN0IDEgcHJvamVjdFwiKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxubGV0IGluZGV4OiBudW1iZXIgPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbmRleFwiKSA9PT0gbnVsbCkgP1xuICAwIDogTnVtYmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbmRleFwiKSkpO1xubGV0IHByb2plY3RzOiBBcnJheTxQcm9qZWN0VHlwZT47XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSA9PT0gbnVsbCB8fFxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIDwgMFxuKSB7XG4gIHByb2plY3RzID0gW1Byb2plY3QoXCJGaXJzdFByb2plY3RcIildXG59XG5lbHNlIHtcbiAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICByZXBvcHVsYXRlKCk7XG5cbn1cblxuZnVuY3Rpb24gYWRkVG9TdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5mdW5jdGlvbiB1cGRhdGVJbmRleChpOiBudW1iZXIpIHtcbiAgY29uc29sZS5sb2coXCJpbmRleCB1cGRhdGVkXCIpO1xuICBpbmRleCA9IGk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5kZXhcIiwgSlNPTi5zdHJpbmdpZnkoaW5kZXgpKTtcbn1cbmZ1bmN0aW9uIHJlcG9wdWxhdGUoKSB7XG5cbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QudGFza3MpO1xuICB9KTtcblxuICBwcm9qZWN0c1tpbmRleF0udGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICB0YXNrID0gVGFzayh0YXNrLm5hbWUsIHRhc2spO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgaW5kZXgsIHByb2plY3RzLCBhZGRUb1N0b3JhZ2UsIHVwZGF0ZUluZGV4IH07XG5cbiIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgYWRkVG9TdG9yYWdlLCBwcm9qZWN0cywgaW5kZXggfSBmcm9tIFwiLi9zdHJvcmFnZVwiO1xuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2tcIik7XG5jb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lclwiKTtcbm5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGlucHV0LmNsYXNzTmFtZSA9PSBcImhpZGRlblwiKSB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBpbnB1dC5mb2N1cygpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN1Ym1pdCgpO1xuICB9XG5cbn0pO1xuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICBzdWJtaXQoKVxuICB9XG5cbn0pO1xuXG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgaWYgKGlucHV0LmNoZWNrVmFsaWRpdHkoKSAmJiBjaGVja05hbWUoKSkge1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgcHJvamVjdHNbaW5kZXhdLnRhc2tzLnB1c2goVGFzayhpbnB1dC52YWx1ZSkpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgYWRkVG9TdG9yYWdlKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgaW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfVxufVxuZnVuY3Rpb24gY2hlY2tOYW1lKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW2luZGV4XS50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbnB1dC52YWx1ZSA9PSBwcm9qZWN0c1tpbmRleF0udGFza3NbaV0ubmFtZSkge1xuICAgICAgYWxlcnQoXCJ0aGluayBvZiBhbm90aGVyIG5hbWVcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4iLCJpbXBvcnQgeyBUYXNrRGF0YSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cblxuY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuZnVuY3Rpb24gVGFzayhuYW1lOiBzdHJpbmcsIHRhc2tEYXRhPzogVGFza0RhdGEpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBwbGF5LmNsYXNzTGlzdC5hZGQoXCJwbGF5X2Fycm93XCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIG5vdGVzLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZXNjcmlwdGlvbjwvc3Bhbj4nXG4gIGN1dC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPidcbiAgcGxheS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+cGxheV9hcnJvdzwvc3Bhbj4nXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1dCk7XG4gIHRhc2tzRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cblxuICBpZiAoIXRhc2tEYXRhKSB7XG4gICAgdGFza0RhdGEgPSB7XG4gICAgICBuYW1lLFxuICAgICAgdGltZToge1xuICAgICAgICBjb3VudGVyOiAwLFxuICAgICAgICBpbnRlcnZhbDogbnVsbFxuICAgICAgfSxcbiAgICAgIG5vdGVDb250ZW50OiB7XG4gICAgICAgIHRleHQ6ICcnXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICBpZiAodGFza0RhdGEudGltZS5jb3VudGVyKSB7XG4gICAgY29uc29sZS5sb2coXCJpIGhhdmUgdGltZVwiKTtcbiAgICB0aW1lci50ZXh0Q29udGVudCA9IGRpc3BsYXlUaW1lKHRhc2tEYXRhLnRpbWUuY291bnRlcik7XG4gIH1cbiAgY3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjdXRUYXNrKGNvbnRhaW5lciwgdGFza0RhdGEpKTtcbiAgcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlVGltZXIocGxheSwgdGltZXIsIHRhc2tEYXRhLnRpbWUpKTtcbiAgbm90ZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZU5vdGVzKG5hbWUsIHRhc2tEYXRhLm5vdGVDb250ZW50KSk7XG5cbiAgcmV0dXJuIHRhc2tEYXRhO1xufVxuZXhwb3J0IHsgVGFzayB9O1xuXG5pbXBvcnQgeyB0b2dnbGVUaW1lciwgZGlzcGxheVRpbWUgfSBmcm9tIFwiLi90aW1lXCI7XG5pbXBvcnQgeyB0b2dnbGVOb3RlcyB9IGZyb20gXCIuL25vdGVzXCI7XG5pbXBvcnQgeyBjdXRUYXNrIH0gZnJvbSBcIi4vY3V0LXRhc2tcIjtcbiIsImNvbnN0IGJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoZW1lXCIpO1xuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbnJvb3QuY2xhc3NOYW1lID0gXCJkYXJrXCI7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgZXZhbFRoZW1lID0gKHJvb3QuY2xhc3NOYW1lID09IFwiZGFya1wiKSA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xuICBzZXRUaGVtZShldmFsVGhlbWUpO1xufSk7XG5cbmZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgYnV0dG9uLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj4ke3RoZW1lfV9tb2RlPC9zcGFuPmA7XG4gIHJvb3QuY2xhc3NOYW1lID0gdGhlbWU7XG59XG5cbiIsImltcG9ydCB7IGFkZFRvU3RvcmFnZSB9IGZyb20gXCIuL3N0cm9yYWdlXCI7XG5mdW5jdGlvbiB0b2dnbGVUaW1lcihidXR0b246IEhUTUxCdXR0b25FbGVtZW50LCB0aW1lcjogSFRNTEVsZW1lbnQsIHRpbWU6IHsgY291bnRlcjogbnVtYmVyLCBpbnRlcnZhbDogTm9kZUpTLlRpbWVvdXQgfSkge1xuICBjb25zdCBzdGF0dXMgPSBidXR0b24uY2xhc3NOYW1lID09IFwicGxheV9hcnJvd1wiID8gXCJwYXVzZVwiIDogXCJwbGF5X2Fycm93XCI7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBzdGF0dXM7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+JHtzdGF0dXN9PC9zcGFuPmA7XG4gIGlmIChzdGF0dXMgPT0gXCJwYXVzZVwiKSB7XG4gICAgdGltZXIudGV4dENvbnRlbnQgPSBkaXNwbGF5VGltZSh0aW1lLmNvdW50ZXIpO1xuICAgIHRpbWUuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aW1lLmNvdW50ZXIrKztcbiAgICAgIHRpbWVyLnRleHRDb250ZW50ID0gZGlzcGxheVRpbWUodGltZS5jb3VudGVyKTtcbiAgICAgIGFkZFRvU3RvcmFnZSgpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwic3RvcHBlZCB0aW1lclwiKTtcbiAgICBjbGVhckludGVydmFsKHRpbWUuaW50ZXJ2YWwpO1xuICB9XG59XG5mdW5jdGlvbiBkaXNwbGF5VGltZShzZWNvbmRzOiBhbnkpIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgc2Vjb25kcyA9IHNlY29uZHMgJSAzNjAwO1xuICBsZXQgbWludXRlczogYW55ID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuICBzZWNvbmRzID0gcGFkKHNlY29uZHMpO1xuICBtaW51dGVzID0gcGFkKG1pbnV0ZXMpO1xuICBpZiAoaG91cnMpIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5mdW5jdGlvbiBwYWQobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIG51bSA8IDEwID8gYDAke251bX1gIDogbnVtO1xufVxuZXhwb3J0IHsgdG9nZ2xlVGltZXIsIGRpc3BsYXlUaW1lIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCJcbmltcG9ydCBcIi4vdGhlbWVcIlxuaW1wb3J0IFwiLi9wcm9qZWN0LWNyZWF0aW9uXCJcbmltcG9ydCBcIi4vdGFzay1jcmVhdGlvblwiXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9