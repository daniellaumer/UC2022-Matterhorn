var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var j=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&j(e,r,t[r]);if(k)for(var r of k(t))se.call(t,r)&&j(e,r,t[r]);return e},w=(e,t)=>ee(e,te(t));import{ar as ie,cm as T,o1 as oe,bN as x,aU as Q,an as z,jE as F,X as le,c2 as I,ut as K,cj as E,js as _,u5 as ae,u6 as ne,aF as W,o2 as N,um as G,uu as ue,uj as H,o3 as J,t4 as ce,uv as X,pZ as D,t8 as pe,t9 as he,o9 as ye,oa as de,ob as fe,oc as me,tx as ge,tk as Ae,od as Se,a0 as we,of as L,bg as ve,uw as xe,jv as q,i9 as Ue,z as p,A as h,cx as be,gn as _e,ef as Ie,B as Te}from"./vendor.508dc62e.js";import{e as Re}from"./jsonContext.0e1782a7.js";import{b as $e}from"./StyleRepository.043ec558.js";import"./enums.7bbb7f55.js";import"./Geometry.b68345ae.js";import"./definitions.bbcb6e26.js";let P=null;function Pe(e){if(P)return P;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return P=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),P}const Be=ie.getLogger("esri.layers.support.SpriteSource"),Oe=1.15;class C{constructor(t,r,s,i){this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=s,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(t){this._isRetina=this.devicePixelRatio>Oe;const r=T(this.baseURL),s=r.query?"?"+oe(r.query):"",i=this._isRetina?"@2x":"",l=`${r.path}${i}.${this._spriteImageFormat}${s}`,o=`${r.path}${i}.json${s}`;return Promise.all([x(o,t),x(l,d({responseType:"image"},t))]).then(([a,n])=>{const u=Object.keys(a.data);if(!u||u.length===0||u.length===1&&u[0]==="_ssl"||!n||!n.data)return this._spritesData=this.image=null,this.width=this.height=0,null;this._spritesData=a.data;const y=n.data,S=Math.max(this.maxTextureSize,4096);if(y.width>S||y.height>S){const A=`Sprite resource for style ${r.path} is bigger than the maximum allowed of ${S} pixels}`;throw Be.error(A),new Q("SpriteSource",A)}this.width=y.width,this.height=y.height;const f=document.createElement("canvas"),m=f.getContext("2d");f.width=y.width,f.height=y.height,m.drawImage(y,0,0,y.width,y.height);const R=m.getImageData(0,0,y.width,y.height),g=new Uint8Array(R.data);let $;for(let A=0;A<g.length;A+=4)$=g[A+3]/255,g[A]=g[A]*$,g[A+1]=g[A+1]*$,g[A+2]=g[A+2]*$;this.image=g})}}class Le{constructor(t){this.url=t}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=x(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return z(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new F(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let l,o,a=t,n=s.pop();if(a===1)return n;for(;s.length;)if(l=s.pop(),o=(1&l.col)+((1&l.row)<<1),a){if(a[o]===0){n=null;break}if(a[o]===1){n=l;break}n=l,a=a[o]}return n}}class Me{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=x(this._tileIndexUrl,{query:d({},t==null?void 0:t.query)}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:l}=t,o=new F(t);return this._tilemap.fetchAvailabilityUpsample(s,i,l,o,r).then(()=>(o.world=t.world,o)).catch(a=>{if(le(a))throw a;return null})}}const B=new Map;function Ee(e,t,r,s,i){return De(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),i)}function De(e,t){const r=B.get(e);if(r)return r.then(i=>I(i));const s=x(e,d({responseType:"array-buffer"},t)).then(({data:i})=>(B.delete(e),i)).catch(i=>{throw B.delete(e),i});return B.set(e,s),s}class ke{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=T(this.sourceUrl),l=I(s),o=l.tiles;if(i)for(let f=0;f<o.length;f++){const m=T(o[f]);m&&(K(m.path)||(m.path=E(i.path,m.path)),o[f]=_(m.path,d(d({},i.query),m.query)))}this.tileServers=o;const a=s.capabilities&&s.capabilities.split(",").map(f=>f.toLowerCase().trim()),n=(s==null?void 0:s.exportTilesAllowed)===!0,u=(a==null?void 0:a.includes("tilemap"))===!0,y=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:u},exportTiles:n?{maxExportTilesCount:+y}:null},this.tileInfo=ae(l.tileInfo,l,null,{ignoreMinMaxLOD:!0});const S=s.tileMap?_(E(i.path,s.tileMap),i.query):null;u?(this.type="vector-tile",this.tilemap=new Me(new ne({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),S)):S&&(this.tilemap=new Le(S)),this.fullExtent=W.fromJSON(s.fullExtent)}destroy(){}async getRefKey(t,r){var s,i;return(i=(s=this.tilemap)==null?void 0:s.dataKey(t,r))!=null?i:t}requestTile(t,r,s,i){const l=this.tileServers[r%this.tileServers.length];return Ee(l,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,l=s.lods,o=Math.min(i.length,l.length);for(let a=0;a<o;a++){const n=i[a],u=l[a];if(n.level!==u.level||Math.round(n.scale)!==Math.round(u.scale))return!1}return!0}}const M=N.defaults&&N.defaults.io.corsEnabledServers;async function je(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await v(r,"esri",e,i,t);const l={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&b(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&b(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return U(l.spriteUrl),U(l.glyphsUrl),l}function U(e){if(!e)return;const t=ue(e);M&&!M.includes(t)&&M.push(t)}function b(...e){let t;for(let r=0;r<e.length;++r)H(e[r])?t&&(t=t.split("://")[0]+":"+e[r].trim()):t=K(e[r])?e[r]:E(t,e[r]);return G(t)}async function v(e,t,r,s,i){let l,o,a;if(z(i),typeof r=="string"){const u=J(r);U(u),a=await x(u,w(d({},i),{responseType:"json",query:d({f:"json"},i==null?void 0:i.query)})),a.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=u,o=u}else a={data:r},l=r.jsonUrl||null,o=s;const n=a.data;if(Y(n))return e.styleUrl=l||null,qe(e,n,o,i);if(Ne(n))return e.sourceUrl?V(e,n,o,!1,t,i):(e.sourceUrl=l||null,V(e,n,o,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function Y(e){return!!e.sources}function Ne(e){return!Y(e)}async function qe(e,t,r,s){const i=r?ce(r):X();e.styleBase=i,e.style=t,e.styleUrl&&U(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await v(e,"esri",b(i,o.url),void 0,s):l.push(v(e,"esri",o,i,s))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(v(e,o,b(i,t.sources[o].url),void 0,s)):t.sources[o].tiles&&l.push(v(e,o,t.sources[o],i,s)));await Promise.all(l)}async function V(e,t,r,s,i,l){const o=r?G(r)+"/":X(),a=Ce(t,o),n=new ke(i,_(o,l==null?void 0:l.query),a);if(!s&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(n))return;n.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(n.fullExtent):u.fullExtent=n.fullExtent.clone()),u.tileInfo.lods.length<n.tileInfo.lods.length&&(u.tileInfo=n.tileInfo)}if(s?(e.sourceBase=o,e.source=t,e.validatedSource=a,e.primarySourceName=i,e.sourceUrl&&U(e.sourceUrl)):U(o),e.sourceNameToSource[i]=n,!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?v(e,"",b(o,t.defaultStyles,"root.json"),void 0,l):v(e,"",t.defaultStyles,b(o,"root.json"),l)}}function Ce(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,l=2958287637957775e-7;const o=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let u=0;u<=n;u++)u>=a&&o.push({level:u,scale:l,resolution:i}),i/=2,l/=2;for(const u of e.tiles)U(b(t,u));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:o,spatialReference:{wkid:102100}}}}const Ve=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,Qe={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function ze(e){const t=e==null?void 0:e.match(Ve);if(!t)return null;const[,r,s,i]=t;if(!r)return null;let l=null,o=null,a=null;const{devext:n,qaext:u,www:y}=Qe;if(s)if(l=r,i)switch(i.toLowerCase()){case"devext":({customBaseUrl:o,portalHostname:a}=n);break;case"qa":({customBaseUrl:o,portalHostname:a}=u);break;default:return null}else({customBaseUrl:o,portalHostname:a}=y);else switch(r.toLowerCase()){case"devext":({customBaseUrl:o,portalHostname:a}=n);break;case"qaext":({customBaseUrl:o,portalHostname:a}=u);break;case"www":({customBaseUrl:o,portalHostname:a}=y);break;default:return null}return{customBaseUrl:o,isPortal:!1,portalHostname:a,urlKey:l}}const O=1e-6;function Fe(e,t){if(e===t)return!0;if(!e&&t!=null||e!=null&&!t||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=O||Math.abs(r.y-s.y)>=O)return!1;let i,l;e.lods[0].scale>t.lods[0].scale?(i=e,l=t):(l=e,i=t);for(let o=i.lods[0].scale;o>=l.lods[l.lods.length-1].scale-O;o/=2)if(Math.abs(o-l.lods[0].scale)<O)return!0;return!1}function Ke(e,t){if(e===t)return e;if(!e&&t!=null)return t;if(e!=null&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,l={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,y=a.resolution,S=n.scale,f=[];let m=u,R=y,g=0;for(;m>S;)f.push({level:g,resolution:R,scale:m}),g++,m/=2,R/=2;return new D({size:[r,r],dpi:i,format:s||"pbf",origin:l,lods:f,spatialReference:o})}let c=class extends pe(he(ye(de(fe(me(ge(Ae(Se(we))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?d({url:e},t):e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e==null||e.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(L).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await x(r,w(d({},e),{query:w(d({f:"json"},this.customParameters),{token:this.apiKey})}))).data&&this.read({url:r},Re(this.portalItem))}).catch(L).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&T(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?_(r,w(d({},this.customParameters),{token:this.apiKey})):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?T(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&H(e)&&(e=`https:${e}`);const r=ve(ze(e));t.styleUrl=xe(e,r)}get tileInfo(){var r;const e=[];for(const s in this.sourceNameToSource)e.push(this.sourceNameToSource[s]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new D;if(e.length>1)for(let s=0;s<e.length;s++)Fe(t,e[s].tileInfo)&&(t=Ke(t,e[s].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r;if(!this._spriteSourceMap.has(e)){const s=q("2d").maxTextureSize,i=((r=this.currentStyleInfo)==null?void 0:r.spriteUrl)?_(this.currentStyleInfo.spriteUrl,w(d({},this.customParameters),{token:this.apiKey})):null,l=new C(i,e,s,this.currentStyleInfo.spriteFormat);await l.load(t),this._spriteSourceMap.set(e,l)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t="png",r=1,s){const i=q("2d").maxTextureSize,l=e?_(e,w(d({},this.customParameters),{token:this.apiKey})):null;if(!l)return null;const o=new C(l,r,i,t);try{return await o.load(s),this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,o),this.currentStyleInfo.spriteUrl=l,this.emit("spriteSource-change",{spriteSource:o}),o}catch(a){L(a)}return null}async loadStyle(e,t){var s;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((s=this._loadingTask)==null||s.abort(),this._loadingTask=Ue(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return I(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return I(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return I(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return(t==null?void 0:t.origin)&&!this.styleUrl?(t.messages&&t.messages.push(new Q("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await je(e,w(d({},t),{query:w(d({},this.customParameters),{token:this.apiKey})}));r.spriteFormat==="webp"&&(await Pe("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",d({},r)),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const l of r)if(l.toLowerCase().includes(s))return J(`//static.arcgis.com/attribution/Vector${i}/${l}`)}async _loadStyle(e){var t,r;return(r=(t=this._loadingTask)==null?void 0:t.promise)!=null?r:this.loadStyle(null,e)}};p([h({readOnly:!0})],c.prototype,"attributionDataUrl",null),p([h({type:["show","hide"]})],c.prototype,"listMode",void 0),p([h({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0),p([h({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null),p([h({readOnly:!0})],c.prototype,"currentStyleInfo",void 0),p([h({json:{read:!1},readOnly:!0,type:W})],c.prototype,"fullExtent",null),p([h()],c.prototype,"style",void 0),p([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),p([h({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0),p([h({readOnly:!0})],c.prototype,"parsedUrl",null),p([h({readOnly:!0})],c.prototype,"serviceUrl",null),p([h({type:be,readOnly:!0})],c.prototype,"spatialReference",null),p([h({readOnly:!0})],c.prototype,"styleRepository",void 0),p([h({readOnly:!0})],c.prototype,"sourceNameToSource",void 0),p([h({readOnly:!0})],c.prototype,"primarySource",void 0),p([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null),p([_e(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null),p([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:D})],c.prototype,"tileInfo",null),p([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0),p([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0),p([h({readOnly:!0})],c.prototype,"version",void 0),p([Ie("version",["version","currentVersion"])],c.prototype,"readVersion",null),p([h({type:Boolean})],c.prototype,"symbolCollisionBoxesVisible",void 0),p([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),c=p([Te("esri.layers.VectorTileLayer")],c);const et=c;export{et as default};
