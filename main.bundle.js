/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-light: rgba(50, 50, 51, 1);\n  --bg-dark: rgba(28, 28, 29, 1);\n  --white: rgba(255, 255, 255, 1);\n  --accent-red: rgba(251, 54, 64, 1);\n  --accent-grey: hsl(30, 1%, 37%);\n  --accent-navy: rgba(29, 52, 64, 1);\n  --accent-blue: rgba(31, 72, 126, 1);\n  --accent-teal: rgba(36, 123, 160, 0.8);\n  --accent-darkred: rgb(117, 7, 35, 1);\n  --transp-teal: rgba(84, 122, 172, 0.5);\n  --transp-white: rgb(255, 255, 255, 0.5);\n  --transp-bg-light: rgba(50, 50, 51, 0.9);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  justify-content: space-between;\n  height: 100vh;\n  font-size: 0.3rem;\n  font-family: \"KoHo\", sans-serif;\n  color: var(--white);\n}\n\nheader,\nfooter {\n  height: 10vh;\n  background: var(--bg-light);\n}\n\n/* utility */\nbutton {\n  border: none;\n  border-radius: 20%;\n  background: var(--transp-white);\n  color: var(--accent-navy);\n}\n\n.btn {\n  border: none;\n  border-radius: 15px;\n  padding: 0.3rem 3.3rem;\n  background: var(--accent-darkred);\n  color: var(--white);\n}\n\n.flex-row {\n  flex-direction: row;\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n  display: flex;\n}\n\n.hidden {\n  display: none;\n}\n\n/* Icons */\n.icon {\n  border: 2px solid var(--accent-blue);\n  border-radius: 10%;\n  padding: 0.4rem;\n  background: var(--transp-teal);\n  font-size: 2.5rem;\n}\n\n.icon-small {\n  font-size: 1.3rem;\n}\n\n.icon-on {\n  color: var(--accent-red);\n}\n\n/* header */\nheader {\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px var(--accent-grey) solid;\n  padding: 0.5rem 2rem;\n}\n\n.filter-logo-container {\n  justify-content: space-around;\n  width: 10rem;\n}\n\nheader i {\n  font-size: 4rem;\n}\n\nh1 {\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\nh1 p:first-child {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: var(--accent-red);\n}\n\nh1 p:nth-child(2) {\n  font-style: italic;\n}\n\nh1 p:nth-child(3) {\n  font-family: \"Seaweed Script\", cursive;\n}\n\nh1 i {\n  position: absolute;\n  align-self: center;\n  font-size: 5rem;\n  color: var(--accent-teal);\n}\n\n/* Filter Menu */\n.filter-menu {\n  position: absolute;\n  z-index: 1;\n  align-self: flex-start;\n  border-right: 2px solid var(--accent-grey);\n  width: 60%;\n  height: 39.9rem;\n  padding: 0.5rem 0 0 0.5rem;\n  background: var(--transp-bg-light);\n  font-size: 1rem;\n}\n\nfieldset {\n  z-index: 2;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 1rem;\n  border: none;\n  width: 13rem;\n  height: 100%;\n}\n\nli {\n  align-content: center;\n  margin: 0.5rem 0.9rem;\n  text-align: center;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\ninput[type=submit] {\n  align-self: center;\n  margin-top: 1rem;\n  font-size: 1rem;\n  letter-spacing: 0.3rem;\n}\n\ninput[type=submit]:hover {\n  box-shadow: 0 0 5px var(--white);\n  text-shadow: 0 0 3px var(--white);\n}\n\n/* Message Bar */\n.message-bar {\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.3rem;\n  width: 100%;\n  height: 5vh;\n  padding: 0.5rem 0;\n  background-color: var(--accent-darkred);\n  line-height: 1.2rem;\n}\n\n.message-bar h2 {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: 200;\n}\n\n/* Main */\nmain {\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 100vh;\n  background: var(--bg-dark);\n}\n\n.error-view {\n  justify-content: center;\n  align-content: center;\n}\n\n.error-message {\n  margin: 3rem;\n  text-align: center;\n  font-size: 4rem;\n}\n\n/* Recipe Card */\n.recipe-card {\n  position: relative;\n  z-index: 1;\n  margin: 1rem 0;\n  border-radius: 0 0 15px 15px;\n  min-height: 12rem;\n  width: 20rem;\n}\n\n.recipe-card img {\n  position: absolute;\n  border-radius: 0 0 15px 15px;\n  height: 100%;\n  width: 100%;\n}\n\n.recipe-card-info {\n  z-index: 1;\n  max-height: 4rem;\n  width: 100%;\n  background: rgba(50, 50, 51, 0.9);\n}\n\n.recipe-tag-container {\n  justify-content: center;\n  width: 15.5rem;\n  height: 100%;\n  text-align: center;\n}\n\n.recipe-name {\n  min-width: 100%;\n  padding-left: 0.5rem;\n  font-size: 1.4rem;\n  word-break: break-all;\n}\n\n.tag-container {\n  position: absolute;\n  top: 34%;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: 0.2rem;\n  width: 80%;\n  padding: 0.4rem 0;\n}\n\n.tags {\n  margin: 0 0.3rem 0.5rem 0;\n  border-radius: 15px;\n  padding: 0 0.5rem 0.1rem 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 300;\n  background: var(--accent-teal);\n}\n\n.recipe-card-buttons-container {\n  position: absolute;\n  align-items: center;\n  align-self: flex-end;\n  justify-content: space-around;\n  height: 60%;\n  width: 3rem;\n}\n\n.recipe-card-buttons-container button {\n  padding: 0 0.2rem;\n  font-size: 1.8rem;\n}\n\n/* Recipe View */\n.recipe-card-all {\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.full-recipe-view .recipe-card img {\n  align-content: flex-end;\n  border-radius: 15px 15px 0 0;\n}\n\n.full-recipe-view .full-recipe-info h4 {\n  margin-bottom: 0.4rem 0;\n  text-decoration: underline;\n}\n\n.total-cost {\n  z-index: 1;\n  align-self: flex-end;\n  height: 1.5rem;\n  width: 100%;\n  padding: 0 0.4rem;\n  font-size: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.total-cost h5 {\n  margin-right: 0.3rem;\n  font-size: 1rem;\n}\n\n.full-recipe-view .recipe-card-buttons-container {\n  align-self: flex-start;\n  justify-content: space-evenly;\n  border-radius: 15px 0 0 0;\n  height: 100%;\n  padding-bottom: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.full-recipe-info {\n  justify-content: center;\n  width: 85%;\n  padding: 0.3rem 0.5rem;\n  background: var(--bg-light);\n  font-size: 1rem;\n}\n\n.instructions-info {\n  text-align: justify;\n}\n\n.ingredients-info p,\n.instructions-info p {\n  margin-bottom: 0.4rem;\n}\n\n.tag-container-full {\n  align-content: center;\n  justify-content: center;\n  border-bottom: var(--bg-light) 3px solid;\n  z-index: 2;\n  height: 10%;\n}\n\n.tag-container-full .tags {\n  margin-top: 0.5rem;\n  padding: 0.125rem 0.8rem;\n  font-size: 0.5rem;\n}\n\n/* Footer */\nfooter {\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 0.4rem;\n}\n\n.search-bar {\n  margin: 0 0.2rem;\n  border-radius: 5px;\n  height: 2.4rem;\n  width: 75%;\n  padding: 0.4rem;\n}\n\n.search-btn {\n  z-index: 2;\n  border-radius: 50%;\n  padding: 0.5rem;\n  background-color: var(--transp-teal);\n  font-size: 1.3rem;\n  color: var(--white);\n}\n\ninput:checked + .tags {\n  background: var(--accent-blue);\n  color: var(--accent-red);\n}\n\n@media (min-width: 376px) {\n  .display-desktop {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .message-bar {\n    height: 7vh;\n  }\n\n  .message-bar h2 {\n    font-size: 1.8rem;\n  }\n\n  .error-view {\n    padding: 0 1rem;\n  }\n\n  .filter-menu {\n    align-items: center;\n    height: 77.8%;\n    max-width: 40%;\n    padding: 0;\n    padding-bottom: 1rem;\n  }\n\n  fieldset {\n    width: auto;\n    max-height: 80%;\n    margin-top: 0;\n  }\n\n  li {\n    padding: 0;\n  }\n\n  .recipe-card {\n    margin-right: 1rem;\n  }\n\n  .total-cost {\n    justify-content: flex-end;\n    background: var(--bg-dark);\n  }\n\n  .total-cost p,\n.total-cost h5,\n.full-recipe-info {\n    font-size: 1.5rem;\n  }\n\n  .full-recipe-view .recipe-card {\n    align-self: center;\n    margin-right: 0;\n    height: 15rem;\n    width: 85%;\n  }\n\n  .full-recipe-view .recipe-card img {\n    background: center center/cover no-repeat;\n  }\n\n  .tag-container-full {\n    height: 15%;\n  }\n\n  .tag-container-full .tags {\n    font-size: 1rem;\n  }\n\n  footer .icon-small,\nfooter .icon {\n    font-size: 2rem;\n  }\n\n  .search-bar {\n    height: 3rem;\n    width: 80%;\n    font-size: 1.5rem;\n  }\n\n  .error-message {\n    margin: 10rem;\n  }\n\n  h1:hover,\n.exit-card:hover,\n.heart-card:hover,\n.calendar-card:hover,\n.filter-btn:hover,\n.search-btn:hover {\n    color: var(--accent-red);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --bg-light: rgba(50, 50, 51, 1);\n  --bg-dark: rgba(28, 28, 29, 1);\n  --white: rgba(255, 255, 255, 1);\n\n  --accent-red: rgba(251, 54, 64, 1);\n  --accent-grey: hsl(30, 1%, 37%);\n  --accent-navy: rgba(29, 52, 64, 1);\n  --accent-blue: rgba(31, 72, 126, 1);\n  --accent-teal: rgba(36, 123, 160, 0.8);\n  --accent-darkred: rgb(117, 7, 35, 1);\n\n  --transp-teal: rgba(84, 122, 172, 0.5);\n  --transp-white: rgb(255, 255, 255, 0.5);\n  --transp-bg-light: rgba(50, 50, 51, 0.9);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  justify-content: space-between;\n  height: 100vh;\n  font-size: 0.3rem;\n  font-family: \"KoHo\", sans-serif;\n  color: var(--white);\n}\n\nheader,\nfooter {\n  height: 10vh;\n  background: var(--bg-light);\n}\n\n/* utility */\nbutton {\n  border: none;\n  border-radius: 20%;\n  background: var(--transp-white);\n  color: var(--accent-navy);\n}\n\n.btn {\n  border: none;\n  border-radius: 15px;\n  padding: 0.3rem 3.3rem;\n  background: var(--accent-darkred);\n  color: var(--white);\n}\n\n.flex-row {\n  flex-direction: row;\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n  display: flex;\n}\n\n.hidden {\n  display: none;\n}\n/* Icons */\n\n.icon {\n  border: 2px solid var(--accent-blue);\n  border-radius: 10%;\n  padding: 0.4rem;\n  background: var(--transp-teal);\n  font-size: 2.5rem;\n}\n\n.icon-small {\n  font-size: 1.3rem;\n}\n\n.icon-on {\n  color: var(--accent-red);\n}\n\n/* header */\nheader {\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px var(--accent-grey) solid;\n  padding: 0.5rem 2rem;\n}\n\n.filter-logo-container {\n  justify-content: space-around;\n  width: 10rem;\n}\n\nheader i {\n  font-size: 4rem;\n}\n\nh1 {\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\nh1 p:first-child {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: var(--accent-red);\n}\n\nh1 p:nth-child(2) {\n  font-style: italic;\n}\n\nh1 p:nth-child(3) {\n  font-family: \"Seaweed Script\", cursive;\n}\n\nh1 i {\n  position: absolute;\n  align-self: center;\n  font-size: 5rem;\n  color: var(--accent-teal);\n}\n\n/* Filter Menu */\n.filter-menu {\n  position: absolute;\n  z-index: 1;\n  align-self: flex-start;\n  border-right: 2px solid var(--accent-grey);\n  width: 60%;\n  height: 39.9rem;\n  padding: 0.5rem 0 0 0.5rem;\n  background: var(--transp-bg-light);\n  font-size: 1rem;\n}\n\nfieldset {\n  z-index: 2;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 1rem;\n  border: none;\n  width: 13rem;\n  height: 100%;\n}\n\nli {\n  align-content: center;\n  margin: 0.5rem 0.9rem;\n  text-align: center;\n}\n\ninput[type=\"checkbox\"] {\n  display: none;\n}\n\ninput[type=\"submit\"] {\n  align-self: center;\n  margin-top: 1rem;\n  font-size: 1rem;\n  letter-spacing: 0.3rem;\n}\n\ninput[type=\"submit\"]:hover {\n  box-shadow: 0 0 5px var(--white);\n  text-shadow: 0 0 3px var(--white);\n}\n\n/* Message Bar */\n.message-bar {\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.3rem;\n  width: 100%;\n  height: 5vh;\n  padding: 0.5rem 0;\n  background-color: var(--accent-darkred);\n  line-height: 1.2rem;\n}\n\n.message-bar h2 {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: 200;\n}\n\n/* Main */\nmain {\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 100vh;\n  background: var(--bg-dark);\n}\n\n.error-view {\n  justify-content: center;\n  align-content: center;\n}\n\n.error-message {\n  margin: 3rem;\n  text-align: center;\n  font-size: 4rem;\n}\n\n/* Recipe Card */\n.recipe-card {\n  position: relative;\n  z-index: 1;\n  margin: 1rem 0;\n  border-radius: 0 0 15px 15px;\n  min-height: 12rem;\n  width: 20rem;\n}\n\n.recipe-card img {\n  position: absolute;\n  border-radius: 0 0 15px 15px;\n  height: 100%;\n  width: 100%;\n}\n\n.recipe-card-info {\n  z-index: 1;\n  max-height: 4rem;\n  width: 100%;\n  background: rgba(50, 50, 51, 0.9);\n}\n\n.recipe-tag-container {\n  justify-content: center;\n  width: 15.5rem;\n  height: 100%;\n  text-align: center;\n}\n\n.recipe-name {\n  min-width: 100%;\n  padding-left: 0.5rem;\n  font-size: 1.4rem;\n  word-break: break-all;\n}\n\n.tag-container {\n  position: absolute;\n  top: 34%;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: 0.2rem;\n  width: 80%;\n  padding: 0.4rem 0;\n}\n\n.tags {\n  margin: 0 0.3rem 0.5rem 0;\n  border-radius: 15px;\n  padding: 0 0.5rem 0.1rem 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 300;\n  background: var(--accent-teal);\n}\n\n.recipe-card-buttons-container {\n  position: absolute;\n  align-items: center;\n  align-self: flex-end;\n  justify-content: space-around;\n  height: 60%;\n  width: 3rem;\n}\n\n.recipe-card-buttons-container button {\n  padding: 0 0.2rem;\n  font-size: 1.8rem;\n}\n\n/* Recipe View */\n\n.recipe-card-all {\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.full-recipe-view .recipe-card img {\n  align-content: flex-end;\n  border-radius: 15px 15px 0 0;\n}\n\n.full-recipe-view .full-recipe-info h4 {\n  margin-bottom: 0.4rem 0;\n  text-decoration: underline;\n}\n\n.total-cost {\n  z-index: 1;\n  align-self: flex-end;\n  height: 1.5rem;\n  width: 100%;\n  padding: 0 0.4rem;\n  font-size: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.total-cost h5 {\n  margin-right: 0.3rem;\n  font-size: 1rem;\n}\n\n.full-recipe-view .recipe-card-buttons-container {\n  align-self: flex-start;\n  justify-content: space-evenly;\n  border-radius: 15px 0 0 0;\n  height: 100%;\n  padding-bottom: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.full-recipe-info {\n  justify-content: center;\n  width: 85%;\n  padding: 0.3rem 0.5rem;\n  background: var(--bg-light);\n  font-size: 1rem;\n}\n\n.instructions-info {\n  text-align: justify;\n}\n\n.ingredients-info p,\n.instructions-info p {\n  margin-bottom: 0.4rem;\n}\n\n.tag-container-full {\n  align-content: center;\n  justify-content: center;\n  border-bottom: var(--bg-light) 3px solid;\n  z-index: 2;\n  height: 10%;\n}\n\n.tag-container-full .tags {\n  margin-top: 0.5rem;\n  padding: 0.125rem 0.8rem;\n  font-size: 0.5rem;\n}\n\n/* Footer */\nfooter {\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 0.4rem;\n}\n\n.search-bar {\n  margin: 0 0.2rem;\n  border-radius: 5px;\n  height: 2.4rem;\n  width: 75%;\n  padding: 0.4rem;\n}\n\n.search-btn {\n  z-index: 2;\n  border-radius: 50%;\n  padding: 0.5rem;\n  background-color: var(--transp-teal);\n  font-size: 1.3rem;\n  color: var(--white);\n}\n\ninput:checked + .tags {\n  background: var(--accent-blue);\n  color: var(--accent-red);\n}\n\n@media (min-width: 376px) {\n  .display-desktop {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n  }\n\n  .hidden {\n    display: none;\n  }\n  .message-bar {\n    height: 7vh;\n  }\n  .message-bar h2 {\n    font-size: 1.8rem;\n  }\n\n  .error-view {\n    padding: 0 1rem;\n  }\n\n  .filter-menu {\n    align-items: center;\n    height: 77.8%;\n    max-width: 40%;\n    padding: 0;\n    padding-bottom: 1rem;\n  }\n\n  fieldset {\n    width: auto;\n    max-height: 80%;\n    margin-top: 0;\n  }\n\n  li {\n    padding: 0;\n  }\n  .recipe-card {\n    margin-right: 1rem;\n  }\n\n  .total-cost {\n    justify-content: flex-end;\n    background: var(--bg-dark);\n  }\n\n  .total-cost p,\n  .total-cost h5,\n  .full-recipe-info {\n    font-size: 1.5rem;\n  }\n\n  .full-recipe-view .recipe-card {\n    align-self: center;\n    margin-right: 0;\n    height: 15rem;\n    width: 85%;\n  }\n\n  .full-recipe-view .recipe-card img {\n    background: center center/cover no-repeat;\n  }\n\n  .tag-container-full {\n    height: 15%;\n  }\n\n  .tag-container-full .tags {\n    font-size: 1rem;\n  }\n\n  footer .icon-small,\n  footer .icon {\n    font-size: 2rem;\n  }\n\n  .search-bar {\n    height: 3rem;\n    width: 80%;\n    font-size: 1.5rem;\n  }\n\n  .error-message {\n    margin: 10rem;\n  }\n\n  h1:hover,\n  .exit-card:hover,\n  .heart-card:hover,\n  .calendar-card:hover,\n  .filter-btn:hover,\n  .search-btn:hover {\n    color: var(--accent-red);\n  }\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
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
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let usersData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .catch(err => console.log('error'));

