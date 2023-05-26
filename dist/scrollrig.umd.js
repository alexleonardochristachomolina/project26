!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@react-three/fiber"),require("@juggle/resize-observer"),require("query-string"),require("zustand"),require("three"),require("react-intersection-observer"),require("debounce"),require("vecn"),require("suspend-react"),require("supports-webp"),require("fast-deep-equal"),require("@studio-freight/lenis")):"function"==typeof define&&define.amd?define(["exports","react","@react-three/fiber","@juggle/resize-observer","query-string","zustand","three","react-intersection-observer","debounce","vecn","suspend-react","supports-webp","fast-deep-equal","@studio-freight/lenis"],t):t((e||self).r3FScrollRig={},e.React,e["@react-three/fiber"],e["@juggle/resize-observer"],e.queryString,e.zustand,e.three,e.reactIntersectionObserver,e.debounce,e.vecn,e.suspendReact,e.supportsWebp,e.fastDeepEqual,e["@studio-freight/lenis"])}(this,function(e,t,r,n,o,i,a,l,u,c,s,d,f,v){function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var h=/*#__PURE__*/p(t),g=/*#__PURE__*/p(i),m=/*#__PURE__*/p(u),b=/*#__PURE__*/p(c),w=/*#__PURE__*/p(d),y=/*#__PURE__*/p(f),S=/*#__PURE__*/p(v);function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}function T(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var O="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,I={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},M=g.default(function(e){return{debug:!1,scaleMultiplier:I.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:I.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,r,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:R({},i,((o={})[t]={mesh:r,props:n,instances:1},o))}})},updateCanvas:function(t,r){return e(function(e){var n,o=e.canvasChildren;if(o[t]){var i=o[t],a=i.instances;return{canvasChildren:R({},o,((n={})[t]={mesh:i.mesh,props:R({},i.props,r),instances:a},n))}}})},removeFromCanvas:function(t,r){return void 0===r&&(r=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[t])?void 0:n.instances)>1?(o[t].instances-=1,{canvasChildren:o}):r?{canvasChildren:C(o,[t].map(T))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:R({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(){},onScroll:function(){return function(){}}}}),L=function(){var e=M(function(e){return e.requestReflow}),r=M(function(e){return e.debug});return t.useEffect(function(){var t=new(window.ResizeObserver||n.ResizeObserver)(function(){e(),r&&console.log("ResizeManager","document.body height changed")});return t.observe(document.body),function(){null==t||t.disconnect()}},[]),null},k=["makeDefault","margin"],P=t.forwardRef(function(e,n){var o=e.makeDefault,i=void 0!==o&&o,a=e.margin,l=void 0===a?0:a,u=C(e,k),c=r.useThree(function(e){return e.set}),s=r.useThree(function(e){return e.camera}),d=r.useThree(function(e){return e.size}),f=r.useThree(function(e){return e.viewport}),v=t.useRef(null);t.useImperativeHandle(n,function(){return v.current});var p=M(function(e){return e.pageReflow}),g=M(function(e){return e.scaleMultiplier}),m=t.useMemo(function(){var e,t=(d.height+2*l)*g,r=(d.width+2*l)*g/t,n=u.fov||50,o=null==u||null==(e=u.position)?void 0:e[2];return o?n=180/Math.PI*2*Math.atan(t/(2*o)):o=t/(2*Math.tan(n/2*Math.PI/180)),{fov:n,distance:o,aspect:r}},[d,g,p]),b=m.fov,w=m.distance,y=m.aspect;return O(function(){v.current.lookAt(0,0,0),v.current.updateProjectionMatrix(),v.current.updateMatrixWorld(),c(function(e){return{viewport:R({},e.viewport,f.getCurrentViewport(s))}})},[d,g,p]),O(function(){if(i){var e=s;return c(function(){return{camera:v.current}}),function(){return c(function(){return{camera:e}})}}},[v,i,c]),h.default.createElement("perspectiveCamera",R({ref:v,position:[0,0,w],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,aspect:y,fov:b,far:2*w},u))}),x=["makeDefault","margin"],V=t.forwardRef(function(e,n){var o=e.makeDefault,i=void 0!==o&&o,a=e.margin,l=void 0===a?0:a,u=C(e,x),c=r.useThree(function(e){return e.set}),s=r.useThree(function(e){return e.camera}),d=r.useThree(function(e){return e.size}),f=M(function(e){return e.pageReflow}),v=M(function(e){return e.scaleMultiplier}),p=t.useMemo(function(){return Math.max(d.width*v,d.height*v)},[d,f,v]),g=t.useRef(null);return t.useImperativeHandle(n,function(){return g.current}),O(function(){g.current.lookAt(0,0,0),g.current.updateProjectionMatrix(),g.current.updateMatrixWorld()},[p,d]),O(function(){if(i){var e=s;return c(function(){return{camera:g.current}}),function(){return c(function(){return{camera:e}})}}},[g,i,c]),h.default.createElement("orthographicCamera",R({left:d.width*v/-2-l*v,right:d.width*v/2+l*v,top:d.height*v/2+l*v,bottom:d.height*v/-2-l*v,far:2*p,position:[0,0,p],near:.001,ref:g,onUpdate:function(e){return e.updateProjectionMatrix()}},u))});function D(e,t){e&&(!1===t?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return D(e,t)}))}var j,q=new a.Vector2,_=function(e){void 0===e&&(e=[0]),M.getState().globalRenderQueue=M.getState().globalRenderQueue||[0],M.getState().globalRenderQueue=[].concat(M.getState().globalRenderQueue||[],e)},A=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,l=e.height,u=e.layer,c=void 0===u?0:u,s=e.autoClear,d=e.clearDepth,f=void 0!==d&&d;r&&n&&(t.autoClear=void 0!==s&&s,t.setScissor(o,i,a,l),t.setScissorTest(!0),n.layers.set(c),f&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1))},z=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,l=e.height,u=e.layer,c=void 0===u?0:u,s=e.scissor,d=void 0===s||s,f=e.autoClear,v=void 0!==f&&f,p=e.clearDepth,h=void 0!==p&&p;r&&n&&(t.getSize(q),t.autoClear=v,t.setViewport(o,i,a,l),t.setScissor(o,i,a,l),t.setScissorTest(d),n.layers.set(c),h&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1),t.setViewport(0,0,q.x,q.y))},F=function(e,t,n,o){void 0===n&&(n=0),I.preloadQueue.push(function(r,i,a){r.setScissorTest(!1),D(e||i,!1),t.layers.set(n),r.render(e||i,t||a),D(e||i,!0),o&&o()}),r.invalidate()},U=function(){var e=M(function(e){return e.isCanvasAvailable}),r=M(function(e){return e.hasSmoothScrollbar}),n=M(function(e){return e.requestReflow}),o=M(function(e){return e.pageReflow}),i=M(function(e){return e.debug}),a=M(function(e){return e.scaleMultiplier});return t.useEffect(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:a,preloadScene:F,requestRender:_,renderScissor:A,renderViewport:z,reflow:n,reflowCompleted:o}},Y=function(e){var n=e.children,o=r.useThree(function(e){return e.gl}),i=M(function(e){return e.canvasChildren}),a=U();return t.useEffect(function(){Object.keys(i).length||(a.debug&&console.log("GlobalRenderer","auto render empty canvas"),o.clear(),a.requestRender(),r.invalidate())},[i]),a.debug&&console.log("GlobalChildren",Object.keys(i).length),h.default.createElement(h.default.Fragment,null,n,Object.keys(i).map(function(e){var r=i[e],n=r.mesh,o=r.props;return"function"==typeof n?h.default.createElement(t.Fragment,{key:e},n(R({key:e},a,o))):t.cloneElement(n,R({key:e},o))}))},B=function(){var e=r.useThree(function(e){return e.gl}),t=r.useThree(function(e){return e.frameloop}),n=M(function(e){return e.globalClearDepth}),o=M(function(e){return e.globalPriority}),i=U();return O(function(){e.debug.checkShaderErrors=i.debug},[i.debug]),r.useFrame(function(t){var n=t.camera,o=t.scene;I.preloadQueue.length&&(I.preloadQueue.forEach(function(t){return t(e,o,n)}),e.clear(),I.preloadQueue=[],i.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),i.requestRender(),r.invalidate())},I.PRIORITY_PRELOAD),r.useFrame(function(r){var o=r.camera,i=r.scene,a=M.getState().globalRenderQueue;("always"===t||a)&&(o.layers.disableAll(),a?a.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),n&&e.clearDepth(),e.render(i,o)),M.getState().clearGlobalRenderQueue()},o),null},Q=/*#__PURE__*/function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={error:!1},r.props=t,r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,E(t,r),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(t.Component),G="8.11.3",H=["children","as","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],W=["children","onError"];"undefined"!=typeof window&&(j=window.ResizeObserver||n.ResizeObserver);var X=function(e){var t=e.children,n=e.as,i=void 0===n?r.Canvas:n,a=e.gl,l=e.style,u=e.orthographic,c=e.camera,s=e.debug,d=e.scaleMultiplier,f=void 0===d?I.DEFAULT_SCALE_MULTIPLIER:d,v=e.globalRender,p=void 0===v||v,g=e.globalPriority,m=void 0===g?I.PRIORITY_GLOBAL:g,b=e.globalClearDepth,w=void 0!==b&&b,y=C(e,H),S=M(function(e){return e.globalRender});return O(function(){"undefined"!=typeof window&&(window.__r3f_scroll_rig=G);var e=o.parse(window.location.search);(s||void 0!==e.debug)&&(M.setState({debug:!0}),console.info("@14islands/r3f-scroll-rig@"+G))},[s]),O(function(){M.setState({scaleMultiplier:f,globalRender:p,globalPriority:m,globalClearDepth:w})},[f,m,p,w]),h.default.createElement(i,R({id:"ScrollRig-canvas",camera:{manual:!0},gl:R({failIfMajorPerformanceCaveat:!0},a),resize:{scroll:!1,debounce:0,polyfill:j},style:R({position:"fixed",top:0,left:0,right:0,height:"100vh"},l)},y),!u&&h.default.createElement(P,R({manual:!0,makeDefault:!0},c)),u&&h.default.createElement(V,R({manual:!0,makeDefault:!0},c)),S&&h.default.createElement(B,null),"function"==typeof t?t(h.default.createElement(Y,null)):h.default.createElement(Y,null,t),h.default.createElement(L,null))},J=function(e){return h.default.createElement("mesh",{scale:e.scale},h.default.createElement("planeGeometry",null),h.default.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new a.Color("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},K="undefined"!=typeof window;function N(e){var r=(void 0===e?{}:e).debounce,o=void 0===r?0:r,i=t.useState({width:K?window.innerWidth:Infinity,height:K?window.innerHeight:Infinity}),a=i[0],l=i[1];return t.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function t(){var t=e?e.clientWidth:window.innerWidth,r=e?e.clientHeight:window.innerHeight;t===a.width&&r===a.height||l({width:t,height:r})}var r,i=m.default.debounce(t,o),u=window.ResizeObserver||n.ResizeObserver;return e?(r=new u(i)).observe(e):window.addEventListener("resize",i),t(),function(){var e;window.removeEventListener("resize",i),null==(e=r)||e.disconnect()}},[a,l]),a}function Z(e,t,r,n,o){return n+(e-t)*(o-n)/(r-t)}var $=function(){return{enabled:M(function(e){return e.hasSmoothScrollbar}),scroll:M(function(e){return e.scroll}),scrollTo:M(function(e){return e.scrollTo}),onScroll:M(function(e){return e.onScroll})}};function ee(e,r){var n=N(),o=$(),i=o.scroll,a=o.onScroll,u=M(function(e){return e.scaleMultiplier}),c=M(function(e){return e.pageReflow}),s=M(function(e){return e.debug}),d=t.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=r||{};return Object.keys(t).map(function(r,n){void 0!==t[r]&&(e[r]=t[r])}),e},[r]),f=d.autoUpdate,v=d.wrapper,p=l.useInView({rootMargin:d.rootMargin,threshold:d.threshold}),h=p.ref,g=p.inView;O(function(){h(e.current)},[e,e.current]);var m=t.useState(b.default.vec3(0,0,0)),w=m[0],y=m[1],S=t.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,E=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,C=t.useState(E),T=C[0],I=C[1],L=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,k=t.useRef(b.default.vec3(0,0,0)).current;O(function(){var t,r=null==(t=e.current)?void 0:t.getBoundingClientRect();if(r){var o=v?v.scrollTop:window.scrollY,i=v?v.scrollLeft:window.scrollX;E.top=r.top+o,E.bottom=r.bottom+o,E.left=r.left+i,E.right=r.right+i,E.width=r.width,E.height=r.height,I(R({},E)),y(b.default.vec3((null==E?void 0:E.width)*u,(null==E?void 0:E.height)*u,1)),s&&console.log("useTracker.getBoundingClientRect:",E,"intialScroll:",{initialY:o,initialX:i},"size:",n,"pageReflow:",c)}},[e,n,c,u,s]);var P=t.useCallback(function(t){var r=void 0===t?{}:t,o=r.onlyUpdateInViewport;if(e.current&&(void 0===o||!o||S.inViewport)){var a=r.scroll||i;!function(e,t,r,n){e.top=t.top-(r.y||0),e.bottom=t.bottom-(r.y||0),e.left=t.left-(r.x||0),e.right=t.right-(r.x||0),e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*n.width,e.y=e.top+.5*t.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(L,E,a,n),function(e,t,r){e.x=t.x*r,e.y=-1*t.y*r}(k,L,u);var l="horizontal"===a.scrollDirection,c=l?"width":"height",s=n[c]-L[l?"left":"top"];S.progress=Z(s,0,n[c]+L[c],0,1),S.visibility=Z(s,0,L[c],0,1),S.viewport=Z(s,0,n[c],0,1)}},[e,n,u,i]);return O(function(){S.inViewport=g,P({onlyUpdateInViewport:!1}),s&&console.log("useTracker.inViewport:",g,"update()")},[g]),O(function(){P({onlyUpdateInViewport:!1}),s&&console.log("useTracker.update on resize/reflow")},[P,c]),t.useEffect(function(){if(f)return a(function(e){return P({onlyUpdateInViewport:!0})})},[f,P,a]),{rect:T,bounds:L,scale:w,position:k,scrollState:S,inViewport:g,update:P}}var te=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority"],re=t.memo(function(e){var n=e.track,o=e.children,i=e.margin,l=void 0===i?0:i,u=e.inViewportMargin,c=e.inViewportThreshold,s=e.visible,d=void 0===s||s,f=e.hideOffscreen,v=void 0===f||f,p=e.scissor,g=void 0!==p&&p,m=e.debug,b=void 0!==m&&m,w=e.as,y=void 0===w?"scene":w,S=e.priority,E=void 0===S?I.PRIORITY_SCISSORS:S,T=C(e,te),L=t.useCallback(function(e){null!==e&&x(e)},[]),k=t.useState(g?new a.Scene:null),P=k[0],x=k[1],V=U(),D=V.requestRender,j=V.renderScissor,q=M(function(e){return e.globalRender}),_=ee(n,{rootMargin:u,threshold:c}),A=_.bounds,z=_.scale,F=_.position,Y=_.scrollState,B=_.inViewport;O(function(){P&&(P.visible=v?B&&d:d)},[P,B,v,d]),r.useFrame(function(e){var t=e.gl,r=e.camera;P&&P.visible&&(P.position.y=F.y,P.position.x=F.x,g?j({gl:t,scene:P,camera:r,left:A.left-l,top:A.positiveYUpBottom-l,width:A.width+2*l,height:A.height+2*l}):D())},q?E:void 0);var Q=h.default.createElement(h.default.Fragment,null,(!o||b)&&z&&h.default.createElement(J,{scale:z}),o&&P&&z&&o(R({track:n,margin:l,scale:z,scrollState:Y,inViewport:B,priority:E},T))),G=y;return g&&P?r.createPortal(Q,P):h.default.createElement(G,{ref:L},Q)}),ne=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud"],oe=["track","margin","inViewportMargin","inViewportThreshold","priority"],ie=["bounds"],ae=function(e){var n=e.track,o=e.children,i=e.margin,a=void 0===i?0:i,l=e.visible,u=void 0===l||l,c=e.hideOffscreen,s=void 0===c||c,d=e.debug,f=void 0!==d&&d,v=e.orthographic,p=void 0!==v&&v,g=e.priority,m=void 0===g?I.PRIORITY_VIEWPORTS:g,b=e.inViewport,w=e.bounds,y=e.scale,S=e.scrollState,E=e.camera,T=e.hud,M=C(e,ne),L=r.useThree(function(e){return e.scene}),k=r.useThree(function(e){return e.get}),x=r.useThree(function(e){return e.setEvents}),D=U().renderViewport;return O(function(){L.visible=s?b&&u:u},[b,s,u]),t.useEffect(function(){var e=k().events.connected;return x({connected:n.current}),function(){return x({connected:e})}},[]),r.useFrame(function(e){var t=e.scene;t.visible&&D({gl:e.gl,scene:t,camera:e.camera,left:w.left-a,top:w.positiveYUpBottom-a,width:w.width+2*a,height:w.height+2*a,clearDepth:!!T})},m),h.default.createElement(h.default.Fragment,null,!p&&h.default.createElement(P,R({manual:!0,margin:a,makeDefault:!0},E)),p&&h.default.createElement(V,R({manual:!0,margin:a,makeDefault:!0},E)),(!o||f)&&y&&h.default.createElement(J,{scale:y}),o&&y&&o(R({track:n,margin:a,scale:y,scrollState:S,inViewport:b,priority:m},M)))},le=t.memo(function(e){var n=e.track,o=e.margin,i=void 0===o?0:o,l=e.inViewportMargin,u=e.inViewportThreshold,c=e.priority,s=C(e,oe),d=t.useState(function(){return new a.Scene})[0],f=ee(n,{rootMargin:l,threshold:u}),v=f.bounds,p=C(f,ie),g=t.useCallback(function(e,t){n.current&&e.target===n.current&&(t.pointer.set((e.clientX-v.left+i)/(v.width+2*i)*2-1,-(e.clientY-v.top+i)/(v.height+2*i)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera))},[v]);return v&&r.createPortal(h.default.createElement(ae,R({track:n,bounds:v,priority:c,margin:i},s,p)),d,{events:{compute:g,priority:c},size:{width:v.width,height:v.height}})});function ue(e,r,n){void 0===r&&(r={});var o=void 0===n?{}:n,i=o.key,l=o.dispose,u=void 0===l||l,c=M(function(e){return e.updateCanvas}),s=M(function(e){return e.renderToCanvas}),d=M(function(e){return e.removeFromCanvas}),f=t.useMemo(function(){return i||a.MathUtils.generateUUID()},[]);O(function(){s(f,e,{inactive:!1})},[f]),t.useEffect(function(){return function(){d(f,u)}},[f]);var v=t.useCallback(function(e){c(f,e)},[c,f]);return t.useEffect(function(){v(r)},[].concat(Object.values(r))),v}var ce=["children","id","dispose"],se=t.forwardRef(function(e,t){var r=e.children,n=e.id,o=e.dispose,i=void 0===o||o,a=C(e,ce);return r?(ue(r,R({},a,{ref:t}),{key:n,dispose:i}),null):null}),de=!1;w.default.then(function(e){de=e});var fe=t.forwardRef(function(e,r){var n=e.children,o=e.enabled,i=void 0===o||o,a=e.locked,l=void 0!==a&&a,u=e.scrollRestoration,c=void 0===u?"auto":u,s=e.disablePointerOnScroll,d=void 0===s||s,f=e.horizontal,v=void 0!==f&&f,p=e.scrollInContainer,h=void 0!==p&&p,g=e.updateGlobalState,m=void 0===g||g,b=e.onScroll,w=e.config,y=void 0===w?{}:w,E=e.invalidate,C=void 0===E?function(){}:E,T=e.addEffect,I=t.useRef(),L=t.useRef(),k=t.useRef(!1),P=M(function(e){return e.scroll});t.useImperativeHandle(r,function(){return{start:function(){var e;return null==(e=L.current)?void 0:e.start()},stop:function(){var e;return null==(e=L.current)?void 0:e.stop()},on:function(e,t){var r;return null==(r=L.current)?void 0:r.on(e,t)},notify:function(){var e;return null==(e=L.current)?void 0:e.emit()},emit:function(){var e;return null==(e=L.current)?void 0:e.emit()},scrollTo:function(e,t){var r;return null==(r=L.current)?void 0:r.scrollTo(e,t)},raf:function(e){var t;return null==(t=L.current)?void 0:t.raf(e)},__lenis:L.current}});var x=t.useCallback(function(e){d&&I.current&&k.current!==e&&(k.current=e,I.current.style.pointerEvents=e?"none":"auto")},[d,I,k]);return O(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=c)},[]),O(function(){var e,t,r=document.documentElement,n=document.body,o=document.body.firstElementChild;return r.classList.toggle("ScrollRig-scrollHtml",h),n.classList.toggle("ScrollRig-scrollWrapper",h),h&&Object.assign(y,{smoothTouch:!0,wrapper:n,content:o}),L.current=new S.default(R({orientation:v?"horizontal":"vertical"},y)),T?e=T(function(e){var t;return null==(t=L.current)?void 0:t.raf(e)}):(t=requestAnimationFrame(function e(r){var n;null==(n=L.current)||n.raf(r),t=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(t)}),function(){var t;e(),null==(t=L.current)||t.destroy()}},[]),O(function(){var e,t,r=function(e){var t=e.scroll,r=e.limit,n=e.velocity,o=e.direction,i=e.progress,a=v?t:0;m&&(P.y=v?0:t,P.x=a,P.limit=r,P.velocity=n,P.direction=o,P.progress=i||0),Math.abs(n)>1.5&&x(!0),Math.abs(n)<1&&x(!1),b&&b({scroll:t,limit:r,velocity:n,direction:o,progress:i}),C()};return null==(e=L.current)||e.on("scroll",r),m&&(P.scrollDirection=v?"horizontal":"vertical",M.setState({scrollTo:function(){var e;null==(e=L.current)||e.scrollTo.apply(e,[].slice.call(arguments))},onScroll:function(e){var t,r;return null==(t=L.current)||t.on("scroll",e),null==(r=L.current)||r.emit(),function(){var t;return null==(t=L.current)?void 0:t.off("scroll",e)}}}),M.getState().scroll.y=window.scrollY,M.getState().scroll.x=window.scrollX),null==(t=L.current)||t.emit(),function(){var e;null==(e=L.current)||e.off("scroll",r),M.setState({onScroll:function(){return function(){}},scrollTo:function(){}})}},[]),O(function(){var e=function(){return C()},t=function(){return x(!1)};return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",e),function(){window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",e)}},[]),t.useEffect(function(){m&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),M.setState({hasSmoothScrollbar:i}))},[i]),t.useEffect(function(){var e,t;l?null==(e=L.current)||e.stop():null==(t=L.current)||t.start()},[l]),n({ref:I})}),ve=t.forwardRef(function(e,t){return h.default.createElement(fe,R({ref:t,invalidate:r.invalidate,addEffect:r.addEffect},e))});e.GlobalCanvas=function(e){var t=e.children,r=e.onError,n=C(e,W);return O(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),h.default.createElement(Q,{onError:function(e){r&&r(e),M.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},h.default.createElement(X,R({},n),t),h.default.createElement("noscript",null,h.default.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},e.ScrollScene=re,e.SmoothScrollbar=ve,e.UseCanvas=se,e.ViewportScrollScene=le,e.styles={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"},e.useCanvas=ue,e.useCanvasStore=M,e.useImageAsTexture=function(e,n){var o,i,l=void 0===n?{}:n,u=l.initTexture,c=void 0===u||u,d=l.premultiplyAlpha,f=void 0===d?"default":d,v=r.useThree(function(e){return e.gl}),p=N(),h=M(function(e){return e.debug}),g=t.useState(null==(o=e.current)?void 0:o.currentSrc),m=g[0],b=g[1];t.useEffect(function(){var t=e.current,r=function(){var t;b(null==(t=e.current)?void 0:t.currentSrc)};return null==t||t.addEventListener("load",r),function(){return null==t?void 0:t.removeEventListener("load",r)}},[e,m,b]);var w,S,R,E=s.suspend(function(){return a.DefaultLoadingManager.itemStart("waiting for DOM image"),new Promise(function(t){var r=e.current;function n(){t(null==r?void 0:r.currentSrc),a.DefaultLoadingManager.itemEnd("waiting for DOM image")}null==r||r.addEventListener("load",n,{once:!0}),null!=r&&r.complete&&(null==r||r.removeEventListener("load",n),n())})},[e,p,null==(i=e.current)?void 0:i.currentSrc,m],{equal:y.default}),C=(w=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),R=(S=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||w||S&&R<98?a.TextureLoader:a.ImageBitmapLoader),T=r.useLoader(C,E,function(e){e instanceof a.ImageBitmapLoader&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:f,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(de?"image/webp,":"")+"*/*"}))}),O=t.useMemo(function(){return T instanceof a.Texture?T:T instanceof ImageBitmap?new a.CanvasTexture(T):void 0},[T]);return t.useEffect(function(){c&&v.initTexture(O),h&&console.log("useImageAsTexture","initTexture()")},[v,O,c]),O},e.useScrollRig=U,e.useScrollbar=$,e.useTracker=ee});
//# sourceMappingURL=scrollrig.umd.js.map
