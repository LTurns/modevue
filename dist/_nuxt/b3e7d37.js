(window.webpackJsonp=window.webpackJsonp||[]).push([[50,7,15,17,18,19],{492:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var o=r(493),n=r(0),c=Object(n.h)("v-card__actions"),l=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},493:function(t,e,r){"use strict";r(9),r(7),r(8),r(11),r(10),r(12);var o=r(1),n=(r(22),r(184),r(495),r(224)),c=r(225),l=r(74),d=r(4);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=f({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},494:function(t,e,r){var content=r(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("65c238dc",content,!0,{sourceMap:!1})},495:function(t,e,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},496:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},497:function(t,e,r){"use strict";r(22),r(53);var o=r(2);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},o)}}})},498:function(t,e,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("be23801a",content,!0,{sourceMap:!1})},499:function(t,e,r){"use strict";r(494)},500:function(t,e,r){var o=r(15)(!1);o.push([t.i,"",""]),t.exports=o},501:function(t,e,r){"use strict";r.r(e);var o={props:{heroAlt:{type:Array,default:function(){return[]}}}},n=(r(499),r(41)),c=r(47),l=r.n(c),d=r(479),v=r(490),f=r(214),h=r(179),x=r(480),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"hero"}},t._l(t.heroAlt,(function(e,i){return r("v-img",{key:i,staticClass:"gradient-fill",attrs:{width:"100%",height:"30vh",src:e.src}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"text-center",attrs:{col:"12"}},[r("h1",{staticClass:"\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            ",staticStyle:{"border-bottom":"4px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[r("v-icon",[t._v(t._s(e.icon))]),t._v("\n            "+t._s(e.heading.toUpperCase())+"\n          ")],1)])],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VIcon:f.a,VImg:h.a,VRow:x.a})},502:function(t,e,r){var content=r(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("212da76e",content,!0,{sourceMap:!1})},503:function(t,e,r){"use strict";r(498)},504:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.zoom[data-v-1f5ce475]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-1f5ce475],.zoom[data-v-1f5ce475]{transition:transform .2s}.image[data-v-1f5ce475]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-1f5ce475]{font-size:14px}.link[data-v-1f5ce475]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-1f5ce475]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-1f5ce475]:after,.ribbon[data-v-1f5ce475]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-1f5ce475]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-1f5ce475]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-1f5ce475]:after,.ribbon-bottom-left[data-v-1f5ce475]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-1f5ce475]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-1f5ce475]:after{top:0;left:0}.ribbon-bottom-left span[data-v-1f5ce475]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=o},505:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}},color:{type:String,default:function(){return"feature"}}}},n=(r(503),r(41)),c=r(47),l=r.n(c),d=r(142),v=r(493),f=r(492),h=r(479),x=r(490),m=r(507),_=r(214),y=r(179),w=r(480),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.color},[r("v-container",[r("v-row",{attrs:{mb:"10"}},t._l(t.data,(function(e,o){return r("v-col",{key:o,attrs:{md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"610"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":"../"+e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),0!==e.productId.length?r("div",[r("div",{staticClass:"d-inline black--text pa-2",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[t._v("\n                "+t._s(e.productId)+"\n              ")])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"1f5ce475",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardText:f.c,VCol:h.a,VContainer:x.a,VHover:m.a,VIcon:_.a,VImg:y.a,VRow:w.a})},507:function(t,e,r){"use strict";var o=r(497),n=r(75),c=r(4),l=r(13);e.a=Object(c.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},508:function(t,e,r){"use strict";r(502)},509:function(t,e,r){var o=r(15)(!1);o.push([t.i,".classy-bq{border-left:5px solid #f0d90b;margin:1.5em 20px;padding:.7em 25px}.blockquote-section{width:80%;margin:0 auto;opacity:.95;padding:20px;text-align:left}@media screen and (max-width:800px){.blockquote-section{width:100%;margin:0 auto;opacity:.95;padding:10px}}",""]),t.exports=o},511:function(t,e,r){"use strict";r.r(e);var o={props:{text:{type:String,default:function(){return"black--text"}}}},n=(r(508),r(41)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pt-10 pb-10 blockquote-section"},[r("blockquote",{class:t.text+" classy-bq"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},517:function(t,e,r){var content=r(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("c4ffc1c0",content,!0,{sourceMap:!1})},526:function(t,e,r){var content=r(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("67c3c6f7",content,!0,{sourceMap:!1})},527:function(t,e,r){"use strict";r(517)},528:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.category[data-v-c6037572]{text-decoration:none;color:#000;font-size:13px;text-align:center}.zoom[data-v-c6037572]{transform:scale(1.025) translateY(-10px);box-shadow:3px 1px 7px #050505!important}.notzoom[data-v-c6037572],.zoom[data-v-c6037572]{transition:transform .2s}.notzoom[data-v-c6037572]{box-shadow:3px 1px 7px #0a0a0a!important}@media screen and (max-width:1000px){.card[data-v-c6037572]{min-height:100px}}.box[data-v-c6037572]{background-color:transparent;border-radius:3px;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:300px;transform-style:preserve-3d;perspective:2000px;transition:.4s;text-align:center}.box[data-v-c6037572]:before{background:transparent;border-top:20px solid #fff;border-left:20px solid #fff}.box[data-v-c6037572]:after,.box[data-v-c6037572]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box}.box[data-v-c6037572]:after{border-bottom:20px solid #fff;border-right:20px solid #fff}.box .fas[data-v-c6037572]{font-size:25px;height:50px;width:50px;line-height:50px!important;background-color:#fff;color:#2c3a47}.box .fa2[data-v-c6037572]{position:absolute;bottom:0;right:0;z-index:1}.box .text[data-v-c6037572]{position:absolute;top:30px;left:-30px;width:calc(100% + 60px);height:calc(100% - 60px);background-color:#2c3a47;border-radius:3px;transition:.4s}.box .text .fa1[data-v-c6037572]{position:absolute;top:0;left:0}.box .text div[data-v-c6037572]{position:absolute;top:50%;left:0;transform:translateY(-50%);text-align:center;width:100%;padding:30px 60px;line-height:1.5;box-sizing:border-box}.box .text div h3[data-v-c6037572]{font-size:30px;margin-bottom:5px}.box .text div p[data-v-c6037572]{font-size:15px}.box[data-v-c6037572]:hover{transform:translate(-50%,-50%) rotateY(-20deg) skewY(3deg)}.box:hover .text[data-v-c6037572]{transform:rotateY(20deg) skewY(-3deg)}',""]),t.exports=o},535:function(t,e,r){"use strict";r.r(e);var o={props:{color:{type:String,default:function(){return"rgb(255, 0, 0, 0)"}},text:{type:String,default:function(){return"text-uppercase black--text"}}},data:function(){return{axiosCards:"",cards:[{name:"OVERHEAD LINE",image:"utilities.svg",link:"/overheadline"},{name:"FIBRE INSTALLATION",image:"fibreblowing1.svg",link:"/fibreinstallation"},{name:"KLEIN TOOLS",image:"clienttools.svg",link:"/kleintools"},{name:"WINCHES AND TRAILERS",image:"telecoms6.svg",link:"/winchesandtrailers"}]}},created:function(){}},n=(r(527),r(41)),c=r(47),l=r.n(c),d=r(493),v=r(479),f=r(507),h=r(480),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{attrs:{fillheight:""}},t._l(t.cards,(function(e){return r("v-col",{directives:[{name:"hover",rawName:"v-hover"}],key:e.title,staticClass:"column",attrs:{cols:"12",md:"6"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{class:"card white pa-md-5 mx-lg-auto",style:{height:"200px"},attrs:{color:t.color,elevation:n?24:5,shaped:""}},[r("nuxt-link",{staticClass:"category",attrs:{exact:"",to:e.link}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("div",{staticClass:"pr-2 mt-4"},[r("img",{staticStyle:{"max-width":"130px",height:"auto"},attrs:{src:e.image}}),t._v(" "),r("h3",{class:t.text,staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(e.name)}})])])],1)],1)],1)]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"c6037572",null);e.default=component.exports;l()(component,{VCard:d.a,VCol:v.a,VHover:f.a,VRow:h.a})},544:function(t,e,r){"use strict";r(526)},545:function(t,e,r){var o=r(15)(!1);o.push([t.i,".search[data-v-565b88d2]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;margin-top:3%;margin-bottom:3%;width:50%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-565b88d2]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input[data-v-565b88d2]:focus{outline:none}.search__btn[data-v-565b88d2]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-565b88d2]:focus{outline:none}.search__btn img[data-v-565b88d2]{width:20px}.search[focus-within][data-v-565b88d2]{width:80%}.search[data-v-565b88d2]:focus-within{width:80%}.search[focus-within] .search__input[data-v-565b88d2]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-565b88d2]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-565b88d2]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-565b88d2]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-565b88d2]:focus,.search[focus-within] .search__btn[data-v-565b88d2]:hover{outline:0}.search:focus-within .search__btn[data-v-565b88d2]:focus,.search:focus-within .search__btn[data-v-565b88d2]:hover{outline:0}",""]),t.exports=o},584:function(t,e,r){"use strict";r.r(e);r(32),r(226),r(8),r(42),r(67),r(30);var o={props:{data:{type:Array,default:null}},data:function(){return{search:""}},computed:{list:function(){var t=this;return""!==this.search?this.data.filter((function(e){return e.name.toLowerCase().includes(t.search.toLowerCase())})):""}}},n=(r(544),r(41)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"search yellow darken-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search__input",attrs:{type:"text","aria-label":"search",placeholder:"enter your search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),r("SectionsFeaturedProducts",{attrs:{data:t.list}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[e("img",{attrs:{src:"/loupe.png",alt:""}})])}],!1,null,"565b88d2",null);e.default=component.exports;installComponents(component,{SectionsFeaturedProducts:r(505).default})},681:function(t,e,r){"use strict";r.r(e);var o=r(23),n=(r(82),{transition:"products",data:function(){return{heroAlt:[{src:"",heading:" Products",icon:"mdi-tools"}],search:"",filteredList:""}},created:function(){this.getAllFibreBlowingProducts()},methods:{getAllFibreBlowingProducts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products",r);case 4:return o=e.sent,data=o.data,e.abrupt("return",t.filteredList=data);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Error Fetching Products");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}),c=r(41),l=r(47),d=r.n(l),v=r(479),f=r(490),h=r(480),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"blue-grey darken-4"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",align:"center"}},[r("SectionsHeroAlt",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{"hero-alt":t.heroAlt}}),t._v(" "),r("v-container",[r("SectionsMainSearch",{attrs:{data:t.filteredList,category:"general"}}),t._v(" "),r("SectionsIntro",{staticClass:"pt-10 pb-10",staticStyle:{"margin-bottom":"30px"},attrs:{color:"white",text:"text-uppercase black--text"}})],1),t._v(" "),r("div",{staticClass:"yellow darken-2"},[r("SectionsBlockQuote",[t._t("default",(function(){return[t._v("\n            We have had a really exciting 2021 turning 50 years old! Some\n            highlights of the last few years can be seen in our About page. In\n            the year 1971, 50 years ago, CBS was first established in Oakham.\n            Back then,it designed and manufacture cable jointing equipment.\n            Before this, the famous building was a food hall for the locals\n            during the war. Please check us out on LinkedIn for more\n            information.\n          ")]}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{SectionsHeroAlt:r(501).default,SectionsMainSearch:r(584).default,SectionsIntro:r(535).default,SectionsBlockQuote:r(511).default}),d()(component,{VCol:v.a,VContainer:f.a,VRow:h.a})}}]);