import{u as C,_ as y}from"./chart-option-3cbf539c.js";import{d as I,r as d,n as k,Q as c,V as W,o as $,s as R,i as u,_ as A}from"./index-30c7a380.js";import{d as H,u as O,b as S,i as T,c as U,a as j}from"./install-32865521.js";import{i as w}from"./install-da14b91a.js";import{i as B}from"./installSVGRenderer-11425ce8.js";import"./LegendVisualProvider-3935ed15.js";import"./labelGuideHelper-b5c36f4b.js";import"./createSeriesDataSimply-e2b30047.js";const D=I({__name:"ChartSource",setup(P){let{delay:p,execDebounce:G}=H();p.value=150;let s=d(!1),e=d();k(()=>{s.value=!0});let h=a=>{e.value=a};O([B,S,T,U,w,j]);let t=0,l=C(a=>({color:Object.values(a?c(4).dark:c(4).light),backgroundColor:"",tooltip:{position:(r,o,i,L,{viewSize:n})=>{let _=i.offsetWidth,f=i.offsetHeight,b=n[0],g=n[1],v=b/2-_/2,x=g/2-f/2;return{left:v,top:x}},padding:0,formatter:"{c} <br /> {d}% ",confine:!0,borderWidth:0,trigger:"item",backgroundColor:"rgba(0,0,0,0)",className:"chart-source"},dataset:{source:[["source","value"],["百度",25],["Youtube",29],["哔哩哔哩",25],["Github",22],["谷歌",28],["4chan",24],["贴吧",23],["推特",17],["微信",21],["Telegram",18]]},series:[{name:"平台",type:"pie",label:{show:!0,formatter:`{c} 
 {d}%`},itemStyle:{borderRadius:8,borderColor:"rgba(255,255,255,0.8)",borderWidth:4},emphasis:{label:{fontWeight:"bold"}},radius:["30%","70%"]}]})),m=setInterval(()=>{var o;let r=(o=l.value.dataset.source)==null?void 0:o.length;s.value&&e.value&&(e.value.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t}),++t>=r-1&&(t=0),e.value.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t}),e.value.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t}))},1500);return W(()=>{clearInterval(m)}),(a,r)=>($(),R(y,{"init-options":{renderer:"svg"},class:"chart",option:u(l),onUpdateRef:u(h)},null,8,["option","onUpdateRef"]))}});const K=A(D,[["__scopeId","data-v-3b448171"]]);export{K as default};