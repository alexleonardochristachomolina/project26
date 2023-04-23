import e,{useLayoutEffect as t,useEffect as r,forwardRef as n,useRef as o,useImperativeHandle as l,useMemo as i,Fragment as a,cloneElement as s,Component as c,useState as u,useCallback as d,memo as p}from"react";import{useThree as h,invalidate as m,useFrame as g,Canvas as v,createPortal as f,useLoader as w,addEffect as b}from"@react-three/fiber";import{ResizeObserver as y}from"@juggle/resize-observer";import{parse as S}from"query-string";import R from"zustand";import{Vector2 as E,Color as C,Scene as T,MathUtils as I,DefaultLoadingManager as O,TextureLoader as L,ImageBitmapLoader as M,Texture as k,CanvasTexture as P}from"three";import{useInView as x}from"react-intersection-observer";import V from"debounce";import D from"vecn";import{suspend as A}from"suspend-react";import j from"supports-webp";import _ from"fast-deep-equal";import U from"@studio-freight/lenis";function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}function F(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(r=l[n])>=0||(o[r]=e[r]);return o}function Y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}const Q="undefined"!=typeof window?t:r,q={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},B=R(e=>({debug:!1,scaleMultiplier:q.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:q.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:()=>e(()=>({globalRenderQueue:!1})),isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:(t,r,n={})=>e(({canvasChildren:e})=>Object.getOwnPropertyDescriptor(e,t)?(e[t].instances+=1,e[t].props.inactive=!1,{canvasChildren:e}):{canvasChildren:z({},e,{[t]:{mesh:r,props:n,instances:1}})}),updateCanvas:(t,r)=>e(({canvasChildren:e})=>{if(!e[t])return;const{[t]:{mesh:n,props:o,instances:l}}=e;return{canvasChildren:z({},e,{[t]:{mesh:n,props:z({},o,r),instances:l}})}}),removeFromCanvas:(t,r=!0)=>e(({canvasChildren:e})=>{var n;return(null==(n=e[t])?void 0:n.instances)>1?(e[t].instances-=1,{canvasChildren:e}):r?{canvasChildren:F(e,[t].map(Y))}:(e[t].instances=0,e[t].props.inactive=!0,{canvasChildren:z({},e)})}),pageReflow:0,requestReflow:()=>{e(e=>({pageReflow:e.pageReflow+1}))},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:e=>window.scrollTo(0,e),onScroll:()=>()=>{}})),G=()=>{const e=B(e=>e.requestReflow),t=B(e=>e.debug);return r(()=>{let r=new(window.ResizeObserver||y)(()=>{e(),t&&console.log("ResizeManager","document.body height changed")});return r.observe(document.body),()=>{null==r||r.disconnect()}},[]),null},W=["makeDefault","margin"],H=n((t,r)=>{let{makeDefault:n=!1,margin:a=0}=t,s=F(t,W);const c=h(e=>e.set),u=h(e=>e.camera),d=h(e=>e.size),p=h(e=>e.viewport),m=o(null);l(r,()=>m.current);const g=B(e=>e.pageReflow),v=B(e=>e.scaleMultiplier),{fov:f,distance:w,aspect:b}=i(()=>{var e;const t=(d.height+2*a)*v,r=(d.width+2*a)*v/t;let n=s.fov||50,o=null==s||null==(e=s.position)?void 0:e[2];return o?n=180/Math.PI*2*Math.atan(t/(2*o)):o=t/(2*Math.tan(n/2*Math.PI/180)),{fov:n,distance:o,aspect:r}},[d,v,g]);return Q(()=>{m.current.lookAt(0,0,0),m.current.updateProjectionMatrix(),m.current.updateMatrixWorld(),c(e=>({viewport:z({},e.viewport,p.getCurrentViewport(u))}))},[d,v,g]),Q(()=>{if(n){const e=u;return c(()=>({camera:m.current})),()=>c(()=>({camera:e}))}},[m,n,c]),e.createElement("perspectiveCamera",z({ref:m,position:[0,0,w],onUpdate:e=>e.updateProjectionMatrix(),near:.1,aspect:b,fov:f,far:2*w},s))}),X=["makeDefault","margin"],J=n((t,r)=>{let{makeDefault:n=!1,margin:a=0}=t,s=F(t,X);const c=h(e=>e.set),u=h(e=>e.camera),d=h(e=>e.size),p=B(e=>e.pageReflow),m=B(e=>e.scaleMultiplier),g=i(()=>Math.max(d.width*m,d.height*m),[d,p,m]),v=o(null);return l(r,()=>v.current),Q(()=>{v.current.lookAt(0,0,0),v.current.updateProjectionMatrix(),v.current.updateMatrixWorld()},[g,d]),Q(()=>{if(n){const e=u;return c(()=>({camera:v.current})),()=>c(()=>({camera:e}))}},[v,n,c]),e.createElement("orthographicCamera",z({left:d.width*m/-2-a*m,right:d.width*m/2+a*m,top:d.height*m/2+a*m,bottom:d.height*m/-2-a*m,far:2*g,position:[0,0,g],near:.001,ref:v,onUpdate:e=>e.updateProjectionMatrix()},s))});function K(e,t){e&&(!1===t?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(e=>K(e,t)))}const N=new E,Z=(e=[0])=>{B.getState().globalRenderQueue=B.getState().globalRenderQueue||[0],B.getState().globalRenderQueue=[...B.getState().globalRenderQueue||[],...e]},$=({gl:e,scene:t,camera:r,left:n,top:o,width:l,height:i,layer:a=0,autoClear:s=!1,clearDepth:c=!1})=>{t&&r&&(e.autoClear=s,e.setScissor(n,o,l,i),e.setScissorTest(!0),r.layers.set(a),c&&e.clearDepth(),e.render(t,r),e.setScissorTest(!1))},ee=({gl:e,scene:t,camera:r,left:n,top:o,width:l,height:i,layer:a=0,scissor:s=!0,autoClear:c=!1,clearDepth:u=!1})=>{t&&r&&(e.getSize(N),e.autoClear=c,e.setViewport(n,o,l,i),e.setScissor(n,o,l,i),e.setScissorTest(s),r.layers.set(a),u&&e.clearDepth(),e.render(t,r),e.setScissorTest(!1),e.setViewport(0,0,N.x,N.y))},te=(e,t,r=0,n)=>{q.preloadQueue.push((o,l,i)=>{o.setScissorTest(!1),K(e||l,!1),t.layers.set(r),o.render(e||l,t||i),K(e||l,!0),n&&n()}),m()},re=()=>{const e=B(e=>e.isCanvasAvailable),t=B(e=>e.hasSmoothScrollbar),n=B(e=>e.requestReflow),o=B(e=>e.pageReflow),l=B(e=>e.debug),i=B(e=>e.scaleMultiplier);return r(()=>{l&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:l,isCanvasAvailable:e,hasSmoothScrollbar:t,scaleMultiplier:i,preloadScene:te,requestRender:Z,renderScissor:$,renderViewport:ee,reflow:n,reflowCompleted:o}},ne=({children:t})=>{const n=h(e=>e.gl),o=B(e=>e.canvasChildren),l=re();return r(()=>{Object.keys(o).length||(l.debug&&console.log("GlobalRenderer","auto render empty canvas"),n.clear(),l.requestRender(),m())},[o]),l.debug&&console.log("GlobalChildren",Object.keys(o).length),e.createElement(e.Fragment,null,t,Object.keys(o).map(t=>{const{mesh:r,props:n}=o[t];return"function"==typeof r?e.createElement(a,{key:t},r(z({key:t},l,n))):s(r,z({key:t},n))}))},oe=()=>{const e=h(e=>e.gl),t=h(e=>e.frameloop),r=B(e=>e.globalClearDepth),n=B(e=>e.globalPriority),o=re();return Q(()=>{e.debug.checkShaderErrors=o.debug},[o.debug]),g(({camera:t,scene:r})=>{q.preloadQueue.length&&(q.preloadQueue.forEach(n=>n(e,r,t)),e.clear(),q.preloadQueue=[],o.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),o.requestRender(),m())},q.PRIORITY_PRELOAD),g(({camera:n,scene:o})=>{const l=B.getState().globalRenderQueue;("always"===t||l)&&(n.layers.disableAll(),l?l.forEach(e=>{n.layers.enable(e)}):n.layers.enable(0),r&&e.clearDepth(),e.render(o,n)),B.getState().clearGlobalRenderQueue()},n),null};class le extends c{constructor(e){super(e),this.state={error:!1},this.props=e}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children}}const ie=["children","as","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],ae=["children","onError"];let se;"undefined"!=typeof window&&(se=window.ResizeObserver||y);const ce=t=>{let{children:r,as:n=v,gl:o,style:l,orthographic:i,camera:a,debug:s,scaleMultiplier:c=q.DEFAULT_SCALE_MULTIPLIER,globalRender:u=!0,globalPriority:d=q.PRIORITY_GLOBAL,globalClearDepth:p=!1}=t,h=F(t,ie);const m=B(e=>e.globalRender);return Q(()=>{const e=S(window.location.search);(s||void 0!==e.debug)&&B.setState({debug:!0})},[s]),Q(()=>{B.setState({scaleMultiplier:c,globalRender:u,globalPriority:d,globalClearDepth:p})},[c,d,u,p]),e.createElement(n,z({id:"ScrollRig-canvas",camera:{manual:!0},gl:z({failIfMajorPerformanceCaveat:!0},o),resize:{scroll:!1,debounce:0,polyfill:se},style:z({position:"fixed",top:0,left:0,right:0,height:"100vh"},l)},h),!i&&e.createElement(H,z({manual:!0,makeDefault:!0},a)),i&&e.createElement(J,z({manual:!0,makeDefault:!0},a)),m&&e.createElement(oe,null),"function"==typeof r?r(e.createElement(ne,null)):e.createElement(ne,null,r),e.createElement(G,null))},ue=t=>{let{children:r,onError:n}=t,o=F(t,ae);return Q(()=>{document.documentElement.classList.add("js-has-global-canvas")},[]),e.createElement(le,{onError:e=>{n&&n(e),B.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},e.createElement(ce,z({},o),r),e.createElement("noscript",null,e.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},de=({scale:t})=>e.createElement("mesh",{scale:t},e.createElement("planeGeometry",null),e.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new C("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0})),pe="undefined"!=typeof window;function he({debounce:e=0}={}){const[t,n]=u({width:pe?window.innerWidth:Infinity,height:pe?window.innerHeight:Infinity});return r(()=>{const r=document.getElementById("ScrollRig-canvas");function o(){const e=r?r.clientWidth:window.innerWidth,o=r?r.clientHeight:window.innerHeight;e===t.width&&o===t.height||n({width:e,height:o})}const l=V.debounce(o,e),i=window.ResizeObserver||y;let a;return r?(a=new i(l),a.observe(r)):window.addEventListener("resize",l),o(),()=>{var e;window.removeEventListener("resize",l),null==(e=a)||e.disconnect()}},[t,n]),t}function me(e,t,r,n,o){return n+(e-t)*(o-n)/(r-t)}const ge=()=>({enabled:B(e=>e.hasSmoothScrollbar),scroll:B(e=>e.scroll),scrollTo:B(e=>e.scrollTo),onScroll:B(e=>e.onScroll)});function ve(e,t){const n=he(),{scroll:l,onScroll:a}=ge(),s=B(e=>e.scaleMultiplier),c=B(e=>e.pageReflow),p=B(e=>e.debug),{rootMargin:h,threshold:m,autoUpdate:g,wrapper:v}=i(()=>{const e={rootMargin:"0%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map((t,n)=>{void 0!==r[t]&&(e[t]=r[t])}),e},[t]),{ref:f,inView:w}=x({rootMargin:h,threshold:m});Q(()=>{f(e.current)},[e]);const[b,y]=u(D.vec3(0,0,0)),S=o({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,R=o({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,[E,C]=u(R),T=o({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,I=o(D.vec3(0,0,0)).current;Q(()=>{var t;const r=null==(t=e.current)?void 0:t.getBoundingClientRect();if(!r)return;const o=v?v.scrollTop:window.scrollY,l=v?v.scrollLeft:window.scrollX;R.top=r.top+o,R.bottom=r.bottom+o,R.left=r.left+l,R.right=r.right+l,R.width=r.width,R.height=r.height,C(z({},R)),y(D.vec3((null==R?void 0:R.width)*s,(null==R?void 0:R.height)*s,1)),p&&console.log("useTracker.getBoundingClientRect:",R,"intialScroll:",{initialY:o,initialX:l},"size:",n,"pageReflow:",c)},[e,n,c,s,p]);const O=d(({onlyUpdateInViewport:t=!1,scroll:r}={})=>{if(!e.current||t&&!S.inViewport)return;const o=r||l;!function(e,t,r,n){e.top=t.top-(r.y||0),e.bottom=t.bottom-(r.y||0),e.left=t.left-(r.x||0),e.right=t.right-(r.x||0),e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*n.width,e.y=e.top+.5*t.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(T,R,o,n),function(e,t,r){e.x=t.x*r,e.y=-1*t.y*r}(I,T,s);const i="horizontal"===o.scrollDirection,a=i?"width":"height",c=n[a]-T[i?"left":"top"];S.progress=me(c,0,n[a]+T[a],0,1),S.visibility=me(c,0,T[a],0,1),S.viewport=me(c,0,n[a],0,1)},[e,n,s,l]);return Q(()=>{S.inViewport=w,O({onlyUpdateInViewport:!1}),p&&console.log("useTracker.inViewport:",w,"update()")},[w]),Q(()=>{O({onlyUpdateInViewport:!1}),p&&console.log("useTracker.update on resize/reflow")},[O,c]),r(()=>{if(g)return a(e=>O({onlyUpdateInViewport:!0}))},[g,O,a]),{rect:E,bounds:T,scale:b,position:I,scrollState:S,inViewport:w,update:O}}const fe=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority"],we=p(t=>{let{track:r,children:n,margin:o=0,inViewportMargin:l,inViewportThreshold:i,visible:a=!0,hideOffscreen:s=!0,scissor:c=!1,debug:p=!1,as:h="scene",priority:m=q.PRIORITY_SCISSORS}=t,v=F(t,fe);const w=d(e=>{null!==e&&y(e)},[]),[b,y]=u(c?new T:null),{requestRender:S,renderScissor:R}=re(),E=B(e=>e.globalRender),{bounds:C,scale:I,position:O,scrollState:L,inViewport:M}=ve(r,{rootMargin:l,threshold:i});Q(()=>{b&&(b.visible=s?M&&a:a)},[b,M,s,a]),g(({gl:e,camera:t})=>{b&&b.visible&&(b.position.y=O.y,b.position.x=O.x,c?R({gl:e,scene:b,camera:t,left:C.left-o,top:C.positiveYUpBottom-o,width:C.width+2*o,height:C.height+2*o}):S())},E?m:void 0);const k=e.createElement(e.Fragment,null,(!n||p)&&I&&e.createElement(de,{scale:I}),n&&b&&I&&n(z({track:r,margin:o,scale:I,scrollState:L,inViewport:M,priority:m},v))),P=h;return c&&b?f(k,b):e.createElement(P,{ref:w},k)}),be=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud"],ye=["track","margin","inViewportMargin","inViewportThreshold","priority"],Se=["bounds"],Re=t=>{let{track:n,children:o,margin:l=0,visible:i=!0,hideOffscreen:a=!0,debug:s=!1,orthographic:c=!1,priority:u=q.PRIORITY_VIEWPORTS,inViewport:d,bounds:p,scale:m,scrollState:v,camera:f,hud:w}=t,b=F(t,be);const y=h(e=>e.scene),S=h(e=>e.get),R=h(e=>e.setEvents),{renderViewport:E}=re();return Q(()=>{y.visible=a?d&&i:i},[d,a,i]),r(()=>{const e=S().events.connected;return R({connected:n.current}),()=>R({connected:e})},[]),g(({gl:e,scene:t,camera:r})=>{t.visible&&E({gl:e,scene:t,camera:r,left:p.left-l,top:p.positiveYUpBottom-l,width:p.width+2*l,height:p.height+2*l,clearDepth:!!w})},u),e.createElement(e.Fragment,null,!c&&e.createElement(H,z({manual:!0,margin:l,makeDefault:!0},f)),c&&e.createElement(J,z({manual:!0,margin:l,makeDefault:!0},f)),(!o||s)&&m&&e.createElement(de,{scale:m}),o&&m&&o(z({track:n,margin:l,scale:m,scrollState:v,inViewport:d,priority:u},b)))},Ee=p(function(t){let{track:r,margin:n=0,inViewportMargin:o,inViewportThreshold:l,priority:i}=t,a=F(t,ye);const[s]=u(()=>new T),c=ve(r,{rootMargin:o,threshold:l}),{bounds:p}=c,h=F(c,Se),m=d((e,t)=>{if(r.current&&e.target===r.current){const{width:r,height:o,left:l,top:i}=p;t.pointer.set((e.clientX-l+n)/(r+2*n)*2-1,-(e.clientY-i+n)/(o+2*n)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)}},[p]);return p&&f(e.createElement(Re,z({track:r,bounds:p,priority:i,margin:n},a,h)),s,{events:{compute:m,priority:i},size:{width:p.width,height:p.height}})});function Ce(e,t={},{key:n,dispose:o=!0}={}){const l=B(e=>e.updateCanvas),a=B(e=>e.renderToCanvas),s=B(e=>e.removeFromCanvas),c=i(()=>n||I.generateUUID(),[]);Q(()=>{a(c,e,{inactive:!1})},[c]),r(()=>()=>{s(c,o)},[c]);const u=d(e=>{l(c,e)},[l,c]);return r(()=>{u(t)},[...Object.values(t)]),u}const Te=["children","id","dispose"],Ie=n((e,t)=>{let{children:r,id:n,dispose:o=!0}=e;return Ce(r,z({},F(e,Te),{ref:t}),{key:n,dispose:o}),null});let Oe=!1;function Le(e,{initTexture:t=!0,premultiplyAlpha:n="default"}={}){var o,l;const a=h(e=>e.gl),s=he(),c=B(e=>e.debug),[d,p]=u(null==(o=e.current)?void 0:o.currentSrc);r(()=>{const t=e.current,r=()=>{var t;p(null==(t=e.current)?void 0:t.currentSrc)};return null==t||t.addEventListener("load",r),()=>null==t?void 0:t.removeEventListener("load",r)},[e,d,p]);const m=A(()=>(O.itemStart("waiting for DOM image"),new Promise(t=>{const r=e.current;function n(){t(null==r?void 0:r.currentSrc),O.itemEnd("waiting for DOM image")}null==r||r.addEventListener("load",n,{once:!0}),null!=r&&r.complete&&(null==r||r.removeEventListener("load",n),n())})),[e,s,null==(l=e.current)?void 0:l.currentSrc,d],{equal:_}),g=function(){const e=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),t=navigator.userAgent.indexOf("Firefox")>-1,r=t?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;return"undefined"==typeof createImageBitmap||e||t&&r<98}()?L:M,v=w(g,m,e=>{e instanceof M&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:n,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(Oe?"image/webp,":"")+"*/*"}))}),f=i(()=>v instanceof k?v:v instanceof ImageBitmap?new P(v):void 0,[v]);return r(function(){t&&a.initTexture(f),c&&console.log("useImageAsTexture","initTexture()")},[a,f,t]),f}j.then(e=>{Oe=e});const Me=n(({children:e,enabled:t=!0,locked:n=!1,scrollRestoration:i="auto",disablePointerOnScroll:a=!0,horizontal:s=!1,scrollInContainer:c=!1,updateGlobalState:u=!0,onScroll:p,config:h={},invalidate:m=(()=>{}),addEffect:g},v)=>{const f=o(),w=o(),b=o(!1),y=B(e=>e.scroll);l(v,()=>({start:()=>{var e;return null==(e=w.current)?void 0:e.start()},stop:()=>{var e;return null==(e=w.current)?void 0:e.stop()},on:(e,t)=>{var r;return null==(r=w.current)?void 0:r.on(e,t)},notify:()=>{var e;return null==(e=w.current)?void 0:e.emit()},emit:()=>{var e;return null==(e=w.current)?void 0:e.emit()},scrollTo:(e,t)=>{var r;return null==(r=w.current)?void 0:r.scrollTo(e,t)},raf:e=>{var t;return null==(t=w.current)?void 0:t.raf(e)},__lenis:w.current}));const S=d(e=>{a&&f.current&&b.current!==e&&(b.current=e,f.current.style.pointerEvents=e?"none":"auto")},[a,f,b]);return Q(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration=i)},[]),Q(()=>{const e=document.documentElement,t=document.body,r=document.body.firstElementChild;let n;if(e.classList.toggle("ScrollRig-scrollHtml",c),t.classList.toggle("ScrollRig-scrollWrapper",c),c&&Object.assign(h,{smoothTouch:!0,wrapper:t,content:r}),w.current=new U(z({orientation:s?"horizontal":"vertical"},h)),g)n=g(e=>{var t;return null==(t=w.current)?void 0:t.raf(e)});else{let e;e=requestAnimationFrame(function t(r){var n;null==(n=w.current)||n.raf(r),e=requestAnimationFrame(t)}),n=()=>cancelAnimationFrame(e)}return()=>{var e;n(),null==(e=w.current)||e.destroy()}},[]),Q(()=>{var e,t;const r=({scroll:e,limit:t,velocity:r,direction:n,progress:o})=>{const l=s?e:0;u&&(y.y=s?0:e,y.x=l,y.limit=t,y.velocity=r,y.direction=n,y.progress=o),Math.abs(r)>1.5&&S(!0),Math.abs(r)<1&&S(!1),p&&p({scroll:e,limit:t,velocity:r,direction:n,progress:o}),m()};var n;return null==(e=w.current)||e.on("scroll",r),u&&(y.scrollDirection=s?"horizontal":"vertical",B.setState({scrollTo:null==(n=w.current)?void 0:n.scrollTo}),B.setState({onScroll:e=>{var t,r;return null==(t=w.current)||t.on("scroll",e),null==(r=w.current)||r.emit(),()=>{var t;return null==(t=w.current)?void 0:t.off("scroll",e)}}}),B.getState().scroll.y=window.scrollY,B.getState().scroll.x=window.scrollX),null==(t=w.current)||t.emit(),()=>{var e;null==(e=w.current)||e.off("scroll",r)}},[]),Q(()=>{const e=()=>m(),t=()=>S(!1);return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",e),()=>{window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",e)}},[]),r(()=>{u&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",t),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!t),B.setState({hasSmoothScrollbar:t}))},[t]),r(()=>{var e,t;n?null==(e=w.current)||e.stop():null==(t=w.current)||t.start()},[n]),e({ref:f})});var ke=n(function(t,r){return e.createElement(Me,z({ref:r,invalidate:m,addEffect:b},t))});const Pe={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"};export{ue as GlobalCanvas,we as ScrollScene,ke as SmoothScrollbar,Ie as UseCanvas,Ee as ViewportScrollScene,Pe as styles,Ce as useCanvas,B as useCanvasStore,Le as useImageAsTexture,re as useScrollRig,ge as useScrollbar,ve as useTracker};
//# sourceMappingURL=scrollrig.modern.js.map
