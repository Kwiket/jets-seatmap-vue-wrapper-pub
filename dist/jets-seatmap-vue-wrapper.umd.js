(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("@seatmaps.com/react-lib"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", , ], factory);
	else if(typeof exports === 'object')
		exports["jets-seatmap-vue-wrapper"] = factory(require("React"), require("ReactDOM"), require("@seatmaps.com/react-lib"), require("vue"));
	else
		root["jets-seatmap-vue-wrapper"] = factory(root["React"], root["ReactDOM"], root["SeatmapsReactLib"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__314__, __WEBPACK_EXTERNAL_MODULE__74__, __WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 24:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),

/***/ 314:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__314__;

/***/ }),

/***/ 74:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__74__;

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(24);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: external {"commonjs":"@seatmaps.com/react-lib","commonjs2":"@seatmaps.com/react-lib","root":"SeatmapsReactLib"}
var react_lib_root_SeatmapsReactLib_ = __webpack_require__(74);
// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(314);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/jets-seatmap.vue?vue&type=script&lang=js&




/* harmony default export */ var jets_seatmapvue_type_script_lang_js_ = ({
  name: 'JetsSeatmap',
  props: {
    flight: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    },
    availability: {
      type: Array,
      default: () => []
    },
    passengers: {
      type: Array,
      default: () => []
    },
    seatJumpTo: {
      type: Object,
      default: () => null
    },
    currentDeckIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['onSeatMapInited', 'onSeatSelected', 'onSeatUnselected', 'onTooltipRequested', 'onLayoutUpdated', 'onSeatMouseLeave', 'onSeatMouseClick', 'onAvailabilityApplied'],
  mounted() {
    const self = this;
    const reactProps = {
      flight: this.flight,
      config: this.config,
      availability: this.availability,
      passengers: this.passengers,
      seatJumpTo: this.seatJumpTo,
      currentDeckIndex: this.currentDeckIndex,
      onSeatMapInited: function (data) {
        self.$emit('onSeatMapInited - ', data);
      },
      onSeatSelected: function (data) {
        self.$emit('onSeatSelected - ', data);
      },
      onSeatUnselected: function (data) {
        self.$emit('onSeatUnselected - ', data);
      },
      onTooltipRequested: function (data) {
        self.$emit('onTooltipRequested - ', data);
      },
      onLayoutUpdated: function (data) {
        self.$emit('onLayoutUpdated - ', data);
      },
      onSeatMouseLeave(data) {
        self.$emit('onSeatMouseLeave - ', data);
      },
      onSeatMouseClick(data) {
        self.$emit('onSeatMouseClick - ', data);
      },
      onAvailabilityApplied(data) {
        self.$emit('onAvailabilityApplied - ', data);
      }
    };
    external_ReactDOM_default().render(external_React_default().createElement(react_lib_root_SeatmapsReactLib_.JetsSeatMap, reactProps), this.$refs.wrapper);
  },
  beforeDestroy: function () {
    external_ReactDOM_default().unmountComponentAtNode(this.$refs.wrapper);
  },
  render: function () {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)('div', {
      ref: 'wrapper'
    });
  }
});
;// CONCATENATED MODULE: ./src/components/jets-seatmap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_jets_seatmapvue_type_script_lang_js_ = (jets_seatmapvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/jets-seatmap.vue
var render, staticRenderFns
;



/* normalize component */
;
var component = normalizeComponent(
  components_jets_seatmapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var jets_seatmap = (component.exports);
;// CONCATENATED MODULE: ./src/components/index.js

const components = {
  JetsSeatmap: jets_seatmap,
  install: vue => {
    vue.component("JetsSeatmap", jets_seatmap);
  }
};
/* harmony default export */ var src_components = (components);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_components);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=jets-seatmap-vue-wrapper.umd.js.map