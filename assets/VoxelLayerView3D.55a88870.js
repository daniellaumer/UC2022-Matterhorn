import{ar as f,v as x,aU as n,bJ as W,gK as b,F as t,Y as o,w as S,N as M,I as g,z as m,A as V,B as I}from"./vendor.508dc62e.js";import{n as L}from"./LayerView3D.216937df.js";import{u as T}from"./LayerView.a870198e.js";var i;(function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"})(i||(i={}));const v=f.getLogger(" esri.views.3d.layers.VoxelLayerView3D");let d=class extends L(T){constructor(){super(...arguments),this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this._wasmLayerId=-1,this._handles=new x,this._dbgFlags=new Set}get wasmLayerId(){return this._wasmLayerId}initialize(){var y;if(this.view.viewingMode!=="local")throw new n("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(this.view._stage.renderView.renderingContext.type!==W.WEBGL2)throw new n("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(!((y=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)==null?void 0:y.textureFloat))throw new n("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!b(e,this.view.spatialReference))throw new n("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,r=this.layer.getVolume(s),c=this.layer.getVariable(s);if(t(r)&&t(c)){const l=r.dimensions[0],a=r.dimensions[1],h=r.getZDimension();if(h>1){const p=r.dimensions[h],_=l.size*a.size*p.size;let u=1;switch(c.renderingFormat.type){case"Int16":case"UInt16":u=2;break;case"Int32":case"UInt32":case"Float32":u=4}this._futureMemory=u*_}}const w=this.view.addVoxelLayerViewToWasm(this).then(l=>{this._wasmLayerId=l,this._suspendedHandle=o(()=>this.suspended,a=>{const h=this.view.voxelWasm;t(h)&&h.setEnabled(this,!a)},S),this._handles.add([o(()=>this.layer.renderMode,a=>this._pushRenderModeToWasm(a)),o(()=>this.layer.currentVariableId,a=>this._pushCurrentVariableIdToWasm(a)),o(()=>this.layer.getDynamicSections(),a=>this._pushDynamicSectionsToWasm(a)),o(()=>this.layer.getSlices(),a=>this._pushSlicesToWasm(a)),o(()=>this.layer.getSections(),a=>this._pushSectionsToWasm(a)),o(()=>this.layer.getVerticalExaggeration(),a=>this._pushVerticalExaggerationToWasm(a)),o(()=>this.layer.getVerticalOffset(),a=>this._pushVerticalOffsetToWasm(a))])}).catch(l=>{if(this.view.removeVoxelLayerViewFromWasm(this),this._wasmLayerId=-1,l===-1)throw new n("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(l===-2)throw new n("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(w)}destroy(){this.view.removeVoxelLayerViewFromWasm(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._handles=M(this._handles)}isUpdating(){const e=this.view.voxelWasm;return!(this._wasmLayerId<0||!t(e))&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}getUsedMemory(){return this._usedMemory}getUnloadedMemory(){return this._futureMemory}ignoresMemoryFactor(){return!0}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=this.view.voxelWasm;t(e)&&e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=this.view.voxelWasm;t(e)&&e.toggleFullVolumeExtentDraw(this)}_pushRenderModeToWasm(e){const s=this.view.voxelWasm;this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(t(s)?"have WASM":"don't have WASM!!!")),!!t(s)&&s.setRenderMode(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSlicesToWasm(e){const s=this.view.voxelWasm;this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSlicesToWasm() called, "+(t(s)?"have WASM":"don't have WASM!!!")),!!t(s)&&s.setSlices(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushSlicesToWasm() failed!")}_pushSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(t(s)?"have WASM":"don't have WASM!!!")),!!t(s)&&s.setStaticSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushDynamicSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushDynamicSectionsToWasm() called, "+(t(s)?"have WASM":"don't have WASM!!!")),!!t(s)&&s.setDynamicSections(this,e)||this._dbg(i.Error,"VoxelLayer._updateDynamicSections() failed!")}_pushCurrentVariableIdToWasm(e){const s=this.view.voxelWasm;this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(t(s)?"have WASM":"don't have WASM!!!")),!!t(s)&&s.setCurrentVariable(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVerticalExaggerationToWasm(e){const s=this.layer.getVolumeStyle(null),r=this.view.voxelWasm;this._dbg(i.VerboseAPI,`VoxelLayerView3D._pushVerticalExaggerationToWasm() called, ${t(r)?"have WASM":"don't have WASM!!!"}, ${t(s)?"have style":"don't have style!!!"}`),!g(s)&&(!!t(r)&&r.setVerticalExaggerationAndOffset(this,s.volumeId,e,s.verticalOffset)||this._dbg(i.Error,"VoxelLayerView3D._pushVerticalExaggerationToWasm() failed!"))}_pushVerticalOffsetToWasm(e){const s=this.layer.getVolumeStyle(null),r=this.view.voxelWasm;this._dbg(i.VerboseAPI,`VoxelLayerView3D._pushVerticalOffsetToWasm() called, ${t(r)?"have WASM":"don't have WASM!!!"}, ${t(s)?"have style":"don't have style!!!"}`),!g(s)&&(!!t(r)&&r.setVerticalExaggerationAndOffset(this,s.volumeId,s.verticalExaggeration,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVerticalOffsetToWasm() failed!"))}_dbg(e,s){this._dbgFlags.has(e)&&(e===i.Error?v.error(s):v.warn(s))}};m([V()],d.prototype,"layer",void 0),m([V({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],d.prototype,"baseUrl",void 0),d=m([I("esri.views.3d.layers.VoxelLayerView3D")],d);const F=d;export{F as default};
