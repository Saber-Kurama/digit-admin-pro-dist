import{s as Et,u as X,c as H,r as Oe,n as Xe,d as Ze,i as F,h as Je,p as Ee,a as xe,w as et,e as tt,m as ae,b as ue,f as nt,t as wt,g as rt,o as St,j as Pt}from"./arco.8a79e78f.js";/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const st=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ee=e=>st?Symbol(e):"_vr_"+e,bt=ee("rvlm"),Me=ee("rvd"),fe=ee("r"),Ie=ee("rl"),be=ee("rvl"),Y=typeof window!="undefined";function At(e){return e.__esModule||st&&e[Symbol.toStringTag]==="Module"}const b=Object.assign;function we(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const re=()=>{},_t=/\/$/,Ct=e=>e.replace(_t,"");function Se(e,t,n="/"){let r,s={},o="",h="";const d=t.indexOf("?"),a=t.indexOf("#",d>-1?d:0);return d>-1&&(r=t.slice(0,d),o=t.slice(d+1,a>-1?a:t.length),s=e(o)),a>-1&&(r=r||t.slice(0,a),h=t.slice(a,t.length)),r=It(r!=null?r:t,n),{fullPath:r+(o&&"?")+o+h,path:r,query:s,hash:h}}function kt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Te(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ot(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Z(t.matched[r],n.matched[s])&&ot(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ot(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!xt(e[n],t[n]))return!1;return!0}function xt(e,t){return Array.isArray(e)?Ne(e,t):Array.isArray(t)?Ne(t,e):e===t}function Ne(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function It(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,o,h;for(o=0;o<r.length;o++)if(h=r[o],!(s===1||h==="."))if(h==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ce;(function(e){e.pop="pop",e.push="push"})(ce||(ce={}));var se;(function(e){e.back="back",e.forward="forward",e.unknown=""})(se||(se={}));function jt(e){if(!e)if(Y){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ct(e)}const Lt=/^[^#]+#/;function Mt(e,t){return e.replace(Lt,"#")+t}function Tt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const he=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Tt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $e(e,t){return(history.state?history.state.position-t:-1)+e}const Ae=new Map;function $t(e,t){Ae.set(e,t)}function Ht(e){const t=Ae.get(e);return Ae.delete(e),t}let Bt=()=>location.protocol+"//"+location.host;function ct(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let d=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(d);return a[0]!=="/"&&(a="/"+a),Te(a,"")}return Te(n,e)+r+s}function Vt(e,t,n,r){let s=[],o=[],h=null;const d=({state:u})=>{const g=ct(e,location),v=n.value,k=t.value;let A=0;if(u){if(n.value=g,t.value=u,h&&h===v){h=null;return}A=k?u.position-k.position:0}else r(g);s.forEach(S=>{S(n.value,v,{delta:A,type:ce.pop,direction:A?A>0?se.forward:se.back:se.unknown})})};function a(){h=n.value}function l(u){s.push(u);const g=()=>{const v=s.indexOf(u);v>-1&&s.splice(v,1)};return o.push(g),g}function c(){const{history:u}=window;!u.state||u.replaceState(b({},u.state,{scroll:he()}),"")}function f(){for(const u of o)u();o=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",c),{pauseListeners:a,listen:l,destroy:f}}function He(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?he():null}}function qt(e){const{history:t,location:n}=window,r={value:ct(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(a,l,c){const f=e.indexOf("#"),u=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:Bt()+e+a;try{t[c?"replaceState":"pushState"](l,"",u),s.value=l}catch(g){console.error(g),n[c?"replace":"assign"](u)}}function h(a,l){const c=b({},t.state,He(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});o(a,c,!0),r.value=a}function d(a,l){const c=b({},s.value,t.state,{forward:a,scroll:he()});o(c.current,c,!0);const f=b({},He(r.value,a,null),{position:c.position+1},l);o(a,f,!1),r.value=a}return{location:r,state:s,push:d,replace:h}}function zt(e){e=jt(e);const t=qt(e),n=Vt(e,t.state,t.location,t.replace);function r(o,h=!0){h||n.pauseListeners(),history.go(o)}const s=b({location:"",base:e,go:r,createHref:Mt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Hn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),zt(e)}function Gt(e){return typeof e=="string"||e&&typeof e=="object"}function it(e){return typeof e=="string"||typeof e=="symbol"}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},at=ee("nf");var Be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Be||(Be={}));function J(e,t){return b(new Error,{type:e,[at]:!0},t)}function K(e,t){return e instanceof Error&&at in e&&(t==null||!!(e.type&t))}const Ve="[^/]+?",Kt={sensitive:!1,strict:!1,start:!0,end:!0},Ut=/[.+*?^${}()[\]/\\]/g;function Ft(e,t){const n=b({},Kt,t),r=[];let s=n.start?"^":"";const o=[];for(const l of e){const c=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const u=l[f];let g=40+(n.sensitive?.25:0);if(u.type===0)f||(s+="/"),s+=u.value.replace(Ut,"\\$&"),g+=40;else if(u.type===1){const{value:v,repeatable:k,optional:A,regexp:S}=u;o.push({name:v,repeatable:k,optional:A});const w=S||Ve;if(w!==Ve){g+=10;try{new RegExp(`(${w})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${w}): `+T.message)}}let j=k?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(j=A&&l.length<2?`(?:/${j})`:"/"+j),A&&(j+="?"),s+=j,g+=20,A&&(g+=-8),k&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const h=new RegExp(s,n.sensitive?"":"i");function d(l){const c=l.match(h),f={};if(!c)return null;for(let u=1;u<c.length;u++){const g=c[u]||"",v=o[u-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function a(l){let c="",f=!1;for(const u of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const g of u)if(g.type===0)c+=g.value;else if(g.type===1){const{value:v,repeatable:k,optional:A}=g,S=v in l?l[v]:"";if(Array.isArray(S)&&!k)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(S)?S.join("/"):S;if(!w)if(A)u.length<2&&e.length>1&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=w}}return c}return{re:h,score:r,keys:o,parse:d,stringify:a}}function Dt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Wt(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Dt(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(qe(r))return 1;if(qe(s))return-1}return s.length-r.length}function qe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Qt={type:0,value:""},Yt=/[a-zA-Z0-9_]/;function Xt(e){if(!e)return[[]];if(e==="/")return[[Qt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let o;function h(){o&&s.push(o),o=[]}let d=0,a,l="",c="";function f(){!l||(n===0?o.push({type:0,value:l}):n===1||n===2||n===3?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function u(){l+=a}for(;d<e.length;){if(a=e[d++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),h()):a===":"?(f(),n=1):u();break;case 4:u(),n=r;break;case 1:a==="("?n=2:Yt.test(a)?u():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&d--);break;case 2:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&d--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),h(),s}function Zt(e,t,n){const r=Ft(Xt(e.path),n),s=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Jt(e,t){const n=[],r=new Map;t=Ge({strict:!1,end:!0,sensitive:!1},t);function s(c){return r.get(c)}function o(c,f,u){const g=!u,v=tn(c);v.aliasOf=u&&u.record;const k=Ge(t,c),A=[v];if("alias"in c){const j=typeof c.alias=="string"?[c.alias]:c.alias;for(const T of j)A.push(b({},v,{components:u?u.record.components:v.components,path:T,aliasOf:u?u.record:v}))}let S,w;for(const j of A){const{path:T}=j;if(f&&T[0]!=="/"){const I=f.record.path,L=I[I.length-1]==="/"?"":"/";j.path=f.record.path+(T&&L+T)}if(S=Zt(j,f,k),u?u.alias.push(S):(w=w||S,w!==S&&w.alias.push(S),g&&c.name&&!ze(S)&&h(c.name)),"children"in v){const I=v.children;for(let L=0;L<I.length;L++)o(I[L],S,u&&u.children[L])}u=u||S,a(S)}return w?()=>{h(w)}:re}function h(c){if(it(c)){const f=r.get(c);f&&(r.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(h),f.alias.forEach(h))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&r.delete(c.record.name),c.children.forEach(h),c.alias.forEach(h))}}function d(){return n}function a(c){let f=0;for(;f<n.length&&Wt(c,n[f])>=0&&(c.record.path!==n[f].record.path||!ut(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!ze(c)&&r.set(c.record.name,c)}function l(c,f){let u,g={},v,k;if("name"in c&&c.name){if(u=r.get(c.name),!u)throw J(1,{location:c});k=u.record.name,g=b(en(f.params,u.keys.filter(w=>!w.optional).map(w=>w.name)),c.params),v=u.stringify(g)}else if("path"in c)v=c.path,u=n.find(w=>w.re.test(v)),u&&(g=u.parse(v),k=u.record.name);else{if(u=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!u)throw J(1,{location:c,currentLocation:f});k=u.record.name,g=b({},f.params,c.params),v=u.stringify(g)}const A=[];let S=u;for(;S;)A.unshift(S.record),S=S.parent;return{name:k,path:v,params:g,matched:A,meta:rn(A)}}return e.forEach(c=>o(c)),{addRoute:o,resolve:l,removeRoute:h,getRoutes:d,getRecordMatcher:s}}function en(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function tn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:nn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function nn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function ze(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rn(e){return e.reduce((t,n)=>b(t,n.meta),{})}function Ge(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ut(e,t){return t.children.some(n=>n===e||ut(e,n))}const lt=/#/g,sn=/&/g,on=/\//g,cn=/=/g,an=/\?/g,ft=/\+/g,un=/%5B/g,ln=/%5D/g,ht=/%5E/g,fn=/%60/g,dt=/%7B/g,hn=/%7C/g,pt=/%7D/g,dn=/%20/g;function je(e){return encodeURI(""+e).replace(hn,"|").replace(un,"[").replace(ln,"]")}function pn(e){return je(e).replace(dt,"{").replace(pt,"}").replace(ht,"^")}function _e(e){return je(e).replace(ft,"%2B").replace(dn,"+").replace(lt,"%23").replace(sn,"%26").replace(fn,"`").replace(dt,"{").replace(pt,"}").replace(ht,"^")}function mn(e){return _e(e).replace(cn,"%3D")}function gn(e){return je(e).replace(lt,"%23").replace(an,"%3F")}function yn(e){return e==null?"":gn(e).replace(on,"%2F")}function le(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function vn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(ft," "),h=o.indexOf("="),d=le(h<0?o:o.slice(0,h)),a=h<0?null:le(o.slice(h+1));if(d in t){let l=t[d];Array.isArray(l)||(l=t[d]=[l]),l.push(a)}else t[d]=a}return t}function Ke(e){let t="";for(let n in e){const r=e[n];if(n=mn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(o=>o&&_e(o)):[r&&_e(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function ne(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function U(e,t,n,r,s){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((h,d)=>{const a=f=>{f===!1?d(J(4,{from:n,to:t})):f instanceof Error?d(f):Gt(f)?d(J(2,{from:t,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),h())},l=e.call(r&&r.instances[s],t,n,a);let c=Promise.resolve(l);e.length<3&&(c=c.then(a)),c.catch(f=>d(f))})}function Pe(e,t,n,r){const s=[];for(const o of e)for(const h in o.components){let d=o.components[h];if(!(t!=="beforeRouteEnter"&&!o.instances[h]))if(En(d)){const l=(d.__vccOpts||d)[t];l&&s.push(U(l,n,r,o,h))}else{let a=d();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${o.path}"`));const c=At(l)?l.default:l;o.components[h]=c;const u=(c.__vccOpts||c)[t];return u&&U(u,n,r,o,h)()}))}}return s}function En(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ue(e){const t=F(fe),n=F(Ie),r=H(()=>t.resolve(X(e.to))),s=H(()=>{const{matched:a}=r.value,{length:l}=a,c=a[l-1],f=n.matched;if(!c||!f.length)return-1;const u=f.findIndex(Z.bind(null,c));if(u>-1)return u;const g=Fe(a[l-2]);return l>1&&Fe(c)===g&&f[f.length-1].path!==g?f.findIndex(Z.bind(null,a[l-2])):u}),o=H(()=>s.value>-1&&bn(n.params,r.value.params)),h=H(()=>s.value>-1&&s.value===n.matched.length-1&&ot(n.params,r.value.params));function d(a={}){return Pn(a)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(re):Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:o,isExactActive:h,navigate:d}}const wn=Ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const n=Oe(Ue(e)),{options:r}=F(fe),s=H(()=>({[De(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[De(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Je("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Sn=wn;function Pn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((o,h)=>o!==s[h]))return!1}return!0}function Fe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const De=(e,t,n)=>e!=null?e:t!=null?t:n,An=Ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=F(be),s=H(()=>e.route||r.value),o=F(Me,0),h=H(()=>s.value.matched[o]);Ee(Me,o+1),Ee(bt,h),Ee(be,s);const d=xe();return et(()=>[d.value,h.value,e.name],([a,l,c],[f,u,g])=>{l&&(l.instances[c]=a,u&&u!==l&&a&&a===f&&(l.leaveGuards.size||(l.leaveGuards=u.leaveGuards),l.updateGuards.size||(l.updateGuards=u.updateGuards))),a&&l&&(!u||!Z(l,u)||!f)&&(l.enterCallbacks[c]||[]).forEach(v=>v(a))},{flush:"post"}),()=>{const a=s.value,l=h.value,c=l&&l.components[e.name],f=e.name;if(!c)return We(n.default,{Component:c,route:a});const u=l.props[e.name],g=u?u===!0?a.params:typeof u=="function"?u(a):u:null,k=Je(c,b({},g,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[f]=null)},ref:d}));return We(n.default,{Component:k,route:a})||k}}});function We(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const _n=An;function Bn(e){const t=Jt(e.routes,e),n=e.parseQuery||vn,r=e.stringifyQuery||Ke,s=e.history,o=ne(),h=ne(),d=ne(),a=Et(G);let l=G;Y&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=we.bind(null,i=>""+i),f=we.bind(null,yn),u=we.bind(null,le);function g(i,m){let p,y;return it(i)?(p=t.getRecordMatcher(i),y=m):y=i,t.addRoute(y,p)}function v(i){const m=t.getRecordMatcher(i);m&&t.removeRoute(m)}function k(){return t.getRoutes().map(i=>i.record)}function A(i){return!!t.getRecordMatcher(i)}function S(i,m){if(m=b({},m||a.value),typeof i=="string"){const R=Se(n,i,m.path),x=t.resolve({path:R.path},m),te=s.createHref(R.fullPath);return b(R,x,{params:u(x.params),hash:le(R.hash),redirectedFrom:void 0,href:te})}let p;if("path"in i)p=b({},i,{path:Se(n,i.path,m.path).path});else{const R=b({},i.params);for(const x in R)R[x]==null&&delete R[x];p=b({},i,{params:f(i.params)}),m.params=f(m.params)}const y=t.resolve(p,m),C=i.hash||"";y.params=c(u(y.params));const O=kt(r,b({},i,{hash:pn(C),path:y.path})),E=s.createHref(O);return b({fullPath:O,hash:C,query:r===Ke?Rn(i.query):i.query||{}},y,{redirectedFrom:void 0,href:E})}function w(i){return typeof i=="string"?Se(n,i,a.value.path):b({},i)}function j(i,m){if(l!==i)return J(8,{from:m,to:i})}function T(i){return P(i)}function I(i){return T(b(w(i),{replace:!0}))}function L(i){const m=i.matched[i.matched.length-1];if(m&&m.redirect){const{redirect:p}=m;let y=typeof p=="function"?p(i):p;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=w(y):{path:y},y.params={}),b({query:i.query,hash:i.hash,params:i.params},y)}}function P(i,m){const p=l=S(i),y=a.value,C=i.state,O=i.force,E=i.replace===!0,R=L(p);if(R)return P(b(w(R),{state:C,force:O,replace:E}),m||p);const x=p;x.redirectedFrom=m;let te;return!O&&Ot(r,y,p)&&(te=J(16,{to:x,from:y}),Le(y,y,!0,!1)),(te?Promise.resolve(te):$(x,y)).catch(N=>K(N)?K(N,2)?N:ge(N):me(N,x,y)).then(N=>{if(N){if(K(N,2))return P(b(w(N.to),{state:C,force:O,replace:E}),m||x)}else N=z(x,y,!0,E,C);return q(x,y,N),N})}function _(i,m){const p=j(i,m);return p?Promise.reject(p):Promise.resolve()}function $(i,m){let p;const[y,C,O]=Cn(i,m);p=Pe(y.reverse(),"beforeRouteLeave",i,m);for(const R of y)R.leaveGuards.forEach(x=>{p.push(U(x,i,m))});const E=_.bind(null,i,m);return p.push(E),W(p).then(()=>{p=[];for(const R of o.list())p.push(U(R,i,m));return p.push(E),W(p)}).then(()=>{p=Pe(C,"beforeRouteUpdate",i,m);for(const R of C)R.updateGuards.forEach(x=>{p.push(U(x,i,m))});return p.push(E),W(p)}).then(()=>{p=[];for(const R of i.matched)if(R.beforeEnter&&!m.matched.includes(R))if(Array.isArray(R.beforeEnter))for(const x of R.beforeEnter)p.push(U(x,i,m));else p.push(U(R.beforeEnter,i,m));return p.push(E),W(p)}).then(()=>(i.matched.forEach(R=>R.enterCallbacks={}),p=Pe(O,"beforeRouteEnter",i,m),p.push(E),W(p))).then(()=>{p=[];for(const R of h.list())p.push(U(R,i,m));return p.push(E),W(p)}).catch(R=>K(R,8)?R:Promise.reject(R))}function q(i,m,p){for(const y of d.list())y(i,m,p)}function z(i,m,p,y,C){const O=j(i,m);if(O)return O;const E=m===G,R=Y?history.state:{};p&&(y||E?s.replace(i.fullPath,b({scroll:E&&R&&R.scroll},C)):s.push(i.fullPath,C)),a.value=i,Le(i,m,p,E),ge()}let D;function pe(){D||(D=s.listen((i,m,p)=>{const y=S(i),C=L(y);if(C){P(b(C,{replace:!0}),y).catch(re);return}l=y;const O=a.value;Y&&$t($e(O.fullPath,p.delta),he()),$(y,O).catch(E=>K(E,12)?E:K(E,2)?(P(E.to,y).then(R=>{K(R,20)&&!p.delta&&p.type===ce.pop&&s.go(-1,!1)}).catch(re),Promise.reject()):(p.delta&&s.go(-p.delta,!1),me(E,y,O))).then(E=>{E=E||z(y,O,!1),E&&(p.delta?s.go(-p.delta,!1):p.type===ce.pop&&K(E,20)&&s.go(-1,!1)),q(y,O,E)}).catch(re)}))}let B=ne(),M=ne(),ie;function me(i,m,p){ge(i);const y=M.list();return y.length?y.forEach(C=>C(i,m,p)):console.error(i),Promise.reject(i)}function Rt(){return ie&&a.value!==G?Promise.resolve():new Promise((i,m)=>{B.add([i,m])})}function ge(i){return ie||(ie=!i,pe(),B.list().forEach(([m,p])=>i?p(i):m()),B.reset()),i}function Le(i,m,p,y){const{scrollBehavior:C}=e;if(!Y||!C)return Promise.resolve();const O=!p&&Ht($e(i.fullPath,0))||(y||!p)&&history.state&&history.state.scroll||null;return Xe().then(()=>C(i,m,O)).then(E=>E&&Nt(E)).catch(E=>me(E,i,m))}const ye=i=>s.go(i);let ve;const Re=new Set;return{currentRoute:a,addRoute:g,removeRoute:v,hasRoute:A,getRoutes:k,resolve:S,options:e,push:T,replace:I,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:o.add,beforeResolve:h.add,afterEach:d.add,onError:M.add,isReady:Rt,install(i){const m=this;i.component("RouterLink",Sn),i.component("RouterView",_n),i.config.globalProperties.$router=m,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>X(a)}),Y&&!ve&&a.value===G&&(ve=!0,T(s.location).catch(C=>{}));const p={};for(const C in G)p[C]=H(()=>a.value[C]);i.provide(fe,m),i.provide(Ie,Oe(p)),i.provide(be,a);const y=i.unmount;Re.add(i),i.unmount=function(){Re.delete(i),Re.size<1&&(l=G,D&&D(),D=null,a.value=G,ve=!1,ie=!1),y()}}}}function W(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Cn(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let h=0;h<o;h++){const d=t.matched[h];d&&(e.matched.find(l=>Z(l,d))?r.push(d):n.push(d));const a=e.matched[h];a&&(t.matched.find(l=>Z(l,a))||s.push(a))}return[n,r,s]}function Vn(){return F(fe)}function qn(){return F(Ie)}var kn=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let mt;const de=e=>mt=e,gt=Symbol();function Ce(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var oe;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(oe||(oe={}));function zn(){const e=tt(!0),t=e.run(()=>xe({}));let n=[],r=[];const s=ae({install(o){de(s),s._a=o,o.provide(gt,s),o.config.globalProperties.$pinia=s,r.forEach(h=>n.push(h)),r=[]},use(o){return!this._a&&!kn?r.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const yt=()=>{};function Qe(e,t,n,r=yt){e.push(t);const s=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),r())};return!n&&rt()&&St(s),s}function Q(e,...t){e.slice().forEach(n=>{n(...t)})}function ke(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Ce(s)&&Ce(r)&&e.hasOwnProperty(n)&&!ue(r)&&!nt(r)?e[n]=ke(s,r):e[n]=r}return e}const On=Symbol();function xn(e){return!Ce(e)||!e.hasOwnProperty(On)}const{assign:V}=Object;function In(e){return!!(ue(e)&&e.effect)}function jn(e,t,n,r){const{state:s,actions:o,getters:h}=t,d=n.state.value[e];let a;function l(){d||(n.state.value[e]=s?s():{});const c=Pt(n.state.value[e]);return V(c,o,Object.keys(h||{}).reduce((f,u)=>(f[u]=ae(H(()=>{de(n);const g=n._s.get(e);return h[u].call(g,g)})),f),{}))}return a=vt(e,l,t,n,r,!0),a.$reset=function(){const f=s?s():{};this.$patch(u=>{V(u,f)})},a}function vt(e,t,n={},r,s,o){let h;const d=V({actions:{}},n),a={deep:!0};let l,c,f=ae([]),u=ae([]),g;const v=r.state.value[e];!o&&!v&&(r.state.value[e]={}),xe({});let k;function A(P){let _;l=c=!1,typeof P=="function"?(P(r.state.value[e]),_={type:oe.patchFunction,storeId:e,events:g}):(ke(r.state.value[e],P),_={type:oe.patchObject,payload:P,storeId:e,events:g});const $=k=Symbol();Xe().then(()=>{k===$&&(l=!0)}),c=!0,Q(f,_,r.state.value[e])}const S=yt;function w(){h.stop(),f=[],u=[],r._s.delete(e)}function j(P,_){return function(){de(r);const $=Array.from(arguments),q=[],z=[];function D(M){q.push(M)}function pe(M){z.push(M)}Q(u,{args:$,name:P,store:I,after:D,onError:pe});let B;try{B=_.apply(this&&this.$id===e?this:I,$)}catch(M){throw Q(z,M),M}return B instanceof Promise?B.then(M=>(Q(q,M),M)).catch(M=>(Q(z,M),Promise.reject(M))):(Q(q,B),B)}}const T={_p:r,$id:e,$onAction:Qe.bind(null,u),$patch:A,$reset:S,$subscribe(P,_={}){const $=Qe(f,P,_.detached,()=>q()),q=h.run(()=>et(()=>r.state.value[e],z=>{(_.flush==="sync"?c:l)&&P({storeId:e,type:oe.direct,events:g},z)},V({},a,_)));return $},$dispose:w},I=Oe(V({},T));r._s.set(e,I);const L=r._e.run(()=>(h=tt(),h.run(()=>t())));for(const P in L){const _=L[P];if(ue(_)&&!In(_)||nt(_))o||(v&&xn(_)&&(ue(_)?_.value=v[P]:ke(_,v[P])),r.state.value[e][P]=_);else if(typeof _=="function"){const $=j(P,_);L[P]=$,d.actions[P]=_}}return V(I,L),V(wt(I),L),Object.defineProperty(I,"$state",{get:()=>r.state.value[e],set:P=>{A(_=>{V(_,P)})}}),r._p.forEach(P=>{V(I,h.run(()=>P({store:I,app:r._a,pinia:r,options:d})))}),v&&o&&n.hydrate&&n.hydrate(I.$state,v),l=!0,c=!0,I}function Gn(e,t,n){let r,s;const o=typeof t=="function";typeof e=="string"?(r=e,s=o?n:t):(s=e,r=e.id);function h(d,a){const l=rt();return d=d||l&&F(gt),d&&de(d),d=mt,d._s.has(r)||(o?vt(r,t,s,d):jn(r,s,d)),d._s.get(r)}return h.$id=r,h}var Ye;const Ln=typeof window!="undefined";Ln&&((Ye=window==null?void 0:window.navigator)==null?void 0:Ye.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Mn(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function Tn(e,t={}){let n,r;return o=>{const h=X(e),d=X(t.maxWait);if(n&&clearTimeout(n),h<=0||d!==void 0&&d<=0)return r&&(clearTimeout(r),r=null),o();d&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,o()},d)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,o()},h)}}function Kn(e,t=200,n={}){return Mn(Tn(t,n),e)}export{Hn as a,zn as b,Bn as c,Gn as d,qn as e,Kn as f,Vn as u};