let ingredientData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/ingredients")
  .then(response => response.json())
  .catch(err => console.log('error'));

let recipeData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/recipes")
  .then(response => response.json())
  .catch(err => console.log('error'));

function retrieveData() {
  return Promise.all([usersData(), ingredientData(), recipeData()])
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({retrieveData});


/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/***/ ((module) => {

/* eslint-disable max-len */
class Recipe {
  constructor(recipeDetails, ingredientList) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.name = recipeDetails.name.toLowerCase().split(' ');
    this.instructions = recipeDetails.instructions;
    this.tags = recipeDetails.tags;
    this.ingredients = this.fetchIngredients(recipeDetails.ingredients, ingredientList);
    this.ingredientNames = this.getIngredientNames();
    this.isFavorited = false;
    this.isToBeCooked = false;
  }

  fetchIngredients(recipeIngredients, ingredientList) {
    return recipeIngredients.map((recipeIngredient) => {
      let newIngredientInfo = ingredientList.find((ingredient) => {
        return ingredient.id === recipeIngredient.id;
      })
      recipeIngredient.name = newIngredientInfo.name;
      recipeIngredient.estimatedCostInCents = newIngredientInfo.estimatedCostInCents;
      return recipeIngredient;
    });
  }

  getIngredientNames() {
    return this.ingredients.reduce((acc, ingredient) => {
      let separatedNames = ingredient.name.split(' ')
      separatedNames.forEach((name) => {
        acc.push(name);
      })
      return acc;
    }, [])
  }

  getTotalCost() {
    return this.ingredients.reduce((accumulator, ingredient) => {
      accumulator += ingredient.estimatedCostInCents * ingredient.quantity.amount;
      return accumulator;
    }, 0);
  }

  getInstructions() {
    return this.instructions.map((instruction) => {
      return `${instruction.number}. ${instruction.instruction}`;
    })
  }

  favorite() {
    this.isFavorited = true;
  }

  unFavorite() {
    this.isFavorited = false;
  }

  toCook() {
    this.isToBeCooked = true;
  }

  removeToCook() {
    this.isToBeCooked = false;
  }
}

module.exports = Recipe;


/***/ }),

/***/ "./src/classes/RecipeRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeRepository.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  filterRecipes(queryInfo) {
    if (queryInfo.query.length > 0) {
      let totalFilteredRecipes = queryInfo.query.reduce((accumulator, query) => {
        accumulator = accumulator.filter((recipe) => {
          return recipe[queryInfo.type].includes(query)
        })
        return accumulator;
      }, this.recipes);
      return totalFilteredRecipes;
    } else {
      return [];
    }
  }
  generateAllRecipeNames() {
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.name.forEach((word) => {
        acc.push(word);
      })
      return acc;
    }, [])
    return result;
  }
  generateAllIngredientNames() {
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.ingredientNames.forEach((ingredient) => {
        acc.push(ingredient)
      })
      return acc;
    }, [])
    return result;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeRepository);


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecipeRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecipeRepository */ "./src/classes/RecipeRepository.js");


class User {
  constructor(userInfo) {
    this.favoriteRecipes = new _RecipeRepository__WEBPACK_IMPORTED_MODULE_0__.default([]);
    this.recipesToCook = new _RecipeRepository__WEBPACK_IMPORTED_MODULE_0__.default([]);
    this.name = userInfo.name;
    this.id = userInfo.id;
  }

