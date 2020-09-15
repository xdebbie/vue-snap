var VueSnap=function(t){"use strict";const e=t=>.5*(1-Math.cos(Math.PI*t)),n=()=>(performance&&performance.now?performance:Date).now(),r=t=>{const o=(n()-t.timeStamp)/(t.duration||500);if(o>1)return t.method(t.targetX,t.targetY),void t.callback();const i=(t.timingFunc||e)(o),c=t.startX+(t.targetX-t.startX)*i,u=t.startY+(t.targetY-t.startY)*i;t.method(c,u),t.rafId=requestAnimationFrame(()=>{r(t)})};let o;const i=()=>(void 0===o&&(o=Element.prototype.scroll||Element.prototype.scrollTo||function(t,e){this.scrollLeft=t,this.scrollTop=e}),o),c=(t,e)=>{const o=(e.left||0)+t.scrollLeft,c=(e.top||0)+t.scrollTop;return((t,e)=>{const o=i().bind(t);if(void 0===e.left&&void 0===e.top)return;const c=t.scrollLeft,u=t.scrollTop,{left:s=c,top:a=u}=e;if("smooth"!==e.behavior)return o(s,a);const f=()=>{window.removeEventListener("wheel",d),window.removeEventListener("touchmove",d)},l={timeStamp:n(),duration:e.duration,startX:c,startY:u,targetX:s,targetY:a,rafId:0,method:o,timingFunc:e.timingFunc,callback:f},d=()=>{cancelAnimationFrame(l.rafId),f()};window.addEventListener("wheel",d,{passive:!0,once:!0}),window.addEventListener("touchmove",d,{passive:!0,once:!0}),r(l)})(t,{...e,left:o,top:c})},u=t=>{Element.prototype.scrollBy=function(){const[e=0,n=0]=arguments;if("number"==typeof e&&"number"==typeof n)return c(this,{left:e,top:n});if(Object(e)!==e)throw new TypeError("Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.");return c(this,{...e,...t})}};var s=function(t,e,n){return Math.abs(t-e)<=n},a="undefined"==typeof window,f=!a;a||"scrollBehavior"in document.documentElement.style||u();var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var p=function(t){return t&&t.Math==Math&&t},h=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof l&&l)||Function("return this")(),v=function(t){try{return!!t()}catch(t){return!0}},y=!v((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),m={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,g={f:b&&!m.call({1:2},1)?function(t){var e=b(this,t);return!!e&&e.enumerable}:m},w=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},S={}.toString,O=function(t){return S.call(t).slice(8,-1)},_="".split,j=v((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==O(t)?_.call(t,""):Object(t)}:Object,E=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},W=function(t){return j(E(t))},P=function(t){return"object"==typeof t?null!==t:"function"==typeof t},x=function(t,e){if(!P(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!P(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!P(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!P(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,A=function(t,e){return T.call(t,e)},L=h.document,C=P(L)&&P(L.createElement),I=function(t){return C?L.createElement(t):{}},F=!y&&!v((function(){return 7!=Object.defineProperty(I("div"),"a",{get:function(){return 7}}).a})),$=Object.getOwnPropertyDescriptor,R={f:y?$:function(t,e){if(t=W(t),e=x(e,!0),F)try{return $(t,e)}catch(t){}if(A(t,e))return w(!g.f.call(t,e),t[e])}},M=function(t){if(!P(t))throw TypeError(String(t)+" is not an object");return t},N=Object.defineProperty,B={f:y?N:function(t,e,n){if(M(t),e=x(e,!0),M(n),F)try{return N(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},k=y?function(t,e,n){return B.f(t,e,w(1,n))}:function(t,e,n){return t[e]=n,t},z=function(t,e){try{k(h,t,e)}catch(n){h[t]=e}return e},X="__core-js_shared__",D=h[X]||z(X,{}),V=Function.toString;"function"!=typeof D.inspectSource&&(D.inspectSource=function(t){return V.call(t)});var Y,q,U,G=D.inspectSource,K=h.WeakMap,H="function"==typeof K&&/native code/.test(G(K)),J=d((function(t){(t.exports=function(t,e){return D[t]||(D[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),Q=0,Z=Math.random(),tt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++Q+Z).toString(36)},et=J("keys"),nt=function(t){return et[t]||(et[t]=tt(t))},rt={},ot=h.WeakMap;if(H){var it=new ot,ct=it.get,ut=it.has,st=it.set;Y=function(t,e){return st.call(it,t,e),e},q=function(t){return ct.call(it,t)||{}},U=function(t){return ut.call(it,t)}}else{var at=nt("state");rt[at]=!0,Y=function(t,e){return k(t,at,e),e},q=function(t){return A(t,at)?t[at]:{}},U=function(t){return A(t,at)}}var ft,lt={set:Y,get:q,has:U,enforce:function(t){return U(t)?q(t):Y(t,{})},getterFor:function(t){return function(e){var n;if(!P(e)||(n=q(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},dt=d((function(t){var e=lt.get,n=lt.enforce,r=String(String).split("String");(t.exports=function(t,e,o,i){var c=!!i&&!!i.unsafe,u=!!i&&!!i.enumerable,s=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||A(o,"name")||k(o,"name",e),n(o).source=r.join("string"==typeof e?e:"")),t!==h?(c?!s&&t[e]&&(u=!0):delete t[e],u?t[e]=o:k(t,e,o)):u?t[e]=o:z(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||G(this)}))})),pt=h,ht=function(t){return"function"==typeof t?t:void 0},vt=function(t,e){return arguments.length<2?ht(pt[t])||ht(h[t]):pt[t]&&pt[t][e]||h[t]&&h[t][e]},yt=Math.ceil,mt=Math.floor,bt=function(t){return isNaN(t=+t)?0:(t>0?mt:yt)(t)},gt=Math.min,wt=function(t){return t>0?gt(bt(t),9007199254740991):0},St=Math.max,Ot=Math.min,_t=function(t){return function(e,n,r){var o,i=W(e),c=wt(i.length),u=function(t,e){var n=bt(t);return n<0?St(n+e,0):Ot(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},jt={includes:_t(!0),indexOf:_t(!1)}.indexOf,Et=function(t,e){var n,r=W(t),o=0,i=[];for(n in r)!A(rt,n)&&A(r,n)&&i.push(n);for(;e.length>o;)A(r,n=e[o++])&&(~jt(i,n)||i.push(n));return i},Wt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Pt=Wt.concat("length","prototype"),xt={f:Object.getOwnPropertyNames||function(t){return Et(t,Pt)}},Tt={f:Object.getOwnPropertySymbols},At=vt("Reflect","ownKeys")||function(t){var e=xt.f(M(t)),n=Tt.f;return n?e.concat(n(t)):e},Lt=function(t,e){for(var n=At(e),r=B.f,o=R.f,i=0;i<n.length;i++){var c=n[i];A(t,c)||r(t,c,o(e,c))}},Ct=/#|\.prototype\./,It=function(t,e){var n=$t[Ft(t)];return n==Mt||n!=Rt&&("function"==typeof e?v(e):!!e)},Ft=It.normalize=function(t){return String(t).replace(Ct,".").toLowerCase()},$t=It.data={},Rt=It.NATIVE="N",Mt=It.POLYFILL="P",Nt=It,Bt=R.f,kt=function(t,e){var n,r,o,i,c,u=t.target,s=t.global,a=t.stat;if(n=s?h:a?h[u]||z(u,{}):(h[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(c=Bt(n,r))&&c.value:n[r],!Nt(s?r:u+(a?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Lt(i,o)}(t.sham||o&&o.sham)&&k(i,"sham",!0),dt(n,r,i,t)}},zt=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Xt=Array.isArray||function(t){return"Array"==O(t)},Dt=!!Object.getOwnPropertySymbols&&!v((function(){return!String(Symbol())})),Vt=Dt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Yt=J("wks"),qt=h.Symbol,Ut=Vt?qt:qt&&qt.withoutSetter||tt,Gt=function(t){return A(Yt,t)||(Dt&&A(qt,t)?Yt[t]=qt[t]:Yt[t]=Ut("Symbol."+t)),Yt[t]},Kt=Gt("species"),Ht=function(t,e){var n;return Xt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Xt(n.prototype)?P(n)&&null===(n=n[Kt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Jt=[].push,Qt=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(u,s,a,f){for(var l,d,p=Object(E(u)),h=j(p),v=zt(s,a,3),y=wt(h.length),m=0,b=f||Ht,g=e?b(u,y):n?b(u,0):void 0;y>m;m++)if((c||m in h)&&(d=v(l=h[m],m,p),t))if(e)g[m]=d;else if(d)switch(t){case 3:return!0;case 5:return l;case 6:return m;case 2:Jt.call(g,l)}else if(o)return!1;return i?-1:r||o?o:g}},Zt={forEach:Qt(0),map:Qt(1),filter:Qt(2),some:Qt(3),every:Qt(4),find:Qt(5),findIndex:Qt(6)},te=Object.keys||function(t){return Et(t,Wt)},ee=y?Object.defineProperties:function(t,e){M(t);for(var n,r=te(e),o=r.length,i=0;o>i;)B.f(t,n=r[i++],e[n]);return t},ne=vt("document","documentElement"),re=nt("IE_PROTO"),oe=function(){},ie=function(t){return"<script>"+t+"</"+"script>"},ce=function(){try{ft=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;ce=ft?function(t){t.write(ie("")),t.close();var e=t.parentWindow.Object;return t=null,e}(ft):((e=I("iframe")).style.display="none",ne.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(ie("document.F=Object")),t.close(),t.F);for(var n=Wt.length;n--;)delete ce.prototype[Wt[n]];return ce()};rt[re]=!0;var ue=Object.create||function(t,e){var n;return null!==t?(oe.prototype=M(t),n=new oe,oe.prototype=null,n[re]=t):n=ce(),void 0===e?n:ee(n,e)},se=Gt("unscopables"),ae=Array.prototype;null==ae[se]&&B.f(ae,se,{configurable:!0,value:ue(null)});var fe,le=Object.defineProperty,de={},pe=function(t){throw t},he=function(t,e){if(A(de,t))return de[t];e||(e={});var n=[][t],r=!!A(e,"ACCESSORS")&&e.ACCESSORS,o=A(e,0)?e[0]:pe,i=A(e,1)?e[1]:void 0;return de[t]=!!n&&!v((function(){if(r&&!y)return!0;var t={length:-1};r?le(t,1,{enumerable:!0,get:pe}):t[1]=1,n.call(t,o,i)}))},ve=Zt.findIndex,ye="findIndex",me=!0,be=he(ye);ye in[]&&Array(1).findIndex((function(){me=!1})),kt({target:"Array",proto:!0,forced:me||!be},{findIndex:function(t){return ve(this,t,arguments.length>1?arguments[1]:void 0)}}),fe=ye,ae[se][fe]=!0;var ge,we,Se=vt("navigator","userAgent")||"",Oe=h.process,_e=Oe&&Oe.versions,je=_e&&_e.v8;je?we=(ge=je.split("."))[0]+ge[1]:Se&&(!(ge=Se.match(/Edge\/(\d+)/))||ge[1]>=74)&&(ge=Se.match(/Chrome\/(\d+)/))&&(we=ge[1]);var Ee,We=we&&+we,Pe=Gt("species"),xe=Zt.map,Te=(Ee="map",We>=51||!v((function(){var t=[];return(t.constructor={})[Pe]=function(){return{foo:1}},1!==t[Ee](Boolean).foo}))),Ae=he("map");function Le(t){return function(t){if(Array.isArray(t))return Ce(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Ce(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}kt({target:"Array",proto:!0,forced:!Te||!Ae},{map:function(t){return xe(this,t,arguments.length>1?arguments[1]:void 0)}});var Ie=/^\s+|\s+$/g,Fe=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Re=/^0o[0-7]+$/i,Me=parseInt,Ne="object"==typeof l&&l&&l.Object===Object&&l,Be="object"==typeof self&&self&&self.Object===Object&&self,ke=Ne||Be||Function("return this")(),ze=Object.prototype.toString,Xe=Math.max,De=Math.min,Ve=function(){return ke.Date.now()};function Ye(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qe(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==ze.call(t)}(t))return NaN;if(Ye(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ye(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ie,"");var n=$e.test(t);return n||Re.test(t)?Me(t.slice(2),n?2:8):Fe.test(t)?NaN:+t}var Ue=function(t,e,n){var r,o,i,c,u,s,a=0,f=!1,l=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,i=o;return r=o=void 0,a=e,c=t.apply(i,n)}function h(t){return a=t,u=setTimeout(y,e),f?p(t):c}function v(t){var n=t-s;return void 0===s||n>=e||n<0||l&&t-a>=i}function y(){var t=Ve();if(v(t))return m(t);u=setTimeout(y,function(t){var n=e-(t-s);return l?De(n,i-(t-a)):n}(t))}function m(t){return u=void 0,d&&r?p(t):(r=o=void 0,c)}function b(){var t=Ve(),n=v(t);if(r=arguments,o=this,s=t,n){if(void 0===u)return h(s);if(l)return u=setTimeout(y,e),p(s)}return void 0===u&&(u=setTimeout(y,e)),c}return e=qe(e)||0,Ye(n)&&(f=!!n.leading,i=(l="maxWait"in n)?Xe(qe(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==u&&clearTimeout(u),a=0,r=s=o=u=void 0},b.flush=function(){return void 0===u?c:m(Ve())},b};function Ge(t,e,n,r,o,i,c,u,s,a){"boolean"!=typeof c&&(s=u,u=c,c=!1);const f="function"==typeof n?n.options:n;let l;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,s(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=l):e&&(l=c?function(t){e.call(this,a(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),l)if(f.functional){const t=f.render;f.render=function(e,n){return l.call(n),t(e,n)}}else{const t=f.beforeCreate;f.beforeCreate=t?[].concat(t,l):[l]}return n}const Ke={props:{hideArrows:{type:Boolean,default:!1},hideArrowsOnBound:{type:Boolean,default:!1}},data:function(){return{boundLeft:!0,boundRight:!1,slidesWidth:[],wrapperScrollWidth:0,wrapperVisibleWidth:0,currentPage:0,currentPos:0,maxPages:0,step:1,observer:null,onResizeFn:null,onScrollFn:null}},mounted:function(){this.calcOnInit(),f&&(this.onResizeFn=Ue(this.calcOnInit,410),this.onScrollFn=Ue(this.calcOnScroll,100),this.attachMutationObserver(),this.$refs.vsWrapper.addEventListener("scroll",this.onScrollFn),window.addEventListener("resize",this.onResizeFn,!1))},beforeDestroy:function(){f&&(this.observer.disconnect(),this.$refs.vsWrapper.removeEventListener("scroll",this.onScrollFn),window.removeEventListener("resize",this.onResizeFn,!1))},methods:{calcOnInit:function(){this.$refs.vsWrapper&&(this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcCurrentPosition(),this.calcBounds(),this.calcMaxPages())},calcOnScroll:function(){this.$refs.vsWrapper&&(this.calcCurrentPosition(),this.calcBounds())},calcBounds:function(){this.boundLeft=s(this.currentPos,0,5),this.boundRight=s(this.wrapperScrollWidth-this.wrapperVisibleWidth,this.currentPos,5)},calcWrapperWidth:function(){this.wrapperScrollWidth=this.$refs.vsWrapper.scrollWidth,this.wrapperVisibleWidth=this.$refs.vsWrapper.offsetWidth},calcSlidesWidth:function(){var t=Le(this.$refs.vsWrapper.childNodes);this.slidesWidth=t.map((function(t){return{offsetLeft:t.offsetLeft,width:t.offsetWidth}}))},calcCurrentPosition:function(){var t=this;this.currentPos=this.$refs.vsWrapper.scrollLeft||0,this.currentPage=this.slidesWidth.findIndex((function(e){return s(e.offsetLeft,t.currentPos,5)})),-1===this.currentPage&&(this.currentPage=this.maxPages)},calcMaxPages:function(){var t=this.wrapperScrollWidth-this.wrapperVisibleWidth;this.maxPages=this.slidesWidth.findIndex((function(e){return e.offsetLeft>t}))-1},calcNextWidth:function(t){var e=t>0?this.currentPage:this.currentPage+t,n=this.slidesWidth[e].width||0;if(n)return n*t},attachMutationObserver:function(){var t=this;this.observer=new MutationObserver((function(){t.calcOnInit()})),this.observer.observe(this.$refs.vsWrapper,{attributes:!0,childList:!0,characterData:!0,subtree:!0})},changeSlide:function(t){var e=-1===t&&this.boundLeft,n=1===t&&this.boundRight;if(!e&&!n){var r=this.calcNextWidth(t);r&&this.scrollTo(r)}},scrollTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.vsWrapper.scrollBy({left:t,behavior:"smooth"}),this.$emit("slide",!0)}}};var He=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vs-carousel"},[n("div",{ref:"vsWrapper",staticClass:"vs-carousel__wrapper"},[t._t("default")],2),t._v(" "),t.hideArrows?t._e():t._t("arrows",[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.hideArrowsOnBound||!t.boundLeft,expression:"hideArrowsOnBound ? !boundLeft : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--left\n      ",attrs:{type:"button","aria-label":"Slide left",disabled:t.boundLeft},on:{click:function(e){return t.changeSlide(-1)}}},[t._v("\n      ←\n    ")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.hideArrowsOnBound||!t.boundRight,expression:"hideArrowsOnBound ? !boundRight : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--right\n      ",attrs:{type:"button","aria-label":"Slide right",disabled:t.boundRight},on:{click:function(e){return t.changeSlide(1)}}},[t._v("\n      →\n    ")])])],2)};He._withStripped=!0;const Je=Ge({render:He,staticRenderFns:[]},undefined,Ke,undefined,false,undefined,!1,void 0,void 0,void 0);var Qe=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"vsSlide",staticClass:"vs-carousel__slide",attrs:{tabindex:"0"}},[t._t("default")],2)};Qe._withStripped=!0;const Ze=Ge({render:Qe,staticRenderFns:[]},undefined,{},undefined,false,undefined,!1,void 0,void 0,void 0);var tn={install:function(t){t.component("carousel",Je),t.component("slide",Ze)}};return t.Carousel=Je,t.Slide=Ze,t.default=tn,t}({});
