exports.ids = [46,10,18,20];
exports.modules = {

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Delayable
 *
 * @mixin
 *
 * Changes the open or close delay time for elements
 */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'delayable',
  props: {
    openDelay: {
      type: [Number, String],
      default: 0
    },
    closeDelay: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    openTimeout: undefined,
    closeTimeout: undefined
  }),
  methods: {
    /**
     * Clear any pending delay timers from executing
     */
    clearDelay() {
      clearTimeout(this.openTimeout);
      clearTimeout(this.closeTimeout);
    },

    /**
     * Runs callback after a specified delay
     */
    runDelay(type, cb) {
      this.clearDelay();
      const delay = parseInt(this[`${type}Delay`], 10);
      this[`${type}Timeout`] = setTimeout(cb || (() => {
        this.isActive = {
          open: true,
          close: false
        }[type];
      }), delay);
    }

  }
}));

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e23b7040", content, true)

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("be23801a", content, true, context)
};

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_style_index_0_id_1f5ce475_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_style_index_0_id_1f5ce475_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_style_index_0_id_1f5ce475_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_style_index_0_id_1f5ce475_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_style_index_0_id_1f5ce475_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zoom[data-v-1f5ce475]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-1f5ce475],.zoom[data-v-1f5ce475]{transition:transform .2s}.image[data-v-1f5ce475]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-1f5ce475]{font-size:14px}.link[data-v-1f5ce475]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-1f5ce475]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-1f5ce475]:after,.ribbon[data-v-1f5ce475]:before{position:absolute;z-index:-1;content:\"\";display:block;border:5px solid #f5773c}.ribbon span[data-v-1f5ce475]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 \"Lato\",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-1f5ce475]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-1f5ce475]:after,.ribbon-bottom-left[data-v-1f5ce475]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-1f5ce475]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-1f5ce475]:after{top:0;left:0}.ribbon-bottom-left span[data-v-1f5ce475]{right:-25px;bottom:30px;transform:rotate(45deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/FeaturedProducts.vue?vue&type=template&id=1f5ce475&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.color},[_c('v-container',[_c('v-row',{attrs:{"mb":"10"}},_vm._l((_vm.data),function(plan,ix){return _c('v-col',{key:ix,attrs:{"md":"4"}},[_c('v-hover',{staticClass:"card",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{staticClass:"mx-auto transition-swing",class:hover ? 'zoom' : 'notzoom',attrs:{"elevation":hover ? 24 : 4,"color":plan.color,"max-width":"500","height":"610"}},[_c('h4',{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{"textContent":_vm._s(plan.name)}}),_vm._v(" "),_c('v-img',{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{"src":plan.mainImg,"alt":"","width":"250","lazy-src":("../" + (plan.mainImg)),"aspect-ratio":"1"}}),_vm._v(" "),_c('v-card-text',{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center","padding":"5%"},domProps:{"textContent":_vm._s(plan.intro)}}),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","bottom":"0","right":"10px","display":"block","margin-right":"5%"}},[(!plan.hasSubCategories)?_c('div',[_c('nuxt-link',{staticClass:"link",attrs:{"to":("/product/" + (plan._id))}},[_c('v-btn',{staticClass:"my-3",attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp,"text":"","outlined":"","black":""}},[_c('v-icon',{attrs:{"left":"","large":"","color":"primary"}},[_vm._v("mdi-play")]),_vm._v("View")],1)],1)],1):_vm._e(),_vm._v(" "),(plan.hasSubCategories)?_c('div',[_c('nuxt-link',{staticClass:"link align-center",attrs:{"to":("/category/" + (plan.name.toLowerCase()))}},[_c('v-btn',{staticClass:"my-3",attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp,"text":"","outlined":"","black":""}},[_c('v-icon',{attrs:{"left":"","large":"","color":"primary"}},[_vm._v("mdi-play")]),_vm._v("View")],1)],1)],1):_vm._e()]),_vm._v(" "),(plan.productId.length !== 0)?_c('div',[_c('div',{staticClass:"d-inline black--text pa-2",staticStyle:{"position":"absolute","bottom":"0","left":"0","display":"block","margin-left":"2%"}},[_vm._v("\n                "+_vm._s(plan.productId)+"\n              ")])]):_c('div',[_c('div',{staticClass:"ribbon ribbon-bottom-left"},[_c('span',[_vm._v("More Products")])])])],1)]}}],null,true)})],1)}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/FeaturedProducts.vue?vue&type=template&id=1f5ce475&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/FeaturedProducts.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FeaturedProductsvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: () => 'feature'
    }
  }
});
// CONCATENATED MODULE: ./components/sections/FeaturedProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_FeaturedProductsvue_type_script_lang_js_ = (FeaturedProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(208);

