import{vq as P,bN as D,F as c,vr as _,vs as j,vm as q,bg as $,e2 as h,vt as w,t5 as z,vn as N,pA as k,ml as S,vu as O,vv as G,vw as J,j as R,fc as K,vx as Q,jq as U,t6 as V,pC as H,pI as M,me as F,pJ as W,vy as I,vz as X,vA as Y,vB as Z,vC as tt,vD as E,vE as et,vF as nt,vG as ot,vH as rt,vI as st,vJ as at,vK as B,vL as it,pF as ct,vM as ut,vN as lt,hr as C,vO as ft,vP as pt,vQ as mt,dd as T,I as vt,vR as dt}from"./vendor.508dc62e.js";import{k as gt}from"./georeference.123d3847.js";import"./axisAngleDegrees.035172bf.js";async function Lt(t,e,o){const s=new P(xt(o)),n=(await _(s,e,o,!0)).model,p=n.lods.shift(),l=new Map,u=new Map;n.textures.forEach((x,A)=>l.set(A,wt(x))),n.materials.forEach((x,A)=>u.set(A,bt(x,l)));const i=ht(p);for(const x of i.parts)yt(i,x,u);const{position:v,normal:f,tangent:r,color:a,texCoord0:m}=i.vertexAttributes,g={position:v.typedBuffer,normal:c(f)?f.typedBuffer:null,tangent:c(r)?r.typedBuffer:null,uv:c(m)?m.typedBuffer:null,color:c(a)?a.typedBuffer:null},y=gt(g,t,o);return{transform:y.transform,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new z({position:y.vertexAttributes.position,normal:y.vertexAttributes.normal,tangent:y.vertexAttributes.tangent,color:g.color,uv:g.uv})}}function xt(t){return(t==null?void 0:t.resolveFile)?{busy:!1,request:async(e,o,s)=>{const n=t.resolveFile(e);return(await D(n,{responseType:o==="image"?"image":o==="binary"?"array-buffer":"json",signal:c(s)?s.signal:null})).data}}:null}function b(t,e){if(vt(t))return"-";const o=t.typedBuffer;return`${N(e,o.buffer,()=>e.size)}/${o.byteOffset}/${o.byteLength}`}function $t(t){return c(t)?t.toString():"-"}function ht(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,n=new Map,p=[];for(const l of t.parts){const{attributes:{position:u,normal:i,color:v,tangent:f,texCoord0:r}}=l,a=`
      ${b(u,s)}/
      ${b(i,s)}/
      ${b(v,s)}/
      ${b(f,s)}/
      ${b(r,s)}/
      ${$t(l.transform)}
    `;let m=!1;const g=N(n,a,()=>(m=!0,{start:e,length:u.count}));m&&(e+=u.count),i&&(o.normal=!0),v&&(o.color=!0),f&&(o.tangent=!0),r&&(o.texCoord0=!0),p.push({gltf:l,writeVertices:m,region:g})}return{vertexAttributes:{position:w(k,e),normal:o.normal?w(S,e):null,tangent:o.tangent?w(O,e):null,color:o.color?w(G,e):null,texCoord0:o.texCoord0?w(J,e):null},parts:p,components:[]}}function wt(t){return new j({data:t.data,wrap:Tt(t.parameters.wrap)})}function bt(t,e){const o=new R(Rt(t.color,t.opacity)),s=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new q({color:o,colorTexture:$(h(t.textureColor,n=>e.get(n))),normalTexture:$(h(t.textureNormal,n=>e.get(n))),emissiveColor:s,emissiveTexture:$(h(t.textureEmissive,n=>e.get(n))),occlusionTexture:$(h(t.textureOcclusion,n=>e.get(n))),alphaMode:Ct(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:$(h(t.textureMetallicRoughness,n=>e.get(n)))})}function yt(t,e,o){e.writeVertices&&At(t,e);const s=e.gltf,n=Et(s.indices||s.attributes.position.count,s.primitiveType),p=e.region.start;if(p)for(let l=0;l<n.length;l++)n[l]+=p;t.components.push(new V({faces:n,material:o.get(s.material),trustSourceNormals:!0}))}function At(t,e){const{position:o,normal:s,tangent:n,color:p,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:i,transform:v}=e.gltf,f=i.position.count;if(H(o.slice(u,f),i.position,v),c(i.normal)&&c(s)){const r=M(F(),v),a=s.slice(u,f);W(a,i.normal,r),I(r)&&X(a,a)}else c(s)&&Y(s,0,0,1,{dstIndex:u,count:f});if(c(i.tangent)&&c(n)){const r=M(F(),v),a=n.slice(u,f);Z(a,i.tangent,r),I(r)&&tt(a,a)}else c(n)&&E(n,0,0,1,1,{dstIndex:u,count:f});if(c(i.texCoord0)&&c(l)?et(l.slice(u,f),i.texCoord0):c(l)&&nt(l,0,0,{dstIndex:u,count:f}),c(i.color)&&c(p)){const r=i.color,a=p.slice(u,f);if(r.elementCount===4)r instanceof O?ot(a,r,255):r instanceof G?rt(a,r):r instanceof st&&at(a,r,8);else{E(a,255,255,255,255);const m=B.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof S?it(m,r,255):r instanceof B?ct(m,r):r instanceof ut&&lt(m,r,8)}}else c(p)&&E(p.slice(u,f),255,255,255,255)}function Et(t,e){switch(e){case C.TRIANGLES:return mt(t,dt);case C.TRIANGLE_STRIP:return pt(t);case C.TRIANGLE_FAN:return ft(t)}}function Ct(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Tt(t){return{horizontal:L(t.s),vertical:L(t.t)}}function L(t){switch(t){case T.CLAMP_TO_EDGE:return"clamp";case T.MIRRORED_REPEAT:return"mirror";case T.REPEAT:return"repeat"}}function d(t){return t**(1/Q)*255}function Rt(t,e){return K(d(t[0]),d(t[1]),d(t[2]),e)}function Mt(t){return U(d(t[0]),d(t[1]),d(t[2]))}export{Lt as loadGLTFMesh};