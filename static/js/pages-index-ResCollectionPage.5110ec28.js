(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ResCollectionPage"],{"022d":function(e,t,a){var n=a("4a65");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("0ba00bd2",n,!0,{sourceMap:!1,shadowMode:!1})},"0f45":function(e,t,a){"use strict";var n=a("022d"),o=a.n(n);o.a},2533:function(e,t,a){"use strict";a.r(t);var n=a("c2be"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"4a65":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".contenttos .tops[data-v-e3aebd3a]{width:100%;text-align:center;margin:0 auto}.contenttos .tops img[data-v-e3aebd3a]{width:100%}.contenttos .imloge[data-v-e3aebd3a]{width:100%;margin:0 auto}.contenttos .imloge img[data-v-e3aebd3a]{width:100%}.contenttos .bttonimg[data-v-e3aebd3a]{width:100%;margin:auto;margin-top:%?15?%;border-radius:%?3?%}.contenttos .bttonimg img[data-v-e3aebd3a]{width:100%}.contenttos .bottomnicoe[data-v-e3aebd3a]{width:100%;margin:%?40?% auto}.contenttos .bottomnicoe img[data-v-e3aebd3a]{width:100%}",""]),e.exports=t},8861:function(e,t,a){"use strict";a.r(t);var n=a("ef77"),o=a("2533");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("0f45");var r,s=a("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"e3aebd3a",null,!1,n["a"],r);t["default"]=u.exports},c2be:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var o=n(a("1da1")),i=a("7bfb"),r={data:function(){return{title:"Hello",baerrn:{},PageImage:"",BottomImage:"",ButtonImage:"",urls:{}}},onLoad:function(){this.TopImages(),this.PageContents(),this.ResCollections(),this.BottomImages()},methods:{TopImages:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,i.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"TopContent"});case 2:n=a.sent,t.baerrn=n.ReturnObject,e("log",t.baerrn," at pages/index/ResCollectionPage.vue:43");case 5:case"end":return a.stop()}}),a)})))()},PageContents:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"PageImage"});case 2:a=t.sent,e.PageImage=a.ReturnObject.PicUrl;case 4:case"end":return t.stop()}}),t)})))()},ResCollections:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,i.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"ButtonImage"});case 2:n=a.sent,e("log",n," at pages/index/ResCollectionPage.vue:52"),t.urls=n,t.ButtonImage=n.ReturnObject.PicUrl;case 6:case"end":return a.stop()}}),a)})))()},BottomImages:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,i.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"BottomImage"});case 2:n=a.sent,e("log",n," at pages/index/ResCollectionPage.vue:58"),t.BottomImage=n.ReturnObject.PicUrl;case 5:case"end":return a.stop()}}),a)})))()},TapUrl:function(){uni.navigateTo({url:"./ResCollectionPage"})},TaoNav:function(){e("log","4000"," at pages/index/ResCollectionPage.vue:68"),e("log","8888888888"," at pages/index/ResCollectionPage.vue:69");var t=JSON.parse(this.urls.ReturnObject.UrlParams),a="",n="";if(t.map((function(e){"RedirectType"==e.Name&&(n=e.Value),"Appid"==e.Name&&(a=e.Value)})),e("log",n," at pages/index/ResCollectionPage.vue:82"),"WeChatMiniProgram"==n)return e("log","跳转外部小程序11",this.urls.ReturnObject," at pages/index/ResCollectionPage.vue:84"),void jWeixin.miniProgram.navigateTo({url:"../../../points/index/index?&appid="+a+"&paht="+this.urls.ReturnObject.Url+"&yes=yes"});if("MiniProgram"==n)return this.$jweixin.miniProgram.navigateTo({url:"/pages/points/index/index"}),void e("log","内部小程序","/"+this.urls.ReturnObject.Url," at pages/index/ResCollectionPage.vue:90");if("H5"!=n);else{e("log","内部H5"," at pages/index/ResCollectionPage.vue:94");var o=this.urls.ReturnObject.Url,i=encodeURIComponent(o);uni.navigateTo({url:"/pages/shop/wbevi?PageUrl='".concat(i,"'")})}}}};t.default=r}).call(this,a("0de9")["log"])},ef77:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"contenttos"},[a("v-uni-view",{staticClass:"tops"},[a("img",{attrs:{src:e.baerrn.PicUrl,mode:"aspectFit"}}),a("img")]),a("v-uni-view",{staticClass:"imloge"},[a("img",{attrs:{src:e.PageImage,mode:"aspectFill"}})]),a("v-uni-view",{staticClass:"bttonimg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.TaoNav.apply(void 0,arguments)}}},[a("img",{attrs:{src:e.ButtonImage,mode:""}})]),a("v-uni-view",{staticClass:"bottomnicoe"},[a("img",{attrs:{src:e.BottomImage,mode:""}})])],1)},i=[]}}]);