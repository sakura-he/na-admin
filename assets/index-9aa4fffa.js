import{g as _,e as M,_ as A,s as k,a as E}from"./index-7598eee4.js";import{S as z}from"./index.es-3fa571bb.js";import{j as O}from"./use-popup-manager-4513da85.js";import{d as b,t as P,c as g,j as T,p as D,a as n,x as j,u as G,o as I,b as K,e as N,n as R}from"./runtime-core.esm-bundler-bda9e85e.js";const p=Symbol("ArcoCard");var $=b({name:"Card",components:{Spin:z},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(t,{slots:e}){const a=_("card"),{size:l}=P(t),{mergedSize:c}=M(l),d=g(()=>c.value==="small"||c.value==="mini"?"small":"medium"),u=r=>{const i=O(r);return n("div",{class:`${a}-actions`},[n("div",{class:`${a}-actions-right`},[i.map((o,m)=>n("span",{key:`action-${m}`,class:`${a}-actions-item`},[o]))])])},s=T({hasMeta:!1,hasGrid:!1,slots:e,renderActions:u});D(p,s);const v=g(()=>[a,`${a}-size-${d.value}`,{[`${a}-loading`]:t.loading,[`${a}-bordered`]:t.bordered,[`${a}-hoverable`]:t.hoverable,[`${a}-contain-grid`]:s.hasGrid}]);return()=>{var r,i,o,m,x,C,S;const f=Boolean((r=e.title)!=null?r:t.title),B=Boolean((i=e.extra)!=null?i:t.extra);return n("div",{class:v.value},[(f||B)&&n("div",{class:[`${a}-header`,{[`${a}-header-no-title`]:!f}],style:t.headerStyle},[f&&n("div",{class:`${a}-header-title`},[(m=(o=e.title)==null?void 0:o.call(e))!=null?m:t.title]),B&&n("div",{class:`${a}-header-extra`},[(C=(x=e.extra)==null?void 0:x.call(e))!=null?C:t.extra])]),e.cover&&n("div",{class:`${a}-cover`},[e.cover()]),n("div",{class:`${a}-body`,style:t.bodyStyle},[t.loading?n(z,null,null):(S=e.default)==null?void 0:S.call(e),e.actions&&!s.hasMeta&&u(e.actions())])])}}}),h=b({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(t,{slots:e}){const a=_("card-meta"),l=j(p);return G(()=>{l&&(l.hasMeta=!0)}),()=>{var c,d,u,s,v,r;const i=Boolean((c=e.title)!=null?c:t.title),o=Boolean((d=e.description)!=null?d:t.description);return n("div",{class:a},[(i||o)&&n("div",{class:`${a}-content`},[i&&n("div",{class:`${a}-title`},[(s=(u=e.title)==null?void 0:u.call(e))!=null?s:t.title]),o&&n("div",{class:`${a}-description`},[(r=(v=e.description)==null?void 0:v.call(e))!=null?r:t.description])]),(e.avatar||(l==null?void 0:l.slots.actions))&&n("div",{class:[`${a}-footer `,{[`${a}-footer-only-actions`]:!e.avatar}]},[e.avatar&&n("div",{class:`${a}-avatar`},[e.avatar()]),l&&l.slots.actions&&l.renderActions(l.slots.actions())])])}}});const V=b({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(t){const e=_("card-grid"),a=j(p);return G(()=>{a&&(a.hasGrid=!0)}),{cls:g(()=>[e,{[`${e}-hoverable`]:t.hoverable}])}}});function q(t,e,a,l,c,d){return I(),K("div",{class:R(t.cls)},[N(t.$slots,"default")],2)}var y=A(V,[["render",q]]);const L=Object.assign($,{Meta:h,Grid:y,install:(t,e)=>{k(t,e);const a=E(e);t.component(a+$.name,$),t.component(a+h.name,h),t.component(a+y.name,y)}});export{L as C,y as a};
