webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<section about>\r\n  <blockquote>\r\n    <h3>About...</h3>\r\n    With great {{ vm.power }}, comes great {{ vm.responsibility }}...\r\n    <footer>from your favourite uncle Ben! :)</footer>\r\n  </blockquote>\r\n</section>\r\n";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// -- import external libs
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _angular2Now = __webpack_require__(3);

	// -- import module's stylesheet

	var _aboutScss = __webpack_require__(4);

	var _aboutScss2 = _interopRequireDefault(_aboutScss);

	// -- export module definition
	exports['default'] = (0, _angular2Now.SetModule)('about', []).name;

	// -- module definition

	var AboutController = (function () {
	  function AboutController() {
	    _classCallCheck(this, _AboutController);

	    _aboutScss2['default'].use();
	    this.power = 'Power', this.responsibility = 'Responsibility';
	  }

	  var _AboutController = AboutController;
	  AboutController = (0, _angular2Now.State)({
	    url: '/about',
	    name: 'about',
	    controllerAs: 'vm',
	    controller: AboutController,
	    template: __webpack_require__(1)
	  })(AboutController) || AboutController;
	  AboutController = (0, _angular2Now.Component)({ selector: 'about' })(AboutController) || AboutController;
	  return AboutController;
	})();

	exports.AboutController = AboutController;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var refs = 0;
	var dispose;
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	exports.use = exports.ref = function() {
		if(!(refs++)) {
			exports.locals = content.locals;
			dispose = __webpack_require__(7)(content);
		}
		return exports;
	};
	exports.unuse = exports.unref = function() {
		if(!(--refs)) {
			dispose();
			dispose = null;
		}
	};
	if(false) {
		var lastRefs = module.hot.data && module.hot.data.refs || 0;
		if(lastRefs) {
			exports.ref();
			if(!content.locals) {
				refs = lastRefs;
			}
		}
		if(!content.locals) {
			module.hot.accept();
		}
		module.hot.dispose(function(data) {
			data.refs = content.locals ? 0 : refs;
			if(dispose) {
				dispose();
			}
		});
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "[about] {\n  border: 3px dashed #4E5E90; }\n", ""]);

	// exports


/***/ }
]);