import{z as i,A as o,B as m,aU as y,aW as g,F as v,I as u,bf as w}from"./vendor.508dc62e.js";import{n as x}from"./LayerView3D.216937df.js";import{c as F}from"./TiledLayerView3D.ff21a01a.js";import{u as I}from"./LayerView.a870198e.js";import{i as b}from"./RefreshableLayerView.2693370b.js";import{s as L,a as R}from"./drapedUtils.ed692151.js";const S=a=>{let t=class extends a{async fetchPopupFeatures(s,c){const{layer:n}=this;if(!s)throw new y("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});if(n.type!=="tile")throw new y("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:n.type});const f=this.get("view.scale"),h=n.allSublayers.toArray().filter(e=>{const l=e.minScale===0||f<=e.minScale,p=e.maxScale===0||f>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&l&&p});return g(h.map(async e=>{const l=e.createQuery(),p=v(c)?c.event:null,d=L({renderer:e.renderer,event:p});return l.geometry=this.createFetchPopupFeaturesQueryGeometry(s,d),l.outFields=await e.popupTemplate.getRequiredFields(),(await e.queryFeatures(l)).features})).then(e=>[].concat(...e.map(l=>l.value).filter(Boolean)))}};return i([o()],t.prototype,"layer",void 0),t=i([m("esri.layers.mixins.TileLayerView")],t),t};let r=class extends b(F(S(x(I)))){constructor(){super(...arguments),this.type="tile-3d"}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){if(this.tileInfo){const a=this.tileInfo.lods,t=a[0].scale,s=a[a.length-1].scale;return this.levelRangeFromScaleRange(t,s)}return{minLevel:0,maxLevel:0}}initialize(){if(this.layer.type==="web-tile"){const a=this.layer.get("fullExtent.spatialReference"),t=this.layer.get("tileInfo.spatialReference");if(u(a)||u(t)||!w(a,t)){const s=this.layer.originOf("fullExtent")==="defaults"||u(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new y("layerview:incompatible-fullextent",s)))}}this._addTilingSchemeMatchPromise()}createFetchPopupFeaturesQueryGeometry(a,t){return R(a,t,this.view)}async doRefresh(){this.suspended||this.emit("data-changed")}};i([o({readOnly:!0})],r.prototype,"imageFormatIsOpaque",null),i([o({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),i([o()],r.prototype,"layer",void 0),i([o({readOnly:!0,aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),i([o({readOnly:!0})],r.prototype,"dataLevelRange",null),r=i([m("esri.views.3d.layers.TileLayerView3D")],r);const A=r;export{A as default};
