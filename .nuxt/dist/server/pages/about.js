exports.ids = [30,13,24,26];
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

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Team.vue?vue&type=template&id=660a5c65&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'},[_c('v-container',{staticClass:"text-center",attrs:{"fluid":""}},[_c('v-row',_vm._l((_vm.ourTeam),function(item,i){return _c('v-col',{key:("person-" + i),staticClass:"column",attrs:{"cols":"12","md":"12"}},[_c('v-sheet',{staticClass:"py-5 px-5",attrs:{"shaped":""}},[_c('v-avatar',{attrs:{"size":"150","elevation":"5"}},[_c('img',{attrs:{"src":("/team/" + (item.photo)),"lazy-src":("team/" + (item.photo)),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"text-h5 text-uppercase font-weight-black mt-6 mb-2"},[_vm._v("\n            "+_vm._s(item.name)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"text--disabled text-uppercase"},[_vm._v("\n            "+_vm._s(item.position)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"text-h6 mt-8"},[_c('a',{staticClass:"email black--text",attrs:{"href":("tel:" + (item.phone))}},[_vm._v("Tel: "+_vm._s(item.phone))])]),_vm._v(" "),_c('div',{staticClass:"subtitle-1 mt-3"},[_c('a',{staticClass:"email black--text",attrs:{"href":("mailto:" + (item.email))}},[_vm._v("email: "+_vm._s(item.email)+"\n            ")])])],1)],1)}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Team.vue?vue&type=template&id=660a5c65&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Team.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Teamvue_type_script_lang_js_ = ({
  props: {
    ourTeam: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/sections/Team.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Teamvue_type_script_lang_js_ = (Teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(14);

// CONCATENATED MODULE: ./components/sections/Team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74159cbf"
  
)

/* harmony default export */ var Team = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("56407fa2", content, true)

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#1e1e1e}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:\"\";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:flex;padding-bottom:24px}.v-timeline-item__body{position:relative;height:100%;flex:1 1 auto}.v-timeline-item__divider{position:relative;min-width:96px;display:flex;align-items:center;justify-content:center}.v-timeline-item__dot{z-index:2;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{border-radius:50%;display:flex;justify-content:center;align-items:center}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after,.v-timeline-item__body>.v-card:not(.v-card--flat):before{content:\"\";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after{border-right-color:inherit}.v-timeline-item__body>.v-card:not(.v-card--flat):before{top:calc(50% - 8px)}.v-timeline--align-top .v-timeline-item__dot{align-self:start}.v-timeline--align-top .v-timeline-item__body>.v-card:before{top:12px}.v-timeline--align-top .v-timeline-item__body>.v-card:after{top:10px}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense):before{right:auto;left:calc(50% - 1px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before{right:47px;left:auto}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense:before{right:auto;left:47px}.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before{left:auto;right:47px}.v-timeline--dense .v-timeline-item{flex-direction:row-reverse!important}.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 96px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.v-timeline--reverse.v-timeline--dense .v-timeline-item{flex-direction:row!important}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e810a50c", content, true, context)
};

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Timeline.vue?vue&type=template&id=79c1c014&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-16",attrs:{"id":"timeline"}},[_c('v-container',[[_c('v-timeline',_vm._l((_vm.years),function(year,i){return _c('v-timeline-item',{key:i,attrs:{"color":year.color,"small":""},scopedSlots:_vm._u([{key:"opposite",fn:function(){return [_c('span',{class:("headline font-weight-bold " + (year.color) + "--text"),domProps:{"textContent":_vm._s(year.year)}})]},proxy:true}],null,true)},[_vm._v(" "),_c('div',{staticClass:"py-4"},[_c('h2',{class:("headline font-weight-light mb-4 " + (year.color) + "--text")},[_vm._v("\n              "+_vm._s(year.title)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"black--text"},[_vm._v("\n              "+_vm._s(year.info)+"\n            ")])])])}),1)]],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Timeline.vue?vue&type=template&id=79c1c014&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Timeline.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Timelinevue_type_script_lang_js_ = ({
  data() {
    return {
      years: [{
        color: 'orange',
        year: '1971',
        title: 'CBS Is Established',
        info: 'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.'
      }, {
        color: 'orange',
        year: '1980',
        title: 'CBS Diversifies',
        info: 'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.'
      }, {
        color: 'orange',
        year: '1990',
        title: 'CBS gains big clients',
        info: 'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.'
      }, {
        color: 'orange',
        year: '2000',
        title: 'Where we are Now',
        info: 'In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war.'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/Timeline.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Timelinevue_type_script_lang_js_ = (Timelinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTimeline/VTimeline.sass
var VTimeline = __webpack_require__(295);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTimeline/VTimeline.js
// Styles

 // Mixins


/* harmony default export */ var VTimeline_VTimeline = (Object(mixins["a" /* default */])(themeable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-timeline',

  provide() {
    return {
      timeline: this
    };
  },

  props: {
    alignTop: Boolean,
    dense: Boolean,
    reverse: Boolean
  },
  computed: {
    classes() {
      return {
        'v-timeline--align-top': this.alignTop,
        'v-timeline--dense': this.dense,
        'v-timeline--reverse': this.reverse,
        ...this.themeClasses
      };
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-timeline',
      class: this.classes
    }, this.$slots.default);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTimeline/VTimelineItem.js
// Types

 // Mixins



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */]
/* @vue/component */
);
/* harmony default export */ var VTimelineItem = (baseMixins.extend().extend({
  name: 'v-timeline-item',
  inject: ['timeline'],
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    fillDot: Boolean,
    hideDot: Boolean,
    icon: String,
    iconColor: String,
    large: Boolean,
    left: Boolean,
    right: Boolean,
    small: Boolean
  },
  computed: {
    hasIcon() {
      return !!this.icon || !!this.$slots.icon;
    }

  },
  methods: {
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__body'
      }, this.$slots.default);
    },

    genIcon() {
      if (this.$slots.icon) {
        return this.$slots.icon;
      }

      return this.$createElement(VIcon["a" /* default */], {
        props: {
          color: this.iconColor,
          dark: !this.theme.isDark,
          small: this.small
        }
      }, this.icon);
    },

    genInnerDot() {
      const data = this.setBackgroundColor(this.color);
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__inner-dot',
        ...data
      }, [this.hasIcon && this.genIcon()]);
    },

    genDot() {
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__dot',
        class: {
          'v-timeline-item__dot--small': this.small,
          'v-timeline-item__dot--large': this.large
        }
      }, [this.genInnerDot()]);
    },

    genDivider() {
      const children = [];
      if (!this.hideDot) children.push(this.genDot());
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__divider'
      }, children);
    },

    genOpposite() {
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__opposite'
      }, this.$slots.opposite);
    }

  },

  render(h) {
    const children = [this.genBody(), this.genDivider()];
    if (this.$slots.opposite) children.push(this.genOpposite());
    return h('div', {
      staticClass: 'v-timeline-item',
      class: {
        'v-timeline-item--fill-dot': this.fillDot,
        'v-timeline-item--before': this.timeline.reverse ? this.right : this.left,
        'v-timeline-item--after': this.timeline.reverse ? this.left : this.right,
        ...this.themeClasses
      }
    }, children);
  }

}));
// CONCATENATED MODULE: ./components/sections/Timeline.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Timelinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d76f30ba"
  
)

