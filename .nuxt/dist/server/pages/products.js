exports.ids = [18];
exports.modules = {

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(374);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("31d39583", content, true, context)
};

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search{width:60%;display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;padding:3px;margin-top:1%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input:focus{outline:none}.search__btn{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn:focus{outline:none}.search__btn img{width:20px}.search[focus-within]{width:80%}.search:focus-within{width:80%}.search[focus-within] .search__input{opacity:1;cursor:auto}.search:focus-within .search__input{opacity:1;cursor:auto}.search[focus-within] .search__btn{background:#fde36d;color:#000}.search:focus-within .search__btn{background:#fde36d;color:#000}.search[focus-within] .search__btn:focus,.search[focus-within] .search__btn:hover{outline:0}.search:focus-within .search__btn:focus,.search:focus-within .search__btn:hover{outline:0}.tag{border-radius:3px 0 0 3px;color:#fff!important;display:inline-block;height:26px;line-height:26px;padding:0 20px 0 23px;position:relative;margin:0 10px 10px 0;text-decoration:none;-webkit-transition:color .2s}.tag:before{background:#dda305;border-radius:10px;box-shadow:inset 0 1px rgba(0,0,0,.25);content:\"\";height:6px;left:10px;position:absolute;width:6px;top:10px}.tag:after{border-bottom:13px solid transparent;border-left:10px solid #dda305;border-top:13px solid transparent;content:\"\";position:absolute;right:0;top:0}.tag:hover:after{border-left-color:#ff0}.products-enter-active,.products-leave-active{transition:opacity .5s}.products-enter,.products-leave-active{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products.vue?vue&type=template&id=acf4ae64&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blue-grey darken-4"},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","align":"center"}},[_c('SectionsHeroAlt',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4',attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('div',{staticClass:"yellow darken-2"},[_c('SectionsBlockQuote',[_vm._t("default",[_vm._v("\n            We have had a really exciting 2021 turning 50 years old! Some\n            highlights of the last few years can be seen in our About page. In\n            the year 1971, 50 years ago, CBS was first established in Oakham.\n            Back then,it designed and manufacture cable jointing equipment.\n            Before this, the famous building was a food hall for the locals\n            during the war. Please check us out on LinkedIn for more\n            information.\n          ")])],2),_vm._v(" "),_c('SectionsSearch',{directives:[{name:"show",rawName:"v-show",value:(_vm.productList.length != 0),expression:"productList.length != 0"}],attrs:{"data":_vm.productList}})],1),_vm._v(" "),_c('div',{staticClass:"pt-10"},[_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"category/compressors"}},[_vm._v("Compressors")]),_vm._v(" "),_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"product/tGGW0ov0fkKzK9ax7QYLHA"}},[_vm._v("Tornado")]),_vm._v(" "),_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"product/xS0KUwWdbEqPrt5pKjhfSA"}},[_vm._v("Hurricaine")]),_vm._v(" "),_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"category/accessories"}},[_vm._v("Fibre Blowing - Accessories")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.search.length != 0),expression:"search.length != 0"}]},[_c('SectionsFeaturedProducts',{attrs:{"data":_vm.productList,"color":"white"}})],1)],1),_vm._v(" "),_c('v-container',[_c('SectionsIntro',{staticClass:"pt-10 pb-10",staticStyle:{"margin-bottom":"30px"},attrs:{"color":"white","text":"text-uppercase black--text"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products.vue?vue&type=template&id=acf4ae64&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var productsvue_type_script_lang_js_ = ({
  transition: 'products',

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' Products',
        icon: 'mdi-tools'
      }],
      search: ''
    };
  },

  computed: {
    productList() {
      if (this.search !== '') {
        return this.$store.getters.Categories.filter(box => {
          return box.name.toLowerCase().includes(this.search.toLowerCase());
        });
      }

      return '';
    }

  }
});
// CONCATENATED MODULE: ./pages/products.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productsvue_type_script_lang_js_ = (productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(7);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(317);

// CONCATENATED MODULE: ./pages/products.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(373)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dc91e9ee"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(69).default,SectionsBlockQuote: __webpack_require__(110).default,SectionsSearch: __webpack_require__(111).default,SectionsFeaturedProducts: __webpack_require__(70).default,SectionsIntro: __webpack_require__(72).default})


/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=products.js.map