  addFavoriteRecipe(recipe) {
    if (!this.favoriteRecipes.recipes.includes(recipe)) {
      this.favoriteRecipes.recipes.push(recipe);
      recipe.favorite();
    }
  }

  removeFavoriteRecipe(clickedRecipe) {
    let index = this.favoriteRecipes.recipes.findIndex((recipe) => {
      return recipe.id === clickedRecipe.id;
    })
    if (index !== -1) {
      this.favoriteRecipes.recipes.splice(index, 1);
      clickedRecipe.unFavorite();
    }
  }

  filterFavoriteRecipes(queryInfo) {
    return this.favoriteRecipes.filterRecipes(queryInfo);
  }

  addRecipeToCookThisWeek(recipe) {
    if (!this.recipesToCook.recipes.includes(recipe)) {
      this.recipesToCook.recipes.push(recipe);
      recipe.toCook();
    }
  }

  removeRecipeToCookThisWeek(clickedRecipe) {
    let index = this.recipesToCook.recipes.findIndex((recipe) => {
      return recipe.id === clickedRecipe.id;
    })
    if (index !== -1) {
      this.recipesToCook.recipes.splice(index, 1);
      clickedRecipe.removeToCook();
    }
  }

};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Recipe.js */ "./src/classes/Recipe.js");
/* harmony import */ var _classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_RecipeRepository_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/RecipeRepository.js */ "./src/classes/RecipeRepository.js");
/* harmony import */ var _classes_User_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/User.js */ "./src/classes/User.js");
/* eslint-disable max-len */






// querySelectors
const mainRecipes = document.querySelector('#mainRecipes');
const mainSection = document.querySelector('#mainSection');
const filter = document.querySelector('#filter')
const filterMenu = document.querySelector('#filterMenu')
const tagCheckBox = document.querySelectorAll('input[type="checkbox"]')
const filterSubmitBtn = document.querySelector('#filterSubmitBtn')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const fullRecipeSection = document.querySelector('#fullRecipeView');
const messageBar = document.querySelector('#messageBar');
const favoritesViewButton = document.querySelector('#favoritesViewButton');
const toCookViewButton = document.querySelector('#toCookViewButton');
const homeButton = document.querySelector('#homeView')
const footer = document.querySelector('footer')

//global variables
let currentRecipeRepo;
let originalRecipeRepo;
let currentUser;
let counter = 0;
let isLoaded = false;
let currentMessage;

// event listeners
window.onload = generateStartingInformation()
searchButton.addEventListener('click', searchThroughRecipes)
filter.addEventListener('click', toggleFilterMenu)
filterSubmitBtn.addEventListener('click', searchByTag)
mainSection.addEventListener('click', determineRecipeCardAction)
favoritesViewButton.addEventListener('click', showFavoritesView)
toCookViewButton.addEventListener('click', showToCookView)
homeButton.addEventListener('click', showHomeView)

function generateStartingInformation() {
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__.default.retrieveData()
    .then((promise) => {
      let num = getRandomNumber(promise[0]['usersData'].length)
      currentUser = new _classes_User_js__WEBPACK_IMPORTED_MODULE_4__.default(promise[0]['usersData'][num])
      let ingredients = promise[1]['ingredientsData']
      let recipes = promise[2]['recipeData']
      let formattedRecipes = recipes.map((recipe) => {
        let newRecipe = new (_classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2___default())(recipe, ingredients)
        return newRecipe
      })
      originalRecipeRepo = new _classes_RecipeRepository_js__WEBPACK_IMPORTED_MODULE_3__.default(formattedRecipes, ingredients);
      showHomeView();
      isLoaded = true;
    })
}

//switch views functions
function showFavoritesView() {
  hide(fullRecipeSection);
  currentMessage = `<h2>Your Favorite Recipes</h2>`;
  messageBar.innerHTML = currentMessage;
  currentRecipeRepo = currentUser.favoriteRecipes;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}

function showToCookView() {
  hide(fullRecipeSection);
  currentMessage = `<h2>Your Recipes to Cook</h2>`;
  messageBar.innerHTML = currentMessage;
  currentRecipeRepo = currentUser.recipesToCook;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}

function showHomeView() {
  hide(fullRecipeSection);
  currentMessage = `<h2>All Recipes</h2>`;
  !isLoaded ? messageBar.innerHTML = `<h2>Hello, ${currentUser.name}</h2>` : messageBar.innerHTML = currentMessage;
  currentRecipeRepo = originalRecipeRepo;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}


function showFullRecipeView(id) {
  renderFullRecipeInfo(id);
  hide([footer, mainRecipes, searchBar, searchButton])
  show(fullRecipeSection);
}

//card button event handlers
function determineRecipeCardAction(event) {
  let id = 0;
  if (event.target.closest('.recipe-card')) {
    id = parseInt(event.target.closest('.recipe-card').id);
  }
  if (event.target.parentElement.classList.contains('favorite-recipe')) {
    determineFavoriteOrUnfavorite(id, event);
  } else if (event.target.parentElement.classList.contains('this-week-recipe')) {
    determineAddOrRemoveToCook(id, event);
  } else if (event.target.parentElement.className === 'exit-button') {
    showHomeView();
  } else if (id) {
    showFullRecipeView(id);
  }
}

function determineFavoriteOrUnfavorite(id, event) {
  let clickedRecipe = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  if (!currentUser.favoriteRecipes.recipes.includes(clickedRecipe)) {
    event.target.parentElement.classList.add('icon-on');
    currentUser.addFavoriteRecipe(clickedRecipe);
    messageBar.innerHTML = `<h2>Favorited!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = currentMessage;
    }, 1000);
  } else {
    currentUser.removeFavoriteRecipe(clickedRecipe)
    messageBar.innerHTML = `<h2>Unfavorited!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = currentMessage;
    }, 1000);
    renderRecipes(currentRecipeRepo.recipes);
  }
}

function determineAddOrRemoveToCook(id, event) {
  let clickedRecipe = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  if (!currentUser.recipesToCook.recipes.includes(clickedRecipe)) {
    event.target.parentElement.classList.add('icon-on');
    currentUser.addRecipeToCookThisWeek(clickedRecipe);
    messageBar.innerHTML = `<h2>Added to Recipes to Cook!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = `<h2>All Recipes</h2>`
    }, 1000);
  } else {
    currentUser.removeRecipeToCookThisWeek(clickedRecipe)
    messageBar.innerHTML = `<h2>Removed from Recipes to Cook!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = `<h2>All Recipes</h2>`
    }, 1000);
    renderRecipes(currentRecipeRepo.recipes);
  }
}
//search functions
function searchThroughRecipes() {
  let userSearch = searchBar.value;
  let convertedUserSearch = convertUserInfo(userSearch)
  let uniqueFilteredRecipes = generateFilteredRecipes(convertedUserSearch);
  if (uniqueFilteredRecipes.length) {
    renderRecipes(uniqueFilteredRecipes);
  } else {
    mainRecipes.innerHTML =
    `
      <p class="error-message">Oops could not find any recipes that matched 😦</p>
    `
  }
  searchBar.value = '';
}

function convertUserInfo(userSearch) {
  let alteredUserSearch = userSearch.split(' '). map((word) => {
    return word.toLowerCase();
  });
  let convertedUserSearch = determineSearchType(alteredUserSearch);
  return convertedUserSearch;
}

function determineSearchType(alteredUserSearch) {
  let searchInfo = alteredUserSearch.reduce((acc, word) => {
    let allRecipeNames = currentRecipeRepo.generateAllRecipeNames();
    let allIngredientNames = currentRecipeRepo.generateAllIngredientNames();
    if (allRecipeNames.includes(word)) {
      acc.name.query.push(word);
    }
    if (allIngredientNames.includes(word)) {
      acc.ingredientNames.query.push(word);
    }
    return acc;
  }, {name: {type: 'name', query: []}, ingredientNames: {type: 'ingredientNames', query: []}})
  return searchInfo;
}

function generateFilteredRecipes(convertedUserSearch) {
  let filteredRecipesByName = currentRecipeRepo.filterRecipes(convertedUserSearch.name);
  let filteredRecipesByIngredient = currentRecipeRepo.filterRecipes(convertedUserSearch.ingredientNames);
  let allFilteredRecipes = filteredRecipesByName.concat(filteredRecipesByIngredient);
  return [...new Set(allFilteredRecipes)];
}

function searchByTag(e) {
  e.preventDefault();
  let tagSearchInfo = {type: 'tags', query: []}
  tagCheckBox.forEach((tag) => {
    tag.checked ? tagSearchInfo.query.push(tag.value) : null
    tag.checked = false;
  })
  let filteredRecipes = currentRecipeRepo.filterRecipes(tagSearchInfo);
  hide(filterMenu);
  if (filteredRecipes.length) {
    renderRecipes(filteredRecipes);
  } else {
    mainRecipes.innerHTML =
    `
      <p class="error-message">Oops could not find any recipes that matched 😦</p>
    `
  }
}

//render functions
function renderRecipes(recipes) {
  mainRecipes.innerHTML = ``;
  recipes.forEach((recipe) => {
    let tags = recipe.tags.map((tag) => {
      return `<h4 class="tags flex-column">${tag}</h4>`
    })
    let recipeNames = recipe.name.map((name) => {
      return name[0].toUpperCase() + name.substring(1);
    }).join(' ');
    let favoriteButtonClass = `favorite-recipe`
    let calendarButtonClass = `this-week-recipe`
    if (recipe.isFavorited) {
      favoriteButtonClass = `favorite-recipe icon-on`
    }
    if (recipe.isToBeCooked) {
      calendarButtonClass = `this-week-recipe icon-on`
    }
    mainRecipes.innerHTML +=
    `
      <article class="recipe-card flex-row" id="${recipe.id}" >
        <img src=${recipe.image} alt="A picture of a dish called ${recipeNames}"/>
        <div class="recipe-card-info flex-column">
         <div class="recipe-tag-container flex-column">
            <p class="recipe-name">${recipeNames}</p>
            <div class="tag-container flex-row">
              ${tags}
            </div>
        </div>
        <div class="recipe-card-buttons-container flex-column">
          <button class="${favoriteButtonClass}">
            <i class="heart-card fas fa-heart"></i>
          </button>
          <button class="${calendarButtonClass}">
            <i class="calendar-card fas fa-calendar-alt"></i>
          </button>
        </div>
        </article>
    `
  })
}