// CONCATENATED MODULE: ./components/sections/FeaturedProducts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(227)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_FeaturedProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f5ce475",
  "9602d6d8"
  
)

/* harmony default export */ var FeaturedProducts = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["c" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
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

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },

    onMouseLeave() {
      this.runDelay('close');
    }

  },

  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }

    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }

    if (!this.disabled) {
      element.data = element.data || {};

      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }

    return element;
  }

}));

/***/ }),

/***/ 239:
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2d62e390", content, true)

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("10335c80", content, true, context)
};

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/orangewireheader.6e5a81f.jpg";

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87);
/* harmony import */ var _mixins_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(239);
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

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
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

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1ea8b648", content, true, context)
};

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedProducts_vue_vue_type_style_index_0_id_4a1b87c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedProducts_vue_vue_type_style_index_0_id_4a1b87c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedProducts_vue_vue_type_style_index_0_id_4a1b87c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedProducts_vue_vue_type_style_index_0_id_4a1b87c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedProducts_vue_vue_type_style_index_0_id_4a1b87c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zoom[data-v-4a1b87c9]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-4a1b87c9],.zoom[data-v-4a1b87c9]{transition:transform .2s}.image[data-v-4a1b87c9]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-4a1b87c9]{font-size:14px}.link[data-v-4a1b87c9]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
// Extensions

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
  name: 'v-tab-item',
  props: {
    id: String
  },
  methods: {
    genWindowItem() {
      const item = _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].options.methods.genWindowItem.call(this);
      item.data.domProps = item.data.domProps || {};
      item.data.domProps.id = this.id || this.value;
      return item;
    }

  }
}));

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/RecommendedProducts.vue?vue&type=template&id=4a1b87c9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.$vuetify.theme.dark ? 'yellow' : 'yellow darken-1'},[_c('v-container',{attrs:{"fluid":""}},[_c('v-row',{staticClass:"mx-auto pb-5",staticStyle:{"max-width":"1200px"},attrs:{"mb":"10"}},_vm._l((_vm.data),function(plan,ix){return _c('v-col',{key:("plan-" + ix),attrs:{"cols":"12","md":"4"}},[_c('v-hover',{staticClass:"card",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{staticClass:"mx-auto transition-swing",class:hover ? 'zoom' : 'notzoom',attrs:{"elevation":hover ? 24 : 4,"color":plan.color,"max-width":"500","height":"610"}},[_c('h4',{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{"textContent":_vm._s(plan.name)}}),_vm._v(" "),_c('v-img',{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{"src":plan.mainImg,"alt":"","width":"250","lazy-src":plan.mainImg,"aspect-ratio":"1"}}),_vm._v(" "),_c('v-card-text',{staticClass:"subtitle-1 black--text",domProps:{"textContent":_vm._s(plan.intro)}}),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","bottom":"0","right":"10px","display":"block","margin-right":"5%"}},[(!plan.hasSubCategories)?_c('div',[_c('nuxt-link',{staticClass:"link",attrs:{"to":("/product/" + (plan._id))}},[_c('v-btn',{staticClass:"my-3",attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp,"text":"","outlined":"","black":""}},[_c('v-icon',{attrs:{"left":"","large":"","color":"primary"}},[_vm._v("mdi-play")]),_vm._v("View")],1)],1)],1):_vm._e(),_vm._v(" "),(plan.hasSubCategories)?_c('div',[_c('nuxt-link',{staticClass:"link align-center",attrs:{"to":("/category/" + (plan.name.toLowerCase()))}},[_c('v-btn',{staticClass:"my-3",attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp,"text":"","outlined":"","black":""}},[_c('v-icon',{attrs:{"left":"","large":"","color":"primary"}},[_vm._v("mdi-play")]),_vm._v("View")],1)],1)],1):_vm._e()]),_vm._v(" "),(plan.productId.length !== 0)?_c('div',[_c('div',{staticClass:"d-inline black--text pa-2",staticStyle:{"position":"absolute","bottom":"0","left":"0","display":"block","margin-left":"2%"}},[_vm._v("\n                "+_vm._s(plan.productId)+"\n              ")])]):_c('div',[_c('div',{staticClass:"ribbon ribbon-bottom-left"},[_c('span',[_vm._v("More Products")])])])],1)]}}],null,true)})],1)}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/RecommendedProducts.vue?vue&type=template&id=4a1b87c9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/RecommendedProducts.vue?vue&type=script&lang=js&
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
/* harmony default export */ var RecommendedProductsvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    link() {}

  }
});
// CONCATENATED MODULE: ./components/sections/RecommendedProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_RecommendedProductsvue_type_script_lang_js_ = (RecommendedProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(208);

// CONCATENATED MODULE: ./components/sections/RecommendedProducts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(279)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_RecommendedProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a1b87c9",
  "0258f86d"
  
)

/* harmony default export */ var RecommendedProducts = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["c" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(258);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(267);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".list{font-size:14px}.configInfo{box-shadow:2px 3px 4px rgba(0,0,0,.3);margin:5%}.table{margin:2% 2% 5%}th{background-color:#ece5e5;padding:20px;color:#000}table tbody tr:nth-child(2n) td{background:#f3efef;color:#000}#about{padding-left:20px;padding-right:20px}td{padding:10px;font-size:14px;text-transform:uppercase;letter-spacing:1px}.video{display:block;width:600px;height:400px;margin:5% auto}.carousel-image{margin-left:auto;margin-right:auto;height:auto;width:50%;margin-top:40px}@media screen and (max-width:990px){.carousel-height{height:\"100vh\"}.carousel-image{width:35%}}@media screen and (max-width:658px){.table{margin:2% 2% 5%}.carousel-height{height:20vh}.carousel-image{width:75%}th{padding-left:10px;padding-right:10px;font-size:14px}table td{text-align:left;font-size:11px;padding:10px}table td:last-child{border-right:none}table tbody tr:nth-child(2n) td{background:#f3efef}.video{max-width:300px;max-height:200px}}.product-img{cursor:pointer;margin-top:10px}.product-title{text-transform:uppercase;margin-bottom:15px;font-size:25px;line-height:1.2em}.colors{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.colors p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:20px}.color-box{height:35px;width:35px;margin:5px;display:inline-block;cursor:pointer;opacity:.8}.active-col{outline:1px dashed #000}.size{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.size p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:38px}.size-box{padding:12px;margin:0 5px;display:inline-block;cursor:pointer;color:#000;font-weight:400}.active-siz{background-color:#b2dfdb}.product-qty{display:inline-block;margin-top:20px;width:100%}.product-qty button.items-count{font-size:18px;line-height:12px;height:40px;width:40px;color:#000}.product-qty .qty{height:40px;text-align:center;width:70px;vertical-align:top;color:#000}.qty{border:1px solid #ced4da;border-radius:2px;color:#666;font-size:15px;font-weight:700;margin:0 -5px}.sub-title{color:#000;font-weight:700;padding-right:38px}.cart-btn{margin:15px 0;border-bottom:1px solid #e5e5e5}.cart-btn i{padding:0 10px}.socal-link{padding:0;margin:20px 0 0;list-style:none;display:block}.socal-link li{list-style:none;display:inline-block;margin:0 8px}.socal-link li a{border:1px solid #ddd;color:#666;font-size:15px;line-height:36px;padding:8px 12px}.socal-link li a:hover{background:#ff5252;color:#fff}.activeimg{border:1px solid #000}.overview{margin-top:30px}:root{--primary-color:#333;--secondary-color:#444;--ternary-color:#555;--light-color:#ccc;--light-secondary-color:#ddd;--light-ternary-color:#eee;--overlay-color:rgba(0,0,0,0.7)}*{box-sizing:border-box;margin:0;padding:0}body{font-family:\"Catamaran\",sans-serif;line-height:1.6;color:#333;color:var(--primary-color);font-size:1.1rem}h1,h2,h3,h4{line-height:1.3}a{color:#444;color:var(--secondary-color)}ul{list-style:none}img{width:100%}.section-showcase{margin:4rem 3rem}.section-showcase h1{font-size:3rem;color:#333;color:var(--primary-color)}.section-large-text-inner h2{font-size:5rem;margin-top:1rem}.section-large-text-inner h3{font-size:2rem}.section-large-text-inner p{font-size:1.5rem;margin-top:1rem}table{border-collapse:collapse;background-color:#fff;text-align:left;overflow:hidden;width:100%}table,thead{box-shadow:0 5px 10px #e1e5ee}th{text-transform:uppercase;letter-spacing:.1rem;font-size:.7rem;font-weight:900}td,th{padding:1rem 2rem}td{color:#000}a{text-decoration:none;color:#2962ff}.status{border-radius:.2rem;background-color:red;padding:.2rem 1rem;text-align:center}.status-pending{background-color:#fff0c2;color:#a68b00}.status-paid{background-color:#c8e6c9;color:#388e3c}.status-unpaid{background-color:#ffcdd2;color:#c62828}.amount{text-align:right}tr:nth-child(2n){background-color:#f4f6fb}#small-hero{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b307f70c", content, true, context)
};

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Product.vue?vue&type=template&id=5da67ce4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',_vm._l((_vm.data),function(product){return _vm._ssrNode("<div>","</div>",[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"6","sm":"12"}},[_c('v-carousel',{staticClass:"carousel-height",attrs:{"hide-delimiter-background":""}},_vm._l((product.img),function(img){return _c('v-carousel-item',{key:img.id,staticClass:"carousel-image",attrs:{"reverse-transition":"fade-transition","transition":"fade-transition"}},[_c('v-img',{attrs:{"src":img.image,"lazy-src":img.image}})],1)}),1)],1),_vm._v(" "),_c('v-col',{staticClass:"grey lighten-4",attrs:{"cols":"12","md":"6","sm":"12"}},[_c('div',{staticClass:"section-showcase",attrs:{"id":"home"}},[_c('h1',{staticClass:"\n              d-inline\n              pa-2\n              mt-10\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            "},[_vm._v("\n            "+_vm._s(product.name.toUpperCase())+"\n          ")]),_vm._v(" "),_c('p',{staticClass:"mt-10"},[_vm._v("\n            "+_vm._s(product.intro)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"d-inline pa-2 mt-10 yellow accent-4 white--text"},[_vm._v("\n            Product ID\n          ")]),_vm._v(" "),_c('div',{staticClass:"d-inline black white--text pa-2"},[_vm._v("\n            "+_vm._s(product.productId)+"\n          ")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('nuxt-link',{staticClass:"learn",attrs:{"exact":"","to":"/enquiry"}},[_c('v-btn',{attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp,"text":"","outlined":"","white":""}},[_c('v-icon',{attrs:{"left":"","large":"","color":"primary"}},[_vm._v("mdi-play")]),_vm._v("Enquire\n              Now")],1)],1)],1)])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"overlay yellow darken-2\">","</div>",[_c('v-tabs',{staticClass:"yellow darken-2",attrs:{"pb":"20","black--text":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tabs-slider',{staticClass:"yellow darken-2"}),_vm._v(" "),_c('v-tab',{attrs:{"href":"#features"}},[_vm._v(" Features ")]),_vm._v(" "),_c('v-tab',{directives:[{name:"show",rawName:"v-show",value:(product.accessories.length != 0),expression:"product.accessories.length != 0"}],attrs:{"href":"#accessories"}},[_vm._v("\n          Accessories")]),_vm._v(" "),_c('v-tab',{directives:[{name:"show",rawName:"v-show",value:(product.tables.length != 0),expression:"product.tables.length != 0"}],attrs:{"href":"#config"}},[_vm._v("\n          Configuration\n        ")]),_vm._v(" "),_c('v-tab',{directives:[{name:"show",rawName:"v-show",value:(product.videos.length > 0),expression:"product.videos.length > 0"}],attrs:{"href":"#video"}},[_vm._v("\n          Video Tutorials\n        ")])],1),_vm._ssrNode(" "),_c('v-tabs-items',{model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tab-item',{key:1,attrs:{"value":"features"}},[_c('v-row',{staticClass:"blue-grey darken-4",attrs:{"fluid":"","mt":"10","pb":"10"}},[_c('v-col',{attrs:{"cols":"12","md":"12","sm":"12"}},[_c('div',{staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"}},_vm._l((product.description),function(paragraph){return _c('div',{key:paragraph.id},[_c('p',{staticClass:"white--text mt-10",staticStyle:{"line-height":"30px","font-size":"16px","margin-bottom":"20px","padding-left":"20px","padding-right":"20px"}},[_vm._v("\n                    "+_vm._s(paragraph.paragraph)+"\n                  ")])])}),0),_vm._v(" "),_c('v-card',{staticClass:"ml-2 mr-2 mb-2"},_vm._l((product.features),function(feature){return _c('v-col',{key:feature.id,attrs:{"cols":"12","md":"12","sm":"12","align":"center"}},[_c('h4',{staticClass:"\n                      text-uppercase\n                      yellow\n                      lighten-2\n                      text-center\n                      mt-10\n                      mb-3\n                      pt-5\n                      pl-2\n                      pr-2\n                      pb-5\n                    ",staticStyle:{"letter-spacing":"0.15em","border-bottom":"2px solid #fde36d","box-shadow":"0 10px 10px -10px"},domProps:{"textContent":_vm._s(feature.heading)}}),_vm._v(" "),_vm._l((feature.list),function(item){return _c('v-list-item',{key:item.listItem,staticClass:"list pt-0 lighten-2",staticStyle:{"text-align":"left"}},[_vm._v("\n                    "+_vm._s(item.listItem)+"\n                  ")])})],2)}),1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',{key:2,attrs:{"value":"accessories"}},[_c('v-card',[_c('SectionsFeaturedProducts',{attrs:{"color":'blue-grey darken-4',"data":product.accessories}})],1)],1),_vm._v(" "),_c('v-tab-item',{key:3,attrs:{"value":"config"}},[_c('v-card',{staticClass:"blue-grey darken-4"},[_c('v-card-text',_vm._l((product.configurationIntro),function(paragraph){return _c('div',{key:paragraph.id},[_c('p',{staticClass:"white--text mt-5",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"5px"}},[_vm._v("\n                  "+_vm._s(paragraph.paragraph)+"\n                ")])])}),0),_vm._v(" "),_c('v-card',{staticClass:"mx-auto transition-swing mt-10 ml-2 mr-2 mb-2",attrs:{"min-height":"600","elevation":_vm.hover ? 24 : 6}},_vm._l((product.tables),function(table){return _c('v-row',{key:table.id,staticClass:"flex-row mr-4 ml-4",attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","md":"12","align-self":"center"}},[_c('h4',{staticClass:"\n                      text-uppercase\n                      yellow\n                      lighten-2\n                      text-center\n                      mt-10\n                      mb-3\n                      pt-5\n                      pl-2\n                      pr-2\n                      pb-5\n                    ",staticStyle:{"letter-spacing":"0.15em","border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px"},domProps:{"textContent":_vm._s(table.title)}})]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"4","align-self":"center"}},[_c('v-img',{staticClass:"mx-auto",attrs:{"max-height":"450","src":table.image,"max-width":"300","lazy-src":table.image}})],1),_vm._v(" "),_c('v-col',{staticClass:"mt-5 mb-5",attrs:{"cols":"12","md":"8","align-self":"center"}},[_c('div',{staticClass:"white--text"},[_c('table',[_c('thead',[_c('tr',_vm._l((table.columns),function(column,index){return _c('th',{key:index},[_vm._v("\n                            "+_vm._s(column)+"\n                          ")])}),0)]),_vm._v(" "),_c('tbody',_vm._l((table.items),function(item,index){return _c('tr',{key:index},_vm._l((table.columns),function(column,columnIndex){return _c('td',{key:columnIndex,staticClass:"black--text"},[_vm._v("\n                            "+_vm._s(item[column])+"\n                          ")])}),0)}),0)])])])],1)}),1)],1)],1),_vm._v(" "),_c('v-tab-item',{key:4,attrs:{"value":"video"}},[_c('v-card',{staticClass:"blue-grey darken-4"},_vm._l((product.videos),function(video){return _c('div',{key:video.title},[_c('v-col',{attrs:{"cols":"12","md":"12","align-self":"center"}},[_c('h4',{staticClass:"\n                    text-uppercase\n                    yellow\n                    lighten-2\n                    text-center\n                    mt-10\n                    mb-3\n                    pt-5\n                    pl-2\n                    pr-2\n                    pb-5\n                  ",staticStyle:{"letter-spacing":"0.15em","border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px"},domProps:{"textContent":_vm._s(video.title)}}),_vm._v(" "),_c('iframe',{staticClass:"video",staticStyle:{"background-color":"white"},attrs:{"src":video.video,"title":"YouTube video player","frameborder":"0","allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen":""}})])],1)}),0)],1),_vm._v(" "),_c('v-tab-item',{key:5,attrs:{"value":"more"}})],1)],2),_vm._ssrNode(" <h4 class=\"\n        text-h4 text-center\n        font-weight-bold\n        mb-xs-4\n        mt-10\n        mb-5\n        pl-5\n        pr-5\n      \">\n      SIMILAR PRODUCTS\n    </h4> "),_c('SectionsRecommendedProducts',{attrs:{"data":product.recommendedProducts}})],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Product.vue?vue&type=template&id=5da67ce4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Product.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Productvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    tab: 'features',
    areFeatures: true,
    areAccessories: true,
    areConfig: true,
    areVideos: true,
    tutorials: ''
  }),
  // computed: {
  //   videos() {
  //     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  //     return (this.tutorials = this.data.videos.split(' '))
  //   },
  // },
  methods: {
    showAccessories() {
      this.data.accesories === [] ? this.areAccessories = false : this.areAccessories = true;
      return this.areAccessories;
    }

  }
});
// CONCATENATED MODULE: ./components/sections/Product.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Productvue_type_script_lang_js_ = (Productvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js
var VCarousel = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js
var VCarouselItem = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
var VTabItem = __webpack_require__(282);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 1 modules
var VTabs = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
var VTabsItems = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
var VTabsSlider = __webpack_require__(100);

// CONCATENATED MODULE: ./components/sections/Product.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(301)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Productvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "195f9506"
  
)

/* harmony default export */ var Product = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsFeaturedProducts: __webpack_require__(229).default,SectionsRecommendedProducts: __webpack_require__(285).default})


/* vuetify-loader */
















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["c" /* VCardText */],VCarousel: VCarousel["a" /* default */],VCarouselItem: VCarouselItem["a" /* default */],VCol: VCol["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VListItem: VListItem["a" /* default */],VRow: VRow["a" /* default */],VTab: VTab["a" /* default */],VTabItem: VTabItem["a" /* default */],VTabs: VTabs["a" /* default */],VTabsItems: VTabsItems["a" /* default */],VTabsSlider: VTabsSlider["a" /* default */]})


/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_48314baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_48314baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_48314baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_48314baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_48314baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".productid-enter-active[data-v-48314baa],.productid-leave-active[data-v-48314baa]{transition:opacity .5s}.productid-enter[data-v-48314baa],.productid-leave-active[data-v-48314baa]{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_id.vue?vue&type=template&id=48314baa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SectionsProduct',{attrs:{"data":_vm.item}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/_id.vue?vue&type=template&id=48314baa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  transition: 'productid',

  data() {
    return {
      id: this.$route.params.id,
      item: []
    };
  },

  created() {
    this.getProduct();
  },

  methods: {
    async getProduct() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };

      try {
        const response = await this.$axios.get(`https://cbsbackend.herokuapp.com/api/products/${this.$route.params.id}`, config);
        this.item.push(response.data);
        return this.item;
      } catch (error) {}
    }

  }
});
// CONCATENATED MODULE: ./pages/product/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/product/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(375)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48314baa",
  "74f8d205"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionsProduct: __webpack_require__(335).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map