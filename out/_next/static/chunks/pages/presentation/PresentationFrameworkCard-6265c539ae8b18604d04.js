_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"+XlD":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r("nKUr"),o=(r("q1tI"),r("YFqc")),c=r.n(o),a=r("sVIM");function i(e){var t=e.color,r=e.href,o=e.img,i=e.title;return Object(n.jsx)(c.a,{href:r,as:"/material-tailwind"+r,children:Object(n.jsx)("a",{children:Object(n.jsxs)("div",{className:"bg-".concat(t," shadow-xl rounded-xl text-center p-8 mt-8"),children:[Object(n.jsx)("img",{alt:"...",className:"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",src:o}),Object(n.jsx)("div",{className:"text-white mt-4",children:Object(n.jsx)(a.a,{children:i})})]})})})}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),o=r("7KCV");t.__esModule=!0,t.default=void 0;var c=o(r("q1tI")),a=r("elyg"),i=r("nOHt"),l=r("vNVm"),u={};function s(e,t,r,n){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),o=r&&r.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),r=n(t,2),c=r[0],i=r[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,v=e.replace,g=e.shallow,h=e.scroll,y=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var m=c.Children.only(b),O=m&&"object"===typeof m&&m.ref,x=(0,l.useIntersection)({rootMargin:"200px"}),w=n(x,2),j=w[0],E=w[1],P=c.default.useCallback((function(e){j(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,j]);(0,c.useEffect)((function(){var e=E&&t&&(0,a.isLocalURL)(d),n="undefined"!==typeof y?y:r&&r.locale,o=u[d+"%"+p+(n?"%"+n:"")];e&&!o&&s(r,d,p,{locale:n})}),[p,d,E,y,t,r]);var _={ref:P,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:c,locale:l,scroll:i}))}(e,r,d,p,v,g,h,y)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),s(r,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var k="undefined"!==typeof y?y:r&&r.locale,I=r&&r.isLocaleDomain&&(0,a.getDomainLocale)(p,k,r&&r.locales,r&&r.domainLocales);_.href=I||(0,a.addBasePath)((0,a.addLocale)(p,k,r&&r.defaultLocale))}return c.default.cloneElement(m,_)};t.default=f},cpVT:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},dhJC:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},mgWG:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/presentation/PresentationFrameworkCard",function(){return r("+XlD")}])},sVIM:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("cpVT"),o=r("nKUr"),c=r("dhJC");r("q1tI");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={white:"text-white",blueGray:"text-blue-gray-500",gray:"text-gray-900",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"};function u(e){var t=e.children,r=e.color,n=Object(c.a)(e,["children","color"]);return Object(o.jsx)("h1",i(i({},n),{},{className:"".concat(l[r]," text-2xl font-serif font-bold leading-normal mt-0 mb-2"),children:t}))}},vNVm:function(e,t,r){"use strict";var n=r("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,l=(0,o.useRef)(),u=(0,o.useState)(!1),s=n(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,a=n.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r("q1tI"),c=r("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["mgWG",0,1,2]]]);