var o=Object.defineProperty,p=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(e,r,s)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,t=(e,r)=>{for(var s in r||(r={}))m.call(r,s)&&i(e,s,r[s]);if(a)for(var s of a(r))h.call(r,s)&&i(e,s,r[s]);return e},n=(e,r)=>p(e,T(r));import{Y as b,w as g,y as d,hh as u,z as c,B as f}from"./vendor.508dc62e.js";import{b as v}from"./TileTreeDebugger.eb041fe6.js";let l=class extends v{constructor(e){super(e),this.enablePolygons=!1}initialize(){b(()=>this.enabled,e=>this.view.basemapTerrain.renderPatchBorders=e,g)}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map(e=>n(t({},e),{geometry:d.fromExtent(u(e.extent,this.view.basemapTerrain.spatialReference))}))}};l=c([f("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],l);export{l as TerrainTileTree3DDebugger};
