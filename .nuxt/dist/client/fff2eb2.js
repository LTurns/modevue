(window.webpackJsonp=window.webpackJsonp||[]).push([[3,15,23],{492:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return h}));var o=r(493),n=r(0),l=Object(n.h)("v-card__actions"),c=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),h=Object(n.h)("v-card__title");o.a},493:function(t,e,r){"use strict";r(9),r(7),r(8),r(11),r(10),r(12);var o=r(1),n=(r(22),r(184),r(495),r(224)),l=r(225),c=r(74),d=r(4);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},495:function(t,e,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},496:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},497:function(t,e,r){"use strict";r(22),r(53);var o=r(2);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},o)}}})},498:function(t,e,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("be23801a",content,!0,{sourceMap:!1})},503:function(t,e,r){"use strict";r(498)},504:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.zoom[data-v-1f5ce475]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-1f5ce475],.zoom[data-v-1f5ce475]{transition:transform .2s}.image[data-v-1f5ce475]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-1f5ce475]{font-size:14px}.link[data-v-1f5ce475]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-1f5ce475]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-1f5ce475]:after,.ribbon[data-v-1f5ce475]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-1f5ce475]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-1f5ce475]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-1f5ce475]:after,.ribbon-bottom-left[data-v-1f5ce475]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-1f5ce475]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-1f5ce475]:after{top:0;left:0}.ribbon-bottom-left span[data-v-1f5ce475]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=o},505:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}},color:{type:String,default:function(){return"feature"}}}},n=(r(503),r(41)),l=r(47),c=r.n(l),d=r(142),h=r(493),v=r(492),m=r(479),f=r(490),x=r(507),y=r(214),_=r(179),w=r(480),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.color},[r("v-container",[r("v-row",{attrs:{mb:"10"}},t._l(t.data,(function(e,o){return r("v-col",{key:o,attrs:{md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"610"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":"../"+e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),0!==e.productId.length?r("div",[r("div",{staticClass:"d-inline black--text pa-2",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[t._v("\n                "+t._s(e.productId)+"\n              ")])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"1f5ce475",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardText:v.c,VCol:m.a,VContainer:f.a,VHover:x.a,VIcon:y.a,VImg:_.a,VRow:w.a})},507:function(t,e,r){"use strict";var o=r(497),n=r(75),l=r(4),c=r(13);e.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},512:function(t,e,r){"use strict";var o=r(227),n=r(109),l=r(110),c=r(0),d=r(4),h=Object(d.a)(o.a,Object(n.a)("windowGroup","v-window-item","v-window"));e.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(c.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},515:function(t,e,r){"use strict";var o=r(70);e.a=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}})},521:function(t,e,r){var content=r(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2d62e390",content,!0,{sourceMap:!1})},522:function(t,e,r){var o=r(15)(!1);o.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=o},530:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},531:function(t,e,r){var content=r(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("10335c80",content,!0,{sourceMap:!1})},548:function(t,e,r){t.exports=r.p+"img/orangewireheader.6e5a81f.jpg"},549:function(t,e,r){"use strict";r(9),r(7),r(8),r(11),r(10),r(12);var o=r(1),n=(r(22),r(53),r(521),r(186)),l=r(126),c=r(66),d=r(228),h=r(515),v=r(0),m=r(13);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return x(x({},n.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(m.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:n.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],i=0;i<e;i++){var o=this.$createElement(l.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(c.a,{props:{size:18}},this.delimiterIcon)]);r.push(o)}return this.$createElement(h.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=n.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(v.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},550:function(t,e,r){"use strict";r(9),r(7),r(8),r(11),r(10),r(12);var o=r(1),n=r(512),l=r(179),c=r(4),d=r(0),h=r(74);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(c.a)(n.a,h.a);e.a=f.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(l.a,{staticClass:"v-carousel__item",props:m(m({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},551:function(t,e,r){"use strict";r(531)},552:function(t,e,r){var o=r(15)(!1);o.push([t.i,".zoom[data-v-4a1b87c9]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-4a1b87c9],.zoom[data-v-4a1b87c9]{transition:transform .2s}.image[data-v-4a1b87c9]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-4a1b87c9]{font-size:14px}.link[data-v-4a1b87c9]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}",""]),t.exports=o},558:function(t,e,r){"use strict";var o=r(512);e.a=o.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=o.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},574:function(t,e,r){var content=r(647);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1ea8b648",content,!0,{sourceMap:!1})},587:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}}},methods:{link:function(){}}},n=(r(551),r(41)),l=r(47),c=r.n(l),d=r(142),h=r(493),v=r(492),m=r(479),f=r(490),x=r(507),y=r(214),_=r(179),w=r(480),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.$vuetify.theme.dark?"yellow":"yellow darken-1"},[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"mx-auto pb-5",staticStyle:{"max-width":"1200px"},attrs:{mb:"10"}},t._l(t.data,(function(e,o){return r("v-col",{key:"plan-"+o,attrs:{cols:"12",md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"610"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),0!==e.productId.length?r("div",[r("div",{staticClass:"d-inline black--text pa-2",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[t._v("\n                "+t._s(e.productId)+"\n              ")])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"4a1b87c9",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardText:v.c,VCol:m.a,VContainer:f.a,VHover:x.a,VIcon:y.a,VImg:_.a,VRow:w.a})},646:function(t,e,r){"use strict";r(574)},647:function(t,e,r){var o=r(15),n=r(530),l=r(548),c=o(!1),d=n(l);c.push([t.i,'.list{font-size:14px}.configInfo{box-shadow:2px 3px 4px rgba(0,0,0,.3);margin:5%}.table{margin:2% 2% 5%}th{background-color:#ece5e5;padding:20px;color:#000}table tbody tr:nth-child(2n) td{background:#f3efef;color:#000}#about{padding-left:20px;padding-right:20px}td{padding:10px;font-size:14px;text-transform:uppercase;letter-spacing:1px}.video{display:block;width:600px;height:400px;margin:5% auto}.carousel-image{margin-left:auto;margin-right:auto;height:auto;width:50%;margin-top:40px}@media screen and (max-width:990px){.carousel-height{height:"100vh"}.carousel-image{width:35%}}@media screen and (max-width:658px){.table{margin:2% 2% 5%}.carousel-height{height:20vh}.carousel-image{width:75%}th{padding-left:10px;padding-right:10px;font-size:14px}table td{text-align:left;font-size:11px;padding:10px}table td:last-child{border-right:none}table tbody tr:nth-child(2n) td{background:#f3efef}.video{max-width:300px;max-height:200px}}.product-img{cursor:pointer;margin-top:10px}.product-title{text-transform:uppercase;margin-bottom:15px;font-size:25px;line-height:1.2em}.colors{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.colors p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:20px}.color-box{height:35px;width:35px;margin:5px;display:inline-block;cursor:pointer;opacity:.8}.active-col{outline:1px dashed #000}.size{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.size p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:38px}.size-box{padding:12px;margin:0 5px;display:inline-block;cursor:pointer;color:#000;font-weight:400}.active-siz{background-color:#b2dfdb}.product-qty{display:inline-block;margin-top:20px;width:100%}.product-qty button.items-count{font-size:18px;line-height:12px;height:40px;width:40px;color:#000}.product-qty .qty{height:40px;text-align:center;width:70px;vertical-align:top;color:#000}.qty{border:1px solid #ced4da;border-radius:2px;color:#666;font-size:15px;font-weight:700;margin:0 -5px}.sub-title{color:#000;font-weight:700;padding-right:38px}.cart-btn{margin:15px 0;border-bottom:1px solid #e5e5e5}.cart-btn i{padding:0 10px}.socal-link{padding:0;margin:20px 0 0;list-style:none;display:block}.socal-link li{list-style:none;display:inline-block;margin:0 8px}.socal-link li a{border:1px solid #ddd;color:#666;font-size:15px;line-height:36px;padding:8px 12px}.socal-link li a:hover{background:#ff5252;color:#fff}.activeimg{border:1px solid #000}.overview{margin-top:30px}:root{--primary-color:#333;--secondary-color:#444;--ternary-color:#555;--light-color:#ccc;--light-secondary-color:#ddd;--light-ternary-color:#eee;--overlay-color:rgba(0,0,0,0.7)}*{box-sizing:border-box;margin:0;padding:0}body{font-family:"Catamaran",sans-serif;line-height:1.6;color:#333;color:var(--primary-color);font-size:1.1rem}h1,h2,h3,h4{line-height:1.3}a{color:#444;color:var(--secondary-color)}ul{list-style:none}img{width:100%}.section-showcase{margin:4rem 3rem}.section-showcase h1{font-size:3rem;color:#333;color:var(--primary-color)}.section-large-text-inner h2{font-size:5rem;margin-top:1rem}.section-large-text-inner h3{font-size:2rem}.section-large-text-inner p{font-size:1.5rem;margin-top:1rem}table{border-collapse:collapse;background-color:#fff;text-align:left;overflow:hidden;width:100%}table,thead{box-shadow:0 5px 10px #e1e5ee}th{text-transform:uppercase;letter-spacing:.1rem;font-size:.7rem;font-weight:900}td,th{padding:1rem 2rem}td{color:#000}a{text-decoration:none;color:#2962ff}.status{border-radius:.2rem;background-color:red;padding:.2rem 1rem;text-align:center}.status-pending{background-color:#fff0c2;color:#a68b00}.status-paid{background-color:#c8e6c9;color:#388e3c}.status-unpaid{background-color:#ffcdd2;color:#c62828}.amount{text-align:right}tr:nth-child(2n){background-color:#f4f6fb}#small-hero{background-image:url('+d+");background-size:cover}",""]),t.exports=c},662:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}}},data:function(){return{tab:"features",areFeatures:!0,areAccessories:!0,areConfig:!0,areVideos:!0,tutorials:""}},methods:{showAccessories:function(){return this.data.accesories===[]?this.areAccessories=!1:this.areAccessories=!0,this.areAccessories}}},n=(r(646),r(41)),l=r(47),c=r.n(l),d=r(142),h=r(493),v=r(492),m=r(549),f=r(550),x=r(479),y=r(214),_=r(179),w=r(141),k=r(480),C=r(484),O=r(558),T=r(491),j=r(307),S=r(308),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",t._l(t.data,(function(e){return r("div",{key:e.productId},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[r("v-carousel",{staticClass:"carousel-height",attrs:{"hide-delimiter-background":""}},t._l(e.img,(function(img){return r("v-carousel-item",{key:img.id,staticClass:"carousel-image",attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[r("v-img",{attrs:{src:img.image,"lazy-src":img.image}})],1)})),1)],1),t._v(" "),r("v-col",{staticClass:"grey lighten-4",attrs:{cols:"12",md:"6",sm:"12"}},[r("div",{staticClass:"section-showcase",attrs:{id:"home"}},[r("h1",{staticClass:"\n              d-inline\n              pa-2\n              mt-10\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            "},[t._v("\n            "+t._s(e.name.toUpperCase())+"\n          ")]),t._v(" "),r("p",{staticClass:"mt-10"},[t._v("\n            "+t._s(e.intro)+"\n          ")]),t._v(" "),r("div",{staticClass:"d-inline pa-2 mt-10 yellow accent-4 white--text"},[t._v("\n            Product ID\n          ")]),t._v(" "),r("div",{staticClass:"d-inline black white--text pa-2"},[t._v("\n            "+t._s(e.productId)+"\n          ")]),t._v(" "),r("br"),r("br"),t._v(" "),r("nuxt-link",{staticClass:"learn",attrs:{exact:"",to:"/enquiry"}},[r("v-btn",{attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",white:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("Enquire\n              Now")],1)],1)],1)])],1),t._v(" "),r("div",{staticClass:"overlay yellow darken-2"},[r("v-tabs",{staticClass:"yellow darken-2",attrs:{pb:"20","black--text":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider",{staticClass:"yellow darken-2"}),t._v(" "),r("v-tab",{attrs:{href:"#features"}},[t._v(" Features ")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:0!=e.accessories.length,expression:"product.accessories.length != 0"}],attrs:{href:"#accessories"}},[t._v("\n          Accessories")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:0!=e.tables.length,expression:"product.tables.length != 0"}],attrs:{href:"#config"}},[t._v("\n          Configuration\n        ")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:e.videos.length>0,expression:"product.videos.length > 0"}],attrs:{href:"#video"}},[t._v("\n          Video Tutorials\n        ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{key:1,attrs:{value:"features"}},[r("v-row",{staticClass:"blue-grey darken-4",attrs:{fluid:"",mt:"10",pb:"10"}},[r("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[r("div",{staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"}},t._l(e.description,(function(e){return r("div",{key:e.id},[r("p",{staticClass:"white--text mt-10",staticStyle:{"line-height":"30px","font-size":"16px","margin-bottom":"20px","padding-left":"20px","padding-right":"20px"}},[t._v("\n                    "+t._s(e.paragraph)+"\n                  ")])])})),0),t._v(" "),r("v-card",{staticClass:"ml-2 mr-2 mb-2"},t._l(e.features,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",md:"12",sm:"12",align:"center"}},[r("h4",{staticClass:"\n                      text-uppercase\n                      yellow\n                      lighten-2\n                      text-center\n                      mt-10\n                      mb-3\n                      pt-5\n                      pl-2\n                      pr-2\n                      pb-5\n                    ",staticStyle:{"letter-spacing":"0.15em","border-bottom":"2px solid #fde36d","box-shadow":"0 10px 10px -10px"},domProps:{textContent:t._s(e.heading)}}),t._v(" "),t._l(e.list,(function(e){return r("v-list-item",{key:e.listItem,staticClass:"list pt-0 lighten-2",staticStyle:{"text-align":"left"}},[t._v("\n                    "+t._s(e.listItem)+"\n                  ")])}))],2)})),1)],1)],1)],1),t._v(" "),r("v-tab-item",{key:2,attrs:{value:"accessories"}},[r("v-card",[r("SectionsFeaturedProducts",{attrs:{color:"blue-grey darken-4",data:e.accessories}})],1)],1),t._v(" "),r("v-tab-item",{key:3,attrs:{value:"config"}},[r("v-card",{staticClass:"blue-grey darken-4"},[r("v-card-text",t._l(e.configurationIntro,(function(e){return r("div",{key:e.id},[r("p",{staticClass:"white--text mt-5",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"5px"}},[t._v("\n                  "+t._s(e.paragraph)+"\n                ")])])})),0),t._v(" "),r("v-card",{staticClass:"mx-auto transition-swing mt-10 ml-2 mr-2 mb-2",attrs:{"min-height":"600",elevation:t.hover?24:6}},t._l(e.tables,(function(table){return r("v-row",{key:table.id,staticClass:"flex-row mr-4 ml-4",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"12","align-self":"center"}},[r("h4",{staticClass:"\n                      text-uppercase\n                      yellow\n                      lighten-2\n                      text-center\n                      mt-10\n                      mb-3\n                      pt-5\n                      pl-2\n                      pr-2\n                      pb-5\n                    ",staticStyle:{"letter-spacing":"0.15em","border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px"},domProps:{textContent:t._s(table.title)}})]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4","align-self":"center"}},[r("v-img",{staticClass:"mx-auto",attrs:{"max-height":"450",src:table.image,"max-width":"300","lazy-src":table.image}})],1),t._v(" "),r("v-col",{staticClass:"mt-5 mb-5",attrs:{cols:"12",md:"8","align-self":"center"}},[r("div",{staticClass:"white--text"},[r("table",[r("thead",[r("tr",t._l(table.columns,(function(e,o){return r("th",{key:o},[t._v("\n                            "+t._s(e)+"\n                          ")])})),0)]),t._v(" "),r("tbody",t._l(table.items,(function(e,o){return r("tr",{key:o},t._l(table.columns,(function(o,n){return r("td",{key:n,staticClass:"black--text"},[t._v("\n                            "+t._s(e[o])+"\n                          ")])})),0)})),0)])])])],1)})),1)],1)],1),t._v(" "),r("v-tab-item",{key:4,attrs:{value:"video"}},[r("v-card",{staticClass:"blue-grey darken-4"},t._l(e.videos,(function(video){return r("div",{key:video.title},[r("v-col",{attrs:{cols:"12",md:"12","align-self":"center"}},[r("h4",{staticClass:"\n                    text-uppercase\n                    yellow\n                    lighten-2\n                    text-center\n                    mt-10\n                    mb-3\n                    pt-5\n                    pl-2\n                    pr-2\n                    pb-5\n                  ",staticStyle:{"letter-spacing":"0.15em","border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px"},domProps:{textContent:t._s(video.title)}}),t._v(" "),r("iframe",{staticClass:"video",staticStyle:{"background-color":"white"},attrs:{src:video.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)})),0)],1),t._v(" "),r("v-tab-item",{key:5,attrs:{value:"more"}})],1)],1),t._v(" "),r("h4",{staticClass:"\n        text-h4 text-center\n        font-weight-bold\n        mb-xs-4\n        mt-10\n        mb-5\n        pl-5\n        pr-5\n      "},[t._v("\n      SIMILAR PRODUCTS\n    ")]),t._v(" "),r("SectionsRecommendedProducts",{attrs:{data:e.recommendedProducts}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;c()(component,{SectionsFeaturedProducts:r(505).default,SectionsRecommendedProducts:r(587).default}),c()(component,{VBtn:d.a,VCard:h.a,VCardText:v.c,VCarousel:m.a,VCarouselItem:f.a,VCol:x.a,VIcon:y.a,VImg:_.a,VListItem:w.a,VRow:k.a,VTab:C.a,VTabItem:O.a,VTabs:T.a,VTabsItems:j.a,VTabsSlider:S.a})}}]);