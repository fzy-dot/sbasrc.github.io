(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00b4":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"content"},[t("wx-open-launch-weapp",{attrs:{id:"launch-btn",username:"wxa37716a2d7d21dc1",path:"pages/specialActivityTwo/index"}},[t("script",{attrs:{type:"text/wxtag-template"}},[e._v('<style scoped>.btn { padding: 12px }</style>\n\t\t\t\t\t<button class="btn">打开小程序</button>')])])],1)},o=[]},"03bd":function(e,n,t){"use strict";(function(e){var i=t("4ea4");t("ac1f"),t("466d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("136e")),o={data:function(){return{checkeds:!1,imgcke:!0}},onLoad:function(){this.isWeiXinLogin(),this.GetTap()},mounted:function(){var e=this;setTimeout((function(){e.imgcke=!1}),1e3)},methods:{isWeiXinLogin:function(){var n=window.navigator.userAgent.toLowerCase();return"micromessenger"==n.match(/MicroMessenger/i)?(e("log","微信浏览器2"," at pages/index/index.vue:78"),!0):(e("log","普通浏览器2"," at pages/index/index.vue:81"),!1)},Privacy:function(){uni.navigateTo({url:"/pages/privacy/privacy"})},onChanges:function(){this.checkeds=!this.checkeds},GetTap:function(){uni.request({url:"https://377.qubendt.com/wechat/jssdk",method:"GET",success:function(n){e("log",n.data.data," at pages/index/index.vue:99"),a.default.config({debug:!0,appId:n.data.data.appId,timestamp:n.data.data.timestamp,nonceStr:n.data.data.nonceStr,signature:n.data.data.signature,jsApiList:["wx-open-launch-weapp"],openTagList:["wx-open-launch-weapp"]}),a.default.ready((function(){}))}}),e("log",111," at pages/index/index.vue:112")}}};n.default=o}).call(this,t("0de9")["log"])},"0856":function(e,n,t){"use strict";t.r(n);var i=t("03bd"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},"136e":function(e,n,t){(function(n){t("c975"),t("ac1f"),t("466d"),t("5319"),t("1276");var i=t("9523");!function(n,t){e.exports=t(n)}(window,(function(e,t){if(!e.jWeixin){var a,o,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},c=function(){var e={};for(var n in r)e[r[n]]=n;return e}(),s=e.document,d=s.title,u=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),p=!(!l.match("mac")&&!l.match("win")),f=-1!=u.indexOf("wxdebugger"),g=-1!=u.indexOf("micromessenger"),m=-1!=u.indexOf("android"),h=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),v=(o=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/))?o[1]:"",w={initStartTime:E(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},k={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:h?1:m?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},y={},x={_completes:[]},S={state:0,data:{}};N((function(){w.initEndTime=E()}));var I=!1,b=[],_=(a={config:function(n){O("config",y=n);var t=!1!==y.check;N((function(){if(t)P(r.config,{verifyJsApiList:B(y.jsApiList),verifyOpenTagList:B(y.openTagList)},function(){x._complete=function(e){w.preVerifyEndTime=E(),S.state=1,S.data=e},x.success=function(e){k.isPreVerifyOk=0},x.fail=function(e){x._fail?x._fail(e):S.state=-1};var e=x._completes;return e.push((function(){!function(){if(!(p||f||y.debug||v<"6.0.2"||k.systemType<0)){var e=new Image;k.appId=y.appId,k.initTime=w.initEndTime-w.initStartTime,k.preVerifyTime=w.preVerifyEndTime-w.preVerifyStartTime,_.getNetworkType({isInnerInvoke:!0,success:function(n){k.networkType=n.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+k.version+"&o="+k.isPreVerifyOk+"&s="+k.systemType+"&c="+k.clientVersion+"&a="+k.appId+"&n="+k.networkType+"&i="+k.initTime+"&p="+k.preVerifyTime+"&u="+k.url;e.src=t}})}}()})),x.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();x._completes=[]},x}()),w.preVerifyStartTime=E();else{S.state=1;for(var e=x._completes,n=0,i=e.length;n<i;++n)e[n]();x._completes=[]}})),_.invoke||(_.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,V(t),i)},_.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){0!=S.state?e():(x._completes.push(e),!g&&y.debug&&e())},error:function(e){v<"6.0.2"||(-1==S.state?e(S.data):x._fail=e)},checkJsApi:function(e){P("checkJsApi",{jsApiList:B(e.jsApiList)},(e._complete=function(e){if(m){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=c[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){A(r.onMenuShareTimeline,{complete:function(){P("shareTimeline",{title:e.title||d,desc:e.title||d,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){A(r.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?P("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):P("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){A(r.onMenuShareQQ,{complete:function(){P("shareQQ",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){A(r.onMenuShareWeibo,{complete:function(){P("shareWeiboApp",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){A(r.onMenuShareQZone,{complete:function(){P("shareQZone",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){P("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){P("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){P("startRecord",{},e)},stopRecord:function(e){P("stopRecord",{},e)},onVoiceRecordEnd:function(e){A("onVoiceRecordEnd",e)},playVoice:function(e){P("playVoice",{localId:e.localId},e)},pauseVoice:function(e){P("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){P("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){A("onVoicePlayEnd",e)},uploadVoice:function(e){P("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){P("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){P("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){P("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){P(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){P("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){P("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,P("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<b.length){var n=b.shift();wx.getLocalImgData(n)}},e))):b.push(e)},getNetworkType:function(e){P("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),a=n.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){P("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},i(a,"getLocation",(function(e){P(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),i(a,"hideOptionMenu",(function(e){P("hideOptionMenu",{},e)})),i(a,"showOptionMenu",(function(e){P("showOptionMenu",{},e)})),i(a,"closeWindow",(function(e){P("closeWindow",{},e=e||{})})),i(a,"hideMenuItems",(function(e){P("hideMenuItems",{menuList:e.menuList},e)})),i(a,"showMenuItems",(function(e){P("showMenuItems",{menuList:e.menuList},e)})),i(a,"hideAllNonBaseMenuItem",(function(e){P("hideAllNonBaseMenuItem",{},e)})),i(a,"showAllNonBaseMenuItem",(function(e){P("showAllNonBaseMenuItem",{},e)})),i(a,"scanQRCode",(function(e){P("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(h){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),i(a,"openAddress",(function(e){P(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),i(a,"openProductSpecificView",(function(e){P(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),i(a,"addCard",(function(e){for(var n=e.cardList,t=[],i=0,a=n.length;i<a;++i){var o=n[i],c={card_id:o.cardId,card_ext:o.cardExt};t.push(c)}P(r.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var a=n[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))})),i(a,"chooseCard",(function(e){P("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),i(a,"openCard",(function(e){for(var n=e.cardList,t=[],i=0,a=n.length;i<a;++i){var o=n[i],c={card_id:o.cardId,code:o.code};t.push(c)}P(r.openCard,{card_list:t},e)})),i(a,"consumeAndShareCard",(function(e){P(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),i(a,"chooseWXPay",(function(e){P(r.chooseWXPay,C(e),e)})),i(a,"openEnterpriseRedPacket",(function(e){P(r.openEnterpriseRedPacket,C(e),e)})),i(a,"startSearchBeacons",(function(e){P(r.startSearchBeacons,{ticket:e.ticket},e)})),i(a,"stopSearchBeacons",(function(e){P(r.stopSearchBeacons,{},e)})),i(a,"onSearchBeacons",(function(e){A(r.onSearchBeacons,e)})),i(a,"openEnterpriseChat",(function(e){P("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),i(a,"launchMiniProgram",(function(e){P("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)})),i(a,"openBusinessView",(function(e){P("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),i(a,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){P("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){P("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){P("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){P("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){P("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){P("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){N((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),a),T=1,M={};return s.addEventListener("error",(function(e){if(!m){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=T++,n["wx-id"]=a),M[a])return;M[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),s.addEventListener("load",(function(e){if(!m){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(M[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=_),_}function P(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,V(t),(function(e){L(n,e,i)})):O(n,i)}function A(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),L(n,e,t)})):O(n,i||t)}function V(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function C(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function L(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=c[t];i&&(t=i);var a="ok";if(n){var o=n.indexOf(":");"confirm"==(a=n.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==t&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t+":"+a}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",y.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function B(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],a=r[i];a&&(e[n]=a)}return e}}function O(e,t){if(!(!y.debug||t&&t.isInnerInvoke)){var i=c[e];i&&(e=i),t&&t._complete&&delete t._complete,n("log",'"'+e+'",',t||""," at node_modules/weixin-js-sdk/index.js:885")}}function E(){return(new Date).getTime()}function N(n){g&&(e.WeixinJSBridge?n():s.addEventListener&&s.addEventListener("WeixinJSBridgeReady",n,!1))}}))}).call(this,t("0de9")["log"])},9514:function(e,n,t){"use strict";t.r(n);var i=t("00b4"),a=t("0856");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("b552");var r,c=t("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4277a9f6",null,!1,i["a"],r);n["default"]=s.exports},9523:function(e,n){function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}e.exports=t},b552:function(e,n,t){"use strict";var i=t("e416"),a=t.n(i);a.a},cfa4:function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,".asc[data-v-4277a9f6]{font-family:onss;color:#c00000}uni-page-body[data-v-4277a9f6]{background:#ece9ec\n  /* padding: 0 30rpx; */}.loign[data-v-4277a9f6]{width:%?270?%;padding:%?25?% %?30?%}.loign img[data-v-4277a9f6]{width:100%}.tileImg[data-v-4277a9f6]{width:%?400?%;margin:%?20?% auto %?0?%}.tileImg uni-image[data-v-4277a9f6]{width:100%}.cents[data-v-4277a9f6]{width:100%;position:relative\n  /* height: 500rpx; */\n  /* background: url(../../statc/img/home/luoImg.png);\n     background-size:cover; */\n  /* background-size: 100% ; */}.cents uni-image[data-v-4277a9f6]{width:100%}.insa[data-v-4277a9f6]{width:100%;top:43%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);position:absolute}.insa uni-image[data-v-4277a9f6]{width:%?660?%;display:block;margin:0 auto}.chkeus[data-v-4277a9f6]{\n  /* position: absolute; */width:100%;font-family:onss;\n  /* top: 50%; */left:50%;display:flex;justify-content:center\n  /* transform: translate(-50%,-0);  */}.chkeus uni-view[data-v-4277a9f6]{width:%?40?%;margin-right:%?5?%}.chkeus uni-view uni-image[data-v-4277a9f6]{width:100%}.chkeus uni-checkbox .checkbox-input[data-v-4277a9f6]{width:20px}\n/* \t.chkeus checkbox{\n  border: 0.5px solid red;\n  width: 34rpx;\n  height: 34rpx;\n} */.chkeus uni-text[data-v-4277a9f6]{font-size:%?26?%;margin-left:%?5?%}.botnn[data-v-4277a9f6]{width:%?300?%;height:%?78?%;background-color:#c00000;color:#fff;text-align:center;border-radius:%?10?%;line-height:%?78?%;font-size:%?38?%;letter-spacing:%?4?%;font-family:onss;margin:%?30?% auto %?50?%}[data-v-4277a9f6] .uni-checkbox-wrapper .uni-checkbox-input{color:red!important}[data-v-4277a9f6] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{border:%?1?% solid red}[data-v-4277a9f6] .uni-checkbox-wrapper .uni-checkbox-input{border:1px solid red}[data-v-4277a9f6] .uni-checkbox-wrapper uni-checkbox:not([disabled]) .uni-checkbox-input:hover{color:red!important}.terxt[data-v-4277a9f6]{width:97%;margin:0 auto;\n  /* transform: scale(0.833333); */\n  /* fontSize:12rpx; */margin-top:%?0?%;color:#686868}.terxt uni-image[data-v-4277a9f6]{width:90%;display:block;height:100%;margin:0 auto}.tets[data-v-4277a9f6]{margin:0!important\n  /* padding: 0 20rpx; */\n  /* border-bottom: 1rpx solid #000; */}body.?%PAGE?%[data-v-4277a9f6]{background:#ece9ec}",""]),e.exports=n},e416:function(e,n,t){var i=t("cfa4");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("3a432d43",i,!0,{sourceMap:!1,shadowMode:!1})}}]);