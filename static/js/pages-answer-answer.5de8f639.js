(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-answer-answer"],{1905:function(e,t,a){e.exports=a.p+"static/img/logo.09178401.png"},"1bbf":function(e,t,a){"use strict";a.r(t);var i=a("5864"),n=a("fe4d");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("c96f");var c,o=a("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"215b0cd4",null,!1,i["a"],c);t["default"]=d.exports},"1ced":function(e,t,a){var i=a("cde5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("bafcba38",i,!0,{sourceMap:!1,shadowMode:!1})},"393e":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{cheks:!1,sex:!1,ang:!1,maps:!1,ageche:"",mapche:"",datage:[{name:"18岁以下"},{name:"18岁-24岁"},{name:"25岁-29岁"},{name:"30岁-34岁"},{name:"35岁-39岁"},{name:"40岁及以上"}],datmap:[{name:"河北"},{name:"山西"},{name:"辽宁"},{name:"吉林"},{name:"黑龙江"},{name:"江苏"},{name:"浙江"},{name:"安徽"},{name:"福建"},{name:"江西"},{name:"河南"},{name:"山东"},{name:"湖北"},{name:"湖南"},{name:"广东"},{name:"海南"},{name:"四川"},{name:"云南"},{name:"陕西"},{name:"甘肃"},{name:"云南"},{name:"陕西"},{name:"青海"},{name:"台湾"},{name:"内蒙古"},{name:"西藏"},{name:"宁夏"},{name:"新疆"},{name:"北京"},{name:"天津"},{name:"上海"},{name:"重庆"},{name:"香港"},{name:"澳门"}],imgcke:!1}},mounted:function(){},methods:{onChanges:function(t){e("log",t," at pages/answer/answer.vue:224"),this.cheks=!this.cheks,this.sex=!this.cheks},onChangesex:function(e){this.sex=!this.sex,this.cheks=!this.sex},pickerong:function(t){this.ageche=t.detail.value[0],e("log",this.datage[this.ageche]," at pages/answer/answer.vue:234")},mappickerong:function(e){this.mapche=e.detail.value[0]},Gets:function(){this.ang=!0},Maps:function(){this.maps=!0},GepuSo:function(){var t=function(e){uni.showToast({title:e,duration:2e3,icon:"none"})};if(0!=this.cheks||0!=this.sex)if(""!=this.ageche||0!=this.ang)if(""!=this.mapche||0!=this.maps){var a={sex:this.cheks?"女":"男",age:""==this.ageche?"18岁以下":this.datage[this.ageche].name,area:""==this.mapche?"河北":this.datmap[this.mapche].name};e("log",a,"ppp"," at pages/answer/answer.vue:270"),JSON.stringify(a),uni.navigateTo({url:"/pages/choice/choice?prame="+JSON.stringify(a)})}else t("请选择您的常居地区");else t("请选择你的年龄范围");else t("请勾选您的性别")}}};t.default=a}).call(this,a("0de9")["log"])},5864:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{height:"100%"}},[i("v-uni-view",{staticClass:"anpage",staticStyle:{height:"100%"}},[i("v-uni-view",{staticClass:"loign",attrs:{onTap:"add"}},[i("v-uni-image",{attrs:{src:a("1905"),alt:"",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"sexchek"},[i("v-uni-view",{staticClass:"tiname"},[e._v("您是女性还是男性？")]),i("v-uni-view",{staticClass:"chokebo"},[i("v-uni-view",{staticClass:"chestimg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onChanges.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:e.cheks?"../../static/img/home/xxs.png":"../../static/img/home/xx.png",mode:"widthFix"}}),i("v-uni-text",[e._v("女性")])],1),i("v-uni-view",{staticClass:"chestimg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onChangesex.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:e.sex?"../../static/img/home/xxs.png":"../../static/img/home/xx.png",mode:"widthFix"}}),i("v-uni-text",[e._v("男性")])],1)],1)],1),i("v-uni-view",{staticClass:"prick"},[i("v-uni-view",{staticClass:"tiname"},[e._v("请选择您的年龄范围")]),e.ang?i("v-uni-view",{staticClass:"page-section"},[i("v-uni-view",{staticClass:"page-section-demo"},[i("v-uni-picker-view",{staticClass:"my-picker",attrs:{"indicator-class":"pickerCol"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerong.apply(void 0,arguments)}}},[i("v-uni-picker-view-column",e._l(e.datage,(function(t,a){return i("v-uni-view",[e._v(e._s(t.name))])})),1)],1)],1)],1):i("v-uni-view",{staticClass:"tils",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.Gets.apply(void 0,arguments)}}},[e._v("请选择")])],1),i("v-uni-view",{staticClass:"prick"},[i("v-uni-view",{staticClass:"tiname"},[e._v("请选择您的常居地区")]),e.maps?i("v-uni-view",{staticClass:"page-section"},[i("v-uni-view",{staticClass:"page-section-demo"},[i("v-uni-picker-view",{staticClass:"my-picker",attrs:{"indicator-class":"pickerCol","mask-class":"maskcl"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.mappickerong.apply(void 0,arguments)}}},[i("v-uni-picker-view-column",e._l(e.datmap,(function(t,a){return i("v-uni-view",[e._v(e._s(t.name))])})),1)],1)],1)],1):i("v-uni-view",{staticClass:"tils",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.Maps.apply(void 0,arguments)}}},[e._v("请选择")])],1),i("v-uni-view",{staticClass:"btons",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.GepuSo.apply(void 0,arguments)}}},[e._v("下一步")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.imgcke,expression:"imgcke"}],staticClass:"lodimgs"},[i("v-uni-view",{staticClass:"lodinimg"},[i("v-uni-view",{staticStyle:{color:"#d7c590"}},[i("div",{attrs:{id:"loading1"}},[i("div",{staticClass:"demo1"}),i("div",{staticClass:"demo1"}),i("div",{staticClass:"demo1"}),i("div",{staticClass:"demo1"}),i("div",{staticClass:"demo1"})])]),i("v-uni-image",{attrs:{src:a("c0e5"),mode:""}})],1)],1)],1)},s=[]},b54c:function(e,t,a){e.exports=a.p+"static/img/bej.98beea2f.png"},c0e5:function(e,t,a){e.exports=a.p+"static/img/loading.024b23c9.png"},c96f:function(e,t,a){"use strict";var i=a("1ced"),n=a.n(i);n.a},cde5:function(e,t,a){var i=a("24fb"),n=a("1de5"),s=a("b54c");t=i(!1);var c=n(s);t.push([e.i,"uni-page-body[data-v-215b0cd4]{width:100%;height:100vh;background:url("+c+") no-repeat;background-size:100% 100%;padding-top:constant(safe-area-inset-top);padding-left:constant(safe-area-inset-left);padding-right:constant(safe-area-inset-right);padding-bottom:constant(safe-area-inset-bottom);padding:0}.sexchek[data-v-215b0cd4]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55%;\n  /* margin-top: 80rpx; */margin:%?40?% auto %?100?%}.sexchek .tiname[data-v-215b0cd4]{width:100%;text-align:center;font-size:%?35?%;font-weight:700;font-family:onss;letter-spacing:%?3?%;margin-bottom:%?20?%}.sexchek .chokebo[data-v-215b0cd4]{width:100%;margin-top:%?25?%;display:flex;justify-content:space-between}.chestimg[data-v-215b0cd4]{display:flex}.chestimg uni-image[data-v-215b0cd4]{width:%?55?%;margin-right:%?15?%}.chestimg uni-text[data-v-215b0cd4]{font-family:onss}[data-v-215b0cd4] .uni-checkbox-wrapper .uni-checkbox-input{color:#d4c596!important}[data-v-215b0cd4] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{border:%?1?% solid #d4c596}[data-v-215b0cd4] .uni-checkbox-wrapper .uni-checkbox-input{border:1px solid #d4c596}[data-v-215b0cd4] .uni-picker-view-mask{background:transparent}[data-v-215b0cd4] .uni-checkbox-wrapper .uni-checkbox:not([disabled]) .uni-checkbox-input:hover{color:#d4c596!important}[data-v-215b0cd4] uni-checkbox:not([disabled]) .uni-checkbox-input:hover{border:%?1?% solid #d4c596!important}.page-section[data-v-215b0cd4]{\n  /* background: red; */height:%?240?%}.page-section-demo[data-v-215b0cd4]{height:100%}.my-picker[data-v-215b0cd4]{height:100%}.tienmae[data-v-215b0cd4]{text-align:center\n  /* background-color: #ffffff; */}.prick[data-v-215b0cd4]{margin:%?40?% 0 %?100?% 0}.prick .tiname[data-v-215b0cd4]{width:100%;text-align:center;font-size:%?35?%;font-weight:700;letter-spacing:%?3?%;margin-bottom:%?20?%;font-family:onss}[data-v-215b0cd4] .uni-picker-view-content uni-view{text-align:center;height:%?80?%!important;line-height:%?80?%;font-family:onss}.vies[data-v-215b0cd4]{font-size:%?38?%!important}.tils[data-v-215b0cd4]{width:50%;font-family:onss;height:%?70?%;text-align:center;margin:%?50?% auto;line-height:%?70?%;border-top:1px solid transparent;border-bottom:1px solid transparent;border-image:linear-gradient(90deg,#464646,#464646,#464646) 1 1}.pickerCol[data-v-215b0cd4]{width:50%;height:%?80?%;border-top:1px solid transparent;border-bottom:1px solid transparent;border-image:linear-gradient(90deg,#464646,#464646,#464646) 1 1;margin-left:25%;font-size:%?35?%!important}.maskcl[data-v-215b0cd4]{\n  /* background-color: rgba(233, 230, 230, 0.4); */background-color:initial}.btons[data-v-215b0cd4]{width:%?300?%;color:#fff;font-size:%?38?%;height:%?80?%;background-color:#c00000;letter-spacing:%?4?%;text-align:center;line-height:%?80?%;border-radius:%?5?%;margin:0 auto;font-family:onss}body.?%PAGE?%[data-v-215b0cd4]{background:url("+c+") no-repeat;background-size:100% 100%}",""]),e.exports=t},fe4d:function(e,t,a){"use strict";a.r(t);var i=a("393e"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a}}]);