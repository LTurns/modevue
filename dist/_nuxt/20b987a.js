(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{473:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var o=r(474),n=r(1),l=Object(n.h)("v-card__actions"),c=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},474:function(t,e,r){"use strict";r(8),r(6),r(7),r(12),r(10),r(13);var o=r(2),n=(r(30),r(222),r(479),r(221)),l=r(476),c=r(74),d=r(9);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return m(m({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=m({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},476:function(t,e,r){"use strict";r(30);var o=r(0),n=r(477);e.a=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},479:function(t,e,r){var content=r(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("e23b7040",content,!0,{sourceMap:!1})},480:function(t,e,r){var o=r(16)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},486:function(t,e,r){"use strict";r(30),r(65);var o=r(0);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},o)}}})},487:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("0f5cb308",content,!0,{sourceMap:!1})},492:function(t,e,r){"use strict";r(487)},493:function(t,e,r){var o=r(16)(!1);o.push([t.i,'.zoom[data-v-657e646f]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-657e646f],.zoom[data-v-657e646f]{transition:transform .2s}.image[data-v-657e646f]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-657e646f]{font-size:14px}.link[data-v-657e646f]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-657e646f]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-657e646f]:after,.ribbon[data-v-657e646f]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-657e646f]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-657e646f]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-657e646f]:after,.ribbon-bottom-left[data-v-657e646f]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-657e646f]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-657e646f]:after{top:0;left:0}.ribbon-bottom-left span[data-v-657e646f]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=o},494:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}},color:{type:String,default:function(){return"feature"}}}},n=(r(492),r(45)),l=r(60),c=r.n(l),d=r(132),v=r(474),m=r(473),h=r(462),f=r(471),x=r(495),_=r(209),y=r(176),w=r(463),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.color},[r("v-container",[r("v-row",{attrs:{mb:"10"}},t._l(t.data,(function(e,o){return r("v-col",{key:o,attrs:{md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"630"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":"",text:"",color:"green darken-3",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",color:"green darken-2",outlined:"",bold:"",black:""}},[r("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),e.productId.length?r("div",[r("div",{staticClass:"pa-5",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[r("div",{staticClass:"d-inline mt-10 pa-2 blue-grey darken-4 white--text"},[t._v("\n                  ID\n                ")]),t._v(" "),r("div",{staticClass:"d-inline yellow darken-2 black--text pa-2"},[t._v("\n                  "+t._s(e.productId)+"\n                ")])])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"657e646f",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:m.c,VCol:h.a,VContainer:f.a,VHover:x.a,VIcon:_.a,VImg:y.a,VRow:w.a})},495:function(t,e,r){"use strict";var o=r(486),n=r(73),l=r(9),c=r(14);e.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},514:function(t,e,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("c591565e",content,!0,{sourceMap:!1})},539:function(t,e,r){"use strict";r(514)},540:function(t,e,r){var o=r(16)(!1);o.push([t.i,".zoom[data-v-e40fcd86]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-e40fcd86],.zoom[data-v-e40fcd86]{transition:transform .2s}.image[data-v-e40fcd86]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-e40fcd86]{font-size:14px}.link[data-v-e40fcd86]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}",""]),t.exports=o},551:function(t,e,r){"use strict";var o=r(505);e.a=o.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=o.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},569:function(t,e,r){var content=r(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("24240046",content,!0,{sourceMap:!1})},581:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}}},methods:{link:function(){}}},n=(r(539),r(45)),l=r(60),c=r.n(l),d=r(132),v=r(474),m=r(473),h=r(462),f=r(471),x=r(495),_=r(209),y=r(176),w=r(463),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"mx-auto pb-5",attrs:{mb:"10"}},t._l(t.data,(function(e,o){return r("v-col",{key:"plan-"+o,attrs:{cols:"12",md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"610"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),0!==e.productId.length?r("div",[r("div",{staticClass:"d-inline black--text pa-2",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[t._v("\n                "+t._s(e.productId)+"\n              ")])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"e40fcd86",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:m.c,VCol:h.a,VContainer:f.a,VHover:x.a,VIcon:_.a,VImg:y.a,VRow:w.a})},660:function(t,e,r){"use strict";r(569)},661:function(t,e,r){var o=r(16)(!1);o.push([t.i,".list{font-size:16px;box-shadow:0 0 1px 0 #dddcd6;list-style-type:square;padding:2%}@media screen and (max-width:800px){.list{padding:6%}}.configInfo{box-shadow:2px 3px 4px rgba(0,0,0,.3);margin:5%}.table{margin:2% 2% 5%}th{background-color:#30373d;padding:20px;color:#fff}table tbody tr:nth-child(2n) td{background:#fdebb5;color:#000}#about{padding-left:20px;padding-right:20px}td{padding:10px;font-size:16px;text-transform:uppercase;letter-spacing:1px}.video{display:block;width:600px;height:400px;margin:5% auto}.v-progress-circular{margin:1rem}.product-title{text-transform:uppercase;margin-bottom:15px;font-size:25px;line-height:1.2em}.sub-title{color:#000;font-weight:700;padding-right:38px}table{border-collapse:collapse;background-color:#fff;text-align:left;overflow:hidden;width:100%}table,thead{box-shadow:0 5px 10px #e1e5ee}th{text-transform:uppercase;letter-spacing:.1rem;font-size:.7rem;font-weight:900}td,th{padding:1rem 2rem}td{color:#000}.fonttitle{font-size:2rem;max-width:100ch;margin-bottom:1%}@media screen and (max-width:658px){.table{margin:2% 2% 5%}th{padding-left:10px;padding-right:10px;font-size:14px}table td{text-align:left;font-size:11px;padding:10px}table td:last-child{border-right:none}table tbody tr:nth-child(2n) td{background:#f3efef}.video{max-width:300px;max-height:200px}.configimage{max-width:200px;margin-top:10px;margin-bottom:10px}.fonttitle{font-size:1.5rem;max-width:100ch;margin-bottom:10%}}",""]),t.exports=o},671:function(t,e,r){"use strict";r.r(e);r(8),r(6),r(7),r(12),r(10),r(13);var o=r(2),n=r(130);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{id:{type:String,default:function(){return""}}},data:function(){return{tab:"features",areFeatures:!0,areAccessories:!0,areConfig:!0,areVideos:!0,tutorials:""}},computed:c(c({},Object(n.c)(["product"])),{},{product:function(){return this.$store.state.product}}),created:function(){this.getIdProduct()},methods:c(c({},Object(n.b)(["getProduct"])),{},{getIdProduct:function(){this.$store.dispatch("getProduct",this.id)},showAccessories:function(){return this.data.accesories===[]?this.areAccessories=!1:this.areAccessories=!0,this.areAccessories}})},v=(r(660),r(45)),m=r(60),h=r.n(m),f=r(132),x=r(474),_=r(473),y=r(676),w=r(677),k=r(462),C=r(209),O=r(176),S=r(208),P=r(463),j=r(467),V=r(551),z=r(472),I=r(304),A=r(305),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[0!==t.$store.state.product.length?r("div",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"white",attrs:{cols:"12",md:"6",sm:"12"}},[r("v-carousel",{attrs:{"hide-delimiter-background":"",height:"100%"}},t._l(t.product.img,(function(img){return r("v-carousel-item",{key:img.id,attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[r("v-img",{staticStyle:{transform:"scale(0.7)"},attrs:{src:img.image,"lazy-src":img.image}})],1)})),1)],1),t._v(" "),r("v-col",{staticClass:"grey lighten-4",attrs:{cols:"12",md:"6",sm:"12"}},[r("div",{staticClass:"section-showcase",attrs:{id:"home",cla:""}},[r("h1",{staticClass:"\n              text-md-h3 text-sm-h3 text-h4\n              font-weight-black\n              black--text\n              mt-10\n              mb-10\n              mr-10\n            "},[t._v("\n            "+t._s(t.product.name.toUpperCase())+"\n          ")]),t._v(" "),r("div",[r("div",{staticClass:"d-inline mt-10 pa-2 blue-grey darken-4 white--text"},[t._v("\n              ID\n            ")]),t._v(" "),r("div",{staticClass:"d-inline yellow darken-2 black--text pa-2"},[t._v("\n              "+t._s(t.product.productId)+"\n            ")])]),t._v(" "),r("br"),r("br"),t._v(" "),r("nuxt-link",{staticClass:"learn",attrs:{exact:"",to:"/enquiry"}},[r("v-btn",{attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,color:"green darken-2",text:"",outlined:"",white:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("Enquire\n              Now")],1)],1),t._v(" "),r("div",{staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"}},t._l(t.product.description,(function(e){return r("div",{key:e.id},[r("p",{staticClass:"black--text mt-10",staticStyle:{"line-height":"30px","font-size":"16px","margin-bottom":"20px"}},[t._v("\n                "+t._s(e.paragraph)+"\n              ")])])})),0)],1)])],1),t._v(" "),r("div",{staticClass:"overlay yellow darken-2"},[r("v-tabs",{staticClass:"yellow darken-2",attrs:{pb:"20","black--text":"",light:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider",{staticClass:"yellow darken-2"}),t._v(" "),r("v-tab",{attrs:{href:"#features"}},[t._v(" Features ")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:0!=t.product.accessories.length,expression:"product.accessories.length != 0"}],attrs:{href:"#accessories"}},[t._v("\n          Accessories")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:0!=t.product.tables.length,expression:"product.tables.length != 0"}],attrs:{href:"#config"}},[t._v("\n          Configuration\n        ")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:t.product.videos.length>0,expression:"product.videos.length > 0"}],attrs:{href:"#video"}},[t._v("\n          Video Tutorials\n        ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{key:1,attrs:{value:"features"}},[r("v-row",{staticClass:"grey lighten-4",attrs:{mt:"10",ml:"10",mr:"10",pb:"10"}},[r("v-card-text",[r("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[r("v-card",t._l(t.product.features,(function(e){return r("v-col",{key:e.id,staticClass:"mt-7",attrs:{cols:"12",md:"12",sm:"12",align:"center"}},[r("div",{staticClass:"\n                        fonttitle\n                        black--text\n                        text--lighten-4\n                        font-weight-black\n                      ",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1",padding:"3%"}},[t._v("\n                      "+t._s(e.heading.toUpperCase())+"\n                    ")]),t._v(" "),t._l(e.list,(function(e){return r("div",{key:e.listItem},[r("ul",{staticClass:"list"},[r("li",{staticStyle:{"text-align":"left"}},[t._v("\n                          "+t._s(e.listItem)+"\n                        ")])])])}))],2)})),1)],1)],1)],1)],1),t._v(" "),r("v-tab-item",{key:2,attrs:{value:"accessories"}},[r("v-card",{staticClass:"grey lighten-4"},[r("SectionsFeaturedProducts",{attrs:{color:"grey lighten-4",data:t.product.accessories}})],1)],1),t._v(" "),r("v-tab-item",{key:3,attrs:{value:"config"}},[r("v-card",{staticClass:"grey lighten-4",attrs:{align:"center"}},[r("v-card-text",t._l(t.product.configurationIntro,(function(e){return r("div",{key:e.id},[r("p",{staticClass:"black--text mt-5",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"5px"}},[t._v("\n                  "+t._s(e.paragraph)+"\n                ")])])})),0),t._v(" "),r("v-card",{staticClass:"mx-auto transition-swing mt-10 ml-2 mr-2 mb-10",attrs:{"min-height":"600"}},t._l(t.product.tables,(function(table){return r("v-row",{key:table.id,staticClass:"flex-row mr-4 ml-4"},[r("v-col",{attrs:{cols:"12",md:"12",align:"center"}},[r("div",{staticClass:"\n                      fonttitle\n                      black--text\n                      text--lighten-4\n                      font-weight-black\n                    ",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1",padding:"3%","margin-top":"10px","margin-bottom":"10px"}},[t._v("\n                    "+t._s(table.title.toUpperCase())+"\n                  ")])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4",align:"center",justify:"center"}},[r("v-img",{staticClass:"configimage mx-auto",attrs:{"max-height":"450",src:table.image,"lazy-src":table.image}})],1),t._v(" "),r("v-col",{staticClass:"mt-5 mb-5",attrs:{cols:"12",md:"8","align-self":"center"}},[r("div",{staticClass:"white--text"},[r("table",[r("thead",[r("tr",t._l(table.columns,(function(e,o){return r("th",{key:o},[t._v("\n                            "+t._s(e)+"\n                          ")])})),0)]),t._v(" "),r("tbody",t._l(table.items,(function(e,o){return r("tr",{key:o},t._l(table.columns,(function(o,n){return r("td",{key:n,staticClass:"black--text"},[t._v("\n                            "+t._s(e[o])+"\n                          ")])})),0)})),0)])])])],1)})),1)],1)],1),t._v(" "),r("v-tab-item",{key:4,staticClass:"grey lighten-4",attrs:{value:"video"}},[r("v-card",{staticClass:"mt-10 mb-10 ml-4 mr-4 white"},t._l(t.product.videos,(function(video){return r("div",{key:video.title},[r("v-col",{attrs:{cols:"12",md:"12",align:"center"}},[r("div",{staticClass:"\n                    fonttitle\n                    black--text\n                    text--lighten-4\n                    font-weight-black\n                  ",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1",padding:"3%"}},[t._v("\n                  "+t._s(video.title.toUpperCase())+"\n                ")]),t._v(" "),r("iframe",{staticClass:"video",staticStyle:{"background-color":"white"},attrs:{src:video.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)})),0)],1),t._v(" "),r("v-tab-item",{key:5,attrs:{value:"more"}})],1)],1),t._v(" "),r("h4",{staticClass:"\n        text-h4 text-center\n        font-weight-bold\n        mb-xs-4\n        mt-10\n        mb-5\n        pl-5\n        pr-5\n      "},[t._v("\n      SIMILAR PRODUCTS\n    ")]),t._v(" "),r("SectionsRecommendedProducts",{attrs:{data:t.product.recommendedProducts}})],1):r("div",[r("v-progress-circular",{staticClass:"text-center",attrs:{indeterminate:"",color:"amber",align:"center",justify:"center"}})],1)])}),[],!1,null,null,null);e.default=component.exports;h()(component,{SectionsFeaturedProducts:r(494).default,SectionsRecommendedProducts:r(581).default}),h()(component,{VBtn:f.a,VCard:x.a,VCardText:_.c,VCarousel:y.a,VCarouselItem:w.a,VCol:k.a,VIcon:C.a,VImg:O.a,VProgressCircular:S.a,VRow:P.a,VTab:j.a,VTabItem:V.a,VTabs:z.a,VTabsItems:I.a,VTabsSlider:A.a})}}]);