import{a as g,q as u,aB as l,aH as e,aG as a,aI as o,bo as v,bp as z,bq as x,aJ as C,d,aA as B,aN as w,z as i,u as _}from"./arco.8a79e78f.js";import{P as V}from"./index.351c7eaa.js";import{_ as j}from"./index.e3ecc5d6.js";import"./vue.7151ec83.js";import"./index.525319f1.js";const D={setup(){return{size:g("medium")}}},b=o("Mini"),N=o("Small"),$=o("Medium"),A=o("Large"),P=o("\u53BB\u7B2C"),T=o("\u9875");function k(t,s,c,n,R,S){const r=v,p=z,m=x,f=C;return u(),l(f,{direction:"vertical",size:"large"},{default:e(()=>[a(p,{type:"button",modelValue:n.size,"onUpdate:modelValue":s[0]||(s[0]=h=>n.size=h)},{default:e(()=>[a(r,{value:"mini"},{default:e(()=>[b]),_:1}),a(r,{value:"small"},{default:e(()=>[N]),_:1}),a(r,{value:"medium"},{default:e(()=>[$]),_:1}),a(r,{value:"large"},{default:e(()=>[A]),_:1})]),_:1},8,["modelValue"]),a(m,{total:50,size:n.size,"show-total":"","show-jumper":"","show-page-size":""},{"jumper-prepend":e(()=>[P]),"jumper-append":e(()=>[T]),_:1},8,["size"])]),_:1})}var q=j(D,[["render",k]]),F=d({name:"BasicTsxDemo",setup(){const t={"jumper-prepend":()=>"\u53BB\u7B2C"},s={"show-total":!0,"show-jumper":!0,total:50,slot:{...t}};return()=>a(B("a-pagination"),s,t)}});const G=i("h4",null,"\u57FA\u672C\u7528\u6CD5",-1),M=i("h4",null,"\u57FA\u672C\u7528\u6CD5",-1),U=d({__name:"index",setup(t){return(s,c)=>{const n=w;return u(),l(_(V),null,{default:e(()=>[a(n,null,{default:e(()=>[G,i("div",null,[a(q)]),M,i("div",null,[a(_(F))])]),_:1})]),_:1})}}});export{U as default};
