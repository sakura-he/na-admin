import"./index-89a35e88.js";import{u as Q,S as W,M as $}from"./index-6a9678e5.js";import{f as X,C as Y,g as Z,h as ee}from"./index-12df82a4.js";import"./index-a199ff2b.js";import{F as te,a as oe}from"./index-210c973b.js";import{C as ne,a as se}from"./index-2f73147a.js";import{B as le}from"./index-1f7fdb4f.js";import{H as ae}from"./constant-ac341157.js";import{e as V,d as re,r as ie,h as _,o as c,f as R,j as i,b as e,w as o,F as ue,l as ce,J as t,i as f,C as b,k as w,D as me,H as de,I as pe}from"./runtime-core.esm-bundler-a91919e4.js";import{_ as _e}from"./index-794c3e2e.js";import{a as fe,u as we}from"./vue-router-daf9fad1.js";import{C as ge}from"./ColorModeSwitch-bd03cc68.js";import{P as ve}from"./PageTransition-d67aa33c.js";import{_ as xe}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-f055002a.js";import"./useColorMode-0c4a1808.js";import"./themeColor-47076d31.js";import"./_commonjsHelpers-28e086c5.js";import"./runtime-dom.esm-bundler-a8993a42.js";import"./type-7367f36a.js";import"./use-popup-manager-b0a74f9a.js";import"./icon-hover-5bc5ec0c.js";import"./index-b1897549.js";import"./use-teleport-container-7d168d59.js";import"./index-f8ef3c76.js";import"./index-f80dd593.js";import"./get-value-by-path-5cacc656.js";import"./index-6e24339b.js";import"./use-children-components-4221785c.js";import"./index-fad9db6b.js";/* empty css              */import"./index-41371ea5.js";import"./index-b5160815.js";const he="/assets/login1-7fe3f35c.jpg",ye="/assets/login2-7f4a3a36.jpg",be="/assets/login3-69dc1b81.jpg";function Ce(l){let a=V(l);return{loading:a,setLoading:p=>{a.value=p},toggle:()=>{a.value=!a.value}}}function ke(l){l=l||{interval:1e3,end:0};let a=V(l.end),u;function x(m){console.log(m),!u&&(a.value=m,u=setInterval(()=>{a.value--,a.value<=l.end&&(a.value=l.end,clearInterval(u),u=void 0)},l.interval))}function p(){clearInterval(u),u=void 0,a.value=l.end}function C(m){a.value=m}return{count:a,start:x,reset:p,setCount:C}}const B=l=>(de("data-v-ad4c42a5"),l=l(),pe(),l),Ve={class:"container"},Ie={class:"tw-fixed tw-z-40 tw-top-5 tw-left-5"},Le={class:"banner"},Se=["src"],Ue={class:"content"},$e={class:"form tw-w-11/12 tw-pointer-events-auto tw-mx-auto sm:tw-max-w-[340px] tw-py-10 tw-px-6 tw-box-border tw-bg-fill-transparent-2 tw-rounded tw-backdrop-blur-[20px] md:tw-mr-[10%]"},Re=B(()=>i("div",{class:"tw-mb-4"},[i("div",{class:"login__title tw-text-c-1 tw-text-title-3 tw-leading-snug tw-select-none tw-pb-2"},"Nest Arco Admain"),i("div",{class:"login__sub-title tw-text-c-2 tw-text-body-3 tw-leading-tight tw-select-none tw-pb-2"}," 欢迎使用"),i("div",{class:"login__err-msg"})],-1)),Be=B(()=>i("span",{class:"tw-text-body-3 tw-text-c-1"},"其他登录方式:",-1)),Fe=re({__name:"Login",setup(l){let a=Q(),u=fe(),x=we(),{loading:p,setLoading:C}=Ce(!1),{count:m,start:F,reset:je,setCount:Me}=ke({end:0,interval:1e3}),d=V(0);const j=[he,ye,be],M=h=>{};let r=ie({username:"",userpw:"",agree:!1,isRemenber:!1});function v(h){d.value=h}function I(){p.value||(C(!0),a.login({username:r.username,password:r.userpw}).then(()=>{x.query.toUrl?($.success("登录成功!正在跳转登录前的页面"),u.replace({path:x.query.toUrl})):($.success("欢迎使用"),u.replace({name:ae,replace:!0}))}).catch(h=>{console.log(h)}).finally(()=>{C(!1)}))}function N(){m.value<=0&&F(60)}return(h,n)=>{const y=le,P=se,T=ne,L=_("icon-user"),k=X,g=oe,D=_("icon-lock"),H=Z,q=Y,S=te,U=_("icon-mobile"),z=_("icon-message"),A=ee,E=_("icon-wechat"),G=_("icon-github"),J=_("icon-google"),O=_("icon-twitter"),K=W;return c(),R("div",Ve,[i("div",Ie,[e(ge,{ref:"ColorModeSwitchRef"},{default:o(s=>[e(y,{shape:"circle"},{default:o(()=>[e(_e,{icon:s.icon,class:"tw-text-title-1"},null,8,["icon"])]),_:2},1024)]),_:1},512)]),i("div",Le,[e(T,{class:"swiper","default-current":2,onChange:M,"indicator-type":"slider","auto-play":!0,"show-arrow":"never"},{default:o(()=>[(c(),R(ue,null,ce(j,s=>e(P,{class:"swiper__item"},{default:o(()=>[i("img",{src:s,style:{width:"100%",height:"100%",objectFit:"cover"}},null,8,Se)]),_:2},1024)),64))]),_:1})]),i("div",Ue,[i("div",$e,[Re,e(ve,{"in-name":"fade-in","out-name":"fade-out",mode:"out-in"},{default:o(()=>[t(d)===0?(c(),f(S,{key:0,layout:"vertical",model:t(r),class:"login__form"},{default:o(()=>[e(g,{field:"11"},{default:o(()=>[e(k,{modelValue:t(r).username,"onUpdate:modelValue":n[0]||(n[0]=s=>t(r).username=s),placeholder:"用户名",id:"username"},{prefix:o(()=>[e(L)]),_:1},8,["modelValue"])]),_:1}),e(g,{field:"post"},{default:o(()=>[e(H,{modelValue:t(r).userpw,"onUpdate:modelValue":n[1]||(n[1]=s=>t(r).userpw=s),placeholder:"密码"},{prefix:o(()=>[e(D)]),_:1},8,["modelValue"])]),_:1}),e(g,{field:"isRemenber"},{default:o(()=>[e(q,{modelValue:t(r).isRemenber,"onUpdate:modelValue":n[2]||(n[2]=s=>t(r).isRemenber=s)},{default:o(()=>[b("记住密码")]),_:1},8,["modelValue"]),e(y,{"html-type":"submit",class:"tw-ml-auto",type:"text",size:"mini"},{default:o(()=>[b(" 忘记密码 ")]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(y,{"html-type":"submit",long:"",type:"primary",onClick:I,loading:t(p)},{default:o(()=>[b(" 登录 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])):w("",!0),t(d)===1?(c(),f(S,{key:1,layout:"vertical",model:t(r),class:"login__form"},{default:o(()=>[e(g,{field:"11"},{default:o(()=>[e(k,{modelValue:t(r).username,"onUpdate:modelValue":n[3]||(n[3]=s=>t(r).username=s),placeholder:"手机号",id:"username"},{prefix:o(()=>[e(U)]),_:1},8,["modelValue"])]),_:1}),e(g,{field:"post"},{default:o(()=>[e(A,{class:"tw-w-full"},{default:o(()=>[e(k,{modelValue:t(r).userpw,"onUpdate:modelValue":n[4]||(n[4]=s=>t(r).userpw=s),placeholder:"验证码"},{prefix:o(()=>[e(z)]),_:1},8,["modelValue"]),e(y,{loading:t(p),onClick:N,disabled:t(m)!=0},{default:o(()=>[b(me(t(m)===0?"获取验证码":`${t(m)} 秒后重试`),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(y,{"html-type":"submit",long:"",type:"primary",onClick:I,loading:t(p)},{default:o(()=>[b(" 手机号登录 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])):w("",!0)]),_:1}),i("div",null,[e(K,{class:"tw-text-[20px] tw-text-c-2"},{default:o(()=>[Be,t(d)!==0?(c(),f(L,{key:0,class:"hover:tw-text-p-6 hover:tw-cursor-pointer",onClick:n[5]||(n[5]=s=>v(0))})):w("",!0),t(d)!==1?(c(),f(U,{key:1,class:"hover:tw-text-p-6 hover:tw-cursor-pointer",onClick:n[6]||(n[6]=s=>v(1))})):w("",!0),t(d)!==2?(c(),f(E,{key:2,class:"hover:tw-text-p-6 hover:tw-cursor-pointer",onClick:n[7]||(n[7]=s=>v(2))})):w("",!0),t(d)!==3?(c(),f(G,{key:3,class:"hover:tw-text-p-6 hover:tw-cursor-pointer",onClick:n[8]||(n[8]=s=>v(3))})):w("",!0),t(d)!==4?(c(),f(J,{key:4,class:"hover:tw-text-p-6 hover:tw-cursor-pointer",onClick:n[9]||(n[9]=s=>v(4))})):w("",!0),t(d)!==5?(c(),f(O,{key:5,class:"hover:tw-text-p-6 hover:tw-cursor-pointer",onClick:n[10]||(n[10]=s=>v(5))})):w("",!0)]),_:1})])])])])}}});const ft=xe(Fe,[["__scopeId","data-v-ad4c42a5"]]);export{ft as default};
