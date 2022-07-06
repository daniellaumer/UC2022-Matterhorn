import{q as p}from"./arcadeUtils.dd0c34f0.js";import{oP as h,p4 as i,ol as o,ox as R,ot as u}from"./vendor.508dc62e.js";import{d as w,g as c}from"./SpatialFilter.201a431a.js";import{crosses as S,touches as A,within as g,overlaps as v,contains as F,intersects as d,relate as E}from"./geometryEngineAsync.ca2550a6.js";function l(e){return e instanceof o}function s(e,a,r,f){return f(e,a,async function(m,t,n){if(n.length<2)throw new Error("Missing Parameters");if((n=h(n))[0]===null&&n[1]===null)return!1;if(i(n[0])){if(n[1]instanceof o)return new w({parentfeatureset:n[0],relation:r,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new Error("Spatial Relation cannot accept this parameter type")}if(l(n[0])){if(l(n[1])){switch(r){case"esriSpatialRelEnvelopeIntersects":return d(p(n[0]),p(n[1]));case"esriSpatialRelIntersects":return d(n[0],n[1]);case"esriSpatialRelContains":return F(n[0],n[1]);case"esriSpatialRelOverlaps":return v(n[0],n[1]);case"esriSpatialRelWithin":return g(n[0],n[1]);case"esriSpatialRelTouches":return A(n[0],n[1]);case"esriSpatialRelCrosses":return S(n[0],n[1])}throw new Error("Unrecognised Relationship")}if(i(n[1]))return new w({parentfeatureset:n[1],relation:r,relationGeom:n[0]});if(n[1]===null)return!1;throw new Error("Spatial Relation cannot accept this parameter type")}if(n[0]!==null)throw new Error("Spatial Relation cannot accept this parameter type");return i(n[1])?new c({parentfeatureset:n[1]}):!(n[1]instanceof o||n[1]===null)&&void 0})}function O(e){e.mode==="async"&&(e.functions.intersects=function(a,r){return s(a,r,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(a,r){return s(a,r,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(a,r){return s(a,r,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(a,r){return s(a,r,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(a,r){return s(a,r,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(a,r){return s(a,r,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(a,r){return s(a,r,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(a,r){return e.standardFunctionAsync(a,r,function(f,m,t){if(t=h(t),R(t,3,3),l(t[0])&&l(t[1]))return E(t[0],t[1],u(t[2]));if(t[0]instanceof o&&t[1]===null||t[1]instanceof o&&t[0]===null)return!1;if(i(t[0])&&t[1]===null)return new c({parentfeatureset:t[0]});if(i(t[1])&&t[0]===null)return new c({parentfeatureset:t[1]});if(i(t[0])&&t[1]instanceof o)return t[0].relate(t[1],u(t[2]));if(i(t[1])&&t[0]instanceof o)return t[1].relate(t[0],u(t[2]));if(t[0]===null&&t[1]===null)return!1;throw new Error("Illegal Argument")})})}export{O as registerFunctions};