function renderFullRecipeInfo(id) {
  let recipeToRender = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  let recipeToRenderInfo = convertRecipeToRender(recipeToRender);
  currentMessage = `<h2>${recipeToRenderInfo.name}</h2>`
  messageBar.innerHTML = currentMessage;
  fullRecipeSection.innerHTML =
  ` <div class="tag-container-full flex-row">
    ${recipeToRenderInfo.tags}
    </div>
    <article class="recipe-card-all flex-column" >
      <div class="recipe-card flex-row" id="${recipeToRender.id}">
        <img src=${recipeToRender.image} alt="A picture of a dish called ${recipeToRenderInfo.name}"/>
        <div class="recipe-card-buttons-container flex-column">
          <button class="exit-button" id="exitButton">
            <i class="exit-card fas fa-times"></i>
          </button>
          <button class="${recipeToRenderInfo.favoriteButtonClass}">
            <i class="heart-card fas fa-heart"></i>
          </button>
          <button class="${recipeToRenderInfo.calendarButtonClass}">
            <i class="calendar-card fas fa-calendar-alt"></i>
          </button>
        </div>
        <div class="total-cost flex-row" id="totalCost">
          <h5>Estimated Cost </h5>
          <p>${recipeToRenderInfo.totalCost}</p>
        </div>
      </div>
      <section class="full-recipe-info flex-column" id="fullRecipeInfo">
        <div class="recipePriceContainer flex-row">
          <div class="ingredients-info" id=ingredientsInfo>
            <h4>Ingredients</h4>
            <p> ${recipeToRenderInfo.ingredients}</p>
          </div>
        </div>
        <div class="instructions-info flex-column" id="totalCost">
          <h4>Instructions</h4>
          <p>${recipeToRenderInfo.fixedInstructions}</p>
        </div>
      </section>
    </article>
  `
}

function convertRecipeToRender(recipeToRender) {
  let tags = recipeToRender.tags.map((tag) => {
    return `<h4 class="tags flex-column">${tag}</h4>`
  }).join(' ');
  let ingredients = recipeToRender.ingredients.map((ingredient) => {
    return `<p class="ingredients flex-column">${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name}</p>`
  }).join(' ');
  let instructions = recipeToRender.getInstructions();
  let fixedInstructions = instructions.map((instruction) => {
    return `<p class="instructions flex-column">${instruction}</p>`
  }).join('  ');
  let name = recipeToRender.name.map((name) => {
    return name[0].toUpperCase() + name.substring(1);
  }).join(' ');
  let totalCost = convertTotalCost(recipeToRender);
  let favoriteButtonClass = `favorite-recipe`
  let calendarButtonClass = `this-week-recipe`
  if (recipeToRender.isFavorited) {
    favoriteButtonClass = `favorite-recipe icon-on`
  }
  if (recipeToRender.isToBeCooked) {
    calendarButtonClass = `this-week-recipe icon-on`
  }
  let recipeToRenderInfo = {tags, ingredients, fixedInstructions, name, totalCost, favoriteButtonClass, calendarButtonClass};
  return recipeToRenderInfo;
}

function convertTotalCost(recipeToRender) {
  let totalCost = recipeToRender.getTotalCost();
  let dollars = Math.floor(totalCost / 100);
  return `$${dollars}`;
}

//other functions
function getRandomNumber(max) {
  var number = Math.floor(Math.random() * (max - 1) + 1);
  return number;
}

function toggleFilterMenu() {
  if (!(counter % 2)) {
    show(filterMenu);
    counter ++;
  } else {
    hide(filterMenu);
    counter ++;
  }
}

function show(e) {
  if (e.length > 0) {
    e.forEach((element) => {
      element.classList.remove('hidden')
    })
  } else {
    e.classList.remove('hidden')
  }
}

