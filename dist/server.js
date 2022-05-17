(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("react");var t=e.n(r);const n=require("react-dom/server");var l=e.n(n);const s=require("express");var a=e.n(s);const u=require("react-router-dom/server"),c=require("react-router-dom"),o=()=>t().createElement("ul",null,t().createElement("li",null,t().createElement(c.Link,{to:"/red"},"Red")),t().createElement("li",null,t().createElement(c.Link,{to:"/blue"},"Blue")),t().createElement("li",null,t().createElement(c.Link,{to:"/users"},"Users"))),i=()=>t().createElement("div",{className:"Red"},"Red"),m=()=>t().createElement(i,null),d=()=>t().createElement("div",{className:"Blue"},"Blue"),E=()=>t().createElement(d,null),p=({users:e})=>e?t().createElement("div",null,t().createElement("ul",null,e.map((e=>t().createElement("li",{key:e.id},t().createElement(c.Link,{to:`/users/${e.id}`},e.username)))))):null,h=require("react-redux"),v=require("axios");var g=e.n(v);require("redux-saga/effects");const y="users/GET_USERS_PENDING",f="users/GET_USERS_SUCCESS",S="users/GET_USERS_FAILURE",R="users/GET_USER",_=e=>({type:R,payload:e}),U={users:null,loading:{users:!1,user:!1},error:{users:null,user:null}},b=(0,r.createContext)(null),k=b,q=({resolve:e})=>{const t=(0,r.useContext)(b);return t?(t.done||t.promise.push(Promise.resolve(e())),null):null},x=(0,h.connect)((e=>({users:e.users.users})),{getUsers:()=>async e=>{try{e({type:y});const r=await g().get("https://jsonplaceholder.typicode.com/users");e({type:f,payload:r})}catch(r){throw e({tyhpe:S,error:!0,payload:r}),r}}})((({users:e,getUsers:n})=>((0,r.useEffect)((()=>{e||n()}),[n,e]),console.log("getUsers",e),t().createElement(t().Fragment,null,t().createElement(p,{users:e}),";",t().createElement(q,{resolve:n}))))),T=({user:e})=>{const{email:r,name:n,username:l}=e;return t().createElement("div",null,t().createElement("h1",null,l," (",n,")"),t().createElement("p",null,t().createElement("p",null,"e-mail:")," ",r))},$=({id:e})=>{const n=(0,h.useSelector)((e=>e.users.user)),l=(0,h.useDispatch)();return(0,r.useEffect)((()=>{n&&n.id===parseInt(e,10)||l(_(e))}),[l,e,n]),n?t().createElement(T,{user:n}):t().createElement(q,{resolve:()=>l(_(e))})},j=()=>t().createElement(t().Fragment,null,t().createElement(x,null),t().createElement(c.Route,{path:"/users/:id",render:({match:e})=>t().createElement($,{id:e.params.id})})),w=function(){return t().createElement("div",null,t().createElement(o,null),t().createElement("hr",null),t().createElement(c.Routes,null,t().createElement(c.Route,{path:"/red",element:t().createElement(m,null)}),t().createElement(c.Route,{path:"/blue",element:t().createElement(E,null)}),t().createElement(c.Route,{path:"/users",element:t().createElement(j,null)})))},P=require("path");var O=e.n(P);const C=require("fs");var G=e.n(C);const L=require("redux"),N=require("redux-thunk");var A=e.n(N);const D=(0,L.combineReducers)({users:function(e=U,r){switch(r.type){case y:return{...e,loading:{...e.loading,users:!0},error:{...e.error,users:null}};case f:return{...e,loading:{...e.loading,users:!1},users:r.payload.data};case S:return{...e,loading:{...e.loading,users:!1},error:{...e.error,users:r.payload}};case R:return{...e,loading:{...e.loading,user:!0},error:{...e.error,user:null}};case"users/GET_USER_SUCCESS":return{...e,loading:{...e.loading,user:!1},users:r.payload};case"users/GET_USER_FAILURE":return{...e,loading:{...e.loading,user:!1},error:{...e.error,user:r.payload}};default:return e}}}),F=JSON.parse(G().readFileSync(O().resolve("./build/asset-manifest.json"),"utf8")),I=Object.keys(F.files).filter((e=>/chunk\.js$/.exec(e))).map((e=>`<script src="${F.files[e]}"><\/script>`)).join(""),B=a()(),J=a().static(O().resolve("./build"),{index:!1});B.use(J),B.use((async(e,r,n)=>{const s=(0,L.legacy_createStore)(D,(0,L.applyMiddleware)(A())),a={done:!1,promises:[]},c=t().createElement(k.Provider,{value:a},t().createElement(h.Provider,{store:s},t().createElement(u.StaticRouter,{location:e.url,context:{}},t().createElement(w,null))));l().renderToStaticMarkup(c);try{await Promise.all(a.promises)}catch(e){return r.status(500)}a.done=!0;const o=l().renderToString(c),i=`<script>__PRELOADED_STATE__ = ${JSON.stringify(s.getState()).replace(/</g,"\\u003c")}<\/script>`;r.send(function(e,r){return`<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="${F.files["main.css"]}" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ${e}\n      </div>\n      ${r}\n      <script src="${F.files["runtime-main.js"]}"><\/script>\n      ${I}\n      <script src="${F.files["main.js"]}"><\/script>\n    </body>\n    </html>\n      `}(o,i))})),B.listen(5e3,(()=>{console.log("Running on http://localhost:5000")}))})();