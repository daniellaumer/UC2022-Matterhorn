var $=Object.defineProperty;var M=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var I=(t,e,r)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,R=(t,e)=>{for(var r in e||(e={}))G.call(e,r)&&I(t,r,e[r]);if(M)for(var r of M(e))z.call(e,r)&&I(t,r,e[r]);return t};import{gU as F,z as a,A as s,B as P,E as B,rN as k,rM as D,H as A,t8 as W,t9 as K,ob as U,oc as H,od as q,a0 as Q,cx as h,a4 as J,K as V,c2 as L,aF as x,r as X,I as b,aU as Y,F as T,cw as Z,c4 as ee,ec as E,ef as c,gn as te,rW as re,gK as ae,bf as oe,jl as ie,fw as le,cP as ne}from"./vendor.508dc62e.js";import{n as se}from"./objectIdUtils.773397d7.js";function v(t){return t.layers.some(e=>e.layerDefinition.visibilityField!=null)}const j=new F({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ye=new F({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let f=class extends re{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get sublayers(){return this.graphics}};a([s({readOnly:!0})],f.prototype,"sublayers",null),a([s()],f.prototype,"layer",void 0),a([s()],f.prototype,"layerId",void 0),a([s({readOnly:!0})],f.prototype,"visibilityMode",void 0),f=a([P("esri.layers.MapNotesLayer.MapNotesSublayer")],f);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new B().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new k().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new D().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new D().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new A().toJSON()}];let i=class extends W(K(U(H(q(Q))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new J(C.map(e=>new f({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!v(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!v(e))return null;const o=e.layers.map(l=>{const n=new V;return n.read(l,r),n});return new J({items:o})}readLegacyfeatureCollectionJSON(t,e){return v(e)?L(e.featureCollection):null}readFullExtent(t,e){if(!e.layers.length||e.layers.every(o=>!o.layerDefinition.extent))return new x({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:h.WGS84});const r=h.fromJSON(e.layers[0].layerDefinition.spatialReference);return e.layers.reduce((o,l)=>{const n=l.layerDefinition.extent;return n?x.fromJSON(n).union(o):o},new x({spatialReference:r}))}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){var n,p;if(v(e))return null;const o=[];let l=e.layers.reduce((y,u)=>{var d;return Math.max(y,(d=u.layerDefinition.id)!=null?d:-1)},-1)+1;for(const{layerDefinition:y,featureSet:u}of e.layers){const d=(n=y.geometryType)!=null?n:u.geometryType,m=(p=y.id)!=null?p:l++,g=C.find(S=>{var w,O,N;return d===S.geometryTypeJSON&&((N=(O=(w=y.drawingInfo)==null?void 0:w.renderer)==null?void 0:O.symbol)==null?void 0:N.type)===S.identifyingSymbol.type});if(g){const S=new f({id:g.id,title:y.name,layerId:m,layer:this,graphics:u.features.map(({geometry:w,symbol:O,attributes:N,popupInfo:_})=>X.fromJSON({attributes:N,geometry:w,symbol:O,popupTemplate:_}))});o.push(S)}}return new J(o)}writeSublayers(t,e,r,o){var d;const{minScale:l,maxScale:n}=this;if(b(t))return;const p=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new Y("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let u=this.spatialReference.toJSON();e:for(const m of t)for(const g of m.graphics)if(T(g.geometry)){u=g.geometry.spatialReference.toJSON();break e}for(const m of C){const g=t.find(S=>m.id===S.id);this._writeMapNoteSublayer(y,g,m,l,n,u,o)}Z("featureCollection.layers",y,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=L(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(b(this.sublayers))return;let t=null;const e=[];for(const o of this.sublayers)for(const l of o.graphics)if(T(l.geometry)){const n=l.geometry;t?ae(n.spatialReference,t)||(oe(n.spatialReference,t)||ie()||await le(),l.geometry=ne(n,t)):t=n.spatialReference,e.push(l)}const r=await ee(e.map(o=>o.geometry));e.forEach((o,l)=>o.geometry=r[l])}_findSublayer(t){var e,r;return b(this.sublayers)?null:(r=(e=this.sublayers)==null?void 0:e.find(o=>o.id===t))!=null?r:null}_writeMapNoteSublayer(t,e,r,o,l,n,p){const y=[];if(!b(e)){for(const u of e.graphics)this._writeMapNote(y,u,r.geometryType,p);this._normalizeObjectIds(y,j),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:L(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[j.toJSON(),ye.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var u,d;if(b(e))return;const{geometry:l,symbol:n,popupTemplate:p}=e;if(b(l))return;if(l.type!==r)return void((u=o==null?void 0:o.messages)==null?void 0:u.push(new E("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(b(n))return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new E("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const y={attributes:R({},e.attributes),geometry:l.toJSON(),symbol:n.toJSON()};T(p)&&(y.popupInfo=p.toJSON()),t.push(y)}_normalizeObjectIds(t,e){const r=e.name;let o=se(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:p}=n;(p[r]==null||l.has(p[r]))&&(p[r]=o++),l.add(p[r])}}};a([s({readOnly:!0})],i.prototype,"capabilities",void 0),a([c(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),a([s({readOnly:!0})],i.prototype,"featureCollections",void 0),a([c(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),a([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),a([c(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),a([s({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),a([s({json:{write:!1}})],i.prototype,"fullExtent",void 0),a([c(["web-map","portal-item"],"fullExtent",["layers"])],i.prototype,"readFullExtent",null),a([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],i.prototype,"legendEnabled",void 0),a([s({type:["show","hide"]})],i.prototype,"listMode",void 0),a([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),a([c(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),a([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),a([c(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),a([s({readOnly:!0})],i.prototype,"multipointLayer",null),a([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),a([s({readOnly:!0})],i.prototype,"pointLayer",null),a([s({readOnly:!0})],i.prototype,"polygonLayer",null),a([s({readOnly:!0})],i.prototype,"polylineLayer",null),a([s({type:h})],i.prototype,"spatialReference",void 0),a([c(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),a([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),a([c("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),a([te("web-map","sublayers")],i.prototype,"writeSublayers",null),a([s({readOnly:!0})],i.prototype,"textLayer",null),a([s()],i.prototype,"title",void 0),a([s({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=a([P("esri.layers.MapNotesLayer")],i);const me=i;export{me as default};
