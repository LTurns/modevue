exports.ids = [21];
exports.modules = {

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(380);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("79e656b4", content, true, context)
};

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winchesandtrailers_vue_vue_type_style_index_0_id_5425a02a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winchesandtrailers_vue_vue_type_style_index_0_id_5425a02a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winchesandtrailers_vue_vue_type_style_index_0_id_5425a02a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winchesandtrailers_vue_vue_type_style_index_0_id_5425a02a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winchesandtrailers_vue_vue_type_style_index_0_id_5425a02a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".telecoms-enter-active[data-v-5425a02a],.telecoms-leave-active[data-v-5425a02a]{transition:opacity .5s}.telecoms-enter[data-v-5425a02a],.telecoms-leave-active[data-v-5425a02a]{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/winchesandtrailers.vue?vue&type=template&id=5425a02a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"grey lighten-4"},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","align":"center"}},[_c('SectionsHeroAlt',{attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('v-col',{staticClass:"blue-grey darken-4"},[_c('SectionsBlockQuote',{attrs:{"text":"white--text"}},[_vm._t("default",[_vm._v(" Our Klein Tools are used for... ")])],2)],1),_vm._v(" "),_c('v-col',{staticClass:"yellow darken-2"},[_c('SectionsSearch',{attrs:{"data":_vm.filteredList}})],1),_vm._v(" "),_c('SectionsFeaturedProducts',{attrs:{"data":_vm.filteredList}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/winchesandtrailers.vue?vue&type=template&id=5425a02a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/winchesandtrailers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var winchesandtrailersvue_type_script_lang_js_ = ({
  transition: 'telecoms',

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' WINCHES AND TRAILERS ',
        icon: '',
        image: 'telecoms.svg'
      }],
      filteredList: []
    };
  },

  created() {
    this.getAllTelecomsProducts();
  },

  methods: {
    async getAllTelecomsProducts() {
      this.listLoading = true;
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };

      try {
        const {
          data
        } = await this.$axios.get('https://cbsbackend.herokuapp.com/api/products', config);
        data.forEach(product => {
          if (product.category === 'Telecoms') {
            this.filteredList.push(product);
          }
        });
        return this.filteredList;
      } catch (err) {
        throw new Error('Error Fetching Products');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/winchesandtrailers.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_winchesandtrailersvue_type_script_lang_js_ = (winchesandtrailersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(7);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(317);

// CONCATENATED MODULE: ./pages/winchesandtrailers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(379)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_winchesandtrailersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5425a02a",
  "376b8acd"
  
)

/* harmony default export */ var winchesandtrailers = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(69).default,SectionsBlockQuote: __webpack_require__(110).default,SectionsSearch: __webpack_require__(111).default,SectionsFeaturedProducts: __webpack_require__(70).default})


/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=winchesandtrailers.js.map