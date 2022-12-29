/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact(){
    let content = document.querySelector("#content");
    let container = document.createElement("div");
    container.classList.add("contact-container");
    content.appendChild(container);
  function headerinit() {
    let header = document.createElement("div");
    header.classList.add("header");
    let p = document.createElement("p");
    p.innerText = "Welcome to Eater!";
    header.appendChild(p);
    let ul = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let img = document.createElement("img");
      a.setAttribute("href", "#");
      if (i == 0) img.setAttribute("src", "./photo/icons/fb.svg");
      else if (i == 1) img.setAttribute("src", "./photo/icons/tw.svg");
      else img.setAttribute("src", "./photo/icons/ins.svg");
      a.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    }
    header.appendChild(ul);
    container.appendChild(header);
  }
  headerinit();
  function wrapperinit(){
    let wrapper = document.createElement("div");
    wrapper.classList.add("contact-wrapper");
    for(let i = 0 ; i<2;i++){
        let card = document.createElement("div");
        card.classList.add("contact-card");
        let img = document.createElement("img");
        let p = document.createElement("p");
        if(i == 0){
            img.setAttribute("src","./photo/contact/male.svg");
            p.innerHTML = "Yum Yum!<br> Look! its a wild yum yum !"
        }
        else if (i==1){
            img.setAttribute("src","./photo/contact/female.svg");
            p.innerHTML = "Yummy Yummy!<br> Look! its a wild yummy yummy !"
        }
        card.appendChild(img);
        card.appendChild(p);
        wrapper.appendChild(card);
    }
    container.appendChild(wrapper);
  }
  wrapperinit();
  function footerinit(){
    let footer = document.createElement("div");
    footer.classList.add("footer");
    let p = document.createElement("p");
    p.innerText = "Eater Restaurant";
    footer.appendChild(p);
    let p2 = document.createElement("p")
    p2.innerText= "all credits goes to its respective owners";
    footer.appendChild(p2);
    container.appendChild(footer);
  }
  footerinit();
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });

