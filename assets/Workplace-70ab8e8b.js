import{r as x,U as S,ae as ue,f as pe,al as he,ac as ye,d as H,am as be,an as $e,ao as Ce,a4 as me,X as oe,ap as ke,ab as xe,Z as fe,n as Ie,g as j,o as r,c as i,a as n,w as l,b as o,h as g,F as T,a1 as z,t as $,a0 as Y,O as Se,m as V,aq as ze,ar as Pe,e as F,a9 as ve,aa as we,as as Oe,v as k,ag as ge,aj as Ae,D as ne,i as O,s as ee,q as B,at as Ee,p as je,k as Fe,_ as Le}from"./index-30c7a380.js";import{C as Te,a as Me}from"./index-47b8ec4e.js";/* empty css              */import{C as Re,a as We}from"./index-2cc2837c.js";import{P as Ne}from"./index-55a812ef.js";import Be from"./MemberChats-b67b6aff.js";import De from"./StatisticalChat-7a9c01a4.js";import{u as Ue}from"./useRequest-f6a5308e.js";import"./install-32865521.js";import"./install-a604285a.js";import"./install-da14b91a.js";import"./LegendVisualProvider-3935ed15.js";import"./labelGuideHelper-b5c36f4b.js";import"./createSeriesDataSimply-e2b30047.js";import"./install-5c759dd8.js";import"./axisAlignTicks-d627e083.js";import"./install-b12250fe.js";import"./install-32c4c6d1.js";import"./install-9ab2b4c9.js";import"./installLabelLayout-689e5b3f.js";import"./universalTransition-abdfae02.js";const Ge=({itemRef:e,selector:t,index:a,parentClassName:v})=>{const m=x(-1),_=S(()=>{var s;return(s=a==null?void 0:a.value)!=null?s:m.value}),w=x(),b=()=>{var s,f,u;let c=(f=(s=e.value)==null?void 0:s.parentElement)!=null?f:void 0;if(v)for(;c&&!c.className.includes(v);)c=(u=c.parentElement)!=null?u:void 0;return c},d=()=>{if(ye(a==null?void 0:a.value)&&w.value&&e.value){const s=Array.from(w.value.querySelectorAll(t)).indexOf(e.value);s!==m.value&&(m.value=s)}};return ue(e,()=>{e.value&&!w.value&&(w.value=b())}),pe(()=>{e.value&&(w.value=b()),d()}),he(()=>d()),{computedIndex:_}},_e=Symbol("ArcoAvatarGroup");var Ve=Object.defineProperty,re=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,le=(e,t,a)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ie=(e,t)=>{for(var a in t||(t={}))qe.call(t,a)&&le(e,a,t[a]);if(re)for(var a of re(t))He.call(t,a)&&le(e,a,t[a]);return e};const Xe=H({name:"Avatar",components:{ResizeObserver:be,IconImageClose:$e,IconLoading:Ce},props:{shape:{type:String,default:"circle"},imageUrl:String,size:Number,autoFixFontSize:{type:Boolean,default:!0},triggerType:{type:String,default:"button"},triggerIconStyle:{type:Object}},emits:{click:e=>!0,error:()=>!0,load:()=>!0},setup(e,{slots:t,emit:a,attrs:v}){const{shape:m,size:_,autoFixFontSize:w,triggerType:b,triggerIconStyle:d}=me(e),s=oe("avatar"),f=ke(_e,void 0),u=x(),c=x(),A=S(()=>{var p;return(p=f==null?void 0:f.shape)!=null?p:m.value}),h=S(()=>{var p;return(p=f==null?void 0:f.size)!=null?p:_.value}),M=S(()=>{var p;return(p=f==null?void 0:f.autoFixFontSize)!=null?p:w.value}),L=x(!1),D=x(!1),U=x(!0),G=x(!1),R=f?Ge({itemRef:u,selector:`.${s}`}).computedIndex:x(-1),X=S(()=>{var p;const E=xe(h.value)?{width:`${h.value}px`,height:`${h.value}px`,fontSize:`${h.value/2}px`}:{};return f&&(E.zIndex=f.zIndexAscend?R.value+1:f.total-R.value,E.marginLeft=R.value!==0?`-${((p=h.value)!=null?p:40)/4}px`:"0"),E}),K=Ke({triggerIconStyle:d==null?void 0:d.value,inlineStyle:v.style,triggerType:b.value}),W=()=>{!L.value&&!e.imageUrl&&Ie(()=>{var p;if(!c.value||!u.value)return;const E=c.value.clientWidth,N=(p=h.value)!=null?p:u.value.offsetWidth,se=N/(E+8);N&&se<1&&(c.value.style.transform=`scale(${se}) translateX(-50%)`),U.value=!0})};pe(()=>{var p;(p=c.value)!=null&&p.firstElementChild&&["IMG","PICTURE"].includes(c.value.firstElementChild.tagName)&&(L.value=!0),M.value&&W()}),ue(_,()=>{M.value&&W()});const Z=S(()=>[s,`${s}-${A.value}`]),J=S(()=>L.value||e.imageUrl?`${s}-image`:`${s}-text`);return{prefixCls:s,itemRef:u,cls:Z,outerStyle:X,wrapperRef:c,wrapperCls:J,computedTriggerIconStyle:K,isImage:L,shouldLoad:U,isLoaded:G,hasError:D,onClick:p=>{a("click",p)},handleResize:()=>{M.value&&W()},handleImgLoad:()=>{G.value=!0,a("load")},handleImgError:()=>{D.value=!0,a("error")}}}}),Ke=({triggerType:e,inlineStyle:t={},triggerIconStyle:a={}})=>{let v={};return e==="button"&&(!a||a&&!a.color)&&t&&t.backgroundColor&&(v={color:t.backgroundColor}),ie(ie({},a),v)},Ze=["src"];function Je(e,t,a,v,m,_){const w=j("IconImageClose"),b=j("IconLoading"),d=j("resize-observer");return r(),i("div",{ref:"itemRef",style:Y(e.outerStyle),class:g([e.cls,{[`${e.prefixCls}-with-trigger-icon`]:!!e.$slots["trigger-icon"]}]),onClick:t[2]||(t[2]=(...s)=>e.onClick&&e.onClick(...s))},[n(d,{onResize:e.handleResize},{default:l(()=>[o("span",{ref:"wrapperRef",class:g(e.wrapperCls)},[e.imageUrl?(r(),i(T,{key:0},[e.hasError?z(e.$slots,"error",{key:0},()=>[o("div",{class:g(`${e.prefixCls}-image-icon`)},[n(w)],2)]):$("v-if",!0),!(e.hasError||!e.shouldLoad)&&!e.isLoaded?z(e.$slots,"default",{key:1},()=>[o("div",{class:g(`${e.prefixCls}-image-icon`)},[n(b)],2)]):$("v-if",!0),e.hasError||!e.shouldLoad?$("v-if",!0):(r(),i("img",{key:2,src:e.imageUrl,style:Y({width:e.size+"px",height:e.size+"px"}),alt:"avatar",onLoad:t[0]||(t[0]=(...s)=>e.handleImgLoad&&e.handleImgLoad(...s)),onError:t[1]||(t[1]=(...s)=>e.handleImgError&&e.handleImgError(...s))},null,44,Ze))],64)):z(e.$slots,"default",{key:1})],2)]),_:3},8,["onResize"]),e.$slots["trigger-icon"]?(r(),i("div",{key:0,class:g(`${e.prefixCls}-trigger-icon-${e.triggerType}`),style:Y(e.computedTriggerIconStyle)},[z(e.$slots,"trigger-icon")],6)):$("v-if",!0)],6)}var q=fe(Xe,[["render",Je]]);const te=H({name:"AvatarGroup",props:{shape:{type:String,default:"circle"},size:Number,autoFixFontSize:{type:Boolean,default:!0},maxCount:{type:Number,default:0},zIndexAscend:{type:Boolean,default:!1},maxStyle:{type:Object},maxPopoverTriggerProps:{type:Object}},setup(e,{slots:t}){const{shape:a,size:v,autoFixFontSize:m,zIndexAscend:_}=me(e),w=oe("avatar-group"),b=x(0);return Se(_e,V({shape:a,size:v,autoFixFontSize:m,zIndexAscend:_,total:b})),()=>{var d,s;const f=ze((s=(d=t.default)==null?void 0:d.call(t))!=null?s:[]),u=e.maxCount>0?f.slice(0,e.maxCount):f,c=e.maxCount>0?f.slice(e.maxCount):[];return b.value!==u.length&&(b.value=u.length),n("div",{class:w},[u,c.length>0&&n(Pe,e.maxPopoverTriggerProps,{default:()=>[n(q,{class:`${w}-max-count-avatar`,style:e.maxStyle},{default:()=>[F("+"),c.length]})],content:()=>n("div",null,[c])})])}}}),Qe=Object.assign(q,{Group:te,install:(e,t)=>{ve(e,t);const a=we(t);e.component(a+q.name,q),e.component(a+te.name,te)}});function Ye(e,t,a){return S(()=>!!(e[a]||t[a]))}var et=Object.defineProperty,de=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,ce=(e,t,a)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ot=(e,t)=>{for(var a in t||(t={}))tt.call(t,a)&&ce(e,a,t[a]);if(de)for(var a of de(t))at.call(t,a)&&ce(e,a,t[a]);return e};const st=H({name:"Comment",props:{author:{type:String},avatar:{type:String},content:{type:String},datetime:{type:String},align:{type:[String,Object],default:"left"}},setup(e,{slots:t}){const a=oe("comment"),[v,m,_,w]=["author","avatar","content","datetime"].map(d=>Ye(e,t,d)),b=S(()=>{const{align:d}=e;return ot({},Oe(d)?{datetime:d,actions:d}:d)});return{prefixCls:a,hasAuthor:v,hasAvatar:m,hasContent:_,hasDatetime:w,computedAlign:b}}}),nt=["src"],rt={key:0},lt={key:0},it={key:0};function dt(e,t,a,v,m,_){return r(),i("div",{class:g(e.prefixCls)},[e.hasAvatar?(r(),i("div",{key:0,class:g(`${e.prefixCls}-avatar`)},[e.avatar?(r(),i("img",{key:0,src:e.avatar,alt:"comment-avatar"},null,8,nt)):z(e.$slots,"avatar",{key:1})],2)):$("v-if",!0),o("div",{class:g(`${e.prefixCls}-inner`)},[o("div",{class:g(`${e.prefixCls}-inner-content`)},[e.hasAuthor||e.hasDatetime?(r(),i("div",{key:0,class:g(`${e.prefixCls}-title ${e.prefixCls}-title-align-${e.computedAlign.datetime}`)},[e.hasAuthor?(r(),i("span",{key:0,class:g(`${e.prefixCls}-author`)},[e.author?(r(),i("span",rt,k(e.author),1)):z(e.$slots,"author",{key:1})],2)):$("v-if",!0),e.hasDatetime?(r(),i("span",{key:1,class:g(`${e.prefixCls}-datetime`)},[e.datetime?(r(),i("span",lt,k(e.datetime),1)):z(e.$slots,"datetime",{key:1})],2)):$("v-if",!0)],2)):$("v-if",!0),e.hasContent?(r(),i("div",{key:1,class:g(`${e.prefixCls}-content`)},[e.content?(r(),i("span",it,k(e.content),1)):z(e.$slots,"content",{key:1})],2)):$("v-if",!0),e.$slots.actions?(r(),i("div",{key:2,class:g(`${e.prefixCls}-actions ${e.prefixCls}-actions-align-${e.computedAlign.actions}`)},[z(e.$slots,"actions")],2)):$("v-if",!0)],2),e.$slots.default?(r(),i("div",{key:0,class:g(`${e.prefixCls}-inner-comment`)},[z(e.$slots,"default")],2)):$("v-if",!0)],2)],2)}var ae=fe(st,[["render",dt]]);const ct=Object.assign(ae,{install:(e,t)=>{ve(e,t);const a=we(t);e.component(a+ae.name,ae)}});function ut(){return ge("api/workplace/index",{method:"get"})}function pt(e){return ge("api/workplace/member",{method:"get",params:{page:e}})}const C=e=>(je("data-v-4d0a6a1a"),e=e(),Fe(),e),mt={class:"page tw-break-all"},ft={class:"tw-mb-2 tw-break-words"},vt={class:"tw-flex tw-items-center"},wt=C(()=>o("div",null,[o("p",{class:"tw-text-title-2 tw-mb-1"},"欢迎回来:Admin"),o("p",{class:"tw-text-body-3"},"里卡尔瓦的方法地方开发撒旦发生")],-1)),gt={class:"tw-flex tw-ml-auto tw-h-full"},_t={class:"tw-mx-2 tw-h-full tw-self-start tw-flex tw-flex-col tw-items-end tw-justify-between"},ht=C(()=>o("span",{class:"tw-text-body-1 tw-mb-1"},"进行中",-1)),yt={class:"tw-text-title-2"},bt={class:"tw-mx-2 tw-h-full tw-self-start tw-flex tw-flex-col tw-items-end tw-justify-between"},$t=C(()=>o("span",{class:"tw-text-body-1 tw-mb-1"},"已完成",-1)),Ct={class:"tw-text-title-2"},kt={class:"tw-mx-2 tw-h-full tw-self-start tw-flex tw-flex-col tw-items-end tw-justify-between"},xt=C(()=>o("span",{class:"tw-text-body-1 tw-mb-1"},"未完成",-1)),It={class:"tw-text-title-2"},St={class:"overview -tw-mx-1 lg:tw-flex"},zt={class:"ow__content tw-mx-1 tw-flex-auto tw-min-w-0 tw-mb-2"},Pt=C(()=>o("div",null,"成员数据",-1)),Ot=["onClick"],At={class:"tw-flex tw-items-center"},Et={class:"tw-text-body-3"},jt={key:0,class:"tw-text-body-3"},Ft=C(()=>o("span",null,"最新动态",-1)),Lt={class:"action",key:"heart"},Tt={class:"action",key:"star"},Mt={class:"action",key:"reply"},Rt=C(()=>o("img",{alt:"avatar",src:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"},null,-1)),Wt={class:"ow__right lg:tw-basis-[340px] tw-shrink-0 tw-min-w-[0] lg:tw-block tw-mx-1 tw-flex-wrap"},Nt=C(()=>o("span",null,"快捷入口",-1)),Bt={class:"tw-grid md:tw-grid-cols-6 lg:tw-grid-cols-4 tw-grid-cols-4 tw-grid-flow-row tw-gap-x-3"},Dt={class:"tw-mt-3 tw-text-center tw-rounded-sm tw-transi hover:tw-shadow-sm tw-cursor-pointer"},Ut={class:"tw-py-2 tw-text-title-1"},Gt=C(()=>o("p",{class:"tw-pb-2 tw-text-body-2"},"快捷路径",-1)),Vt=["src"],qt=C(()=>o("span",null,"公告",-1)),Ht={class:"tw-flex tw-items-center [&:not(:first-child)]:tw-mt-4"},Xt=C(()=>o("div",{class:"tw-flex-1 tw-min-w-0 tw-ml-2"},[o("div",{class:"tw-w-full tw-truncate"},"这是通知内容这是通知内容这是通知内容这是通知内容这是通知内容这是通知内容")],-1)),Kt=C(()=>o("span",null,"统计",-1)),Zt=H({__name:"Workplace",setup(e){const t=["blue","red","orange","lime","cyan","gold","green","orangered","arcoblue","purple","pinkpurple","magenta","gray"],a=["https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp","https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp","https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp"];let v=V({}),m=x(1),_=V({}),{loading:w,run:b}=Ue(ut);b().then(u=>{console.log(u),Object.keys(u.data).forEach(c=>{_[c]=u.data[c]})});let d=V(new Map),s=S(()=>{let u=v.page_num;return d.get(m.value)||d.set(m.value,new Array(u).fill(!1)),d.get(m.value)});pt(m.value).then(u=>{let c=u.data;Object.keys(c).forEach(A=>{console.log(c),v[A]=c[A]})});function f(u){d.get(m.value)&&(d.get(m.value)[u]=!d.get(m.value)[u])}return(u,c)=>{const A=Qe,h=Re,M=Ne,L=j("icon-swap"),D=We,U=j("IconHeart"),G=j("IconStar"),R=j("IconMessage"),X=ct,K=j("icon-plus"),W=Te,Z=Me,J=Ee,Q=Ae("loading");return r(),i("div",mt,[ne((r(),i("div",ft,[n(h,{bordered:!1,hoverable:"",class:"!tw-rounded-[4px]"},{default:l(()=>{var y,I,P,p,E,N;return[o("div",vt,[n(A,{size:60,class:"tw-mr-3"},{default:l(()=>[F(" Admin ")]),_:1}),wt,o("div",gt,[o("div",_t,[ht,o("span",yt,k(((I=(y=O(_).user)==null?void 0:y.work)==null?void 0:I.underway)||null)+" / 88",1)]),o("div",bt,[$t,o("span",Ct,k(((p=(P=O(_).user)==null?void 0:P.work)==null?void 0:p.done)||null)+" / 88",1)]),o("div",kt,[xt,o("span",It,k(((N=(E=O(_).user)==null?void 0:E.work)==null?void 0:N.undone)||null)+" / 88",1)])])])]}),_:1})])),[[Q,O(w)]]),o("div",St,[o("div",zt,[ne((r(),ee(h,{class:"!tw-rounded-[4px] tw-overflow-hidden tw-mb-2",bordered:!1,"header-style":{border:"none"}},{title:l(()=>[Pt]),extra:l(()=>[n(M,{total:50,size:"mini",simple:""})]),default:l(()=>[(r(!0),i(T,null,B(O(v).members??[],(y,I)=>(r(),ee(D,{key:I,hoverable:!0,style:{width:"25%"}},{default:l(()=>[n(h,{"header-style":{border:"none"},"body-style":{paddingTop:0},class:"card-demo",bordered:!1},{extra:l(()=>{var P;return[O(s)?(r(),i("span",{key:0,class:g(["tw-text-c-1 tw-transition-transform",(P=O(s))!=null&&P[I]?"tw-skew-x-3 tw-text-p-6":""]),onClick:p=>f(I)},[n(L)],10,Ot)):$("",!0)]}),title:l(()=>[o("div",At,[n(A,{size:30,class:"tw-mr-2"},{default:l(()=>[F(k(y.user),1)]),_:2},1024),o("div",Et,k(y.user),1)])]),default:l(()=>{var P;return[o("div",null,[(P=O(s))!=null&&P[I]?(r(),ee(Be,{key:1,data:y.work},null,8,["data"])):(r(),i("div",jt,[o("p",null,"已完成: "+k(y.today_work.done),1),o("p",null,"未完成: "+k(y.today_work.undone),1),o("p",null,"进行中: "+k(y.today_work.underway),1)]))])]}),_:2},1024)]),_:2},1024))),128))]),_:1})),[[Q,O(w)]]),n(h,{class:"!tw-rounded-[4px] tw-overflow-hidden",bordered:!1},{title:l(()=>[Ft]),default:l(()=>[o("div",null,[(r(),i(T,null,B(8,y=>n(X,{author:"Socrates",content:"Comment body content.",datetime:"1 hour"},{actions:l(()=>[o("span",Lt,[o("span",null,[n(U)]),F(" 11 ")]),o("span",Tt,[o("span",null,[n(G)]),F(" 11 ")]),o("span",Mt,[n(R),F(" Reply ")])]),avatar:l(()=>[n(A,{size:35},{default:l(()=>[Rt]),_:1})]),_:1})),64))])]),_:1})]),o("div",Wt,[n(h,{class:"tw-mb-2 tw-flex-auto tw-min-w-0 !tw-rounded-[4px]",bordered:!1,"body-style":{paddingTop:0}},{title:l(()=>[Nt]),default:l(()=>[o("div",Bt,[(r(),i(T,null,B(8,y=>o("div",Dt,[o("p",Ut,[n(K)]),Gt])),64))])]),_:1}),n(h,{class:"tw-mb-2 tw-overflow-hidden !tw-rounded-[4px]",bordered:!1,"body-style":{padding:0}},{default:l(()=>[n(Z,{class:"tw-w-full tw-h-40","default-current":2},{default:l(()=>[(r(),i(T,null,B(a,y=>n(W,{class:"tw-w-full"},{default:l(()=>[o("img",{src:y,class:"tw-w-full tw-h-40"},null,8,Vt)]),_:2},1024)),64))]),_:1})]),_:1}),n(h,{class:"tw-mb-2 !tw-rounded-[4px]",bordered:!1},{title:l(()=>[qt]),default:l(()=>[o("ul",null,[(r(),i(T,null,B(7,(y,I)=>o("li",Ht,[n(J,{class:"tw-flex-none",color:t[I],size:"small"},{default:l(()=>[F(" 公告 ")]),_:2},1032,["color"]),Xt])),64))])]),_:1}),n(h,{class:"tw-mb-2 !tw-rounded-[4px]",bordered:!1},{title:l(()=>[Kt]),default:l(()=>[o("div",null,[n(De)])]),_:1})])])])}}});const _a=Le(Zt,[["__scopeId","data-v-4d0a6a1a"]]);export{_a as default};