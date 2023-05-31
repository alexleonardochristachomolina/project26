var e=require("react"),t=require("three"),r=require("@react-three/fiber"),i=require("@react-three/drei"),n=require("@14islands/r3f-scroll-rig");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/o(e);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(r=o[i])>=0||(n[r]=e[r]);return n}var a=["el","children","material","scale","font","fontOffsetY","fontOffsetX","overrideEmissive","color"],c=["el","scale","scrollState","vertexShader","fragmentShader","invalidateFrameLoop","widthSegments","heightSegments"],m=e.forwardRef(function(i,o){var a=i.el,m=i.scale,h=i.scrollState,f=i.vertexShader,d=i.fragmentShader,p=i.invalidateFrameLoop,v=void 0!==p&&p,g=i.widthSegments,y=void 0===g?128:g,w=i.heightSegments,b=void 0===w?128:w,S=s(i,c),E=e.useRef(null),x=e.useRef(null);e.useImperativeHandle(o,function(){return x.current});var A=r.useThree(),T=A.invalidate,M=A.gl,_=A.size,N=r.useThree(function(e){return e.viewport.dpr}),R=n.useScrollbar().scroll,z=n.useScrollRig().scaleMultiplier,k=n.useImageAsTexture(a),V=e.useMemo(function(){return{u_color:{value:new t.Color("black")},u_time:{value:0},u_pixelRatio:{value:N},u_progress:{value:0},u_visibility:{value:0},u_viewport:{value:0},u_velocity:{value:0},u_res:{value:new t.Vector2},u_rect:{value:new t.Vector2},u_size:{value:new t.Vector2},u_texture:{value:null},u_loaded:{value:!1},u_scaleMultiplier:{value:z}}},[N]);e.useEffect(function(){k&&E.current&&(E.current.uniforms.u_texture.value=k,E.current.uniforms.u_size.value.set(k.image.width,k.image.height),E.current.uniforms.u_loaded.value=!0)},[k,M]),e.useEffect(function(){E.current&&(E.current.uniforms.u_res.value.set(_.width,_.height),E.current.uniforms.u_rect.value.set(null==m?void 0:m[0],null==m?void 0:m[1]))},[_,m]),r.useFrame(function(e,t){h.inViewport&&x.current&&E.current&&E.current.uniforms.u_loaded.value&&(E.current.uniforms.u_time.value+=t,E.current.uniforms.u_rect.value.set(x.current.scale.x,x.current.scale.y),E.current.uniforms.u_velocity.value=R.velocity,E.current.uniforms.u_progress.value=h.progress,E.current.uniforms.u_visibility.value=h.visibility,E.current.uniforms.u_viewport.value=h.viewport,v&&T())});var F=e.useMemo(function(){return[{vertexShader:f,fragmentShader:d}]},[f,d]);return u.default.createElement(u.default.Fragment,null,u.default.createElement("mesh",l({ref:x},S),u.default.createElement("planeGeometry",{attach:"geometry",args:[1,1,y,b]}),u.default.createElement("shaderMaterial",{ref:E,args:F,transparent:!0,uniforms:V})))}),h=["children","speed"],f=function(t){var i=t.children,o=t.scrollState,l=t.parallax,s=e.useRef(null),a=r.useThree(function(e){return e.size}),c=n.useScrollRig().scaleMultiplier;return r.useFrame(function(){o.inViewport&&(s.current.position.y=l*(2*o.progress-1)*c*a.height)}),u.default.createElement("mesh",{ref:s},i)};let d=new Proxy({},{get:function(e,t){return e.hasOwnProperty(t)||(e[t]=g(t)),e[t]}});class p extends Array{constructor(e,t){if(!(t=S(t)).every(e=>"Number"===x(e)))throw new TypeError("All arguments must be numbers.");if(t.length>1&&t.length!==e)throw new Error("Argument list must be empty, have a single number, or have a length equal to the dimension.");0===t.length&&(t=[0]),1===t.length&&"Number"===x(t[0])&&(t=Array(e).fill(t[0])),e>1?super(...t):(super(1),this[0]=t[0]),Reflect.defineProperty(this,"pop",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"push",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"shift",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"unshift",{value:void 0,enumerable:!1})}get magnitude(){return this.pnorm(2)}div(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.length;++r)t[r]=this[r]/e[r];return d[this.dim](t)}minus(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]-e[r];return d[this.dim](t)}neg(){return d[this.dim](this.times(-1))}plus(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]+e[r];return d[this.dim](t)}pow(e){let t=[];for(let r=0;r<this.dim;++r)t[r]=Math.pow(this[r],e);return d[this.dim](t)}times(e){b(e,this.dim,!0),"Number"===x(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]*e[r];return d[this.dim](t)}dot(e){b(e,this.dim);let t=0;for(let r=0;r<this.dim;++r)t+=this[r]*e[r];return t}normalize(){return this.div(this.magnitude)}pnorm(e){let t=0;for(let r=0;r<this.dim;++r)t+=Math.pow(Math.abs(this[r]),e);return Math.pow(t,1/e)}reflect(e){const t=e.normalize();return this.minus(t.times(2*this.dot(t)))}argmax(){const e=this.max();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}argmin(){const e=this.min();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}choose(e){if(!Array.isArray(e))throw new TypeError("Argument must be a list of indices.");if(!e.every(e=>e<this.dim&&E(e.toString())))throw new RangeError("All elements of argument must be valid indices.");let t=[];return e.forEach(e=>t.push(this[e])),d[t.length](t)}copy(){return d[this.dim](this)}equals(e){return e.length===this.dim&&e.every((e,t)=>this[t]===e)}approximatelyEquals(e,t=1e-8){return e.length===this.dim&&e.every((e,r)=>Math.abs(this[r]-e)<t)}max(){return Math.max(...this)}min(){return Math.min(...this)}sum(){return this.reduce((e,t)=>e+t,0)}toArray(){return Array.from(this)}concat(...e){const t=super.concat.apply(this.toArray(),e);return d[t.length](t)}filter(...e){const t=super.filter.apply(this.toArray(),e);return t.length>0?d[t.length](t):t}map(...e){const t=super.map(...e);return t.every(e=>"Number"===x(e))?t:t.toArray()}slice(...e){const t=super.slice.apply(this.toArray(),e);return t.length>0?d[t.length](t):t}splice(...e){let t=this.toArray();if(t.splice(...e),t.length!==this.dim)throw new Error("All removed elements must be replaced.");if(!t.every(e=>"Number"===x(e)))throw new TypeError("All elements must be numbers.");t.forEach((e,t)=>{this[t]=e})}toString(){return this.reduce((e,t,r)=>e+t+(r===this.dim-1?" ":", "),"[ ")+"]"}}const v={set:function(e,t,r){if("length"===t)return!1;if(E(t)){if(Number(t)>=e.dim)throw new RangeError("Vector may not have more elements than dimension.");if("Number"!==x(r))throw new TypeError("Vectors may only contain numbers.");return e[t]=r,!0}const i=w(t.toString());return!!(e.dim<=4&&i)&&(function(e,t,r,i){if(1===t.length){if("Number"!==x(i))throw new TypeError("Must set to a number");return void(e[r[t]]=i)}if(!Array.isArray(i))throw new TypeError("Right-hand side must be an array.");if(t.length!==i.length)throw new TypeError("Right-hand side must have matching length.");if(!i.every(e=>"Number"===x(e)))throw new TypeError("All new values must be numbers.");if(t.split("").some(t=>r[t]>=e.dim))return;let n=!0;for(let e=0,r={};e<t.length;++e){if(r.hasOwnProperty(t[e])){n=!1;break}r[t[e]]=!0}if(!n)throw new SyntaxError("Swizzle assignment does not allow symbols to be repeated.");t.split("").map(e=>r[e]).forEach((t,r)=>{e[t]=i[r]})}(e,t.toString(),i,r),!0)},get:function(e,t){const r=w(t.toString());return e.dim<=4&&r?function(e,t,r){const i=t.length;if(1===i)return e[r[t]];let n=t.split("").reduce((t,i)=>{let n=r[i];return t&&n<e.dim?t.concat([e[n]]):void 0},[]);return n?new d[i](...n):void 0}(e,t,r):e[t]}};function g(e){if(!((e=Number(e))in d)){if(isNaN(e))throw new TypeError("Dimension must be coercible to a number.");if(e<=0)throw new RangeError("Dimension must be positive.");if(!Number.isInteger(e))throw new RangeError("Dimension must be positive.");let t="vec"+e,r={[t]:class extends p{constructor(...t){if(1===t.length&&t[0]instanceof p){if(t[0].dim>e)throw new TypeError("Cannot demote vectors.");t=function(e,t){return[...Array(t)].map((t,r)=>r<e.length?e[r]:0)}(t[0].toArray(),e)}super(e,t),Reflect.defineProperty(this,"dim",{value:e,writable:!1,enumerable:!1})}}}[t];d[e]=function(...e){let t=new r(...e);return Object.preventExtensions(t),new Proxy(t,v)}}return d[e]}const y=[{x:0,y:1,z:2,w:3},{r:0,g:1,b:2,a:3},{s:0,t:1,p:2,q:3}];function w(e){return y.find(t=>e.split("").every(e=>e in t))}function b(e,t,r=!1){if(!(r&&"Number"===x(e)||e.length&&e.length===t))throw new TypeError(`Invalid argument. Input must have matching dimension${r?"or be a scalar":""}.`)}function S(e){return e instanceof Array&&1===e.length&&e[0]instanceof Array?S(e[0]):e}function E(e){return!isNaN(e)&&Number(e).toString()===e&&Number.isInteger(Number(e))&&Number(e)>=0}function x(e){return Object.prototype.toString.call(e).slice(8,-1)}var A={getVecType:g,isVec:function(e){return e instanceof p},vec2:d[2],vec3:d[3],vec4:d[4],add:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.plus(t),d[t]())},multiply:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.times(t),d[t](1))},lerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");return r=r<0?0:r>1?1:r,e.plus(t.minus(e).times(r))},slerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");r=r<0?0:r>1?1:r;let i=e.normalize().dot(t.normalize());i=i<-1?-1:i>1?1:i;const n=Math.acos(i)*r,o=t.minus(e.times(i)).normalize(),u=e.magnitude+(t.magnitude-e.magnitude)*r;return e.times(Math.cos(n)).plus(o.times(Math.sin(n))).normalize().times(u)}},T=["scale"],M=["children","track","stickyLerp","fillViewport"],_=function(t){var i=t.children,n=t.childTop,o=t.childBottom,l=t.scrollState,s=t.parentScale,a=t.childScale,c=t.scaleMultiplier,m=t.priority,h=t.stickyLerp,f=void 0===h?1:h,d=e.useRef(null),p=r.useThree(function(e){return e.size});return r.useFrame(function(e,t){if(l.inViewport){var r=.5*s[1]-.5*a[1];d.current.position.y=function(e,t,r,i,n=60){return o=t,e*(1-(u=void 0===i?r:1-Math.pow(1-r,i/(1/n))))+o*u;var o,u}(d.current.position.y,l.viewport+n/p.height<1?r:l.visibility-o/s[1]*c<1?-n*c+r-(l.viewport-1)*p.height*c:.5*-s[1]+.5*a[1],f,t)}},m),u.default.createElement("group",{ref:d},i)};exports.ParallaxScrollScene=function(e){var t=e.children,r=e.speed,i=void 0===r?1:r,o=s(e,h),a=i-1;return u.default.createElement(n.ScrollScene,l({scissor:!1,inViewportMargin:200*Math.max(0,.5)+50+"%"},o),function(e){return u.default.createElement(f,l({parallax:a},e),t(e))})},exports.StickyScrollScene=function(t){var i=t.children,o=t.track,a=t.stickyLerp,c=t.fillViewport,m=s(t,M),h=r.useThree(function(e){return e.size}),f=n.useScrollRig().scaleMultiplier,d=e.useRef(o.current),p=e.useMemo(function(){var e=getComputedStyle(o.current);return"sticky"===e.position?d.current=o.current.parentElement:console.error("StickyScrollScene: tracked element is not position:sticky"),e},[o]);return u.default.createElement(n.ScrollScene,l({track:d},m),function(e,t,r,i,n){var o=n.stickyLerp,a=n.fillViewport;return function(n){var c=n.scale,m=s(n,T),h=A.vec3(parseFloat(r.width),parseFloat(r.height),1),f=parseFloat(r.top),d=t.height-f-h[1];return a&&(h=A.vec3(t.width,t.height,1),f=0,d=0),u.default.createElement(_,l({parentScale:c,childScale:h.times(i),stickyLerp:o,childTop:f,childBottom:d,scaleMultiplier:i},m),e(l({scale:h.times(i),parentScale:c},m)))}}(i,h,p,f,{stickyLerp:a,fillViewport:c}))},exports.WebGLImage=m,exports.WebGLText=function(o){var c=o.el,m=o.children,h=o.material,f=o.scale,d=o.font,p=o.fontOffsetY,v=void 0===p?0:p,g=o.fontOffsetX,y=void 0===g?0:g,w=o.overrideEmissive,b=void 0!==w&&w,S=o.color,E=s(o,a),x=r.useThree().size,A=n.useScrollRig().scaleMultiplier,T=e.useMemo(function(){if(!c.current)return{};var e=window.getComputedStyle(c.current);return{letterSpacing:(parseFloat(e.letterSpacing)||0)/parseFloat(e.fontSize),lineHeight:(parseFloat(e.lineHeight)||0)/parseFloat(e.fontSize),textColor:new t.Color(S||e.color).convertSRGBToLinear(),fontSize:parseFloat(e.fontSize)*A,textAlign:e.textAlign}},[c,x,f,S,A]),M=T.textColor,_=T.fontSize,N=T.textAlign,R=T.lineHeight,z=T.letterSpacing;e.useEffect(function(){h&&b&&(h.emissive=S)},[h,S,b]);var k=0;return"left"===N||"start"===N?k=-.5*f[0]:"right"!==N&&"end"!==N||(k=.5*f[0]),u.default.createElement(i.Text,l({fontSize:_,maxWidth:f?f[0]:x.width,lineHeight:R,textAlign:N,letterSpacing:z,overflowWrap:"break-word",font:d,color:M,anchorX:N,anchorY:"top",position:[k+_*y,(f?.5*f[1]:.5*x.height)+_*v,0],material:h},E),m)};
//# sourceMappingURL=powerups.cjs.map
