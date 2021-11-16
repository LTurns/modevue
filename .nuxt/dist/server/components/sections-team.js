exports.ids = [24];
exports.modules = {

/***/ 261:
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
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(208);

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


/***/ })

};;
//# sourceMappingURL=sections-team.js.map