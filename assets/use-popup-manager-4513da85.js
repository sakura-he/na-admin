import{d as p,f as O,h as A,g as R,_ as D}from"./index-7598eee4.js";import{G as I,T as M,F as v,d as B,o as H,b as y,e as b,n as g,r as U,z as Y,u as w,al as k,am as V}from"./runtime-core.esm-bundler-bda9e85e.js";var _;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(_||(_={}));var C;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(C||(C={}));const l=e=>Boolean(e&&e.shapeFlag&1),s=(e,t)=>Boolean(e&&e.shapeFlag&6),$=(e,t)=>Boolean(e&&e.shapeFlag&8),c=(e,t)=>Boolean(e&&e.shapeFlag&16),N=(e,t)=>Boolean(e&&e.shapeFlag&32),f=e=>{var t,n;if(e)for(const r of e){if(l(r)||s(r))return r;if(c(r,r.children)){const o=f(r.children);if(o)return o}else if(N(r,r.children)){const o=(n=(t=r.children).default)==null?void 0:n.call(t);if(o){const i=f(o);if(i)return i}}else if(p(r)){const o=f(r);if(o)return o}}},F=e=>{if(!e)return!0;for(const t of e)if(t.children)return!1;return!0},G=(e,t)=>{if(e&&e.length>0)for(let n=0;n<e.length;n++){const r=e[n];if(l(r)||s(r)){const i=O(t)?t(r):t;return e[n]=I(r,i,!0),!0}const o=T(r);if(o&&o.length>0&&G(o,t))return!0}return!1},T=e=>{if(c(e,e.children))return e.children;if(p(e))return e},h=e=>{var t,n;if(l(e))return e.el;if(s(e)){if(((t=e.el)==null?void 0:t.nodeType)===1)return e.el;if((n=e.component)!=null&&n.subTree){const r=h(e.component.subTree);if(r)return r}}else{const r=T(e);return z(r)}},z=e=>{if(e&&e.length>0)for(const t of e){const n=h(t);if(n)return n}},d=(e,t=!1)=>{var n,r;const o=[];for(const i of e??[])l(i)||s(i)||t&&$(i,i.children)?o.push(i):c(i,i.children)?o.push(...d(i.children,t)):N(i,i.children)?o.push(...d((r=(n=i.children).default)==null?void 0:r.call(n),t)):p(i)&&o.push(...d(i,t));return o};function ee(e){function t(n){const r=[];return n.forEach(o=>{var i,u;M(o)&&o.type===v?N(o,o.children)?r.push(...t(((u=(i=o.children).default)==null?void 0:u.call(i))||[])):c(o,o.children)?r.push(...t(o.children)):A(o.children)&&r.push(o.children):r.push(o)}),r}return t(e)}const te=e=>{if(e)return O(e)?e:()=>e},L=(e,t)=>{var n;const r=[];if(s(e,e.type))e.type.name===t?e.component&&r.push(e.component.uid):(n=e.component)!=null&&n.subTree&&r.push(...L(e.component.subTree,t));else{const o=T(e);o&&r.push(...K(o,t))}return r},K=(e,t)=>{const n=[];if(e&&e.length>0)for(const r of e)n.push(...L(r,t));return n},m=()=>{},a=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),re=(()=>a?m:(e,t,n,r=!1)=>{e.addEventListener(t,n,r)})(),ne=(()=>a?m:(e,t,n,r=!1)=>{e.removeEventListener(t,n,r)})(),oe=e=>{const t=document.createElement("div");return t.setAttribute("class",`arco-overlay arco-overlay-${e}`),t},P=(e,t)=>{var n;return a?m():(n=(t??document).querySelector(e))!=null?n:void 0},ie=(e,t)=>{if(A(e)){const n=e[0]==="#"?`[id='${e.slice(1)}']`:e;return P(n,t)}return e},se=(e,t)=>{const n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return{top:n.top-r.top,bottom:r.bottom-n.bottom,left:n.left-r.left,right:r.right-n.right,width:n.width,height:n.height}},ue=e=>e.tagName==="BODY"?document.documentElement.scrollHeight>window.innerHeight:e.scrollHeight>e.offsetHeight,le=e=>e.tagName==="BODY"?window.innerWidth-(document.documentElement.offsetWidth||document.body.offsetWidth):e.offsetWidth-e.clientWidth,X=B({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:R("icon-hover")}}});function W(e,t,n,r,o,i){return H(),y("span",{class:g([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[b(e.$slots,"default")],2)}var ce=D(X,[["render",W]]);const Z=1e3,x=5e3,q=1;class j{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=t=>(t==="message"?Array.from(this.popupStack.message).pop()||x:Array.from(this.popupStack.popup).pop()||Z)+q,this.add=t=>{const n=this.getNextZIndex(t);return this.popupStack[t].add(n),t==="dialog"&&this.popupStack.popup.add(n),n},this.delete=(t,n)=>{this.popupStack[n].delete(t),n==="dialog"&&this.popupStack.popup.delete(t)},this.isLastDialog=t=>this.popupStack.dialog.size>1?t===Array.from(this.popupStack.dialog).pop():!0}}const E=new j;function fe(e,{visible:t,runOnMounted:n}={}){const r=U(0),o=()=>{r.value=E.add(e)},i=()=>{E.delete(r.value,e)},u=()=>e==="dialog"?E.isLastDialog(r.value):!1;return Y(()=>t==null?void 0:t.value,S=>{S?o():i()},{immediate:!0}),n&&(w(()=>{o()}),k(()=>{i()})),{zIndex:V(r),open:o,close:i,isLastDialog:u}}export{ce as I,ne as a,fe as b,oe as c,f as d,se as e,le as f,te as g,ie as h,ue as i,d as j,z as k,F as l,G as m,K as n,re as o,ee as u};
