exports.ids = [26];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=sections-timeline.js.map