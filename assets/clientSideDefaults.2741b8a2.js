var a=Object.defineProperty;var o=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var u=(t,s,e)=>s in t?a(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,p=(t,s)=>{for(var e in s||(s={}))i.call(s,e)&&u(t,e,s[e]);if(o)for(var e of o(s))c.call(s,e)&&u(t,e,s[e]);return t};import{cz as l,cA as y,cB as d,c2 as m,ap as h}from"./vendor.508dc62e.js";import{t as $}from"./QueryEngineCapabilities.c2e9875c.js";function B(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?l:t==="esriGeometryPolyline"?y:d}}}const A=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let f=1;function F(t,s){if(h("esri-csp-restrictions"))return()=>p({[s]:null},t);try{let e=`this.${s} = null;`;for(const r in t)e+=`this${A.test(r)?`.${r}`:`["${r}"]`} = ${JSON.stringify(t[r])};`;const n=new Function(`
      return class AttributesClass$${f++} {
        constructor() {
          ${e};
        }
      }
    `)();return()=>new n}catch{return()=>p({[s]:null},t)}}function U(t={}){return[{name:"New Feature",description:"",prototype:{attributes:m(t)}}]}function b(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:$,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}export{F as a,b as c,U as l,B as u};
