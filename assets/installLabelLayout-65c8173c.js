import{ae as C,J as Y,k as U,aZ as b,bw as A,bx as w,t as _,by as z,bz as H,bA as N,j as V,bB as j,be as W,A as K,aU as P,ai as R,aS as O,bC as q,bD as F,aq as S}from"./install-d8df1eea.js";import{s as I,g as J,u as X}from"./labelGuideHelper-86309a77.js";function Z(l){if(l){for(var i=[],r=0;r<l.length;r++)i.push(l[r].slice());return i}}function $(l,i){var r=l.label,a=i&&i.getTextGuideLine();return{dataIndex:l.dataIndex,dataType:l.dataType,seriesIndex:l.seriesModel.seriesIndex,text:l.label.style.text,rect:l.hostRect,labelRect:l.rect,align:r.style.align,verticalAlign:r.style.verticalAlign,labelLinePoints:Z(a&&a.shape.points)}}var E=["align","verticalAlign","width","height","fontSize"],d=new F,T=S(),Q=S();function y(l,i,r){for(var a=0;a<r.length;a++){var e=r[a];i[e]!=null&&(l[e]=i[e])}}var x=["x","y","rotation"],k=function(){function l(){this._labelList=[],this._chartViewList=[]}return l.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},l.prototype._addLabel=function(i,r,a,e,o){var t=e.style,n=e.__hostTarget,v=n.textConfig||{},g=e.getComputedTransform(),s=e.getBoundingRect().plain();C.applyTransform(s,s,g),g?d.setLocalTransform(g):(d.x=d.y=d.rotation=d.originX=d.originY=0,d.scaleX=d.scaleY=1);var c=e.__hostTarget,f;if(c){f=c.getBoundingRect().plain();var L=c.getComputedTransform();C.applyTransform(f,f,L)}var u=f&&c.getTextGuideLine();this._labelList.push({label:e,labelLine:u,seriesModel:a,dataIndex:i,dataType:r,layoutOption:o,computedLayoutOption:null,rect:s,hostRect:f,priority:f?f.width*f.height:0,defaultAttr:{ignore:e.ignore,labelGuideIgnore:u&&u.ignore,x:d.x,y:d.y,scaleX:d.scaleX,scaleY:d.scaleY,rotation:d.rotation,style:{x:t.x,y:t.y,align:t.align,verticalAlign:t.verticalAlign,width:t.width,height:t.height,fontSize:t.fontSize},cursor:e.cursor,attachedPos:v.position,attachedRot:v.rotation}})},l.prototype.addLabelsOfSeries=function(i){var r=this;this._chartViewList.push(i);var a=i.__model,e=a.get("labelLayout");(Y(e)||U(e).length)&&i.group.traverse(function(o){if(o.ignore)return!0;var t=o.getTextContent(),n=b(o);t&&!t.disableLabelLayout&&r._addLabel(n.dataIndex,n.dataType,a,t,e)})},l.prototype.updateLayoutConfig=function(i){var r=i.getWidth(),a=i.getHeight();function e(B,G){return function(){X(B,G)}}for(var o=0;o<this._labelList.length;o++){var t=this._labelList[o],n=t.label,v=n.__hostTarget,g=t.defaultAttr,s=void 0;Y(t.layoutOption)?s=t.layoutOption($(t,v)):s=t.layoutOption,s=s||{},t.computedLayoutOption=s;var c=Math.PI/180;v&&v.setTextConfig({local:!1,position:s.x!=null||s.y!=null?null:g.attachedPos,rotation:s.rotate!=null?s.rotate*c:g.attachedRot,offset:[s.dx||0,s.dy||0]});var f=!1;if(s.x!=null?(n.x=A(s.x,r),n.setStyle("x",0),f=!0):(n.x=g.x,n.setStyle("x",g.style.x)),s.y!=null?(n.y=A(s.y,a),n.setStyle("y",0),f=!0):(n.y=g.y,n.setStyle("y",g.style.y)),s.labelLinePoints){var L=v.getTextGuideLine();L&&(L.setShape({points:s.labelLinePoints}),f=!1)}var u=T(n);u.needsUpdateLabelLine=f,n.rotation=s.rotate!=null?s.rotate*c:g.rotation,n.scaleX=g.scaleX,n.scaleY=g.scaleY;for(var p=0;p<E.length;p++){var h=E[p];n.setStyle(h,s[h]!=null?s[h]:g.style[h])}if(s.draggable){if(n.draggable=!0,n.cursor="move",v){var M=t.seriesModel;if(t.dataIndex!=null){var D=t.seriesModel.getData(t.dataType);M=D.getItemModel(t.dataIndex)}n.on("drag",e(v,M.getModel("labelLine")))}}else n.off("drag"),n.cursor=g.cursor}},l.prototype.layout=function(i){var r=i.getWidth(),a=i.getHeight(),e=w(this._labelList),o=_(e,function(v){return v.layoutOption.moveOverlap==="shiftX"}),t=_(e,function(v){return v.layoutOption.moveOverlap==="shiftY"});z(o,0,r),H(t,0,a);var n=_(e,function(v){return v.layoutOption.hideOverlap});N(n)},l.prototype.processLabelsOverall=function(){var i=this;V(this._chartViewList,function(r){var a=r.__model,e=r.ignoreLabelLineUpdate,o=a.isAnimationEnabled();r.group.traverse(function(t){if(t.ignore&&!t.forceLabelAnimation)return!0;var n=!e,v=t.getTextContent();!n&&v&&(n=T(v).needsUpdateLabelLine),n&&i._updateLabelLine(t,a),o&&i._animateLabels(t,a)})})},l.prototype._updateLabelLine=function(i,r){var a=i.getTextContent(),e=b(i),o=e.dataIndex;if(a&&o!=null){var t=r.getData(e.dataType),n=t.getItemModel(o),v={},g=t.getItemVisual(o,"style"),s=t.getVisual("drawType");v.stroke=g[s];var c=n.getModel("labelLine");I(i,J(n),v),X(i,c)}},l.prototype._animateLabels=function(i,r){var a=i.getTextContent(),e=i.getTextGuideLine();if(a&&(i.forceLabelAnimation||!a.ignore&&!a.invisible&&!i.disableLabelAnimation&&!j(i))){var o=T(a),t=o.oldLayout,n=b(i),v=n.dataIndex,g={x:a.x,y:a.y,rotation:a.rotation},s=r.getData(n.dataType);if(t){a.attr(t);var f=i.prevStates;f&&(R(f,"select")>=0&&a.attr(o.oldLayoutSelect),R(f,"emphasis")>=0&&a.attr(o.oldLayoutEmphasis)),O(a,g,r,v)}else if(a.attr(g),!W(a).valueAnimation){var c=K(a.style.opacity,1);a.style.opacity=0,P(a,{style:{opacity:c}},r,v)}if(o.oldLayout=g,a.states.select){var L=o.oldLayoutSelect={};y(L,g,x),y(L,a.states.select,x)}if(a.states.emphasis){var u=o.oldLayoutEmphasis={};y(u,g,x),y(u,a.states.emphasis,x)}q(a,v,s,r,r)}if(e&&!e.ignore&&!e.invisible){var o=Q(e),t=o.oldLayout,p={points:e.shape.points};t?(e.attr({shape:t}),O(e,{shape:p},r)):(e.setShape(p),e.style.strokePercent=0,P(e,{style:{strokePercent:1}},r)),o.oldLayout=p}},l}();const ee=k;var m=S();function re(l){l.registerUpdateLifecycle("series:beforeupdate",function(i,r,a){var e=m(r).labelManager;e||(e=m(r).labelManager=new ee),e.clearLabels()}),l.registerUpdateLifecycle("series:layoutlabels",function(i,r,a){var e=m(r).labelManager;a.updatedSeries.forEach(function(o){e.addLabelsOfSeries(r.getViewOfSeriesModel(o))}),e.updateLayoutConfig(r),e.layout(r),e.processLabelsOverall()})}export{re as i};
