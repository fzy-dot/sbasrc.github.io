(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"03bd":function(t,i,n){"use strict";(function(t){n("ac1f"),n("466d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{checkeds:!1,imgcke:!0}},onLoad:function(){this.isWeiXinLogin()},mounted:function(){var t=this;setTimeout((function(){t.imgcke=!1}),1e3)},methods:{isWeiXinLogin:function(){var i=window.navigator.userAgent.toLowerCase();return"micromessenger"==i.match(/MicroMessenger/i)?(t("log","微信浏览器1"," at pages/index/index.vue:70"),!0):(t("log","普通浏览器1"," at pages/index/index.vue:73"),!1)},Privacy:function(){uni.navigateTo({url:"/pages/privacy/privacy"})},onChanges:function(){this.checkeds=!this.checkeds},GetTap:function(){t("log",this.checkeds," at pages/index/index.vue:86"),wx.config({appId:"小程序 AppID",timestamp:0,nonceStr:"nonceStr",signature:"signature",jsApiList:["chooseImage"],openTagList:["wx-open-launch-weapp"]})}}};i.default=e}).call(this,n("0de9")["log"])},"06b8":function(t,i,n){t.exports=n.p+"static/img/luoImg.811b040f.png"},"0856":function(t,i,n){"use strict";n.r(i);var e=n("03bd"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},1013:function(t,i,n){t.exports=n.p+"static/img/text.fde2a4b3.png"},1905:function(t,i,n){t.exports=n.p+"static/img/logo.09178401.png"},"28d4":function(t,i,n){t.exports=n.p+"static/img/title1.4219efd9.png"},3873:function(t,i,n){"use strict";var e=n("48d8"),a=n.n(e);a.a},"48d8":function(t,i,n){var e=n("79f0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("6789a982",e,!0,{sourceMap:!1,shadowMode:!1})},"493f":function(t,i,n){t.exports=n.p+"static/img/siles_.d7845ee7.png"},"79f0":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".asc[data-v-1708d05b]{font-family:onss;color:#c00000}uni-page-body[data-v-1708d05b]{background:#ece9ec\n  /* padding: 0 30rpx; */}.loign[data-v-1708d05b]{width:%?270?%;padding:%?25?% %?30?%}.loign img[data-v-1708d05b]{width:100%}.tileImg[data-v-1708d05b]{width:%?400?%;margin:%?20?% auto %?0?%}.tileImg uni-image[data-v-1708d05b]{width:100%}.cents[data-v-1708d05b]{width:100%;position:relative\n  /* height: 500rpx; */\n  /* background: url(../../statc/img/home/luoImg.png);\n\t     background-size:cover; */\n  /* background-size: 100% ; */}.cents uni-image[data-v-1708d05b]{width:100%}.insa[data-v-1708d05b]{width:100%;top:43%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);position:absolute}.insa uni-image[data-v-1708d05b]{width:%?660?%;display:block;margin:0 auto}.chkeus[data-v-1708d05b]{\n  /* position: absolute; */width:100%;font-family:onss;\n  /* top: 50%; */left:50%;display:flex;justify-content:center\n  /* transform: translate(-50%,-0);  */}.chkeus uni-view[data-v-1708d05b]{width:%?40?%;margin-right:%?5?%}.chkeus uni-view uni-image[data-v-1708d05b]{width:100%}.chkeus uni-checkbox .checkbox-input[data-v-1708d05b]{width:20px}\n/* \t.chkeus checkbox{\n\t  border: 0.5px solid red;\n\t  width: 34rpx;\n\t  height: 34rpx;\n\t} */.chkeus uni-text[data-v-1708d05b]{font-size:%?26?%;margin-left:%?5?%}.botnn[data-v-1708d05b]{width:%?300?%;height:%?78?%;background-color:#c00000;color:#fff;text-align:center;border-radius:%?10?%;line-height:%?78?%;font-size:%?38?%;letter-spacing:%?4?%;font-family:onss;margin:%?30?% auto %?50?%}[data-v-1708d05b] .uni-checkbox-wrapper .uni-checkbox-input{color:red!important}[data-v-1708d05b] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{border:%?1?% solid red}[data-v-1708d05b] .uni-checkbox-wrapper .uni-checkbox-input{border:1px solid red}[data-v-1708d05b] .uni-checkbox-wrapper uni-checkbox:not([disabled]) .uni-checkbox-input:hover{color:red!important}.terxt[data-v-1708d05b]{width:97%;margin:0 auto;\n  /* transform: scale(0.833333); */\n  /* fontSize:12rpx; */margin-top:%?0?%;color:#686868}.terxt uni-image[data-v-1708d05b]{width:90%;display:block;height:100%;margin:0 auto}.tets[data-v-1708d05b]{margin:0!important\n  /* padding: 0 20rpx; */\n  /* border-bottom: 1rpx solid #000; */}body.?%PAGE?%[data-v-1708d05b]{background:#ece9ec}",""]),t.exports=i},9514:function(t,i,n){"use strict";n.r(i);var e=n("ab0c"),a=n("0856");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("3873");var s,c=n("f0c5"),d=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"1708d05b",null,!1,e["a"],s);i["default"]=d.exports},ab0c:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"loign"},[e("v-uni-image",{attrs:{src:n("1905"),alt:"",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"tileImg"},[e("v-uni-image",{attrs:{src:n("28d4"),alt:"",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"cents"},[e("v-uni-image",{attrs:{mode:"widthFix",src:n("06b8")}}),e("v-uni-view",{staticClass:"insa"},[e("v-uni-image",{attrs:{mode:"widthFix",src:n("493f")}}),e("v-uni-view",{staticClass:"chkeus"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onChanges.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:t.checkeds?"../../static/img/home/indeckf.png":"../../static/img/home/indeck.png",mode:"widthFix"}})],1),e("v-uni-text",[t._v("同意测试请阅读"),e("v-uni-text",{staticClass:"tets",attrs:{href:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.Privacy.apply(void 0,arguments)}}},[t._v("《隐私政策》")])],1)],1),e("v-uni-view",{staticClass:"botnn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.GetTap.apply(void 0,arguments)}}},[t._v("开始测试")]),e("v-uni-view",{staticClass:"terxt"},[e("v-uni-image",{attrs:{src:n("1013"),alt:"",mode:"widthFix"}})],1)],1)],1),e("v-uni-view"),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.imgcke,expression:"imgcke"}],staticClass:"lodimgs"},[e("v-uni-view",{staticClass:"lodinimg"},[e("v-uni-view",{staticStyle:{color:"#d7c590"}},[e("div",{attrs:{id:"loading1"}},[e("div",{staticClass:"demo1"}),e("div",{staticClass:"demo1"}),e("div",{staticClass:"demo1"}),e("div",{staticClass:"demo1"}),e("div",{staticClass:"demo1"})])]),e("v-uni-image",{attrs:{src:n("c0e5"),mode:""}})],1)],1)],1)},o=[]},c0e5:function(t,i,n){t.exports=n.p+"static/img/loading.0bffc33a.png"}}]);