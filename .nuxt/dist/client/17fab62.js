(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{557:function(t,e,r){var content=r(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("272e0c30",content,!0,{sourceMap:!1})},597:function(t,e,r){"use strict";r(557)},598:function(t,e,r){var n=r(15)(!1);n.push([t.i,".data-enter-active,.data-leave-active{transition:opacity .5s}.data-enter,.data-leave-active{opacity:0}",""]),t.exports=n},674:function(t,e,r){"use strict";r.r(e);var n=r(23),o=(r(82),{transition:"data",middleware:["auth-admin"],data:function(){return{heroAlt:[{src:"",heading:" About Us ",icon:"mdi-account"}],tab:"products",id:"",filteredList:[],blogList:[],dialog:!1,categories:["Fibre Blowing","Klein Tools","Utilities","Telecoms"],headings:["Name","ProductId","Enquiries","Main Image","Category","Edit","Delete"],blogHeadings:["Title","Date","Categories","Edit","Delete"],items:[{}],product:null,blog:null,element:"",isMobile:!1}},created:function(){this.getAllProducts(),this.getAllBlogs()},methods:{addGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.post("https://cbsbackend.herokuapp.com/api/products/",t.$auth.user,r);case 4:return n=e.sent,data=n.data,t.getAllProducts(),e.abrupt("return",data);case 10:throw e.prev=10,e.t0=e.catch(1),new Error("Error adding product");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},showGroup:function(t){this.product=t},onResize:function(){window.innerWidth<969?this.isMobile=!0:this.isMobile=!1,this.isMobile&&(this.headings=["Name","Main Image","Edit","Delete"],this.blogHeadings=["Title","Edit","Delete"])},deleteGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.delete("https://cbsbackend.herokuapp.com/api/products/".concat(t.filteredList[t.product]._id),r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("Error deleting Product");case 9:t.dialog=!1,t.getAllProducts();case 11:case"end":return e.stop()}}),e,null,[[1,6]])})))()},showBlogGroup:function(t){this.blog=t},deleteBlogGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.delete("https://cbsbackend.herokuapp.com/api/blogs/".concat(t.blogList[t.blog]._id),r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("Error deleting Product");case 9:t.dialog=!1,t.getAllBlogs();case 11:case"end":return e.stop()}}),e,null,[[1,6]])})))()},addBlogGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.post("https://cbsbackend.herokuapp.com/api/blogs/",t.$auth.user,r);case 4:return n=e.sent,data=n.data,t.getAllBlogs(),e.abrupt("return",data);case 10:throw e.prev=10,e.t0=e.catch(1),new Error("Error adding product");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getAllProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products",r);case 4:n=e.sent,t.filteredList=n.data,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error Fetching Products");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},getAllBlogs:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/blogs",r);case 4:n=e.sent,t.blogList=n.data,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error Fetching Blogs");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},head:function(){return{title:"Products",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}}),c=o,l=(r(597),r(41)),d=r(47),v=r.n(d),h=r(142),m=r(493),f=r(492),_=r(479),w=r(490),x=r(667),k=r(470),y=r(179),C=r(480),A=r(483),E=r(484),M=r(558),R=r(491),B=r(307),O=r(308),S=r(602),V=r.n(S),G=r(100),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-tabs",{attrs:{"black--text":"",center:"",light:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider"),t._v(" "),r("v-tab",{staticClass:"ml-20",attrs:{href:"#products"}},[t._v(" Products ")]),t._v(" "),r("v-tab",{attrs:{href:"#blogs"}},[t._v(" Blogs ")]),t._v(" "),r("v-tab",{attrs:{href:"#stats"}},[t._v(" Stats ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{key:1,attrs:{value:"products"}},[r("v-col",{attrs:{cols:"12",md:"12"}},[r("h3",{staticClass:"\n                  text-h4 text-center\n                  font-weight-light\n                  mb-xs-4\n                  mt-10\n                  mb-5\n                ",class:(t.$vuetify.theme.dark,"black--text"),staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[t._v("\n                PRODUCTS\n              ")])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"content",attrs:{id:"app"}},[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("table",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}]},[r("thead",t._l(t.headings,(function(e,n){return r("th",{key:e[n],staticClass:"table1",attrs:{"align-center":""}},[t._v("\n                        "+t._s(e)+"\n                      ")])})),0),t._v(" "),r("tbody",t._l(t.filteredList,(function(e,n){return r("tr",{key:e},[r("td",[r("p",[t._v(t._s(e.name.toUpperCase()))])]),t._v(" "),r("td",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[r("p",[t._v(t._s(e.productId))])]),t._v(" "),r("td",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[r("p",{staticStyle:{"text-align":"center"}},[t._v("\n                            "+t._s(e.enquiries)+"\n                          ")])]),t._v(" "),r("td",[r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"50","lazy-src":e.mainImg,"aspect-ratio":"1"}})],1),t._v(" "),r("td",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[r("p",[t._v(t._s(e.category))])]),t._v(" "),r("td",[r("nuxt-link",{attrs:{to:"/edit/"+e._id}},[t._v("\n                            Edit\n                          ")])],1),t._v(" "),r("td",[r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"btn",attrs:{color:"red lighten-2",dark:""},on:{click:function(e){return t.showGroup(n)}}},"v-btn",c,!1),o),[t._v("\n                                  X\n                                ")])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n                                  Delete Product?\n                                ")]),t._v(" "),r("v-card-text",{staticClass:"pt-10"},[t._v("\n                                  Are you sure you want to delete this\n                                  product?\n                                ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteGroup()}}},[t._v("YES\n                                  ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                                    NO\n                                  ")])],1)],1)],1)],1)])])})),0)]),t._v(" "),r("div",[r("v-row",[r("v-col",{attrs:{cols:"12",align:"center"}},[r("v-btn",{staticClass:"btn btn-info yellow float-center mt-20",staticStyle:{"margin-top":"5%","margin-bottom":"5%"},on:{click:t.addGroup}},[t._v("\n                          Add Product\n                        ")])],1)],1)],1)]),t._v(" "),r("div",{staticClass:"text-center"})])])],1),t._v(" "),r("v-tab-item",{key:1,attrs:{value:"blogs"}},[r("v-col",{attrs:{cols:"12",md:"12"}},[r("h3",{staticClass:"\n                  text-h4 text-center\n                  font-weight-light\n                  mb-xs-4\n                  mt-10\n                  mb-5\n                ",class:(t.$vuetify.theme.dark,"black--text"),staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[t._v("\n                BLOGS\n              ")])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"content",attrs:{id:"app"}},[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("table",[r("thead",t._l(t.blogHeadings,(function(e,n){return r("th",{key:e[n],attrs:{"align-center":""}},[t._v("\n                        "+t._s(e)+"\n                      ")])})),0),t._v(" "),r("tbody",t._l(t.blogList,(function(e,n){return r("tr",{key:e},[r("td",[r("p",[t._v(t._s(e.heading.toUpperCase()))])]),t._v(" "),r("td",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[r("p",{staticClass:"grey--text",staticStyle:{"font-size":"15px","text-transform":"lowercase"}},[t._v("\n                            "+t._s(e.info.toLowerCase())+"\n                          ")])]),t._v(" "),r("td",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]},[r("p",{staticStyle:{"text-align":"center"}},[t._v("\n                            "+t._s(e.categories.toString())+"\n                          ")])]),t._v(" "),r("td",[r("nuxt-link",{attrs:{to:"/blogEdit/"+e._id}},[t._v("\n                            Edit\n                          ")])],1),t._v(" "),r("td",[r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"btn",attrs:{color:"red lighten-2",dark:""},on:{click:function(e){return t.showBlogGroup(n)}}},"v-btn",c,!1),o),[t._v("\n                                  X\n                                ")])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n                                  Delete Blog?\n                                ")]),t._v(" "),r("v-card-text",{staticClass:"pt-10"},[t._v("\n                                  Are you sure you want to delete this blog?\n                                ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteBlogGroup()}}},[t._v("YES\n                                  ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                                    NO\n                                  ")])],1)],1)],1)],1)])])})),0)]),t._v(" "),r("div",[r("v-row",[r("v-col",{attrs:{cols:"12",align:"center"}},[r("v-btn",{staticClass:"btn btn-info yellow float-center mt-20",staticStyle:{"margin-top":"5%","margin-bottom":"5%"},on:{click:t.addBlogGroup}},[t._v("\n                          Add Blog\n                        ")])],1)],1)],1)]),t._v(" "),r("div",{staticClass:"text-center"})])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:_.a,VContainer:w.a,VDialog:x.a,VDivider:k.a,VImg:y.a,VRow:C.a,VSpacer:A.a,VTab:E.a,VTabItem:M.a,VTabs:R.a,VTabsItems:B.a,VTabsSlider:O.a}),V()(component,{Resize:G.a})}}]);