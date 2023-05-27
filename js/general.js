/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/general.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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

/***/ "./src/blocks/case-slider/case-slider.js":
/*!***********************************************!*\
  !*** ./src/blocks/case-slider/case-slider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return caseSlider; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

function caseSlider() {
  document.querySelectorAll('.case-slider').forEach(function (item) {
    var caseSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](item, {
      // Optional parameters
      // loop: false,
      // grabCursor: true,
      allowTouchMove: false,
      // spaceBetween: 34,
      // autoHeight: true,
      // slidesPerView: 3, //сколкько видны
      // slidesPerView: 'auto',
      // centeredSlides: true,
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true
      // },

      // Navigation arrows
      navigation: {
        nextEl: item.querySelector('.case-slider-button-next'),
        prevEl: item.querySelector('.case-slider-button-prev')
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "fraction",
      //   formatFractionCurrent: addZero,
      //   formatFractionTotal: addZero
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
          // spaceBetween: 34
        },

        // when window width is >= 768
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 34
        // },
        // when window width is >= 480px
        992: {
          // slidesPerView: 3,
          // spaceBetween: 34
        }
        // // when window width is >= 640px
        // 1200: {
        //   // slidesPerView: 2,
        //   // spaceBetween: 20
        // }
      }
    });
  });
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
  anim.loadAnimation({
    container: document.querySelector('.modal__lottie'),
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
          body.classList.remove('lock');
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/blocks/modal/modal.js":
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
function modal() {
  // закрыть все модалки
  var modals = document.querySelectorAll('.modal');
  var body = document.querySelector('body');
  function closeAllModals() {
    modals.forEach(function (modal) {
      modal.classList.remove('active');
      body.classList.remove('lock');
    });
  }
  var btnRecords = document.querySelectorAll('.js-btn-record');
  if (btnRecords && btnRecords.length > 0) {
    var _modal = document.querySelector('.modal#modal-record');
    btnRecords.forEach(function (btnRecord) {
      btnRecord.addEventListener('click', function (e) {
        console.log(e);
        e.preventDefault();
        _modal.classList.add('active');
        body.classList.add('lock');
      });
    });
  }
  var close = document.querySelectorAll('.modal__close');
  close.forEach(function (cl) {
    cl.addEventListener('click', function (e) {
      var modal = e.currentTarget.closest('.modal');
      modal.classList.remove('active');
      body.classList.remove('lock');
    });
  });
}

/***/ }),

/***/ "./src/blocks/price/price.js":
/*!***********************************!*\
  !*** ./src/blocks/price/price.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return price; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

function price() {
  console.log('price');
  var tarifSwiper;
  var price = document.querySelector('.price');
  var variants = price.querySelectorAll('.variant__item');
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
    var enableSwiper = function enableSwiper() {
      //swiper

      tarifSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.tarif-slider', {
        // Optional parameters
        // loop: false,
        grabCursor: true,
        // spaceBetween: 20,
        autoHeight: true,
        slidesPerView: 3,
        //сколкько видны
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // Navigation arrows
        // navigation: {
        //   nextEl: '.tarif-slider-button-next',
        //   prevEl: '.tarif-slider-button-prev',
        // },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 34
          },
          // when window width is >= 768
          // 768: {
          //   slidesPerView: 3,
          //   spaceBetween: 34
          // },
          // when window width is >= 480px
          992: {
            slidesPerView: 3,
            spaceBetween: 34
          }
          // // when window width is >= 640px
          // 1200: {
          //   // slidesPerView: 2,
          //   // spaceBetween: 20
          // }
        }
      });
    };

    enableSwiper();
    var choises = price.querySelectorAll('.tarif__item');
    variants.forEach(function (variant, index) {
      var link = variant.querySelector('.variant__link');
      link.addEventListener('click', function (e) {
        e.preventDefault();
        deleteActiveClassVariants();
        setActiveClassVariant(index);
        deleteActiveClassChoises();
        setActiveClassChoise(index);
        if (tarifSwiper !== undefined) {
          console.log();
          tarifSwiper.forEach(function (sw) {
            sw.destroy(true, true);
          });
          enableSwiper();
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/blocks/projects-slider/projects-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/projects-slider/projects-slider.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return projectsSlider; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

function projectsSlider() {
  var reviewsSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.projects-slider', {
    // Optional parameters
    // loop: false,
    // grabCursor: true,
    spaceBetween: 34,
    autoHeight: true,
    allowTouchMove: false,
    // slidesPerView: 3, //сколкько видны
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 34
      },
      // when window width is >= 768
      // 768: {
      //   slidesPerView: 3,
      //   spaceBetween: 34
      // },
      // when window width is >= 480px
      992: {
        // slidesPerView: 3,
        // spaceBetween: 34
      }
      // // when window width is >= 640px
      // 1200: {
      //   // slidesPerView: 2,
      //   // spaceBetween: 20
      // }
    }
  });

  function addZero(num) {
    return num > 9 ? num : '0' + num;
  }
  var revTitleContainer = document.querySelector('.projects__title-wrap');
  var revSliderContainer = document.querySelector('.projects-slider');
  var targetBtns = document.querySelector('.projects-slider-btns');

  // брекпоинт для уничтжения swiper
  var breakpoint = window.matchMedia('(max-width: 768px)');

  //функция проверки
  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      console.log('тут вызываем нашу функцию');
      /* окно просмотра имеет ширину не больше 768px пикселей */

      revSliderContainer.appendChild(targetBtns);
    } else {
      console.log('а тут ее не нужно');
      /* окно просмотра имеет ширину больше 768px пикселей */

      revTitleContainer.appendChild(targetBtns);
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

/***/ }),

