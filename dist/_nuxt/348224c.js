(window.webpackJsonp=window.webpackJsonp||[]).push([[45,5,9,13,16,18],{517:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return d})),o.d(e,"d",(function(){return v}));var r=o(518),n=o(0),c=Object(n.h)("v-card__actions"),l=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");r.a},518:function(t,e,o){"use strict";o(8),o(5),o(7),o(11),o(9),o(12);var r=o(1),n=(o(25),o(195),o(519),o(250)),c=o(251),l=o(60),d=o(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),o=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(o,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},519:function(t,e,o){var content=o(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("e23b7040",content,!0,{sourceMap:!1})},520:function(t,e,o){var r=o(15)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},522:function(t,e,o){var content=o(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("8893a21e",content,!0,{sourceMap:!1})},525:function(t,e,o){var content=o(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("212da76e",content,!0,{sourceMap:!1})},527:function(t,e,o){"use strict";o(522)},528:function(t,e,o){var r=o(15)(!1);r.push([t.i,'.zoom[data-v-aebd5bba]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-aebd5bba],.zoom[data-v-aebd5bba]{transition:transform .2s}.image[data-v-aebd5bba]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-aebd5bba]{font-size:14px}.link[data-v-aebd5bba]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-aebd5bba]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-aebd5bba]:after,.ribbon[data-v-aebd5bba]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-aebd5bba]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-aebd5bba]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-aebd5bba]:after,.ribbon-bottom-left[data-v-aebd5bba]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-aebd5bba]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-aebd5bba]:after{top:0;left:0}.ribbon-bottom-left span[data-v-aebd5bba]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=r},529:function(t,e,o){"use strict";o.r(e);var r={props:{data:{type:Array,default:function(){return[]}},color:{type:String,default:function(){return"feature"}}}},n=(o(527),o(49)),c=o(69),l=o.n(c),d=o(148),v=o(518),h=o(517),f=o(504),m=o(515),x=o(536),_=o(238),w=o(190),y=o(505),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{class:t.color},[o("v-container",[o("v-row",{attrs:{mb:"10"}},t._l(t.data,(function(e,r){return o("v-col",{key:r,attrs:{md:"4"}},[o("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[o("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"630"}},[o("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),o("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),o("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(e.intro)}}),t._v(" "),o("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():o("div",[o("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[o("v-btn",{staticClass:"my-3",attrs:{"x-large":""}},[o("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?o("div",[o("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[o("v-btn",{staticClass:"my-3",attrs:{"x-large":""}},[o("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),e.productId.length?o("div",[o("div",{staticClass:"pa-5",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[o("div",{staticClass:"d-inline mt-10 pa-2 blue-grey darken-4 white--text"},[t._v("\n                  ID\n                ")]),t._v(" "),o("div",{staticClass:"d-inline yellow darken-2 black--text pa-2"},[t._v("\n                  "+t._s(e.productId)+"\n                ")])])]):o("div",[o("div",{staticClass:"ribbon ribbon-bottom-left"},[o("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"aebd5bba",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardText:h.c,VCol:f.a,VContainer:m.a,VHover:x.a,VIcon:_.a,VImg:w.a,VRow:y.a})},530:function(t,e,o){"use strict";o(525)},531:function(t,e,o){var r=o(15)(!1);r.push([t.i,".classy-bq{border-left:2px solid #fde36d;box-shadow:4px 0 6px -6px #222;margin:1rem 20px;padding:.7em 25px;font-size:16px}.blockquote-section{width:90%;margin:0 auto;opacity:.95;padding:20px;text-align:left}@media screen and (max-width:800px){.blockquote-section{width:100%;margin:0 auto;opacity:.95;padding:10px}}",""]),t.exports=r},535:function(t,e,o){"use strict";o.r(e);var r={props:{text:{type:String,default:function(){return"black--text"}}}},n=(o(530),o(49)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"pt-5 pb-5 blockquote-section"},[o("blockquote",{class:t.text+" classy-bq"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},536:function(t,e,o){"use strict";var r=o(156),n=o(51),c=o(3),l=o(13);e.a=Object(c.a)(r.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},539:function(t,e,o){var content=o(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("13bec250",content,!0,{sourceMap:!1})},550:function(t,e,o){"use strict";o(539)},551:function(t,e,o){var r=o(15)(!1);r.push([t.i,'.category[data-v-9883d73e]{text-decoration:none;color:#000;font-size:13px;text-align:center}.zoom[data-v-9883d73e]{transform:scale(1.025) translateY(-10px);box-shadow:3px 1px 7px #050505!important}.notzoom[data-v-9883d73e],.zoom[data-v-9883d73e]{transition:transform .2s}.notzoom[data-v-9883d73e]{box-shadow:3px 1px 7px #0a0a0a!important}@media screen and (min-width:1500px){h3[data-v-9883d73e]{font-size:18px}}@media screen and (max-width:1000px){.card[data-v-9883d73e]{min-height:100px}}.box[data-v-9883d73e]{background-color:transparent;border-radius:3px;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:300px;transform-style:preserve-3d;perspective:2000px;transition:.4s;text-align:center}.box[data-v-9883d73e]:before{background:transparent;border-top:20px solid #fff;border-left:20px solid #fff}.box[data-v-9883d73e]:after,.box[data-v-9883d73e]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box}.box[data-v-9883d73e]:after{border-bottom:20px solid #fff;border-right:20px solid #fff}.box .fas[data-v-9883d73e]{font-size:25px;height:50px;width:50px;line-height:50px!important;background-color:#fff;color:#2c3a47}.box .fa2[data-v-9883d73e]{position:absolute;bottom:0;right:0;z-index:1}.box .text[data-v-9883d73e]{position:absolute;top:30px;left:-30px;width:calc(100% + 60px);height:calc(100% - 60px);background-color:#2c3a47;border-radius:3px;transition:.4s}.box .text .fa1[data-v-9883d73e]{position:absolute;top:0;left:0}.box .text div[data-v-9883d73e]{position:absolute;top:50%;left:0;transform:translateY(-50%);text-align:center;width:100%;padding:30px 60px;line-height:1.5;box-sizing:border-box}.box .text div h3[data-v-9883d73e]{font-size:30px;margin-bottom:5px}.box .text div p[data-v-9883d73e]{font-size:15px}.box[data-v-9883d73e]:hover{transform:translate(-50%,-50%) rotateY(-20deg) skewY(3deg)}.box:hover .text[data-v-9883d73e]{transform:rotateY(20deg) skewY(-3deg)}',""]),t.exports=r},554:function(t,e,o){"use strict";o.r(e);var r={props:{color:{type:String,default:function(){return"rgb(255, 0, 0, 0)"}},text:{type:String,default:function(){return"text-uppercase black--text"}}},data:function(){return{showFI:!1,showKT:!1,showOL:!1,showWT:!1,axiosCards:"",cards:[{name:"OVERHEAD LINE",image:"running-out-blocks.png",link:"/overheadline",margin:"5"},{name:"FIBRE INSTALLATION",image:"hurricane-4.png",link:"/fibreinstallation",margin:"5"},{name:"KLEIN TOOLS",image:"klein-tools.png",link:"/kleintools",margin:"10"},{name:"WINCHES AND TRAILERS",image:"winch-2.png",link:"/winchesandtrailers",margin:"0"}]}},created:function(){}},n=(o(550),o(49)),c=o(69),l=o.n(c),d=o(148),v=o(518),h=o(517),f=o(504),m=o(240),x=o(93),_=o(238),w=o(190),y=o(505),k=o(564),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("v-row",{attrs:{fillheight:"","no-gutters":"",align:"center",justify:"center"}},[o("v-col",{directives:[{name:"hover",rawName:"v-hover"}],staticClass:"column",attrs:{cols:"12",md:"6",align:"center"}},[o("v-card",{staticClass:"mx-2 mb-5",attrs:{"max-width":"400"}},[o("v-img",{attrs:{contain:"",src:"hurricane-4.png",height:"100px"}}),t._v(" "),o("v-card-title",[t._v("FIBRE INSTALLATION")]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showFI=!t.showFI}}},[o("v-icon",[t._v(t._s(t.showFI?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),o("v-spacer"),t._v(" "),o("nuxt-link",{staticClass:"category",attrs:{exact:"",to:"/fibreinstallation"}},[o("v-btn",{attrs:{"x-large":""}},[o("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showFI,expression:"showFI"}]},[o("v-divider"),t._v(" "),o("v-card-text",[t._v("heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH")])],1)])],1),t._v(" "),o("v-card",{staticClass:"mx-2 mb-5",attrs:{"max-width":"400"}},[o("v-img",{attrs:{contain:"",src:"klein-tools.png",height:"100px"}}),t._v(" "),o("v-card-title",[t._v("KLEIN TOOLS")]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showKT=!t.showKT}}},[o("v-icon",[t._v(t._s(t.showKT?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),o("v-spacer"),t._v(" "),o("nuxt-link",{staticClass:"category",attrs:{exact:"",to:"/kleintools"}},[o("v-btn",{attrs:{"x-large":""}},[o("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showKT,expression:"showKT"}]},[o("v-divider"),t._v(" "),o("v-card-text",[t._v("heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH")])],1)])],1)],1),t._v(" "),o("v-col",{directives:[{name:"hover",rawName:"v-hover"}],staticClass:"column",attrs:{cols:"12",md:"6",align:"center"}},[o("v-card",{staticClass:"mx-2 mb-5",attrs:{"max-width":"400"}},[o("v-img",{attrs:{contain:"",src:"running-out-blocks.png",height:"100px"}}),t._v(" "),o("v-card-title",[t._v("OVERHEAD LINE")]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showOL=!t.showOL}}},[o("v-icon",[t._v(t._s(t.showOL?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),o("v-spacer"),t._v(" "),o("nuxt-link",{staticClass:"category",attrs:{exact:"",to:"/overheadline"}},[o("v-btn",{attrs:{"x-large":""}},[o("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showOL,expression:"showOL"}]},[o("v-divider"),t._v(" "),o("v-card-text",[t._v("heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH")])],1)])],1),t._v(" "),o("v-card",{staticClass:"mx-2 mb-5",attrs:{"max-width":"400"}},[o("v-img",{attrs:{contain:"",src:"winch-2.png",height:"100px"}}),t._v(" "),o("v-card-title",[t._v("WINCHES AND TRAILERS")]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showWT=!t.showWT}}},[o("v-icon",[t._v(t._s(t.showWT?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),o("v-spacer"),t._v(" "),o("nuxt-link",{staticClass:"category",attrs:{exact:"",to:"/winchesandtrailers"}},[o("v-btn",{attrs:{"x-large":""}},[o("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showWT,expression:"showWT"}]},[o("v-divider"),t._v(" "),o("v-card-text",[t._v("heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH")])],1)])],1)],1)],1)],1)}),[],!1,null,"9883d73e",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VDivider:m.a,VExpandTransition:x.a,VIcon:_.a,VImg:w.a,VRow:y.a,VSpacer:k.a})},563:function(t,e,o){var content=o(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("1124fec4",content,!0,{sourceMap:!1})},564:function(t,e,o){"use strict";o(329);var r=o(0);e.a=Object(r.h)("spacer","div","v-spacer")},584:function(t,e,o){"use strict";o(563)},585:function(t,e,o){var r=o(15)(!1);r.push([t.i,"@media screen and (min-width:1000px){.mainfonttitle{font-size:3.6rem;max-width:16ch;margin-bottom:1%}.containerstyle{width:100vw;height:100vh}}@media screen and (min-width:1300px){.containerstyle{height:72vh}}@media screen and (min-width:1900px){.mainfonttitle{font-size:4.5rem;margin-bottom:1%}}@media screen and (max-width:1000px){.mainfonttitle{font-size:3rem;max-width:30ch;margin-bottom:5%}}@media screen and (max-width:700px){.mainfonttitle{font-size:3rem;margin-bottom:5%;margin-top:7%}}",""]),t.exports=r},608:function(t,e,o){var content=o(673);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("1b7833da",content,!0,{sourceMap:!1})},612:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{brandsLogo:["coinlogo.png","FIA-logo.png","risqslogo.png","sgslogo.jpeg","stamp.png"]}}},n=o(49),c=o(69),l=o.n(c),d=o(518),v=o(504),h=o(515),f=o(240),m=o(190),x=o(236),_=o(505),w=o(155),y=o(1),k=o(97),C=o(3),O=o(13),S=o(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(y.a)({},this.activeClass,this.isActive)}),element):(Object(O.c)("v-item should only contain a single element",this),element)):(Object(O.c)("v-item is missing a default scopedSlot",this),null);var element}}),H=(Object(C.a)(S,Object(k.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(C.a)(S,Object(k.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:"sponsors"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"4","align-self":"center"}},[o("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4",class:t.$vuetify.theme.dark?"grey--text":null},[t._v("\n          AWARDS AND CLIENTS\n        ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"8"}},[o("v-slide-group",{attrs:{"show-arrows":"",draggable:"true"}},[t._l(t.brandsLogo,(function(e,r){return[o("v-slide-item",{key:e,model:{value:t.brandsLogo,callback:function(e){t.brandsLogo=e},expression:"brandsLogo"}},[o("v-card",{staticClass:"mx-4 pa-0",class:t.$vuetify.theme.dark?"white":"grey lighten-4",attrs:{height:"90",width:"100",flat:""}},[o("v-img",{attrs:{height:"90",contain:"",src:"/brands/"+e}})],1)],1),t._v(" "),r<t.brandsLogo.length-1?o("v-responsive",{key:r,staticClass:"my-auto",attrs:{height:"50"}},[o("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCol:v.a,VContainer:h.a,VDivider:f.a,VImg:m.a,VResponsive:x.a,VRow:_.a,VSlideGroup:w.b,VSlideItem:H})},620:function(t,e,o){"use strict";o.r(e);var r={components:{Categories:o(554).default},data:function(){return{carouselsData:[{src:"orangewireheader.jpg",heading:"LEADERS IN ADVANCED CABLE INSTALLATION",subHeading:"CBS Products is at the forefront of cabling technology, the design and manufacture of installation equipment for HV Transmission towers, LV Distribution lines, Railway Tracksides and underground CATV / Telecommunication networks, including the handling of Fibre Optic Cables, for projects around the world. We also offer a comprehensive range of standard equipment."},{src:"DSC_1491-1.jpeg",heading:"CELEBRATING 50 YEARS OF CBS",subHeading:"CBS Products has been going for 50 years - and what a ride it's been! Visit the About section to view more about our incredible team and it's history."},{src:"cable-image.jpg",heading:"WITH A MULTITUDE OF PRODUCTS AND SERVICES",subHeading:"CBS Products currently offers a large selection of services. These include Fibre Blowing, Telecoms, Client Tools and Utilities. Scroll down or visit the Products tab to view more information."},{src:"sigmund-rVRvR9VUIoQ-unsplash.jpg",heading:"INTRODUCING BATTERY POWERED PRODUCTS",subHeading:"This year is not only exciting for our anniversary, it is also the year we reveal our latest product addition - and it is battery powered!"}]}}},n=(o(584),o(49)),c=o(69),l=o.n(c),d=o(148),v=o(504),h=o(515),f=o(238),m=o(505),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"hero"}},[o("v-container",{staticClass:"containerstyle"},[o("v-row",{staticStyle:{"margin-top":"2%"},attrs:{align:"center",justify:"center",fillheight:""}},[o("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[o("div",{staticClass:"mainfonttitle black--text text--lighten-4 font-weight-black",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1"}},[t._v("\n          "+t._s(t.carouselsData[0].heading.toUpperCase())+"\n        ")]),t._v(" "),o("p",{staticClass:"dark--text",staticStyle:{"font-size":"16px","margin-top":"5%","margin-bottom":"5%"}},[t._v("\n          "+t._s(t.carouselsData[0].subHeading)+"\n        ")]),t._v(" "),o("v-btn",{staticClass:"yellow darken-1 text-center bold mb-5",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp}},[t._v("With a new battery powered range")]),o("br"),t._v(" "),o("a",{attrs:{href:"http://www.cbsproducts.com/wp-content/uploads/2021/03/CBS-Main-Product-Catalogue.pdf"}},[o("v-btn",{attrs:{"x-large":""}},[o("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v(" Download\n            Catalogue")],1)],1)],1),t._v(" "),o("v-col",{staticClass:"right black--text",attrs:{cols:"12",md:"6",sm:"12"}},[o("div",[o("categories")],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:h.a,VIcon:f.a,VRow:m.a})},672:function(t,e,o){"use strict";o(608)},673:function(t,e,o){var r=o(15)(!1);r.push([t.i,".home-enter-active,.home-leave-active{transition:opacity .5s}.home-enter,.home-leave-active{opacity:0}",""]),t.exports=r},707:function(t,e,o){"use strict";o.r(e);var r=o(22),n=(o(84),o(34),{transition:"home",data:function(){return{filteredList:""}},created:function(){this.getAllMusics()},methods:{getAllMusics:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products",o);case 4:r=e.sent,t.filteredList=r.data.slice(0,3),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error Fetching Products");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}}),c=(o(672),o(49)),l=o(69),d=o.n(l),v=o(504),h=o(505),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"home"}},[o("v-col",{staticClass:"hero"},[o("SectionsHero")],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"grey lighten-4",attrs:{cols:"12"}},[o("SectionsBlockQuote",{attrs:{text:"black--text"}},[t._t("default",(function(){return[t._v("\n          CBS Products (KT), Ltd. is a leading provider of specialised\n          equipment solutions for the construction of power transmission lines\n          and telecommunications networks around the world. It has become the\n          partner of choice in a number of high profile, international fibre\n          optic cable projects around the globe. In the UK, the Tornado\n          out-performed its competition in a most demanding evaluation,\n          enabling CBS to win a highly coveted contract as exclusive suppliers\n          of cable blowing equipment to British Telecommunications (BT).\n        ")]}))],2)],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",[o("div",{staticClass:"fonttitle black--text text--lighten-4 font-weight-black",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1",padding:"3%","margin-left":"1%","margin-right":"1%","margin-top":"3%"},attrs:{align:"center"}},[t._v("\n        FEATURED PRODUCTS\n      ")]),t._v(" "),o("SectionsFeaturedProducts",{attrs:{data:t.filteredList}})],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"grey lighten-3"},[o("SectionsBlockQuote",{attrs:{text:"black--text"}},[t._t("default",(function(){return[o("h3",{staticClass:"mb-10"},[t._v("CORONAVIRUS UPDATE")]),t._v(" "),o("p",[t._v("\n            CBS remains open and are working hard to provide essential\n            services to our telecommunications and electricity industries\n            during these difficult and uncertain times. We want to assure you\n            that we are taking the current situation very seriously, we have\n            staff working from home where possible and have implemented extra\n            precautions throughout the building to ensure the health and\n            safety of our staff, customers and suppliers. As you will be\n            aware, the situation is constantly changing, as is the advice\n            issued by the Government and the World Health Organisation.\n          ")]),t._v(" "),o("p",[t._v("\n            As a company, we will be listening to the official advice and will\n            act in accordance with it, together with reacting to the\n            situations of both our customers and suppliers, many of which are\n            already operating at reduced levels. Our business may be disrupted\n            at some point in the future but, for now, it is business as usual.\n            Our thoughts are with those who have been affected by the spread\n            of COVID-19. Please, follow the advise issued by the Government\n            and W.H.O. Stay Safe.\n          ")])]}))],2)],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",[o("SectionsBrands")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{SectionsHero:o(620).default,SectionsBlockQuote:o(535).default,SectionsFeaturedProducts:o(529).default,SectionsBrands:o(612).default}),d()(component,{VCol:v.a,VRow:h.a})}}]);