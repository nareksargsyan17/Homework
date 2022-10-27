/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const UI = __webpack_require__(/*! ./modules/UI */ \"./src/js/modules/UI.js\");\r\nconst POST = __webpack_require__(/*! ./modules/POST */ \"./src/js/modules/POST.js\");\r\nconst GET = __webpack_require__(/*! ./modules/GET */ \"./src/js/modules/GET.js\");\r\nconst PATCH = __webpack_require__(/*! ./modules/PATCH */ \"./src/js/modules/PATCH.js\");\r\nconst PUT = __webpack_require__(/*! ./modules/PUT */ \"./src/js/modules/PUT.js\");\r\nconst DELETE = __webpack_require__(/*! ./modules/DELETE */ \"./src/js/modules/DELETE.js\");\r\nUI.start();\r\nPOST();\r\nGET(UI,PATCH,PUT,DELETE);\r\nconsole.log(document.querySelectorAll(\".listsBlockItem > [data-rm]\"));\r\n\r\n\n\n//# sourceURL=webpack://crud/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/DELETE.js":
/*!**********************************!*\
  !*** ./src/js/modules/DELETE.js ***!
  \**********************************/
/***/ ((module) => {

eval("const url = \"http://localhost:7777/todo/\";\r\nfunction DELETE() {\r\n\tconst removeBtns = document.querySelectorAll(\".listsBlockItem > [data-rm]\");\r\n\tremoveBtns.forEach(elem => {\r\n\t\telem.addEventListener(\"click\", async () => {\r\n\t\t\tconst id = elem.parentElement.firstElementChild.textContent;\r\n\t\t\telem.remove();\r\n\t\t\tconsole.log(elem);\r\n\t\t\tawait fetch(url + id, {\r\n\t\t\t\tmethod: \"DELETE\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n}\r\nmodule.exports = DELETE\n\n//# sourceURL=webpack://crud/./src/js/modules/DELETE.js?");

/***/ }),

/***/ "./src/js/modules/GET.js":
/*!*******************************!*\
  !*** ./src/js/modules/GET.js ***!
  \*******************************/
/***/ ((module) => {

eval("const url = \"http://localhost:7777/todo/\";\r\nasync function GET(UI,PATCH,PUT,DELETE) {\r\n\treturn await fetch(url)\r\n\t\t.then(data => data.json())\r\n\t\t.then(data => {\r\n            console.log(data);\r\n\t\t\tdata.sort(function(a,b){\r\n\t\t\t\treturn a.complete < b.complete ? 1 : a.complete > b.complete ? -1 : 0;\r\n\t\t\t})\r\n\t\t\tdata.forEach(element => {\r\n\t\t\t\tUI.toHTML(element.id, element.title, element.complete)\r\n\t\t\t})\r\n\t\t\t\r\n\t\t\treturn data;\r\n\t\t})\r\n\t\t.then(data => {\r\n\t\t\tPATCH(data);\r\n\t\t\tPUT();\r\n\t\t\tDELETE();\r\n\t\t})\r\n}\r\nmodule.exports = GET\n\n//# sourceURL=webpack://crud/./src/js/modules/GET.js?");

/***/ }),

/***/ "./src/js/modules/PATCH.js":
/*!*********************************!*\
  !*** ./src/js/modules/PATCH.js ***!
  \*********************************/
/***/ ((module) => {

eval("const url = \"http://localhost:7777/todo/\";\r\nfunction PATCH(data) {\r\n\tconst doneBtns = document.querySelectorAll(\"[data-dn]\");\r\n\tconst editeBtns = document.querySelectorAll(\"[data-up]\");\r\n\tdoneBtns.forEach((btn, index) => {\r\n\t\tbtn.addEventListener(\"click\", async () => {\r\n\t\t\tbtn.firstElementChild.src = \"icons/end.png\";\r\n\t\t\tif (!data[index].complete) {\r\n\t\t\t\tediteBtns[index].firstElementChild.style.display = \"none\";\r\n\t\t\t\tconst id = btn.parentElement.firstElementChild.textContent;\r\n\t\t\t\tawait fetch(url + id, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({ ...data[index], complete: true })\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t\tif (data[index].complete) {\r\n\t\t\tbtn.addEventListener(\"mouseover\", function () {\r\n\t\t\t\tthis.style.cursor = \"no-drop\"\r\n\t\t\t\tthis.style.backgroundColor = \"transparent\";\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n}\r\nmodule.exports = PATCH\n\n//# sourceURL=webpack://crud/./src/js/modules/PATCH.js?");

/***/ }),

/***/ "./src/js/modules/POST.js":
/*!********************************!*\
  !*** ./src/js/modules/POST.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {form, screenInput} = __webpack_require__(/*! ./UI */ \"./src/js/modules/UI.js\");\r\n\r\nconst url = \"http://localhost:7777/todo/\";\r\nfunction POST() {\r\n\tform.addEventListener(\"submit\", async function (e) {\r\n\t\te.preventDefault();\r\n\t\tawait fetch(url, {\r\n\t\t\tmethod: \"POST\",\r\n\t\t\theaders: {\r\n\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t},\r\n\t\t\tbody: JSON.stringify({ title: screenInput.value.trim(), complete: false})\r\n\t\t})\r\n\t\te.target.reset();\r\n\t})\r\n}\r\nmodule.exports = POST\n\n//# sourceURL=webpack://crud/./src/js/modules/POST.js?");

