(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"580177ac"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/manifge/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07da":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head"}},[n("vue-typed-js",{attrs:{strings:["manifest.json Generator"],loop:!1,id:"type"}},[n("h1",{staticClass:"typing"})])],1)},r=[]},1:function(t,e){},2:function(t,e){},"4de6":function(t,e){},"51dd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("headtop"),n("ul",{attrs:{id:"tabMenu"}},[n("li",{on:{click:function(e){return t.change(1)}}},[t._v("PWA マニフェスト")]),n("li",{on:{click:function(e){return t.change(2)}}},[t._v("chrome マニフェスト")])]),1===t.active?n("pwamani"):t._e(),2===t.active?n("extension"):t._e()],1),n("router-view")],1)},o=[],i=n("71c2"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"range"}},[n("div",[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),n("div",{staticClass:"wd"},[n("a",{attrs:{id:"btn"},on:{click:t.make}},[t._v("json作成")])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"name"}},[t._v("name")]),n("div",{attrs:{id:"text1"}},[n("input",{staticClass:"common",attrs:{type:"text",id:"name",placeholder:"name"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"short"}},[t._v("short_name")]),n("div",{attrs:{id:"text2"}},[n("input",{staticClass:"common",attrs:{type:"text",id:"short",placeholder:"short_name"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"display"}},[t._v("display")]),n("div",[n("select",{staticClass:"common",attrs:{id:"display"}},[n("option",{attrs:{value:"full"}},[t._v("fullscreen")]),n("option",{attrs:{value:"stand"}},[t._v("standalone")]),n("option",{attrs:{value:"mini"}},[t._v("minimal-ui")]),n("option",{attrs:{value:"browser"}},[t._v("browser")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"color"}},[t._v("background_color")]),n("div",[n("input",{staticClass:"common",attrs:{type:"color",id:"color",placeholder:"background_color"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"icon"}},[t._v("icon")]),n("div",[n("input",{staticClass:"common",attrs:{type:"file",id:"icon",placeholder:"icon"}})])])}],u=n("7c39"),l=n.n(u),f=n("21a6"),d=n.n(f),p={methods:{make:function(){var t=new l.a;t.file("manifest.json","hahaha"),t.folder("img").file("manifest.js","guhehe"),t.generateAsync({type:"blob"}).then((function(t){d.a.saveAs(t,"hello.zip")}))}}},v=p,m=(n("f2ad"),n("2877")),h=Object(m["a"])(v,s,c,!1,null,"d30a5044",null),b=h.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("拡張機能")])])}],g={},w=Object(m["a"])(g,_,y,!1,null,null,null),j=w.exports,C={components:{headtop:i["default"],pwamani:b,extension:j},data:function(){return{active:1}},methods:{change:function(t){this.active=t}}},x=C,O=(n("7faf"),Object(m["a"])(x,r,o,!1,null,null,null)),E=O.exports,k=(n("d3b7"),n("8c4f")),$=n("8cb8");a["a"].use(k["a"]),a["a"].use($["default"]);var P=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],z=new k["a"]({mode:"history",base:"/manifge/",routes:P}),S=z,A=n("2f62");a["a"].use(A["a"]);var M=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:S,store:M,render:function(t){return t(E)}}).$mount("#app")},"71c2":function(t,e,n){"use strict";var a=n("07da"),r=n("d385"),o=(n("97f5"),n("2877")),i=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"0e35f46e",null);e["default"]=i.exports},"7faf":function(t,e,n){"use strict";var a=n("b8ff"),r=n.n(a);r.a},"8e91":function(t,e,n){},"97f5":function(t,e,n){"use strict";var a=n("51dd"),r=n.n(a);r.a},b8ff:function(t,e,n){},d385:function(t,e,n){"use strict";var a=n("4de6"),r=n.n(a);e["default"]=r.a},f2ad:function(t,e,n){"use strict";var a=n("8e91"),r=n.n(a);r.a}});
//# sourceMappingURL=app.0907e67f.js.map