import{lf as e,I as r,kx as u}from"./vendor.508dc62e.js";function a(n,t){return{type:e(t),value:n,unit:t}}function o(n,t){return{type:e(t),value:n,unit:t}}function c(n,t){return{type:e(t),value:n,unit:t}}function l(n,t,i="arithmetic"){return{type:e(t),value:n,unit:t,rotationType:i}}function v(n,t){return a(u(n.value,n.unit,t),t)}function p(n,t){return r(n)?t:r(t)||n.value>u(t.value,t.unit,n.unit)?n:t}const s=o(0,"meters");export{c as a,l as f,o,a as r,p as s,v,s as y};