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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/accordion.js":
/*!*************************!*\
  !*** ./js/accordion.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accordion = function () {
	function Accordion(settings) {
		_classCallCheck(this, Accordion);

		this.config = Accordion.mergeSettings(settings);
		// Resolve selectors's types
		this.buttonSelector = typeof this.config.buttonSelector === 'string' ? document.querySelectorAll(this.config.buttonSelector) : this.config.buttonSelector;
		this.panelSelector = typeof this.config.panelSelector === 'string' ? document.querySelectorAll(this.config.panelSelector) : this.config.panelSelector;
		// Early throw if selector doesn't exists
		if (this.buttonSelector === null || this.panelSelector === null) {
			throw new Error('Accordion: Something wrong with your selector(s) 😭');
		}
		// Apply accordion
		this.init();
	}

	_createClass(Accordion, [{
		key: 'init',

		/**
    * Builds the markup and attaches listeners to required events.
    */
		value: function init() {
			var config = this.config;
			var btns = this.buttonSelector;
			var panels = this.panelSelector;

			var _loop = function _loop(i) {
				btns[i].addEventListener("click", function () {
					/* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
					this.classList.toggle("active");

					/* Toggle between hiding and showing the active panel */
					var panel = panels[i];
					if (config.animate) {
						if (panel.style.maxHeight) {
							panel.style.maxHeight = null;
						} else {
							panel.style.maxHeight = panel.scrollHeight + "px";
						}
					} else {
						if (panel.style.display != "none") {
							panel.style.display = "none";
						} else {
							panel.style.display = config.visibleDisplay;
						}
					}
				});
			};

			for (var i = 0; i < btns.length; i++) {
				_loop(i);
			}
		}
	}], [{
		key: 'mergeSettings',
		value: function mergeSettings(options) {

			var settings = {
				buttonSelector: '.accordion',
				panelSelector: '.panel',
				visibleDisplay: 'block',
				animate: true
			};

			var userSttings = options;
			for (var attrname in userSttings) {
				settings[attrname] = userSttings[attrname];
			}

			return settings;
		}
	}]);

	return Accordion;
}();

exports.default = Accordion;

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _siema = __webpack_require__(/*! siema */ "./node_modules/siema/dist/siema.min.js");

var _siema2 = _interopRequireDefault(_siema);

var _accordion = __webpack_require__(/*! ./accordion */ "./js/accordion.js");

var _accordion2 = _interopRequireDefault(_accordion);

var _mobilemenu = __webpack_require__(/*! ./mobilemenu.js */ "./js/mobilemenu.js");

var _mobilemenu2 = _interopRequireDefault(_mobilemenu);

__webpack_require__(/*! ./schedule */ "./js/schedule.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  new _mobilemenu2.default().activate();

  if (document.querySelector('.js-carousel')) {
    new _siema2.default({
      selector: '.js-carousel',
      duration: 200,
      easing: 'ease-out',
      perPage: {
        300: 1, // 1 items for viewport wider than 300px
        600: 2, // 2 items for viewport wider than 600px
        980: 3 // 3 items for viewport wider than 980px
      },
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      onInit: function onInit() {},
      onChange: function onChange() {}
    });
  };
});
document.addEventListener("DOMContentLoaded", function () {
  new _accordion2.default({
    buttonSelector: '.price-item__row.js-accordion',
    panelSelector: '.style-preview',
    visibleDisplay: 'flex'
  });
});

/***/ }),

/***/ "./js/mobilemenu.js":
/*!**************************!*\
  !*** ./js/mobilemenu.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _swiper = __webpack_require__(/*! ./swiper.js */ "./js/swiper.js");

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = function () {
    function MobileMenu(options) {
        _classCallCheck(this, MobileMenu);

        this.config = MobileMenu.mergeSettings(options);
        this.sidebarBox = typeof this.config.sidebarBox === 'string' ? document.querySelector(this.config.sidebarBox) : this.config.sidebarBox;
        this.sidebarBtn = typeof this.config.sidebarBtn === 'string' ? document.querySelector(this.config.sidebarBtn) : this.config.sidebarBtn;
        this.isOpen = this.sidebarBox.classList.contains(this.config.isActiveClassName);
    }

    _createClass(MobileMenu, [{
        key: 'open',
        value: function open() {
            if (!this.isOpen) {
                this.sidebarBox.classList.add(this.config.isActiveClassName);
                this.sidebarBtn.classList.add(this.config.isActiveClassName);
                this.isOpen = true;
            }
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.isOpen) {
                this.sidebarBox.classList.remove(this.config.isActiveClassName);
                this.sidebarBtn.classList.remove(this.config.isActiveClassName);
                this.isOpen = false;
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.isOpen) this.close();else this.open();
        }
    }, {
        key: 'activate',
        value: function activate() {
            var _this = this;

            this.sidebarBtn.addEventListener('click', function (event) {
                _this.toggle();
            });
            window.addEventListener('keydown', function (event) {
                if (_this.isOpen && event.keyCode === 27) _this.close();
            });
            var swiper = new _swiper2.default('.wrapper');
            swiper.onLeft(function () {
                _this.open();
            });
            swiper.onRight(function () {
                _this.close();
            });
            swiper.run();
        }
    }], [{
        key: 'mergeSettings',
        value: function mergeSettings(options) {

            var settings = {
                sidebarBox: '.mobilemenu',
                sidebarBtn: '.hamburger',
                isActiveClassName: 'is-active',
                pageWrapper: '.wrapper'
            };

            var userSttings = options;
            for (var attrname in userSttings) {
                settings[attrname] = userSttings[attrname];
            }

            return settings;
        }
    }]);

    return MobileMenu;
}();

