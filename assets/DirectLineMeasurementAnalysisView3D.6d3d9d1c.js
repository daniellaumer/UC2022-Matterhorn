var xe=Object.defineProperty,Ge=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var be=(e,t,s)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))je.call(t,s)&&be(e,s,t[s]);if(we)for(var s of we(t))ke.call(t,s)&&be(e,s,t[s]);return e},P=(e,t)=>Ge(e,Re(t));import{ar as Ne,z as r,A as l,B as ge,D as pe,v as me,aC as w,aP as Ie,N as f,g8 as He,bf as Le,Y as E,a5 as z,I as p,hY as Y,g4 as ue,cR as We,na as qe,nb as Be,F as G,k9 as fe,k6 as Fe,km as Ue,kn as Qe,dk as Je,dl as Ke,du as Z,d4 as S,dq as ee,kq as te,dB as ie,dy as J,dE as Xe,dD as Ye,dF as Ze,dG as et,dH as tt,dI as it,hq as st,dJ as nt,bK as at,dM as rt,dO as ot,hr as lt,hI as dt,dT as ct,bI as ht,dv as ut,hM as gt,d_ as pt,b3 as se,ka as ne,g7 as Me,kb as mt,eG as ae,eJ as vt,ks as x,nc as H,ln as W,d1 as _t,fB as ve,jP as yt,ku as re,kv as wt,b6 as bt,b5 as Lt,kA as ft,kw as Pt,kx as St,kC as Ot,kV as Pe,kk as Ct,kG as $e,ll as _e,aw as Et,kD as zt}from"./vendor.508dc62e.js";import{n as At}from"./AnalysisView3D.ccf005bc.js";import{t as Vt,e as M,i as oe}from"./UnitNormalizer.06d0c79b.js";import{r as q,v as le}from"./quantityUtils.759564e3.js";import{geodesicLength as Mt}from"./geometryEngine.9e6ec958.js";import{n as $t,a as Dt}from"./projectionUtils.f1f50e36.js";import{g as B,y as de,j as Tt,M as ce,w as xt}from"./quantityFormatUtils.d237b3c9.js";import{v as he,m as Se,l as T,I as Oe}from"./Segment.bf98ecbd.js";import{C as F}from"./LineVisualElement.4bd38e56.js";import{n as Gt}from"./Object3DVisualElement.0959ced1.js";import{j as Rt}from"./RightAngleQuadVisualElement.eb2e2a1c.js";const jt=Ne.getLogger("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController"),kt=1e5;let A=class extends pe{constructor(e){super(e),this._unitNormalizer=new Vt,this._handles=new me,this._tempStartPosition=w(),this._tempEndPosition=w(),this._tempCornerPosition=w()}initialize(){this._handles.add(Ie(()=>{var e;return(e=this.view)==null?void 0:e.ready},()=>this._initialize(),{once:!0,sync:!0,initial:!0}))}destroy(){this._handles=f(this._handles)}_initialize(){const e=this.view.spatialReference,t=He(e),s=t===Ue?Qe:t;this._sphericalPCPF=s;const i=Le(e,s);this._unitNormalizer.spatialReference=i?s:e,this._handles.add([E(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:n,startPoint:a})=>{n.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(a)},z),E(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:n,endPoint:a})=>{n.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(a)},z),E(()=>({result:this._computedResult,viewData:this.viewData}),({result:n,viewData:a})=>{a.result=n},z)])}_applyProjectionAndElevationAlignment(e){if(p(e))return e;const t=$t(e,this.view.spatialReference,this.view.elevationProvider);return p(t)?(Dt(this.analysis,e.spatialReference,jt),null):t}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:s}=this.viewData;if(p(e)||p(t))return null;const i=this._euclideanDistances(e,t),n=this._geodesicDistance(e,t,i.horizontal.value),a=s===M.Geodesic||s===M.Auto&&i.horizontal.value>kt?"geodesic":"euclidean";return{mode:a,distance:a==="euclidean"?i.direct:n,directDistance:i.direct,horizontalDistance:i.horizontal,verticalDistance:i.vertical,geodesicDistance:n}}_euclideanDistances(e,t){const s=e.clone();s.z=t.z;const i=this._tempStartPosition,n=this._tempEndPosition,a=this._tempCornerPosition,h=this.view.spatialReference,d=this._sphericalPCPF,o=Le(h,d)?d:h;Y(e,i,o),Y(t,n,o),Y(s,a,o);const c=ue(i,n),u=ue(a,n),_=Math.abs(t.z-e.z),y=j=>this._unitNormalizer.normalizeDistance(j),L=y(c),$=y(u),R=y(_);return{direct:q(L,"meters"),horizontal:q($,"meters"),vertical:q(R,"meters")}}_geodesicDistance(e,t,s){const i=e.spatialReference,n=new We({spatialReference:i});n.addPath([e,t]);const a=i.isGeographic&&qe(i)?Be([n],"meters")[0]:i.isWebMercator?Mt(n,"meters"):null,h=G(a)?a:this._fallbackGeodesicDistance(e,t,s);return q(h,"meters")}_fallbackGeodesicDistance(e,t,s){if(fe(e,Ce)&&fe(t,Ee)){const i={distance:0};return Fe(i,Ce,Ee),i.distance}return s}};r([l()],A.prototype,"view",void 0),r([l()],A.prototype,"analysis",void 0),r([l()],A.prototype,"viewData",void 0),r([l()],A.prototype,"_computedResult",null),A=r([ge("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],A);const Ce=w(),Ee=w();var v,C;(function(e){e[e.None=0]="None",e[e.Direct=1]="Direct",e[e.Triangle=2]="Triangle",e[e.ProjectedGeodesic=3]="ProjectedGeodesic"})(v||(v={})),function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(C||(C={}));function Nt(e){const t=new Je;Ke(t,e),t.vertex.uniforms.add(new Z("width",i=>i.width)),t.attributes.add(S.POSITION,"vec3"),t.attributes.add(S.NORMAL,"vec3"),t.attributes.add(S.UV0,"vec2"),t.attributes.add(S.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),t.vertex.code.add(ee`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),t.fragment.uniforms.add([new Z("outlineSize",i=>i.outlineSize),new te("outlineColor",i=>i.outlineColor),new Z("stripeLength",i=>i.stripeLength),new te("stripeEvenColor",i=>i.stripeEvenColor),new te("stripeOddColor",i=>i.stripeOddColor)]);const s=1/Math.sqrt(2);return t.fragment.code.add(ee`
    const float INV_SQRT2 = ${ee.float(s)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),t}const It=Object.freeze(Object.defineProperty({__proto__:null,build:Nt},Symbol.toStringTag,{value:"Module"}));class K extends Ze{constructor(t,s,i){super(t,s,i)}initializeProgram(t){const s=K.shader.get().build(this.configuration);return new et(t.rctx,s,tt)}_setPipelineState(t){const s=t===J.NONE,i=this.configuration;return it({blending:i.transparent?s?st:nt(t):null,polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:at.LESS},depthWrite:rt,colorWrite:ot})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return lt.TRIANGLE_STRIP}}K.shader=new Xe(It,()=>import("./MeasurementArrow.glsl.42ad4089.js"));class U extends Ye{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=J.NONE}}r([ie()],U.prototype,"polygonOffsetEnabled",void 0),r([ie()],U.prototype,"transparent",void 0),r([ie({count:J.COUNT})],U.prototype,"transparencyPassType",void 0);class Ht extends ct{constructor(t){super(t,new qt),this.techniqueConfig=new U}getConfiguration(t,s){var i;return this.techniqueConfig.polygonOffsetEnabled=this.parameters.polygonOffset,this.techniqueConfig.transparent=this.parameters.stripeEvenColor[3]<1||this.parameters.stripeOddColor[3]<1||this.parameters.outlineColor[3]<1,this.techniqueConfig.transparencyPassType=(i=s==null?void 0:s.transparencyPassType)!=null?i:J.NONE,this.techniqueConfig}dispose(){}intersect(){}requiresSlot(t){return t===ht.OPAQUE_MATERIAL}createGLMaterial(t){return t.output===ut.Color?new Wt(t):null}createBufferWriter(){return new Xt}}class Wt extends gt{beginSlot(t){return this.ensureTechnique(K,t)}}class qt extends pt{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=[1,.5,0,1],this.stripeLength=1,this.stripeEvenColor=[1,1,1,1],this.stripeOddColor=[1,.5,0,1],this.polygonOffset=!1}}const Bt=dt().vec3f(S.POSITION).vec3f(S.NORMAL).vec2f(S.UV0).f32(S.AUXPOS1),Ft=w(),Ut=w(),Qt=w(),Jt=w(),Kt=w();class Xt{constructor(){this.vertexBufferLayout=Bt}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return 2*(t.indices.get(S.POSITION).length/2+1)}write(t,s,i,n){const a=s.vertexAttributes.get(S.POSITION).data,h=s.vertexAttributes.get(S.NORMAL).data,d=a.length/3,o=s&&s.indices&&s.indices.get(S.POSITION);o&&o.length!==2*(d-1)&&console.warn("MeasurementArrowMaterial does not support indices");const c=Ft,u=Ut,_=Qt,y=Jt,L=Kt,$=t.transformation,R=t.invTranspTransformation,j=i.position,ye=i.normal,k=i.uv0;let N=0;for(let O=0;O<d;++O){const X=3*O;if(se(c,a[X],a[X+1],a[X+2]),O<d-1){const V=3*(O+1);se(u,a[V],a[V+1],a[V+2]),se(L,h[V],h[V+1],h[V+2]),ne(L,L),Me(_,u,c),ne(_,_),mt(y,L,_),ne(y,y)}const Te=ue(c,u);$&&R&&(ae(c,c,$),ae(u,u,$),ae(y,y,R));const D=n+2*O,I=D+1;j.setVec(D,c),j.setVec(I,c),ye.setVec(D,y),ye.setVec(I,y),k.set(D,0,N),k.set(D,1,-1),k.set(I,0,N),k.set(I,1,1),O<d-1&&(N+=Te)}const De=i.auxpos1;for(let O=0;O<2*d;++O)De.set(n+O,N)}}class Yt extends Gt{constructor(t){super(t),this._parameters=Zt,this._handles=null,this._origin=w(),this._originTransform=vt(),this._arrowCenter=w(),this._renderOccluded=x.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._opacity=1,this.applyProps(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:t}))}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(t){this._stripeLength=t,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(t){if(this._stripesEnabled=t,this.attached){const s=this.opacity,{arrowStripeEvenColor:i,arrowStripeOddColor:n}=this._parameters,a=H(ze,this._stripesEnabled?i:n,s);this._arrowMaterial.setParameters({stripeEvenColor:a})}}get opacity(){return this._opacity}set opacity(t){t!==this._opacity&&(this._opacity=t,this._updateArrowOpacity())}createExternalResources(){const{arrowStripeEvenColor:t,arrowStripeOddColor:s,arrowOutlineColor:i}=this._parameters,n=this._stripesEnabled?t:s;this._arrowMaterial=new Ht({outlineColor:i,stripeEvenColor:n,stripeOddColor:s,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new me,this._handles.add(E(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}forEachExternalMaterial(t){t(this._arrowMaterial)}createGeometries(t){if(p(this._geometry)||p(this._geometry.startRenderSpace)||p(this._geometry.endRenderSpace))return;const s=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);t.addGeometry(s,this._arrowMaterial,this._originTransform),this._viewChanged()}_createArrowGeometry(t,s,i,n){const a=this.view.renderCoordsHelper,h=[],d=[],o=(c,u)=>{const _=W.get();Me(_,c,i),h.push(_),d.push(u)};if(n.type==="euclidean"){n.eval(.5,this._arrowCenter);const c=W.get();a.worldUpAtPosition(this._arrowCenter,c),o(t,c),o(s,c)}else{n.eval(.5,this._arrowCenter);const c=this._parameters.arrowSubdivisions+1&-2;for(let u=0;u<c;++u){const _=u/(c-1),y=W.get(),L=W.get();n.eval(_,y),a.worldUpAtPosition(y,L),o(y,L)}}return _t.createPolylineGeometry(h,d)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&G(this._geometry)){const t=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*t})}}_updateArrowOpacity(){const t=this.opacity,{arrowStripeEvenColor:s,arrowStripeOddColor:i,arrowOutlineColor:n}=this._parameters,a=H(ze,this._stripesEnabled?s:i,t),h=H(ei,n,t),d=H(ti,i,t);this._arrowMaterial.setParameters({stripeEvenColor:a,outlineColor:h,stripeOddColor:d})}}const Zt={arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128},ze=ve(),ei=ve(),ti=ve();var Ae;(function(e){e[e.Pending=0]="Pending",e[e.Ready=1]="Ready",e[e.Destroyed=2]="Destroyed"})(Ae||(Ae={}));let m=class extends pe{constructor(e){super(e),this._params=b({},si),this._handles=new me,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=w(),this._endPosition=w(),this._cornerPosition=w(),this._startPositionAtSeaLevel=w(),this._endPositionAtSeaLevel=w(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=C.Auto,this.triangleCollapseRatioThreshold=.03}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(p(e)||p(t)||e.equals(t))return v.None;const s=this.analysisView.result;if(p(s))return v.Direct;if(s.mode==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?v.ProjectedGeodesic:v.Direct;const{verticalDistance:i,horizontalDistance:n}=s,a=i.value,h=n.value;return Math.min(a/h,h/a)<this.triangleCollapseRatioThreshold?v.Direct:v.Triangle}get actualVisualizedMeasurement(){if(p(this.analysisView.result))switch(this.analysisView.measurementMode){case M.Auto:case M.Euclidean:default:return"euclidean";case M.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return p(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){p(this._triangleOrientationOverride)!==e&&(p(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e=this.actualVisualizedMeasurement==="geodesic";return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}initialize(){const e=this._params,t={attached:!0,view:this.view};this._segmentVisualElement=new Yt(P(b({},t),{geometry:null,renderOccluded:x.OccludeAndTransparent})),this._triangleVisualElement=new F(P(b({},t),{width:e.triangleLineWidth,color:e.triangleColor,renderOccluded:x.OccludeAndTransparent})),this._rightAngleQuad=new Rt(P(b({},t),{color:Q,renderOccluded:x.OccludeAndTransparent}));const s=P(b({},t),{polygonOffset:!0,renderOccluded:x.OccludeAndTransparent});this._projectedGeodesicLine=new F(P(b({},s),{width:e.geodesicProjectionLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:re(e.guideStippleLengthPixels)})),this._geodesicStartHint=new F(P(b({},s),{width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:re(e.guideStippleLengthPixels)})),this._geodesicEndHint=new F(P(b({},s),{width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:re(e.guideStippleLengthPixels)})),this._segmentLabel=new he(P(b({},t),{fontSize:e.direcLabelFontSize})),this._verticalLabel=new he(P(b({},t),{fontSize:e.verticalLabelFontSize})),this._horizontalLabel=new he(P(b({},t),{fontSize:e.horizontalLabelFontSize})),this._handles.add([E(()=>{const{elevationAlignedStartPoint:i,elevationAlignedEndPoint:n}=this.analysisView,a=this.view;return{view:a,camera:a.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:i,elevationAlignedEndPoint:n,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},i=>this._updateGeometryAndViewMode(i),z),E(()=>({visible:this.visible,viewMode:this.viewMode}),i=>this._updateVisualElementVisibility(i),z),E(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),i=>this._updateLabelText(i),z),E(()=>({visible:this.visible,viewMode:this.viewMode}),i=>this._updateLabelVisibility(i),z),E(()=>this._measurementArrowStripeLength,i=>this._updateSegmentStripeLength(i),z),wt(async()=>this._updateMessageBundle())]),this._updateMessageBundle()}destroy(){this._handles=f(this._handles),this._segmentVisualElement=f(this._segmentVisualElement),this._triangleVisualElement=f(this._triangleVisualElement),this._rightAngleQuad=f(this._rightAngleQuad),this._projectedGeodesicLine=f(this._projectedGeodesicLine),this._geodesicStartHint=f(this._geodesicStartHint),this._geodesicEndHint=f(this._geodesicEndHint),this._segmentLabel=f(this._segmentLabel),this._verticalLabel=f(this._verticalLabel),this._horizontalLabel=f(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case v.None:break;case v.Direct:this._segmentVisualElement.visible=!0;break;case v.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case v.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:e,camera:t,viewMode:s,elevationAlignedStartPoint:i,elevationAlignedEndPoint:n,orientation:a,visualizedMeasurement:h,stripeLength:d}){const o=e.renderCoordsHelper;if(p(o)||p(i)||p(n)||i.equals(n))return;let c=this._startPosition,u=this._endPosition;o.toRenderCoords(i,c),o.toRenderCoords(n,u);const _=a===C.AboveSegment?1:-1,y=_*(o.getAltitude(u)-o.getAltitude(c));y<0&&(c=this._endPosition,u=this._startPosition);const L=h==="geodesic"?new Se(this._startPosition,this._endPosition,o.spatialReference):new T(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=L,this._updateSegmentStripeLength(d),s){case v.Direct:this._updateSegment(L,a);break;case v.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:L,orientation:a,startPosition:c,endPosition:u,deltaSign:_,altitudeDelta:y});break;case v.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:a,startPosition:c,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===C.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:e},camera:t,segment:s,orientation:i,startPosition:n,endPosition:a,deltaSign:h,altitudeDelta:d}){const o=this._cornerPosition;e.worldUpAtPosition(n,o),bt(o,o,h*Math.abs(d)),Lt(o,o,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[o[0],o[1],o[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:n,center:o,next:a};const c=new T(n,o),u=new T(o,a),_=ii(n,a,o,i,t);this._segmentLabel.anchor=_.segment,this._segmentLabel.geometry={type:"segment",segment:s,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:c,sampleLocation:"center"},this._verticalLabel.anchor=_.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=_.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:e},orientation:t,startPosition:s,endPosition:i}){e.setAltitude(this._startPositionAtSeaLevel,0,s),e.setAltitude(this._endPositionAtSeaLevel,0,i);const n=new Se(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(n),this._geodesicStartHint.setGeometryFromSegment(new T(this._startPositionAtSeaLevel,s)),this._geodesicEndHint.setGeometryFromSegment(new T(this._endPositionAtSeaLevel,i)),this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._segmentLabel.anchor=t===C.AboveSegment?"top":"bottom"}_updateLabelText({text:e,visualizedMeasurement:t}){G(e)?(this._segmentLabel.text=t==="euclidean"?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:e,viewMode:t}){const s=this._segmentLabel,i=this._horizontalLabel,n=this._verticalLabel;if(s.visible=!1,i.visible=!1,n.visible=!1,e)switch(t){case v.Direct:s.visible=!0;break;case v.Triangle:s.visible=!0,i.visible=!0,n.visible=!0;break;case v.ProjectedGeodesic:s.visible=!0;case v.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(p(t)||p(e))return null;const{directDistance:s,horizontalDistance:i,verticalDistance:n,geodesicDistance:a}=t,h=this.analysisView.unit,d=o=>b({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:""},o);switch(h){case"metric":return d({euclideanDistance:s&&ce(e,s),geodesicDistance:a&&ce(e,a),horizontalDistance:i&&ce(e,i),verticalDistance:n&&xt(e,n)});case"imperial":return d({euclideanDistance:s&&de(e,s),geodesicDistance:a&&de(e,a),horizontalDistance:i&&de(e,i),verticalDistance:n&&Tt(e,n)});default:return d({euclideanDistance:s&&B(e,s,h),geodesicDistance:a&&B(e,a,h),horizontalDistance:i&&B(e,i,h),verticalDistance:n&&B(e,n,h)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;G(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(G(this._triangleOrientationOverride))return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===C.Auto?this.view.state.camera.aboveGround?C.AboveSegment:C.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(!(t==null?void 0:t.state))return!1;const s=t.state.camera,i=t.renderCoordsHelper,n=s.computeScreenPixelSizeAt(e);return i.getAltitude(e)/n>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(p(e))return null;let s=null;const i=e.directDistance;switch(t){case"metric":s=i&&le(i,"meters");break;case"imperial":s=i&&le(i,ft(i.value,i.unit));break;default:s=i&&le(i,t)}return p(s)?null:Pt(s.value/30)*St(1,s.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,Ot("esri/core/t9n/Units").then(e=>{this.messages=e}).finally(()=>{this.loadingMessages=!1})}get testData(){var e;return{labels:this.labels,stripeLength:(e=this._segmentVisualElement)==null?void 0:e.stripeLength}}};function ii(e,t,s,i,n){const a=ni,h=ai;n.projectToRenderScreen(s,a),n.projectToRenderScreen(t,h);const d={segment:"bottom",horizontal:"top",vertical:a[0]<h[0]?"left":"right"};{const o=ri,c=oi;if(oe(e,s,o,n),oe(e,t,c,n),Pe(o,c)>=Ve){const u=Math.sign(o[1])===Math.sign(c[1]);d.segment=u?Oe(d.vertical):d.vertical}else{const u=li;oe(s,t,u,n),Pe(u,c)>=Ve&&(d.segment=Math.sign(u[0])===Math.sign(c[0])?Oe(d.horizontal):d.horizontal)}}if(i===C.BelowSegment){const o=c=>c==="top"?"bottom":"top";d.segment=o(d.segment),d.horizontal=o(d.horizontal),d.vertical=o(d.vertical)}return d}r([l()],m.prototype,"_triangleOrientationOverride",void 0),r([l()],m.prototype,"messages",void 0),r([l()],m.prototype,"view",void 0),r([l()],m.prototype,"analysis",void 0),r([l()],m.prototype,"analysisView",void 0),r([l()],m.prototype,"loadingMessages",void 0),r([l()],m.prototype,"visible",null),r([l()],m.prototype,"viewMode",null),r([l()],m.prototype,"actualVisualizedMeasurement",null),r([l()],m.prototype,"visualElementOrientation",void 0),r([l()],m.prototype,"triangleCollapseRatioThreshold",void 0),r([l()],m.prototype,"allowVisualElementsOrientationChange",null),r([l()],m.prototype,"labels",null),r([l()],m.prototype,"_labelsText",null),r([l()],m.prototype,"_actualVisualElementsOrientation",null),r([l()],m.prototype,"_measurementArrowStripeLength",null),m=r([ge("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],m);const Q=yt(1,.5,0,.75),si={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:Q,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:Q,guideLineWidth:2,guideLineColor:Q,guideStippleLengthPixels:6,labelDistance:25,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},Ve=Math.cos(Ct(12)),ni=$e(),ai=$e(),ri=_e(),oi=_e(),li=_e();let g=class extends At(pe){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=M.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new m({view:e,analysis:t,analysisView:this}),this._analysisController=new A({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=f(this._analysisController),this._analysisVisualization=f(this._analysisVisualization)}get updating(){var e;return!!((e=this._analysisVisualization)==null?void 0:e.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){return this._analysisVisualization.labels.direct.text}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal.text}get verticalLabelText(){return this._analysisVisualization.labels.vertical.text}get unit(){return Et(this.analysis.unit,this._defaultUnit)}get testData(){var e;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:P(b({},(e=this._analysisVisualization)==null?void 0:e.testData),{visualization:this._analysisVisualization,controller:this._analysisController})}};r([l()],g.prototype,"updating",null),r([l({readOnly:!0})],g.prototype,"type",void 0),r([l({constructOnly:!0,nonNullable:!0})],g.prototype,"analysis",void 0),r([l()],g.prototype,"result",void 0),r([l()],g.prototype,"measurementMode",void 0),r([l()],g.prototype,"elevationAlignedStartPoint",void 0),r([l()],g.prototype,"elevationAlignedEndPoint",void 0),r([l({readOnly:!0})],g.prototype,"viewMode",null),r([l({readOnly:!0})],g.prototype,"actualVisualizedMeasurement",null),r([l()],g.prototype,"visualElementOrientation",null),r([l()],g.prototype,"allowVisualElementsOrientationChange",null),r([l()],g.prototype,"triangleCollapseRatioThreshold",null),r([l({readOnly:!0})],g.prototype,"directLabelText",null),r([l({readOnly:!0})],g.prototype,"horizontalLabelText",null),r([l({readOnly:!0})],g.prototype,"verticalLabelText",null),r([l()],g.prototype,"_analysisVisualization",void 0),r([l()],g.prototype,"_analysisController",void 0),r([l()],g.prototype,"unit",null),r([l(zt)],g.prototype,"_defaultUnit",void 0),g=r([ge("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],g);const di=g;var fi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:di});export{fi as D,Nt as n};