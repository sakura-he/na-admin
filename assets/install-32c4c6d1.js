import{ao as Q,e as ae,S as ge,cd as je,ce as Te,av as q,ad as qe,cf as $e,cg as Je,ch as Ke,ci as Qe,aB as Me,cj as Ye,ck as xe,l as re,cl as et,_ as $,G as ie,ag as ue,ah as tt,cm as me,cn as at,co as rt,Y as ee,bL as it,bK as ne,a4 as he,cp as nt,Z as ot,a1 as pe,a3 as Re,a7 as ve,a5 as x,cq as ye,cr as st,bS as lt,aA as ut,cs as te,bl as Ge,ct as j,bj as vt,cu as de,bm as ze,cv as be,R as ct,cw as Y,bO as ht,cx as Se,s as De,bM as _e,cy as Ae,ac as oe,ab as Ie,aY as ft,cz as gt,bT as mt,I as pt,cA as Pe,cB as yt,cC as dt,y as bt}from"./install-32865521.js";var St=function(){function r(t){this.coordSysDims=[],this.axisMap=ge(),this.categoryAxisMap=ge(),this.coordSysName=t}return r}();function Dt(r){var t=r.get("coordinateSystem"),e=new St(t),a=_t[t];if(a)return a(r,e,e.axisMap,e.categoryAxisMap),e}var _t={cartesian2d:function(r,t,e,a){var o=r.getReferringComponents("xAxis",Q).models[0],i=r.getReferringComponents("yAxis",Q).models[0];t.coordSysDims=["x","y"],e.set("x",o),e.set("y",i),Z(o)&&(a.set("x",o),t.firstCategoryDimIndex=0),Z(i)&&(a.set("y",i),t.firstCategoryDimIndex==null&&(t.firstCategoryDimIndex=1))},singleAxis:function(r,t,e,a){var o=r.getReferringComponents("singleAxis",Q).models[0];t.coordSysDims=["single"],e.set("single",o),Z(o)&&(a.set("single",o),t.firstCategoryDimIndex=0)},polar:function(r,t,e,a){var o=r.getReferringComponents("polar",Q).models[0],i=o.findAxisModel("radiusAxis"),n=o.findAxisModel("angleAxis");t.coordSysDims=["radius","angle"],e.set("radius",i),e.set("angle",n),Z(i)&&(a.set("radius",i),t.firstCategoryDimIndex=0),Z(n)&&(a.set("angle",n),t.firstCategoryDimIndex==null&&(t.firstCategoryDimIndex=1))},geo:function(r,t,e,a){t.coordSysDims=["lng","lat"]},parallel:function(r,t,e,a){var o=r.ecModel,i=o.getComponent("parallel",r.get("parallelIndex")),n=t.coordSysDims=i.dimensions.slice();ae(i.parallelAxisIndex,function(s,l){var u=o.getComponent("parallelAxis",s),h=n[l];e.set(h,u),Z(u)&&(a.set(h,u),t.firstCategoryDimIndex==null&&(t.firstCategoryDimIndex=l))})}};function Z(r){return r.get("type")==="category"}function At(r,t){var e=r.get("coordinateSystem"),a=xe.get(e),o;return t&&t.coordSysDims&&(o=re(t.coordSysDims,function(i){var n={name:i},s=t.axisMap.get(i);if(s){var l=s.get("type");n.type=et(l)}return n})),o||(o=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"]),o}function It(r,t,e){var a,o;return e&&ae(r,function(i,n){var s=i.coordDim,l=e.categoryAxisMap.get(s);l&&(a==null&&(a=n),i.ordinalMeta=l.getOrdinalMeta(),t&&(i.createInvertedIndices=!0)),i.otherDims.itemName!=null&&(o=!0)}),!o&&a!=null&&(r[a].otherDims.itemName=0),a}function Pt(r,t,e){e=e||{};var a=t.getSourceManager(),o,i=!1;r?(i=!0,o=je(r)):(o=a.getSource(),i=o.sourceFormat===Te);var n=Dt(t),s=At(t,n),l=e.useEncodeDefaulter,u=q(l)?l:l?qe($e,s,t):null,h={coordDimensions:s,generateCoord:e.generateCoord,encodeDefine:t.getEncode(),encodeDefaulter:u,canOmitUnusedDimensions:!i},v=Je(o,h),f=It(v.dimensions,e.createInvertedIndices,n),c=i?null:a.getSharedDataStore(v),m=Ke(t,{schema:v,store:c}),y=new Qe(v,t);y.setCalculationInfo(m);var d=f!=null&&Ct(o)?function(g,p,b,_){return _===f?b:this.defaultDimValueGetter(g,p,b,_)}:null;return y.hasItemOption=!1,y.initData(i?o:c,null,d),y}function Ct(r){if(r.sourceFormat===Te){var t=Nt(r.data||[]);return!Me(Ye(t))}}function Nt(r){for(var t=0;t<r.length&&r[t]==null;)t++;return r[t]}var kt=function(r){$(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type=t.type,e.hasSymbolVisual=!0,e}return t.prototype.getInitialData=function(e){return Pt(null,this,{useEncodeDefaulter:!0})},t.prototype.getLegendIcon=function(e){var a=new ie,o=ue("line",0,e.itemHeight/2,e.itemWidth,0,e.lineStyle.stroke,!1);a.add(o),o.setStyle(e.lineStyle);var i=this.getData().getVisual("symbol"),n=this.getData().getVisual("symbolRotate"),s=i==="none"?"circle":i,l=e.itemHeight*.8,u=ue(s,(e.itemWidth-l)/2,(e.itemHeight-l)/2,l,l,e.itemStyle.fill);a.add(u),u.setStyle(e.itemStyle);var h=e.iconRotate==="inherit"?n:e.iconRotate||0;return u.rotation=h*Math.PI/180,u.setOrigin([e.itemWidth/2,e.itemHeight/2]),s.indexOf("empty")>-1&&(u.style.stroke=u.style.fill,u.style.fill="#fff",u.style.lineWidth=2),a},t.type="series.line",t.dependencies=["grid","polar"],t.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},t}(tt);const wt=kt;function Ve(r,t){var e=r.mapDimensionsAll("defaultedLabel"),a=e.length;if(a===1){var o=me(r,t,e[0]);return o!=null?o+"":null}else if(a){for(var i=[],n=0;n<e.length;n++)i.push(me(r,t,e[n]));return i.join(" ")}}function Lt(r,t){var e=r.mapDimensionsAll("defaultedLabel");if(!Me(t))return t+"";for(var a=[],o=0;o<e.length;o++){var i=r.getDimensionIndex(e[o]);i>=0&&a.push(t[i])}return a.join(" ")}var Et=function(r){$(t,r);function t(e,a,o,i){var n=r.call(this)||this;return n.updateData(e,a,o,i),n}return t.prototype._createSymbol=function(e,a,o,i,n){this.removeAll();var s=ue(e,-1,-1,2,2,null,n);s.attr({z2:100,culling:!0,scaleX:i[0]/2,scaleY:i[1]/2}),s.drift=Ot,this._symbolType=e,this.add(s)},t.prototype.stopSymbolAnimation=function(e){this.childAt(0).stopAnimation(null,e)},t.prototype.getSymbolType=function(){return this._symbolType},t.prototype.getSymbolPath=function(){return this.childAt(0)},t.prototype.highlight=function(){at(this.childAt(0))},t.prototype.downplay=function(){rt(this.childAt(0))},t.prototype.setZ=function(e,a){var o=this.childAt(0);o.zlevel=e,o.z=a},t.prototype.setDraggable=function(e,a){var o=this.childAt(0);o.draggable=e,o.cursor=!a&&e?"move":o.cursor},t.prototype.updateData=function(e,a,o,i){this.silent=!1;var n=e.getItemVisual(a,"symbol")||"circle",s=e.hostModel,l=t.getSymbolSize(e,a),u=n!==this._symbolType,h=i&&i.disableAnimation;if(u){var v=e.getItemVisual(a,"symbolKeepAspect");this._createSymbol(n,e,a,l,v)}else{var f=this.childAt(0);f.silent=!1;var c={scaleX:l[0]/2,scaleY:l[1]/2};h?f.attr(c):ee(f,c,s,a),it(f)}if(this._updateCommon(e,a,l,o,i),u){var f=this.childAt(0);if(!h){var c={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:f.style.opacity}};f.scaleX=f.scaleY=0,f.style.opacity=0,ne(f,c,s,a)}}h&&this.childAt(0).stopAnimation("leave")},t.prototype._updateCommon=function(e,a,o,i,n){var s=this.childAt(0),l=e.hostModel,u,h,v,f,c,m,y,d,g;if(i&&(u=i.emphasisItemStyle,h=i.blurItemStyle,v=i.selectItemStyle,f=i.focus,c=i.blurScope,y=i.labelStatesModels,d=i.hoverScale,g=i.cursorStyle,m=i.emphasisDisabled),!i||e.hasItemOption){var p=i&&i.itemModel?i.itemModel:e.getItemModel(a),b=p.getModel("emphasis");u=b.getModel("itemStyle").getItemStyle(),v=p.getModel(["select","itemStyle"]).getItemStyle(),h=p.getModel(["blur","itemStyle"]).getItemStyle(),f=b.get("focus"),c=b.get("blurScope"),m=b.get("disabled"),y=he(p),d=b.getShallow("scale"),g=p.getShallow("cursor")}var _=e.getItemVisual(a,"symbolRotate");s.attr("rotation",(_||0)*Math.PI/180||0);var I=nt(e.getItemVisual(a,"symbolOffset"),o);I&&(s.x=I[0],s.y=I[1]),g&&s.attr("cursor",g);var S=e.getItemVisual(a,"style"),D=S.fill;if(s instanceof ot){var P=s.style;s.useStyle(pe({image:P.image,x:P.x,y:P.y,width:P.width,height:P.height},S))}else s.__isEmptyBrush?s.useStyle(pe({},S)):s.useStyle(S),s.style.decal=null,s.setColor(D,n&&n.symbolInnerColor),s.style.strokeNoScale=!0;var C=e.getItemVisual(a,"liftZ"),N=this._z2;C!=null?N==null&&(this._z2=s.z2,s.z2+=C):N!=null&&(s.z2=N,this._z2=null);var k=n&&n.useNameLabel;Re(s,y,{labelFetcher:l,labelDataIndex:a,defaultText:A,inheritColor:D,defaultOpacity:S.opacity});function A(M){return k?e.getName(M):Ve(e,M)}this._sizeX=o[0]/2,this._sizeY=o[1]/2;var w=s.ensureState("emphasis");w.style=u,s.ensureState("select").style=v,s.ensureState("blur").style=h;var T=d==null||d===!0?Math.max(1.1,3/this._sizeY):isFinite(d)&&d>0?+d:1;w.scaleX=this._sizeX*T,w.scaleY=this._sizeY*T,this.setSymbolScale(1),ve(this,f,c,m)},t.prototype.setSymbolScale=function(e){this.scaleX=this.scaleY=e},t.prototype.fadeOut=function(e,a,o){var i=this.childAt(0),n=x(this).dataIndex,s=o&&o.animation;if(this.silent=i.silent=!0,o&&o.fadeLabel){var l=i.getTextContent();l&&ye(l,{style:{opacity:0}},a,{dataIndex:n,removeOpt:s,cb:function(){i.removeTextContent()}})}else i.removeTextContent();ye(i,{style:{opacity:0},scaleX:0,scaleY:0},a,{dataIndex:n,cb:e,removeOpt:s})},t.getSymbolSize=function(e,a){return st(e.getItemVisual(a,"symbolSize"))},t}(ie);function Ot(r,t){this.parent.drift(r,t)}const fe=Et;function se(r,t,e,a){return t&&!isNaN(t[0])&&!isNaN(t[1])&&!(a.isIgnore&&a.isIgnore(e))&&!(a.clipShape&&!a.clipShape.contain(t[0],t[1]))&&r.getItemVisual(e,"symbol")!=="none"}function Ce(r){return r!=null&&!ut(r)&&(r={isIgnore:r}),r||{}}function Ne(r){var t=r.hostModel,e=t.getModel("emphasis");return{emphasisItemStyle:e.getModel("itemStyle").getItemStyle(),blurItemStyle:t.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:t.getModel(["select","itemStyle"]).getItemStyle(),focus:e.get("focus"),blurScope:e.get("blurScope"),emphasisDisabled:e.get("disabled"),hoverScale:e.get("scale"),labelStatesModels:he(t),cursorStyle:t.get("cursor")}}var Tt=function(){function r(t){this.group=new ie,this._SymbolCtor=t||fe}return r.prototype.updateData=function(t,e){this._progressiveEls=null,e=Ce(e);var a=this.group,o=t.hostModel,i=this._data,n=this._SymbolCtor,s=e.disableAnimation,l=Ne(t),u={disableAnimation:s},h=e.getSymbolPoint||function(v){return t.getItemLayout(v)};i||a.removeAll(),t.diff(i).add(function(v){var f=h(v);if(se(t,f,v,e)){var c=new n(t,v,l,u);c.setPosition(f),t.setItemGraphicEl(v,c),a.add(c)}}).update(function(v,f){var c=i.getItemGraphicEl(f),m=h(v);if(!se(t,m,v,e)){a.remove(c);return}var y=t.getItemVisual(v,"symbol")||"circle",d=c&&c.getSymbolType&&c.getSymbolType();if(!c||d&&d!==y)a.remove(c),c=new n(t,v,l,u),c.setPosition(m);else{c.updateData(t,v,l,u);var g={x:m[0],y:m[1]};s?c.attr(g):ee(c,g,o)}a.add(c),t.setItemGraphicEl(v,c)}).remove(function(v){var f=i.getItemGraphicEl(v);f&&f.fadeOut(function(){a.remove(f)},o)}).execute(),this._getSymbolPoint=h,this._data=t},r.prototype.updateLayout=function(){var t=this,e=this._data;e&&e.eachItemGraphicEl(function(a,o){var i=t._getSymbolPoint(o);a.setPosition(i),a.markRedraw()})},r.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=Ne(t),this._data=null,this.group.removeAll()},r.prototype.incrementalUpdate=function(t,e,a){this._progressiveEls=[],a=Ce(a);function o(l){l.isGroup||(l.incremental=!0,l.ensureState("emphasis").hoverLayer=!0)}for(var i=t.start;i<t.end;i++){var n=e.getItemLayout(i);if(se(e,n,i,a)){var s=new this._SymbolCtor(e,i,this._seriesScope);s.traverse(o),s.setPosition(n),this.group.add(s),e.setItemGraphicEl(i,s),this._progressiveEls.push(s)}}},r.prototype.eachRendered=function(t){lt(this._progressiveEls||this.group,t)},r.prototype.remove=function(t){var e=this.group,a=this._data;a&&t?a.eachItemGraphicEl(function(o){o.fadeOut(function(){e.remove(o)},a.hostModel)}):e.removeAll()},r}();const Mt=Tt;function Fe(r,t,e){var a=r.getBaseAxis(),o=r.getOtherAxis(a),i=Rt(o,e),n=a.dim,s=o.dim,l=t.mapDimension(s),u=t.mapDimension(n),h=s==="x"||s==="radius"?1:0,v=re(r.dimensions,function(m){return t.mapDimension(m)}),f=!1,c=t.getCalculationInfo("stackResultDimension");return te(t,v[0])&&(f=!0,v[0]=c),te(t,v[1])&&(f=!0,v[1]=c),{dataDimsForPoint:v,valueStart:i,valueAxisDim:s,baseAxisDim:n,stacked:!!f,valueDim:l,baseDim:u,baseDataOffset:h,stackedOverDimension:t.getCalculationInfo("stackedOverDimension")}}function Rt(r,t){var e=0,a=r.scale.getExtent();return t==="start"?e=a[0]:t==="end"?e=a[1]:Ge(t)&&!isNaN(t)?e=t:a[0]>0?e=a[0]:a[1]<0&&(e=a[1]),e}function Be(r,t,e,a){var o=NaN;r.stacked&&(o=e.get(e.getCalculationInfo("stackedOverDimension"),a)),isNaN(o)&&(o=r.valueStart);var i=r.baseDataOffset,n=[];return n[i]=e.get(r.baseDim,a),n[1-i]=o,t.dataToPoint(n)}function Gt(r,t){var e=[];return t.diff(r).add(function(a){e.push({cmd:"+",idx:a})}).update(function(a,o){e.push({cmd:"=",idx:o,idx1:a})}).remove(function(a){e.push({cmd:"-",idx:a})}).execute(),e}function zt(r,t,e,a,o,i,n,s){for(var l=Gt(r,t),u=[],h=[],v=[],f=[],c=[],m=[],y=[],d=Fe(o,t,n),g=r.getLayout("points")||[],p=t.getLayout("points")||[],b=0;b<l.length;b++){var _=l[b],I=!0,S=void 0,D=void 0;switch(_.cmd){case"=":S=_.idx*2,D=_.idx1*2;var P=g[S],C=g[S+1],N=p[D],k=p[D+1];(isNaN(P)||isNaN(C))&&(P=N,C=k),u.push(P,C),h.push(N,k),v.push(e[S],e[S+1]),f.push(a[D],a[D+1]),y.push(t.getRawIndex(_.idx1));break;case"+":var A=_.idx,w=d.dataDimsForPoint,T=o.dataToPoint([t.get(w[0],A),t.get(w[1],A)]);D=A*2,u.push(T[0],T[1]),h.push(p[D],p[D+1]);var M=Be(d,o,t,A);v.push(M[0],M[1]),f.push(a[D],a[D+1]),y.push(t.getRawIndex(A));break;case"-":I=!1}I&&(c.push(_),m.push(m.length))}m.sort(function(K,O){return y[K]-y[O]});for(var R=u.length,V=j(R),E=j(R),L=j(R),F=j(R),B=[],b=0;b<m.length;b++){var J=m[b],G=b*2,z=J*2;V[G]=u[z],V[G+1]=u[z+1],E[G]=h[z],E[G+1]=h[z+1],L[G]=v[z],L[G+1]=v[z+1],F[G]=f[z],F[G+1]=f[z+1],B[b]=c[J]}return{current:V,next:E,stackedOnCurrent:L,stackedOnNext:F,status:B}}var H=Math.min,U=Math.max;function X(r,t){return isNaN(r)||isNaN(t)}function ce(r,t,e,a,o,i,n,s,l){for(var u,h,v,f,c,m,y=e,d=0;d<a;d++){var g=t[y*2],p=t[y*2+1];if(y>=o||y<0)break;if(X(g,p)){if(l){y+=i;continue}break}if(y===e)r[i>0?"moveTo":"lineTo"](g,p),v=g,f=p;else{var b=g-u,_=p-h;if(b*b+_*_<.5){y+=i;continue}if(n>0){for(var I=y+i,S=t[I*2],D=t[I*2+1];S===g&&D===p&&d<a;)d++,I+=i,y+=i,S=t[I*2],D=t[I*2+1],g=t[y*2],p=t[y*2+1],b=g-u,_=p-h;var P=d+1;if(l)for(;X(S,D)&&P<a;)P++,I+=i,S=t[I*2],D=t[I*2+1];var C=.5,N=0,k=0,A=void 0,w=void 0;if(P>=a||X(S,D))c=g,m=p;else{N=S-u,k=D-h;var T=g-u,M=S-g,R=p-h,V=D-p,E=void 0,L=void 0;if(s==="x"){E=Math.abs(T),L=Math.abs(M);var F=N>0?1:-1;c=g-F*E*n,m=p,A=g+F*L*n,w=p}else if(s==="y"){E=Math.abs(R),L=Math.abs(V);var B=k>0?1:-1;c=g,m=p-B*E*n,A=g,w=p+B*L*n}else E=Math.sqrt(T*T+R*R),L=Math.sqrt(M*M+V*V),C=L/(L+E),c=g-N*n*(1-C),m=p-k*n*(1-C),A=g+N*n*C,w=p+k*n*C,A=H(A,U(S,g)),w=H(w,U(D,p)),A=U(A,H(S,g)),w=U(w,H(D,p)),N=A-g,k=w-p,c=g-N*E/L,m=p-k*E/L,c=H(c,U(u,g)),m=H(m,U(h,p)),c=U(c,H(u,g)),m=U(m,H(h,p)),N=g-c,k=p-m,A=g+N*L/E,w=p+k*L/E}r.bezierCurveTo(v,f,c,m,g,p),v=A,f=w}else r.lineTo(g,p)}u=g,h=p,y+=i}return d}var He=function(){function r(){this.smooth=0,this.smoothConstraint=!0}return r}(),Vt=function(r){$(t,r);function t(e){var a=r.call(this,e)||this;return a.type="ec-polyline",a}return t.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},t.prototype.getDefaultShape=function(){return new He},t.prototype.buildPath=function(e,a){var o=a.points,i=0,n=o.length/2;if(a.connectNulls){for(;n>0&&X(o[n*2-2],o[n*2-1]);n--);for(;i<n&&X(o[i*2],o[i*2+1]);i++);}for(;i<n;)i+=ce(e,o,i,n,n,1,a.smooth,a.smoothMonotone,a.connectNulls)+1},t.prototype.getPointOn=function(e,a){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var o=this.path,i=o.data,n=vt.CMD,s,l,u=a==="x",h=[],v=0;v<i.length;){var f=i[v++],c=void 0,m=void 0,y=void 0,d=void 0,g=void 0,p=void 0,b=void 0;switch(f){case n.M:s=i[v++],l=i[v++];break;case n.L:if(c=i[v++],m=i[v++],b=u?(e-s)/(c-s):(e-l)/(m-l),b<=1&&b>=0){var _=u?(m-l)*b+l:(c-s)*b+s;return u?[e,_]:[_,e]}s=c,l=m;break;case n.C:c=i[v++],m=i[v++],y=i[v++],d=i[v++],g=i[v++],p=i[v++];var I=u?de(s,c,y,g,e,h):de(l,m,d,p,e,h);if(I>0)for(var S=0;S<I;S++){var D=h[S];if(D<=1&&D>=0){var _=u?be(l,m,d,p,D):be(s,c,y,g,D);return u?[e,_]:[_,e]}}s=g,l=p;break}}},t}(ze),Ft=function(r){$(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t}(He),Bt=function(r){$(t,r);function t(e){var a=r.call(this,e)||this;return a.type="ec-polygon",a}return t.prototype.getDefaultShape=function(){return new Ft},t.prototype.buildPath=function(e,a){var o=a.points,i=a.stackedOnPoints,n=0,s=o.length/2,l=a.smoothMonotone;if(a.connectNulls){for(;s>0&&X(o[s*2-2],o[s*2-1]);s--);for(;n<s&&X(o[n*2],o[n*2+1]);n++);}for(;n<s;){var u=ce(e,o,n,s,s,1,a.smooth,l,a.connectNulls);ce(e,i,n+u-1,u,s,-1,a.stackedOnSmooth,l,a.connectNulls),n+=u+1,e.closePath()}},t}(ze);function Ue(r,t,e,a,o){var i=r.getArea(),n=i.x,s=i.y,l=i.width,u=i.height,h=e.get(["lineStyle","width"])||2;n-=h/2,s-=h/2,l+=h,u+=h,n=Math.floor(n),l=Math.round(l);var v=new ct({shape:{x:n,y:s,width:l,height:u}});if(t){var f=r.getBaseAxis(),c=f.isHorizontal(),m=f.inverse;c?(m&&(v.shape.x+=l),v.shape.width=0):(m||(v.shape.y+=u),v.shape.height=0);var y=q(o)?function(d){o(d,v)}:null;ne(v,{shape:{width:l,height:u,x:n,y:s}},e,null,a,y)}return v}function We(r,t,e){var a=r.getArea(),o=Y(a.r0,1),i=Y(a.r,1),n=new ht({shape:{cx:Y(r.cx,1),cy:Y(r.cy,1),r0:o,r:i,startAngle:a.startAngle,endAngle:a.endAngle,clockwise:a.clockwise}});if(t){var s=r.getBaseAxis().dim==="angle";s?n.shape.endAngle=a.startAngle:n.shape.r=o,ne(n,{shape:{endAngle:a.endAngle,r:i}},e)}return n}function ia(r,t,e,a,o){if(r){if(r.type==="polar")return We(r,t,e);if(r.type==="cartesian2d")return Ue(r,t,e,a,o)}else return null;return null}function Ht(r,t){return r.type===t}function ke(r,t){if(r.length===t.length){for(var e=0;e<r.length;e++)if(r[e]!==t[e])return;return!0}}function we(r){for(var t=1/0,e=1/0,a=-1/0,o=-1/0,i=0;i<r.length;){var n=r[i++],s=r[i++];isNaN(n)||(t=Math.min(n,t),a=Math.max(n,a)),isNaN(s)||(e=Math.min(s,e),o=Math.max(s,o))}return[[t,e],[a,o]]}function Le(r,t){var e=we(r),a=e[0],o=e[1],i=we(t),n=i[0],s=i[1];return Math.max(Math.abs(a[0]-n[0]),Math.abs(a[1]-n[1]),Math.abs(o[0]-s[0]),Math.abs(o[1]-s[1]))}function Ee(r){return Ge(r)?r:r?.5:0}function Ut(r,t,e){if(!e.valueDim)return[];for(var a=t.count(),o=j(a*2),i=0;i<a;i++){var n=Be(e,r,t,i);o[i*2]=n[0],o[i*2+1]=n[1]}return o}function W(r,t,e,a){var o=t.getBaseAxis(),i=o.dim==="x"||o.dim==="radius"?0:1,n=[],s=0,l=[],u=[],h=[],v=[];if(a){for(s=0;s<r.length;s+=2)!isNaN(r[s])&&!isNaN(r[s+1])&&v.push(r[s],r[s+1]);r=v}for(s=0;s<r.length-2;s+=2)switch(h[0]=r[s+2],h[1]=r[s+3],u[0]=r[s],u[1]=r[s+1],n.push(u[0],u[1]),e){case"end":l[i]=h[i],l[1-i]=u[1-i],n.push(l[0],l[1]);break;case"middle":var f=(u[i]+h[i])/2,c=[];l[i]=c[i]=f,l[1-i]=u[1-i],c[1-i]=h[1-i],n.push(l[0],l[1]),n.push(c[0],c[1]);break;default:l[i]=u[i],l[1-i]=h[1-i],n.push(l[0],l[1])}return n.push(r[s++],r[s++]),n}function Wt(r,t){var e=[],a=r.length,o,i;function n(h,v,f){var c=h.coord,m=(f-c)/(v.coord-c),y=yt(m,[h.color,v.color]);return{coord:f,color:y}}for(var s=0;s<a;s++){var l=r[s],u=l.coord;if(u<0)o=l;else if(u>t){i?e.push(n(i,l,t)):o&&e.push(n(o,l,0),n(o,l,t));break}else o&&(e.push(n(o,l,0)),o=null),e.push(l),i=l}return e}function Xt(r,t,e){var a=r.getVisual("visualMeta");if(!(!a||!a.length||!r.count())&&t.type==="cartesian2d"){for(var o,i,n=a.length-1;n>=0;n--){var s=r.getDimensionInfo(a[n].dimension);if(o=s&&s.coordDim,o==="x"||o==="y"){i=a[n];break}}if(i){var l=t.getAxis(o),u=re(i.stops,function(b){return{coord:l.toGlobalCoord(l.dataToCoord(b.value)),color:b.color}}),h=u.length,v=i.outerColors.slice();h&&u[0].coord>u[h-1].coord&&(u.reverse(),v.reverse());var f=Wt(u,o==="x"?e.getWidth():e.getHeight()),c=f.length;if(!c&&h)return u[0].coord<0?v[1]?v[1]:u[h-1].color:v[0]?v[0]:u[0].color;var m=10,y=f[0].coord-m,d=f[c-1].coord+m,g=d-y;if(g<.001)return"transparent";ae(f,function(b){b.offset=(b.coord-y)/g}),f.push({offset:c?f[c-1].offset:.5,color:v[1]||"transparent"}),f.unshift({offset:c?f[0].offset:.5,color:v[0]||"transparent"});var p=new pt(0,0,0,0,f,!0);return p[o]=y,p[o+"2"]=d,p}}}function Zt(r,t,e){var a=r.get("showAllSymbol"),o=a==="auto";if(!(a&&!o)){var i=e.getAxesByScale("ordinal")[0];if(i&&!(o&&jt(i,t))){var n=t.mapDimension(i.dim),s={};return ae(i.getViewLabels(),function(l){var u=i.scale.getRawOrdinalNumber(l.tickValue);s[u]=1}),function(l){return!s.hasOwnProperty(t.get(n,l))}}}}function jt(r,t){var e=r.getExtent(),a=Math.abs(e[1]-e[0])/r.scale.count();isNaN(a)&&(a=0);for(var o=t.count(),i=Math.max(1,Math.round(o/5)),n=0;n<o;n+=i)if(fe.getSymbolSize(t,n)[r.isHorizontal()?1:0]*1.5>a)return!1;return!0}function qt(r,t){return isNaN(r)||isNaN(t)}function $t(r){for(var t=r.length/2;t>0&&qt(r[t*2-2],r[t*2-1]);t--);return t-1}function Oe(r,t){return[r[t*2],r[t*2+1]]}function Jt(r,t,e){for(var a=r.length/2,o=e==="x"?0:1,i,n,s=0,l=-1,u=0;u<a;u++)if(n=r[u*2+o],!(isNaN(n)||isNaN(r[u*2+1-o]))){if(u===0){i=n;continue}if(i<=t&&n>=t||i>=t&&n<=t){l=u;break}s=u,i=n}return{range:[s,l],t:(t-i)/(n-i)}}function Xe(r){if(r.get(["endLabel","show"]))return!0;for(var t=0;t<Pe.length;t++)if(r.get([Pe[t],"endLabel","show"]))return!0;return!1}function le(r,t,e,a){if(Ht(t,"cartesian2d")){var o=a.getModel("endLabel"),i=o.get("valueAnimation"),n=a.getData(),s={lastFrameIndex:0},l=Xe(a)?function(c,m){r._endLabelOnDuring(c,m,n,s,i,o,t)}:null,u=t.getBaseAxis().isHorizontal(),h=Ue(t,e,a,function(){var c=r._endLabel;c&&e&&s.originalX!=null&&c.attr({x:s.originalX,y:s.originalY})},l);if(!a.get("clip",!0)){var v=h.shape,f=Math.max(v.width,v.height);u?(v.y-=f,v.height+=f*2):(v.x-=f,v.width+=f*2)}return l&&l(1,h),h}else return We(t,e,a)}function Kt(r,t){var e=t.getBaseAxis(),a=e.isHorizontal(),o=e.inverse,i=a?o?"right":"left":"center",n=a?"middle":o?"top":"bottom";return{normal:{align:r.get("align")||i,verticalAlign:r.get("verticalAlign")||n}}}var Qt=function(r){$(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.init=function(){var e=new ie,a=new Mt;this.group.add(a.group),this._symbolDraw=a,this._lineGroup=e},t.prototype.render=function(e,a,o){var i=this,n=e.coordinateSystem,s=this.group,l=e.getData(),u=e.getModel("lineStyle"),h=e.getModel("areaStyle"),v=l.getLayout("points")||[],f=n.type==="polar",c=this._coordSys,m=this._symbolDraw,y=this._polyline,d=this._polygon,g=this._lineGroup,p=e.get("animation"),b=!h.isEmpty(),_=h.get("origin"),I=Fe(n,l,_),S=b&&Ut(n,l,I),D=e.get("showSymbol"),P=e.get("connectNulls"),C=D&&!f&&Zt(e,l,n),N=this._data;N&&N.eachItemGraphicEl(function(O,Ze){O.__temp&&(s.remove(O),N.setItemGraphicEl(Ze,null))}),D||m.remove(),s.add(g);var k=f?!1:e.get("step"),A;n&&n.getArea&&e.get("clip",!0)&&(A=n.getArea(),A.width!=null?(A.x-=.1,A.y-=.1,A.width+=.2,A.height+=.2):A.r0&&(A.r0-=.5,A.r+=.5)),this._clipShapeForSymbol=A;var w=Xt(l,n,o)||l.getVisual("style")[l.getVisual("drawType")];if(!(y&&c.type===n.type&&k===this._step))D&&m.updateData(l,{isIgnore:C,clipShape:A,disableAnimation:!0,getSymbolPoint:function(O){return[v[O*2],v[O*2+1]]}}),p&&this._initSymbolLabelAnimation(l,n,A),k&&(v=W(v,n,k,P),S&&(S=W(S,n,k,P))),y=this._newPolyline(v),b?d=this._newPolygon(v,S):d&&(g.remove(d),d=this._polygon=null),f||this._initOrUpdateEndLabel(e,n,Se(w)),g.setClipPath(le(this,n,!0,e));else{b&&!d?d=this._newPolygon(v,S):d&&!b&&(g.remove(d),d=this._polygon=null),f||this._initOrUpdateEndLabel(e,n,Se(w));var T=g.getClipPath();if(T){var M=le(this,n,!1,e);ne(T,{shape:M.shape},e)}else g.setClipPath(le(this,n,!0,e));D&&m.updateData(l,{isIgnore:C,clipShape:A,disableAnimation:!0,getSymbolPoint:function(O){return[v[O*2],v[O*2+1]]}}),(!ke(this._stackedOnPoints,S)||!ke(this._points,v))&&(p?this._doUpdateAnimation(l,S,n,o,k,_,P):(k&&(v=W(v,n,k,P),S&&(S=W(S,n,k,P))),y.setShape({points:v}),d&&d.setShape({points:v,stackedOnPoints:S})))}var R=e.getModel("emphasis"),V=R.get("focus"),E=R.get("blurScope"),L=R.get("disabled");if(y.useStyle(De(u.getLineStyle(),{fill:"none",stroke:w,lineJoin:"bevel"})),_e(y,e,"lineStyle"),y.style.lineWidth>0&&e.get(["emphasis","lineStyle","width"])==="bolder"){var F=y.getState("emphasis").style;F.lineWidth=+y.style.lineWidth+1}x(y).seriesIndex=e.seriesIndex,ve(y,V,E,L);var B=Ee(e.get("smooth")),J=e.get("smoothMonotone");if(y.setShape({smooth:B,smoothMonotone:J,connectNulls:P}),d){var G=l.getCalculationInfo("stackedOnSeries"),z=0;d.useStyle(De(h.getAreaStyle(),{fill:w,opacity:.7,lineJoin:"bevel",decal:l.getVisual("style").decal})),G&&(z=Ee(G.get("smooth"))),d.setShape({smooth:B,stackedOnSmooth:z,smoothMonotone:J,connectNulls:P}),_e(d,e,"areaStyle"),x(d).seriesIndex=e.seriesIndex,ve(d,V,E,L)}var K=function(O){i._changePolyState(O)};l.eachItemGraphicEl(function(O){O&&(O.onHoverStateChange=K)}),this._polyline.onHoverStateChange=K,this._data=l,this._coordSys=n,this._stackedOnPoints=S,this._points=v,this._step=k,this._valueOrigin=_,e.get("triggerLineEvent")&&(this.packEventData(e,y),d&&this.packEventData(e,d))},t.prototype.packEventData=function(e,a){x(a).eventData={componentType:"series",componentSubType:"line",componentIndex:e.componentIndex,seriesIndex:e.seriesIndex,seriesName:e.name,seriesType:"line"}},t.prototype.highlight=function(e,a,o,i){var n=e.getData(),s=Ae(n,i);if(this._changePolyState("emphasis"),!(s instanceof Array)&&s!=null&&s>=0){var l=n.getLayout("points"),u=n.getItemGraphicEl(s);if(!u){var h=l[s*2],v=l[s*2+1];if(isNaN(h)||isNaN(v)||this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(h,v))return;var f=e.get("zlevel")||0,c=e.get("z")||0;u=new fe(n,s),u.x=h,u.y=v,u.setZ(f,c);var m=u.getSymbolPath().getTextContent();m&&(m.zlevel=f,m.z=c,m.z2=this._polyline.z2+1),u.__temp=!0,n.setItemGraphicEl(s,u),u.stopSymbolAnimation(!0),this.group.add(u)}u.highlight()}else oe.prototype.highlight.call(this,e,a,o,i)},t.prototype.downplay=function(e,a,o,i){var n=e.getData(),s=Ae(n,i);if(this._changePolyState("normal"),s!=null&&s>=0){var l=n.getItemGraphicEl(s);l&&(l.__temp?(n.setItemGraphicEl(s,null),this.group.remove(l)):l.downplay())}else oe.prototype.downplay.call(this,e,a,o,i)},t.prototype._changePolyState=function(e){var a=this._polygon;Ie(this._polyline,e),a&&Ie(a,e)},t.prototype._newPolyline=function(e){var a=this._polyline;return a&&this._lineGroup.remove(a),a=new Vt({shape:{points:e},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(a),this._polyline=a,a},t.prototype._newPolygon=function(e,a){var o=this._polygon;return o&&this._lineGroup.remove(o),o=new Bt({shape:{points:e,stackedOnPoints:a},segmentIgnoreThreshold:2}),this._lineGroup.add(o),this._polygon=o,o},t.prototype._initSymbolLabelAnimation=function(e,a,o){var i,n,s=a.getBaseAxis(),l=s.inverse;a.type==="cartesian2d"?(i=s.isHorizontal(),n=!1):a.type==="polar"&&(i=s.dim==="angle",n=!0);var u=e.hostModel,h=u.get("animationDuration");q(h)&&(h=h(null));var v=u.get("animationDelay")||0,f=q(v)?v(null):v;e.eachItemGraphicEl(function(c,m){var y=c;if(y){var d=[c.x,c.y],g=void 0,p=void 0,b=void 0;if(o)if(n){var _=o,I=a.pointToCoord(d);i?(g=_.startAngle,p=_.endAngle,b=-I[1]/180*Math.PI):(g=_.r0,p=_.r,b=I[0])}else{var S=o;i?(g=S.x,p=S.x+S.width,b=c.x):(g=S.y+S.height,p=S.y,b=c.y)}var D=p===g?0:(b-g)/(p-g);l&&(D=1-D);var P=q(v)?v(m):h*D+f,C=y.getSymbolPath(),N=C.getTextContent();y.attr({scaleX:0,scaleY:0}),y.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:P}),N&&N.animateFrom({style:{opacity:0}},{duration:300,delay:P}),C.disableLabelAnimation=!0}})},t.prototype._initOrUpdateEndLabel=function(e,a,o){var i=e.getModel("endLabel");if(Xe(e)){var n=e.getData(),s=this._polyline,l=n.getLayout("points");if(!l){s.removeTextContent(),this._endLabel=null;return}var u=this._endLabel;u||(u=this._endLabel=new ft({z2:200}),u.ignoreClip=!0,s.setTextContent(this._endLabel),s.disableLabelAnimation=!0);var h=$t(l);h>=0&&(Re(s,he(e,"endLabel"),{inheritColor:o,labelFetcher:e,labelDataIndex:h,defaultText:function(v,f,c){return c!=null?Lt(n,c):Ve(n,v)},enableTextSetter:!0},Kt(i,a)),s.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},t.prototype._endLabelOnDuring=function(e,a,o,i,n,s,l){var u=this._endLabel,h=this._polyline;if(u){e<1&&i.originalX==null&&(i.originalX=u.x,i.originalY=u.y);var v=o.getLayout("points"),f=o.hostModel,c=f.get("connectNulls"),m=s.get("precision"),y=s.get("distance")||0,d=l.getBaseAxis(),g=d.isHorizontal(),p=d.inverse,b=a.shape,_=p?g?b.x:b.y+b.height:g?b.x+b.width:b.y,I=(g?y:0)*(p?-1:1),S=(g?0:-y)*(p?-1:1),D=g?"x":"y",P=Jt(v,_,D),C=P.range,N=C[1]-C[0],k=void 0;if(N>=1){if(N>1&&!c){var A=Oe(v,C[0]);u.attr({x:A[0]+I,y:A[1]+S}),n&&(k=f.getRawValue(C[0]))}else{var A=h.getPointOn(_,D);A&&u.attr({x:A[0]+I,y:A[1]+S});var w=f.getRawValue(C[0]),T=f.getRawValue(C[1]);n&&(k=gt(o,m,w,T,P.t))}i.lastFrameIndex=C[0]}else{var M=e===1||i.lastFrameIndex>0?C[0]:0,A=Oe(v,M);n&&(k=f.getRawValue(M)),u.attr({x:A[0]+I,y:A[1]+S})}n&&mt(u).setLabelText(k)}},t.prototype._doUpdateAnimation=function(e,a,o,i,n,s,l){var u=this._polyline,h=this._polygon,v=e.hostModel,f=zt(this._data,e,this._stackedOnPoints,a,this._coordSys,o,this._valueOrigin),c=f.current,m=f.stackedOnCurrent,y=f.next,d=f.stackedOnNext;if(n&&(c=W(f.current,o,n,l),m=W(f.stackedOnCurrent,o,n,l),y=W(f.next,o,n,l),d=W(f.stackedOnNext,o,n,l)),Le(c,y)>3e3||h&&Le(m,d)>3e3){u.stopAnimation(),u.setShape({points:y}),h&&(h.stopAnimation(),h.setShape({points:y,stackedOnPoints:d}));return}u.shape.__points=f.current,u.shape.points=c;var g={shape:{points:y}};f.current!==c&&(g.shape.__points=f.next),u.stopAnimation(),ee(u,g,v),h&&(h.setShape({points:c,stackedOnPoints:m}),h.stopAnimation(),ee(h,{shape:{stackedOnPoints:d}},v),u.shape.points!==h.shape.points&&(h.shape.points=u.shape.points));for(var p=[],b=f.status,_=0;_<b.length;_++){var I=b[_].cmd;if(I==="="){var S=e.getItemGraphicEl(b[_].idx1);S&&p.push({el:S,ptIdx:_})}}u.animators&&u.animators.length&&u.animators[0].during(function(){h&&h.dirtyShape();for(var D=u.shape.__points,P=0;P<p.length;P++){var C=p[P].el,N=p[P].ptIdx*2;C.x=D[N],C.y=D[N+1],C.markRedraw()}})},t.prototype.remove=function(e){var a=this.group,o=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),o&&o.eachItemGraphicEl(function(i,n){i.__temp&&(a.remove(i),o.setItemGraphicEl(n,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},t.type="line",t}(oe);const Yt=Qt;function xt(r,t){return{seriesType:r,plan:dt(),reset:function(e){var a=e.getData(),o=e.coordinateSystem,i=e.pipelineContext,n=t||i.large;if(o){var s=re(o.dimensions,function(c){return a.mapDimension(c)}).slice(0,2),l=s.length,u=a.getCalculationInfo("stackResultDimension");te(a,s[0])&&(s[0]=u),te(a,s[1])&&(s[1]=u);var h=a.getStore(),v=a.getDimensionIndex(s[0]),f=a.getDimensionIndex(s[1]);return l&&{progress:function(c,m){for(var y=c.end-c.start,d=n&&j(y*l),g=[],p=[],b=c.start,_=0;b<c.end;b++){var I=void 0;if(l===1){var S=h.get(v,b);I=o.dataToPoint(S,null,p)}else g[0]=h.get(v,b),g[1]=h.get(f,b),I=o.dataToPoint(g,null,p);n?(d[_++]=I[0],d[_++]=I[1]):m.setItemLayout(b,I.slice())}n&&m.setLayout("points",d)}}}}}}var ea={average:function(r){for(var t=0,e=0,a=0;a<r.length;a++)isNaN(r[a])||(t+=r[a],e++);return e===0?NaN:t/e},sum:function(r){for(var t=0,e=0;e<r.length;e++)t+=r[e]||0;return t},max:function(r){for(var t=-1/0,e=0;e<r.length;e++)r[e]>t&&(t=r[e]);return isFinite(t)?t:NaN},min:function(r){for(var t=1/0,e=0;e<r.length;e++)r[e]<t&&(t=r[e]);return isFinite(t)?t:NaN},nearest:function(r){return r[0]}},ta=function(r){return Math.round(r.length/2)};function aa(r){return{seriesType:r,reset:function(t,e,a){var o=t.getData(),i=t.get("sampling"),n=t.coordinateSystem,s=o.count();if(s>10&&n.type==="cartesian2d"&&i){var l=n.getBaseAxis(),u=n.getOtherAxis(l),h=l.getExtent(),v=a.getDevicePixelRatio(),f=Math.abs(h[1]-h[0])*(v||1),c=Math.round(s/f);if(isFinite(c)&&c>1){i==="lttb"&&t.setData(o.lttbDownSample(o.mapDimension(u.dim),1/c));var m=void 0;bt(i)?m=ea[i]:q(i)&&(m=i),m&&t.setData(o.downSample(o.mapDimension(u.dim),1/c,m,ta))}}}}}function na(r){r.registerChartView(Yt),r.registerSeriesModel(wt),r.registerLayout(xt("line",!0)),r.registerVisual({seriesType:"line",reset:function(t){var e=t.getData(),a=t.getModel("lineStyle").getLineStyle();a&&!a.stroke&&(a.stroke=e.getVisual("style").fill),e.setVisual("legendLineStyle",a)}}),r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC,aa("line"))}export{ia as a,Ht as b,Pt as c,Lt as d,aa as e,Ve as g,na as i};