/***/ "./src/blocks/reviews-slider/reviews-slider.js":
/*!*****************************************************!*\
  !*** ./src/blocks/reviews-slider/reviews-slider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reviewsSlider; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

function reviewsSlider() {
  var reviewsSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.reviews-slider', {
    // Optional parameters
    // loop: false,
    grabCursor: true,
    spaceBetween: 34,
    autoHeight: true,
    // slidesPerView: 3, //сколкько видны
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 34
      },
      // when window width is >= 768
      // 768: {
      //   slidesPerView: 3,
      //   spaceBetween: 34
      // },
      // when window width is >= 480px
      992: {
        // slidesPerView: 3,
        // spaceBetween: 34
      }
      // // when window width is >= 640px
      // 1200: {
      //   // slidesPerView: 2,
      //   // spaceBetween: 20
      // }
    }
  });

  function addZero(num) {
    return num > 9 ? num : '0' + num;
  }
  var revTitleContainer = document.querySelector('.reviews__title-wrap');
  var revSliderContainer = document.querySelector('.reviews-slider');
  var targetBtns = document.querySelector('.reviews-slider-btns');

  // брекпоинт для уничтжения swiper
  var breakpoint = window.matchMedia('(max-width: 768px)');

  //функция проверки
  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      console.log('тут вызываем нашу функцию');
      /* окно просмотра имеет ширину не больше 768px пикселей */

      revSliderContainer.appendChild(targetBtns);
    } else {
      console.log('а тут ее не нужно');
      /* окно просмотра имеет ширину больше 768px пикселей */

      revTitleContainer.appendChild(targetBtns);
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
  var solutions = document.querySelector('.solutions');
  var variants = solutions.querySelectorAll('.variant__item');
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
    var choises = solutions.querySelectorAll('.choise__item');
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
/* harmony import */ var _modules_price_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/price/price */ "./src/blocks/price/price.js");
/* harmony import */ var _modules_reviews_slider_reviews_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/reviews-slider/reviews-slider */ "./src/blocks/reviews-slider/reviews-slider.js");
/* harmony import */ var _modules_projects_slider_projects_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/projects-slider/projects-slider */ "./src/blocks/projects-slider/projects-slider.js");
/* harmony import */ var _modules_case_slider_case_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/case-slider/case-slider */ "./src/blocks/case-slider/case-slider.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modal/modal.js");
//menu

// //form
// import form from '%modules%/form/form'
//solutions

//lottie

//lottie

//anim-items

//price

//reviews-slider

//projects-slider

//case-slider

//modal


// form();
Object(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_solutions_solutions__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_lottie_lottie__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_steps_steps__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_anim_items_anim_items__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_price_price__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_reviews_slider_reviews_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_projects_slider_projects_slider__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_case_slider_case_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_9__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=general.js.map