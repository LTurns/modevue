(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{492:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var o=r(493),n=r(0),c=Object(n.h)("v-card__actions"),l=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},493:function(t,e,r){"use strict";r(9),r(7),r(8),r(11),r(10),r(12);var o=r(1),n=(r(22),r(184),r(495),r(224)),c=r(225),l=r(74),d=r(4);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=f({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},495:function(t,e,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},496:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},497:function(t,e,r){"use strict";r(22),r(53);var o=r(2);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},o)}}})},498:function(t,e,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("be23801a",content,!0,{sourceMap:!1})},503:function(t,e,r){"use strict";r(498)},504:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.zoom[data-v-1f5ce475]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-1f5ce475],.zoom[data-v-1f5ce475]{transition:transform .2s}.image[data-v-1f5ce475]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-1f5ce475]{font-size:14px}.link[data-v-1f5ce475]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-1f5ce475]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-1f5ce475]:after,.ribbon[data-v-1f5ce475]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-1f5ce475]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-1f5ce475]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-1f5ce475]:after,.ribbon-bottom-left[data-v-1f5ce475]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-1f5ce475]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-1f5ce475]:after{top:0;left:0}.ribbon-bottom-left span[data-v-1f5ce475]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=o},505:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}},color:{type:String,default:function(){return"feature"}}}},n=(r(503),r(41)),c=r(47),l=r.n(c),d=r(142),v=r(493),f=r(492),h=r(479),m=r(490),x=r(507),_=r(214),y=r(179),k=r(480),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.color},[r("v-container",[r("v-row",{attrs:{mb:"10"}},t._l(t.data,(function(e,o){return r("v-col",{key:o,attrs:{md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"610"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":"../"+e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),0!==e.productId.length?r("div",[r("div",{staticClass:"d-inline black--text pa-2",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[t._v("\n                "+t._s(e.productId)+"\n              ")])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"1f5ce475",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardText:f.c,VCol:h.a,VContainer:m.a,VHover:x.a,VIcon:_.a,VImg:y.a,VRow:k.a})},507:function(t,e,r){"use strict";var o=r(497),n=r(75),c=r(4),l=r(13);e.a=Object(c.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})}}]);