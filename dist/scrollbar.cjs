var e=require("zustand"),n=require("react"),t=require("@studio-freight/lenis"),r=require("react-intersection-observer"),o=require("@juggle/resize-observer"),i=require("debounce"),l=require("vecn");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=/*#__PURE__*/u(e),a=/*#__PURE__*/u(t),s=/*#__PURE__*/u(i),d=/*#__PURE__*/u(l);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function v(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof n?n:String(n)}var h=c.default(function(e){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(n,t,r){return void 0===r&&(r={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,n)?(i[n].instances+=1,i[n].props.inactive=!1,{canvasChildren:i}):{canvasChildren:f({},i,((o={})[n]={mesh:t,props:r,instances:1},o))}})},updateCanvas:function(n,t){return e(function(e){var r,o=e.canvasChildren;if(o[n]){var i=o[n],l=i.instances;return{canvasChildren:f({},o,((r={})[n]={mesh:i.mesh,props:f({},i.props,t),instances:l},r))}}})},removeFromCanvas:function(n,t){return void 0===t&&(t=!0),e(function(e){var r,o=e.canvasChildren;return(null==(r=o[n])?void 0:r.instances)>1?(o[n].instances-=1,{canvasChildren:o}):t?{canvasChildren:function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}(o,[n].map(v))}:(o[n].instances=0,o[n].props.inactive=!0,{canvasChildren:f({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},__lenis:void 0,scrollTo:function(){},onScroll:function(){return function(){}}}}),p=function(){return{enabled:h(function(e){return e.hasSmoothScrollbar}),scroll:h(function(e){return e.scroll}),scrollTo:h(function(e){return e.scrollTo}),onScroll:h(function(e){return e.onScroll}),__lenis:h(function(e){return e.__lenis})}},w="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,g=n.forwardRef(function(e,t){var r=e.children,o=e.enabled,i=void 0===o||o,l=e.locked,u=void 0!==l&&l,c=e.scrollRestoration,s=void 0===c?"auto":c,d=e.disablePointerOnScroll,v=void 0===d||d,p=e.horizontal,g=void 0!==p&&p,m=e.scrollInContainer,b=void 0!==m&&m,y=e.updateGlobalState,S=void 0===y||y,R=e.onScroll,E=e.config,C=void 0===E?{}:E,T=e.invalidate,L=void 0===T?function(){}:T,j=e.addEffect,x=n.useRef(),O=n.useRef(),z=n.useRef(!1),_=h(function(e){return e.scroll});n.useImperativeHandle(t,function(){return{start:function(){var e;return null==(e=O.current)?void 0:e.start()},stop:function(){var e;return null==(e=O.current)?void 0:e.stop()},on:function(e,n){var t;return null==(t=O.current)?void 0:t.on(e,n)},notify:function(){var e;return null==(e=O.current)?void 0:e.emit()},emit:function(){var e;return null==(e=O.current)?void 0:e.emit()},scrollTo:function(e,n){var t;return null==(t=O.current)?void 0:t.scrollTo(e,n)},raf:function(e){var n;return null==(n=O.current)?void 0:n.raf(e)},__lenis:O.current}});var V=n.useCallback(function(e){v&&x.current&&z.current!==e&&(z.current=e,x.current.style.pointerEvents=e?"none":"auto")},[v,x,z]);return w(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=s)},[]),w(function(){var e,n,t=document.documentElement,r=document.body,o=document.body.firstElementChild;return t.classList.toggle("ScrollRig-scrollHtml",b),r.classList.toggle("ScrollRig-scrollWrapper",b),b&&Object.assign(C,{smoothTouch:!0,wrapper:r,content:o}),O.current=new a.default(f({orientation:g?"horizontal":"vertical"},C)),j?e=j(function(e){var n;return null==(n=O.current)?void 0:n.raf(e)}):(n=requestAnimationFrame(function e(t){var r;null==(r=O.current)||r.raf(t),n=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(n)}),function(){var n;e(),null==(n=O.current)||n.destroy()}},[]),w(function(){var e,n,t=function(e){var n=e.scroll,t=e.limit,r=e.velocity,o=e.direction,i=e.progress,l=g?n:0;S&&(_.y=g?0:n,_.x=l,_.limit=t,_.velocity=r,_.direction=o,_.progress=i||0),Math.abs(r)>1.5&&V(!0),Math.abs(r)<1&&V(!1),R&&R({scroll:n,limit:t,velocity:r,direction:o,progress:i}),L()};return null==(e=O.current)||e.on("scroll",t),S&&(_.scrollDirection=g?"horizontal":"vertical",h.setState({__lenis:O.current,scrollTo:function(){var e;null==(e=O.current)||e.scrollTo.apply(e,[].slice.call(arguments))},onScroll:function(e){var n,t;return null==(n=O.current)||n.on("scroll",e),null==(t=O.current)||t.emit(),function(){var n;return null==(n=O.current)?void 0:n.off("scroll",e)}}}),h.getState().scroll.y=window.scrollY,h.getState().scroll.x=window.scrollX),null==(n=O.current)||n.emit(),function(){var e;null==(e=O.current)||e.off("scroll",t),S&&h.setState({__lenis:void 0,onScroll:function(){return function(){}},scrollTo:function(){}})}},[]),w(function(){var e=function(){return L()},n=function(){return V(!1)};return window.addEventListener("pointermove",n),window.addEventListener("pointerdown",n),window.addEventListener("wheel",e),function(){window.removeEventListener("pointermove",n),window.removeEventListener("pointerdown",n),window.removeEventListener("wheel",e)}},[]),n.useEffect(function(){S&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),h.setState({hasSmoothScrollbar:i}))},[i]),n.useEffect(function(){var e,n;u?null==(e=O.current)||e.stop():null==(n=O.current)||n.start()},[u]),r({ref:x})}),m="undefined"!=typeof window;function b(e,n,t,r,o){return r+(e-n)*(o-r)/(t-n)}exports.SmoothScrollbar=g,exports.useScrollbar=p,exports.useTracker=function(e,t){var i=function(e){var t={}.debounce,r=void 0===t?0:t,i=n.useState({width:m?window.innerWidth:Infinity,height:m?window.innerHeight:Infinity}),l=i[0],u=i[1];return n.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function n(){var n=e?e.clientWidth:window.innerWidth,t=e?e.clientHeight:window.innerHeight;n===l.width&&t===l.height||u({width:n,height:t})}var t,i=s.default.debounce(n,r),c=window.ResizeObserver||o.ResizeObserver;return e?(t=new c(i)).observe(e):window.addEventListener("resize",i),n(),function(){var e;window.removeEventListener("resize",i),null==(e=t)||e.disconnect()}},[l,u]),l}(),l=p(),u=l.scroll,c=l.onScroll,a=h(function(e){return e.scaleMultiplier}),v=h(function(e){return e.pageReflow}),g=h(function(e){return e.debug}),y=n.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},n=t||{};return Object.keys(n).map(function(t,r){void 0!==n[t]&&(e[t]=n[t])}),e},[t]),S=y.autoUpdate,R=y.wrapper,E=r.useInView({rootMargin:y.rootMargin,threshold:y.threshold}),C=E.ref,T=E.inView;w(function(){C(e.current)},[e,null==e?void 0:e.current]);var L=n.useState(d.default.vec3(0,0,0)),j=L[0],x=L[1],O=n.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,z=n.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,_=n.useState(z),V=_[0],q=_[1],I=n.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,k=n.useRef(d.default.vec3(0,0,0)).current;w(function(){var n,t=null==(n=e.current)?void 0:n.getBoundingClientRect();if(t){var r=R?R.scrollTop:window.scrollY,o=R?R.scrollLeft:window.scrollX;z.top=t.top+r,z.bottom=t.bottom+r,z.left=t.left+o,z.right=t.right+o,z.width=t.width,z.height=t.height,q(f({},z)),x(d.default.vec3((null==z?void 0:z.width)*a,(null==z?void 0:z.height)*a,1)),g&&console.log("useTracker.getBoundingClientRect:",z,"intialScroll:",{initialY:r,initialX:o},"size:",i,"pageReflow:",v)}},[e,i,v,a,g]);var M=n.useCallback(function(n){var t=void 0===n?{}:n,r=t.onlyUpdateInViewport;if(e.current&&(void 0===r||!r||O.inViewport)){var o=t.scroll||u;!function(e,n,t,r){e.top=n.top-(t.y||0),e.bottom=n.bottom-(t.y||0),e.left=n.left-(t.x||0),e.right=n.right-(t.x||0),e.width=n.width,e.height=n.height,e.x=e.left+.5*n.width-.5*r.width,e.y=e.top+.5*n.height-.5*r.height,e.positiveYUpBottom=r.height-e.bottom}(I,z,o,i),function(e,n,t){e.x=n.x*t,e.y=-1*n.y*t}(k,I,a);var l="horizontal"===o.scrollDirection,c=l?"width":"height",s=i[c]-I[l?"left":"top"];O.progress=b(s,0,i[c]+I[c],0,1),O.visibility=b(s,0,I[c],0,1),O.viewport=b(s,0,i[c],0,1)}},[e,i,a,u]);return w(function(){O.inViewport=T,M({onlyUpdateInViewport:!1}),g&&console.log("useTracker.inViewport:",T,"update()")},[T]),w(function(){M({onlyUpdateInViewport:!1}),g&&console.log("useTracker.update on resize/reflow")},[M,v]),n.useEffect(function(){if(S)return c(function(e){return M({onlyUpdateInViewport:!0})})},[S,M,c]),{rect:V,bounds:I,scale:j,position:k,scrollState:O,inViewport:T,update:M}};
//# sourceMappingURL=scrollbar.cjs.map
