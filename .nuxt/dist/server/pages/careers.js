exports.ids = [34,7,13];
exports.modules = {

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("65c238dc", content, true, context)
};

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/HeroAlt.vue?vue&type=template&id=0d54977c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"hero"}},_vm._l((_vm.heroAlt),function(item,i){return _c('v-img',{key:i,staticClass:"gradient-fill",attrs:{"width":"100%","height":"30vh","src":item.src}},[_c('v-container',{attrs:{"fill-height":""}},[_c('v-row',{staticClass:"text-center"},[_c('v-col',{staticClass:"text-center",attrs:{"col":"12"}},[_c('h1',{staticClass:"\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            ",staticStyle:{"border-bottom":"4px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[_c('v-icon',[_vm._v(_vm._s(item.icon))]),_vm._v("\n            "+_vm._s(item.heading.toUpperCase())+"\n          ")],1)])],1)],1)],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/HeroAlt.vue?vue&type=template&id=0d54977c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/HeroAlt.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroAltvue_type_script_lang_js_ = ({
  props: {
    heroAlt: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/sections/HeroAlt.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_HeroAltvue_type_script_lang_js_ = (HeroAltvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(210);

// CONCATENATED MODULE: ./components/sections/HeroAlt.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(224)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_HeroAltvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6881afdd"
  
)

/* harmony default export */ var HeroAlt = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/contactForm.vue?vue&type=template&id=c2870b58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-form',[_c('v-row',{staticClass:"mb-n6"},[_c('v-col',[_c('v-text-field',{attrs:{"label":"Name","dense":"","outlined":""}})],1),_vm._v(" "),_c('v-col',[_c('v-text-field',{attrs:{"label":"Email","dense":"","outlined":""}})],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mb-n6"},[_c('v-col',[_c('v-text-field',{attrs:{"label":"Subject","dense":"","outlined":""}})],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mb-n6"},[_c('v-col',[_c('v-textarea',{attrs:{"dense":"","label":"Your Message","auto-grow":"","outlined":"","rows":"8","row-height":"20"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-btn',{staticClass:"my-2",attrs:{"color":"primary"}},[_vm._v("SEND MESSAGE")]),_c('v-btn',{staticClass:"my-2 ml-3"},[_vm._v("clear")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/contactForm.vue?vue&type=template&id=c2870b58&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(214);

// CONCATENATED MODULE: ./components/sections/contactForm.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "189cef9c"
  
)

/* harmony default export */ var contactForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1d9d7f6e", content, true, context)
};

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_careers_vue_vue_type_style_index_0_id_5f3182c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(316);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_careers_vue_vue_type_style_index_0_id_5f3182c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_careers_vue_vue_type_style_index_0_id_5f3182c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_careers_vue_vue_type_style_index_0_id_5f3182c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_careers_vue_vue_type_style_index_0_id_5f3182c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#footer-top[data-v-5f3182c8]{display:none!important}.contact-enter-active[data-v-5f3182c8],.contact-leave-active[data-v-5f3182c8]{transition:opacity .5s}.contact-enter[data-v-5f3182c8],.contact-leave-active[data-v-5f3182c8]{opacity:0}blockquote[data-v-5f3182c8]{font-size:15px;width:80%;margin:10px auto;font-style:italic;position:relative;text-transform:uppercase;letter-spacing:1px;font-weight:700;text-indent:15px;color:#3d3c3c;border-bottom:2px solid #f3e38a;box-shadow:0 4px 6px -6px #222}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/careers.vue?vue&type=template&id=5f3182c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('SectionsHeroAlt',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'white',attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('v-responsive',{staticClass:"max-auto mx-auto text-center",class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'yellow darken-1'},[_c('div',{staticClass:"hero-text",staticStyle:{"margin-top":"5px","margin-bottom":"5px"}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('blockquote',[_c('a',{staticClass:"email black--text",attrs:{"href":"tel:01572723665"}},[_vm._v("Tel: +44 (0) 1572 723 665")])])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('blockquote',[_c('a',{staticClass:"email black--text",attrs:{"href":"mailto: sales@cbsproducts.com"}},[_vm._v("Email: sales@cbsproducts.com")])])])],1)],1)]),_vm._v(" "),_c('v-container',[_c('v-row',{staticClass:"py-16 ml-20"},[_c('v-col',{attrs:{"md":"9","cols":"12"}},[_c('p',{staticClass:"mb-10"},[_vm._v("\n              Thank you for showing interest in our company. Please send us\n              your CV below and someone will be in touch.\n            ")]),_vm._v(" "),_c('contactForm')],1),_vm._v(" "),_c('v-col',{attrs:{"md":"3","cols":"12"}})],1),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"md":"9","cols":"12"}},[_c('iframe',{staticStyle:{"border":"0","display":"block"},attrs:{"src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.8700203174435!2d-0.7338425846941268!3d52.68038493208387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487780f4ac1c42a7%3A0xa65da3dcfdd6588d!2sC%20B%20S%20Products%20(KT)%20Ltd!5e0!3m2!1sen!2suk!4v1626176078725!5m2!1sen!2suk","width":"100%","height":"600","frameborder":"0","allowfullscreen":"true","aria-hidden":"false","tabindex":"0"}})]),_vm._v(" "),_c('v-col',{attrs:{"md":"3","cols":"12"}},[_c('v-list',{staticClass:"transparent",attrs:{"two-line":""}},[_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"primary"}},[_vm._v(" mdi-map-marker ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("ADDRESS")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("CBS Products (KT),\n                  ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Pillings Road ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(" Rutland ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("LE15 6QF")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("UK")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"primary"}},[_vm._v(" mdi-email ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("EMAIL")]),_vm._v(" "),_c('v-list-item-subtitle',[_c('a',{staticClass:"email black--text",attrs:{"href":"mailto: sales@cbsproducts.com"}},[_vm._v("sales@cbsproducts.com")])])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"primary"}},[_vm._v(" mdi-phone ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("PHONE")]),_vm._v(" "),_c('v-list-item-subtitle',[_c('a',{staticClass:"email black--text",attrs:{"href":"tel:01572723665"}},[_vm._v("+44 (0) 1572 723 665")])])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"text-h6 font-weight-bold mt-12 mb-5"},[_vm._v("\n              Business Hours\n            ")]),_vm._v(" "),_c('v-list',{staticClass:"transparent",attrs:{"two-line":""}},[_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"primary"}},[_vm._v(" mdi-clock ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("MONDAY to THURDAY ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("8.30am to 5pm")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"primary"}},[_vm._v(" mdi-clock ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("FRIDAY")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("8.30am to 3.45pm")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-icon',[_c('v-icon',{attrs:{"color":"primary"}},[_vm._v(" mdi-clock ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("SATURDAY & SUNDAY")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("CLOSED")])],1)],1)],1)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/careers.vue?vue&type=template&id=5f3182c8&scoped=true&

// EXTERNAL MODULE: ./components/sections/contactForm.vue + 2 modules
var contactForm = __webpack_require__(292);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/careers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var careersvue_type_script_lang_js_ = ({
  transition: 'contact',
  components: {
    contactForm: contactForm["default"]
  },

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' Contact Us ',
        icon: 'mdi-contacts'
      }],
      ourTeam: [{
        name: 'Andy Sibun',
        position: 'Technical Manager',
        phone: '01572898515',
        email: 'andy.sibun@cbsproducts.com',
        photo: ''
      }]
    };
  },

  head() {
    return {
      title: 'Contact Us',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Please do not hesitate to get in touch, either via this form or through phone or email. We will gladly assist with your enquiry.'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/careers.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_careersvue_type_script_lang_js_ = (careersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VResponsive/VResponsive.js
var VResponsive = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(210);

// CONCATENATED MODULE: ./pages/careers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(350)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_careersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f3182c8",
  "0ae48a20"
  
)

/* harmony default export */ var careers = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(226).default})


/* vuetify-loader */












installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemIcon: VListItemIcon["a" /* default */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */],VResponsive: VResponsive["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=careers.js.map