function home() {
  let content = document.querySelector("#content");
  function headerinit() {
    let header = document.createElement("div");
    header.classList.add("header");
    let p = document.createElement("p");
    p.innerText = "Welcome to Eater!";
    header.appendChild(p);
    let ul = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let img = document.createElement("img");
      a.setAttribute("href", "#");
      if (i == 0) img.setAttribute("src", "./photo/icons/fb.svg");
      else if (i == 1) img.setAttribute("src", "./photo/icons/tw.svg");
      else img.setAttribute("src", "./photo/icons/ins.svg");
      a.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    }
    header.appendChild(ul);
    content.appendChild(header);
  }
  headerinit();
  function photoContainerinit() {
    let photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    let titleImg = document.createElement("div");
    titleImg.innerText = "This is a Cafe";
    titleImg.classList.add("title-img");
    photoContainer.appendChild(titleImg);
    let img = document.createElement("img");
    img.setAttribute("src", "./photo/rest.jpg");
    photoContainer.appendChild(img);
    content.appendChild(photoContainer);
  }
  photoContainerinit();
  function wrapperinit() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    for (let i = 0; i < 4; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      if (i == 0) img.setAttribute("src", "./photo/food1.jpeg");
      if (i == 1) img.setAttribute("src", "./photo/food2.jpeg");
      if (i == 2) img.setAttribute("src", "./photo/food3.jpeg");
      if (i == 3) img.setAttribute("src", "./photo/food4.jpeg");
      card.appendChild(img);
      let p = document.createElement("p");
      p.innerText = "A Fabulous Food";
      card.appendChild(p);
      wrapper.appendChild(card);
    }
    content.appendChild(wrapper);
  }
  wrapperinit();
  function sayinginit() {
    let saying = document.createElement("div");
    saying.classList.add("saying");
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
    commodo augue nulla, a dignissim eros tincidunt euismod. Aliquam
    bibendum, mi id rhoncus ultricies, enim diam pretium eros, eu dictum
    velit lorem in nibh. Cras non nisi placerat, finibus erat quis,
    tincidunt magna. Curabitur id libero malesuada, elementum tortor et,
    tempor lorem. Proin non massa ac eros vehicula vestibulum. Integer
    elementum.`;
    div.appendChild(p);
    let p2 = document.createElement("p");
    p2.innerText = "-a stranger maybe";
    div.appendChild(p2);
    saying.appendChild(div);
    content.appendChild(saying);
  }
  sayinginit();
  function infoinit(){
    let info = document.createElement("div");
    info.classList.add("info");
    for(let i = 0 ; i<3;i++){
        let div = document.createElement("div");
        div.classList.add("icons-wrapper");
        let img = document.createElement("img");
        let p = document.createElement("p");
        if(i==0){
            img.setAttribute("src","./photo/icons/time.svg")
            p.innerHTML = "Opens from 11 AM to 12PM <br> Sunday-Friday";
        }
        if(i==1){
            img.setAttribute("src","./photo/icons/location.svg")
            p.innerHTML = "Near <i>That Guy</i>";
        }
        if(i==2){
            img.setAttribute("src","./photo/icons/star.svg")
            p.innerHTML = "One of The Highest rated Restaurant in the country <i>*cause its the only thing in it :)*</i>";
        }
        div.appendChild(img);
        div.appendChild(p);
        info.appendChild(div);

    }
    content.appendChild(info);
  }
  infoinit();
  function footerinit(){
    let footer = document.createElement("div");
    footer.classList.add("footer");
    let p = document.createElement("p");
    p.innerText = "Eater Restaurant";
    footer.appendChild(p);
    let p2 = document.createElement("p")
    p2.innerText= "all credits goes to its respective owners";
    footer.appendChild(p2);
    content.appendChild(footer);
  }
  footerinit();
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  let content = document.querySelector("#content");
  function headerinit() {
    let header = document.createElement("div");
    header.classList.add("header");
    let p = document.createElement("p");
    p.innerText = "Welcome to Eater!";
    header.appendChild(p);
    let ul = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let img = document.createElement("img");
      a.setAttribute("href", "#");
      if (i == 0) img.setAttribute("src", "./photo/icons/fb.svg");
      else if (i == 1) img.setAttribute("src", "./photo/icons/tw.svg");
      else img.setAttribute("src", "./photo/icons/ins.svg");
      a.appendChild(img);
      li.appendChild(a);
      ul.appendChild(li);
    }
    header.appendChild(ul);
    content.appendChild(header);
  }
  headerinit();
  function photoContainerinit() {
    let photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    let titleImg = document.createElement("div");
    titleImg.innerText = "This is a Cafe";
    titleImg.classList.add("title-img");
    photoContainer.appendChild(titleImg);
    let img = document.createElement("img");
    img.setAttribute("src", "./photo/menu.jpg");
    photoContainer.appendChild(img);
    content.appendChild(photoContainer);
  }
  photoContainerinit();
  function wrapperinit() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("menu-wrapper");
    for (let i = 0; i < 10; i++) {
      let card = document.createElement("div");
      card.classList.add("menu-card");
      let title = document.createElement("p");
      let div = document.createElement("div");
      div.classList.add("menu-inner");
      let img = document.createElement("img");
      let desc = document.createElement("p");
      if (i == 0) {
        img.setAttribute("src", "./photo/menu/beef.jpg");
        title.innerText = "Beef and Mushrooms";
        desc.innerHTML =
          "1 serving: 517 calories, 26g fat (12g saturated fat), 100mg cholesterol, 896mg sodium, 40g carbohydrate (5g sugars, 4g fiber), 28g protein. <br> 12$";
      } else if (i == 1) {
        img.setAttribute("src", "./photo/menu/chicken.jpg");
        title.innerText = "Broccoli-Stuffed Chicken ";
        desc.innerHTML =
          "1 stuffed chicken breast half: 324 calories, 14g fat (7g saturated fat), 123mg cholesterol, 822mg sodium, 6g carbohydrate (1g sugars, 2g fiber), 43g protein. <br> 25$";
      }
          else if (i == 2) {
        img.setAttribute("src", "./photo/menu/salmon.jpg");
        title.innerText = "Simple Salmon Chowder ";
        desc.innerHTML =
          "1 cup: 274 calories, 15g fat (8g saturated fat), 84mg cholesterol, 1095mg sodium, 18g carbohydrate (5g sugars, 2g fiber), 16g protein.<br> 4$";
      } else if (i == 3) {
        img.setAttribute("src", "./photo/menu/potluck.jpeg");
        title.innerText = "Potluck Macaroni and Cheese";
        desc.innerHTML =
          "3/4 cup: 388 calories, 28g fat (17g saturated fat), 122mg cholesterol, 652mg sodium, 16g carbohydrate (6g sugars, 0 fiber), 17g protein. <br> 8$";
      }
       else if (i == 4) {
        img.setAttribute("src", "./photo/menu/broccoli.jpeg");
        title.innerText = "Broccoli Chicken Casserole";
        desc.innerHTML =
          "1-1/3 cups: 315 calories, 13g fat (6g saturated fat), 66mg cholesterol, 1025mg sodium, 25g carbohydrate (4g sugars, 2g fiber), 23g protein. <br> 24$";
      } else if (i == 5) {
        img.setAttribute("src", "./photo/menu/meatloaf.jpg");
        title.innerText = "Meat Loaf";
        desc.innerHTML =
          "1 slice: 394 calories, 21g fat (10g saturated fat), 128mg cholesterol, 843mg sodium, 23g carbohydrate (15g sugars, 1g fiber), 28g protein. <br> 13$";
      } else if (i == 6) {
        img.setAttribute("src", "./photo/menu/creamsoup.jpg");
        title.innerText = "Cream of Celery Soup";
        desc.innerHTML =
          "1 cup: 185 calories, 7g fat (4g saturated fat), 20mg cholesterol, 989mg sodium, 22g carbohydrate (7g sugars, 3g fiber), 8g protein.<br> 7$";
      } else if (i == 7) {
        img.setAttribute("src", "./photo/menu/chickenpap.jpg");
        title.innerText = "Hungarian Chicken Paprikash";
        desc.innerHTML =
          "1 serving: 517 calories, 26g fat (12g saturated fat), 100mg cholesterol, 896mg sodium, 40g carbohydrate (5g sugars, 4g fiber), 28g protein. <br> 32$";
      } else if (i == 8) {
        img.setAttribute("src", "./photo/menu/shrimp.jpeg");
        title.innerText = "Shrimp Quesadilla";
        desc.innerHTML =
          "1 quesadilla: 523 calories, 27g fat (8g saturated fat), 163mg cholesterol, 707mg sodium, 38g carbohydrate (3g sugars, 4g fiber), 30g protein.<br> 11$";
      } else if (i == 9) {
        img.setAttribute("src", "./photo/menu/countrychicken.jpeg");
        title.innerText = "Country Chicken and Gravy";
        desc.innerHTML =
          "1 chicken breast half with 2 tablespoons gravy: 274 calories, 8g fat (3g saturated fat), 72mg cholesterol, 569mg sodium, 20g carbohydrate (6g sugars, 0 fiber), 28g protein. Diabetic Exchanges: 3 lean meat, 1 starch, 1/2 fat.<br> 12$";
      }
      div.appendChild(img);
      div.appendChild(desc);
      card.appendChild(title);
      card.appendChild(div);
      wrapper.appendChild(card);
    }
    content.appendChild(wrapper);
  }
  wrapperinit();
  function footerinit(){
    let footer = document.createElement("div");
    footer.classList.add("footer");
    let p = document.createElement("p");
    p.innerText = "Eater Restaurant";
    footer.appendChild(p);
    let p2 = document.createElement("p")
    p2.innerText= "all credits goes to its respective owners";
    footer.appendChild(p2);
    content.appendChild(footer);
  }
  footerinit();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEhlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0E7QUFDSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGZ1bmN0aW9uIGhlYWRlcmluaXQoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBFYXRlciFcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gICAgICBpZiAoaSA9PSAwKSBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9pY29ucy9mYi5zdmdcIik7XG4gICAgICBlbHNlIGlmIChpID09IDEpIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL2ljb25zL3R3LnN2Z1wiKTtcbiAgICAgIGVsc2UgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGhvdG8vaWNvbnMvaW5zLnN2Z1wiKTtcbiAgICAgIGEuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB9XG4gIGhlYWRlcmluaXQoKTtcbiAgZnVuY3Rpb24gd3JhcHBlcmluaXQoKXtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC13cmFwcGVyXCIpO1xuICAgIGZvcihsZXQgaSA9IDAgOyBpPDI7aSsrKXtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNhcmRcIik7XG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpZihpID09IDApe1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi9waG90by9jb250YWN0L21hbGUuc3ZnXCIpO1xuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBcIll1bSBZdW0hPGJyPiBMb29rISBpdHMgYSB3aWxkIHl1bSB5dW0gIVwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaT09MSl7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuL3Bob3RvL2NvbnRhY3QvZmVtYWxlLnN2Z1wiKTtcbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gXCJZdW1teSBZdW1teSE8YnI+IExvb2shIGl0cyBhIHdpbGQgeXVtbXkgeXVtbXkgIVwiXG4gICAgICAgIH1cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH1cbiAgd3JhcHBlcmluaXQoKTtcbiAgZnVuY3Rpb24gZm9vdGVyaW5pdCgpe1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5pbm5lclRleHQgPSBcIkVhdGVyIFJlc3RhdXJhbnRcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwMi5pbm5lclRleHQ9IFwiYWxsIGNyZWRpdHMgZ29lcyB0byBpdHMgcmVzcGVjdGl2ZSBvd25lcnNcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuICB9XG4gIGZvb3RlcmluaXQoKTtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBmdW5jdGlvbiBoZWFkZXJpbml0KCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gRWF0ZXIhXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHApO1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuICAgICAgaWYgKGkgPT0gMCkgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGhvdG8vaWNvbnMvZmIuc3ZnXCIpO1xuICAgICAgZWxzZSBpZiAoaSA9PSAxKSBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9pY29ucy90dy5zdmdcIik7XG4gICAgICBlbHNlIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL2ljb25zL2lucy5zdmdcIik7XG4gICAgICBhLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIH1cbiAgaGVhZGVyaW5pdCgpO1xuICBmdW5jdGlvbiBwaG90b0NvbnRhaW5lcmluaXQoKSB7XG4gICAgbGV0IHBob3RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaG90b0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGhvdG8tY29udGFpbmVyXCIpO1xuICAgIGxldCB0aXRsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVJbWcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGEgQ2FmZVwiO1xuICAgIHRpdGxlSW1nLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbWdcIik7XG4gICAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbWcpO1xuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL3Jlc3QuanBnXCIpO1xuICAgIHBob3RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaG90b0NvbnRhaW5lcik7XG4gIH1cbiAgcGhvdG9Db250YWluZXJpbml0KCk7XG4gIGZ1bmN0aW9uIHdyYXBwZXJpbml0KCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpZiAoaSA9PSAwKSBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9mb29kMS5qcGVnXCIpO1xuICAgICAgaWYgKGkgPT0gMSkgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGhvdG8vZm9vZDIuanBlZ1wiKTtcbiAgICAgIGlmIChpID09IDIpIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL2Zvb2QzLmpwZWdcIik7XG4gICAgICBpZiAoaSA9PSAzKSBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9mb29kNC5qcGVnXCIpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHAuaW5uZXJUZXh0ID0gXCJBIEZhYnVsb3VzIEZvb2RcIjtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocCk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG4gIHdyYXBwZXJpbml0KCk7XG4gIGZ1bmN0aW9uIHNheWluZ2luaXQoKSB7XG4gICAgbGV0IHNheWluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F5aW5nLmNsYXNzTGlzdC5hZGQoXCJzYXlpbmdcIik7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmlubmVyVGV4dCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDdXJhYml0dXJcbiAgICBjb21tb2RvIGF1Z3VlIG51bGxhLCBhIGRpZ25pc3NpbSBlcm9zIHRpbmNpZHVudCBldWlzbW9kLiBBbGlxdWFtXG4gICAgYmliZW5kdW0sIG1pIGlkIHJob25jdXMgdWx0cmljaWVzLCBlbmltIGRpYW0gcHJldGl1bSBlcm9zLCBldSBkaWN0dW1cbiAgICB2ZWxpdCBsb3JlbSBpbiBuaWJoLiBDcmFzIG5vbiBuaXNpIHBsYWNlcmF0LCBmaW5pYnVzIGVyYXQgcXVpcyxcbiAgICB0aW5jaWR1bnQgbWFnbmEuIEN1cmFiaXR1ciBpZCBsaWJlcm8gbWFsZXN1YWRhLCBlbGVtZW50dW0gdG9ydG9yIGV0LFxuICAgIHRlbXBvciBsb3JlbS4gUHJvaW4gbm9uIG1hc3NhIGFjIGVyb3MgdmVoaWN1bGEgdmVzdGlidWx1bS4gSW50ZWdlclxuICAgIGVsZW1lbnR1bS5gO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMi5pbm5lclRleHQgPSBcIi1hIHN0cmFuZ2VyIG1heWJlXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKHAyKTtcbiAgICBzYXlpbmcuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNheWluZyk7XG4gIH1cbiAgc2F5aW5naW5pdCgpO1xuICBmdW5jdGlvbiBpbmZvaW5pdCgpe1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGZvcihsZXQgaSA9IDAgOyBpPDM7aSsrKXtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaWNvbnMtd3JhcHBlclwiKTtcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGlmKGk9PTApe1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi9waG90by9pY29ucy90aW1lLnN2Z1wiKVxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBcIk9wZW5zIGZyb20gMTEgQU0gdG8gMTJQTSA8YnI+IFN1bmRheS1GcmlkYXlcIjtcbiAgICAgICAgfVxuICAgICAgICBpZihpPT0xKXtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4vcGhvdG8vaWNvbnMvbG9jYXRpb24uc3ZnXCIpXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IFwiTmVhciA8aT5UaGF0IEd1eTwvaT5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZihpPT0yKXtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIi4vcGhvdG8vaWNvbnMvc3Rhci5zdmdcIilcbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gXCJPbmUgb2YgVGhlIEhpZ2hlc3QgcmF0ZWQgUmVzdGF1cmFudCBpbiB0aGUgY291bnRyeSA8aT4qY2F1c2UgaXRzIHRoZSBvbmx5IHRoaW5nIGluIGl0IDopKjwvaT5cIjtcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgfVxuICBpbmZvaW5pdCgpO1xuICBmdW5jdGlvbiBmb290ZXJpbml0KCl7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmlubmVyVGV4dCA9IFwiRWF0ZXIgUmVzdGF1cmFudFwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHAyLmlubmVyVGV4dD0gXCJhbGwgY3JlZGl0cyBnb2VzIHRvIGl0cyByZXNwZWN0aXZlIG93bmVyc1wiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwMik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICB9XG4gIGZvb3RlcmluaXQoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBmdW5jdGlvbiBoZWFkZXJpbml0KCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gRWF0ZXIhXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHApO1xuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuICAgICAgaWYgKGkgPT0gMCkgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGhvdG8vaWNvbnMvZmIuc3ZnXCIpO1xuICAgICAgZWxzZSBpZiAoaSA9PSAxKSBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9pY29ucy90dy5zdmdcIik7XG4gICAgICBlbHNlIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL2ljb25zL2lucy5zdmdcIik7XG4gICAgICBhLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIH1cbiAgaGVhZGVyaW5pdCgpO1xuICBmdW5jdGlvbiBwaG90b0NvbnRhaW5lcmluaXQoKSB7XG4gICAgbGV0IHBob3RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaG90b0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGhvdG8tY29udGFpbmVyXCIpO1xuICAgIGxldCB0aXRsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVJbWcuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIGEgQ2FmZVwiO1xuICAgIHRpdGxlSW1nLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbWdcIik7XG4gICAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbWcpO1xuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL21lbnUuanBnXCIpO1xuICAgIHBob3RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaG90b0NvbnRhaW5lcik7XG4gIH1cbiAgcGhvdG9Db250YWluZXJpbml0KCk7XG4gIGZ1bmN0aW9uIHdyYXBwZXJpbml0KCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXdyYXBwZXJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWlubmVyXCIpO1xuICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9tZW51L2JlZWYuanBnXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIkJlZWYgYW5kIE11c2hyb29tc1wiO1xuICAgICAgICBkZXNjLmlubmVySFRNTCA9XG4gICAgICAgICAgXCIxIHNlcnZpbmc6IDUxNyBjYWxvcmllcywgMjZnIGZhdCAoMTJnIHNhdHVyYXRlZCBmYXQpLCAxMDBtZyBjaG9sZXN0ZXJvbCwgODk2bWcgc29kaXVtLCA0MGcgY2FyYm9oeWRyYXRlICg1ZyBzdWdhcnMsIDRnIGZpYmVyKSwgMjhnIHByb3RlaW4uIDxicj4gMTIkXCI7XG4gICAgICB9IGVsc2UgaWYgKGkgPT0gMSkge1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9tZW51L2NoaWNrZW4uanBnXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIkJyb2Njb2xpLVN0dWZmZWQgQ2hpY2tlbiBcIjtcbiAgICAgICAgZGVzYy5pbm5lckhUTUwgPVxuICAgICAgICAgIFwiMSBzdHVmZmVkIGNoaWNrZW4gYnJlYXN0IGhhbGY6IDMyNCBjYWxvcmllcywgMTRnIGZhdCAoN2cgc2F0dXJhdGVkIGZhdCksIDEyM21nIGNob2xlc3Rlcm9sLCA4MjJtZyBzb2RpdW0sIDZnIGNhcmJvaHlkcmF0ZSAoMWcgc3VnYXJzLCAyZyBmaWJlciksIDQzZyBwcm90ZWluLiA8YnI+IDI1JFwiO1xuICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMikge1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9waG90by9tZW51L3NhbG1vbi5qcGdcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiU2ltcGxlIFNhbG1vbiBDaG93ZGVyIFwiO1xuICAgICAgICBkZXNjLmlubmVySFRNTCA9XG4gICAgICAgICAgXCIxIGN1cDogMjc0IGNhbG9yaWVzLCAxNWcgZmF0ICg4ZyBzYXR1cmF0ZWQgZmF0KSwgODRtZyBjaG9sZXN0ZXJvbCwgMTA5NW1nIHNvZGl1bSwgMThnIGNhcmJvaHlkcmF0ZSAoNWcgc3VnYXJzLCAyZyBmaWJlciksIDE2ZyBwcm90ZWluLjxicj4gNCRcIjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSAzKSB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL21lbnUvcG90bHVjay5qcGVnXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIlBvdGx1Y2sgTWFjYXJvbmkgYW5kIENoZWVzZVwiO1xuICAgICAgICBkZXNjLmlubmVySFRNTCA9XG4gICAgICAgICAgXCIzLzQgY3VwOiAzODggY2Fsb3JpZXMsIDI4ZyBmYXQgKDE3ZyBzYXR1cmF0ZWQgZmF0KSwgMTIybWcgY2hvbGVzdGVyb2wsIDY1Mm1nIHNvZGl1bSwgMTZnIGNhcmJvaHlkcmF0ZSAoNmcgc3VnYXJzLCAwIGZpYmVyKSwgMTdnIHByb3RlaW4uIDxicj4gOCRcIjtcbiAgICAgIH1cbiAgICAgICBlbHNlIGlmIChpID09IDQpIHtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGhvdG8vbWVudS9icm9jY29saS5qcGVnXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIkJyb2Njb2xpIENoaWNrZW4gQ2Fzc2Vyb2xlXCI7XG4gICAgICAgIGRlc2MuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIjEtMS8zIGN1cHM6IDMxNSBjYWxvcmllcywgMTNnIGZhdCAoNmcgc2F0dXJhdGVkIGZhdCksIDY2bWcgY2hvbGVzdGVyb2wsIDEwMjVtZyBzb2RpdW0sIDI1ZyBjYXJib2h5ZHJhdGUgKDRnIHN1Z2FycywgMmcgZmliZXIpLCAyM2cgcHJvdGVpbi4gPGJyPiAyNCRcIjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSA1KSB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL21lbnUvbWVhdGxvYWYuanBnXCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIk1lYXQgTG9hZlwiO1xuICAgICAgICBkZXNjLmlubmVySFRNTCA9XG4gICAgICAgICAgXCIxIHNsaWNlOiAzOTQgY2Fsb3JpZXMsIDIxZyBmYXQgKDEwZyBzYXR1cmF0ZWQgZmF0KSwgMTI4bWcgY2hvbGVzdGVyb2wsIDg0M21nIHNvZGl1bSwgMjNnIGNhcmJvaHlkcmF0ZSAoMTVnIHN1Z2FycywgMWcgZmliZXIpLCAyOGcgcHJvdGVpbi4gPGJyPiAxMyRcIjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSA2KSB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL21lbnUvY3JlYW1zb3VwLmpwZ1wiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJDcmVhbSBvZiBDZWxlcnkgU291cFwiO1xuICAgICAgICBkZXNjLmlubmVySFRNTCA9XG4gICAgICAgICAgXCIxIGN1cDogMTg1IGNhbG9yaWVzLCA3ZyBmYXQgKDRnIHNhdHVyYXRlZCBmYXQpLCAyMG1nIGNob2xlc3Rlcm9sLCA5ODltZyBzb2RpdW0sIDIyZyBjYXJib2h5ZHJhdGUgKDdnIHN1Z2FycywgM2cgZmliZXIpLCA4ZyBwcm90ZWluLjxicj4gNyRcIjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSA3KSB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL21lbnUvY2hpY2tlbnBhcC5qcGdcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiSHVuZ2FyaWFuIENoaWNrZW4gUGFwcmlrYXNoXCI7XG4gICAgICAgIGRlc2MuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIjEgc2VydmluZzogNTE3IGNhbG9yaWVzLCAyNmcgZmF0ICgxMmcgc2F0dXJhdGVkIGZhdCksIDEwMG1nIGNob2xlc3Rlcm9sLCA4OTZtZyBzb2RpdW0sIDQwZyBjYXJib2h5ZHJhdGUgKDVnIHN1Z2FycywgNGcgZmliZXIpLCAyOGcgcHJvdGVpbi4gPGJyPiAzMiRcIjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSA4KSB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL21lbnUvc2hyaW1wLmpwZWdcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiU2hyaW1wIFF1ZXNhZGlsbGFcIjtcbiAgICAgICAgZGVzYy5pbm5lckhUTUwgPVxuICAgICAgICAgIFwiMSBxdWVzYWRpbGxhOiA1MjMgY2Fsb3JpZXMsIDI3ZyBmYXQgKDhnIHNhdHVyYXRlZCBmYXQpLCAxNjNtZyBjaG9sZXN0ZXJvbCwgNzA3bWcgc29kaXVtLCAzOGcgY2FyYm9oeWRyYXRlICgzZyBzdWdhcnMsIDRnIGZpYmVyKSwgMzBnIHByb3RlaW4uPGJyPiAxMSRcIjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSA5KSB7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Bob3RvL21lbnUvY291bnRyeWNoaWNrZW4uanBlZ1wiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJDb3VudHJ5IENoaWNrZW4gYW5kIEdyYXZ5XCI7XG4gICAgICAgIGRlc2MuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIjEgY2hpY2tlbiBicmVhc3QgaGFsZiB3aXRoIDIgdGFibGVzcG9vbnMgZ3Jhdnk6IDI3NCBjYWxvcmllcywgOGcgZmF0ICgzZyBzYXR1cmF0ZWQgZmF0KSwgNzJtZyBjaG9sZXN0ZXJvbCwgNTY5bWcgc29kaXVtLCAyMGcgY2FyYm9oeWRyYXRlICg2ZyBzdWdhcnMsIDAgZmliZXIpLCAyOGcgcHJvdGVpbi4gRGlhYmV0aWMgRXhjaGFuZ2VzOiAzIGxlYW4gbWVhdCwgMSBzdGFyY2gsIDEvMiBmYXQuPGJyPiAxMiRcIjtcbiAgICAgIH1cbiAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG4gIHdyYXBwZXJpbml0KCk7XG4gIGZ1bmN0aW9uIGZvb3RlcmluaXQoKXtcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJUZXh0ID0gXCJFYXRlciBSZXN0YXVyYW50XCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xuICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcDIuaW5uZXJUZXh0PSBcImFsbCBjcmVkaXRzIGdvZXMgdG8gaXRzIHJlc3BlY3RpdmUgb3duZXJzXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHAyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH1cbiAgZm9vdGVyaW5pdCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcydcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==