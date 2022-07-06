import{M as v,ee as b,z as t,A as r,ef as y,eg as L,eh as c,B as f,ar as F,cs as S,cZ as O,ei as I,F as l,K as m,ej as w,ek as j,bN as x,el as T,a3 as $,I as q,aU as h,em as Q,en as E,eo as P,ep as D,aF as U,cx as N,eq as R,er as A,es as B,et as _,eu as K,cr as M,ev as C}from"./vendor.508dc62e.js";let o=class extends v(b){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:void 0}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],o.prototype,"title",void 0),t([y("service","title",["alias","name"])],o.prototype,"readTitle",null),t([r()],o.prototype,"layer",void 0),t([r({type:L,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),t([y("service","id")],o.prototype,"readIdOnlyOnce",null),t([r(c(String))],o.prototype,"modelName",void 0),t([r(c(Boolean))],o.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"opacity",void 0),o=t([f("esri.layers.buildingSublayers.BuildingSublayer")],o);const Z=o,k=F.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),g=C();let i=class extends S.LoadableMixin(O(Z)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new I(this.fields)}readAssociatedLayer(e,s){const a=this.layer.associatedFeatureServiceItem,n=s.associatedLayerID;return l(a)&&typeof n=="number"?new m({portalItem:a,layerId:n}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return l(this.associatedLayer)?this.associatedLayer.displayField:null}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=l(e)?e.signal:null,a=this._fetchService(s).then(()=>{this.indexInfo=w(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,k,s)});return this.addResolvingPromise(a),Promise.resolve(this)}createPopupTemplate(e){return j(this,e)}async _fetchService(e){const s=(await x(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var n,p,d,u;const a=(p=(n=this.getFeatureType(s==null?void 0:s.feature))==null?void 0:n.domains)==null?void 0:p[e];return a&&a.type!=="inherited"?a:(u=(d=this.getField(e))==null?void 0:d.domain)!=null?u:null}getFeatureType(e){return e&&l(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return l(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return l(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=l(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:T,{query:s,data:{supportsZ:a,supportsM:n,isVersioned:p}}=e;return{query:s,data:{supportsZ:a,supportsM:n,isVersioned:p}}}createQuery(){const e=new $;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryFeatures(e||this.createQuery(),s)).then(a=>{if(a==null?void 0:a.features)for(const n of a.features)n.layer=this.layer,n.sourceLayer=this;return a})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryObjectIds(e||this.createQuery(),s))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:l(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return l(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),q(this.associatedLayer))throw new h("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new h("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r({type:Q,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[E],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[P],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[D],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],i.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),t([r({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),t([r(g.fields)],i.prototype,"fields",void 0),t([r({readOnly:!0})],i.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:m})],i.prototype,"associatedLayer",void 0),t([y("service","associatedLayer",["associatedLayerID"])],i.prototype,"readAssociatedLayer",null),t([r(g.outFields)],i.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],i.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),t([r({readOnly:!0,type:String})],i.prototype,"apiKey",null),t([r({readOnly:!0,type:U})],i.prototype,"fullExtent",null),t([r({readOnly:!0,type:N})],i.prototype,"spatialReference",null),t([r({readOnly:!0})],i.prototype,"version",null),t([r({readOnly:!0,type:R})],i.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],i.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],i.prototype,"listMode",void 0),t([r({types:A,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r(B)],i.prototype,"popupEnabled",void 0),t([r({type:_,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),t([r()],i.prototype,"types",null),t([r()],i.prototype,"typeIdField",null),t([r({json:{write:!1}}),K(new M({"3DObject":"3d-object",Point:"point"}))],i.prototype,"layerType",void 0),t([r()],i.prototype,"geometryType",null),t([r()],i.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),i=t([f("esri.layers.buildingSublayers.BuildingComponentSublayer")],i);const z=i;export{z as E,Z as n};
