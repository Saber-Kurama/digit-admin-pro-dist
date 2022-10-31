import{s as mt,u as X,c as F,r as Fe,i as q,n as gt,d as vt,h as yt,p as Re,a as ie,w as me,e as wt,m as le,b as fe,f as Et,t as Dt,g as St,o as Vt,j as zt,k as Qt,l as Ut}from"./arco.0f8f7318.js";import{i as Wt}from"./chart.24008d58.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Y=typeof window!="undefined";function qt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const C=Object.assign;function Oe(e,t){const n={};for(const r in t){const o=t[r];n[r]=H(o)?o.map(e):e(o)}return n}const re=()=>{},H=Array.isArray,Gt=/\/$/,Kt=e=>e.replace(Gt,"");function Ce(e,t,n="/"){let r,o={},a="",d="";const p=t.indexOf("#");let c=t.indexOf("?");return p<c&&p>=0&&(c=-1),c>-1&&(r=t.slice(0,c),a=t.slice(c+1,p>-1?p:t.length),o=e(a)),p>-1&&(r=r||t.slice(0,p),d=t.slice(p,t.length)),r=Zt(r!=null?r:t,n),{fullPath:r+(a&&"?")+a+d,path:r,query:o,hash:d}}function Jt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ze(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Z(t.matched[r],n.matched[o])&&_t(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _t(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Xt(e[n],t[n]))return!1;return!0}function Xt(e,t){return H(e)?Qe(e,t):H(t)?Qe(t,e):e===t}function Qe(e,t){return H(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Zt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,a,d;for(a=0;a<r.length;a++)if(d=r[a],d!==".")if(d==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var ae;(function(e){e.pop="pop",e.push="push"})(ae||(ae={}));var oe;(function(e){e.back="back",e.forward="forward",e.unknown=""})(oe||(oe={}));function en(e){if(!e)if(Y){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Kt(e)}const tn=/^[^#]+#/;function nn(e,t){return e.replace(tn,"#")+t}function rn(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ge=()=>({left:window.pageXOffset,top:window.pageYOffset});function on(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=rn(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ue(e,t){return(history.state?history.state.position-t:-1)+e}const je=new Map;function sn(e,t){je.set(e,t)}function an(e){const t=je.get(e);return je.delete(e),t}let cn=()=>location.protocol+"//"+location.host;function bt(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let p=o.includes(e.slice(a))?e.slice(a).length:1,c=o.slice(p);return c[0]!=="/"&&(c="/"+c),ze(c,"")}return ze(n,e)+r+o}function un(e,t,n,r){let o=[],a=[],d=null;const p=({state:f})=>{const m=bt(e,location),y=n.value,R=t.value;let O=0;if(f){if(n.value=m,t.value=f,d&&d===y){d=null;return}O=R?f.position-R.position:0}else r(m);o.forEach(E=>{E(n.value,y,{delta:O,type:ae.pop,direction:O?O>0?oe.forward:oe.back:oe.unknown})})};function c(){d=n.value}function l(f){o.push(f);const m=()=>{const y=o.indexOf(f);y>-1&&o.splice(y,1)};return a.push(m),m}function s(){const{history:f}=window;!f.state||f.replaceState(C({},f.state,{scroll:ge()}),"")}function u(){for(const f of a)f();a=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",s),{pauseListeners:c,listen:l,destroy:u}}function We(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ge():null}}function ln(e){const{history:t,location:n}=window,r={value:bt(e,n)},o={value:t.state};o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,l,s){const u=e.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:cn()+e+c;try{t[s?"replaceState":"pushState"](l,"",f),o.value=l}catch(m){console.error(m),n[s?"replace":"assign"](f)}}function d(c,l){const s=C({},t.state,We(o.value.back,c,o.value.forward,!0),l,{position:o.value.position});a(c,s,!0),r.value=c}function p(c,l){const s=C({},o.value,t.state,{forward:c,scroll:ge()});a(s.current,s,!0);const u=C({},We(r.value,c,null),{position:s.position+1},l);a(c,u,!1),r.value=c}return{location:r,state:o,push:p,replace:d}}function fn(e){e=en(e);const t=ln(e),n=un(e,t.state,t.location,t.replace);function r(a,d=!0){d||n.pauseListeners(),history.go(a)}const o=C({location:"",base:e,go:r,createHref:nn.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Nr(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),fn(e)}function dn(e){return typeof e=="string"||e&&typeof e=="object"}function Pt(e){return typeof e=="string"||typeof e=="symbol"}const Q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rt=Symbol("");var qe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(qe||(qe={}));function ee(e,t){return C(new Error,{type:e,[Rt]:!0},t)}function D(e,t){return e instanceof Error&&Rt in e&&(t==null||!!(e.type&t))}const Ge="[^/]+?",pn={sensitive:!1,strict:!1,start:!0,end:!0},hn=/[.+*?^${}()[\]/\\]/g;function mn(e,t){const n=C({},pn,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const s=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let u=0;u<l.length;u++){const f=l[u];let m=40+(n.sensitive?.25:0);if(f.type===0)u||(o+="/"),o+=f.value.replace(hn,"\\$&"),m+=40;else if(f.type===1){const{value:y,repeatable:R,optional:O,regexp:E}=f;a.push({name:y,repeatable:R,optional:O});const _=E||Ge;if(_!==Ge){m+=10;try{new RegExp(`(${_})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${y}" (${_}): `+L.message)}}let $=R?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;u||($=O&&l.length<2?`(?:/${$})`:"/"+$),O&&($+="?"),o+=$,m+=20,O&&(m+=-8),R&&(m+=-20),_===".*"&&(m+=-50)}s.push(m)}r.push(s)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function p(l){const s=l.match(d),u={};if(!s)return null;for(let f=1;f<s.length;f++){const m=s[f]||"",y=a[f-1];u[y.name]=m&&y.repeatable?m.split("/"):m}return u}function c(l){let s="",u=!1;for(const f of e){(!u||!s.endsWith("/"))&&(s+="/"),u=!1;for(const m of f)if(m.type===0)s+=m.value;else if(m.type===1){const{value:y,repeatable:R,optional:O}=m,E=y in l?l[y]:"";if(H(E)&&!R)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const _=H(E)?E.join("/"):E;if(!_)if(O)f.length<2&&(s.endsWith("/")?s=s.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);s+=_}}return s||"/"}return{re:d,score:r,keys:a,parse:p,stringify:c}}function gn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function vn(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const a=gn(r[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-r.length)===1){if(Ke(r))return 1;if(Ke(o))return-1}return o.length-r.length}function Ke(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const yn={type:0,value:""},wn=/[a-zA-Z0-9_]/;function En(e){if(!e)return[[]];if(e==="/")return[[yn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const o=[];let a;function d(){a&&o.push(a),a=[]}let p=0,c,l="",s="";function u(){!l||(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:s,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;p<e.length;){if(c=e[p++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),d()):c===":"?(u(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:wn.test(c)?f():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&p--);break;case 2:c===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+c:n=3:s+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&p--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),d(),o}function Sn(e,t,n){const r=mn(En(e.path),n),o=C(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function _n(e,t){const n=[],r=new Map;t=Xe({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function a(s,u,f){const m=!f,y=bn(s);y.aliasOf=f&&f.record;const R=Xe(t,s),O=[y];if("alias"in s){const $=typeof s.alias=="string"?[s.alias]:s.alias;for(const L of $)O.push(C({},y,{components:f?f.record.components:y.components,path:L,aliasOf:f?f.record:y}))}let E,_;for(const $ of O){const{path:L}=$;if(u&&L[0]!=="/"){const k=u.record.path,N=k[k.length-1]==="/"?"":"/";$.path=u.record.path+(L&&N+L)}if(E=Sn($,u,R),f?f.alias.push(E):(_=_||E,_!==E&&_.alias.push(E),m&&s.name&&!Ye(E)&&d(s.name)),y.children){const k=y.children;for(let N=0;N<k.length;N++)a(k[N],E,f&&f.children[N])}f=f||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return _?()=>{d(_)}:re}function d(s){if(Pt(s)){const u=r.get(s);u&&(r.delete(s),n.splice(n.indexOf(u),1),u.children.forEach(d),u.alias.forEach(d))}else{const u=n.indexOf(s);u>-1&&(n.splice(u,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function p(){return n}function c(s){let u=0;for(;u<n.length&&vn(s,n[u])>=0&&(s.record.path!==n[u].record.path||!Ot(s,n[u]));)u++;n.splice(u,0,s),s.record.name&&!Ye(s)&&r.set(s.record.name,s)}function l(s,u){let f,m={},y,R;if("name"in s&&s.name){if(f=r.get(s.name),!f)throw ee(1,{location:s});R=f.record.name,m=C(Je(u.params,f.keys.filter(_=>!_.optional).map(_=>_.name)),s.params&&Je(s.params,f.keys.map(_=>_.name))),y=f.stringify(m)}else if("path"in s)y=s.path,f=n.find(_=>_.re.test(y)),f&&(m=f.parse(y),R=f.record.name);else{if(f=u.name?r.get(u.name):n.find(_=>_.re.test(u.path)),!f)throw ee(1,{location:s,currentLocation:u});R=f.record.name,m=C({},u.params,s.params),y=f.stringify(m)}const O=[];let E=f;for(;E;)O.unshift(E.record),E=E.parent;return{name:R,path:y,params:m,matched:O,meta:Rn(O)}}return e.forEach(s=>a(s)),{addRoute:a,resolve:l,removeRoute:d,getRoutes:p,getRecordMatcher:o}}function Je(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function bn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Pn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Pn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ye(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Rn(e){return e.reduce((t,n)=>C(t,n.meta),{})}function Xe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ot(e,t){return t.children.some(n=>n===e||Ot(e,n))}const Ct=/#/g,On=/&/g,Cn=/\//g,An=/=/g,kn=/\?/g,At=/\+/g,jn=/%5B/g,In=/%5D/g,kt=/%5E/g,$n=/%60/g,jt=/%7B/g,Nn=/%7C/g,It=/%7D/g,xn=/%20/g;function He(e){return encodeURI(""+e).replace(Nn,"|").replace(jn,"[").replace(In,"]")}function Ln(e){return He(e).replace(jt,"{").replace(It,"}").replace(kt,"^")}function Ie(e){return He(e).replace(At,"%2B").replace(xn,"+").replace(Ct,"%23").replace(On,"%26").replace($n,"`").replace(jt,"{").replace(It,"}").replace(kt,"^")}function Mn(e){return Ie(e).replace(An,"%3D")}function Tn(e){return He(e).replace(Ct,"%23").replace(kn,"%3F")}function Fn(e){return e==null?"":Tn(e).replace(Cn,"%2F")}function de(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Hn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const a=r[o].replace(At," "),d=a.indexOf("="),p=de(d<0?a:a.slice(0,d)),c=d<0?null:de(a.slice(d+1));if(p in t){let l=t[p];H(l)||(l=t[p]=[l]),l.push(c)}else t[p]=c}return t}function Ze(e){let t="";for(let n in e){const r=e[n];if(n=Mn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(H(r)?r.map(a=>a&&Ie(a)):[r&&Ie(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Bn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=H(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Dn=Symbol(""),et=Symbol(""),ve=Symbol(""),Be=Symbol(""),$e=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function U(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,p)=>{const c=u=>{u===!1?p(ee(4,{from:n,to:t})):u instanceof Error?p(u):dn(u)?p(ee(2,{from:t,to:u})):(a&&r.enterCallbacks[o]===a&&typeof u=="function"&&a.push(u),d())},l=e.call(r&&r.instances[o],t,n,c);let s=Promise.resolve(l);e.length<3&&(s=s.then(c)),s.catch(u=>p(u))})}function Ae(e,t,n,r){const o=[];for(const a of e)for(const d in a.components){let p=a.components[d];if(!(t!=="beforeRouteEnter"&&!a.instances[d]))if(Vn(p)){const l=(p.__vccOpts||p)[t];l&&o.push(U(l,n,r,a,d))}else{let c=p();o.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${a.path}"`));const s=qt(l)?l.default:l;a.components[d]=s;const f=(s.__vccOpts||s)[t];return f&&U(f,n,r,a,d)()}))}}return o}function Vn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tt(e){const t=q(ve),n=q(Be),r=F(()=>t.resolve(X(e.to))),o=F(()=>{const{matched:c}=r.value,{length:l}=c,s=c[l-1],u=n.matched;if(!s||!u.length)return-1;const f=u.findIndex(Z.bind(null,s));if(f>-1)return f;const m=nt(c[l-2]);return l>1&&nt(s)===m&&u[u.length-1].path!==m?u.findIndex(Z.bind(null,c[l-2])):f}),a=F(()=>o.value>-1&&Wn(n.params,r.value.params)),d=F(()=>o.value>-1&&o.value===n.matched.length-1&&_t(n.params,r.value.params));function p(c={}){return Un(c)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(re):Promise.resolve()}return{route:r,href:F(()=>r.value.href),isActive:a,isExactActive:d,navigate:p}}const zn=vt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tt,setup(e,{slots:t}){const n=Fe(tt(e)),{options:r}=q(ve),o=F(()=>({[rt(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rt(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:yt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),Qn=zn;function Un(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!H(o)||o.length!==r.length||r.some((a,d)=>a!==o[d]))return!1}return!0}function nt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const rt=(e,t,n)=>e!=null?e:t!=null?t:n,qn=vt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=q($e),o=F(()=>e.route||r.value),a=q(et,0),d=F(()=>{let l=X(a);const{matched:s}=o.value;let u;for(;(u=s[l])&&!u.components;)l++;return l}),p=F(()=>o.value.matched[d.value]);Re(et,F(()=>d.value+1)),Re(Dn,p),Re($e,o);const c=ie();return me(()=>[c.value,p.value,e.name],([l,s,u],[f,m,y])=>{s&&(s.instances[u]=l,m&&m!==s&&l&&l===f&&(s.leaveGuards.size||(s.leaveGuards=m.leaveGuards),s.updateGuards.size||(s.updateGuards=m.updateGuards))),l&&s&&(!m||!Z(s,m)||!f)&&(s.enterCallbacks[u]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=o.value,s=e.name,u=p.value,f=u&&u.components[s];if(!f)return ot(n.default,{Component:f,route:l});const m=u.props[s],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,O=yt(f,C({},y,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(u.instances[s]=null)},ref:c}));return ot(n.default,{Component:O,route:l})||O}}});function ot(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Gn=qn;function xr(e){const t=_n(e.routes,e),n=e.parseQuery||Hn,r=e.stringifyQuery||Ze,o=e.history,a=ne(),d=ne(),p=ne(),c=mt(Q);let l=Q;Y&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=Oe.bind(null,i=>""+i),u=Oe.bind(null,Fn),f=Oe.bind(null,de);function m(i,g){let h,v;return Pt(i)?(h=t.getRecordMatcher(i),v=g):v=i,t.addRoute(v,h)}function y(i){const g=t.getRecordMatcher(i);g&&t.removeRoute(g)}function R(){return t.getRoutes().map(i=>i.record)}function O(i){return!!t.getRecordMatcher(i)}function E(i,g){if(g=C({},g||c.value),typeof i=="string"){const S=Ce(n,i,g.path),I=t.resolve({path:S.path},g),te=o.createHref(S.fullPath);return C(S,I,{params:f(I.params),hash:de(S.hash),redirectedFrom:void 0,href:te})}let h;if("path"in i)h=C({},i,{path:Ce(n,i.path,g.path).path});else{const S=C({},i.params);for(const I in S)S[I]==null&&delete S[I];h=C({},i,{params:u(i.params)}),g.params=u(g.params)}const v=t.resolve(h,g),A=i.hash||"";v.params=s(f(v.params));const j=Jt(r,C({},i,{hash:Ln(A),path:v.path})),P=o.createHref(j);return C({fullPath:j,hash:A,query:r===Ze?Bn(i.query):i.query||{}},v,{redirectedFrom:void 0,href:P})}function _(i){return typeof i=="string"?Ce(n,i,c.value.path):C({},i)}function $(i,g){if(l!==i)return ee(8,{from:g,to:i})}function L(i){return w(i)}function k(i){return L(C(_(i),{replace:!0}))}function N(i){const g=i.matched[i.matched.length-1];if(g&&g.redirect){const{redirect:h}=g;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=_(v):{path:v},v.params={}),C({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function w(i,g){const h=l=E(i),v=c.value,A=i.state,j=i.force,P=i.replace===!0,S=N(h);if(S)return w(C(_(S),{state:typeof S=="object"?C({},A,S.state):A,force:j,replace:P}),g||h);const I=h;I.redirectedFrom=g;let te;return!j&&Yt(r,v,h)&&(te=ee(16,{to:I,from:v}),De(v,v,!0,!1)),(te?Promise.resolve(te):x(I,v)).catch(T=>D(T)?D(T,2)?T:Se(T):Ee(T,I,v)).then(T=>{if(T){if(D(T,2))return w(C({replace:P},_(T.to),{state:typeof T.to=="object"?C({},A,T.to.state):A,force:j}),g||I)}else T=z(I,v,!0,P,A);return V(I,v,T),T})}function b(i,g){const h=$(i,g);return h?Promise.reject(h):Promise.resolve()}function x(i,g){let h;const[v,A,j]=Kn(i,g);h=Ae(v.reverse(),"beforeRouteLeave",i,g);for(const S of v)S.leaveGuards.forEach(I=>{h.push(U(I,i,g))});const P=b.bind(null,i,g);return h.push(P),K(h).then(()=>{h=[];for(const S of a.list())h.push(U(S,i,g));return h.push(P),K(h)}).then(()=>{h=Ae(A,"beforeRouteUpdate",i,g);for(const S of A)S.updateGuards.forEach(I=>{h.push(U(I,i,g))});return h.push(P),K(h)}).then(()=>{h=[];for(const S of i.matched)if(S.beforeEnter&&!g.matched.includes(S))if(H(S.beforeEnter))for(const I of S.beforeEnter)h.push(U(I,i,g));else h.push(U(S.beforeEnter,i,g));return h.push(P),K(h)}).then(()=>(i.matched.forEach(S=>S.enterCallbacks={}),h=Ae(j,"beforeRouteEnter",i,g),h.push(P),K(h))).then(()=>{h=[];for(const S of d.list())h.push(U(S,i,g));return h.push(P),K(h)}).catch(S=>D(S,8)?S:Promise.reject(S))}function V(i,g,h){for(const v of p.list())v(i,g,h)}function z(i,g,h,v,A){const j=$(i,g);if(j)return j;const P=g===Q,S=Y?history.state:{};h&&(v||P?o.replace(i.fullPath,C({scroll:P&&S&&S.scroll},A)):o.push(i.fullPath,A)),c.value=i,De(i,g,h,P),Se()}let G;function we(){G||(G=o.listen((i,g,h)=>{if(!Ve.listening)return;const v=E(i),A=N(v);if(A){w(C(A,{replace:!0}),v).catch(re);return}l=v;const j=c.value;Y&&sn(Ue(j.fullPath,h.delta),ge()),x(v,j).catch(P=>D(P,12)?P:D(P,2)?(w(P.to,v).then(S=>{D(S,20)&&!h.delta&&h.type===ae.pop&&o.go(-1,!1)}).catch(re),Promise.reject()):(h.delta&&o.go(-h.delta,!1),Ee(P,v,j))).then(P=>{P=P||z(v,j,!1),P&&(h.delta&&!D(P,8)?o.go(-h.delta,!1):h.type===ae.pop&&D(P,20)&&o.go(-1,!1)),V(v,j,P)}).catch(re)}))}let B=ne(),M=ne(),ue;function Ee(i,g,h){Se(i);const v=M.list();return v.length?v.forEach(A=>A(i,g,h)):console.error(i),Promise.reject(i)}function Bt(){return ue&&c.value!==Q?Promise.resolve():new Promise((i,g)=>{B.add([i,g])})}function Se(i){return ue||(ue=!i,we(),B.list().forEach(([g,h])=>i?h(i):g()),B.reset()),i}function De(i,g,h,v){const{scrollBehavior:A}=e;if(!Y||!A)return Promise.resolve();const j=!h&&an(Ue(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return gt().then(()=>A(i,g,j)).then(P=>P&&on(P)).catch(P=>Ee(P,i,g))}const _e=i=>o.go(i);let be;const Pe=new Set,Ve={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:O,getRoutes:R,resolve:E,options:e,push:L,replace:k,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:a.add,beforeResolve:d.add,afterEach:p.add,onError:M.add,isReady:Bt,install(i){const g=this;i.component("RouterLink",Qn),i.component("RouterView",Gn),i.config.globalProperties.$router=g,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>X(c)}),Y&&!be&&c.value===Q&&(be=!0,L(o.location).catch(A=>{}));const h={};for(const A in Q)h[A]=F(()=>c.value[A]);i.provide(ve,g),i.provide(Be,Fe(h)),i.provide($e,c);const v=i.unmount;Pe.add(i),i.unmount=function(){Pe.delete(i),Pe.size<1&&(l=Q,G&&G(),G=null,c.value=Q,be=!1,ue=!1),v()}}};return Ve}function K(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Kn(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let d=0;d<a;d++){const p=t.matched[d];p&&(e.matched.find(l=>Z(l,p))?r.push(p):n.push(p));const c=e.matched[d];c&&(t.matched.find(l=>Z(l,c))||o.push(c))}return[n,r,o]}function Lr(){return q(ve)}function Mr(){return q(Be)}/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let $t;const ye=e=>$t=e,Nt=Symbol();function Ne(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var se;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(se||(se={}));function Tr(){const e=wt(!0),t=e.run(()=>ie({}));let n=[],r=[];const o=le({install(a){ye(o),o._a=a,a.provide(Nt,o),a.config.globalProperties.$pinia=o,r.forEach(d=>n.push(d)),r=[]},use(a){return!this._a&&!Wt?r.push(a):n.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const xt=()=>{};function st(e,t,n,r=xt){e.push(t);const o=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),r())};return!n&&St()&&Vt(o),o}function J(e,...t){e.slice().forEach(n=>{n(...t)})}function xe(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];Ne(o)&&Ne(r)&&e.hasOwnProperty(n)&&!fe(r)&&!Et(r)?e[n]=xe(o,r):e[n]=r}return e}const Jn=Symbol();function Yn(e){return!Ne(e)||!e.hasOwnProperty(Jn)}const{assign:W}=Object;function Xn(e){return!!(fe(e)&&e.effect)}function Zn(e,t,n,r){const{state:o,actions:a,getters:d}=t,p=n.state.value[e];let c;function l(){p||(n.state.value[e]=o?o():{});const s=zt(n.state.value[e]);return W(s,a,Object.keys(d||{}).reduce((u,f)=>(u[f]=le(F(()=>{ye(n);const m=n._s.get(e);return d[f].call(m,m)})),u),{}))}return c=Lt(e,l,t,n,r,!0),c.$reset=function(){const u=o?o():{};this.$patch(f=>{W(f,u)})},c}function Lt(e,t,n={},r,o,a){let d;const p=W({actions:{}},n),c={deep:!0};let l,s,u=le([]),f=le([]),m;const y=r.state.value[e];!a&&!y&&(r.state.value[e]={}),ie({});let R;function O(w){let b;l=s=!1,typeof w=="function"?(w(r.state.value[e]),b={type:se.patchFunction,storeId:e,events:m}):(xe(r.state.value[e],w),b={type:se.patchObject,payload:w,storeId:e,events:m});const x=R=Symbol();gt().then(()=>{R===x&&(l=!0)}),s=!0,J(u,b,r.state.value[e])}const E=xt;function _(){d.stop(),u=[],f=[],r._s.delete(e)}function $(w,b){return function(){ye(r);const x=Array.from(arguments),V=[],z=[];function G(M){V.push(M)}function we(M){z.push(M)}J(f,{args:x,name:w,store:k,after:G,onError:we});let B;try{B=b.apply(this&&this.$id===e?this:k,x)}catch(M){throw J(z,M),M}return B instanceof Promise?B.then(M=>(J(V,M),M)).catch(M=>(J(z,M),Promise.reject(M))):(J(V,B),B)}}const L={_p:r,$id:e,$onAction:st.bind(null,f),$patch:O,$reset:E,$subscribe(w,b={}){const x=st(u,w,b.detached,()=>V()),V=d.run(()=>me(()=>r.state.value[e],z=>{(b.flush==="sync"?s:l)&&w({storeId:e,type:se.direct,events:m},z)},W({},c,b)));return x},$dispose:_},k=Fe(L);r._s.set(e,k);const N=r._e.run(()=>(d=wt(),d.run(()=>t())));for(const w in N){const b=N[w];if(fe(b)&&!Xn(b)||Et(b))a||(y&&Yn(b)&&(fe(b)?b.value=y[w]:xe(b,y[w])),r.state.value[e][w]=b);else if(typeof b=="function"){const x=$(w,b);N[w]=x,p.actions[w]=b}}return W(k,N),W(Dt(k),N),Object.defineProperty(k,"$state",{get:()=>r.state.value[e],set:w=>{O(b=>{W(b,w)})}}),r._p.forEach(w=>{W(k,d.run(()=>w({store:k,app:r._a,pinia:r,options:p})))}),y&&a&&n.hydrate&&n.hydrate(k.$state,y),l=!0,s=!0,k}function Fr(e,t,n){let r,o;const a=typeof t=="function";typeof e=="string"?(r=e,o=a?n:t):(o=e,r=e.id);function d(p,c){const l=St();return p=p||l&&q(Nt),p&&ye(p),p=$t,p._s.has(r)||(a?Lt(r,t,o,p):Zn(r,o,p)),p._s.get(r)}return d.$id=r,d}var at;const ce=typeof window!="undefined",er=e=>typeof e=="function",tr=e=>typeof e=="string",ke=()=>{};ce&&((at=window==null?void 0:window.navigator)==null?void 0:at.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pe(e){return typeof e=="function"?e():X(e)}function Mt(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const Tt=e=>e();function nr(e,t={}){let n,r;return a=>{const d=pe(e),p=pe(t.maxWait);if(n&&clearTimeout(n),d<=0||p!==void 0&&p<=0)return r&&(clearTimeout(r),r=null),a();p&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,a()},p)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,a()},d)}}function rr(e=Tt){const t=ie(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...a)=>{t.value&&e(...a)}}}function or(e){return e}function sr(e){return Qt()?(Ut(e),!0):!1}function Hr(e,t=200,n={}){return Mt(nr(t,n),e)}var it=Object.getOwnPropertySymbols,ar=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable,cr=(e,t)=>{var n={};for(var r in e)ar.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&it)for(var r of it(e))t.indexOf(r)<0&&ir.call(e,r)&&(n[r]=e[r]);return n};function ur(e,t,n={}){const r=n,{eventFilter:o=Tt}=r,a=cr(r,["eventFilter"]);return me(e,Mt(o,t),a)}var lr=Object.defineProperty,fr=Object.defineProperties,dr=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,ct=(e,t,n)=>t in e?lr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pr=(e,t)=>{for(var n in t||(t={}))Ft.call(t,n)&&ct(e,n,t[n]);if(he)for(var n of he(t))Ht.call(t,n)&&ct(e,n,t[n]);return e},hr=(e,t)=>fr(e,dr(t)),mr=(e,t)=>{var n={};for(var r in e)Ft.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&he)for(var r of he(e))t.indexOf(r)<0&&Ht.call(e,r)&&(n[r]=e[r]);return n};function gr(e,t,n={}){const r=n,{eventFilter:o}=r,a=mr(r,["eventFilter"]),{eventFilter:d,pause:p,resume:c,isActive:l}=rr(o);return{stop:ur(e,t,hr(pr({},a),{eventFilter:d})),pause:p,resume:c,isActive:l}}function vr(e){var t;const n=pe(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Le=ce?window:void 0;ce&&window.document;ce&&window.navigator;ce&&window.location;function yr(...e){let t,n,r,o;if(tr(e[0])?([n,r,o]=e,t=Le):[t,n,r,o]=e,!t)return ke;let a=ke;const d=me(()=>vr(t),c=>{a(),c&&(c.addEventListener(n,r,o),a=()=>{c.removeEventListener(n,r,o),a=ke})},{immediate:!0,flush:"post"}),p=()=>{d(),a()};return sr(p),p}const Me=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Te="__vueuse_ssr_handlers__";Me[Te]=Me[Te]||{};const wr=Me[Te];function Er(e,t){return wr[e]||t}function Sr(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var _r=Object.defineProperty,ut=Object.getOwnPropertySymbols,br=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable,lt=(e,t,n)=>t in e?_r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ft=(e,t)=>{for(var n in t||(t={}))br.call(t,n)&&lt(e,n,t[n]);if(ut)for(var n of ut(t))Pr.call(t,n)&&lt(e,n,t[n]);return e};const Rr={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Br(e,t,n,r={}){var o;const{flush:a="pre",deep:d=!0,listenToStorageChanges:p=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:s,window:u=Le,eventFilter:f,onError:m=w=>{console.error(w)}}=r,y=(s?mt:ie)(t);if(!n)try{n=Er("getDefaultStorage",()=>{var w;return(w=Le)==null?void 0:w.localStorage})()}catch(w){m(w)}if(!n)return y;const R=pe(t),O=Sr(R),E=(o=r.serializer)!=null?o:Rr[O],{pause:_,resume:$}=gr(y,()=>L(y.value),{flush:a,deep:d,eventFilter:f});return u&&p&&yr(u,"storage",N),N(),y;function L(w){try{w==null?n.removeItem(e):n.setItem(e,E.write(w))}catch(b){m(b)}}function k(w){_();try{const b=w?w.newValue:n.getItem(e);if(b==null)return c&&R!==null&&n.setItem(e,E.write(R)),R;if(!w&&l){const x=E.read(b);return er(l)?l(x,R):O==="object"&&!Array.isArray(x)?ft(ft({},R),x):x}else return typeof b!="string"?b:E.read(b)}catch(b){m(b)}finally{$()}}function N(w){if(!(w&&w.storageArea!==n)){if(w&&w.key===null){y.value=R;return}w&&w.key!==e||(y.value=k(w))}}}var dt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(dt||(dt={}));var Or=Object.defineProperty,pt=Object.getOwnPropertySymbols,Cr=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable,ht=(e,t,n)=>t in e?Or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kr=(e,t)=>{for(var n in t||(t={}))Cr.call(t,n)&&ht(e,n,t[n]);if(pt)for(var n of pt(t))Ar.call(t,n)&&ht(e,n,t[n]);return e};const jr={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};kr({linear:or},jr);export{Nr as a,Tr as b,xr as c,Fr as d,Lr as e,Mr as f,Hr as g,Br as u};