/* harmony default export */ var Timeline = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VContainer: VContainer["a" /* default */],VTimeline: VTimeline_VTimeline,VTimelineItem: VTimelineItem})


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(314);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-enter-active,.about-leave-active{transition:opacity .5s}.about-enter,.about-leave-active{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=86355104&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('SectionsHeroAlt',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'white',attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('h3',{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:_vm.$vuetify.theme.dark ? 'black--text' : 'black--text',staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[_vm._v("\n              WHO ARE WE?\n            ")])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('v-btn',{staticClass:"my-3 mb-xs-4 mt-10 mb-5",attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp,"text":"","outlined":"","white":""}},[_c('v-icon',{attrs:{"left":"","large":"","color":"primary"}},[_vm._v("mdi-play")]),_c('a',{staticClass:"learn black--text",attrs:{"href":"#team"}},[_vm._v("Meet The Team")])],1)],1),_vm._v(" "),_c('v-col',{staticClass:"black--text",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"},attrs:{"cols":"12","md":"6"}},[_c('p',[_vm._v("\n              CBS Products (KT), Ltd. is a leading provider of specialised\n              equipment solutions for the construction of power transmission\n              lines and telecommunications networks around the world.\n              Established in 1971 in Oakham, Rutland, England, the company\n              began to design and manufacture cable jointing equipment and\n              gradually diversified into winching equipment for the power\n              transmission industry. With the de-regulation of the electricity\n              industry, power companies entered the field of\n              telecommunications, installing fibre optic cables along\n              transmission line networks. CBS seized this opportunity to\n              develop and build a line of pullers, tensioners and running out\n              blocks for high production cable placing.\n            ")]),_vm._v(" "),_c('div',{staticClass:"text-h4 pa-5 my-4 font-weight-thin black--text"},[_vm._v("\n              CBS has become the partner of choice in a number of high\n              profile, international fibre optic cable projects around the\n              globe.\n            ")])]),_vm._v(" "),_c('v-col',{staticClass:"black--text",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"},attrs:{"cols":"12","md":"6"}},[_c('p',[_vm._v("\n              Our success in the UK telecoms market meant that the company’s\n              expertise and know-how rapidly came to the attention of the\n              major players in the realm of fibre optic cable. Consequently,\n              CBS has become the partner of choice in a number of high\n              profile, international fibre optic cable projects around the\n              globe in which our company has demonstrated its prowess in\n              developing innovative solutions capable of withstanding extreme\n              conditions, both of climate and terrain. Towards the end of the\n              90’s the company’s continuing quest for new horizons was\n              promoted by achieving the internationally recognised Quality\n              Standard, BS EN ISO 9001. The development of the Tornado series\n              of fibre optic cable blowing machines proved highly successful\n              both in the UK and global telecom markets. In the UK, the\n              Tornado out-performed its competition in a most demanding\n              evaluation, enabling CBS to win a highly coveted contract as\n              exclusive suppliers of cable blowing equipment to British\n              Telecommunications (BT).\n            ")]),_vm._v(" "),_c('p',[_vm._v("\n              In 2004, CBS joined forces with GMP Tools USA to further enhance\n              the global reach and breadth of our outside plant equipment\n              capabilities. As of June 2017 the business of GMP Tools and CBS\n              Products were acquired by Klein Tools of the USA. Renamed CBS\n              Products (KT), Ltd., we are the successors to the same\n              engineering talent and innovative solution providers as ever.\n              Empowered with the financial and engineering resources of Klein\n              Tools USA, CBS Products has what it takes to keep your project\n              running smoothly and on schedule whether you’re in telecoms,\n              CATV or power transmission line construction; which brings us to\n              the most compelling reason to consider CBS Products when\n              planning your next cable deployment project: your bottom line.\n            ")])]),_vm._v(" "),_c('h3',{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:_vm.$vuetify.theme.dark ? 'black--text' : 'black--text',staticStyle:{"border-bottom":"2px solid #fde36d","width":"500px","box-shadow":"0 4px 6px -6px #222"}},[_vm._v("\n            OUR JOURNEY\n          ")]),_vm._v(" "),_c('SectionsTimeline'),_vm._v(" "),_c('h3',{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:_vm.$vuetify.theme.dark ? 'black--text' : 'black--text',staticStyle:{"border-bottom":"2px solid #fde36d","width":"500px","box-shadow":"0 4px 6px -6px #222"},attrs:{"id":"team"}},[_vm._v("\n            MEET THE TEAM\n          ")]),_vm._v(" "),_c('SectionsTeam',{staticClass:"mb-10",attrs:{"our-team":_vm.ourTeam}})],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=86355104&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  transition: 'about',

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' About Us ',
        icon: 'mdi-account'
      }],
      ourTeam: [{
        name: 'Andy Sibun',
        position: 'Technical Manager',
        phone: '01572 898515',
        email: 'andy.sibun@cbsproducts.com',
        photo: ''
      }, {
        name: 'Lawrence Green',
        position: 'Production Manager',
        phone: '01572 898513',
        email: 'lawrence.green@cbsproducts.com',
        photo: ''
      }, {
        name: 'Robert Davidson',
        position: 'Managing Director',
        phone: '01572 898501',
        email: 'robert.davidson@cbsproducts.com',
        photo: ''
      }, {
        name: 'Mike Turney',
        position: 'Finance Director',
        phone: '01572 898522',
        email: 'mike.turney@cbsproducts.com',
        photo: ''
      }]
    };
  },

  head() {
    return {
      title: 'About Us',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(210);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(346)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ead45c90"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(226).default,SectionsTimeline: __webpack_require__(336).default,SectionsTeam: __webpack_require__(263).default})


/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=about.js.map