/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/general.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/lottie/lottie.js":
/*!*************************************!*\
  !*** ./src/blocks/lottie/lottie.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animation; });
function animation() {
  console.log('animation lottie');
  var anim = lottie;
  console.log(anim);
  anim.loadAnimation({
    container: document.querySelector('.hero__lottie'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './vendor/lottie_1.json'
  });
}

/***/ }),

/***/ "./src/blocks/solutions/solutions.js":
/*!*******************************************!*\
  !*** ./src/blocks/solutions/solutions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return solutions; });
function solutions() {
  console.log('solutions');
  var variants = document.querySelectorAll('.variant__item');
  if (variants) {
    var deleteActiveClassVariants = function deleteActiveClassVariants() {
      variants.forEach(function (variant) {
        variant.classList.remove('active');
      });
    };
    var setActiveClassVariant = function setActiveClassVariant(id) {
      variants[id].classList.add('active');
    };
    var deleteActiveClassChoises = function deleteActiveClassChoises() {
      choises.forEach(function (choise) {
        choise.classList.remove('active');
      });
    };
    var setActiveClassChoise = function setActiveClassChoise(id) {
      choises[id].classList.add('active');
    };
    var choises = document.querySelectorAll('.choise__item');
    variants.forEach(function (variant, index) {
      var link = variant.querySelector('.variant__link');
      link.addEventListener('click', function (e) {
        e.preventDefault();
        deleteActiveClassVariants();
        setActiveClassVariant(index);
        deleteActiveClassChoises();
        setActiveClassChoise(index);
      });
    });
  }
}

/***/ }),

/***/ "./src/blocks/steps/steps.js":
/*!***********************************!*\
  !*** ./src/blocks/steps/steps.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return steps; });
function steps() {
  // получаем координаты элемента в контексте документа
  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }
  function getHeightCoords(parent, child) {
    child = parent.querySelector(".".concat(child));
    var heightParent = parent.scrollHeight;
    var topParent = getCoords(parent).top;
    var topChild = getCoords(child).top;
    var maxHeightParent = topChild - topParent;
    parent.style.maxHeight = maxHeightParent + 'px';
    return {
      heightParent: heightParent,
      maxHeightParent: maxHeightParent
    };
  }
  var parents = document.querySelectorAll('.steps__list-wrap');
  if (parents) {
    var phonesFunction = function phonesFunction() {
      console.log(parents);
      parents.forEach(function (parent) {
        var _getHeightCoords = getHeightCoords(parent, 'delimiter'),
          heightParent = _getHeightCoords.heightParent,
          maxHeightParent = _getHeightCoords.maxHeightParent;
        console.log(heightParent, maxHeightParent);
        var more = parent.nextElementSibling;
        console.log({
          more: more
        });
        var moreBtn = more.querySelector('.more__btn');
        if (moreBtn) {
          moreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            parent.classList.toggle('opened');
            if (parent.classList.contains('opened')) {
              parent.style.maxHeight = heightParent + 'px';
              moreBtn.classList.add('opened');
            } else {
              parent.style.maxHeight = maxHeightParent + 'px';
              moreBtn.classList.remove('opened');
            }
          });
        }
      });
    }; // брекпоинт для уничтжения swiper
    var breakpoint = window.matchMedia('(max-width: 768px)');

    //функция проверки
    var breakpointChecker = function breakpointChecker() {
      if (breakpoint.matches === true) {
        console.log('тут вызываем нашу функцию');
        /* окно просмотра имеет ширину не больше 768px пикселей */
        phonesFunction();
      } else {
        console.log('а тут ее не нужно');
        /* окно просмотра имеет ширину больше 768px пикселей */

        // очищаем старые экземпляры и встроенные стили, когда они доступны

        // или / и ничего не делать
        return;
      }
    };

    // следим за изменениями размера области просмотра
    breakpoint.addListener(breakpointChecker);

    //старт
    breakpointChecker();
  }
}

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_solutions_solutions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/solutions/solutions */ "./src/blocks/solutions/solutions.js");
/* harmony import */ var _modules_lottie_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/lottie/lottie */ "./src/blocks/lottie/lottie.js");
/* harmony import */ var _modules_steps_steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/steps/steps */ "./src/blocks/steps/steps.js");
//preloader
// import preloader from '%modules%/preloader/preloader'
// //toggle
// import button from '%modules%/toggle/toggle'
// //menu
// import menu from '%modules%/menu/menu'
// //form
// import form from '%modules%/form/form'//
//solutions

//lottie

//lottie


// preloader();
// button();
// menu();
// form();
Object(_modules_solutions_solutions__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_lottie_lottie__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_steps_steps__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=general.js.map