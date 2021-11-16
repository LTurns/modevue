exports.ids = [25];
exports.modules = {

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_1__[/* factory */ "a"])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },

  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },

  computed: {
    classes() {
      return this.groupClasses;
    },

    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }

      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },

    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.


      this.inTransition = false;

      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },

    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.


      this.inTransition = true;

      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(this.windowGroup.$el.clientHeight);
      }

      this.windowGroup.transitionCount++;
    },

    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }

      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.


        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(el.clientHeight);
      });
    }

  },

  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }

}));

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
// Extensions

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].extend({
  name: 'button-group',

  provide() {
    return {
      btnToggle: this
    };
  },

  computed: {
    classes() {
      return _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.computed.classes.call(this);
    }

  },
  methods: {
    // Isn't being passed down through types
    genData: _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.methods.genData
  }
}));

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2d62e390", content, true)

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var _mixins_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(254);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
// Styles
 // Extensions

 // Components



 // Mixins
// TODO: Move this into core components v2.0

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (_VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-carousel',
  props: {
    continuous: {
      type: Boolean,
      default: true
    },
    cycle: Boolean,
    delimiterIcon: {
      type: String,
      default: '$delimiter'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: value => value > 0
    },
    mandatory: {
      type: Boolean,
      default: true
    },
    progress: Boolean,
    progressColor: String,
    showArrows: {
      type: Boolean,
      default: true
    },
    verticalDelimiters: {
      type: String,
      default: undefined
    }
  },

  // pass down the parent's theme
  provide() {
    return {
      parentTheme: this.theme
    };
  },

  data() {
    return {
      internalHeight: this.height,
      slideTimeout: undefined
    };
  },

  computed: {
    classes() {
      return { ..._VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-carousel': true,
        'v-carousel--hide-delimiter-background': this.hideDelimiterBackground,
        'v-carousel--vertical-delimiters': this.isVertical
      };
    },

    isDark() {
      return this.dark || !this.light;
    },

    isVertical() {
      return this.verticalDelimiters != null;
    }

  },
  watch: {
    internalValue: 'restartTimeout',
    interval: 'restartTimeout',

    height(val, oldVal) {
      if (val === oldVal || !val) return;
      this.internalHeight = val;
    },

    cycle(val) {
      if (val) {
        this.restartTimeout();
      } else {
        clearTimeout(this.slideTimeout);
        this.slideTimeout = undefined;
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('hide-controls')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_7__[/* breaking */ "a"])('hide-controls', ':show-arrows="false"', this);
    }
  },

  mounted() {
    this.startTimeout();
  },

  methods: {
    genControlIcons() {
      if (this.isVertical) return null;
      return _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControlIcons.call(this);
    },

    genDelimiters() {
      return this.$createElement('div', {
        staticClass: 'v-carousel__controls',
        style: {
          left: this.verticalDelimiters === 'left' && this.isVertical ? 0 : 'auto',
          right: this.verticalDelimiters === 'right' ? 0 : 'auto'
        }
      }, [this.genItems()]);
    },

    genItems() {
      const length = this.items.length;
      const children = [];

      for (let i = 0; i < length; i++) {
        const child = this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
          staticClass: 'v-carousel__controls__item',
          attrs: {
            'aria-label': this.$vuetify.lang.t('$vuetify.carousel.ariaLabel.delimiter', i + 1, length)
          },
          props: {
            icon: true,
            small: true,
            value: this.getValue(this.items[i], i)
          }
        }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          props: {
            size: 18
          }
        }, this.delimiterIcon)]);
        children.push(child);
      }

      return this.$createElement(_mixins_button_group__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        props: {
          value: this.internalValue,
          mandatory: this.mandatory
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, children);
    },

    genProgress() {
      return this.$createElement(_VProgressLinear__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        staticClass: 'v-carousel__progress',
        props: {
          color: this.progressColor,
          value: (this.internalIndex + 1) / this.items.length * 100
        }
      });
    },

    restartTimeout() {
      this.slideTimeout && clearTimeout(this.slideTimeout);
      this.slideTimeout = undefined;
      window.requestAnimationFrame(this.startTimeout);
    },

    startTimeout() {
      if (!this.cycle) return;
      this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
    }

  },

  render(h) {
    const render = _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.render.call(this, h);
    render.data.style = `height: ${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "g"])(this.height)};`;
    /* istanbul ignore else */

    if (!this.hideDelimiters) {
      render.children.push(this.genDelimiters());
    }
    /* istanbul ignore else */


    if (this.progress || this.progressColor) {
      render.children.push(this.genProgress());
    }

    return render;
  }

}));

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _VImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
// Extensions
 // Components

 // Utilities



 // Types

