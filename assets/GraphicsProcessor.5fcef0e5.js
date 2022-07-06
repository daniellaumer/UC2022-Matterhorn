var V=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(e,t,i)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))S.call(t,i)&&d(e,i,t[i]);if(u)for(var i of u(t))x.call(t,i)&&d(e,i,t[i]);return e},y=(e,t)=>v(e,w(t));import{z as a,A as n,B as E,Q as G,R as O,V as A,F as o,W as j,X as _,Y as g,Z as P,N as h,_ as R,$,a0 as I,a1 as H,a2 as c,a3 as D,r as b,a4 as z,I as f,a5 as B,a6 as U,a7 as q,a8 as k}from"./vendor.508dc62e.js";import{b as M,j as T}from"./Graphics3DScaleVisibility.fcdfba3b.js";import{l as F,d as L,s as N}from"./Graphics3DObjectStates.53151fab.js";let r=class extends G{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.elevationAlignment=new F,this.drapeSourceType=O.Features,this._suspendResumeExtent=null}normalizeCtorArgs(e){const t=y(p({},e),{scaleVisibility:null,frustumVisibility:null});return delete t.scaleVisibilityEnabled,delete t.frustumVisibilityEnabled,e.scaleVisibilityEnabled&&(t.scaleVisibility=new M),e.frustumVisibilityEnabled&&(t.frustumVisibility=new L),t}initialize(){const e=new T({owner:this,layer:this.owner.layer,preferredUpdatePolicy:A.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",e);const{layer:t,scaleVisibility:i}=this;if(o(i)&&"effectiveScaleRange"in t){const s=t;this.updatingHandles.add(()=>s.effectiveScaleRange,()=>i.layerMinMaxScaleChangeHandler())}if("fullOpacity"in this.owner){const s=this.owner;this.updatingHandles.add(()=>s.fullOpacity,()=>this.graphicsCore.opacityChange())}if("elevationInfo"in t){const s=t;this.updatingHandles.add(()=>s.elevationInfo,(l,C)=>{j(l,C)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())})}}async setup(){const e=(t,i,s)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,i,s);if(this.elevationAlignment.setup(this,e,this.graphicsCore,this.view.elevationProvider),o(this.scaleVisibility)&&"effectiveScaleRange"in this.layer){const t=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this,this.layer,e,this.graphicsCore,t)}o(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new N(this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})}catch(t){if(_(t))return;throw t}this.destroyed||(this.handles.add(g(()=>this.view.clippingArea,()=>this._updateClippingExtent(),P)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",h(this.elevationAlignment)),this._set("scaleVisibility",h(this.scaleVisibility)),this._set("frustumVisibility",h(this.frustumVisibility)),this._set("objectStates",h(this.objectStates)),this._set("graphicsCore",h(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibilitySuspended(){return!(!o(this.scaleVisibility)||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return!(!o(this.frustumVisibility)||!this.frustumVisibility.suspended)}get suspended(){var e;return(e=this.owner.suspended)!=null?e:!1}get updating(){var e;return!!(((e=this.graphicsCore)==null?void 0:e.updating)||o(this.scaleVisibility)&&this.scaleVisibility.updating||o(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}get graphics3DGraphics(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return(e=this.owner.fullOpacity)!=null?e:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const s=R(e,{renderer:t,arcade:i});if(o(s)&&s.color){const l=s.color;l[0]=l[0]/255,l[1]=l[1]/255,l[2]=l[2]/255}return s}getRenderingInfoAsync(e,t,i,s){return $(e,p({renderer:t,arcade:i},s))}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find(i=>i.uid===e);if(t){const i=this.layer instanceof I?this.layer:null,s=H(t,i);return{type:"graphic",graphic:s,layer:s.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(c.MaskOccludee,null);return this.objectStates.setUid(t,e.uid),i}highlight(e){if(e instanceof D)return m;if(typeof e=="number")return this.highlight([e]);if(e instanceof b)return this.highlight([e]);if(e instanceof z&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof b){const t=e.map(l=>l.uid),{set:i,handle:s}=this.objectStates.acquireSet(c.Highlight,null);return this.objectStates.setUids(i,t),s}if(typeof e[0]=="number"){const t=e,{set:i,handle:s}=this.objectStates.acquireSet(c.Highlight,null);return this.objectStates.setObjectIds(i,t),s}}return m}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(f(e)&&f(t))return;const i=({computedExtent:s,extentPadding:l})=>{this._suspendResumeExtent=q(s,this._suspendResumeExtent,k,l),o(e)&&e.setExtent(this._suspendResumeExtent),o(t)&&t.setExtent(this._suspendResumeExtent)};this.handles.add(g(()=>{var s,l;return{computedExtent:(s=this.graphicsCore)==null?void 0:s.computedExtent,extentPadding:(l=this.graphicsCore)==null?void 0:l.extentPadding}},s=>i(s),B))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};a([n()],r.prototype,"type",void 0),a([n({constructOnly:!0})],r.prototype,"owner",void 0),a([n()],r.prototype,"layer",null),a([n()],r.prototype,"view",null),a([n({constructOnly:!0})],r.prototype,"graphicsCore",void 0),a([n({constructOnly:!0})],r.prototype,"scaleVisibility",void 0),a([n({constructOnly:!0})],r.prototype,"frustumVisibility",void 0),a([n({readOnly:!0})],r.prototype,"elevationAlignment",void 0),a([n({readOnly:!0})],r.prototype,"objectStates",void 0),a([n({readOnly:!0})],r.prototype,"scaleVisibilitySuspended",null),a([n({readOnly:!0})],r.prototype,"frustumVisibilitySuspended",null),a([n()],r.prototype,"suspended",null),a([n({readOnly:!0})],r.prototype,"updating",null),a([n()],r.prototype,"loadedGraphics",null),a([n()],r.prototype,"fullOpacity",null),a([n()],r.prototype,"slicePlaneEnabled",null),a([n()],r.prototype,"drapeSourceType",void 0),a([n()],r.prototype,"updatePolicy",null),r=a([E("esri.views.3d.layers.graphics.GraphicsProcessor")],r);const m=U();export{r as _};