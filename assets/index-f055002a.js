import{u as et,c as nt}from"./useColorMode-0c4a1808.js";import{s as D}from"./themeColor-47076d31.js";import{aj as x,e as B,ak as W,g as st,y as ot,A as ct,r as rt,u as I,al as F,Q as V,B as ut,L as at,M as it,K as ft,t as lt,c as ht}from"./runtime-core.esm-bundler-a91919e4.js";var mt=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let q;const E=t=>q=t,H=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var w;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(w||(w={}));function Jt(){const t=x(!0),s=t.run(()=>B({}));let n=[],e=[];const c=W({install(u){E(c),c._a=u,u.provide(H,c),u.config.globalProperties.$pinia=c,e.forEach(i=>n.push(i)),e=[]},use(u){return!this._a&&!mt?e.push(u):n.push(u),this},_p:n,_a:null,_e:t,_s:new Map,state:s});return c}const T=()=>{};function A(t,s,n,e=T){t.push(s);const c=()=>{const u=t.indexOf(s);u>-1&&(t.splice(u,1),e())};return!n&&at()&&it(c),c}function C(t,...s){t.slice().forEach(n=>{n(...s)})}function M(t,s){t instanceof Map&&s instanceof Map&&s.forEach((n,e)=>t.set(e,n)),t instanceof Set&&s instanceof Set&&s.forEach(t.add,t);for(const n in s){if(!s.hasOwnProperty(n))continue;const e=s[n],c=t[n];R(c)&&R(e)&&t.hasOwnProperty(n)&&!I(e)&&!F(e)?t[n]=M(c,e):t[n]=e}return t}const dt=Symbol();function bt(t){return!R(t)||!t.hasOwnProperty(dt)}const{assign:S}=Object;function vt(t){return!!(I(t)&&t.effect)}function St(t,s,n,e){const{state:c,actions:u,getters:i}=s,a=n.state.value[t];let y;function h(){a||(n.state.value[t]=c?c():{});const m=lt(n.state.value[t]);return S(m,u,Object.keys(i||{}).reduce((d,b)=>(d[b]=W(ht(()=>{E(n);const g=n._s.get(t);return i[b].call(g,g)})),d),{}))}return y=J(t,h,s,n,e,!0),y.$reset=function(){const d=c?c():{};this.$patch(b=>{S(b,d)})},y}function J(t,s,n={},e,c,u){let i;const a=S({actions:{}},n),y={deep:!0};let h,m,d=W([]),b=W([]),g;const p=e.state.value[t];!u&&!p&&(e.state.value[t]={}),B({});let L;function O(r){let o;h=m=!1,typeof r=="function"?(r(e.state.value[t]),o={type:w.patchFunction,storeId:t,events:g}):(M(e.state.value[t],r),o={type:w.patchObject,payload:r,storeId:t,events:g});const v=L=Symbol();ft().then(()=>{L===v&&(h=!0)}),m=!0,C(d,o,e.state.value[t])}const U=T;function X(){i.stop(),d=[],b=[],e._s.delete(t)}function Y(r,o){return function(){E(e);const v=Array.from(arguments),k=[],P=[];function G(f){k.push(f)}function tt(f){P.push(f)}C(b,{args:v,name:r,store:l,after:G,onError:tt});let j;try{j=o.apply(this&&this.$id===t?this:l,v)}catch(f){throw C(P,f),f}return j instanceof Promise?j.then(f=>(C(k,f),f)).catch(f=>(C(P,f),Promise.reject(f))):(C(k,j),j)}}const Z={_p:e,$id:t,$onAction:A.bind(null,b),$patch:O,$reset:U,$subscribe(r,o={}){const v=A(d,r,o.detached,()=>k()),k=i.run(()=>ct(()=>e.state.value[t],P=>{(o.flush==="sync"?m:h)&&r({storeId:t,type:w.direct,events:g},P)},S({},y,o)));return v},$dispose:X},l=rt(Z);e._s.set(t,l);const _=e._e.run(()=>(i=x(),i.run(()=>s())));for(const r in _){const o=_[r];if(I(o)&&!vt(o)||F(o))u||(p&&bt(o)&&(I(o)?o.value=p[r]:M(o,p[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const v=Y(r,o);_[r]=v,a.actions[r]=o}}return S(l,_),S(V(l),_),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{O(o=>{S(o,r)})}}),e._p.forEach(r=>{S(l,i.run(()=>r({store:l,app:e._a,pinia:e,options:a})))}),p&&u&&n.hydrate&&n.hydrate(l.$state,p),h=!0,m=!0,l}function yt(t,s,n){let e,c;const u=typeof s=="function";typeof t=="string"?(e=t,c=u?n:s):(c=t,e=t.id);function i(a,y){const h=st();return a=a||h&&ot(H,null),a&&E(a),a=q,a._s.has(e)||(u?J(e,s,c,a):St(e,c,a)),a._s.get(e)}return i.$id=e,i}function Kt(t){{t=V(t);const s={};for(const n in t){const e=t[n];(I(e)||F(e))&&(s[n]=ut(t,n))}return s}}const gt="light",pt=!1,Ct=!0,_t=!0,kt=!1,Pt=!1,jt=!0,wt="#165DFF",It=220,Wt=!1,Et=2,Rt=!0,Mt=!0,Ft=[],Lt=!1,Ot=!0,At="fade-in",Dt="fade-out-right",xt=!1,Bt={theme:gt,colorWeak:pt,navbar:Ct,menu:_t,hideMenu:kt,menuCollapse:Pt,footer:jt,themeColor:wt,menuWidth:It,globalSettings:Wt,device:Et,tabBar:Rt,menuFromServer:Mt,serverMenu:Ft,showTabsPinIcon:Lt,translucent:Ot,openingAnimation:At,quitAnimation:Dt,animationSync:xt},K="config_store";let N=nt(K),{isDarkMode:Q}=et();const Nt=yt({id:K,state:()=>{let t=N.getCache("config")||Bt;return Vt(t),{...t}},actions:{updateMenuWidth(t){this.menuWidth=t},setDevice(t){this.device=t},setThemeColor(t){this.themeColor=t,D(t,Q.value)},updateColorWeek(t){this.colorWeak=t,$(t)},updateTranslucent(t){this.translucent=t,z(t)}}});function Qt(t){t.$subscribe((s,n)=>{N.setCache("config",n)},{detached:!0,immediate:!0})}function $(t){document.documentElement.style.filter=t?"invert(80%)":"none"}function z(t){t?document.body.removeAttribute("not-translucent"):document.body.setAttribute("not-translucent","")}function Vt(t){D(t.themeColor,Q.value),$(t.colorWeak),z(t.translucent)}export{Qt as a,Jt as c,yt as d,Kt as s,Nt as u};
