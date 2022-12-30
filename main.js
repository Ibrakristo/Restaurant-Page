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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n    let content = document.querySelector(\"#content\");\n    let container = document.createElement(\"div\");\n    container.classList.add(\"contact-container\");\n    content.appendChild(container);\n  function headerinit() {\n    let header = document.createElement(\"div\");\n    header.classList.add(\"header\");\n    let p = document.createElement(\"p\");\n    p.innerText = \"Welcome to Eater!\";\n    header.appendChild(p);\n    let ul = document.createElement(\"ul\");\n\n    for (let i = 0; i < 3; i++) {\n      let li = document.createElement(\"li\");\n      let a = document.createElement(\"a\");\n      let img = document.createElement(\"img\");\n      a.setAttribute(\"href\", \"#\");\n      if (i == 0) img.setAttribute(\"src\", \"./photo/icons/fb.svg\");\n      else if (i == 1) img.setAttribute(\"src\", \"./photo/icons/tw.svg\");\n      else img.setAttribute(\"src\", \"./photo/icons/ins.svg\");\n      a.appendChild(img);\n      li.appendChild(a);\n      ul.appendChild(li);\n    }\n    header.appendChild(ul);\n    container.appendChild(header);\n  }\n  headerinit();\n  function wrapperinit(){\n    let wrapper = document.createElement(\"div\");\n    wrapper.classList.add(\"contact-wrapper\");\n    for(let i = 0 ; i<2;i++){\n        let card = document.createElement(\"div\");\n        card.classList.add(\"contact-card\");\n        let img = document.createElement(\"img\");\n        let p = document.createElement(\"p\");\n        if(i == 0){\n            img.setAttribute(\"src\",\"./photo/contact/male.svg\");\n            p.innerHTML = \"Yum Yum!<br> Look! its a wild yum yum !\"\n        }\n        else if (i==1){\n            img.setAttribute(\"src\",\"./photo/contact/female.svg\");\n            p.innerHTML = \"Yummy Yummy!<br> Look! its a wild yummy yummy !\"\n        }\n        card.appendChild(img);\n        card.appendChild(p);\n        wrapper.appendChild(card);\n    }\n    container.appendChild(wrapper);\n  }\n  wrapperinit();\n  function footerinit(){\n    let footer = document.createElement(\"div\");\n    footer.classList.add(\"footer\");\n    let p = document.createElement(\"p\");\n    p.innerText = \"Eater Restaurant\";\n    footer.appendChild(p);\n    let p2 = document.createElement(\"p\")\n    p2.innerText= \"all credits goes to its respective owners\";\n    footer.appendChild(p2);\n    container.appendChild(footer);\n  }\n  footerinit();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n\nfunction home() {\n  let content = document.querySelector(\"#content\");\n  function headerinit() {\n    let header = document.createElement(\"div\");\n    header.classList.add(\"header\");\n    let p = document.createElement(\"p\");\n    p.innerText = \"Welcome to Eater!\";\n    header.appendChild(p);\n    let ul = document.createElement(\"ul\");\n\n    for (let i = 0; i < 3; i++) {\n      let li = document.createElement(\"li\");\n      let a = document.createElement(\"a\");\n      let img = document.createElement(\"img\");\n      a.setAttribute(\"href\", \"#\");\n      if (i == 0) img.setAttribute(\"src\", \"./photo/icons/fb.svg\");\n      else if (i == 1) img.setAttribute(\"src\", \"./photo/icons/tw.svg\");\n      else img.setAttribute(\"src\", \"./photo/icons/ins.svg\");\n      a.appendChild(img);\n      li.appendChild(a);\n      ul.appendChild(li);\n    }\n    header.appendChild(ul);\n    content.appendChild(header);\n  }\n  headerinit();\n  function photoContainerinit() {\n    let photoContainer = document.createElement(\"div\");\n    photoContainer.classList.add(\"photo-container\");\n    let titleImg = document.createElement(\"div\");\n    titleImg.innerText = \"Eater\";\n    titleImg.classList.add(\"title-img\");\n    photoContainer.appendChild(titleImg);\n    let img = document.createElement(\"img\");\n    img.setAttribute(\"src\", \"./photo/rest.jpg\");\n    photoContainer.appendChild(img);\n    content.appendChild(photoContainer);\n  }\n  photoContainerinit();\n  function wrapperinit() {\n    let wrapper = document.createElement(\"div\");\n    wrapper.classList.add(\"wrapper\");\n    for (let i = 0; i < 4; i++) {\n      let card = document.createElement(\"div\");\n      card.classList.add(\"card\");\n      let img = document.createElement(\"img\");\n      if (i == 0) img.setAttribute(\"src\", \"./photo/food1.jpeg\");\n      if (i == 1) img.setAttribute(\"src\", \"./photo/food2.jpeg\");\n      if (i == 2) img.setAttribute(\"src\", \"./photo/food3.jpeg\");\n      if (i == 3) img.setAttribute(\"src\", \"./photo/food4.jpeg\");\n      card.appendChild(img);\n      let p = document.createElement(\"p\");\n      p.innerText = \"A Fabulous Food\";\n      card.appendChild(p);\n      wrapper.appendChild(card);\n    }\n    content.appendChild(wrapper);\n  }\n  wrapperinit();\n  function sayinginit() {\n    let saying = document.createElement(\"div\");\n    saying.classList.add(\"saying\");\n    let div = document.createElement(\"div\");\n    let p = document.createElement(\"p\");\n    p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo augue nulla, a dignissim eros tincidunt euismod. Aliquam bibendum, mi id rhoncus ultricies, enim diam pretium eros, eu dictum velit lorem in nibh. Cras non nisi placerat, finibus erat quis, tincidunt magna. Curabitur id libero malesuada, elementum tortor et, tempor lorem. Proin non massa ac eros vehicula vestibulum. Integer elementum.`;\n    div.appendChild(p);\n    let p2 = document.createElement(\"p\");\n    p2.innerText = \"-a stranger maybe\";\n    div.appendChild(p2);\n    saying.appendChild(div);\n    content.appendChild(saying);\n  }\n  sayinginit();\n  function infoinit(){\n    let info = document.createElement(\"div\");\n    info.classList.add(\"info\");\n    for(let i = 0 ; i<3;i++){\n        let div = document.createElement(\"div\");\n        div.classList.add(\"icons-wrapper\");\n        let img = document.createElement(\"img\");\n        let p = document.createElement(\"p\");\n        if(i==0){\n            img.setAttribute(\"src\",\"./photo/icons/time.svg\")\n            p.innerHTML = \"Opens from 11 AM to 12PM <br> Sunday-Friday\";\n        }\n        if(i==1){\n            img.setAttribute(\"src\",\"./photo/icons/location.svg\")\n            p.innerHTML = \"Near <i>That Guy</i>\";\n        }\n        if(i==2){\n            img.setAttribute(\"src\",\"./photo/icons/star.svg\")\n            p.innerHTML = \"One of The Highest rated Restaurant in the country <i>*cause its the only thing in it :)*</i>\";\n        }\n        div.appendChild(img);\n        div.appendChild(p);\n        info.appendChild(div);\n\n    }\n    content.appendChild(info);\n  }\n  infoinit();\n  function footerinit(){\n    let footer = document.createElement(\"div\");\n    footer.classList.add(\"footer\");\n    let p = document.createElement(\"p\");\n    p.innerText = \"Eater Restaurant\";\n    footer.appendChild(p);\n    let p2 = document.createElement(\"p\")\n    p2.innerText= \"all credits goes to its respective owners\";\n    footer.appendChild(p2);\n    content.appendChild(footer);\n  }\n  footerinit();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nlet homeButton = document.querySelector(\".home\");\nlet menuButton = document.querySelector(\".menu\");\nlet contactButton = document.querySelector(\".contact\");\nlet content = document.querySelector(\"#content\");\nhomeButton.addEventListener(\"click\", homeClick);\nmenuButton.addEventListener(\"click\", menuClick);\ncontactButton.addEventListener(\"click\", contactClick);\nfunction homeClick() {\n    content.innerHTML =\"\";\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\nfunction menuClick() {\n    content.innerHTML =\"\";\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\nfunction contactClick() {\n    content.innerHTML =\"\";\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  let content = document.querySelector(\"#content\");\n  function headerinit() {\n    let header = document.createElement(\"div\");\n    header.classList.add(\"header\");\n    let p = document.createElement(\"p\");\n    p.innerText = \"Welcome to Eater!\";\n    header.appendChild(p);\n    let ul = document.createElement(\"ul\");\n\n    for (let i = 0; i < 3; i++) {\n      let li = document.createElement(\"li\");\n      let a = document.createElement(\"a\");\n      let img = document.createElement(\"img\");\n      a.setAttribute(\"href\", \"#\");\n      if (i == 0) img.setAttribute(\"src\", \"./photo/icons/fb.svg\");\n      else if (i == 1) img.setAttribute(\"src\", \"./photo/icons/tw.svg\");\n      else img.setAttribute(\"src\", \"./photo/icons/ins.svg\");\n      a.appendChild(img);\n      li.appendChild(a);\n      ul.appendChild(li);\n    }\n    header.appendChild(ul);\n    content.appendChild(header);\n  }\n  headerinit();\n  function photoContainerinit() {\n    let photoContainer = document.createElement(\"div\");\n    photoContainer.classList.add(\"photo-container\");\n    let titleImg = document.createElement(\"div\");\n    titleImg.innerText = \"Menu\";\n    titleImg.classList.add(\"title-img\");\n    photoContainer.appendChild(titleImg);\n    let img = document.createElement(\"img\");\n    img.setAttribute(\"src\", \"./photo/menu.jpg\");\n    photoContainer.appendChild(img);\n    content.appendChild(photoContainer);\n  }\n  photoContainerinit();\n  function wrapperinit() {\n    let wrapper = document.createElement(\"div\");\n    wrapper.classList.add(\"menu-wrapper\");\n    for (let i = 0; i < 10; i++) {\n      let card = document.createElement(\"div\");\n      card.classList.add(\"menu-card\");\n      let title = document.createElement(\"p\");\n      let div = document.createElement(\"div\");\n      div.classList.add(\"menu-inner\");\n      let img = document.createElement(\"img\");\n      let desc = document.createElement(\"p\");\n      if (i == 0) {\n        img.setAttribute(\"src\", \"./photo/menu/beef.jpg\");\n        title.innerText = \"Beef and Mushrooms\";\n        desc.innerHTML =\n          \"1 serving: 517 calories, 26g fat (12g saturated fat), 100mg cholesterol, 896mg sodium, 40g carbohydrate (5g sugars, 4g fiber), 28g protein. <br> 12$\";\n      } else if (i == 1) {\n        img.setAttribute(\"src\", \"./photo/menu/chicken.jpg\");\n        title.innerText = \"Broccoli-Stuffed Chicken \";\n        desc.innerHTML =\n          \"1 stuffed chicken breast half: 324 calories, 14g fat (7g saturated fat), 123mg cholesterol, 822mg sodium, 6g carbohydrate (1g sugars, 2g fiber), 43g protein. <br> 25$\";\n      }\n          else if (i == 2) {\n        img.setAttribute(\"src\", \"./photo/menu/salmon.jpg\");\n        title.innerText = \"Simple Salmon Chowder \";\n        desc.innerHTML =\n          \"1 cup: 274 calories, 15g fat (8g saturated fat), 84mg cholesterol, 1095mg sodium, 18g carbohydrate (5g sugars, 2g fiber), 16g protein.<br> 4$\";\n      } else if (i == 3) {\n        img.setAttribute(\"src\", \"./photo/menu/potluck.jpeg\");\n        title.innerText = \"Potluck Macaroni and Cheese\";\n        desc.innerHTML =\n          \"3/4 cup: 388 calories, 28g fat (17g saturated fat), 122mg cholesterol, 652mg sodium, 16g carbohydrate (6g sugars, 0 fiber), 17g protein. <br> 8$\";\n      }\n       else if (i == 4) {\n        img.setAttribute(\"src\", \"./photo/menu/broccoli.jpeg\");\n        title.innerText = \"Broccoli Chicken Casserole\";\n        desc.innerHTML =\n          \"1-1/3 cups: 315 calories, 13g fat (6g saturated fat), 66mg cholesterol, 1025mg sodium, 25g carbohydrate (4g sugars, 2g fiber), 23g protein. <br> 24$\";\n      } else if (i == 5) {\n        img.setAttribute(\"src\", \"./photo/menu/meatloaf.jpg\");\n        title.innerText = \"Meat Loaf\";\n        desc.innerHTML =\n          \"1 slice: 394 calories, 21g fat (10g saturated fat), 128mg cholesterol, 843mg sodium, 23g carbohydrate (15g sugars, 1g fiber), 28g protein. <br> 13$\";\n      } else if (i == 6) {\n        img.setAttribute(\"src\", \"./photo/menu/creamsoup.jpg\");\n        title.innerText = \"Cream of Celery Soup\";\n        desc.innerHTML =\n          \"1 cup: 185 calories, 7g fat (4g saturated fat), 20mg cholesterol, 989mg sodium, 22g carbohydrate (7g sugars, 3g fiber), 8g protein.<br> 7$\";\n      } else if (i == 7) {\n        img.setAttribute(\"src\", \"./photo/menu/chickenpap.jpg\");\n        title.innerText = \"Hungarian Chicken Paprikash\";\n        desc.innerHTML =\n          \"1 serving: 517 calories, 26g fat (12g saturated fat), 100mg cholesterol, 896mg sodium, 40g carbohydrate (5g sugars, 4g fiber), 28g protein. <br> 32$\";\n      } else if (i == 8) {\n        img.setAttribute(\"src\", \"./photo/menu/shrimp.jpeg\");\n        title.innerText = \"Shrimp Quesadilla\";\n        desc.innerHTML =\n          \"1 quesadilla: 523 calories, 27g fat (8g saturated fat), 163mg cholesterol, 707mg sodium, 38g carbohydrate (3g sugars, 4g fiber), 30g protein.<br> 11$\";\n      } else if (i == 9) {\n        img.setAttribute(\"src\", \"./photo/menu/countrychicken.jpeg\");\n        title.innerText = \"Country Chicken and Gravy\";\n        desc.innerHTML =\n          \"1 chicken breast half with 2 tablespoons gravy: 274 calories, 8g fat (3g saturated fat), 72mg cholesterol, 569mg sodium, 20g carbohydrate (6g sugars, 0 fiber), 28g protein. Diabetic Exchanges: 3 lean meat, 1 starch, 1/2 fat.<br> 12$\";\n      }\n      div.appendChild(img);\n      div.appendChild(desc);\n      card.appendChild(title);\n      card.appendChild(div);\n      wrapper.appendChild(card);\n    }\n    content.appendChild(wrapper);\n  }\n  wrapperinit();\n  function footerinit(){\n    let footer = document.createElement(\"div\");\n    footer.classList.add(\"footer\");\n    let p = document.createElement(\"p\");\n    p.innerText = \"Eater Restaurant\";\n    footer.appendChild(p);\n    let p2 = document.createElement(\"p\")\n    p2.innerText= \"all credits goes to its respective owners\";\n    footer.appendChild(p2);\n    content.appendChild(footer);\n  }\n  footerinit();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;