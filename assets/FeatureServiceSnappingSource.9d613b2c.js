var U=Object.defineProperty,D=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(e,t,i)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,E=(e,t)=>{for(var i in t||(t={}))J.call(t,i)&&C(e,i,t[i]);if(P)for(var i of P(t))V.call(t,i)&&C(e,i,t[i]);return e},F=(e,t)=>D(e,j(t));import{nv as A,sZ as L,s_ as Q,b3 as W,fB as B,z as r,A as s,B as g,D as H,F as h,bu as Z,I as b,Y as S,Z as x,Q as N,w as O,s$ as G,v as Y,a6 as q,y as K,hh as X,cq as ee,i1 as te,eC as ie,fx as re,pZ as se,b7 as ne,t0 as ae,cY as oe,io as _,t1 as le}from"./vendor.508dc62e.js";import{o as de}from"./queryEngineUtils.a4b5071e.js";import{b as ue}from"./TileTreeDebugger.eb041fe6.js";import"./VertexSnappingCandidate.603a10c5.js";import"./PointSnappingHint.5527d205.js";function I(e,t){return L(t.extent,z),Q(z,W(pe,e.x,e.y,0))}const z=A(),pe=B();let o=class extends H{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=h(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort((i,a)=>I(t,i)-I(t,a)),e}_scaleEnabled(){return Z(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||b(this.tileInfo))return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,a=[];for(const{row:n,colFrom:c,colTo:y}of e)for(let u=c;u<=y;u++){const v={id:null,level:i,row:n,col:t.normalizeCol(u)};this.tileInfo.updateTileInfo(v),a.push(v)}return a}get tileInfo(){var e,t;return(t=(e=this.view.featuresTilingScheme)==null?void 0:e.tileInfo)!=null?t:null}get tileSize(){return h(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.own(S(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.state)==null?void 0:t.viewpoint},()=>this.notifyChange("tilesCoveringView"),x))}};r([s({readOnly:!0})],o.prototype,"tiles",null),r([s({readOnly:!0})],o.prototype,"_scaleEnabled",null),r([s({readOnly:!0})],o.prototype,"tilesCoveringView",null),r([s({readOnly:!0})],o.prototype,"tileInfo",null),r([s({readOnly:!0})],o.prototype,"tileSize",null),r([s({constructOnly:!0})],o.prototype,"view",void 0),r([s({constructOnly:!0})],o.prototype,"layer",void 0),r([s()],o.prototype,"pointOfInterest",void 0),o=r([g("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],o);let d=class extends N{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=this.effectivePointOfInterest;if(h(t)){const i=e.map(a=>I(t,a));for(let a=1;a<i.length;a++)if(i[a-1]>i[a])return e.sort((n,c)=>I(t,n)-I(t,c)),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles((t=(e=this.view.featureTiles)==null?void 0:e.tiles)==null?void 0:t.toArray()).map(he)}get tileInfo(){var e,t;return(t=(e=this.view.featureTiles)==null?void 0:e.tilingScheme.toTileInfo())!=null?t:null}get tileSize(){var e,t;return(t=(e=this.view.featureTiles)==null?void 0:e.tileSize)!=null?t:256}get effectivePointOfInterest(){var t;const e=this.pointOfInterest;return h(e)?e:(t=this.view.pointsOfInterest)==null?void 0:t.focus.location}initialize(){this.handles.add(S(()=>this.view.featureTiles,e=>{this.handles.remove(R),e&&this.handles.add(e.addClient(),R)},O))}_filterTiles(e){return b(e)?[]:e.filter(t=>Math.abs(t.measures.screenRect[3]-t.measures.screenRect[1])>ce&&t.measures.visibility===G.VISIBLE_ON_SURFACE)}};function he({lij:[e,t,i],extent:a}){return{id:`${e}/${t}/${i}`,level:e,row:t,col:i,extent:a}}r([s({readOnly:!0})],d.prototype,"tiles",null),r([s({readOnly:!0})],d.prototype,"tilesCoveringView",null),r([s({readOnly:!0})],d.prototype,"tileInfo",null),r([s({readOnly:!0})],d.prototype,"tileSize",null),r([s({constructOnly:!0})],d.prototype,"view",void 0),r([s()],d.prototype,"pointOfInterest",void 0),r([s()],d.prototype,"effectivePointOfInterest",null),d=r([g("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],d);const ce=50,R="feature-tiles";let m=class extends ue{constructor(e){super(e),this.handles=new Y}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.handles.add(q(()=>clearInterval(e)))}destroy(){this.handles.destroy()}getTiles(){if(!this.debugInfo)return[];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach(n=>{e.set(n.data.id,n.featureCount)}),this.debugInfo.pendingTiles.forEach(n=>{e.set(n.data.id,n.featureCount),t.set(n.data.id,n.state)});const i=n=>{var u;const c=t.get(n),y=(u=e.get(n))!=null?u:"?";return c?`${c}:${y}
${n}`:`store:${y}
${n}`},a=new Map;return this.debugInfo.storedTiles.forEach(n=>{a.set(n.data.id,n.data)}),this.debugInfo.pendingTiles.forEach(n=>{a.set(n.data.id,n.data)}),Array.from(a.values()).map(n=>({lij:[n.level,n.row,n.col],geometry:K.fromExtent(X(n.extent,this.view.spatialReference)),label:i(n.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this.debugInfo=e,this.update()})}};r([s({constructOnly:!0})],m.prototype,"handle",void 0),m=r([g("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],m);let p=class extends N{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy()}initialize(){this.workerHandle=new fe(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",({updating:e})=>this.workerHandleUpdating=e),this.workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){const i=this._serviceInfoFromLayer(e.layer);if(b(i))return;const a={configuration:this._convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",a,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this._convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const i={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:h(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(i,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:h(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var y,u,v,k,T,$;const i=this.editId++,a={id:i};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",a,t));const n=await this.updatingHandles.addPromise(ee(e.result,t)),c={id:i,edits:{addedFeatures:(u=(y=n.addedFeatures)==null?void 0:y.map(({objectId:w})=>w))!=null?u:[],deletedFeatures:(k=(v=n.deletedFeatures)==null?void 0:v.map(({objectId:w,globalId:M})=>({objectId:w,globalId:M})))!=null?k:[],updatedFeatures:($=(T=n.updatedFeatures)==null?void 0:T.map(({objectId:w})=>w))!=null?$:[]}};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",c,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}_convertConfiguration(e){return{filter:h(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}_serviceInfoFromLayer(e){var t;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:e.parsedUrl.path,fields:e.fields.map(i=>i.toJSON()),geometryType:te.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(t=e.timeInfo)==null?void 0:t.toJSON()}}};r([s({constructOnly:!0})],p.prototype,"schedule",void 0),r([s({readOnly:!0})],p.prototype,"updating",null),r([s({readOnly:!0})],p.prototype,"availability",void 0),r([s()],p.prototype,"workerHandleUpdating",void 0),p=r([g("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],p);class fe extends ie{constructor(t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated"})}}let f=class extends H{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[{id:"0/0/0",level:0,row:0,col:0,extent:re(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new se({origin:new ne({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new ae({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};r([s({readOnly:!0})],f.prototype,"tiles",null),r([s({readOnly:!0})],f.prototype,"tileInfo",null),r([s({readOnly:!0})],f.prototype,"tileSize",null),r([s({constructOnly:!0})],f.prototype,"layer",void 0),r([s()],f.prototype,"pointOfInterest",void 0),f=r([g("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],f);let l=class extends oe(H){constructor(e){super(e)}get updateTilesParameters(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){const e=this.view;if(h(e))switch(e.type){case"2d":this.tilesOfInterest=new o({view:e,layer:this.layer}),this.workerHandle=new p;break;case"3d":{const t=e.resourceController;this.tilesOfInterest=new d({view:e}),this.workerHandle=new p({schedule:i=>t.schedule(i)});break}}else this.tilesOfInterest=new f({layer:this.layer}),this.workerHandle=new p;this.handles.add([_(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add(()=>this.updateTilesParameters,()=>this.workerHandle.updateTiles(this.updateTilesParameters,null),O),this.handles.add([S(()=>this.configuration,t=>this.workerHandle.configure(t,null),x)]),h(e)&&this.handles.add(S(()=>le.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,t=>{t&&!this.debug?(this.debug=new m({view:e,handle:this.workerHandle}),this.handles.add(_(this.debug),"debug")):!t&&this.debug&&this.handles.remove("debug")},O)),this.handles.add(this.layerSource.layer.on("apply-edits",t=>{this.workerHandle.applyEdits(t,null)}))}refresh(){this.workerHandle.refresh(null)}async fetchCandidates(e,t){return this.tilesOfInterest.pointOfInterest=e.coordinateHelper.vectorToPoint(e.point),(await this.workerHandle.fetchCandidates(F(E({},e),{filter:null}),t)).candidates.map(i=>de(i,e.coordinateHelper,e.elevationInfo))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};r([s({constructOnly:!0})],l.prototype,"spatialReference",void 0),r([s({constructOnly:!0})],l.prototype,"layerSource",void 0),r([s({constructOnly:!0})],l.prototype,"view",void 0),r([s()],l.prototype,"tilesOfInterest",void 0),r([s({readOnly:!0})],l.prototype,"updateTilesParameters",null),r([s({readOnly:!0})],l.prototype,"updating",null),r([s({readOnly:!0})],l.prototype,"configuration",null),r([s({readOnly:!0})],l.prototype,"availability",null),l=r([g("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],l);export{l as FeatureServiceSnappingSource};