exports.default = MobileMenu;

/***/ }),

/***/ "./js/schedule.js":
/*!************************!*\
  !*** ./js/schedule.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accordion = __webpack_require__(/*! ./accordion */ "./js/accordion.js");

var _accordion2 = _interopRequireDefault(_accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHEETPARAMS = {
  id: "1rMBMYT168iMQVzsCgUzJJWidCeWiCfXv9acvju9EU3U",
  apikey: 'AIzaSyA4kJ6B3oX7FB4uzGHTRenD0yRSnpYaLw0'
};
var SHEETURL = "https://sheets.googleapis.com/v4/spreadsheets/1rMBMYT168iMQVzsCgUzJJWidCeWiCfXv9acvju9EU3U/values:batchGet?" + "ranges='polotna'!B3%3AD17&ranges='polotna'!E3%3AG17&ranges='polotna'!H3%3AJ17&ranges='polotna'!K3%3AM17&ranges='polotna'!N3%3AP17&ranges='polotna'!Q3%3AS17&ranges='polotna'!T3%3AV17&" + "ranges='pilony'!B3%3AD17&ranges='pilony'!E3%3AG17&ranges='pilony'!H3%3AJ17&ranges='pilony'!K3%3AM17&ranges='pilony'!N3%3AP17&ranges='pilony'!Q3%3AS17&ranges='pilony'!T3%3AV17&" + "ranges='kontinent'!B3%3AD17&ranges='kontinent'!E3%3AG17&ranges='kontinent'!H3%3AJ17&ranges='kontinent'!K3%3AM17&ranges='kontinent'!N3%3AP17&ranges='kontinent'!Q3%3AS17&ranges='kontinent'!T3%3AV17" + "&ranges='styles'!A1%3AA25" + "&key=" + SHEETPARAMS.apikey;
function encodeQueryData(data) {
  var ret = [];
  for (var d in data) {
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }return ret.join('&');
};
document.addEventListener("DOMContentLoaded", function () {
  new Vue({
    el: '.wrapper',
    data: {
      polotna: [],
      pilony: [],
      kontinent: [],
      lessonList: [],
      filterByStyle: 'Все направления',
      filterByGym: 'Все залы'
    },
    methods: {
      isShowLesson: function isShowLesson(lesson) {
        var byStyle = this.filterByStyle;
        if (!byStyle || byStyle === 'Все направления') {
          return true;
        }
        if (lesson === byStyle) return true;else return false;
      },
      haveLessons: function haveLessons(day) {
        var byStyle = this.filterByStyle;
        var lessons = day.lessos;
        if ((!byStyle || byStyle === 'Все направления') && day.lessons.length >= 1) return true;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = day.lessons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var lesson = _step.value;

            if (lesson.name === byStyle) return true;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return false;
      }
    },
    created: function created() {
      var _this = this;

      var timeStamp = Date.now();
      var lastStamp = sessionStorage.updated;
      if (lastStamp && timeStamp - lastStamp < 20 * 60 * 1000) {
        console.log("Get data from sessionStorage!");
        this.polotna = JSON.parse(sessionStorage.polotna);
        this.pilony = JSON.parse(sessionStorage.pilony);
        this.kontinent = JSON.parse(sessionStorage.kontinent);
        this.lessonList = JSON.parse(sessionStorage.lessonList);
      } else {
        axios.get(SHEETURL).then(function (responce) {
          console.log(responce.status);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = responce.data.valueRanges[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var range = _step2.value;

              if (range.range.includes('polotna')) {
                _this.polotna.push(getDayFromSheet(range.values));
              } else if (range.range.includes('pilony')) {
                _this.pilony.push(getDayFromSheet(range.values));
              } else if (range.range.includes('kontinent')) {
                _this.kontinent.push(getDayFromSheet(range.values));
              } else if (range.range.includes('styles')) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = range.values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var value = _step3.value;

                    _this.lessonList.push(value[0]);
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                      _iterator3.return();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          sessionStorage.setItem('polotna', JSON.stringify(_this.polotna));
          sessionStorage.setItem('pilony', JSON.stringify(_this.pilony));
          sessionStorage.setItem('kontinent', JSON.stringify(_this.kontinent));
          sessionStorage.setItem('lessonList', JSON.stringify(_this.lessonList));
          sessionStorage.setItem('updated', Date.now());
          console.log("Updated from google sheets");
        }).catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error);
        });
      }
    } //end created

  });
});

function getDayFromSheet(data) {
  var result = {
    dayOfWeek: data[0][0],
    lessons: []
  };

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var el = _step4.value;

      if (el.length >= 2) {
        var lesson = { time: el[0], name: el[1], status: true };
        if (lesson.time.length <= 2) {
          lesson.time += ':00';
        }
        if (el[2]) {
          lesson.status = false;
        }
        result.lessons.push(lesson);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return result;
}
function tommorowSchedule() {}

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swipe = function () {
    function Swipe(element) {
        _classCallCheck(this, Swipe);

        this.xDown = null;
        this.yDown = null;
        this.element = typeof element === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function (evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);
    }

    _createClass(Swipe, [{
        key: 'onLeft',
        value: function onLeft(callback) {
            this.onLeft = callback;

            return this;
        }
    }, {
        key: 'onRight',
        value: function onRight(callback) {
            this.onRight = callback;

            return this;
        }
    }, {
        key: 'onUp',
        value: function onUp(callback) {
            this.onUp = callback;

            return this;
        }
    }, {
        key: 'onDown',
        value: function onDown(callback) {
            this.onDown = callback;

            return this;
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(evt) {
            if (!this.xDown || !this.yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            this.xDiff = this.xDown - xUp;
            this.yDiff = this.yDown - yUp;
            if (Math.abs(this.xDiff) < 100 && Math.abs(this.yDiff) < 150) {
                return;
            }
            if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
                // Most significant.
                if (this.xDiff > 0) {
                    this.onLeft();
                } else {
                    this.onRight();
                }
            } else {
                if (this.yDiff > 0) {
                    this.onUp();
                } else {
                    this.onDown();
                }
            }

            // Reset values.
            this.xDown = null;
            this.yDown = null;
        }
    }, {
        key: 'run',
        value: function run() {
            this.element.addEventListener('touchmove', function (evt) {
                this.handleTouchMove(evt);
            }.bind(this), false);
        }
    }]);

    return Swipe;
}();

exports.default = Swipe;

/***/ }),

