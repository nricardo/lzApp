webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(9);
	module.exports = __webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	module.exports = "<section home>\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <h1>{{ vm.hello }}</h1>\r\n      <p class=\"lead\">You've loaded the <strong ng-bind=\"vm.module | uppercase\"></strong> module.</p>\r\n\r\n      <button class=\"btn btn-success\" role=\"button\" ui-sref=\"about\">About us!</button>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<button class=\"btn btn-primary\">A button outside the component's scope...</button>\r\n";

/***/ },
/* 9 */
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

	var _homeScss = __webpack_require__(10);

	var _homeScss2 = _interopRequireDefault(_homeScss);

	// -- export module definition
	exports['default'] = (0, _angular2Now.SetModule)('home', []).name;

	// -- define module

	var HomeController = (function () {
	  function HomeController() {
	    _classCallCheck(this, _HomeController);

	    _homeScss2['default'].use();
	    this.module = 'home';
	    this.hello = 'Hello, world!';
	  }

	  var _HomeController = HomeController;
	  HomeController = (0, _angular2Now.State)({
	    url: '/home',
	    name: 'home',
	    controllerAs: 'vm',
	    controller: HomeController,
	    template: __webpack_require__(8)
	  })(HomeController) || HomeController;
	  HomeController = (0, _angular2Now.Component)({ selector: 'home' })(HomeController) || HomeController;
	  return HomeController;
	})();

	exports.HomeController = HomeController;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var refs = 0;
	var dispose;
	var content = __webpack_require__(11);
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "[home] button {\n  color: #333;\n  background-color: lime; }\n", ""]);

	// exports


/***/ }
]);