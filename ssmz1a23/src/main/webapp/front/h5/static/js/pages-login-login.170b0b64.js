(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{1814:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-8897a3c0]{padding:0 %?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - 44px);box-sizing:border-box}.content[data-v-8897a3c0]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-8897a3c0]{text-align:center}.logo uni-image[data-v-8897a3c0]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-8897a3c0]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-8897a3c0]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-8897a3c0]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-8897a3c0]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-8897a3c0]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-8897a3c0]{margin:0;color:#b49950}',""]),t.exports=n},3285:function(t,n,i){"use strict";i.r(n);var e=i("6263"),o=i.n(e);for(var r in e)"default"!==r&&function(t){i.d(n,t,(function(){return e[t]}))}(r);n["default"]=o.a},"55f6":function(t,n,i){"use strict";var e=i("d2c6"),o=i.n(e);o.a},"5ecd":function(t,n,i){"use strict";var e,o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-image",{style:{boxShadow:"",borderColor:"rgba(74, 209, 242, 1)",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20201207/90ac562db6f34fc39a8d2f9bacf47603.png",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20201207/90ac562db6f34fc39a8d2f9bacf47603.png",mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(205, 197, 197, 1)",backgroundColor:"rgba(135, 128, 128, 0.34)",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:t.username,callback:function(n){t.username=n},expression:"username"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(205, 197, 197, 1)",backgroundColor:"rgba(135, 128, 128, 0.34)",borderRadius:"40rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-picker",{attrs:{value:t.index,range:t.options},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.optionsChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-picker-type",style:{lineHeight:"80rpx",fontSize:"28rpx",color:"rgba(38, 36, 36, 1)",textAlign:"left"}},[t._v(t._s(t.options[t.index]))])],1)],1),i("v-uni-view",[i("v-uni-button",{style:{borderColor:"rgba(68, 57, 57, 1)",backgroundColor:"rgba(74, 209, 242, 1)",borderRadius:"40rpx",color:"rgba(71, 61, 68, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onLoginTap.apply(void 0,arguments)}}},[t._v("登录")])],1),i("v-uni-view",{staticClass:"links"},[i("v-uni-view",{staticClass:"link-highlight",style:{color:"rgba(36, 200, 72, 1)",fontSize:"24rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onRegisterTap("yonghu")}}},[t._v("注册用户")]),i("v-uni-view",[t._v("|")]),i("v-uni-view",{style:{color:"rgba(235, 51, 51, 1)",fontSize:"24rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onForgetTap.apply(void 0,arguments)}}},[t._v("忘记密码？")])],1)],1)},r=[];i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return e}))},6263:function(t,n,i){"use strict";var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("96cf");var o=e(i("3b8d")),r=e(i("2971")),a={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0}},onLoad:function(){var t=["请选择登录用户类型"],n=r.default.list();this.menuList=n;for(var i=0;i<this.menuList.length;i++)"是"==this.menuList[i].hasFrontLogin&&t.push(this.menuList[i].roleName);this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){uni.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.optionsValues[this.index]){t.next=3;break}return this.$utils.msg("请选择登陆用户类型"),t.abrupt("return");case 3:return t.next=5,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 5:return n=t.sent,uni.setStorageSync("token",n.token),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),t.next=10,this.$api.session("".concat(this.optionsValues[this.index]));case 10:n=t.sent,uni.setStorageSync("userid",n.data.id),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 14:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value}}};n.default=a},a86a:function(t,n,i){"use strict";i.r(n);var e=i("5ecd"),o=i("3285");for(var r in o)"default"!==r&&function(t){i.d(n,t,(function(){return o[t]}))}(r);i("55f6");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"8897a3c0",null,!1,e["a"],a);n["default"]=c.exports},d2c6:function(t,n,i){var e=i("1814");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("05f460d8",e,!0,{sourceMap:!1,shadowMode:!1})}}]);