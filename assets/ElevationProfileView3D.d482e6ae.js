import{ia as H,aT as v,I as m,F as E,i9 as P,an as $,qZ as b,mv as L,ks as k,Y as d,io as O,eb as T,z as _,A as f,B as V,D as z,v as R,r1 as G,a5 as p,fD as I,j as S,aw as M,cR as x,r2 as A,e2 as w,N as u,q_ as y}from"./vendor.508dc62e.js";import{h as C}from"./HoveredPoints.ec47d731.js";import{S as D,e as q,y as B}from"./GraphicState.2f5724ed.js";import"./ExtendedLineVisualElement.7b128dc9.js";import"./VisualElementResources.d0f6f93b.js";import"./Object3DVisualElement.0959ced1.js";class Z{constructor(e){this._params=e,this._highlightTask=null,this._highlightHandle=null,this._visualElementHandle=null}destroy(){this.remove()}remove(){this._highlightTask=H(this._highlightTask),this._highlightHandle=v(this._highlightHandle),this._visualElementHandle=v(this._visualElementHandle)}showHighlight(e){if(this.remove(),m(e)||!g(e))return;const i=e.layer;this._highlightTask=P(async t=>{const n=await this._params.view.whenLayerView(i);$(t),b(n)&&(this._highlightHandle=n.highlight(e))})}showReshaping(e){if(this.remove(),m(e))return;const i=this._params.view,t=new D({view:i,geometry:g(e)?e.geometry:null,attached:!1,elevationInfo:L(e),renderOccluded:k.OccludeAndTransparentStencil}),n=new q({graphic:e}),s=[d(()=>n.isDraped,r=>{t.isDraped=r}),n.on("changed",()=>{t.geometry=g(e)?e.geometry:null}),i.trackGraphicState(n),i.maskOccludee(e),O(t)];B.visualElements.lineGraphics.outline.apply(t),t.attached=!0,this._visualElementHandle=T(s)}}function g(a){return E(a.geometry)&&a.geometry.type==="polyline"}const j=100;let c=class extends z{constructor(a){super(a),this._chartData=null,this._visualElements=[],this._handles=new R}initialize(){const a=G(e=>{this._update(e)},j);this._handles.add([d(()=>({spatialReference:this.view.spatialReference,chartData:this._chartData}),a,p),a])}destroy(){this._handles.destroy(),this._destroyVisualElements()}remove(){this._destroyVisualElements()}update(a){this._chartData=a}_update(a){const{chartData:e}=a;if(m(e))return this.remove();if(!e.refined)return;const i=this._visualElements,t=e.lines.filter(h=>h.viewVisualizationEnabled),n=t.length;for(;i.length>n;)i.pop().destroy();const s=A;for(;i.length<n;){const h=new D({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:s.width-s.outlineSize,width:s.width,falloff:s.falloff,color:s.outlineColor,renderOccluded:s.renderOccluded});i.push(h)}const r=a.spatialReference;for(let h=0;h<n;++h){const l=i[h],o=t[n-1-h];l.geometry=this._createLineGeometry(o,r),l.innerColor=I(S.toUnitRGBA(o.color))}}_createLineGeometry(a,e){const i=M(a.samples,[]),t=i.length-1,n=[];let s=[];for(let r=0;r<=t;r++){const{x:h,y:l,z:o}=i[r];E(o)&&s.push([h,l,o]),(r===t||m(o))&&s.length&&(n.push(s),s=[])}return new x({paths:n,hasZ:!0,spatialReference:e})}_destroyVisualElements(){this._visualElements.forEach(a=>a.destroy()),this._visualElements.length=0}};_([f()],c.prototype,"view",void 0),_([f()],c.prototype,"_chartData",void 0),c=_([V("esri.widgets.ElevationProfile.support.ProfileLines3D")],c);class K{constructor(e,i){this._handles=new R,this._inputRepresentation=new Z({view:e}),this._hoveredPoints=new C({view:e}),this._profileLines=new c({view:e}),this._handles.add([d(()=>i.viewModel.hoveredPoints,t=>this._hoveredPoints.update(t),p),d(()=>{const{state:t,editable:n,highlightEnabled:s,viewModel:r}=i,h=r.input;return w(h,l=>{l.commitProperty("geometry"),l.commitProperty("layer")}),{input:h,state:t,editable:n,highlightEnabled:s}},t=>this._updateInputRepresentation(t),p),d(()=>i.viewModel.chartData,t=>this._profileLines.update(t),p),d(()=>w(i.viewModel.input,t=>t.geometry),()=>{this._profileLines.remove()},p)])}destroy(){this._handles=u(this._handles),this._inputRepresentation=u(this._inputRepresentation),this._hoveredPoints=u(this._hoveredPoints),this._profileLines=u(this._profileLines)}_updateInputRepresentation({input:e,state:i,editable:t,highlightEnabled:n}){const s=this._inputRepresentation;if(!n)return s.remove();i===y.Selected?s.showHighlight(e):i!==y.Created||t?s.remove():s.showReshaping(e)}}export{K as ElevationProfileView3D};