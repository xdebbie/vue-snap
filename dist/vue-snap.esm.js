import{polyfill as t}from"seamless-scroll-polyfill/dist/esm/Element.scrollBy";import"core-js/modules/es.array.find-index";import"core-js/modules/es.array.map";import e from"lodash.debounce";var r="undefined"==typeof document||"undefined"==typeof window,i=!r;function n(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}r||"scrollBehavior"in document.documentElement.style||t();function o(t,e,r,i,n,s,o,a,c,l){"boolean"!=typeof o&&(c=a,a=o,o=!1);const d="function"==typeof r?r.options:r;let h;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),i&&(d._scopeId=i),s?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=h):e&&(h=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),h)if(d.functional){const t=d.render;d.render=function(e,r){return h.call(r),t(e,r)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,h):[h]}return r}const a={props:{navigationArrows:{type:Boolean,default:!0}},data:function(){return{boundLeft:!0,boundRight:!1,slidesWidth:[],wrapperScrollWidth:0,wrapperVisibleWidth:0,currentPage:0,currentPos:0,maxPages:0,step:1}},mounted:function(){this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcMaxPages(),i&&(this.$refs.vsWrapper.addEventListener("scroll",e(this.eventScroll,100)),window.addEventListener("resize",e(this.eventResize,410),!1))},beforeDestroy:function(){i&&(this.$refs.vsWrapper.removeEventListener("scroll",e(this.eventScroll,100)),window.removeEventListener("resize",e(this.eventResize,410),!1))},methods:{calcBounds:function(){this.boundLeft=0===this.currentPos,this.boundRight=this.wrapperScrollWidth-this.wrapperVisibleWidth===this.currentPos},calcWrapperWidth:function(){this.wrapperScrollWidth=this.$refs.vsWrapper.scrollWidth,this.wrapperVisibleWidth=this.$refs.vsWrapper.offsetWidth},calcSlidesWidth:function(){var t=n(this.$refs.vsWrapper.childNodes);this.slidesWidth=t.map((function(t){return{offsetLeft:t.offsetLeft,width:t.offsetWidth}}))},calcCurrentPosition:function(){var t=this;this.currentPos=this.$refs.vsWrapper.scrollLeft,this.currentPage=this.slidesWidth.findIndex((function(e){var r,i,n,s=e.offsetLeft;return r=s,i=t.currentPos,n=1,Math.abs(r-i)<=n})),-1===this.currentPage&&(this.currentPage=this.maxPages)},calcMaxPages:function(){var t=this.wrapperScrollWidth-this.wrapperVisibleWidth;this.maxPages=this.slidesWidth.findIndex((function(e){return e.offsetLeft>t}))-1},calcNextWidth:function(t){var e=t>0?this.currentPage:this.currentPage+t;return this.slidesWidth[e].width*t},eventScroll:function(){this.calcCurrentPosition(),this.calcBounds()},eventResize:function(){this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcCurrentPosition(),this.calcBounds(),this.calcMaxPages()},changeSlide:function(t){var e=-1===t&&this.boundLeft,r=1===t&&this.boundRight;if(!e&&!r){var i=this.calcNextWidth(t);this.scroll(i)}},scroll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.vsWrapper.scrollBy({left:t,behavior:"smooth"})}}};var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vs-carousel"},[r("div",{ref:"vsWrapper",staticClass:"vs-carousel__wrapper"},[t._t("default")],2),t._v(" "),t.navigationArrows?t._t("navigation",[r("button",{directives:[{name:"show",rawName:"v-show",value:!t.boundLeft,expression:"!boundLeft"}],staticClass:"\n        vs-carousel__navigation\n        vs-carousel__navigation--left\n      ",attrs:{"aria-label":"Slide left"},on:{click:function(e){return t.changeSlide(-1)}}},[t._v("\n      ←\n    ")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.boundRight,expression:"!boundRight"}],staticClass:"\n        vs-carousel__navigation\n        vs-carousel__navigation--right\n      ",attrs:{"aria-label":"Slide right"},on:{click:function(e){return t.changeSlide(1)}}},[t._v("\n      →\n    ")])]):t._e()],2)};c._withStripped=!0;const l=o({render:c,staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);var d=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"vsSlide",staticClass:"vs-carousel__slide",attrs:{tabindex:"0"}},[this._t("default")],2)};d._withStripped=!0;const h=o({render:d,staticRenderFns:[]},void 0,{},void 0,!1,void 0,!1,void 0,void 0,void 0);var u={install:function(t){t.component("carousel",l),t.component("slide",h)}};export default u;export{l as Carousel,h as Slide};