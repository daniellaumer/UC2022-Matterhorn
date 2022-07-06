var E=Object.defineProperty;var v=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(t,e,i)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,g=(t,e)=>{for(var i in e||(e={}))b.call(e,i)&&d(t,i,e[i]);if(v)for(var i of v(e))_.call(e,i)&&d(t,i,e[i]);return t};import{rL as S,rM as G,aw as n,bg as w,F as r,b7 as V,r as o,a6 as c,N as h,cS as f,z as l,A as p,B as x}from"./vendor.508dc62e.js";import{g as L}from"./SnappingVisualizer2D.7cdc93e6.js";import{_ as C,F as M,G as O,c as R}from"./drawSurfaces.b0d48f81.js";import"./enums.7bbb7f55.js";import"./settings.907e9f84.js";import"./SnappingContext.6a9c04a5.js";import"./PointSnappingHint.5527d205.js";import"./geometryEngine.9e6ec958.js";import"./geometryEngineBase.f43341a0.js";import"./hydrated.7f8d4c82.js";import"./InteractiveToolBase.d0b67f52.js";import"./drawUtils.e5e56ad0.js";import"./quantityUtils.759564e3.js";import"./EditGeometryOperations.ebe2fe4a.js";import"./euclideanLengthMeasurementUtils.d8344363.js";import"./measurementUtils.5ef825ab.js";import"./quantityFormatUtils.d237b3c9.js";import"./euclideanAreaMeasurementUtils.c268a855.js";const T=new S({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),D=new G({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),$=new G({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let a=class extends C{constructor(t){super(t),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:n(t.activeLineSymbol,T),regularVertices:n(t.regularVerticesSymbol,D),activeVertex:n(t.activeVertexSymbol,$),fill:w(t.activeFillSymbol)}}normalizeCtorArgs(t){const e=g({},t);return delete e.activeFillSymbol,delete e.activeVertexSymbol,delete e.regularVerticesSymbol,delete e.activeLineSymbol,e}initializeGraphic(t){return r(this._visualElementSymbols.fill)&&(t.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const t=this.view;return new M({view:t,manipulators:this.manipulators,geometryType:O(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new R(t),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new L(this.internalGraphicsLayer)})}onActiveVertexChanged(t){if(this.geometryType==="point")return null;const[e,i]=t,s=new V({x:e,y:i,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=s,null):(this._visualElementGraphics.activeVertex=new o({geometry:s,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(m),c(()=>{r(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=h(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(t){const e=t.clone();if(e.type==="polyline"){const i=e.paths[e.paths.length-1];i.splice(0,i.length-2)}return r(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=e,null):(this._visualElementGraphics.outline=new o({geometry:e,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(m),c(()=>{r(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=h(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(t){const e=new f({points:t,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=e,null):(this._visualElementGraphics.regularVertices=new o({geometry:e,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(m),c(()=>{r(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=h(this._visualElementGraphics.regularVertices))}))}};function m(t,e){var i,s,u,y;return((s=(i=t.attributes)==null?void 0:i.displayOrder)!=null?s:-1/0)-((y=(u=e.attributes)==null?void 0:u.displayOrder)!=null?y:-1/0)}l([p()],a.prototype,"activeFillSymbol",void 0),l([p({readOnly:!0})],a.prototype,"type",void 0),l([p({constructOnly:!0,nonNullable:!0})],a.prototype,"view",void 0),a=l([x("esri.views.2d.interactive.draw.DrawGraphicTool2D")],a);export{a as DrawGraphicTool2D};