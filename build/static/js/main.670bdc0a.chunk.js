(this["webpackJsonphelp-me"]=this["webpackJsonphelp-me"]||[]).push([[0],{19:function(e,a,t){e.exports=t(29)},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(17),c=t.n(o),l=t(11),i=t(1),s=t(5),u=t(7),m=t(9);var d=function(){return r.a.createElement("div",null,r.a.createElement("button",null,"Menu"),r.a.createElement("hr",null),r.a.createElement("button",{style:{background:"red",color:"white"}},"Help"),r.a.createElement("br",null),"HELP ME!")},f=function(e){var a=Object(n.useState)({name:"",errorName:"Error Name",flagName:!1,password:"",errorPass:"Error Password",flagPass:!1,valid:!1}),t=Object(l.a)(a,2),o=t[0],c=t[1],i=function(e){var a,t,n=e.target,r=n.value,l=n.name;if("name"===l)r.length<4||r.match(/[0-9]/)?c(Object(u.a)(Object(u.a)({},o),{},(a={},Object(s.a)(a,l,r),Object(s.a)(a,"flagName",!0),a))):c(Object(u.a)(Object(u.a)({},o),{},(t={},Object(s.a)(t,l,r),Object(s.a)(t,"flagName",!1),t)));else if("password"===l){var i,m;if(r.length<8||!r.match(/[0-9]/))c(Object(u.a)(Object(u.a)({},o),{},(i={},Object(s.a)(i,l,r),Object(s.a)(i,"flagPass",!0),i)));else c(Object(u.a)(Object(u.a)({},o),{},(m={},Object(s.a)(m,l,r),Object(s.a)(m,"flagPass",!1),Object(s.a)(m,"valid",!o.flagName),m)))}};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){e.getParams(o.name,o.password)}.bind(void 0)},r.a.createElement("label",null,r.a.createElement("div",{style:{color:"red"}},o.flagName?o.errorName:null),r.a.createElement("input",{placeholder:"Name",name:"name",type:"text",onChange:i})),r.a.createElement("label",null,r.a.createElement("div",{style:{color:"red"}},o.flagPass?o.errorPass:null),r.a.createElement("input",{placeholder:"Password",name:"password",type:"text",onChange:i}))),r.a.createElement(m.b,{to:o.name},r.a.createElement("input",{onClick:function(a){e.getParams(o.name,o.password)},type:"submit",value:"Send"})),r.a.createElement("pre",null,JSON.stringify(o,null,2)))};var p=function(){var e=Object(n.useState)({name:"",password:""}),a=Object(l.a)(e,2),t=a[0],o=a[1],c=function(e,a){o({name:e,password:a})};return r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:function(){return r.a.createElement(f,{getParams:c})}}),r.a.createElement(i.a,{exact:!0,path:"".concat(t.name),component:d})))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(m.a,null,r.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/help-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/help-app","/service-worker.js");h?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(a,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.670bdc0a.chunk.js.map