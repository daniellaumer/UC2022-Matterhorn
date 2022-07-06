var H=Object.defineProperty,W=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?H(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,O=(r,e)=>{for(var t in e||(e={}))K.call(e,t)&&_(r,t,e[t]);if(U)for(var t of U(e))X.call(e,t)&&_(r,t,e[t]);return r},R=(r,e)=>W(r,C(e));import{F,ck as Y,ib as ee,ic as te,id as J,ie as re,z as a,A as l,ig as se,cy as ie,aF as T,cx as ae,cv as oe,B as j,go as D,ih as ne,r as L,ef as le,gn as pe,ii as ue,c9 as ye,c4 as ce,ij as me,ik as de,bN as fe,gZ as he,il as ge,aU as M,I as we,ap as xe,hT as be,aW as ve,bl as Pe}from"./vendor.508dc62e.js";import{q as Ee}from"./DynamicLayerView3D.2e358667.js";import{s as G,a as Ie}from"./drapedUtils.ed692151.js";import{d as Ne,s as $e}from"./popupUtils.b5f8d504.js";import"./LayerView3D.216937df.js";import"./projectExtentUtils.ee292c27.js";import"./ImageMaterial.afb6e84f.js";import"./LayerView.a870198e.js";import"./RefreshableLayerView.2693370b.js";const Q=r=>r.spatialReference.wkid||JSON.stringify(r.spatialReference);function Oe(r,e){const{dpi:t,gdbVersion:i,geometry:s,geometryPrecision:n,height:f,layerOption:p,mapExtent:o,maxAllowableOffset:m,returnFieldName:y,returnGeometry:d,returnUnformattedValues:g,returnZ:I,spatialReference:P,timeExtent:E,tolerance:u,width:v}=r.toJSON(),{dynamicLayers:w,layerDefs:h,layerIds:x}=Fe(r),S=e&&F(e.geometry)?e.geometry:null,b={geometryPrecision:n,maxAllowableOffset:m,returnFieldName:y,returnGeometry:d,returnUnformattedValues:g,returnZ:I,tolerance:u},$=S&&S.toJSON()||s;if(b.imageDisplay=`${v},${f},${t}`,i&&(b.gdbVersion=i),$&&(delete $.spatialReference,b.geometry=JSON.stringify($),b.geometryType=Y($)),P?b.sr=P.wkid||JSON.stringify(P):$&&$.spatialReference?b.sr=Q($):o&&o.spatialReference&&(b.sr=Q(o)),b.time=E?[E.start,E.end].join(","):null,o){const{xmin:B,ymin:Z,xmax:q,ymax:z}=o;b.mapExtent=`${B},${Z},${q},${z}`}return h&&(b.layerDefs=h),w&&!h&&(b.dynamicLayers=w),b.layers=p==="popup"?"visible":p,x&&!w&&(b.layers+=`:${x.join(",")}`),b}function Fe(r){var P,E;const{mapExtent:e,floors:t,width:i,sublayers:s,layerIds:n,layerOption:f,gdbVersion:p}=r,o=(E=(P=s==null?void 0:s.find(u=>u.layer!=null))==null?void 0:P.layer)==null?void 0:E.serviceSublayers,m=f==="popup",y={},d=ee({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),g=[],I=u=>{const v=d===0,w=u.minScale===0||d<=u.minScale,h=u.maxScale===0||d>=u.maxScale;if(u.visible&&(v||w&&h))if(u.sublayers)u.sublayers.forEach(I);else{if((n==null?void 0:n.includes(u.id))===!1||m&&(!u.popupTemplate||!u.popupEnabled))return;g.unshift(u)}};if(s==null||s.forEach(I),s&&!g.length)y.layerIds=[];else{const u=te(g,o,p),v=g.map(w=>{const h=J(t,w);return w.toExportImageJSON(h)});if(u)y.dynamicLayers=JSON.stringify(v);else{if(s){let h=g.map(({id:x})=>x);n&&(h=h.filter(x=>n.includes(x))),y.layerIds=h}else(n==null?void 0:n.length)&&(y.layerIds=n);const w=je(t,g);if(F(w)&&w.length){const h={};for(const x of w)x.definitionExpression&&(h[x.id]=x.definitionExpression);Object.keys(h).length&&(y.layerDefs=JSON.stringify(h))}}}return y}function je(r,e){const t=!!(r==null?void 0:r.length),i=e.filter(s=>s.definitionExpression!=null||t&&s.floorInfo!=null);return i.length?i.map(s=>{const n=J(r,s),f=re(n,s.definitionExpression);return{id:s.id,definitionExpression:f}}):null}var V;let c=V=class extends D{constructor(r){super(r),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(r){return ne(V,r)}};a([l({type:Number,json:{write:!0}})],c.prototype,"dpi",void 0),a([l()],c.prototype,"floors",void 0),a([l({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),a([l({types:se,json:{read:ie,write:!0}})],c.prototype,"geometry",void 0),a([l({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),a([l({type:Number,json:{write:!0}})],c.prototype,"height",void 0),a([l({type:[Number],json:{write:!0}})],c.prototype,"layerIds",void 0),a([l({type:["top","visible","all","popup"],json:{write:!0}})],c.prototype,"layerOption",void 0),a([l({type:T,json:{write:!0}})],c.prototype,"mapExtent",void 0),a([l({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),a([l({type:Boolean,json:{write:!0}})],c.prototype,"returnFieldName",void 0),a([l({type:Boolean,json:{write:!0}})],c.prototype,"returnGeometry",void 0),a([l({type:Boolean,json:{write:!0}})],c.prototype,"returnM",void 0),a([l({type:Boolean,json:{write:!0}})],c.prototype,"returnUnformattedValues",void 0),a([l({type:Boolean,json:{write:!0}})],c.prototype,"returnZ",void 0),a([l({type:ae,json:{write:!0}})],c.prototype,"spatialReference",void 0),a([l()],c.prototype,"sublayers",void 0),a([l({type:oe,json:{write:!0}})],c.prototype,"timeExtent",void 0),a([l({type:Number,json:{write:!0}})],c.prototype,"tolerance",void 0),a([l({type:Number,json:{write:!0}})],c.prototype,"width",void 0),c=V=a([j("esri.rest.support.IdentifyParameters")],c);const k=c;let N=class extends D{constructor(r){super(r),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(r,e){return L.fromJSON({attributes:O({},e.attributes),geometry:O({},e.geometry)})}writeFeature(r,e){if(!r)return;const{attributes:t,geometry:i}=r;t&&(e.attributes=O({},t)),F(i)&&(e.geometry=i.toJSON(),e.geometryType=ue.toJSON(i.type))}};a([l({type:String,json:{write:!0}})],N.prototype,"displayFieldName",void 0),a([l({type:L})],N.prototype,"feature",void 0),a([le("feature",["attributes","geometry"])],N.prototype,"readFeature",null),a([pe("feature")],N.prototype,"writeFeature",null),a([l({type:Number,json:{write:!0}})],N.prototype,"layerId",void 0),a([l({type:String,json:{write:!0}})],N.prototype,"layerName",void 0),N=a([j("esri.rest.support.IdentifyResult")],N);const Se=N;async function Re(r,e,t){const i=(e=Ae(e)).geometry?[e.geometry]:[],s=ye(r);return s.path+="/identify",ce(i).then(n=>{const f=Oe(e,{geometry:n&&n[0]}),p=me(O(R(O({},s.query),{f:"json"}),f)),o=de(p,t);return fe(s.path,o).then(Ve).then(m=>Je(m,e.sublayers))})}function Ve(r){const e=r.data;e.results=e.results||[];const t={results:[]};return t.results=e.results.map(i=>Se.fromJSON(i)),t}function Ae(r){return r=k.from(r)}function Je(r,e){if(!(e==null?void 0:e.length))return r;const t=new Map;function i(s){t.set(s.id,s),s.sublayers&&s.sublayers.forEach(i)}e.forEach(i);for(const s of r.results)s.feature.sourceLayer=t.get(s.layerId);return r}const Ue=r=>{let e=class extends r{initialize(){this.exportImageParameters=new ge({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,i){var f,p,o,m,y,d;const{layer:s}=this;if(!t)throw new M("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const n=(o=(p=(f=this.layer.capabilities)==null?void 0:f.operations)==null?void 0:p.supportsQuery)!=null?o:!0;if(!(((d=(y=(m=this.layer.capabilities)==null?void 0:m.operations)==null?void 0:y.supportsIdentify)!=null?d:!0)&&this.layer.version>=10.5)&&!n)throw new M("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,i):this._fetchPopupFeaturesUsingIdentify(t,i)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)==null?void 0:t.isEmpty)}async _fetchPopupFeaturesUsingIdentify(t,i){const s=await this._createIdentifyParameters(t,i);if(we(s))return[];const{results:n}=await Re(this.layer.parsedUrl,s);return n.map(f=>f.feature)}async _createIdentifyParameters(t,i){var E,u;const{floors:s,spatialReference:n,scale:f}=this.view,p=F(i)?i.event:null,o=await this._collectPopupProviders(this.layer.sublayers,f,i);if(!o.length)return null;await Promise.all(o.map(({sublayer:v})=>v.load().catch(()=>{})));const m=Math.min(xe("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((v,w)=>w.renderer?G({renderer:w.renderer,event:p}):v,2)),y=this.createFetchPopupFeaturesQueryGeometry(t,m),d=be(f,n),g=Math.round(y.width/d),I=new T({xmin:y.center.x-d*g,ymin:y.center.y-d*g,xmax:y.center.x+d*g,ymax:y.center.y+d*g,spatialReference:y.spatialReference}),P=((u=(E=this.layer.capabilities)==null?void 0:E.operations)==null?void 0:u.supportsQuery)===!1||await new Promise(v=>{let w=!1;Promise.all(o.map(async({popupTemplate:h})=>{if(h){const x=await this._loadArcadeModules(h);if(w)return;(x==null?void 0:x.arcadeUtils.hasGeometryOperations(h))&&(w=!0,v(!0))}})).finally(()=>v(!1))});return new k({floors:s,gdbVersion:this.layer.gdbVersion,geometry:t,height:g,layerOption:"popup",mapExtent:I,maxAllowableOffset:P?0:d,returnGeometry:!0,spatialReference:n,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:m,width:g})}async _fetchPopupFeaturesUsingQueries(t,i){const s=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,i),n=F(i)?i.event:null,f=s.map(async({sublayer:p,popupTemplate:o})=>{var I,P;await p.load().catch(()=>{});const m=p.createQuery(),y=G({renderer:p.renderer,event:n}),d=this.createFetchPopupFeaturesQueryGeometry(t,y);if(m.geometry=d,m.outFields=await Ne(p,o),"floors"in this.view){const E=(P=(I=this.view)==null?void 0:I.floors)==null?void 0:P.clone(),u=J(E,p);F(u)&&(m.where=m.where?`(${m.where}) AND (${u})`:u)}const g=await this._loadArcadeModules(o);return g&&g.arcadeUtils.hasGeometryOperations(o)||(m.maxAllowableOffset=d.width/y),(await p.queryFeatures(m)).features});return(await ve(f)).reduce((p,o)=>o.value?[...p,...o.value]:p,[]).filter(p=>p!=null)}async _collectPopupProviders(t,i,s){const n=[],f=async o=>{const m=o.minScale===0||i<=o.minScale,y=o.maxScale===0||i>=o.maxScale;if(o.visible&&m&&y){if(o.sublayers)o.sublayers.forEach(f);else if(o.popupEnabled){const d=$e(o,R(O({},s),{defaultPopupTemplateEnabled:!1}));F(d)&&n.unshift({sublayer:o,popupTemplate:d})}}},p=t.toArray().reverse().map(f);return await Promise.all(p),n}_loadArcadeModules(t){var i;if(((i=t.expressionInfos)==null?void 0:i.length)||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression"))return Pe()}};return a([l()],e.prototype,"exportImageParameters",void 0),a([l({readOnly:!0})],e.prototype,"exportImageVersion",null),a([l()],e.prototype,"layer",void 0),a([l()],e.prototype,"suspended",void 0),a([l(he)],e.prototype,"timeExtent",void 0),e=a([j("esri.views.layers.MapImageLayerView")],e),e};let A=class extends Ue(Ee){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}createFetchPopupFeaturesQueryGeometry(r,e){return Ie(r,e,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};A=a([j("esri.views.3d.layers.MapImageLayerView3D")],A);const qe=A;export{qe as default};