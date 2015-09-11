/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2)


/***/ },
/* 1 */
/***/ function(module, exports) {

	$('.navbar').affix({
	    offset: {
	      top: $('.navbar').offset().top - 50
	    }
	});
	// $('.navbar-toggle').click(function(){
	//
	//   console.log("clicked");
	//
	// })

	$(".share-btn").each(function() {
	  var el = $(this);
	  var url = el.attr("href")
	  if(!url || url === "" || url==="#") {
	    return true;
	  }
	  el.click(function() {
	    var params = "scrollbars=no,resizable=yes,toolbar=no,location=yes";
	    var width = 550;
	    var height = 420;
	    //centering
	    var left = Math.round((window.screen.width - width) / 2);
	    var top =  Math.round((window.screen.height - height) / 2);
	    if (top > 0) { // skip the popup and back to link if window.screen.height <= height
	      window.open(url, null , params + ",width=" + width + ",height=" + height + ",left=" + left + ",top=" + top)
	      return false; //break the event as we opened the link
	    }
	    return true; //continue to open the link for mobile or small screen device, no popup
	  })
	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);