import{$ as s,aY as f}from"./index-30c7a380.js";const g=(n,r)=>{if(!n||!r)return;r=r.replace(/\[(\w+)\]/g,".$1");const i=r.split(".");if(i.length===0)return;let e=n;for(let t=0;t<i.length;t++){if(!s(e)&&!f(e)||!i[t])return;if(t!==i.length-1)e=e[i[t]];else return e[i[t]]}},u=(n,r,i)=>{if(!n||!r)return;r=r.replace(/\[(\w+)\]/g,".$1");const e=r.split(".");if(e.length===0)return;let t=n;for(let l=0;l<e.length;l++){if(!s(t)&&!f(t)||!e[l])return;l!==e.length-1?t=t[e[l]]:t[e[l]]=i}};export{g,u as s};
