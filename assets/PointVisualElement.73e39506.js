import{fc as h,F as a,kt as c,fY as m,I as o,d4 as d,mM as y,mN as f,fz as S,mO as v,b4 as p,ey as z,fZ as b,fV as x,b3 as I,ln as _,d1 as C,mP as E,aC as w}from"./vendor.508dc62e.js";import{u as G}from"./VisualElementResources.d0f6f93b.js";class T{constructor(e){this.view=null,this._geometry=null,this._size=3,this._color=h(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=h(1,1,1,1),this._elevationInfo=null,this.resources=new G({view:e.view,createResources:t=>this._createResources(t),recreateGeometry:(t,i)=>(t.geometry=this._recreateGeometry(i,t.material),a(t.geometry)?[t.geometry]:[])});let r=!0;for(const t in e)t in this?t==="attached"?r=e[t]:this[t]=e[t]:console.error("Cannot set unknown property",t);this.attached=r}destroy(){this.resources.destroy()}get visible(){return this.resources.visible}set visible(e){this.resources.visible=e}get attached(){return this.resources.attached}set attached(e){this.resources.attached=e}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.resources.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const r=this.preferredTextureSize;this._size=e,r<this.preferredTextureSize?a(this.resources)&&this.resources.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){c(e,this._color)||(m(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,a(this.resources)&&this.resources.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){c(e,this._outlineColor)||(m(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.resources&&this.resources.recreateGeometry()}_updateMaterial(){const e=this.resources.resources;o(e)||e.material.setParameters(this._materialParameters(e.texture.id))}_updateSizeAttribute(){const e=this.resources.resources,r=this.resources.object;if(o(e)||o(r))return;const t=e.geometry;if(o(t))return;const i=t.getMutableAttribute(d.SIZE).data,s=this.geometrySize;i[0]=s,i[1]=s,r.geometryVertexAttrsUpdated(r.geometryRecords[0])}_materialParameters(e){return{color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:R,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:e,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}}get geometrySize(){return this._size/n}_recreateGeometry(e,r){const t=this._createRenderGeometry();return a(t)&&e.addGeometry(t,r),t}_createResources(e){const r=y(this._primitive,this.preferredTextureSize),t=new f(this._materialParameters(r.id)),i=this._recreateGeometry(e,t);return{material:t,texture:r,geometry:i,forEach(s){s(r),s(t),a(this.geometry)&&s(this.geometry)}}}get preferredTextureSize(){return S(v(2*this.geometrySize),16,128)}calculateMapBounds(e){if(o(this.resources.resources)||o(this.resources.resources.geometry))return!1;const r=this.resources.resources.geometry.vertexAttributes.get(d.POSITION);return p(r.data,this.view.renderCoordsHelper.spatialReference,g,this.view.spatialReference),z(e,g),!0}_createRenderGeometry(){const e=this.geometry;if(o(e))return null;const{renderCoordsHelper:r,elevationProvider:t}=this.view,i=b(e,t,x.fromElevationInfo(this.elevationInfo),r),s=I(_.get(),e.x,e.y,i),l=_.get();p(s,e.spatialReference,l,r.spatialReference);const u=this.geometrySize;return C.createPointGeometry(null,l,null,[u,u],[0,0,0,1])}}const n=E,R=[n/2,n/2,1-n/2,1-n/2],g=w();export{T as S};