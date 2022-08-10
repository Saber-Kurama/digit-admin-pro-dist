import{d as F,a as f,q as y,a_ as k,u as d,c as g,aQ as T,aS as v,b5 as I,c2 as q,aR as K,aT as _,b$ as z,c3 as V,c4 as N,w as j,p as H,v as Q,aU as S,c5 as G,c6 as J,x as D,z as X,y as Y,c7 as Z,c8 as ee,c9 as te,ca as oe}from"./arco.7d0c8cc8.js";import{u as B,e as $,f as ne}from"./vue.06db2906.js";import{o as se,u as A,p as ae,m as P,q as ue,_ as le}from"./index.c8112a61.js";import{c as re,d as ce}from"./index.7f6da9e6.js";import"./chart.b441c45c.js";const ie=F({__name:"index",setup(o){const e=B(),a=[{name:"\u6570\u5B57\u5316\u8425\u9500",type:"1",list:[{icon:"https://image.parligerly.com/protal-svg/mark.svg",logo:"https://image.parligerly.com/protal-svg/mark-logo.svg",title:"Marketing Automation",desc:"\u5168\u6E20\u9053\u81EA\u52A8\u5316\u8FD0\u8425\u4E2D\u67A2"},{icon:"https://image.parligerly.com/protal-svg/insi.svg",logo:"https://image.parligerly.com/protal-svg/insi-logo.svg",title:"Insight Force",desc:"\u7ECF\u8425\u5206\u6790\u5E73\u53F0"}]},{name:"\u6570\u5B57\u5316\u5EFA\u8BBE",type:"2",list:[{icon:"https://image.parligerly.com/protal-svg/metr.svg",logo:"https://image.parligerly.com/protal-svg/metr-logo.svg",title:"Metrics Force",desc:"\u6307\u6807\u5E73\u53F0"},{icon:"https://image.parligerly.com/protal-svg/cust.svg",logo:"https://image.parligerly.com/protal-svg/cust-logo.svg",title:"Customer Engine",desc:"\u7528\u6237\u6570\u636E\u5E73\u53F0"},{icon:"https://image.parligerly.com/protal-svg/data.svg",logo:"https://image.parligerly.com/protal-svg/data-logo.svg",title:"Data Engine",desc:"\u5927\u6570\u636E\u5F00\u53D1\u6CBB\u7406\u5957\u4EF6"}]},{name:"\u6570\u5B57\u5316\u4F9B\u5E94\u94FE",type:"3",list:[{icon:"https://image.parligerly.com/protal-svg/dema.svg",logo:"https://image.parligerly.com/protal-svg/dema-logo.svg",title:"Demand Forecasting",desc:"\u667A\u80FD\u9884\u6D4B"},{icon:"https://image.parligerly.com/protal-svg/repl.svg",logo:"https://image.parligerly.com/protal-svg/repl-logo.svg",title:"Replenishment",desc:"\u667A\u80FD\u8865\u8D27"},{icon:"https://image.parligerly.com/protal-svg/asso.svg",logo:"https://image.parligerly.com/protal-svg/asso-logo.svg",title:"Assortment",desc:"\u667A\u80FD\u9009\u54C1"}]}],n=[],r=[{label:"xxx\u6709\u9650\u516C\u53F8",value:"1",key:"1"},{label:"xxxxxx\u6709\u9650\u516C\u53F8",value:"2",key:"2"}],c=f("https://image.parligerly.com/protal-svg/logo-hom.svg"),t=f(a),u=f(n),C=f("2"),w=f(r),b=f("1"),s=i=>{console.log("item---",i),c.value=i.logo},M=i=>{console.log("key---",i);const l=n.find(p=>p.resourceCode===i);e.push({path:(l==null?void 0:l.resourceLink)||"/"})},m=i=>{console.log("value---",i)};return(i,l)=>(y(),k(d(re),{logo:c.value,logoMenus:t.value,onLogoMenuClick:s,menus:u.value,activeMenu:C.value,"onUpdate:activeMenu":l[0]||(l[0]=p=>C.value=p),onMenuItemClick:M,tenant:b.value,tenantOptions:w.value,onTenantChange:m},null,8,["logo","logoMenus","menus","activeMenu","tenant","tenantOptions"]))}}),pe=(o,e)=>{const{target:a="_blank",...n}=e||{};window.open(o,a,Object.entries(n).reduce((r,c)=>{const[t,u]=c;return[...r,`${t}=${u}`]},[]).join(","))},de=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");function ge(){const o=se();return{menuTree:g(()=>o.menus)}}var R=F({emit:["collapse"],setup(){const o=A(),e=B(),a=$(),n=f([]),{menuTree:r}=ge(),c=g({get(){return o.device==="desktop"?o.menuCollapse:!1},set(s){o.updateSettings({menuCollapse:s})}});T(()=>{console.log("menuTree.value",r.value),n.value=r.value});const t=f([]),u=f([]),C=s=>{if(de.test((s==null?void 0:s.resourcePath)||"")){pe(s.resourcePath),u.value=[s.resourceCode];return}if(a.name===s.resourceCode){u.value=[a.name];return}e.push({name:s.resourceCode})},w=s=>{const M=[];let m=!1;const i=(l,p,x)=>{var h;if(l.resourceCode===x){m=!0,M.push(...p,l.resourceCode);return}(h=l.childrens)!=null&&h.length&&l.childrens.forEach(L=>{m||i(L,[...p,L.resourceCode],x)})};return r.value.forEach(l=>{m||i(l,[l.resourceCode],s)}),M};ae(s=>{const{requiresAuth:M,activeMenu:m,hideInMenu:i}=s.meta;if(M&&(!i||m)){const l=w(m||s.name),p=new Set([...l,...t.value]);t.value=[...p],u.value=[m||l[l.length-1]]}},!0);const b=s=>{o.device==="desktop"&&o.updateSettings({menuCollapse:s})};return()=>v(ce,{collapsed:c.value,"onUpdate:collapsed":s=>c.value=s,"open-keys":t.value,"onUpdate:open-keys":s=>t.value=s,"auto-open":!1,"selected-keys":u.value,"auto-open-selected":!0,onCollapse:b,menuTree:n.value,menuItemClick:C},null)}});function me(){const o=P();return{accessRouter(e){var a,n,r,c,t,u;return!((a=e.meta)!=null&&a.requiresAuth)||!((n=e.meta)!=null&&n.roles)||((c=(r=e.meta)==null?void 0:r.roles)==null?void 0:c.includes("*"))||((u=(t=e.meta)==null?void 0:t.roles)==null?void 0:u.includes(o.role))},findFirstPermissionRoute(e,a="admin"){var r,c;const n=[...e];for(;n.length;){const t=n.shift();if((c=(r=t==null?void 0:t.meta)==null?void 0:r.roles)!=null&&c.find(u=>u.includes("*")||u.includes(a)))return{name:t.name};t!=null&&t.children&&n.push(...t.children)}return null}}}function ve(o,e,a,n=!1){o.addEventListener&&typeof o.addEventListener=="function"&&o.addEventListener(e,a,n)}function fe(o,e,a,n=!1){o.removeEventListener&&typeof o.removeEventListener=="function"&&o.removeEventListener(e,a,n)}const he=992;function _e(){return document.body.getBoundingClientRect().width-1<he}function ye(o){const e=A();function a(){if(!document.hidden){const r=_e();e.toggleDevice(r?"mobile":"desktop"),e.toggleMenu(r)}}const n=ne(a,100);T(()=>{o&&n()}),I(()=>{ve(window,"resize",n)}),q(()=>{fe(window,"resize",n)})}const Ce=F({__name:"page-layout",setup(o){const e=ue(),a=g(()=>e.getCacheList);return(n,r)=>{const c=K("router-view");return y(),k(c,null,{default:_(({Component:t,route:u})=>[v(N,{name:"fade",mode:"out-in",appear:""},{default:_(()=>[u.meta.ignoreCache?(y(),k(z(t),{key:u.fullPath})):(y(),k(V,{key:1,include:d(a)},[(y(),k(z(t),{key:u.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})}}});const Me={key:0,class:"layout-navbar"},ke={class:"menu-wrapper"},we=F({__name:"default-layout",setup(o){const e=A(),a=P(),n=B(),r=$(),c=me();ye(!0);const t=g(()=>e.navbar),u=g(()=>e.menu),C=g(()=>e.hideMenu),w=g(()=>e.menuMinWidth),b=g(()=>e.menuMaxWidth),s=g(()=>e.menuCollapse?w.value:b.value),M=g(()=>e.menuCollapse),m=g(()=>t.value?"layout-content layout-content-padding-top":"layout-content"),i=g(()=>({...u.value&&!C.value?{paddingLeft:`${s.value}`}:{}})),l=h=>{e.updateSettings({menuCollapse:h})};j(()=>a.role,h=>{h&&!c.accessRouter(r)&&n.push({name:"notFound"})});const p=f(!1),x=()=>{p.value=!1};return H("toggleDrawerMenu",()=>{p.value=!p.value}),(h,L)=>{const O=Z,U=ee,W=te,E=oe;return y(),k(E,{class:D(["layout",{mobile:d(e).hideMenu}])},{default:_(()=>[d(t)?(y(),Q("div",Me,[v(ie)])):S("",!0),v(E,null,{default:_(()=>[v(E,null,{default:_(()=>[d(u)?G((y(),k(O,{key:0,class:D(`layout-sider${d(t)?"":" layout-no-navbar"}`),breakpoint:"xl",collapsed:d(M),collapsible:!0,width:d(b),"collapsed-width":d(w),"hide-trigger":!0,onCollapse:l},{default:_(()=>[X("div",ke,[v(R)])]),_:1},8,["class","collapsed","width","collapsed-width"])),[[J,!d(C)]]):S("",!0),d(C)?(y(),k(U,{key:1,visible:p.value,placement:"left",footer:!1,"mask-closable":"",closable:!1,onCancel:x},{default:_(()=>[v(R)]),_:1},8,["visible"])):S("",!0),v(E,{class:D(d(m)),style:Y(d(i))},{default:_(()=>[v(W,{style:{overflow:"hidden"}},{default:_(()=>[v(Ce)]),_:1})]),_:1},8,["class","style"])]),_:1})]),_:1})]),_:1},8,["class"])}}});var Se=le(we,[["__scopeId","data-v-74a0aa70"]]);export{Se as default};
