import{qH as b,lY as L,aC as u,an as S,I as E,aw as v,qI as I,lT as C,b5 as m,g4 as _,gJ as y,eI as l,m5 as V,qJ as $,qK as w,lo as h,z as P,B as T,m_ as j}from"./vendor.508dc62e.js";let f=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=L(),this._tmpP1=u(),this._tmpP2=u(),this._tmpP3=u(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),S(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor(s=>this._addCandidates(t,s,n),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor(i=>{if(E(i.info)){const{id:a,uid:d}=i;n.push({id:a,uid:d})}},t.bounds),!n.length)return;const s={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",s,v(e,{}));for(const i of o.components)this._setFetchEdgeLocations(i)}async add(t){const e=new p(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const n=[];this._edges.forEachNeighbor(s=>{s.component===e&&n.push(s)},e.bounds),this._edges.remove(n),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(E(e)||t.uid!==e.uid)return;const n=I.createView(t.locations),s=new Array(n.count),o=u(),i=u();for(let c=0;c<n.count;c++){const g=j(),r=l(g);n.position0.getVec(c,o),n.position1.getVec(c,i),C(r,r,o,.5),C(r,r,i,.5),m(r,r,t.origin),g[3]=_(r,o);const x=new q(e,c,g);s[c]=x}this._edges.add(s);const{objectIds:a,origin:d}=t;e.info={locations:n,objectIds:a,origin:d}}_addCandidates(t,e,n){const{locations:s,origin:o,objectIds:i}=e.component.info,a=s.position0.getVec(e.index,this._tmpP1),d=s.position1.getVec(e.index,this._tmpP2);m(a,a,o),m(d,d,o);const c=i[s.componentIndex.get(e.index)];this._addEdgeCandidate(t,c,a,d,n),this._addVertexCandidate(t,c,a,n),this._addVertexCandidate(t,c,d,n)}_addEdgeCandidate(t,e,n,s,o){if(!(t.types&y.EDGE))return;const i=l(t.bounds),a=V(n,s,this._tmpLineSegment),d=$(a,i,this._tmpP3);if(!w(t.bounds,d))return null;o.push({type:"edge",objectId:e,target:h(d),distance:_(i,d),start:h(n),end:h(s)})}_addVertexCandidate(t,e,n,s){if(!(t.types&y.VERTEX))return;const o=l(t.bounds);if(!w(t.bounds,n))return null;s.push({type:"vertex",objectId:e,target:h(n),distance:_(o,n)})}};function N(){return new f}f=P([T("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);class p{constructor(e,n){this.id=e,this.bounds=n,this.info=null,this.uid=++p.uid}}p.uid=0;class q{constructor(e,n,s){this.component=e,this.index=n,this.bounds=s}}export{f as SceneLayerSnappingSourceWorker,N as default};