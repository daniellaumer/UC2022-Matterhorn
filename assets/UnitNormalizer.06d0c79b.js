import{b3 as l,b5 as h,b6 as u,kE as _,kF as f,kG as n,c_ as a}from"./vendor.508dc62e.js";var s;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(s||(s={}));function d(t,e){if(l(e,0,0,0),t.length>0){for(let r=0;r<t.length;++r)h(e,e,t[r]);u(e,e,1/t.length)}}function P(t,e,r,i){i.projectToRenderScreen(t,c),i.projectToRenderScreen(e,o),_(r,m,p),f(r,r)}const c=n(),p=c,o=n(),m=o;class U{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=a(this._spatialReference,1),this._metersPerElevationUnit=a(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}export{d as c,s as e,P as i,U as t};