function hide(e) {
  if (e.length > 0) {
    e.forEach((element) => {
      element.classList.add('hidden')
    })
  } else {
    e.classList.add('hidden')
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxXQUFX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QUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUNBQXFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxJQUFJO0FBQy9DLEdBQUc7QUFDSDtBQUNBLGlEQUFpRCw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSxnQkFBZ0I7QUFDM0gsR0FBRztBQUNIO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFpbnMtb2YtcGFyYWRpc2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9ncmFpbnMtb2YtcGFyYWRpc2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dyYWlucy1vZi1wYXJhZGlzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2dyYWlucy1vZi1wYXJhZGlzZS8uL3NyYy9zdHlsZXMuY3NzPzIzZGUiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dyYWlucy1vZi1wYXJhZGlzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dyYWlucy1vZi1wYXJhZGlzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncmFpbnMtb2YtcGFyYWRpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ncmFpbnMtb2YtcGFyYWRpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ncmFpbnMtb2YtcGFyYWRpc2UvLi9zcmMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlLy4vc3JjL2NsYXNzZXMvUmVjaXBlLmpzIiwid2VicGFjazovL2dyYWlucy1vZi1wYXJhZGlzZS8uL3NyYy9jbGFzc2VzL1JlY2lwZVJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlLy4vc3JjL2NsYXNzZXMvVXNlci5qcyIsIndlYnBhY2s6Ly9ncmFpbnMtb2YtcGFyYWRpc2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dyYWlucy1vZi1wYXJhZGlzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JhaW5zLW9mLXBhcmFkaXNlLy4vc3JjL3NjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWxpZ2h0OiByZ2JhKDUwLCA1MCwgNTEsIDEpO1xcbiAgLS1iZy1kYXJrOiByZ2JhKDI4LCAyOCwgMjksIDEpO1xcbiAgLS13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIC0tYWNjZW50LXJlZDogcmdiYSgyNTEsIDU0LCA2NCwgMSk7XFxuICAtLWFjY2VudC1ncmV5OiBoc2woMzAsIDElLCAzNyUpO1xcbiAgLS1hY2NlbnQtbmF2eTogcmdiYSgyOSwgNTIsIDY0LCAxKTtcXG4gIC0tYWNjZW50LWJsdWU6IHJnYmEoMzEsIDcyLCAxMjYsIDEpO1xcbiAgLS1hY2NlbnQtdGVhbDogcmdiYSgzNiwgMTIzLCAxNjAsIDAuOCk7XFxuICAtLWFjY2VudC1kYXJrcmVkOiByZ2IoMTE3LCA3LCAzNSwgMSk7XFxuICAtLXRyYW5zcC10ZWFsOiByZ2JhKDg0LCAxMjIsIDE3MiwgMC41KTtcXG4gIC0tdHJhbnNwLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIC0tdHJhbnNwLWJnLWxpZ2h0OiByZ2JhKDUwLCA1MCwgNTEsIDAuOSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMC4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb0hvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQpO1xcbn1cXG5cXG4vKiB1dGlsaXR5ICovXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LW5hdnkpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAwLjNyZW0gMy4zcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmtyZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jb2x1bW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSWNvbnMgKi9cXG4uaWNvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3AtdGVhbCk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmljb24tc21hbGwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5pY29uLW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tYWNjZW50LWdyZXkpIHNvbGlkO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcblxcbi5maWx0ZXItbG9nby1jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTByZW07XFxufVxcblxcbmhlYWRlciBpIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuaDEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG59XFxuXFxuaDEgcDpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5oMSBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlYXdlZWQgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuaDEgaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXRlYWwpO1xcbn1cXG5cXG4vKiBGaWx0ZXIgTWVudSAqL1xcbi5maWx0ZXItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1ncmV5KTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDM5LjlyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMCAwIDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC1iZy1saWdodCk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIHotaW5kZXg6IDI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTNyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmxpIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDAuOXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS13aGl0ZSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDNweCB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qIE1lc3NhZ2UgQmFyICovXFxuLm1lc3NhZ2UtYmFyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXZoO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZGFya3JlZCk7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubWVzc2FnZS1iYXIgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWRhcmspO1xcbn1cXG5cXG4uZXJyb3ItdmlldyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4vKiBSZWNpcGUgQ2FyZCAqL1xcbi5yZWNpcGUtY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xcbiAgbWluLWhlaWdodDogMTJyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcblxcbi5yZWNpcGUtY2FyZCBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQtaW5mbyB7XFxuICB6LWluZGV4OiAxO1xcbiAgbWF4LWhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUxLCAwLjkpO1xcbn1cXG5cXG4ucmVjaXBlLXRhZy1jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTUuNXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZS1uYW1lIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi50YWctY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzQlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xcbn1cXG5cXG4udGFncyB7XFxuICBtYXJnaW46IDAgMC4zcmVtIDAuNXJlbSAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtIDAuMXJlbSAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtdGVhbCk7XFxufVxcblxcbi5yZWNpcGUtY2FyZC1idXR0b25zLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblxcbi5yZWNpcGUtY2FyZC1idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLyogUmVjaXBlIFZpZXcgKi9cXG4ucmVjaXBlLWNhcmQtYWxsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZ1bGwtcmVjaXBlLXZpZXcgLnJlY2lwZS1jYXJkIGltZyB7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XFxufVxcblxcbi5mdWxsLXJlY2lwZS12aWV3IC5mdWxsLXJlY2lwZS1pbmZvIGg0IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbSAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50b3RhbC1jb3N0IHtcXG4gIHotaW5kZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC1iZy1saWdodCk7XFxufVxcblxcbi50b3RhbC1jb3N0IGg1IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZnVsbC1yZWNpcGUtdmlldyAucmVjaXBlLWNhcmQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwLWJnLWxpZ2h0KTtcXG59XFxuXFxuLmZ1bGwtcmVjaXBlLWluZm8ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmluc3RydWN0aW9ucy1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5pbmdyZWRpZW50cy1pbmZvIHAsXFxuLmluc3RydWN0aW9ucy1pbmZvIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4udGFnLWNvbnRhaW5lci1mdWxsIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYmctbGlnaHQpIDNweCBzb2xpZDtcXG4gIHotaW5kZXg6IDI7XFxuICBoZWlnaHQ6IDEwJTtcXG59XFxuXFxuLnRhZy1jb250YWluZXItZnVsbCAudGFncyB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDAgMC40cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBtYXJnaW46IDAgMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogNzUlO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICB6LWluZGV4OiAyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwLXRlYWwpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnRhZ3Mge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpIHtcXG4gIC5kaXNwbGF5LWRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm1lc3NhZ2UtYmFyIHtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICB9XFxuXFxuICAubWVzc2FnZS1iYXIgaDIge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG5cXG4gIC5lcnJvci12aWV3IHtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgfVxcblxcbiAgLmZpbHRlci1tZW51IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA3Ny44JTtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgZmllbGRzZXQge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbiAgbGkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnJlY2lwZS1jYXJkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgLnRvdGFsLWNvc3Qge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcXG4gIH1cXG5cXG4gIC50b3RhbC1jb3N0IHAsXFxuLnRvdGFsLWNvc3QgaDUsXFxuLmZ1bGwtcmVjaXBlLWluZm8ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5mdWxsLXJlY2lwZS12aWV3IC5yZWNpcGUtY2FyZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogODUlO1xcbiAgfVxcblxcbiAgLmZ1bGwtcmVjaXBlLXZpZXcgLnJlY2lwZS1jYXJkIGltZyB7XFxuICAgIGJhY2tncm91bmQ6IGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbiAgfVxcblxcbiAgLnRhZy1jb250YWluZXItZnVsbCB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgLnRhZy1jb250YWluZXItZnVsbCAudGFncyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciAuaWNvbi1zbWFsbCxcXG5mb290ZXIgLmljb24ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuc2VhcmNoLWJhciB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAuZXJyb3ItbWVzc2FnZSB7XFxuICAgIG1hcmdpbjogMTByZW07XFxuICB9XFxuXFxuICBoMTpob3ZlcixcXG4uZXhpdC1jYXJkOmhvdmVyLFxcbi5oZWFydC1jYXJkOmhvdmVyLFxcbi5jYWxlbmRhci1jYXJkOmhvdmVyLFxcbi5maWx0ZXItYnRuOmhvdmVyLFxcbi5zZWFyY2gtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUVBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUVBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7O0VBRUUsWUFBQTtFQUNBLDJCQUFBO0FBREY7O0FBSUEsWUFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUdBLFVBQUE7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJ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RUE7SUFDRSx5Q0FBQTtFQUNGOztFQUVBO0lBQ0UsV0FBQTtFQUNGOztFQUVBO0lBQ0UsZUFBQTtFQUNGOztFQUVBOztJQUVFLGVBQUE7RUFDRjs7RUFFQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUFDRjs7RUFFQTtJQUNFLGFBQUE7RUFDRjs7RUFFQTs7Ozs7O0lBTUUsd0JBQUE7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmctbGlnaHQ6IHJnYmEoNTAsIDUwLCA1MSwgMSk7XFxuICAtLWJnLWRhcms6IHJnYmEoMjgsIDI4LCAyOSwgMSk7XFxuICAtLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcblxcbiAgLS1hY2NlbnQtcmVkOiByZ2JhKDI1MSwgNTQsIDY0LCAxKTtcXG4gIC0tYWNjZW50LWdyZXk6IGhzbCgzMCwgMSUsIDM3JSk7XFxuICAtLWFjY2VudC1uYXZ5OiByZ2JhKDI5LCA1MiwgNjQsIDEpO1xcbiAgLS1hY2NlbnQtYmx1ZTogcmdiYSgzMSwgNzIsIDEyNiwgMSk7XFxuICAtLWFjY2VudC10ZWFsOiByZ2JhKDM2LCAxMjMsIDE2MCwgMC44KTtcXG4gIC0tYWNjZW50LWRhcmtyZWQ6IHJnYigxMTcsIDcsIDM1LCAxKTtcXG5cXG4gIC0tdHJhbnNwLXRlYWw6IHJnYmEoODQsIDEyMiwgMTcyLCAwLjUpO1xcbiAgLS10cmFuc3Atd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgLS10cmFuc3AtYmctbGlnaHQ6IHJnYmEoNTAsIDUwLCA1MSwgMC45KTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAwLjNyZW07XFxuICBmb250LWZhbWlseTogXFxcIktvSG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodCk7XFxufVxcblxcbi8qIHV0aWxpdHkgKi9cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtbmF2eSk7XFxufVxcblxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAzLjNyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZGFya3JlZCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiBJY29ucyAqL1xcblxcbi5pY29uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC10ZWFsKTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaWNvbi1zbWFsbCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmljb24tb24ge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1hY2NlbnQtZ3JleSkgc29saWQ7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG59XFxuXFxuLmZpbHRlci1sb2dvLWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuaGVhZGVyIGkge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oMSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEgcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xcbn1cXG5cXG5oMSBwOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmgxIHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vhd2VlZCBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG5oMSBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVhbCk7XFxufVxcblxcbi8qIEZpbHRlciBNZW51ICovXFxuLmZpbHRlci1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYWNjZW50LWdyZXkpO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogMzkuOXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAgMC41cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwLWJnLWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgei1pbmRleDogMjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxM3JlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjVyZW0gMC45cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLXdoaXRlKTtcXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyogTWVzc2FnZSBCYXIgKi9cXG4ubWVzc2FnZS1iYXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1kYXJrcmVkKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcbi5tZXNzYWdlLWJhciBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XFxufVxcblxcbi5lcnJvci12aWV3IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICBtYXJnaW46IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi8qIFJlY2lwZSBDYXJkICovXFxuLnJlY2lwZS1jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XFxuICBtaW4taGVpZ2h0OiAxMnJlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUtY2FyZC1pbmZvIHtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXgtaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTEsIDAuOSk7XFxufVxcblxcbi5yZWNpcGUtdGFnLWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNS41cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVjaXBlLW5hbWUge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLnRhZy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzNCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogMC40cmVtIDA7XFxufVxcblxcbi50YWdzIHtcXG4gIG1hcmdpbjogMCAwLjNyZW0gMC41cmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMCAwLjVyZW0gMC4xcmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC10ZWFsKTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwIDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4vKiBSZWNpcGUgVmlldyAqL1xcblxcbi5yZWNpcGUtY2FyZC1hbGwge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZnVsbC1yZWNpcGUtdmlldyAucmVjaXBlLWNhcmQgaW1nIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXG59XFxuXFxuLmZ1bGwtcmVjaXBlLXZpZXcgLmZ1bGwtcmVjaXBlLWluZm8gaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtIDA7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnRvdGFsLWNvc3Qge1xcbiAgei1pbmRleDogMTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMC40cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwLWJnLWxpZ2h0KTtcXG59XFxuXFxuLnRvdGFsLWNvc3QgaDUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5mdWxsLXJlY2lwZS12aWV3IC5yZWNpcGUtY2FyZC1idXR0b25zLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3AtYmctbGlnaHQpO1xcbn1cXG5cXG4uZnVsbC1yZWNpcGUtaW5mbyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWluZm8ge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmluZ3JlZGllbnRzLWluZm8gcCxcXG4uaW5zdHJ1Y3Rpb25zLWluZm8gcCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi50YWctY29udGFpbmVyLWZ1bGwge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1iZy1saWdodCkgM3B4IHNvbGlkO1xcbiAgei1pbmRleDogMjtcXG4gIGhlaWdodDogMTAlO1xcbn1cXG5cXG4udGFnLWNvbnRhaW5lci1mdWxsIC50YWdzIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMCAwLjRyZW07XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIG1hcmdpbjogMCAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiA3NSU7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIHotaW5kZXg6IDI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3AtdGVhbCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAudGFncyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzNzZweCkge1xcbiAgLmRpc3BsYXktZGVza3RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubWVzc2FnZS1iYXIge1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gIH1cXG4gIC5tZXNzYWdlLWJhciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgfVxcblxcbiAgLmVycm9yLXZpZXcge1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICB9XFxuXFxuICAuZmlsdGVyLW1lbnUge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDc3LjglO1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICBmaWVsZHNldCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuXFxuICBsaSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAucmVjaXBlLWNhcmQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB9XFxuXFxuICAudG90YWwtY29zdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWRhcmspO1xcbiAgfVxcblxcbiAgLnRvdGFsLWNvc3QgcCxcXG4gIC50b3RhbC1jb3N0IGg1LFxcbiAgLmZ1bGwtcmVjaXBlLWluZm8ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5mdWxsLXJlY2lwZS12aWV3IC5yZWNpcGUtY2FyZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogODUlO1xcbiAgfVxcblxcbiAgLmZ1bGwtcmVjaXBlLXZpZXcgLnJlY2lwZS1jYXJkIGltZyB7XFxuICAgIGJhY2tncm91bmQ6IGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbiAgfVxcblxcbiAgLnRhZy1jb250YWluZXItZnVsbCB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgLnRhZy1jb250YWluZXItZnVsbCAudGFncyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciAuaWNvbi1zbWFsbCxcXG4gIGZvb3RlciAuaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtYmFyIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5lcnJvci1tZXNzYWdlIHtcXG4gICAgbWFyZ2luOiAxMHJlbTtcXG4gIH1cXG5cXG4gIGgxOmhvdmVyLFxcbiAgLmV4aXQtY2FyZDpob3ZlcixcXG4gIC5oZWFydC1jYXJkOmhvdmVyLFxcbiAgLmNhbGVuZGFyLWNhcmQ6aG92ZXIsXFxuICAuZmlsdGVyLWJ0bjpob3ZlcixcXG4gIC5zZWFyY2gtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCB1c2Vyc0RhdGEgPSAoKSA9PiBmZXRjaChcImh0dHBzOi8vd2hhdHMtY29va2luLWFwaS10eWxycy5oZXJva3VhcHAuY29tL2FwaS92MS91c2Vyc1wiKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJykpO1xuXG5sZXQgaW5ncmVkaWVudERhdGEgPSAoKSA9PiBmZXRjaChcImh0dHBzOi8vd2hhdHMtY29va2luLWFwaS10eWxycy5oZXJva3VhcHAuY29tL2FwaS92MS9pbmdyZWRpZW50c1wiKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJykpO1xuXG5sZXQgcmVjaXBlRGF0YSA9ICgpID0+IGZldGNoKFwiaHR0cHM6Ly93aGF0cy1jb29raW4tYXBpLXR5bHJzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3JlY2lwZXNcIilcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicpKTtcblxuZnVuY3Rpb24gcmV0cmlldmVEYXRhKCkge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoW3VzZXJzRGF0YSgpLCBpbmdyZWRpZW50RGF0YSgpLCByZWNpcGVEYXRhKCldKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7cmV0cmlldmVEYXRhfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZURldGFpbHMsIGluZ3JlZGllbnRMaXN0KSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZURldGFpbHMuaWQ7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZURldGFpbHMuaW1hZ2U7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlRGV0YWlscy5uYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZURldGFpbHMuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZURldGFpbHMudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gdGhpcy5mZXRjaEluZ3JlZGllbnRzKHJlY2lwZURldGFpbHMuaW5ncmVkaWVudHMsIGluZ3JlZGllbnRMaXN0KTtcbiAgICB0aGlzLmluZ3JlZGllbnROYW1lcyA9IHRoaXMuZ2V0SW5ncmVkaWVudE5hbWVzKCk7XG4gICAgdGhpcy5pc0Zhdm9yaXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNUb0JlQ29va2VkID0gZmFsc2U7XG4gIH1cblxuICBmZXRjaEluZ3JlZGllbnRzKHJlY2lwZUluZ3JlZGllbnRzLCBpbmdyZWRpZW50TGlzdCkge1xuICAgIHJldHVybiByZWNpcGVJbmdyZWRpZW50cy5tYXAoKHJlY2lwZUluZ3JlZGllbnQpID0+IHtcbiAgICAgIGxldCBuZXdJbmdyZWRpZW50SW5mbyA9IGluZ3JlZGllbnRMaXN0LmZpbmQoKGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQ7XG4gICAgICB9KVxuICAgICAgcmVjaXBlSW5ncmVkaWVudC5uYW1lID0gbmV3SW5ncmVkaWVudEluZm8ubmFtZTtcbiAgICAgIHJlY2lwZUluZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMgPSBuZXdJbmdyZWRpZW50SW5mby5lc3RpbWF0ZWRDb3N0SW5DZW50cztcbiAgICAgIHJldHVybiByZWNpcGVJbmdyZWRpZW50O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5ncmVkaWVudE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBsZXQgc2VwYXJhdGVkTmFtZXMgPSBpbmdyZWRpZW50Lm5hbWUuc3BsaXQoJyAnKVxuICAgICAgc2VwYXJhdGVkTmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBhY2MucHVzaChuYW1lKTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZ2V0VG90YWxDb3N0KCkge1xuICAgIHJldHVybiB0aGlzLmluZ3JlZGllbnRzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGFjY3VtdWxhdG9yICs9IGluZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMgKiBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudDtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGdldEluc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbnMubWFwKChpbnN0cnVjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIGAke2luc3RydWN0aW9uLm51bWJlcn0uICR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259YDtcbiAgICB9KVxuICB9XG5cbiAgZmF2b3JpdGUoKSB7XG4gICAgdGhpcy5pc0Zhdm9yaXRlZCA9IHRydWU7XG4gIH1cblxuICB1bkZhdm9yaXRlKCkge1xuICAgIHRoaXMuaXNGYXZvcml0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvQ29vaygpIHtcbiAgICB0aGlzLmlzVG9CZUNvb2tlZCA9IHRydWU7XG4gIH1cblxuICByZW1vdmVUb0Nvb2soKSB7XG4gICAgdGhpcy5pc1RvQmVDb29rZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY2lwZTtcbiIsImNsYXNzIFJlY2lwZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcihyZWNpcGVzKSB7XG4gICAgdGhpcy5yZWNpcGVzID0gcmVjaXBlc1xuICB9XG4gIGZpbHRlclJlY2lwZXMocXVlcnlJbmZvKSB7XG4gICAgaWYgKHF1ZXJ5SW5mby5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdG90YWxGaWx0ZXJlZFJlY2lwZXMgPSBxdWVyeUluZm8ucXVlcnkucmVkdWNlKChhY2N1bXVsYXRvciwgcXVlcnkpID0+IHtcbiAgICAgICAgYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvci5maWx0ZXIoKHJlY2lwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZWNpcGVbcXVlcnlJbmZvLnR5cGVdLmluY2x1ZGVzKHF1ZXJ5KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LCB0aGlzLnJlY2lwZXMpO1xuICAgICAgcmV0dXJuIHRvdGFsRmlsdGVyZWRSZWNpcGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlQWxsUmVjaXBlTmFtZXMoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucmVjaXBlcy5yZWR1Y2UoKGFjYywgcmVjaXBlKSA9PiB7XG4gICAgICByZWNpcGUubmFtZS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKHdvcmQpO1xuICAgICAgfSlcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBnZW5lcmF0ZUFsbEluZ3JlZGllbnROYW1lcygpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZWNpcGVzLnJlZHVjZSgoYWNjLCByZWNpcGUpID0+IHtcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50TmFtZXMuZm9yRWFjaCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgICBhY2MucHVzaChpbmdyZWRpZW50KVxuICAgICAgfSlcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVSZXBvc2l0b3J5O1xuIiwiaW1wb3J0IFJlY2lwZVJlcG9zaXRvcnkgZnJvbSAnLi9SZWNpcGVSZXBvc2l0b3J5JztcblxuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJJbmZvKSB7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBuZXcgUmVjaXBlUmVwb3NpdG9yeShbXSk7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gbmV3IFJlY2lwZVJlcG9zaXRvcnkoW10pO1xuICAgIHRoaXMubmFtZSA9IHVzZXJJbmZvLm5hbWU7XG4gICAgdGhpcy5pZCA9IHVzZXJJbmZvLmlkO1xuICB9XG5cbiAgYWRkRmF2b3JpdGVSZWNpcGUocmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLmZhdm9yaXRlUmVjaXBlcy5yZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgICAgcmVjaXBlLmZhdm9yaXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRmF2b3JpdGVSZWNpcGUoY2xpY2tlZFJlY2lwZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZmF2b3JpdGVSZWNpcGVzLnJlY2lwZXMuZmluZEluZGV4KChyZWNpcGUpID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUuaWQgPT09IGNsaWNrZWRSZWNpcGUuaWQ7XG4gICAgfSlcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5yZWNpcGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBjbGlja2VkUmVjaXBlLnVuRmF2b3JpdGUoKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJGYXZvcml0ZVJlY2lwZXMocXVlcnlJbmZvKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlclJlY2lwZXMocXVlcnlJbmZvKTtcbiAgfVxuXG4gIGFkZFJlY2lwZVRvQ29va1RoaXNXZWVrKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5yZWNpcGVzVG9Db29rLnJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5yZWNpcGVzVG9Db29rLnJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgICAgcmVjaXBlLnRvQ29vaygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVJlY2lwZVRvQ29va1RoaXNXZWVrKGNsaWNrZWRSZWNpcGUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnJlY2lwZXNUb0Nvb2sucmVjaXBlcy5maW5kSW5kZXgoKHJlY2lwZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS5pZCA9PT0gY2xpY2tlZFJlY2lwZS5pZDtcbiAgICB9KVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucmVjaXBlc1RvQ29vay5yZWNpcGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBjbGlja2VkUmVjaXBlLnJlbW92ZVRvQ29vaygpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGFwaUNhbGxzIGZyb20gJy4vYXBpQ2FsbHMnO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL2NsYXNzZXMvUmVjaXBlLmpzJ1xuaW1wb3J0IFJlY2lwZVJlcG9zaXRvcnkgZnJvbSAnLi9jbGFzc2VzL1JlY2lwZVJlcG9zaXRvcnkuanMnXG5pbXBvcnQgVXNlciBmcm9tICcuL2NsYXNzZXMvVXNlci5qcydcblxuLy8gcXVlcnlTZWxlY3RvcnNcbmNvbnN0IG1haW5SZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5SZWNpcGVzJyk7XG5jb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluU2VjdGlvbicpO1xuY29uc3QgZmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcicpXG5jb25zdCBmaWx0ZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlck1lbnUnKVxuY29uc3QgdGFnQ2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuY29uc3QgZmlsdGVyU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlclN1Ym1pdEJ0bicpXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQmFyJylcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCdXR0b24nKVxuY29uc3QgZnVsbFJlY2lwZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbFJlY2lwZVZpZXcnKTtcbmNvbnN0IG1lc3NhZ2VCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZUJhcicpO1xuY29uc3QgZmF2b3JpdGVzVmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXZvcml0ZXNWaWV3QnV0dG9uJyk7XG5jb25zdCB0b0Nvb2tWaWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvQ29va1ZpZXdCdXR0b24nKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZVZpZXcnKVxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcblxuLy9nbG9iYWwgdmFyaWFibGVzXG5sZXQgY3VycmVudFJlY2lwZVJlcG87XG5sZXQgb3JpZ2luYWxSZWNpcGVSZXBvO1xubGV0IGN1cnJlbnRVc2VyO1xubGV0IGNvdW50ZXIgPSAwO1xubGV0IGlzTG9hZGVkID0gZmFsc2U7XG5sZXQgY3VycmVudE1lc3NhZ2U7XG5cbi8vIGV2ZW50IGxpc3RlbmVyc1xud2luZG93Lm9ubG9hZCA9IGdlbmVyYXRlU3RhcnRpbmdJbmZvcm1hdGlvbigpXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hUaHJvdWdoUmVjaXBlcylcbmZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZpbHRlck1lbnUpXG5maWx0ZXJTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hCeVRhZylcbm1haW5TZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGV0ZXJtaW5lUmVjaXBlQ2FyZEFjdGlvbilcbmZhdm9yaXRlc1ZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RmF2b3JpdGVzVmlldylcbnRvQ29va1ZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9Db29rVmlldylcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZVZpZXcpXG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3RhcnRpbmdJbmZvcm1hdGlvbigpIHtcbiAgYXBpQ2FsbHMucmV0cmlldmVEYXRhKClcbiAgICAudGhlbigocHJvbWlzZSkgPT4ge1xuICAgICAgbGV0IG51bSA9IGdldFJhbmRvbU51bWJlcihwcm9taXNlWzBdWyd1c2Vyc0RhdGEnXS5sZW5ndGgpXG4gICAgICBjdXJyZW50VXNlciA9IG5ldyBVc2VyKHByb21pc2VbMF1bJ3VzZXJzRGF0YSddW251bV0pXG4gICAgICBsZXQgaW5ncmVkaWVudHMgPSBwcm9taXNlWzFdWydpbmdyZWRpZW50c0RhdGEnXVxuICAgICAgbGV0IHJlY2lwZXMgPSBwcm9taXNlWzJdWydyZWNpcGVEYXRhJ11cbiAgICAgIGxldCBmb3JtYXR0ZWRSZWNpcGVzID0gcmVjaXBlcy5tYXAoKHJlY2lwZSkgPT4ge1xuICAgICAgICBsZXQgbmV3UmVjaXBlID0gbmV3IFJlY2lwZShyZWNpcGUsIGluZ3JlZGllbnRzKVxuICAgICAgICByZXR1cm4gbmV3UmVjaXBlXG4gICAgICB9KVxuICAgICAgb3JpZ2luYWxSZWNpcGVSZXBvID0gbmV3IFJlY2lwZVJlcG9zaXRvcnkoZm9ybWF0dGVkUmVjaXBlcywgaW5ncmVkaWVudHMpO1xuICAgICAgc2hvd0hvbWVWaWV3KCk7XG4gICAgICBpc0xvYWRlZCA9IHRydWU7XG4gICAgfSlcbn1cblxuLy9zd2l0Y2ggdmlld3MgZnVuY3Rpb25zXG5mdW5jdGlvbiBzaG93RmF2b3JpdGVzVmlldygpIHtcbiAgaGlkZShmdWxsUmVjaXBlU2VjdGlvbik7XG4gIGN1cnJlbnRNZXNzYWdlID0gYDxoMj5Zb3VyIEZhdm9yaXRlIFJlY2lwZXM8L2gyPmA7XG4gIG1lc3NhZ2VCYXIuaW5uZXJIVE1MID0gY3VycmVudE1lc3NhZ2U7XG4gIGN1cnJlbnRSZWNpcGVSZXBvID0gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzO1xuICByZW5kZXJSZWNpcGVzKGN1cnJlbnRSZWNpcGVSZXBvLnJlY2lwZXMpO1xuICBzaG93KFtmb290ZXIsIG1haW5SZWNpcGVzLCBzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbl0pXG59XG5cbmZ1bmN0aW9uIHNob3dUb0Nvb2tWaWV3KCkge1xuICBoaWRlKGZ1bGxSZWNpcGVTZWN0aW9uKTtcbiAgY3VycmVudE1lc3NhZ2UgPSBgPGgyPllvdXIgUmVjaXBlcyB0byBDb29rPC9oMj5gO1xuICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGN1cnJlbnRNZXNzYWdlO1xuICBjdXJyZW50UmVjaXBlUmVwbyA9IGN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2s7XG4gIHJlbmRlclJlY2lwZXMoY3VycmVudFJlY2lwZVJlcG8ucmVjaXBlcyk7XG4gIHNob3coW2Zvb3RlciwgbWFpblJlY2lwZXMsIHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uXSlcbn1cblxuZnVuY3Rpb24gc2hvd0hvbWVWaWV3KCkge1xuICBoaWRlKGZ1bGxSZWNpcGVTZWN0aW9uKTtcbiAgY3VycmVudE1lc3NhZ2UgPSBgPGgyPkFsbCBSZWNpcGVzPC9oMj5gO1xuICAhaXNMb2FkZWQgPyBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGA8aDI+SGVsbG8sICR7Y3VycmVudFVzZXIubmFtZX08L2gyPmAgOiBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGN1cnJlbnRNZXNzYWdlO1xuICBjdXJyZW50UmVjaXBlUmVwbyA9IG9yaWdpbmFsUmVjaXBlUmVwbztcbiAgcmVuZGVyUmVjaXBlcyhjdXJyZW50UmVjaXBlUmVwby5yZWNpcGVzKTtcbiAgc2hvdyhbZm9vdGVyLCBtYWluUmVjaXBlcywgc2VhcmNoQmFyLCBzZWFyY2hCdXR0b25dKVxufVxuXG5cbmZ1bmN0aW9uIHNob3dGdWxsUmVjaXBlVmlldyhpZCkge1xuICByZW5kZXJGdWxsUmVjaXBlSW5mbyhpZCk7XG4gIGhpZGUoW2Zvb3RlciwgbWFpblJlY2lwZXMsIHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uXSlcbiAgc2hvdyhmdWxsUmVjaXBlU2VjdGlvbik7XG59XG5cbi8vY2FyZCBidXR0b24gZXZlbnQgaGFuZGxlcnNcbmZ1bmN0aW9uIGRldGVybWluZVJlY2lwZUNhcmRBY3Rpb24oZXZlbnQpIHtcbiAgbGV0IGlkID0gMDtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucmVjaXBlLWNhcmQnKSkge1xuICAgIGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtY2FyZCcpLmlkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZS1yZWNpcGUnKSkge1xuICAgIGRldGVybWluZUZhdm9yaXRlT3JVbmZhdm9yaXRlKGlkLCBldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aGlzLXdlZWstcmVjaXBlJykpIHtcbiAgICBkZXRlcm1pbmVBZGRPclJlbW92ZVRvQ29vayhpZCwgZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2V4aXQtYnV0dG9uJykge1xuICAgIHNob3dIb21lVmlldygpO1xuICB9IGVsc2UgaWYgKGlkKSB7XG4gICAgc2hvd0Z1bGxSZWNpcGVWaWV3KGlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVGYXZvcml0ZU9yVW5mYXZvcml0ZShpZCwgZXZlbnQpIHtcbiAgbGV0IGNsaWNrZWRSZWNpcGUgPSBjdXJyZW50UmVjaXBlUmVwby5yZWNpcGVzLmZpbmQoKHJlY2lwZSkgPT4ge1xuICAgIHJldHVybiByZWNpcGUuaWQgPT09IGlkO1xuICB9KVxuICBpZiAoIWN1cnJlbnRVc2VyLmZhdm9yaXRlUmVjaXBlcy5yZWNpcGVzLmluY2x1ZGVzKGNsaWNrZWRSZWNpcGUpKSB7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWNvbi1vbicpO1xuICAgIGN1cnJlbnRVc2VyLmFkZEZhdm9yaXRlUmVjaXBlKGNsaWNrZWRSZWNpcGUpO1xuICAgIG1lc3NhZ2VCYXIuaW5uZXJIVE1MID0gYDxoMj5GYXZvcml0ZWQhPC9oMj5gXG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIG1lc3NhZ2VCYXIuaW5uZXJIVE1MID0gY3VycmVudE1lc3NhZ2U7XG4gICAgfSwgMTAwMCk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFVzZXIucmVtb3ZlRmF2b3JpdGVSZWNpcGUoY2xpY2tlZFJlY2lwZSlcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGA8aDI+VW5mYXZvcml0ZWQhPC9oMj5gXG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIG1lc3NhZ2VCYXIuaW5uZXJIVE1MID0gY3VycmVudE1lc3NhZ2U7XG4gICAgfSwgMTAwMCk7XG4gICAgcmVuZGVyUmVjaXBlcyhjdXJyZW50UmVjaXBlUmVwby5yZWNpcGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVBZGRPclJlbW92ZVRvQ29vayhpZCwgZXZlbnQpIHtcbiAgbGV0IGNsaWNrZWRSZWNpcGUgPSBjdXJyZW50UmVjaXBlUmVwby5yZWNpcGVzLmZpbmQoKHJlY2lwZSkgPT4ge1xuICAgIHJldHVybiByZWNpcGUuaWQgPT09IGlkO1xuICB9KVxuICBpZiAoIWN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2sucmVjaXBlcy5pbmNsdWRlcyhjbGlja2VkUmVjaXBlKSkge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljb24tb24nKTtcbiAgICBjdXJyZW50VXNlci5hZGRSZWNpcGVUb0Nvb2tUaGlzV2VlayhjbGlja2VkUmVjaXBlKTtcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGA8aDI+QWRkZWQgdG8gUmVjaXBlcyB0byBDb29rITwvaDI+YFxuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGA8aDI+QWxsIFJlY2lwZXM8L2gyPmBcbiAgICB9LCAxMDAwKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50VXNlci5yZW1vdmVSZWNpcGVUb0Nvb2tUaGlzV2VlayhjbGlja2VkUmVjaXBlKVxuICAgIG1lc3NhZ2VCYXIuaW5uZXJIVE1MID0gYDxoMj5SZW1vdmVkIGZyb20gUmVjaXBlcyB0byBDb29rITwvaDI+YFxuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGA8aDI+QWxsIFJlY2lwZXM8L2gyPmBcbiAgICB9LCAxMDAwKTtcbiAgICByZW5kZXJSZWNpcGVzKGN1cnJlbnRSZWNpcGVSZXBvLnJlY2lwZXMpO1xuICB9XG59XG4vL3NlYXJjaCBmdW5jdGlvbnNcbmZ1bmN0aW9uIHNlYXJjaFRocm91Z2hSZWNpcGVzKCkge1xuICBsZXQgdXNlclNlYXJjaCA9IHNlYXJjaEJhci52YWx1ZTtcbiAgbGV0IGNvbnZlcnRlZFVzZXJTZWFyY2ggPSBjb252ZXJ0VXNlckluZm8odXNlclNlYXJjaClcbiAgbGV0IHVuaXF1ZUZpbHRlcmVkUmVjaXBlcyA9IGdlbmVyYXRlRmlsdGVyZWRSZWNpcGVzKGNvbnZlcnRlZFVzZXJTZWFyY2gpO1xuICBpZiAodW5pcXVlRmlsdGVyZWRSZWNpcGVzLmxlbmd0aCkge1xuICAgIHJlbmRlclJlY2lwZXModW5pcXVlRmlsdGVyZWRSZWNpcGVzKTtcbiAgfSBlbHNlIHtcbiAgICBtYWluUmVjaXBlcy5pbm5lckhUTUwgPVxuICAgIGBcbiAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPk9vcHMgY291bGQgbm90IGZpbmQgYW55IHJlY2lwZXMgdGhhdCBtYXRjaGVkIPCfmKY8L3A+XG4gICAgYFxuICB9XG4gIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VXNlckluZm8odXNlclNlYXJjaCkge1xuICBsZXQgYWx0ZXJlZFVzZXJTZWFyY2ggPSB1c2VyU2VhcmNoLnNwbGl0KCcgJykuIG1hcCgod29yZCkgPT4ge1xuICAgIHJldHVybiB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xuICBsZXQgY29udmVydGVkVXNlclNlYXJjaCA9IGRldGVybWluZVNlYXJjaFR5cGUoYWx0ZXJlZFVzZXJTZWFyY2gpO1xuICByZXR1cm4gY29udmVydGVkVXNlclNlYXJjaDtcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lU2VhcmNoVHlwZShhbHRlcmVkVXNlclNlYXJjaCkge1xuICBsZXQgc2VhcmNoSW5mbyA9IGFsdGVyZWRVc2VyU2VhcmNoLnJlZHVjZSgoYWNjLCB3b3JkKSA9PiB7XG4gICAgbGV0IGFsbFJlY2lwZU5hbWVzID0gY3VycmVudFJlY2lwZVJlcG8uZ2VuZXJhdGVBbGxSZWNpcGVOYW1lcygpO1xuICAgIGxldCBhbGxJbmdyZWRpZW50TmFtZXMgPSBjdXJyZW50UmVjaXBlUmVwby5nZW5lcmF0ZUFsbEluZ3JlZGllbnROYW1lcygpO1xuICAgIGlmIChhbGxSZWNpcGVOYW1lcy5pbmNsdWRlcyh3b3JkKSkge1xuICAgICAgYWNjLm5hbWUucXVlcnkucHVzaCh3b3JkKTtcbiAgICB9XG4gICAgaWYgKGFsbEluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyh3b3JkKSkge1xuICAgICAgYWNjLmluZ3JlZGllbnROYW1lcy5xdWVyeS5wdXNoKHdvcmQpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7bmFtZToge3R5cGU6ICduYW1lJywgcXVlcnk6IFtdfSwgaW5ncmVkaWVudE5hbWVzOiB7dHlwZTogJ2luZ3JlZGllbnROYW1lcycsIHF1ZXJ5OiBbXX19KVxuICByZXR1cm4gc2VhcmNoSW5mbztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGaWx0ZXJlZFJlY2lwZXMoY29udmVydGVkVXNlclNlYXJjaCkge1xuICBsZXQgZmlsdGVyZWRSZWNpcGVzQnlOYW1lID0gY3VycmVudFJlY2lwZVJlcG8uZmlsdGVyUmVjaXBlcyhjb252ZXJ0ZWRVc2VyU2VhcmNoLm5hbWUpO1xuICBsZXQgZmlsdGVyZWRSZWNpcGVzQnlJbmdyZWRpZW50ID0gY3VycmVudFJlY2lwZVJlcG8uZmlsdGVyUmVjaXBlcyhjb252ZXJ0ZWRVc2VyU2VhcmNoLmluZ3JlZGllbnROYW1lcyk7XG4gIGxldCBhbGxGaWx0ZXJlZFJlY2lwZXMgPSBmaWx0ZXJlZFJlY2lwZXNCeU5hbWUuY29uY2F0KGZpbHRlcmVkUmVjaXBlc0J5SW5ncmVkaWVudCk7XG4gIHJldHVybiBbLi4ubmV3IFNldChhbGxGaWx0ZXJlZFJlY2lwZXMpXTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQnlUYWcoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0YWdTZWFyY2hJbmZvID0ge3R5cGU6ICd0YWdzJywgcXVlcnk6IFtdfVxuICB0YWdDaGVja0JveC5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICB0YWcuY2hlY2tlZCA/IHRhZ1NlYXJjaEluZm8ucXVlcnkucHVzaCh0YWcudmFsdWUpIDogbnVsbFxuICAgIHRhZy5jaGVja2VkID0gZmFsc2U7XG4gIH0pXG4gIGxldCBmaWx0ZXJlZFJlY2lwZXMgPSBjdXJyZW50UmVjaXBlUmVwby5maWx0ZXJSZWNpcGVzKHRhZ1NlYXJjaEluZm8pO1xuICBoaWRlKGZpbHRlck1lbnUpO1xuICBpZiAoZmlsdGVyZWRSZWNpcGVzLmxlbmd0aCkge1xuICAgIHJlbmRlclJlY2lwZXMoZmlsdGVyZWRSZWNpcGVzKTtcbiAgfSBlbHNlIHtcbiAgICBtYWluUmVjaXBlcy5pbm5lckhUTUwgPVxuICAgIGBcbiAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPk9vcHMgY291bGQgbm90IGZpbmQgYW55IHJlY2lwZXMgdGhhdCBtYXRjaGVkIPCfmKY8L3A+XG4gICAgYFxuICB9XG59XG5cbi8vcmVuZGVyIGZ1bmN0aW9uc1xuZnVuY3Rpb24gcmVuZGVyUmVjaXBlcyhyZWNpcGVzKSB7XG4gIG1haW5SZWNpcGVzLmlubmVySFRNTCA9IGBgO1xuICByZWNpcGVzLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgIGxldCB0YWdzID0gcmVjaXBlLnRhZ3MubWFwKCh0YWcpID0+IHtcbiAgICAgIHJldHVybiBgPGg0IGNsYXNzPVwidGFncyBmbGV4LWNvbHVtblwiPiR7dGFnfTwvaDQ+YFxuICAgIH0pXG4gICAgbGV0IHJlY2lwZU5hbWVzID0gcmVjaXBlLm5hbWUubWFwKChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgfSkuam9pbignICcpO1xuICAgIGxldCBmYXZvcml0ZUJ1dHRvbkNsYXNzID0gYGZhdm9yaXRlLXJlY2lwZWBcbiAgICBsZXQgY2FsZW5kYXJCdXR0b25DbGFzcyA9IGB0aGlzLXdlZWstcmVjaXBlYFxuICAgIGlmIChyZWNpcGUuaXNGYXZvcml0ZWQpIHtcbiAgICAgIGZhdm9yaXRlQnV0dG9uQ2xhc3MgPSBgZmF2b3JpdGUtcmVjaXBlIGljb24tb25gXG4gICAgfVxuICAgIGlmIChyZWNpcGUuaXNUb0JlQ29va2VkKSB7XG4gICAgICBjYWxlbmRhckJ1dHRvbkNsYXNzID0gYHRoaXMtd2Vlay1yZWNpcGUgaWNvbi1vbmBcbiAgICB9XG4gICAgbWFpblJlY2lwZXMuaW5uZXJIVE1MICs9XG4gICAgYFxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWNpcGUtY2FyZCBmbGV4LXJvd1wiIGlkPVwiJHtyZWNpcGUuaWR9XCIgPlxuICAgICAgICA8aW1nIHNyYz0ke3JlY2lwZS5pbWFnZX0gYWx0PVwiQSBwaWN0dXJlIG9mIGEgZGlzaCBjYWxsZWQgJHtyZWNpcGVOYW1lc31cIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtY2FyZC1pbmZvIGZsZXgtY29sdW1uXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLXRhZy1jb250YWluZXIgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicmVjaXBlLW5hbWVcIj4ke3JlY2lwZU5hbWVzfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWctY29udGFpbmVyIGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICR7dGFnc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyIGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7ZmF2b3JpdGVCdXR0b25DbGFzc31cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtY2FyZCBmYXMgZmEtaGVhcnRcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7Y2FsZW5kYXJCdXR0b25DbGFzc31cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiY2FsZW5kYXItY2FyZCBmYXMgZmEtY2FsZW5kYXItYWx0XCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIGBcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyRnVsbFJlY2lwZUluZm8oaWQpIHtcbiAgbGV0IHJlY2lwZVRvUmVuZGVyID0gY3VycmVudFJlY2lwZVJlcG8ucmVjaXBlcy5maW5kKChyZWNpcGUpID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLmlkID09PSBpZDtcbiAgfSlcbiAgbGV0IHJlY2lwZVRvUmVuZGVySW5mbyA9IGNvbnZlcnRSZWNpcGVUb1JlbmRlcihyZWNpcGVUb1JlbmRlcik7XG4gIGN1cnJlbnRNZXNzYWdlID0gYDxoMj4ke3JlY2lwZVRvUmVuZGVySW5mby5uYW1lfTwvaDI+YFxuICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGN1cnJlbnRNZXNzYWdlO1xuICBmdWxsUmVjaXBlU2VjdGlvbi5pbm5lckhUTUwgPVxuICBgIDxkaXYgY2xhc3M9XCJ0YWctY29udGFpbmVyLWZ1bGwgZmxleC1yb3dcIj5cbiAgICAke3JlY2lwZVRvUmVuZGVySW5mby50YWdzfVxuICAgIDwvZGl2PlxuICAgIDxhcnRpY2xlIGNsYXNzPVwicmVjaXBlLWNhcmQtYWxsIGZsZXgtY29sdW1uXCIgPlxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkIGZsZXgtcm93XCIgaWQ9XCIke3JlY2lwZVRvUmVuZGVyLmlkfVwiPlxuICAgICAgICA8aW1nIHNyYz0ke3JlY2lwZVRvUmVuZGVyLmltYWdlfSBhbHQ9XCJBIHBpY3R1cmUgb2YgYSBkaXNoIGNhbGxlZCAke3JlY2lwZVRvUmVuZGVySW5mby5uYW1lfVwiLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyIGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4aXQtYnV0dG9uXCIgaWQ9XCJleGl0QnV0dG9uXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImV4aXQtY2FyZCBmYXMgZmEtdGltZXNcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7cmVjaXBlVG9SZW5kZXJJbmZvLmZhdm9yaXRlQnV0dG9uQ2xhc3N9XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWNhcmQgZmFzIGZhLWhlYXJ0XCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke3JlY2lwZVRvUmVuZGVySW5mby5jYWxlbmRhckJ1dHRvbkNsYXNzfVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJjYWxlbmRhci1jYXJkIGZhcyBmYS1jYWxlbmRhci1hbHRcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtY29zdCBmbGV4LXJvd1wiIGlkPVwidG90YWxDb3N0XCI+XG4gICAgICAgICAgPGg1PkVzdGltYXRlZCBDb3N0IDwvaDU+XG4gICAgICAgICAgPHA+JHtyZWNpcGVUb1JlbmRlckluZm8udG90YWxDb3N0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZnVsbC1yZWNpcGUtaW5mbyBmbGV4LWNvbHVtblwiIGlkPVwiZnVsbFJlY2lwZUluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZVByaWNlQ29udGFpbmVyIGZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzLWluZm9cIiBpZD1pbmdyZWRpZW50c0luZm8+XG4gICAgICAgICAgICA8aDQ+SW5ncmVkaWVudHM8L2g0PlxuICAgICAgICAgICAgPHA+ICR7cmVjaXBlVG9SZW5kZXJJbmZvLmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0cnVjdGlvbnMtaW5mbyBmbGV4LWNvbHVtblwiIGlkPVwidG90YWxDb3N0XCI+XG4gICAgICAgICAgPGg0Pkluc3RydWN0aW9uczwvaDQ+XG4gICAgICAgICAgPHA+JHtyZWNpcGVUb1JlbmRlckluZm8uZml4ZWRJbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2FydGljbGU+XG4gIGBcbn1cblxuZnVuY3Rpb24gY29udmVydFJlY2lwZVRvUmVuZGVyKHJlY2lwZVRvUmVuZGVyKSB7XG4gIGxldCB0YWdzID0gcmVjaXBlVG9SZW5kZXIudGFncy5tYXAoKHRhZykgPT4ge1xuICAgIHJldHVybiBgPGg0IGNsYXNzPVwidGFncyBmbGV4LWNvbHVtblwiPiR7dGFnfTwvaDQ+YFxuICB9KS5qb2luKCcgJyk7XG4gIGxldCBpbmdyZWRpZW50cyA9IHJlY2lwZVRvUmVuZGVyLmluZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCkgPT4ge1xuICAgIHJldHVybiBgPHAgY2xhc3M9XCJpbmdyZWRpZW50cyBmbGV4LWNvbHVtblwiPiR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnR9ICR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fSAke2luZ3JlZGllbnQubmFtZX08L3A+YFxuICB9KS5qb2luKCcgJyk7XG4gIGxldCBpbnN0cnVjdGlvbnMgPSByZWNpcGVUb1JlbmRlci5nZXRJbnN0cnVjdGlvbnMoKTtcbiAgbGV0IGZpeGVkSW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25zLm1hcCgoaW5zdHJ1Y3Rpb24pID0+IHtcbiAgICByZXR1cm4gYDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25zIGZsZXgtY29sdW1uXCI+JHtpbnN0cnVjdGlvbn08L3A+YFxuICB9KS5qb2luKCcgICcpO1xuICBsZXQgbmFtZSA9IHJlY2lwZVRvUmVuZGVyLm5hbWUubWFwKChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICB9KS5qb2luKCcgJyk7XG4gIGxldCB0b3RhbENvc3QgPSBjb252ZXJ0VG90YWxDb3N0KHJlY2lwZVRvUmVuZGVyKTtcbiAgbGV0IGZhdm9yaXRlQnV0dG9uQ2xhc3MgPSBgZmF2b3JpdGUtcmVjaXBlYFxuICBsZXQgY2FsZW5kYXJCdXR0b25DbGFzcyA9IGB0aGlzLXdlZWstcmVjaXBlYFxuICBpZiAocmVjaXBlVG9SZW5kZXIuaXNGYXZvcml0ZWQpIHtcbiAgICBmYXZvcml0ZUJ1dHRvbkNsYXNzID0gYGZhdm9yaXRlLXJlY2lwZSBpY29uLW9uYFxuICB9XG4gIGlmIChyZWNpcGVUb1JlbmRlci5pc1RvQmVDb29rZWQpIHtcbiAgICBjYWxlbmRhckJ1dHRvbkNsYXNzID0gYHRoaXMtd2Vlay1yZWNpcGUgaWNvbi1vbmBcbiAgfVxuICBsZXQgcmVjaXBlVG9SZW5kZXJJbmZvID0ge3RhZ3MsIGluZ3JlZGllbnRzLCBmaXhlZEluc3RydWN0aW9ucywgbmFtZSwgdG90YWxDb3N0LCBmYXZvcml0ZUJ1dHRvbkNsYXNzLCBjYWxlbmRhckJ1dHRvbkNsYXNzfTtcbiAgcmV0dXJuIHJlY2lwZVRvUmVuZGVySW5mbztcbn1cblxuZnVuY3Rpb24gY29udmVydFRvdGFsQ29zdChyZWNpcGVUb1JlbmRlcikge1xuICBsZXQgdG90YWxDb3N0ID0gcmVjaXBlVG9SZW5kZXIuZ2V0VG90YWxDb3N0KCk7XG4gIGxldCBkb2xsYXJzID0gTWF0aC5mbG9vcih0b3RhbENvc3QgLyAxMDApO1xuICByZXR1cm4gYCQke2RvbGxhcnN9YDtcbn1cblxuLy9vdGhlciBmdW5jdGlvbnNcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtYXgpIHtcbiAgdmFyIG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSAxKSArIDEpO1xuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGaWx0ZXJNZW51KCkge1xuICBpZiAoIShjb3VudGVyICUgMikpIHtcbiAgICBzaG93KGZpbHRlck1lbnUpO1xuICAgIGNvdW50ZXIgKys7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShmaWx0ZXJNZW51KTtcbiAgICBjb3VudGVyICsrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coZSkge1xuICBpZiAoZS5sZW5ndGggPiAwKSB7XG4gICAgZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZShlKSB7XG4gIGlmIChlLmxlbmd0aCA+IDApIHtcbiAgICBlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9