/***/ "./node_modules/siema/dist/siema.min.js":
/*!**********************************************!*\
  !*** ./node_modules/siema/dist/siema.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),o=function(){function e(t){var i=this;if(s(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return r(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-e,0),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=this.drag.endX-this.drag.startX,t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length-this.perPage),this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){e.preventDefault(),this.pointerDown&&("A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");e<this.currentSlide&&this.currentSlide--,this.innerElements.splice(e,1),this.updateFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var s=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=s?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.updateFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),e){for(var i=document.createDocumentFragment(),s=0;s<this.innerElements.length;s++)i.appendChild(this.innerElements[s]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},i=e;for(var s in i)t[s]=i[s];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9iaWxlbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpZW1hL2Rpc3Qvc2llbWEubWluLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsInNldHRpbmdzIiwiY29uZmlnIiwibWVyZ2VTZXR0aW5ncyIsImJ1dHRvblNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFuZWxTZWxlY3RvciIsIkVycm9yIiwiaW5pdCIsImJ0bnMiLCJwYW5lbHMiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBhbmVsIiwiYW5pbWF0ZSIsInN0eWxlIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZGlzcGxheSIsInZpc2libGVEaXNwbGF5IiwibGVuZ3RoIiwib3B0aW9ucyIsInVzZXJTdHRpbmdzIiwiYXR0cm5hbWUiLCJNb2JpbGVNZW51IiwiYWN0aXZhdGUiLCJxdWVyeVNlbGVjdG9yIiwiU2llbWEiLCJzZWxlY3RvciIsImR1cmF0aW9uIiwiZWFzaW5nIiwicGVyUGFnZSIsInN0YXJ0SW5kZXgiLCJkcmFnZ2FibGUiLCJtdWx0aXBsZURyYWciLCJ0aHJlc2hvbGQiLCJsb29wIiwib25Jbml0Iiwib25DaGFuZ2UiLCJzaWRlYmFyQm94Iiwic2lkZWJhckJ0biIsImlzT3BlbiIsImNvbnRhaW5zIiwiaXNBY3RpdmVDbGFzc05hbWUiLCJhZGQiLCJyZW1vdmUiLCJjbG9zZSIsIm9wZW4iLCJ3aW5kb3ciLCJldmVudCIsImtleUNvZGUiLCJzd2lwZXIiLCJTd2lwZSIsIm9uTGVmdCIsIm9uUmlnaHQiLCJydW4iLCJwYWdlV3JhcHBlciIsIlNIRUVUUEFSQU1TIiwiaWQiLCJhcGlrZXkiLCJTSEVFVFVSTCIsImVuY29kZVF1ZXJ5RGF0YSIsImRhdGEiLCJyZXQiLCJkIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJWdWUiLCJlbCIsInBvbG90bmEiLCJwaWxvbnkiLCJrb250aW5lbnQiLCJsZXNzb25MaXN0IiwiZmlsdGVyQnlTdHlsZSIsImZpbHRlckJ5R3ltIiwibWV0aG9kcyIsImlzU2hvd0xlc3NvbiIsImxlc3NvbiIsImJ5U3R5bGUiLCJoYXZlTGVzc29ucyIsImRheSIsImxlc3NvbnMiLCJsZXNzb3MiLCJuYW1lIiwiY3JlYXRlZCIsInRpbWVTdGFtcCIsIkRhdGUiLCJub3ciLCJsYXN0U3RhbXAiLCJzZXNzaW9uU3RvcmFnZSIsInVwZGF0ZWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uY2UiLCJzdGF0dXMiLCJ2YWx1ZVJhbmdlcyIsInJhbmdlIiwiaW5jbHVkZXMiLCJnZXREYXlGcm9tU2hlZXQiLCJ2YWx1ZXMiLCJ2YWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJoZWFkZXJzIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJyZXN1bHQiLCJkYXlPZldlZWsiLCJ0aW1lIiwidG9tbW9yb3dTY2hlZHVsZSIsImVsZW1lbnQiLCJ4RG93biIsInlEb3duIiwiZXZ0IiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiYmluZCIsImNhbGxiYWNrIiwib25VcCIsIm9uRG93biIsInhVcCIsInlVcCIsInhEaWZmIiwieURpZmYiLCJNYXRoIiwiYWJzIiwiaGFuZGxlVG91Y2hNb3ZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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d0NBQXdDLHFSQUFxUixFQUFFLHlDQUF5QyxzaUJBQXNpQixFQUFFLHlDQUF5QywrSkFBK0osRUFBRSx1Q0FBdUMsK1RBQStULEVBQUUseUNBQXlDLDZjQUE2YyxFQUFFLDBDQUEwQyxnV0FBZ1csRUFBRSxxQ0FBcUMsc0VBQXNFLEVBQUUsbUNBQW1DLGtZQUFrWSxnREFBZ0QsNEJBQTRCLEtBQUssb0NBQW9DLG1KQUFtSiw4SEFBOEgsRUFBRSxpQ0FBaUMsd0ZBQXdGLDRHQUE0RyxFQUFFLG1DQUFtQyw2RkFBNkYsc0dBQXNHLHdEQUF3RCwrSEFBK0gsRUFBRSxrQ0FBa0Msa0NBQWtDLEVBQUUsaUNBQWlDLDREQUE0RCxFQUFFLCtCQUErQiw2RUFBNkUsMEJBQTBCLGdEQUFnRCw0QkFBNEIseUNBQXlDLCtGQUErRixpQkFBaUIsSUFBSSxzQ0FBc0MsT0FBTyw2SUFBNkksdUJBQXVCLEtBQUsseUJBQXlCLFVBQVUsRUFBRSxtQ0FBbUMsK0ZBQStGLEtBQUssR0FBRyxnQ0FBZ0MsR0FBRyxFIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb24ge1xuXHRjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuXHRcdHRoaXMuY29uZmlnID0gQWNjb3JkaW9uLm1lcmdlU2V0dGluZ3Moc2V0dGluZ3MpO1xuXHRcdC8vIFJlc29sdmUgc2VsZWN0b3JzJ3MgdHlwZXNcbiAgICBcdHRoaXMuYnV0dG9uU2VsZWN0b3IgPSB0eXBlb2YgdGhpcy5jb25maWcuYnV0dG9uU2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5idXR0b25TZWxlY3RvcikgOiB0aGlzLmNvbmZpZy5idXR0b25TZWxlY3RvcjtcbiAgICBcdHRoaXMucGFuZWxTZWxlY3RvciA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wYW5lbFNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcucGFuZWxTZWxlY3RvcikgOiB0aGlzLmNvbmZpZy5wYW5lbFNlbGVjdG9yO1xuXHQgICAgLy8gRWFybHkgdGhyb3cgaWYgc2VsZWN0b3IgZG9lc24ndCBleGlzdHNcblx0ICAgIGlmICh0aGlzLmJ1dHRvblNlbGVjdG9yID09PSBudWxsIHx8IHRoaXMucGFuZWxTZWxlY3RvciA9PT0gbnVsbCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjY29yZGlvbjogU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvcihzKSDwn5itJyk7XG5cdFx0fVxuXHRcdC8vIEFwcGx5IGFjY29yZGlvblxuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0c3RhdGljIG1lcmdlU2V0dGluZ3Mob3B0aW9ucykge1xuXHRcdFxuXHRcdGNvbnN0IHNldHRpbmdzID0ge1xuXHRcdFx0YnV0dG9uU2VsZWN0b3IgOiAnLmFjY29yZGlvbicsXG5cdFx0XHRwYW5lbFNlbGVjdG9yIDogJy5wYW5lbCcsXG5cdFx0XHR2aXNpYmxlRGlzcGxheTogJ2Jsb2NrJyxcblx0XHRcdGFuaW1hdGU6IHRydWUsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHVzZXJTdHRpbmdzID0gb3B0aW9ucztcblx0ICAgIGZvciAoY29uc3QgYXR0cm5hbWUgaW4gdXNlclN0dGluZ3MpIHtcblx0ICAgICAgc2V0dGluZ3NbYXR0cm5hbWVdID0gdXNlclN0dGluZ3NbYXR0cm5hbWVdO1xuXHQgICAgfVxuXG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG5cdCAvKipcblx0ICAgKiBCdWlsZHMgdGhlIG1hcmt1cCBhbmQgYXR0YWNoZXMgbGlzdGVuZXJzIHRvIHJlcXVpcmVkIGV2ZW50cy5cblx0ICAgKi9cblx0aW5pdCgpIHtcblx0XHRsZXQgY29uZmlnID0gdGhpcy5jb25maWc7XG5cdFx0bGV0IGJ0bnMgPSB0aGlzLmJ1dHRvblNlbGVjdG9yO1xuXHRcdGxldCBwYW5lbHMgPSB0aGlzLnBhbmVsU2VsZWN0b3I7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgIGJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdCAgICAgICAgLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyxcblx0XHQgICAgICAgIHRvIGhpZ2hsaWdodCB0aGUgYnV0dG9uIHRoYXQgY29udHJvbHMgdGhlIHBhbmVsICovXG5cdFx0ICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cblxuXHRcdCAgICAgICAgLyogVG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBhY3RpdmUgcGFuZWwgKi9cblx0XHQgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tpXTtcblx0XHQgICAgICAgIGlmIChjb25maWcuYW5pbWF0ZSl7XG5cdFx0ICAgICAgICBcdGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcblx0XHQgICAgICAgIFx0XHRwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuXHRcdCAgICAgICAgXHR9IGVsc2Uge1xuXHRcdCAgICAgICAgXHRcdHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcblx0XHQgICAgICAgIFx0fVxuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XHRcblx0XHRcdCAgICAgICAgaWYgKHBhbmVsLnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpIHtcblx0XHRcdCAgICAgICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdCAgICAgICAgfSBlbHNlIHtcblx0XHRcdCAgICAgICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBjb25maWcudmlzaWJsZURpc3BsYXk7XG5cdFx0XHQgICAgICAgIH1cblx0XHQgICAgXHR9XG5cdFx0ICAgIH0pO1xuXHRcdH0gXG5cdH1cbn1cbiIsImltcG9ydCBTaWVtYSBmcm9tICdzaWVtYSc7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9iaWxlbWVudS5qcyc7XG5pbXBvcnQgJy4vc2NoZWR1bGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICBuZXcgTW9iaWxlTWVudSgpLmFjdGl2YXRlKCk7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jYXJvdXNlbCcpKXtcbiAgbmV3IFNpZW1hKHtcbiAgICBzZWxlY3RvcjogJy5qcy1jYXJvdXNlbCcsXG4gICAgZHVyYXRpb246IDIwMCxcbiAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgcGVyUGFnZToge1xuICAgICAgMzAwOiAxLCAvLyAxIGl0ZW1zIGZvciB2aWV3cG9ydCB3aWRlciB0aGFuIDMwMHB4XG4gICAgICA2MDA6IDIsIC8vIDIgaXRlbXMgZm9yIHZpZXdwb3J0IHdpZGVyIHRoYW4gNjAwcHhcbiAgICAgIDk4MDogMyAvLyAzIGl0ZW1zIGZvciB2aWV3cG9ydCB3aWRlciB0aGFuIDk4MHB4XG4gIH0sXG4gICAgc3RhcnRJbmRleDogMCxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxuICAgIHRocmVzaG9sZDogMjAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBvbkluaXQ6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfSk7XG59O1xufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICBuZXcgQWNjb3JkaW9uKHtcbiAgICBidXR0b25TZWxlY3RvcjogJy5wcmljZS1pdGVtX19yb3cuanMtYWNjb3JkaW9uJyxcbiAgICBwYW5lbFNlbGVjdG9yOiAnLnN0eWxlLXByZXZpZXcnLFxuICAgIHZpc2libGVEaXNwbGF5OiAnZmxleCcsXG4gICAgfSk7XG4gIFxuXG59KTsiLCJpbXBvcnQgU3dpcGUgZnJvbSAnLi9zd2lwZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlTWVudSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE1vYmlsZU1lbnUubWVyZ2VTZXR0aW5ncyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zaWRlYmFyQm94ID0gdHlwZW9mIHRoaXMuY29uZmlnLnNpZGViYXJCb3ggPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zaWRlYmFyQm94KSA6IHRoaXMuY29uZmlnLnNpZGViYXJCb3g7XG4gICAgICAgIHRoaXMuc2lkZWJhckJ0biA9IHR5cGVvZiB0aGlzLmNvbmZpZy5zaWRlYmFyQnRuID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcuc2lkZWJhckJ0bikgOiB0aGlzLmNvbmZpZy5zaWRlYmFyQnRuO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRoaXMuc2lkZWJhckJveC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jb25maWcuaXNBY3RpdmVDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBtZXJnZVNldHRpbmdzKG9wdGlvbnMpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgICAgc2lkZWJhckJveCA6ICcubW9iaWxlbWVudScsXG4gICAgICAgICAgICBzaWRlYmFyQnRuIDogJy5oYW1idXJnZXInLFxuICAgICAgICAgICAgaXNBY3RpdmVDbGFzc05hbWU6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgcGFnZVdyYXBwZXI6ICcud3JhcHBlcicsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXNlclN0dGluZ3MgPSBvcHRpb25zO1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJuYW1lIGluIHVzZXJTdHRpbmdzKSB7XG4gICAgICAgICAgc2V0dGluZ3NbYXR0cm5hbWVdID0gdXNlclN0dGluZ3NbYXR0cm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgIH1cbiAgICBvcGVuKCl7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhckJveC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmlzQWN0aXZlQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhckJ0bi5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmlzQWN0aXZlQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gICAgXG4gICAgY2xvc2UoKXtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXJCb3guY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pc0FjdGl2ZUNsYXNzTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXJCdG4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pc0FjdGl2ZUNsYXNzTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgZWxzZSAgICB0aGlzLm9wZW4oKTtcblxuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5zaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge3RoaXMudG9nZ2xlKCl9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc09wZW4gJiYgZXZlbnQua2V5Q29kZSA9PT0gMjcpIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzd2lwZXIgPSBuZXcgU3dpcGUoJy53cmFwcGVyJyk7XG4gICAgICAgIHN3aXBlci5vbkxlZnQoKCkgPT4ge3RoaXMub3BlbigpfSk7XG4gICAgICAgIHN3aXBlci5vblJpZ2h0KCgpID0+IHt0aGlzLmNsb3NlKCl9KTtcbiAgICAgICAgc3dpcGVyLnJ1bigpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL2FjY29yZGlvbic7XG5jb25zdCBTSEVFVFBBUkFNUyA9IHtcbiAgaWQ6IFwiMXJNQk1ZVDE2OGlNUVZ6c0NnVXpKSldpZENlV2lDZlh2OWFjdmp1OUVVM1VcIixcbiAgYXBpa2V5OiAnQUl6YVN5QTRrSjZCM29YN0ZCNHV6R0hUUmVuRDB5UlNucFlhTHcwJyxcbn07XG5jb25zdCBTSEVFVFVSTCA9IFwiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLzFyTUJNWVQxNjhpTVFWenNDZ1V6SkpXaWRDZVdpQ2ZYdjlhY3ZqdTlFVTNVL3ZhbHVlczpiYXRjaEdldD9cIlxuICAgICtcInJhbmdlcz0ncG9sb3RuYSchQjMlM0FEMTcmcmFuZ2VzPSdwb2xvdG5hJyFFMyUzQUcxNyZyYW5nZXM9J3BvbG90bmEnIUgzJTNBSjE3JnJhbmdlcz0ncG9sb3RuYSchSzMlM0FNMTcmcmFuZ2VzPSdwb2xvdG5hJyFOMyUzQVAxNyZyYW5nZXM9J3BvbG90bmEnIVEzJTNBUzE3JnJhbmdlcz0ncG9sb3RuYSchVDMlM0FWMTcmXCJcbiAgICArIFwicmFuZ2VzPSdwaWxvbnknIUIzJTNBRDE3JnJhbmdlcz0ncGlsb255JyFFMyUzQUcxNyZyYW5nZXM9J3BpbG9ueSchSDMlM0FKMTcmcmFuZ2VzPSdwaWxvbnknIUszJTNBTTE3JnJhbmdlcz0ncGlsb255JyFOMyUzQVAxNyZyYW5nZXM9J3BpbG9ueSchUTMlM0FTMTcmcmFuZ2VzPSdwaWxvbnknIVQzJTNBVjE3JlwiXG4gICAgK1wicmFuZ2VzPSdrb250aW5lbnQnIUIzJTNBRDE3JnJhbmdlcz0na29udGluZW50JyFFMyUzQUcxNyZyYW5nZXM9J2tvbnRpbmVudCchSDMlM0FKMTcmcmFuZ2VzPSdrb250aW5lbnQnIUszJTNBTTE3JnJhbmdlcz0na29udGluZW50JyFOMyUzQVAxNyZyYW5nZXM9J2tvbnRpbmVudCchUTMlM0FTMTcmcmFuZ2VzPSdrb250aW5lbnQnIVQzJTNBVjE3XCJcbiAgICArIFwiJnJhbmdlcz0nc3R5bGVzJyFBMSUzQUEyNVwiXG4gICAgK1wiJmtleT1cIitTSEVFVFBBUkFNUy5hcGlrZXk7XG5mdW5jdGlvbiBlbmNvZGVRdWVyeURhdGEoZGF0YSkge1xuICAgbGV0IHJldCA9IFtdO1xuICAgZm9yIChsZXQgZCBpbiBkYXRhKVxuICAgICByZXQucHVzaChlbmNvZGVVUklDb21wb25lbnQoZCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtkXSkpO1xuICAgcmV0dXJuIHJldC5qb2luKCcmJyk7XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcbiAgbmV3IFZ1ZSh7XG4gICAgZWw6Jy53cmFwcGVyJyxcbiAgICBkYXRhOiB7XG4gICAgICBwb2xvdG5hOiBbXSxcbiAgICAgIHBpbG9ueTpbXSxcbiAgICAgIGtvbnRpbmVudDogW10sXG4gICAgICBsZXNzb25MaXN0OiBbXSxcbiAgICAgIGZpbHRlckJ5U3R5bGU6ICfQktGB0LUg0L3QsNC/0YDQsNCy0LvQtdC90LjRjycsXG4gICAgICBmaWx0ZXJCeUd5bTogJ9CS0YHQtSDQt9Cw0LvRiycsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpc1Nob3dMZXNzb246IGZ1bmN0aW9uKGxlc3Nvbil7XG4gICAgICAgIGxldCBieVN0eWxlID0gdGhpcy5maWx0ZXJCeVN0eWxlO1xuICAgICAgICBpZiAoIWJ5U3R5bGUgfHwgYnlTdHlsZSA9PT0gJ9CS0YHQtSDQvdCw0L/RgNCw0LLQu9C10L3QuNGPJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICggbGVzc29uID09PSBieVN0eWxlICkgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGhhdmVMZXNzb25zOiBmdW5jdGlvbihkYXkpe1xuICAgICAgICBsZXQgYnlTdHlsZSA9IHRoaXMuZmlsdGVyQnlTdHlsZTtcbiAgICAgICAgbGV0IGxlc3NvbnMgPSBkYXkubGVzc29zO1xuICAgICAgICBpZiAoICghYnlTdHlsZSB8fCBieVN0eWxlID09PSAn0JLRgdC1INC90LDQv9GA0LDQstC70LXQvdC40Y8nKSAmJiBkYXkubGVzc29ucy5sZW5ndGg+PTEpIHJldHVybiB0cnVlO1xuICAgICAgICBmb3IgKCBsZXQgbGVzc29uIG9mIGRheS5sZXNzb25zICkge1xuICAgICAgICAgIGlmIChsZXNzb24ubmFtZSA9PT0gYnlTdHlsZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgIGxldCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgbGV0IGxhc3RTdGFtcCA9IHNlc3Npb25TdG9yYWdlLnVwZGF0ZWQ7XG4gICAgICBpZiAobGFzdFN0YW1wICYmIHRpbWVTdGFtcCAtIGxhc3RTdGFtcCA8IDIwKjYwKjEwMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXQgZGF0YSBmcm9tIHNlc3Npb25TdG9yYWdlIVwiKTtcbiAgICAgICAgdGhpcy5wb2xvdG5hID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5wb2xvdG5hKTtcbiAgICAgICAgdGhpcy5waWxvbnkgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLnBpbG9ueSk7XG4gICAgICAgIHRoaXMua29udGluZW50ID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5rb250aW5lbnQpO1xuICAgICAgICB0aGlzLmxlc3Nvbkxpc3QgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmxlc3Nvbkxpc3QpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF4aW9zLmdldChTSEVFVFVSTClcbiAgICAgICAgLnRoZW4ocmVzcG9uY2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uY2Uuc3RhdHVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IHJhbmdlIG9mIHJlc3BvbmNlLmRhdGEudmFsdWVSYW5nZXMpe1xuICAgICAgICAgICAgICBpZiAocmFuZ2UucmFuZ2UuaW5jbHVkZXMoJ3BvbG90bmEnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9sb3RuYS5wdXNoKGdldERheUZyb21TaGVldChyYW5nZS52YWx1ZXMpKTtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgZWxzZSBpZihyYW5nZS5yYW5nZS5pbmNsdWRlcygncGlsb255Jykpe1xuICAgICAgICAgICAgICAgIHRoaXMucGlsb255LnB1c2goZ2V0RGF5RnJvbVNoZWV0KHJhbmdlLnZhbHVlcykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYocmFuZ2UucmFuZ2UuaW5jbHVkZXMoJ2tvbnRpbmVudCcpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtvbnRpbmVudC5wdXNoKGdldERheUZyb21TaGVldChyYW5nZS52YWx1ZXMpKTtcbiAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgIGVsc2UgaWYocmFuZ2UucmFuZ2UuaW5jbHVkZXMoJ3N0eWxlcycpKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiByYW5nZS52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubGVzc29uTGlzdC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwb2xvdG5hJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wb2xvdG5hKSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwaWxvbnknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnBpbG9ueSkpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgna29udGluZW50JywgSlNPTi5zdHJpbmdpZnkodGhpcy5rb250aW5lbnQpKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xlc3Nvbkxpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxlc3Nvbkxpc3QpKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VwZGF0ZWQnLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlZCBmcm9tIGdvb2dsZSBzaGVldHNcIik7XG4gICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcbiAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxuICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXG4gICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IC8vZW5kIGNyZWF0ZWRcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gZ2V0RGF5RnJvbVNoZWV0IChkYXRhKSB7XG4gIGxldCByZXN1bHQgPSB7XG4gICAgZGF5T2ZXZWVrOiBkYXRhWzBdWzBdLFxuICAgIGxlc3NvbnM6W10sXG4gIH07XG4gIFxuICBmb3IgKGxldCBlbCBvZiBkYXRhKSB7XG4gICAgaWYgKGVsLmxlbmd0aD49Mikge1xuICAgICAgbGV0IGxlc3NvbiA9IHt0aW1lOmVsWzBdLCBuYW1lOmVsWzFdLCBzdGF0dXM6IHRydWV9O1xuICAgICAgaWYgKGxlc3Nvbi50aW1lLmxlbmd0aDw9Mikge1xuICAgICAgICBsZXNzb24udGltZSs9JzowMCc7XG4gICAgICB9XG4gICAgICBpZiAoZWxbMl0pIHtcbiAgICAgICAgbGVzc29uLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmVzdWx0Lmxlc3NvbnMucHVzaChsZXNzb24pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gdG9tbW9yb3dTY2hlZHVsZSgpIHtcblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMueERvd24gPSBudWxsO1xuICAgICAgICB0aGlzLnlEb3duID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdHlwZW9mKGVsZW1lbnQpID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLnhEb3duID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMueURvd24gPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgIH1cblxuICAgIG9uTGVmdChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uTGVmdCA9IGNhbGxiYWNrO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uUmlnaHQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vblJpZ2h0ID0gY2FsbGJhY2s7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25VcChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uVXAgPSBjYWxsYmFjaztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkRvd24oY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbkRvd24gPSBjYWxsYmFjaztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaE1vdmUoZXZ0KSB7XG4gICAgICAgIGlmICggISB0aGlzLnhEb3duIHx8ICEgdGhpcy55RG93biApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB2YXIgeVVwID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgICAgICB0aGlzLnhEaWZmID0gdGhpcy54RG93biAtIHhVcDtcbiAgICAgICAgdGhpcy55RGlmZiA9IHRoaXMueURvd24gLSB5VXA7XG4gICAgICAgIGlmIChNYXRoLmFicyggdGhpcy54RGlmZiApPCAxMDAgJiYgTWF0aC5hYnMgKHRoaXMueURpZmYgKSA8IDE1MCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIE1hdGguYWJzKCB0aGlzLnhEaWZmICkgPiBNYXRoLmFicyggdGhpcy55RGlmZiApICkgeyAvLyBNb3N0IHNpZ25pZmljYW50LlxuICAgICAgICAgICAgaWYgKCB0aGlzLnhEaWZmID4gMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICggdGhpcy55RGlmZiA+IDAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblVwKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25Eb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCB2YWx1ZXMuXG4gICAgICAgIHRoaXMueERvd24gPSBudWxsO1xuICAgICAgICB0aGlzLnlEb3duID0gbnVsbDtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRvdWNoTW92ZShldnQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9XG59IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocyl7aWYoaVtzXSlyZXR1cm4gaVtzXS5leHBvcnRzO3ZhciBuPWlbc109e2k6cyxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3NdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubD0hMCxuLmV4cG9ydHN9dmFyIGk9e307cmV0dXJuIHQubT1lLHQuYz1pLHQuZD1mdW5jdGlvbihlLGkscyl7dC5vKGUsaSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpzfSl9LHQubj1mdW5jdGlvbihlKXt2YXIgaT1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKGksXCJhXCIsaSksaX0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9XCJcIix0KHQucz0wKX0oW2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgcz10W2ldO3MuZW51bWVyYWJsZT1zLmVudW1lcmFibGV8fCExLHMuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHMmJihzLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxzLmtleSxzKX19cmV0dXJuIGZ1bmN0aW9uKHQsaSxzKXtyZXR1cm4gaSYmZSh0LnByb3RvdHlwZSxpKSxzJiZlKHQscyksdH19KCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIGk9dGhpcztpZihzKHRoaXMsZSksdGhpcy5jb25maWc9ZS5tZXJnZVNldHRpbmdzKHQpLHRoaXMuc2VsZWN0b3I9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuY29uZmlnLnNlbGVjdG9yP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcuc2VsZWN0b3IpOnRoaXMuY29uZmlnLnNlbGVjdG9yLG51bGw9PT10aGlzLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3cm9uZyB3aXRoIHlvdXIgc2VsZWN0b3Ig8J+YrVwiKTt0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLmlubmVyRWxlbWVudHM9W10uc2xpY2UuY2FsbCh0aGlzLnNlbGVjdG9yLmNoaWxkcmVuKSx0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5zdGFydEluZGV4LHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcihlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCJhdXRvXCIsdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9dGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoK1wicHhcIix0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIpO2Zvcih2YXIgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksdD0wO3Q8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5zdHlsZS5jc3NGbG9hdD1cImxlZnRcIixpLnN0eWxlLmZsb2F0PVwibGVmdFwiLGkuc3R5bGUud2lkdGg9MTAwL3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrXCIlXCIsaS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyRWxlbWVudHNbdF0pLGUuYXBwZW5kQ2hpbGQoaSl9dGhpcy5zbGlkZXJGcmFtZS5hcHBlbmRDaGlsZChlKSx0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXJGcmFtZSksdGhpcy5zbGlkZVRvQ3VycmVudCgpLHRoaXMuY29uZmlnLm9uSW5pdC5jYWxsKHRoaXMpfX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlOzA9PT10aGlzLmN1cnJlbnRTbGlkZSYmdGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1heCh0aGlzLmN1cnJlbnRTbGlkZS1lLDApLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcIm5leHRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7dGhpcy5jdXJyZW50U2xpZGU9PT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSYmdGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZT0wOnRoaXMuY3VycmVudFNsaWRlPU1hdGgubWluKHRoaXMuY3VycmVudFNsaWRlK2UsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcImdvVG9cIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7dGhpcy5jdXJyZW50U2xpZGU9TWF0aC5taW4oTWF0aC5tYXgoZSwwKSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksaSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCgpLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5Olwic2xpZGVUb0N1cnJlbnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZCgtXCIrdGhpcy5jdXJyZW50U2xpZGUqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpK1wicHgsIDAsIDApXCJ9fSx7a2V5OlwidXBkYXRlQWZ0ZXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYLHQ9TWF0aC5hYnMoZSksaT10aGlzLmNvbmZpZy5tdWx0aXBsZURyYWc/TWF0aC5jZWlsKHQvKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpKToxO2U+MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlP3RoaXMucHJldihpKTplPDAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZSYmdGhpcy5uZXh0KGkpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJyZXNpemVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndpZHRoPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UqdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCtcInB4XCIsdGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgmJih0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksdGhpcy5zbGlkZVRvQ3VycmVudCgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJ0b3VjaG1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSxudWxsPT09dGhpcy5kcmFnLmxldEl0R28mJih0aGlzLmRyYWcubGV0SXRHbz1NYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRZLWUudG91Y2hlc1swXS5wYWdlWSk8TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WC1lLnRvdWNoZXNbMF0ucGFnZVgpKSx0aGlzLnBvaW50ZXJEb3duJiZ0aGlzLmRyYWcubGV0SXRHbyYmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKy0xKih0aGlzLmN1cnJlbnRTbGlkZSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkrKHRoaXMuZHJhZy5zdGFydFgtdGhpcy5kcmFnLmVuZFgpKStcInB4LCAwLCAwKVwiKX19LHtrZXk6XCJtb3VzZWRvd25IYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUucGFnZVgpfX0se2tleTpcIm1vdXNldXBIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93biYmKFwiQVwiPT09ZS50YXJnZXQubm9kZU5hbWUmJih0aGlzLmRyYWcucHJldmVudENsaWNrPSEwKSx0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiYmluZ1wiLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIistMSoodGhpcy5jdXJyZW50U2xpZGUqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpKyh0aGlzLmRyYWcuc3RhcnRYLXRoaXMuZHJhZy5lbmRYKSkrXCJweCwgMCwgMClcIil9fSx7a2V5OlwibW91c2VsZWF2ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXJEb3duJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMSx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKSl9fSx7a2V5OlwiY2xpY2tIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5kcmFnLnByZXZlbnRDbGljayYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITF9fSx7a2V5OlwidXBkYXRlRnJhbWVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndpZHRoPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UqdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCtcInB4XCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTtmb3IodmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHQ9MDt0PHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dCsrKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuc3R5bGUuY3NzRmxvYXQ9XCJsZWZ0XCIsaS5zdHlsZS5mbG9hdD1cImxlZnRcIixpLnN0eWxlLndpZHRoPTEwMC90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoK1wiJVwiLGkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3RdKSxlLmFwcGVuZENoaWxkKGkpfXRoaXMuc2xpZGVyRnJhbWUuYXBwZW5kQ2hpbGQoZSksdGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyRnJhbWUpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7ZTx0aGlzLmN1cnJlbnRTbGlkZSYmdGhpcy5jdXJyZW50U2xpZGUtLSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKGUsMSksdGhpcy51cGRhdGVGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcz10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXM/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLnVwZGF0ZUZyYW1lKCksaSYmaS5jYWxsKHRoaXMpfX0se2tleTpcInByZXBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsMCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImFwcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzEpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLHQ9YXJndW1lbnRzWzFdO2lmKHRoaXMuZGV0YWNoRXZlbnRzKCksZSl7Zm9yKHZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxzPTA7czx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3MrKylpLmFwcGVuZENoaWxkKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7dGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIil9dCYmdC5jYWxsKHRoaXMpfX1dLFt7a2V5OlwibWVyZ2VTZXR0aW5nc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXtzZWxlY3RvcjpcIi5zaWVtYVwiLGR1cmF0aW9uOjIwMCxlYXNpbmc6XCJlYXNlLW91dFwiLHBlclBhZ2U6MSxzdGFydEluZGV4OjAsZHJhZ2dhYmxlOiEwLG11bHRpcGxlRHJhZzohMCx0aHJlc2hvbGQ6MjAsbG9vcDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgcyBpbiBpKXRbc109aVtzXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1vLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiXSwic291cmNlUm9vdCI6IiJ9