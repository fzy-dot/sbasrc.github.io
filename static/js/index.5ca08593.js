(function(n){function e(e){for(var i,r,u=e[0],c=e[1],s=e[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);p&&p(e);while(d.length)d.shift()();return t.push.apply(t,s||[]),o()}function o(){for(var n,e=0;e<t.length;e++){for(var o=t[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(i=!1)}i&&(t.splice(e--,1),n=u(u.s=o[0]))}return n}var i={},a={index:0},t=[];function r(n){return u.p+"static/js/"+({"pages-answer-answer":"pages-answer-answer","pages-choice-choice":"pages-choice-choice","pages-index-index":"pages-index-index","pages-privacy-privacy":"pages-privacy-privacy","pages-result-result":"pages-result-result"}[n]||n)+"."+{"pages-answer-answer":"98903c16","pages-choice-choice":"a3996fef","pages-index-index":"4b33b731","pages-privacy-privacy":"1bfdc58c","pages-result-result":"6525aab5"}[n]+".js"}function u(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(n){var e=[],o=a[n];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,i){o=a[n]=[e,i]}));e.push(o[2]=i);var t,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(n);var s=new Error;t=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=a[n];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),t=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+t+")",s.name="ChunkLoadError",s.type=i,s.request=t,o[1](s)}a[n]=void 0}};var l=setTimeout((function(){t({type:"timeout",target:c})}),12e4);c.onerror=c.onload=t,document.head.appendChild(c)}return Promise.all(e)},u.m=n,u.c=i,u.d=function(n,e,o){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)u.d(o,i,function(e){return n[e]}.bind(null,i));return o},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="./",u.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;t.push([0,"chunk-vendors"]),o()})({0:function(n,e,o){n.exports=o("f647")},"06f4":function(n,e,o){"use strict";o.r(e);var i=o("5000"),a=o.n(i);for(var t in i)"default"!==t&&function(n){o.d(e,n,(function(){return i[n]}))}(t);e["default"]=a.a},"14b1":function(n,e,o){n.exports=o.p+"static/fonts/myFont.cafac0c1.ttf"},5e3:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){n("log","App Launch"," at App.vue:4")},onShow:function(){n("log","App Show"," at App.vue:7")},onHide:function(){n("log","App Hide"," at App.vue:10")}};e.default=o}).call(this,o("0de9")["log"])},6246:function(n,e,o){var i=o("7968");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=o("4f06").default;a("5115f387",i,!0,{sourceMap:!1,shadowMode:!1})},7968:function(n,e,o){var i=o("24fb"),a=o("1de5"),t=o("14b1");e=i(!1);var r=a(t);e.push([n.i,".loign{width:%?300?%;padding:%?25?% %?30?%}@font-face{font-family:onss;src:url("+r+")}.loign uni-image{width:100%}.lodimgs{position:fixed;width:100%;height:100%;top:0;text-align:center;background:rgba(0,0,0,.9)}.lodimgs uni-image{width:80%;display:block;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n/*每个页面公共css */",""]),n.exports=e},"8a0f":function(n,e,o){"use strict";var i;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return t})),o.d(e,"a",(function(){return i}));var a=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},t=[]},"8bb0":function(n,e,o){"use strict";o.r(e);var i=o("8a0f"),a=o("06f4");for(var t in a)"default"!==t&&function(n){o.d(e,n,(function(){return a[n]}))}(t);o("9733");var r,u=o("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},9733:function(n,e,o){"use strict";var i=o("6246"),a=o.n(i);a.a},d2e0:function(n,e,o){"use strict";(function(n){var e=o("4ea4");o("13d5"),o("d3b7"),o("ac1f"),o("5319"),o("ddb0");var i=e(o("e143")),a={keys:function(){return[]}};n["____97E5308____"]=!0,delete n["____97E5308____"],n.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^uniad$":"@dcloudio/uni-cli-shared/components/uniad.vue","^ad-rewarded-video$":"@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue","^ad-fullscreen-video$":"@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue","^ad-interstitial$":"@dcloudio/uni-cli-shared/components/ad-interstitial.vue","^ad-interactive$":"@dcloudio/uni-cli-shared/components/ad-interactive.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},n.__uniConfig.compilerVersion="3.5.3",n.__uniConfig.uniPlatform="h5",n.__uniConfig.appId="__UNI__97E5308",n.__uniConfig.appName="cheny",n.__uniConfig.appVersion="1.0.0",n.__uniConfig.appVersionCode="100",n.__uniConfig.router={mode:"hash",base:"./"},n.__uniConfig.publicPath="./",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=a.keys().reduce((function(n,e){var o=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),i=a(e);return Object.assign(n[o]||(n[o]={}),i.common||i),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=o.e,i.default.component("pages-index-index",(function(n){var e={component:o.e("pages-index-index").then(function(){return n(o("9514"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-privacy-privacy",(function(n){var e={component:o.e("pages-privacy-privacy").then(function(){return n(o("ffd6"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-answer-answer",(function(n){var e={component:o.e("pages-answer-answer").then(function(){return n(o("1bbf"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-choice-choice",(function(n){var e={component:o.e("pages-choice-choice").then(function(){return n(o("d94d"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-result-result",(function(n){var e={component:o.e("pages-result-result").then(function(){return n(o("2f34"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"城野医生"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/privacy/privacy",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"城野医生"})},[n("pages-privacy-privacy",{slot:"page"})])}},meta:{name:"pages-privacy-privacy",isNVue:!1,maxWidth:0,pagePath:"pages/privacy/privacy",windowTop:44}},{path:"/pages/answer/answer",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"城野医生"})},[n("pages-answer-answer",{slot:"page"})])}},meta:{name:"pages-answer-answer",isNVue:!1,maxWidth:0,pagePath:"pages/answer/answer",windowTop:44}},{path:"/pages/choice/choice",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"城野医生"})},[n("pages-choice-choice",{slot:"page"})])}},meta:{name:"pages-choice-choice",isNVue:!1,maxWidth:0,pagePath:"pages/choice/choice",windowTop:44}},{path:"/pages/result/result",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"城野医生"})},[n("pages-result-result",{slot:"page"})])}},meta:{name:"pages-result-result",isNVue:!1,maxWidth:0,pagePath:"pages/result/result",windowTop:44}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,o("c8ba"))},f647:function(n,e,o){"use strict";var i=o("4ea4"),a=i(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("d2e0"),o("1c31");var t=i(o("8bb0")),r=i(o("e143")),u=i(o("cbb4"));r.default.use(u.default),r.default.config.productionTip=!1,t.default.mpType="app";var c=new r.default((0,a.default)({},t.default));c.$mount()}});