/***/ }),

/***/ "./src/js/modules/PUT.js":
/*!*******************************!*\
  !*** ./src/js/modules/PUT.js ***!
  \*******************************/
/***/ ((module) => {

eval("const url = \"http://localhost:7777/todo/\";\r\nfunction PUT() {\r\n\tconst editeBtns = document.querySelectorAll(\"[data-up]\");\r\n\tconst saveBtns = document.querySelectorAll(\"[data-sv]\");\r\n\tconst input = document.querySelectorAll(\".listsBlockItem > form > input\");\r\n\tlet val;\r\n\tediteBtns.forEach((btn, index) => {\r\n\t\tbtn.addEventListener(\"click\", function () {\r\n\t\t\tbtn.style.display = \"none\";\r\n\t\t\tsaveBtns[index].style.display = \"inline-block\"\r\n\t\t\tconsole.log(input[index].parentElement);\r\n\t\t\tinput[index].removeAttribute(\"readonly\");\r\n\t\t\tinput[index].style.border = \"1px solid #5e5656\";\r\n\t\t\tinput[index].parentElement.addEventListener(\"submit\", async function (e) {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\tbtn.style.display = \"inline-block\";\r\n\t\t\t\tsaveBtns[index].style.display = \"none\";\r\n\t\t\t\tinput[index].setAttribute(\"readonly\", \"\");\r\n\t\t\t\tinput[index].style.border = \"0.5px solid transparent\";\r\n\t\t\t\tval = input[index].value;\r\n\t\t\t\tconst id = btn.parentElement.firstElementChild.textContent;\r\n\t\t\t\tawait fetch(url + id, {\r\n\t\t\t\t\tmethod: \"PUT\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({title: val, complete: false})\r\n\t\t\t\t})\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n}\r\nmodule.exports = PUT;\n\n//# sourceURL=webpack://crud/./src/js/modules/PUT.js?");

/***/ }),

/***/ "./src/js/modules/UI.js":
/*!******************************!*\
  !*** ./src/js/modules/UI.js ***!
  \******************************/
/***/ ((module) => {

eval("const root = document.querySelector(\"#root\");\r\n\r\nconst UI = {\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle: document.createElement(\"p\"),\r\n\tform: document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\r\n\r\n\telementOptions() {\r\n\t\tthis.title.textContent = \"CRUD\";\r\n\t\tthis.subTitle.textContent = \"Async Application\";\r\n\t\tthis.form.id = \"app-form\";\r\n\t\tthis.screenBlock.id = \"screenBlock\";\r\n\t\tthis.screenInput.type = \"text\";\r\n\t\tthis.screenInput.placeholder = \"Type here...\";\r\n\t\tthis.screenAddBtn.textContent = \"ADD\";\r\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\t\tthis.listsBlock.id = \"listBlock\";\r\n\t},\r\n\r\n\tappendElements() {\r\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock);\r\n\t\tthis.form.append(this.screenBlock);\r\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n\t},\r\n\ttoHTML(id, title, complete){\r\n\t\tthis.listsBlock.innerHTML += `\r\n\t\t\t\t\t<div class=\"listsBlockItem\">\r\n\t\t\t\t\t\t<span>${id}</span>\r\n\t\t\t\t\t\t<form id=\"list\">\r\n\t\t\t\t\t\t\t<input type = \"text\" value=\"${title}\" readonly>\r\n\t\t\t\t\t\t\t<button data-sv type=\"submit\">\r\n\t\t\t\t\t\t\t\t<img src=\"./icons/save.png\">\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<button data-up style=\"display:${!complete ? 'inline-block' : 'none'}\">\r\n\t\t\t\t\t\t\t<img src=\"./icons/edit.png\">\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button data-rm>\r\n\t\t\t\t\t\t\t<img src=\"./icons/delete.png\">\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button data-dn>\r\n\t\t\t\t\t\t\t<img src=\"${!complete ? './icons/done.png' : './icons/end.png'}\">\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t`\r\n\t},\r\n\r\n\tstart() {\r\n\t\tthis.elementOptions();\r\n\t\tthis.appendElements();\r\n\t}\r\n}\r\nmodule.exports = UI;\n\n//# sourceURL=webpack://crud/./src/js/modules/UI.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;