(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e624d9e7"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/manifge/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0043":function(t,e,n){},"07da":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head"}},[n("vue-typed-js",{attrs:{strings:["manifest.json Generator"],loop:!1,id:"type"}},[n("h1",{staticClass:"typing"})])],1)},r=[]},"45c8":function(t,e,n){"use strict";var a=n("ba96"),r=n.n(a);r.a},"4de6":function(t,e){},"51dd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("warn"),n("headtop"),n("ul",{attrs:{id:"tabMenu"}},[n("li",{on:{click:function(e){return t.change(1)}}},[t._v("PWA マニフェスト")])]),1===t.active?n("pwamani"):t._e(),2===t.active?n("extension"):t._e()],1),n("router-view")],1)},i=[],o=n("71c2"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"range"}},[n("div",[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),n("div",{staticClass:"wd"},[n("a",{attrs:{id:"btn"},on:{click:t.make}},[t._v("json作成")])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"name"}},[t._v("name")]),n("div",{attrs:{id:"text1"}},[n("input",{staticClass:"common",attrs:{type:"text",id:"name",placeholder:"name"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"short"}},[t._v("short_name")]),n("div",{attrs:{id:"text2"}},[n("input",{staticClass:"common",attrs:{type:"text",id:"short",placeholder:"short_name"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"display"}},[t._v("display")]),n("div",[n("select",{staticClass:"common",attrs:{id:"display"}},[n("option",{attrs:{value:"fullscreen"}},[t._v("fullscreen")]),n("option",{attrs:{value:"standalone"}},[t._v("standalone")]),n("option",{attrs:{value:"minimal-ui"}},[t._v("minimal-ui")]),n("option",{attrs:{value:"browser"}},[t._v("browser")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"color"}},[t._v("background_color")]),n("div",[n("input",{staticClass:"common",attrs:{type:"color",id:"color",placeholder:"background_color"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"theme"}},[t._v("theme_color")]),n("div",[n("input",{staticClass:"common",attrs:{type:"color",id:"theme",placeholder:"theme_color"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"start"}},[t._v("start_url")]),n("div",[n("input",{staticClass:"common",attrs:{type:"text",id:"starturl",placeholder:"start_url"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wd"},[n("label",{staticClass:"sizelab",attrs:{for:"icon"}},[t._v("icon")]),n("div",[n("input",{staticClass:"common",attrs:{type:"file",id:"icon",placeholder:"icon",multiple:""}})])])}],l=n("ba63"),u=l["a"],d=(n("45c8"),n("2877")),f=Object(d["a"])(u,s,c,!1,null,"736f4ec5",null),m=f.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("拡張機能")])])}],g={},_=Object(d["a"])(g,p,v,!1,null,null,null),b=_.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"warn"}},[n("p",[t._v("このアプリで作成した画像がデベロッパーツールのapplicationのmanifestでエラーが発生するかもしれません。"),n("span",{attrs:{id:"del"},on:{click:t.del}},[t._v("x")])])])])},y=[],w={methods:{del:function(){var t=this.$el;t.style.display="none"}}},x=w,C=(n("cefe"),Object(d["a"])(x,h,y,!1,null,"651b0170",null)),j=C.exports,E={components:{headtop:o["default"],pwamani:m,extension:b,warn:j},data:function(){return{active:1}},methods:{change:function(t){this.active=t}}},O=E,z=(n("7faf"),Object(d["a"])(O,r,i,!1,null,null,null)),$=z.exports,k=(n("d3b7"),n("8c4f")),B=n("8cb8");a["a"].use(k["a"]),a["a"].use(B["default"]);var P=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new k["a"]({mode:"history",base:"/manifge/",routes:P}),S=I,A=n("2f62");a["a"].use(A["a"]);var M=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:S,store:M,render:function(t){return t($)}}).$mount("#app")},"71c2":function(t,e,n){"use strict";var a=n("07da"),r=n("d385"),i=(n("97f5"),n("2877")),o=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"0e35f46e",null);e["default"]=o.exports},"7faf":function(t,e,n){"use strict";var a=n("b8ff"),r=n.n(a);r.a},"97f5":function(t,e,n){"use strict";var a=n("51dd"),r=n.n(a);r.a},b8ff:function(t,e,n){},ba63:function(t,e,n){"use strict";(function(t){n("99af"),n("c975"),n("a15b"),n("ac1f"),n("1276");var a=n("c4e3"),r=n.n(a),i=n("21a6"),o=n.n(i),s=n("7e37");e["a"]={data:function(){return{img:"",data:""}},methods:{make:function(){var e=this,n=document.getElementById("name"),a=document.getElementById("short"),i=document.getElementById("display"),c=document.getElementById("color"),l=document.getElementById("theme"),u=document.getElementById("starturl"),d=document.getElementById("icon").files[0],f=new r.a,m=new FileReader;m.onload=function(r){e.img=r.target.result,-1!==e.img.indexOf("data:image/png;base64,")?e.data=e.img.split("data:image/png;base64,").join(""):-1!==e.img.indexOf("data:image/jpeg;base64,")&&(e.data=e.img.split("data:image/jpeg;base64,").join(""));var d=t.from(e.data,"base64");s.read(d).then((function(t){t.resize(72,72).getBuffer("image/png",(function(t,e){f.folder("imges").folder("icons").file("icon_72x72.png",e)})),t.resize(144,144).getBuffer("image/png",(function(t,e){f.folder("imges").folder("icons").file("icon_144x144.png",e)})),t.resize(192,192).getBuffer("image/png",(function(t,e){f.folder("imges").folder("icons").file("icon_192x192.png",e)})),t.resize(512,512).getBuffer("image/png",(function(t,e){f.folder("imges").folder("icons").file("icon_512x512.png",e)})),f.file("manifest.json",'{\n    "name": "'.concat(n.value,'",\n    "short_name": "').concat(a.value,'",\n    "display": "').concat(i.value,'",\n    "start_url": "').concat(u.value,'",\n    "background_color": "').concat(c.value,'",\n    "theme_color":"').concat(l.value,'",\n    "icons":[\n        \n        {\n            "src": "./imges/icons/icon_72x72.png",\n            "size": "72x72",\n            "type": "image/png"\n        },\n        {\n            "src": "./imges/icons/icon_144x144.png",\n            "size": "144x144",\n            "type": "image/png"\n        },\n        {\n            "src": "./imges/icons/icon_192x192.png",\n            "size":"192x192",\n            "type":"image/png"\n        },\n        {\n            "src": "./imges/icons/icon_512x512.png",\n            "size":"512x512",\n            "type":"image/png"\n        }\n    ]\n}\n')),f.generateAsync({type:"blob"}).then((function(t){o()(t,"manifest-pwa")}))}))},m.readAsDataURL(d)}}}}).call(this,n("b639").Buffer)},ba96:function(t,e,n){},cefe:function(t,e,n){"use strict";var a=n("0043"),r=n.n(a);r.a},d385:function(t,e,n){"use strict";var a=n("4de6"),r=n.n(a);e["default"]=r.a}});
//# sourceMappingURL=app.9486bf23.js.map