const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-carousel-item',
  inject: {
    parentTheme: {
      default: {
        isDark: false
      }
    }
  },

  // pass down the parent's theme
  provide() {
    return {
      theme: this.parentTheme
    };
  },

  inheritAttrs: false,
  methods: {
    genDefaultSlot() {
      return [this.$createElement(_VImg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        staticClass: 'v-carousel__item',
        props: { ...this.$attrs,
          height: this.windowGroup.internalHeight
        },
        on: this.$listeners,
        scopedSlots: {
          placeholder: this.$scopedSlots.placeholder
        }
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getSlot */ "o"])(this))];
    },

    genWindowItem() {
      const {
        tag,
        data
      } = this.generateRouteLink();
      data.staticClass = 'v-window-item';
      data.directives.push({
        name: 'show',
        value: this.isActive
      });
      return this.$createElement(tag, data, this.genDefaultSlot());
    }

  }
}));

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Testimonials.vue?vue&type=template&id=021be3f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-16",class:_vm.$vuetify.theme.dark ? 'black' : 'white',attrs:{"id":"testimonials"}},[_vm._ssrNode("<h2 class=\"text-h4 text-md-h3 text-center font-weight-black mb-8 my-8\">\n    Customer Reviews\n  </h2> "),_c('v-carousel',{attrs:{"cycle":"","draggable":"true","hide-delimiter-background":"","hide-delimiters":""}},_vm._l((_vm.testimonials),function(item,i){return _c('v-carousel-item',{key:i},[_c('v-container',{attrs:{"fill-height":""}},[_c('div',{staticClass:"mx-auto text-center",staticStyle:{"max-width":"700px"}},[_c('v-avatar',{staticClass:"mb-7",attrs:{"size":"128"}},[_c('img',{attrs:{"src":("/team/" + (item.avtar)),"alt":"John","width":"128","height":"128"}})]),_vm._v(" "),_c('h3',{staticClass:"mb-1 font-weight-black text-uppercase",class:_vm.$vuetify.theme.dark
                ? 'black'
                : 'white grey--text text--darken-2'},[_vm._v("\n            "+_vm._s(item.name)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"mb-10 font-weight-light grey--text text-uppercase"},[_vm._v("\n            "+_vm._s(item.post)+"\n          ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"1"}},[_c('v-icon',{staticClass:"grey--text text--lighten-1",attrs:{"x-large":""}},[_vm._v("mdi-format-quote-open")])],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"10"}},[_c('div',{staticClass:"mb-5 font-italic",class:_vm.$vuetify.theme.dark
                    ? 'black'
                    : 'white grey--text text--darken-2'},[_vm._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Quisquam aspernatur, sint recusandae cum temporibus quos saepe\n                repellendus consectetur et reprehenderit. Ratione ipsam\n                consequuntur quo eligendi mollitia veniam facere possimus\n                inventore.\n              ")])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"1"}},[_c('v-icon',{staticClass:"grey--text text--lighten-1",attrs:{"x-large":""}},[_vm._v("mdi-format-quote-close")])],1)],1)],1)])],1)}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Testimonials.vue?vue&type=template&id=021be3f2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Testimonials.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({
  data() {
    return {
      testimonials: [{
        avtar: 'person-4.jpg',
        name: 'Mario Speedwagon',
        post: 'Creative Editor of ABC LTD'
      }, {
        avtar: 'person-8.jpg',
        name: 'Petey Cruiser',
        post: 'CEO of Json LLC'
      }, {
        avtar: 'person-7.jpg',
        name: 'Anna Sthesia',
        post: 'Director of Cleaner LTD'
      }, {
        avtar: 'person-10.jpg',
        name: 'Paul Molive',
        post: 'Manager of Torson LTD'
      }, {
        avtar: 'person-9.jpg',
        name: 'Gail Forcewind',
        post: 'Human Resource Manager of Humibed LLC'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js
var VCarousel = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js
var VCarouselItem = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(210);

// CONCATENATED MODULE: ./components/sections/Testimonials.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "964b46d4"
  
)

/* harmony default export */ var Testimonials = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VCarousel: VCarousel["a" /* default */],VCarouselItem: VCarouselItem["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=sections-testimonials.js.map