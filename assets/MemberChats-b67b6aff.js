import{d as y,u as z,bH as M,b as C,c as D,i as $,a as g,bI as S}from"./install-32865521.js";import{d as k,ad as u,aD as I,r as d,n as R,U as B,m as O,V as A,o as p,c as E,i as l,s as H,t as N,_ as T}from"./index-30c7a380.js";import{i as U}from"./install-a604285a.js";import{i as V}from"./install-da14b91a.js";import{i as j}from"./install-5c759dd8.js";import{i as F}from"./install-b12250fe.js";import{i as L}from"./install-32c4c6d1.js";import{i as P}from"./install-9ab2b4c9.js";import"./LegendVisualProvider-3935ed15.js";import"./labelGuideHelper-b5c36f4b.js";import"./createSeriesDataSimply-e2b30047.js";import"./axisAlignTicks-d627e083.js";const W={class:"container tw-w-full tw-h-40 tw-relative"},q=k({__name:"MemberChats",props:{data:null},setup(f){const m=f;u.extend(I);let n=d(!1),{delay:h,execDebounce:b}=y();h.value=150,z([V,C,D,j,$,U,F,g,L,P]),R(()=>{n.value=!0});let r=!1,v=d(),i,_=a=>{r=!1,a&&(v.value=a,i=S({el:a.$el,observer:()=>{b({callback:()=>{r&&a.resize(),r=!0}})}}).stopObserver)},w=B(()=>{let a=m.data.map(e=>[e.date,e.done,e.undone,e.new_work,e.done+e.undone]);return a.unshift(["工作日期","已完成","未完成","新开启","总任务"]),a}),o=O({legend:{right:"5%",width:"50%",itemWidth:10,itemHeight:10,borderRadius:3,backgroundColor:"rgba(0,0,0,0.1)",zlevel:1,data:[{name:"已完成",icon:"circle",textStyle:{fontSize:8}},{name:"未完成",icon:"circle",textStyle:{fontSize:8}},{name:"新开启",textStyle:{fontSize:8}}]},tooltip:{className:"tooltip",confine:!0},dataset:{source:w.value},grid:{containLabel:!0,top:10,left:0,right:0,bottom:0},xAxis:{type:"category"},yAxis:{type:"value"},series:[{type:"line",name:"已完成",label:{show:!1},emphasis:{focus:"series",label:{show:!0}}},{type:"line",name:"未完成",zlevel:1,emphasis:{focus:"series"}},{type:"line",name:"新开启",emphasis:{focus:"series"}}]}),c;c=setInterval(()=>{let a=o.dataset.source;a=a.map((e,t)=>{if(e.index!==0){let s=u(e[0],"MM-DD");s=s.add(1,"day"),e[0]=s.format("MM-DD"),e[1]=e[1]+1,e[2]=e[2]+1,e[3]=e[3]+1}return e}),o.dataset.source=a},5e3);let x=a=>{o.series.forEach((t,s)=>{t.zlevel&&(t.zlevel=0),t.label&&(t.label={...t.label,show:!1}),s===a.seriesIndex&&(t.zlevel=99,t.label?t.label.show=!0:t.label={show:!0})})};return A(()=>{clearInterval(c),i()}),(a,e)=>(p(),E("div",W,[l(n)?(p(),H(l(M),{key:0,class:"chart tw-w-full tw-h-40 tw-relative",option:l(o),ref:l(_),onMousemove:l(x)},null,8,["option","onMousemove"])):N("",!0)]))}});const oe=T(q,[["__scopeId","data-v-5a717e14"]]);export{oe as default};
