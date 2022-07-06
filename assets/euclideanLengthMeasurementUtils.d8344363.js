var X=Object.defineProperty,J=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var D=(t,n,e)=>n in t?X(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,N=(t,n)=>{for(var e in n||(n={}))$.call(n,e)&&D(t,e,n[e]);if(I)for(var e of I(n))tt.call(n,e)&&D(t,e,n[e]);return t},F=(t,n)=>J(t,Y(n));import{I as P,aS as j,aG as q,F as d,lR as nt,ia as A,ct as K,lV as et,z as E,A as B,B as at,D as rt,aT as ot,gK as H,lW as it,lX as L,b4 as G,g4 as M,b3 as st,aC as z}from"./vendor.508dc62e.js";import{G as V}from"./InteractiveToolBase.d0b67f52.js";import{e as lt}from"./SnappingContext.6a9c04a5.js";import{o as h}from"./quantityUtils.759564e3.js";import{i as Q}from"./measurementUtils.5ef825ab.js";class mt{constructor(){this.next=new V}createSnapDragEventPipelineStep({predicate:n=()=>!0,cancel:e,snappingManager:a,snappingContext:s,updatingHandles:c}){if(P(a))return r=>r;let p=null,o=null;const y=()=>{p=A(p),a.doneSnapping(),d(o)&&o.frameTask.remove(),o=null};e.next(r=>(y(),r)),this.next=new V;const k=K(async({frameTask:r,point:u,context:m,event:v,dx:R,dy:Z},x)=>{const _=await r.schedule(()=>a.snap(u,m,x),x);if(_.valid){let b=await r.schedule(()=>_.apply(),x);u!==f&&(b=a.update(f,m)),et(b,g)||(v.mapEnd.x=b.x+R,v.mapEnd.y=b.y+Z,this.next.execute(v))}});let f,g;return r=>{if(!n(r))return r;if(r.action==="start"){const u=a.view.type==="3d"?a.view.resourceController.scheduler.registerTask(j.SNAPPING):q;o={context:new lt({editGeometryOperations:s.editGeometryOperations,elevationInfo:s.elevationInfo,pointer:s.pointer,vertexHandle:d(r.info)?r.info.handle:null,excludeFeature:s.excludeFeature,visualizer:s.visualizer}),originalPos:d(r.snapOrigin)?s.coordinateHelper.vectorToDehydratedPoint(r.snapOrigin):r.mapStart,frameTask:u}}if(d(o)){const u=o.context.coordinateHelper.vectorToDehydratedPoint(o.context.coordinateHelper.arrayToVector([o.originalPos.x,o.originalPos.y,o.originalPos.z]));u.x+=r.mapEnd.x-r.mapStart.x,u.y+=r.mapEnd.y-r.mapStart.y;const m=r.mapStart.x-o.originalPos.x,v=r.mapStart.y-o.originalPos.y,R=F(N({},r),{action:"update"}),Z=o.context,x=a.update(u,o.context);if(g=x,r.mapEnd.x=x.x+m,r.mapEnd.y=x.y+v,f=u,r.action!=="end"){const _=o.frameTask;d(p)||(p=new AbortController),c.addPromise(nt(k({frameTask:_,event:R,context:Z,point:u,dx:m,dy:v},p.signal)))}}return r.action==="end"&&y(),r}}}let w=class extends rt{constructor(t){super(t),this.stagedPoint=null,this._abortController=null,this._snap=K(async(n,e,a,s)=>{const c=await this._frameTask.schedule(()=>e.snap(n,a,s),s);c.valid&&await this._frameTask.schedule(()=>{this.stagedPoint=c.apply(),n!==this._snapMapPoint&&(this.stagedPoint=e.update(this._snapMapPoint,a))},s)})}initialize(){var n,e;const t=this.view.type==="3d"?(e=(n=this.view)==null?void 0:n.resourceController)==null?void 0:e.scheduler:null;this._frameTask=d(t)?t.registerTask(j.SNAPPING):q}destroy(){this._abortController=A(this._abortController),this._frameTask=ot(this._frameTask)}async snap(t,n,e){return this.stagedPoint=n.update(t,e),this._snapMapPoint=t,P(this._abortController)&&(this._abortController=new AbortController),this._snap(t,n,e,this._abortController.signal)}abort(){this._abortController=A(this._abortController)}};E([B({constructOnly:!0})],w.prototype,"view",void 0),E([B()],w.prototype,"stagedPoint",void 0),w=E([at("esri.views.interactive.snapping.SnappingOperation")],w);function Pt(t){return U(t,"direct")}function zt(t){return U(t,"horizontal")}function U(t,n){const{hasZ:e,spatialReference:a}=t,s=Q(a);let c=0;const p=L(s);if(P(p))return null;const o=n==="direct"?ut:W;for(const y of t.paths){if(y.length<2)continue;const k=y.length-1;for(let f=0;f<k;++f){const g=y[f];i[0]=g[0],i[1]=g[1],i[2]=e?g[2]:0;const r=y[f+1];l[0]=r[0],l[1]=r[1],l[2]=e?r[2]:0;const u=o(i,l,a);if(P(u))return null;c+=u.value}}return h(c,p)}function _t(t,n){const{spatialReference:e}=t;return H(e,n.spatialReference)?(i[0]=t.x,i[1]=t.y,i[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,ct(i,l,e)):null}function bt(t,n){const{spatialReference:e}=t;return H(e,n.spatialReference)?(i[0]=t.x,i[1]=t.y,i[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,W(i,l,e)):null}function wt(t,n){const{spatialReference:e}=t;return H(e,n.spatialReference)?(i[0]=t.x,i[1]=t.y,i[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,pt(i,l,e)):null}function Tt(t){return i[0]=t.x,i[1]=t.y,i[2]=t.hasZ?t.z:0,dt(i,t.spatialReference)}function ct(t,n,e){const a=C(t,n,e);return d(a)?{direct:h(a.direct,a.unit),horizontal:h(a.horizontal,a.unit),vertical:h(a.vertical,a.unit)}:null}function ut(t,n,e){const a=C(t,n,e,"direct");return d(a)?h(a.direct,a.unit):null}function W(t,n,e){const a=C(t,n,e,"horizontal");return d(a)?h(a.horizontal,a.unit):null}function pt(t,n,e){const a=C(t,n,e,"vertical");return d(a)?h(a.verticalSigned,a.unit):null}function dt(t,n){const e=it(n);return d(e)?h(t[2],e):null}function C(t,n,e,a){const s=Q(e),c=L(s);if(P(c))return null;const p=n[2]-t[2];if(a==="vertical")return{verticalSigned:p,unit:c};if(!G(t,e,O,s)||!G(n,e,T,s))return null;if(a==="direct")return{direct:M(T,O),unit:c};if(st(S,t[0],t[1],n[2]),!G(S,e,S,s))return null;const o=M(S,T);return a==="horizontal"?{horizontal:o,unit:c}:{direct:M(T,O),horizontal:o,vertical:Math.abs(p),unit:c}}const i=z(),l=z(),O=z(),T=z(),S=z();export{W as Z,zt as a,wt as b,mt as d,Pt as f,pt as g,w as h,_t as m,Tt as v,ut as x,bt as y};
