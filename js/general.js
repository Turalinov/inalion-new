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

/***/ "./src/blocks/anim-items/anim-items.js":
/*!*********************************************!*\
  !*** ./src/blocks/anim-items/anim-items.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animItems; });
function animItems() {
  console.log('_anim-items');
  var animItems = document.querySelectorAll('._anim-items');
  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var i = 0; i < animItems.length; i++) {
        var animItem = animItems[i];
        var animItemHeight = animItem.offsetHeight; //высота элемента 182
        var animItemOffset = offset(animItem).top; //позиция объекта относительно вверха окна
        var animStart = 4; // коэффициент регулирования начала анимация

        var animItemPoint = window.innerHeight - animItemHeight / animStart; // 700 - 200 /4 = 750
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
          ; // 800 - 800 / 4 = 1000
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight)
          //возвращает количество пикселей, на которое прокручен документ по вертикали
          {
            animItem.classList.add('_active');
          } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            // animItem.classList.remove('_active');
          }
        }
      }
    };
    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(); // размер элемента и его позицию относительно  viewport

      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      // pageXOffset - текущая прокрутка слева ,
      // document.documentElement - html,
      // scrollTop - сколько прокручено вверх
      var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };
    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 400);
  }
}

/***/ }),

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

/***/ "./src/blocks/menu/menu.js":
/*!*********************************!*\
  !*** ./src/blocks/menu/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
function menu() {
  console.log('menu');
  var menuToggle = document.querySelector('.menu__toggle');
  if (menuToggle) {
    var _menu = document.querySelector('.menu');
    var body = document.querySelector('body');
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      _menu.classList.toggle('menu--opened');
      body.classList.toggle('lock');
    });
    var menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(function (menuLink) {
      menuLink.addEventListener('click', function (e) {
        e.preventDefault();
        var blockId = menuLink.getAttribute('href');
        if (blockId != "#") {
          document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth'
          });
        }
        if (_menu.classList.contains('menu--opened')) {
          _menu.classList.remove('menu--opened');
          body.classList.remove('body--locked');
        }
      });
    });
  }
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
  var parents = document.querySelectorAll('.delimiter-wrap');
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
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/menu/menu.js");
/* harmony import */ var _modules_solutions_solutions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/solutions/solutions */ "./src/blocks/solutions/solutions.js");
/* harmony import */ var _modules_lottie_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/lottie/lottie */ "./src/blocks/lottie/lottie.js");
/* harmony import */ var _modules_steps_steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/steps/steps */ "./src/blocks/steps/steps.js");
/* harmony import */ var _modules_anim_items_anim_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/anim-items/anim-items */ "./src/blocks/anim-items/anim-items.js");
//preloader
// import preloader from '%modules%/preloader/preloader'
// //toggle
// import button from '%modules%/toggle/toggle'
//menu

// //form
// import form from '%modules%/form/form'//
//solutions

//lottie

//lottie

//anim-items


// preloader();
// button();
Object(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
// form();
Object(_modules_solutions_solutions__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_lottie_lottie__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_steps_steps__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_anim_items_anim_items__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=general.js.map