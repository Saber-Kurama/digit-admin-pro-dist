import{d as E,a as y,q as M,aB as w,u as m,c as v,aT as D,aV as I,aU as z,aE as g,a$ as H,b9 as X,h as P,bV as R,aM as W,aL as Y,bW as Z,aA as G,aF as b,bS as O,bX as J,bY as Q,w as ee,p as te,v as oe,aS as A,bZ as ne,b_ as se,x as B,z as ae,y as ue,b$ as le,c0 as re,c1 as ce,c2 as ie}from"./arco.78eae51f.js";import{u as T,e as N,f as pe}from"./vue.d53180d1.js";import{o as de,u as $,p as me,m as U,q as ge,_ as ve}from"./index.113df519.js";import{c as fe}from"./index.dee37300.js";import"./chart.021b8ef2.js";const he=E({__name:"index",setup(e){const t=T(),u=[{name:"\u6570\u5B57\u5316\u8425\u9500",type:"1",list:[{icon:"https://image.parligerly.com/protal-svg/mark.svg",logo:"https://image.parligerly.com/protal-svg/mark-logo.svg",title:"Marketing Automation",desc:"\u5168\u6E20\u9053\u81EA\u52A8\u5316\u8FD0\u8425\u4E2D\u67A2"},{icon:"https://image.parligerly.com/protal-svg/insi.svg",logo:"https://image.parligerly.com/protal-svg/insi-logo.svg",title:"Insight Force",desc:"\u7ECF\u8425\u5206\u6790\u5E73\u53F0"}]},{name:"\u6570\u5B57\u5316\u5EFA\u8BBE",type:"2",list:[{icon:"https://image.parligerly.com/protal-svg/metr.svg",logo:"https://image.parligerly.com/protal-svg/metr-logo.svg",title:"Metrics Force",desc:"\u6307\u6807\u5E73\u53F0"},{icon:"https://image.parligerly.com/protal-svg/cust.svg",logo:"https://image.parligerly.com/protal-svg/cust-logo.svg",title:"Customer Engine",desc:"\u7528\u6237\u6570\u636E\u5E73\u53F0"},{icon:"https://image.parligerly.com/protal-svg/data.svg",logo:"https://image.parligerly.com/protal-svg/data-logo.svg",title:"Data Engine",desc:"\u5927\u6570\u636E\u5F00\u53D1\u6CBB\u7406\u5957\u4EF6"}]},{name:"\u6570\u5B57\u5316\u4F9B\u5E94\u94FE",type:"3",list:[{icon:"https://image.parligerly.com/protal-svg/dema.svg",logo:"https://image.parligerly.com/protal-svg/dema-logo.svg",title:"Demand Forecasting",desc:"\u667A\u80FD\u9884\u6D4B"},{icon:"https://image.parligerly.com/protal-svg/repl.svg",logo:"https://image.parligerly.com/protal-svg/repl-logo.svg",title:"Replenishment",desc:"\u667A\u80FD\u8865\u8D27"},{icon:"https://image.parligerly.com/protal-svg/asso.svg",logo:"https://image.parligerly.com/protal-svg/asso-logo.svg",title:"Assortment",desc:"\u667A\u80FD\u9009\u54C1"}]}],n=[],l=[{label:"xxx\u6709\u9650\u516C\u53F8",value:"1",key:"1"},{label:"xxxxxx\u6709\u9650\u516C\u53F8",value:"2",key:"2"}],c=y("https://image.parligerly.com/protal-svg/logo-hom.svg"),o=y(u),a=y(n),f=y("2"),i=y(l),_=y("1"),s=p=>{console.log("item---",p),c.value=p.logo},k=p=>{console.log("key---",p);const r=n.find(d=>d.resourceCode===p);t.push({path:(r==null?void 0:r.resourceLink)||"/"})},h=p=>{console.log("value---",p)};return(p,r)=>(M(),w(m(fe),{logo:c.value,logoMenus:o.value,onLogoMenuClick:s,menus:a.value,activeMenu:f.value,"onUpdate:activeMenu":r[0]||(r[0]=d=>f.value=d),onMenuItemClick:k,tenant:_.value,tenantOptions:i.value,onTenantChange:h},null,8,["logo","logoMenus","menus","activeMenu","tenant","tenantOptions"]))}}),ye=(e,t)=>{const{target:u="_blank",...n}=t||{};window.open(e,u,Object.entries(n).reduce((l,c)=>{const[o,a]=c;return[...l,`${o}=${a}`]},[]).join(","))},_e=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");function Ce(){const e=de();return{menuTree:v(()=>e.menus)}}function be(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!H(e)}const x=E({name:"ALeftMenu",components:{Menu:D,MenuItem:I,SubMenu:z},props:{...D.props,menuTree:{type:Array,default:()=>[]},menuItemClick:{type:Function,default:()=>{}}},setup(e,{attrs:t}){const u=()=>{function o(a,f=[]){return a&&a.forEach(i=>{const _=i.resourceIcon?()=>P(R(`<${i.resourceIcon}/>`)):null,s=i.childrens&&i.childrens.length!==0?g(z,{key:i==null?void 0:i.resourceCode},{default:()=>[o(i==null?void 0:i.childrens)],icon:_,title:()=>P(R(i.resourceName||""))}):g(I,{key:i.resourceCode,onClick:()=>e.menuItemClick(i),class:"a-menu-item-isLeaf"},{default:()=>[i.resourceName||""],icon:_});f.push(s)}),f}return o(e.menuTree)},{menuTree:n,menuItemClick:l,...c}=e;return()=>{let o;return g(D,X(c,t,{class:"a-left-menu"}),be(o=u())?o:{default:()=>[o]})}}}),Me=e=>{e.component(x.name,x)};x.install=Me;var V=E({emit:["collapse"],setup(){const e=$(),t=T(),u=N(),n=y([]),{menuTree:l}=Ce(),c=v({get(){return e.device==="desktop"?e.menuCollapse:!1},set(s){e.updateSettings({menuCollapse:s})}});W(()=>{console.log("menuTree.value",l.value),n.value=l.value});const o=y([]),a=y([]),f=s=>{if(_e.test((s==null?void 0:s.resourcePath)||"")){ye(s.resourcePath),a.value=[s.resourceCode];return}if(u.name===s.resourceCode){a.value=[u.name];return}t.push({name:s.resourceCode})},i=s=>{const k=[];let h=!1;const p=(r,d,S)=>{var C;if(r.resourceCode===S){h=!0,k.push(...d,r.resourceCode);return}(C=r.childrens)!=null&&C.length&&r.childrens.forEach(L=>{h||p(L,[...d,L.resourceCode],S)})};return l.value.forEach(r=>{h||p(r,[r.resourceCode],s)}),k};me(s=>{const{requiresAuth:k,activeMenu:h,hideInMenu:p}=s.meta;if(k&&(!p||h)){const r=i(h||s.name),d=new Set([...r,...o.value]);o.value=[...d],a.value=[h||r[r.length-1]]}},!0);const _=s=>{e.device==="desktop"&&e.updateSettings({menuCollapse:s})};return()=>g(x,{collapsed:c.value,"onUpdate:collapsed":s=>c.value=s,"open-keys":o.value,"onUpdate:open-keys":s=>o.value=s,"auto-open":!1,"selected-keys":a.value,"auto-open-selected":!0,onCollapse:_,menuTree:n.value,menuItemClick:f},null)}});function ke(){const e=U();return{accessRouter(t){var u,n,l,c,o,a;return!((u=t.meta)!=null&&u.requiresAuth)||!((n=t.meta)!=null&&n.roles)||((c=(l=t.meta)==null?void 0:l.roles)==null?void 0:c.includes("*"))||((a=(o=t.meta)==null?void 0:o.roles)==null?void 0:a.includes(e.role))},findFirstPermissionRoute(t,u="admin"){var l,c;const n=[...t];for(;n.length;){const o=n.shift();if((c=(l=o==null?void 0:o.meta)==null?void 0:l.roles)!=null&&c.find(a=>a.includes("*")||a.includes(u)))return{name:o.name};o!=null&&o.children&&n.push(...o.children)}return null}}}function we(e,t,u,n=!1){e.addEventListener&&typeof e.addEventListener=="function"&&e.addEventListener(t,u,n)}function Ee(e,t,u,n=!1){e.removeEventListener&&typeof e.removeEventListener=="function"&&e.removeEventListener(t,u,n)}const Se=992;function Fe(){return document.body.getBoundingClientRect().width-1<Se}function xe(e){const t=$();function u(){if(!document.hidden){const l=Fe();t.toggleDevice(l?"mobile":"desktop"),t.toggleMenu(l)}}const n=pe(u,100);W(()=>{e&&n()}),Y(()=>{we(window,"resize",n)}),Z(()=>{Ee(window,"resize",n)})}const Le=E({__name:"page-layout",setup(e){const t=ge(),u=v(()=>t.getCacheList);return(n,l)=>{const c=G("router-view");return M(),w(c,null,{default:b(({Component:o,route:a})=>[g(Q,{name:"fade",mode:"out-in",appear:""},{default:b(()=>[a.meta.ignoreCache?(M(),w(O(o),{key:a.fullPath})):(M(),w(J,{key:1,include:m(u)},[(M(),w(O(o),{key:a.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})}}});const De={key:0,class:"layout-navbar"},Ae={class:"menu-wrapper"},Be=E({__name:"default-layout",setup(e){const t=$(),u=U(),n=T(),l=N(),c=ke();xe(!0);const o=v(()=>t.navbar),a=v(()=>t.menu),f=v(()=>t.hideMenu),i=v(()=>t.menuMinWidth),_=v(()=>t.menuMaxWidth),s=v(()=>t.menuCollapse?i.value:_.value),k=v(()=>t.menuCollapse),h=v(()=>o.value?"layout-content layout-content-padding-top":"layout-content"),p=v(()=>({...a.value&&!f.value?{paddingLeft:`${s.value}`}:{}})),r=C=>{t.updateSettings({menuCollapse:C})};ee(()=>u.role,C=>{C&&!c.accessRouter(l)&&n.push({name:"notFound"})});const d=y(!1),S=()=>{d.value=!1};return te("toggleDrawerMenu",()=>{d.value=!d.value}),(C,L)=>{const j=le,q=re,K=ce,F=ie;return M(),w(F,{class:B(["layout",{mobile:m(t).hideMenu}])},{default:b(()=>[m(o)?(M(),oe("div",De,[g(he)])):A("",!0),g(F,null,{default:b(()=>[g(F,null,{default:b(()=>[m(a)?ne((M(),w(j,{key:0,class:B(`layout-sider${m(o)?"":" layout-no-navbar"}`),breakpoint:"xl",collapsed:m(k),collapsible:!0,width:m(_),"collapsed-width":m(i),"hide-trigger":!0,onCollapse:r},{default:b(()=>[ae("div",Ae,[g(V)])]),_:1},8,["class","collapsed","width","collapsed-width"])),[[se,!m(f)]]):A("",!0),m(f)?(M(),w(q,{key:1,visible:d.value,placement:"left",footer:!1,"mask-closable":"",closable:!1,onCancel:S},{default:b(()=>[g(V)]),_:1},8,["visible"])):A("",!0),g(F,{class:B(m(h)),style:ue(m(p))},{default:b(()=>[g(K,{style:{overflow:"hidden"}},{default:b(()=>[g(Le)]),_:1})]),_:1},8,["class","style"])]),_:1})]),_:1})]),_:1},8,["class"])}}});var Re=ve(Be,[["__scopeId","data-v-74a0aa70"]]);export{Re as default};
