(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ResCollectionPage"],{"0eb1":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,".contenttos .tops[data-v-63b7eb0f]{width:100%;text-align:center;margin:0 auto}.contenttos .tops img[data-v-63b7eb0f]{width:100%}.contenttos .imloge[data-v-63b7eb0f]{width:100%;margin:0 auto}.contenttos .imloge img[data-v-63b7eb0f]{width:100%}.contenttos .bttonimg[data-v-63b7eb0f]{width:100%;margin:auto;margin-top:%?15?%;border-radius:%?3?%}.contenttos .bttonimg img[data-v-63b7eb0f]{width:100%}.contenttos .bottomnicoe[data-v-63b7eb0f]{width:100%;margin:%?40?% auto}.contenttos .bottomnicoe img[data-v-63b7eb0f]{width:100%}",""]),e.exports=n},"1c01":function(e,n,t){"use strict";var i=t("b3e3"),o=t.n(i);o.a},2533:function(e,n,t){"use strict";t.r(n);var i=t("c2be"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=o.a},8861:function(e,n,t){"use strict";t.r(n);var i=t("e7a8"),o=t("2533");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("1c01");var r,s=t("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"63b7eb0f",null,!1,i["a"],r);n["default"]=c.exports},9523:function(e,n){function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}e.exports=t},b3e3:function(e,n,t){var i=t("0eb1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("8ee9c298",i,!0,{sourceMap:!1,shadowMode:!1})},c2be:function(e,n,t){"use strict";(function(e){var i=t("4ea4");t("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf");var o=i(t("1da1")),a=(i(t("e4c0")),t("7bfb")),r={data:function(){return{title:"Hello",baerrn:{},PageImage:"",BottomImage:"",ButtonImage:"",urls:{}}},onLoad:function(){this.TopImages(),this.PageContents(),this.ResCollections(),this.BottomImages()},methods:{TopImages:function(){var n=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"TopContent"});case 2:i=t.sent,n.baerrn=i.ReturnObject,e("log",n.baerrn," at pages/index/ResCollectionPage.vue:43");case 5:case"end":return t.stop()}}),t)})))()},PageContents:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,a.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"PageImage"});case 2:t=n.sent,e.PageImage=t.ReturnObject.PicUrl;case 4:case"end":return n.stop()}}),n)})))()},ResCollections:function(){var n=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"ButtonImage"});case 2:i=t.sent,e("log",i," at pages/index/ResCollectionPage.vue:52"),n.urls=i,n.ButtonImage=i.ReturnObject.PicUrl;case 6:case"end":return t.stop()}}),t)})))()},BottomImages:function(){var n=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.InterfaceHubs)({BaseCode:"ResCollectionPage",DetailCode:"BottomImage"});case 2:i=t.sent,e("log",i," at pages/index/ResCollectionPage.vue:58"),n.BottomImage=i.ReturnObject.PicUrl;case 5:case"end":return t.stop()}}),t)})))()},TapUrl:function(){uni.navigateTo({url:"./ResCollectionPage"})},TaoNav:function(){e("log","------"," at pages/index/ResCollectionPage.vue:68");var n=JSON.parse(this.urls.ReturnObject.UrlParams),t="";e("log",n[0]," at pages/index/ResCollectionPage.vue:71");var i="MiniProgram";if(n.map((function(n){"RedirectType"==n.Name&&e("log",n.Value," at pages/index/ResCollectionPage.vue:75"),"Appid"==n.Name&&(t=n.Value)})),e("log",t,i," at pages/index/ResCollectionPage.vue:83"),"WeChatMiniProgram"==i)return e("log","跳转外部小程序",this.urls.ReturnObject," at pages/index/ResCollectionPage.vue:85"),void jWeixin.miniProgram.navigateTo({url:"/pages/points/index/index?&appid="+t+"&paht="+this.urls.ReturnObject.Url+"&yes=yes"});if("MiniProgram"==i)return jWeixin.miniProgram.navigateTo({url:"/pages/points/index/index"}),void e("log","内部小程序","/"+this.urls.ReturnObject.Url," at pages/index/ResCollectionPage.vue:92");if("H5"==i){e("log","内部H5"," at pages/index/ResCollectionPage.vue:96");var o=this.urls.ReturnObject.Url,a=encodeURIComponent(o);return e("log",a," at pages/index/ResCollectionPage.vue:104"),void uni.navigateTo({url:"/pages/shop/wbevi?PageUrl='".concat(a,"'")})}}}};n.default=r}).call(this,t("0de9")["log"])},e4c0:function(e,n,t){(function(n){t("c975"),t("ac1f"),t("466d"),t("5319"),t("1276");var i=t("9523");!function(n,t){e.exports=t(n)}(window,(function(e,t){if(!e.jWeixin){var o,a,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},s=function(){var e={};for(var n in r)e[r[n]]=n;return e}(),c=e.document,u=c.title,d=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),p=!(!l.match("mac")&&!l.match("win")),f=-1!=d.indexOf("wxdebugger"),g=-1!=d.indexOf("micromessenger"),m=-1!=d.indexOf("android"),v=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(a=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?a[1]:"",w={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},I={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:m?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},S={},y={_completes:[]},b={state:0,data:{}};N((function(){w.initEndTime=L()}));var T=!1,P=[],_=(o={config:function(n){A("config",S=n);var t=!1!==S.check;N((function(){if(t)C(r.config,{verifyJsApiList:O(S.jsApiList),verifyOpenTagList:O(S.openTagList)},function(){y._complete=function(e){w.preVerifyEndTime=L(),b.state=1,b.data=e},y.success=function(e){I.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):b.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(p||f||S.debug||h<"6.0.2"||I.systemType<0)){var e=new Image;I.appId=S.appId,I.initTime=w.initEndTime-w.initStartTime,I.preVerifyTime=w.preVerifyEndTime-w.preVerifyStartTime,_.getNetworkType({isInnerInvoke:!0,success:function(n){I.networkType=n.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+I.version+"&o="+I.isPreVerifyOk+"&s="+I.systemType+"&c="+I.clientVersion+"&a="+I.appId+"&n="+I.networkType+"&i="+I.initTime+"&p="+I.preVerifyTime+"&u="+I.url;e.src=t}})}}()})),y.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();y._completes=[]},y}()),w.preVerifyStartTime=L();else{b.state=1;for(var e=y._completes,n=0,i=e.length;n<i;++n)e[n]();y._completes=[]}})),_.invoke||(_.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,M(t),i)},_.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){0!=b.state?e():(y._completes.push(e),!g&&S.debug&&e())},error:function(e){h<"6.0.2"||(-1==b.state?e(b.data):y._fail=e)},checkJsApi:function(e){C("checkJsApi",{jsApiList:O(e.jsApiList)},(e._complete=function(e){if(m){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=s[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){R(r.onMenuShareTimeline,{complete:function(){C("shareTimeline",{title:e.title||u,desc:e.title||u,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){R(r.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?C("sendAppMessage",{title:e.title||u,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):C("sendAppMessage",{title:e.title||u,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){R(r.onMenuShareQQ,{complete:function(){C("shareQQ",{title:e.title||u,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){R(r.onMenuShareWeibo,{complete:function(){C("shareWeiboApp",{title:e.title||u,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){R(r.onMenuShareQZone,{complete:function(){C("shareQZone",{title:e.title||u,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){C("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){C("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){C("startRecord",{},e)},stopRecord:function(e){C("stopRecord",{},e)},onVoiceRecordEnd:function(e){R("onVoiceRecordEnd",e)},playVoice:function(e){C("playVoice",{localId:e.localId},e)},pauseVoice:function(e){C("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){C("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){R("onVoicePlayEnd",e)},uploadVoice:function(e){C("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){C("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){C("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){C("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){C(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){C("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){C("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===T?(T=!0,C("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(T=!1,0<P.length){var n=P.shift();wx.getLocalImgData(n)}},e))):P.push(e)},getNetworkType:function(e){C("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){C("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},i(o,"getLocation",(function(e){C(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),i(o,"hideOptionMenu",(function(e){C("hideOptionMenu",{},e)})),i(o,"showOptionMenu",(function(e){C("showOptionMenu",{},e)})),i(o,"closeWindow",(function(e){C("closeWindow",{},e=e||{})})),i(o,"hideMenuItems",(function(e){C("hideMenuItems",{menuList:e.menuList},e)})),i(o,"showMenuItems",(function(e){C("showMenuItems",{menuList:e.menuList},e)})),i(o,"hideAllNonBaseMenuItem",(function(e){C("hideAllNonBaseMenuItem",{},e)})),i(o,"showAllNonBaseMenuItem",(function(e){C("showAllNonBaseMenuItem",{},e)})),i(o,"scanQRCode",(function(e){C("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(v){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),i(o,"openAddress",(function(e){C(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),i(o,"openProductSpecificView",(function(e){C(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),i(o,"addCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var a=n[i],s={card_id:a.cardId,card_ext:a.cardExt};t.push(s)}C(r.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),i(o,"chooseCard",(function(e){C("chooseCard",{app_id:S.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),i(o,"openCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var a=n[i],s={card_id:a.cardId,code:a.code};t.push(s)}C(r.openCard,{card_list:t},e)})),i(o,"consumeAndShareCard",(function(e){C(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),i(o,"chooseWXPay",(function(e){C(r.chooseWXPay,B(e),e)})),i(o,"openEnterpriseRedPacket",(function(e){C(r.openEnterpriseRedPacket,B(e),e)})),i(o,"startSearchBeacons",(function(e){C(r.startSearchBeacons,{ticket:e.ticket},e)})),i(o,"stopSearchBeacons",(function(e){C(r.stopSearchBeacons,{},e)})),i(o,"onSearchBeacons",(function(e){R(r.onSearchBeacons,e)})),i(o,"openEnterpriseChat",(function(e){C("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),i(o,"launchMiniProgram",(function(e){C("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)})),i(o,"openBusinessView",(function(e){C("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),i(o,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){C("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){C("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){C("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){C("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){C("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){C("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){N((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),o),x=1,k={};return c.addEventListener("error",(function(e){if(!m){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=x++,n["wx-id"]=o),k[o])return;k[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!m){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(k[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=_),_}function C(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,M(t),(function(e){V(n,e,i)})):A(n,i)}function R(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),V(n,e,t)})):A(n,i||t)}function M(e){return(e=e||{}).appId=S.appId,e.verifyAppId=S.appId,e.verifySignType="sha1",e.verifyTimestamp=S.timestamp+"",e.verifyNonceStr=S.nonceStr,e.verifySignature=S.signature,e}function B(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function V(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=s[t];i&&(t=i);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t+":"+o}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",S.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function O(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],o=r[i];o&&(e[n]=o)}return e}}function A(e,t){if(!(!S.debug||t&&t.isInnerInvoke)){var i=s[e];i&&(e=i),t&&t._complete&&delete t._complete,n("log",'"'+e+'",',t||""," at node_modules/weixin-js-sdk/index.js:885")}}function L(){return(new Date).getTime()}function N(n){g&&(e.WeixinJSBridge?n():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",n,!1))}}))}).call(this,t("0de9")["log"])},e7a8:function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"contenttos"},[t("v-uni-view",{staticClass:"tops"},[t("img",{attrs:{src:e.baerrn.PicUrl,mode:"aspectFit"}}),t("img")]),t("v-uni-view",{staticClass:"imloge"},[t("img",{attrs:{src:e.PageImage,mode:"aspectFill"}})]),t("v-uni-view",{staticClass:"bttonimg",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.TaoNav.apply(void 0,arguments)}}},[t("img",{attrs:{src:e.ButtonImage,mode:""}})]),t("v-uni-view",{staticClass:"bottomnicoe"},[t("img",{attrs:{src:e.BottomImage,mode:""}})])],1)},a=[]}}]);