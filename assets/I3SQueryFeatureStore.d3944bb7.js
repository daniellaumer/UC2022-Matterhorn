import{ar as pe,z as c,A as u,e9 as he,B as K,aD as q,D as Z,b2 as fe,bg as ge,F as d,I as m,e3 as me,fu as Ee,fg as k,fv as we,di as U,cx as z,fw as Se,cP as H,fx as be,fy as Fe,bF as Ie,bx as ve,bE as _e,ff as Re,fz as Oe,fA as xe,eA as T,b5 as G,b4 as $,b3 as P,v as Me,a3 as Qe,aF as je,aU as Y,ci as Ce,fo as X,ai as L,bC as De,bo as Ae,af as Ne,d2 as Te,ay as Ge,fB as $e}from"./vendor.508dc62e.js";import{Y as ke}from"./QueryEngine.a0f78978.js";import{L as A}from"./I3SMeshView3D.5ea22a24.js";const j=pe.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");let f=class extends Z{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){fe(()=>{var e;return((e=ge(this.viewFilter))==null?void 0:e.geometry)||d(this.layerFilter)}).then(()=>this.loadAsyncModule(import("./geometryEngine.9e6ec958.js").then(e=>{this.destroyed||(this._geometryEngine=e,this.applyFilters())})))}get sortedObjectIds(){if(m(this.viewFilter)||m(this.viewFilter.objectIds))return null;const e=new Float64Array(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=d(this.viewFilter)?this.viewFilter.where:null;if(m(e)||!e)return null;try{return me.create(e,this.layerFieldsIndex)}catch(t){j.error(`Failed to parse filter where clause: ${t}`)}return null}addFilters(e,t,r,n){const s=this.sortedObjectIds;d(s)&&e.push(l=>Ee(s,!0,l)),this.addSqlFilter(e,this.parsedWhereClause);const a=this._layerMaskGeometries,i=this._geometryEngine;if(d(a)&&d(this.layerFilter)&&d(i)){const l=this.layerFilter.spatialRelationship;e.push((p,h)=>te(i,p,h,n,t,r,a,l))}const o=this._viewMaskGeometries;if(d(o)&&d(this.viewFilter)&&d(i)){const l=this.viewFilter.spatialRelationship;e.push((p,h)=>te(i,p,h,n,t,r,o,l))}}isMBSGeometryVisible(e,t,r){const n=this._layerMaskGeometries,s=this._geometryEngine;if(d(n)&&d(this.layerFilter)&&d(s)){const i=this.layerFilter.spatialRelationship,o=n[0].spatialReference||t;return k(e,r,D,o)?ee(s,D,n,o,i):(j.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const a=this._viewMaskGeometries;if(d(a)&&d(this.viewFilter)&&d(s)){const i=this.viewFilter.spatialRelationship,o=a[0].spatialReference||t;return k(e,r,D,o)?ee(s,D,a,o,i):(j.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=this._viewMaskGeometries,t=this._layerMaskGeometries;return m(e)||m(t)?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return m(e)||m(this._geometryEngine)?null:N(this._geometryEngine,e.geometry,e.spatialRelationship)}get _viewMaskGeometries(){if(m(this.viewFilter)||m(this._geometryEngine))return null;const{geometry:e}=this.viewFilter;if(m(e))return null;const{distance:t,units:r}=this.viewFilter,n=this.viewFilter.spatialRelationship,s=e.type==="mesh"?e.extent:e;if(m(t)||t===0)return N(this._geometryEngine,s,n);const a=r||we(s.spatialReference);if(s.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(s,t,a);return N(this._geometryEngine,l,n)}const i=U(s,z.WGS84);if(d(i)){const l=U(this._geometryEngine.geodesicBuffer(i,t,a),s.spatialReference);return N(this._geometryEngine,l,n)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Se().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let o=null;try{o=H(s,z.WGS84)}catch{}if(o)try{o=H(this._geometryEngine.geodesicBuffer(o,t,a),s.spatialReference)}catch{o=null}return o||j.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${s.spatialReference.wkid}) to WGS84.`),N(this._geometryEngine,o,n)}static checkSupport(e){return!m(e)&&(e.timeExtent?(j.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!Je(e.spatialRelationship)||(j.warn(`Filters with spatialRelationship other than ${ne.join(", ")} are not supported for mesh scene layers`),!1))}};c([u()],f.prototype,"layerFilter",void 0),c([u({type:he})],f.prototype,"viewFilter",void 0),c([u()],f.prototype,"layerFieldsIndex",void 0),c([u()],f.prototype,"loadAsyncModule",void 0),c([u()],f.prototype,"applyFilters",void 0),c([u()],f.prototype,"addSqlFilter",void 0),c([u({readOnly:!0})],f.prototype,"sortedObjectIds",null),c([u({readOnly:!0})],f.prototype,"parsedWhereClause",null),c([u({readOnly:!0})],f.prototype,"parsedGeometry",null),c([u({readOnly:!0})],f.prototype,"_layerMaskGeometries",null),c([u({readOnly:!0})],f.prototype,"_viewMaskGeometries",null),c([u()],f.prototype,"_projectionEngineLoaded",void 0),c([u()],f.prototype,"_geometryEngine",void 0),f=c([K("esri.views.3d.layers.i3s.I3SMeshViewFilter")],f);const ne=(e=>e)(["contains","intersects","disjoint"]);function Je(e){return e!=null&&ne.includes(e)}var y;function N(e,t,r){if(m(t))return null;if(r==="disjoint"&&t.type==="polygon"){const n=new Array(t.rings.length);for(let i=0;i<t.rings.length;++i){const o=be(1/0,1/0,-1/0,-1/0);Fe(o,t.rings[i]),n[i]={type:"polygon",rings:[t.rings[i]],spatialReference:t.spatialReference,aabr:o}}n.sort((i,o)=>i.aabr[0]-o.aabr[0]);const s=new Set,a=new Ie;for(let i=0;i<n.length;++i){const o=n[i];for(let l=i+1;l<n.length;++l){const p=n[l];if(p.aabr[0]>=o.aabr[2])break;s.add(p)}s.forEach(l=>{if(o!==l){if(l.aabr[2]<=o.aabr[0])s.delete(l);else if(e.intersects(o,l)){o.rings=o.rings.concat(l.rings),ve(o.aabr,l.aabr,o.aabr),delete o._geVersion,s.delete(l);const p=_e(n,l,n.length,a);n.splice(p,1)}}}),s.add(o)}for(const i of n)delete i.aabr;return n}return[t]}function ee(e,t,r,n,s){const a=se(e,t,n);return r.every(i=>ie(e,i,a,s)!==y.DISCARD)}function te(e,t,r,n,s,a,i,o){const l=i[0].spatialReference||s.spatialReference;if(!k(r.node.mbs,a,D,l))return void j.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const p=se(e,D,l),h=Be(o,s,l,n,r.objectHandle);for(const g of i){if(t.length===0)return;switch(ie(e,g,p,o)){case y.DISCARD:return void(t.length=0);case y.KEEP:continue}Re(t,r.featureIds,F=>Pe(e,g,F,h))}}(function(e){e[e.KEEP=0]="KEEP",e[e.DISCARD=1]="DISCARD",e[e.TEST=2]="TEST"})(y||(y={}));const D=[0,0,0,0];function Be(e,t,r,n,s){const a=t.renderSpatialReference,i=new Map,o={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};o.rings[0][3]=o.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let p,h;switch(e){case"intersects":p=(g,F,O)=>g.intersects(F,O)?y.KEEP:y.TEST,h=W;break;case"contains":p=(g,F,O)=>g.contains(F,O)?y.TEST:y.DISCARD,h=W;break;default:p=(g,F,O)=>g.disjoint(F,O)?y.TEST:y.DISCARD,h=oe}return{collection:n,object:s,type:e,maskSR:r,renderSR:a,aabbCache:i,triangle:o,positions:l,triangleTest:p,geometryTest:h}}function se(e,t,r){const n={x:t[0],y:t[1],hasZ:!1,hasM:!1,type:"point",spatialReference:r},s=!r.isWGS84&&!r.isWebMercator,a=Number.isNaN(t[3])?0:Oe(t[3],0,2*xe.radius),i=s?e.buffer(n,a,1):e.geodesicBuffer(n,a,1);return i.type="polygon",i}function ie(e,t,r,n){switch(n){case"intersects":case"contains":return W(e,t,r);case"disjoint":return oe(e,t,r)}}function W(e,t,r){return e.intersects(t,r)?e.contains(t,r)?y.KEEP:y.TEST:y.DISCARD}function oe(e,t,r){return e.intersects(t,r)?e.contains(t,r)?y.DISCARD:y.TEST:y.KEEP}const Ve=2**-32;function Pe(e,t,r,n){const{collection:s,object:a,renderSR:i,maskSR:o,geometryTest:l,aabbCache:p}=n;let h=p.get(r);if(!h){const x=s.getObjectTransform(a);s.getComponentAabb(a,r,R);const S=[[R[0],R[1],0],[R[0],R[4],0],[R[3],R[4],0],[R[3],R[1],0]];for(let E=0;E<4;++E)T(S[E],S[E],x.rotationScale),G(S[E],S[E],x.position),$(S[E],i,S[E],o);h={rings:[S],hasZ:!1,hasM:!1,type:"polygon",spatialReference:o},h.rings[0][4]=h.rings[0][0],p.set(r,h)}switch(l(e,t,h)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:g,triangleTest:F,positions:O}=n,w=g.rings[0][0],I=g.rings[0][1],v=g.rings[0][2],C=s.getObjectTransform(a);s.getComponentPositions(a,r,O);const{indices:J,data:_,stride:B,startIndex:ae,endIndex:le}=O;for(let x=ae;x<le;x+=3){const S=B*J[x+0],E=B*J[x+1],V=B*J[x+2];P(w,_[S+0],_[S+1],_[S+2]),P(I,_[E+0],_[E+1],_[E+2]),P(v,_[V+0],_[V+1],_[V+2]),T(w,w,C.rotationScale),T(I,I,C.rotationScale),T(v,v,C.rotationScale),G(w,w,C.position),G(I,I,C.position),G(v,v,C.position),$(w,i,w,o),$(I,i,I,o),$(v,i,v,o);const ce=I[0]-w[0],ue=I[1]-w[1],ye=v[0]-w[0],de=v[1]-w[1];if(!(Math.abs(ce*de-ue*ye)<Ve))switch(delete g._geVersion,F(e,t,g)){case y.DISCARD:return!1;case y.KEEP:return!0}}return n.type!=="intersects"}const R=q(),Le=ke;let M=class extends Z{constructor(e){super(e),this._dataQueryEngineInstance=null,this._handles=new Me}get defaultQueryJSON(){return new Qe({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this._ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}async executeQueryForCount(e,t){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:n}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:je.fromJSON(n)}}async executeQueryForIds(e,t){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new Y("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(r.returnCentroid)throw new Y("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this.dataQueryEngine.executeQuery(r,t),s=Ce.fromJSON(n);return s.features.forEach(a=>{a.geometry=null}),s}_ensureQueryJSON(e){return m(e)?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||"OBJECTID",t="esriGeometryPolygon",r=this.layer.fields.map(o=>o.toJSON()),n=this.layerView.view.resourceController.scheduler,s=this.spatialReference.toJSON(),a=this.priority,i=this.spatialIndex;return this._dataQueryEngineInstance=new Le({hasZ:!0,hasM:!1,geometryType:t,fields:r,timeInfo:null,spatialReference:s,objectIdField:e,featureStore:i,scheduler:n,priority:a}),this._dataQueryEngineInstance}};c([u({constructOnly:!0})],M.prototype,"layerView",void 0),c([u({constructOnly:!0})],M.prototype,"priority",void 0),c([u({constructOnly:!0})],M.prototype,"spatialIndex",void 0),c([u({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],M.prototype,"spatialReference",void 0),c([u({readOnly:!0,aliasOf:"layerView.i3slayer"})],M.prototype,"layer",void 0),c([u({readOnly:!0})],M.prototype,"defaultQueryJSON",null),M=c([K("esri.views.3d.layers.i3s.I3SQueryEngine")],M);class ze{constructor(t){this.objectIdField=t.objectIdField,this.getFeatureExtent=t.getFeatureExtent}getObjectId(t){return t.id}getAttributes(t){const{meta:r,index:n}=t,s={};this.objectIdField&&(s[this.objectIdField]=t.id);const a=d(r.attributeInfo)&&r.attributeInfo.attributeData;if(d(a))for(const i of Object.keys(a))s[i]=X(a[i],n);return s}getAttribute(t,r){if(r===this.objectIdField)return t.id;const{meta:n,index:s}=t,a=d(n.attributeInfo)&&n.attributeInfo.attributeData;return d(a)?X(a[r],s):null}getGeometry(t){if(t.geometry)return t.geometry;const[r,n,s,a,i]=this.getFeatureExtent(t,re);return new L([5],[r,n,s,a,n,s,a,i,s,r,i,s,r,n,s])}getCentroid(t,r){if(t.geometry)return De(new L,t.geometry,r.hasZ,r.hasM);const[n,s,a,i,o,l]=this.getFeatureExtent(t,re);return new L([0],[(n+i)/2,(s+o)/2,(a+l)/2])}cloneWithGeometry(t,r){const{id:n,index:s,meta:a}=t;return{id:n,index:s,meta:a,geometry:r}}}const re=q();let Q=class extends Z{constructor(e){super(e),this.events=new Ne}forEach(e){this.forAllFeatures(t=>(e(t),A.CONTINUE))}forEachBounds(e,t,r){const n=this.getFeatureExtent;for(const s of e)t(n(s,r))}forEachInBounds(e,t){this.forAllFeatures(r=>{const n=this.getFeatureExtent(r,We);return Te(e,Ge(n,Ke))&&t(r),A.CONTINUE},r=>{if(k(r.node.mbs,this.sourceSpatialReference,b,this.viewSpatialReference),b[0]>=e[0]&&b[2]<=e[2]&&b[1]>=e[1]&&b[3]<=e[3])return A.CONTINUE;const n=Math.max(e[0],Math.min(b[0],e[2])),s=Math.max(e[1],Math.min(b[1],e[3])),a=b[0]-n,i=b[1]-s;return a*a+i*i<=b[3]*b[3]?A.CONTINUE:A.SKIP})}};c([u({constructOnly:!0})],Q.prototype,"featureAdapter",void 0),c([u({constructOnly:!0})],Q.prototype,"toArray",void 0),c([u({constructOnly:!0})],Q.prototype,"forAllFeatures",void 0),c([u({constructOnly:!0})],Q.prototype,"getFeatureExtent",void 0),c([u({constructOnly:!0})],Q.prototype,"sourceSpatialReference",void 0),c([u({constructOnly:!0})],Q.prototype,"viewSpatialReference",void 0),Q=c([K("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],Q);const b=$e(),We=q(),Ke=Ae();export{f as C,Q as f,ze as n,M as p};