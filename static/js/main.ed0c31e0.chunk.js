(this["webpackJsonpnavigation-bar-react"]=this["webpackJsonpnavigation-bar-react"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){var a={"./h8k-logo_2.entry.js":[23,2]};function o(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(a)},o.id=18,e.exports=o},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),c=(t(15),t(7)),l=(t(16),t(5)),s=t(6),u=t(9),v=t(8),d=(t(17),function(e){Object(u.a)(t,e);var n=Object(v.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.activeTab,t=e.tabHandler,a=e.tabs;return o.a.createElement("div",{className:"layout-column justify-content-center align-items-center"},o.a.createElement("div",{className:"layout-row justify-content-around align-items-center mt-20 links","data-testid":"navigation-tabs"},a.map((function(e){var a=e.label,r=e.value;return o.a.createElement("div",{className:"card w-20 ma-15"},o.a.createElement("section",{className:"card-text","data-testid":"tab-content"},o.a.createElement("span",{className:"tab ".concat(r===n?"selected-tab":""),onClick:function(){t(r)}},a)))}))))}}]),t}(a.Component)),f=(t(20),[{label:"Home",value:"HOME PAGE"},{label:"News",value:"NEWS PAGE"},{label:"Contact",value:"CONTACT PAGE"},{label:"About",value:"ABOUT PAGE"}]);var m=function(){var e=Object(a.useState)("HOME PAGE"),n=Object(c.a)(e,2),t=n[0],r=n[1];return o.a.createElement("div",null,o.a.createElement("h8k-navbar",{header:"Navigation Bar"}),o.a.createElement(d,{tabs:f,activeTab:t,tabHandler:r}),o.a.createElement("div",{className:"layout-column justify-content-center align-items-center"},o.a.createElement("div",{className:"card w-20 ma-20"}," ",o.a.createElement("section",{className:"card-text","data-testid":"tab-content"},o.a.createElement("span",null,t)))))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=t(2);i.a.render(o.a.createElement(m,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/navigationTab",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/navigationTab","/service-worker.js");b?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):g(e)}))}}(),Object(h.a)().then((function(){Object(h.b)(window)}))}],[[10,1,4]]]);
//# sourceMappingURL=main.ed0c31e0.chunk.js.map