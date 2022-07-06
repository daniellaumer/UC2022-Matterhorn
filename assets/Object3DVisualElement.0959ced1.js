import{Y as h,eJ as c,F as i,lD as u,I as r,aV as n,V as d,lE as _}from"./vendor.508dc62e.js";class l{constructor(e){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e,this._handle=h(()=>this.view.ready,s=>{this._resourcesCreated&&(s?this._createResources():this._destroyResources())})}applyProps(e){let s=!1;for(const t in e)t in this?t==="attached"?s=e[t]:this[t]=e[t]:console.error("Cannot set unknown property",t);this.attached=s}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources())}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.visible||this.updateVisibility(!1)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}class m extends l{constructor(e){super(e.view),this._resources=null,this._transform=c()}get object(){return i(this._resources)?this._resources.object:null}get transform(){return this._transform}set transform(e){u(this._transform,e),i(this._resources)&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(r(this._resources))return;const e=this._resources.object,s=this.view._stage;s.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),this.visible||e.setVisible(this.visible),s.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const s=new n({isPickable:!1,updatePolicy:d.SYNC});e.add(s);const t=new _({castShadow:!1});t.transformation=this._transform,this.createExternalResources(),this.createGeometries(t),e.addMany(t.geometries),this.forEachExternalMaterial(a=>e.add(a)),e.add(t),s.add(t),this.visible||t.setVisible(!1),this._resources={layer:s,object:t}}destroyResources(){const e=this.view._stage;!r(this._resources)&&e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this.forEachExternalMaterial(s=>{e.remove(s),s.dispose()}),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){r(this._resources)||this._resources.object.setVisible(e)}}export{m as n,l as t};