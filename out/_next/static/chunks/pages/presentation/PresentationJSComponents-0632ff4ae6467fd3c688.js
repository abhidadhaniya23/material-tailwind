_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),a=r("7KCV");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),l=r("elyg"),c=r("nOHt"),i=r("vNVm"),s={};function u(e,t,r,n){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",p=o.default.useMemo((function(){var t=(0,l.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,l.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),f=p.href,b=p.as,d=e.children,x=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof d&&(d=o.default.createElement("a",null,d));var j=o.Children.only(d),h=j&&"object"===typeof j&&j.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),w=n(O,2),v=w[0],P=w[1],N=o.default.useCallback((function(e){v(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,v]);(0,o.useEffect)((function(){var e=P&&t&&(0,l.isLocalURL)(f),n="undefined"!==typeof y?y:r&&r.locale,a=s[f+"%"+b+(n?"%"+n:"")];e&&!a&&u(r,f,b,{locale:n})}),[b,f,P,y,t,r]);var k={ref:N,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:c}))}(e,r,f,b,x,m,g,y)},onMouseEnter:function(e){(0,l.isLocalURL)(f)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(r,f,b,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var E="undefined"!==typeof y?y:r&&r.locale,C=r&&r.isLocaleDomain&&(0,l.getDomainLocale)(b,E,r&&r.locales,r&&r.domainLocales);k.href=C||(0,l.addBasePath)((0,l.addLocale)(b,E,r&&r.defaultLocale))}return o.default.cloneElement(j,k)};t.default=p},cpVT:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},dhJC:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},jMjC:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));var n=r("nKUr"),a=(r("q1tI"),r("YFqc")),o=r.n(a),l=r("lGOW"),c=r("xTYM"),i=r("xjXq");function s(){return Object(n.jsxs)("div",{className:"flex flex-wrap items-center pt-32",children:[Object(n.jsx)("div",{className:"w-full md:w-6/12 px-4 mr-auto ml-auto mt-32",children:Object(n.jsxs)("div",{className:"justify-center flex flex-wrap relative",children:[Object(n.jsx)("div",{className:"my-4 w-full lg:w-6/12 px-4"}),Object(n.jsx)("div",{className:"my-4 w-full lg:w-6/12 px-4 lg:mt-16"})]})}),Object(n.jsxs)("div",{className:"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48",children:[Object(n.jsx)("div",{className:"text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white",children:Object(n.jsx)(i.a,{family:"font-awesome",name:"fas fa-drafting-compass",size:"xl"})}),Object(n.jsx)(l.a,{color:"gray",children:"Javascript Components"}),Object(n.jsx)(c.a,{color:"blueGray",children:"In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users."}),Object(n.jsx)(c.a,{color:"blueGray",children:"We created a set of Components that are dynamic and come to help you."}),Object(n.jsxs)("div",{className:"block pb-6",children:[Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Alerts"}),Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Dropdowns"}),Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Menus"}),Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Modals"}),Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Navbars"}),Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Popovers"}),Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Tabs"}),Object(n.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2",children:"Tooltips"})]}),Object(n.jsx)(o.a,{href:"/documentation/react/alerts",children:Object(n.jsxs)("a",{className:"font-bold text-blue-gray-900 hover:text-blue-gray-800 transition-all flex items-center gap-2",children:["View All ",Object(n.jsx)(i.a,{family:"font-awesome",name:"fas fa-angle-right"})]})})]})]})}},lGOW:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("cpVT"),a=r("nKUr"),o=r("dhJC");r("q1tI");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i={white:"text-white",blueGray:"text-blue-gray-500",gray:"text-gray-900",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"};function s(e){var t=e.children,r=e.color,n=Object(o.a)(e,["children","color"]);return Object(a.jsx)("h1",c(c({},n),{},{className:"".concat(i[r]," text-3xl font-serif font-bold leading-normal mt-0 mb-2"),children:t}))}},vNVm:function(e,t,r){"use strict";var n=r("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,i=(0,a.useRef)(),s=(0,a.useState)(!1),u=n(s,2),p=u[0],f=u[1],b=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||p||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,l=n.elements;return l.set(e,t),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,p]);return(0,a.useEffect)((function(){if(!l&&!p){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[p]),[b,p]};var a=r("q1tI"),o=r("0G5g"),l="undefined"!==typeof IntersectionObserver;var c=new Map},xTYM:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("cpVT"),a=r("nKUr"),o=r("dhJC");r("q1tI");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i={white:"text-gray-200",blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-600",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"};function s(e){var t=e.children,r=e.color,n=Object(o.a)(e,["children","color"]);return Object(a.jsx)("p",c(c({},n),{},{className:"".concat(i[r]," text-lg font-light leading-relaxed mt-6 mb-4"),children:t}))}},xjXq:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("cpVT"),a=r("nKUr"),o=r("dhJC"),l=(r("q1tI"),r("17x9")),c=r.n(l);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={white:"text-white",blueGray:"text-blue-gray-500",gray:"text-gray-500",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"};function p(e){var t,r=e.family,n=void 0===r?"material-icons":r,l=e.name,c=e.color,i=e.size,p=Object(o.a)(e,["family","name","color","size"]);return"material-icons"===n?t=Object(a.jsx)("span",s(s({},p),{},{className:"".concat(n," ").concat(u[c]," ").concat(i?"text-".concat(i):"text-base"," leading-none"),children:l})):"font-awesome"===n&&(t=Object(a.jsx)("i",s(s({},p),{},{className:"".concat(l," ").concat(u[c]," text-").concat(i)}))),t}p.propTypes={family:c.a.string,name:c.a.string.isRequired,color:c.a.string,size:c.a.string}},xw2C:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/presentation/PresentationJSComponents",function(){return r("jMjC")}])}},[["xw2C",0,1,2]]]);