var t=require("zustand"),e=require("react"),n=require("@react-three/fiber"),r=require("debounce"),o=require("@studio-freight/lenis"),i=require("react-intersection-observer"),l=require("vecn");function u(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var c=/*#__PURE__*/u(t),a=/*#__PURE__*/u(e),s=/*#__PURE__*/u(r),d=/*#__PURE__*/u(o),f=/*#__PURE__*/u(l);function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v.apply(this,arguments)}function h(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}function p(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}var w=c.default(function(t){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return t(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(e,n,r){return void 0===r&&(r={}),t(function(t){var o,i=t.canvasChildren;return Object.getOwnPropertyDescriptor(i,e)?(i[e].instances+=1,i[e].props.inactive=!1,{canvasChildren:i}):{canvasChildren:v({},i,((o={})[e]={mesh:n,props:r,instances:1},o))}})},updateCanvas:function(e,n){return t(function(t){var r,o=t.canvasChildren;if(o[e]){var i=o[e],l=i.instances;return{canvasChildren:v({},o,((r={})[e]={mesh:i.mesh,props:v({},i.props,n),instances:l},r))}}})},removeFromCanvas:function(e,n){return void 0===n&&(n=!0),t(function(t){var r,o=t.canvasChildren;return(null==(r=o[e])?void 0:r.instances)>1?(o[e].instances-=1,{canvasChildren:o}):n?{canvasChildren:h(o,[e].map(p))}:(o[e].instances=0,o[e].props.inactive=!0,{canvasChildren:v({},o)})})},pageReflow:0,requestReflow:function(){t(function(t){return{pageReflow:t.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:""},scrollTo:function(t){return window.scrollTo(0,t)},onScroll:function(){return function(){}}}}),g=function(){return{enabled:w(function(t){return t.hasSmoothScrollbar}),scroll:w(function(t){return t.scroll}),scrollTo:w(function(t){return t.scrollTo}),onScroll:w(function(t){return t.onScroll})}},m="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,b=["children","duration","easing","smooth","direction","config"],y=function(t){return 1===t?1:1-Math.pow(2,-10*t)},S=e.forwardRef(function(t,n){var r=t.children,o=t.duration,i=void 0===o?1:o,l=t.easing,u=void 0===l?y:l,c=t.smooth,a=void 0===c||c,s=t.direction,f=void 0===s?"vertical":s,p=t.config,w=h(t,b),g=e.useRef();return e.useImperativeHandle(n,function(){return{start:function(){var t;return null==(t=g.current)?void 0:t.start()},stop:function(){var t;return null==(t=g.current)?void 0:t.stop()},on:function(t,e){var n;return null==(n=g.current)?void 0:n.on(t,e)},once:function(t,e){var n;return null==(n=g.current)?void 0:n.once(t,e)},off:function(t,e){var n;return null==(n=g.current)?void 0:n.off(t,e)},notify:function(){var t;return null==(t=g.current)?void 0:t.notify()},scrollTo:function(t,e){var n;return null==(n=g.current)?void 0:n.scrollTo(t,e)},raf:function(t){var e;return null==(e=g.current)?void 0:e.raf(t)}}}),e.useEffect(function(){var t=g.current=new d.default(v({duration:i,easing:u,smooth:a,direction:f},p));return function(){t.destroy()}},[i,u,a,f]),r&&r(w)}),R="undefined"!=typeof window;function C(t,e,n,r,o){return r+(t-e)*(o-r)/(n-e)}exports.SmoothScrollbar=function(t){var r=t.children,o=t.enabled,i=void 0===o||o,l=t.locked,u=void 0!==l&&l,c=t.scrollRestoration,d=void 0===c?"auto":c,f=t.disablePointerOnScroll,h=void 0===f||f,p=t.horizontal,g=void 0!==p&&p,b=t.scrollInContainer,y=void 0!==b&&b,R=t.updateGlobalState,C=void 0===R||R,E=t.onScroll,x=t.config,T=e.useRef(),L=e.useRef(),j=e.useRef(!1),O=w(function(t){return t.scroll}),I=function(t){h&&T.current&&j.current!==t&&(j.current=t,T.current.style.pointerEvents=t?"none":"auto")},V=e.useCallback(function(){I(!1)},[]),M=e.useCallback(function(t){var e;return null==(e=L.current)||e.on("scroll",t),function(){var e;return null==(e=L.current)?void 0:e.off("scroll",t)}},[]);m(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=d)},[]),e.useEffect(function(){var t,e,r,o=n.addEffect(function(t){var e;return null==(e=L.current)?void 0:e.raf(t)});null==(t=L.current)||t.on("scroll",function(t){var e=t.scroll,r=t.limit,o=t.velocity,i=t.direction,l=t.progress;C&&(O.y="vertical"===i?e:0,O.x="horizontal"===i?e:0,O.limit=r,O.velocity=o,O.direction=i,O.progress=l);var u=s.default.debounce(function(){return I(!0)},100,!0);Math.abs(o)>1.4?u():I(!1),E&&E({scroll:e,limit:r,velocity:o,direction:i,progress:l}),n.invalidate()}),null==(e=L.current)||e.notify(),C&&(w.setState({scrollTo:null==(r=L.current)?void 0:r.scrollTo}),w.setState({onScroll:M}),w.getState().scroll.y=window.scrollY,w.getState().scroll.x=window.scrollX),document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),w.setState({hasSmoothScrollbar:i});var l=function(){return n.invalidate()};return window.addEventListener("pointermove",V),window.addEventListener("wheel",l),function(){o(),window.removeEventListener("pointermove",V),window.removeEventListener("wheel",l)}},[i]),e.useEffect(function(){var t,e;u?null==(t=L.current)||t.stop():null==(e=L.current)||e.start()},[u]);var q=e.useMemo(function(){if("undefined"==typeof document)return{};var t=document.documentElement,e=document.body,n=document.body.firstElementChild;return t.classList.toggle("ScrollRig-scrollHtml",y),e.classList.toggle("ScrollRig-scrollWrapper",y),{wrapper:e,content:n}},[y]);return a.default.createElement(S,{ref:L,smooth:i,direction:g?"horizontal":"vertical",config:v(y?{smoothTouch:!0,wrapper:q.wrapper,content:q.content}:{},x)},function(t){return r(v({},t,{ref:T}))})},exports.useScrollbar=g,exports.useTracker=function(t,n){var r=function(){var t=e.useState({width:R?window.innerWidth:Infinity,height:R?window.innerHeight:Infinity}),n=t[0],r=t[1];return e.useEffect(function(){var t=document.getElementById("ScrollRig-canvas");function e(){r({width:t?t.clientWidth:window.innerWidth,height:t?t.clientHeight:window.innerHeight})}var n,o=s.default.debounce(e,200);return t?(n=new ResizeObserver(o)).observe(t):window.addEventListener("resize",o),e(),function(){var t;window.removeEventListener("resize",o),null==(t=n)||t.disconnect()}},[]),n}(),o=g(),l=o.scroll,u=o.onScroll,c=w(function(t){return t.scaleMultiplier}),a=w(function(t){return t.pageReflow}),d=e.useMemo(function(){var t={rootMargin:"50%",threshold:0,autoUpdate:!0,wrapper:window},e=n||{};return Object.keys(e).map(function(n,r){void 0!==e[n]&&(t[n]=e[n])}),t},[n]),h=d.autoUpdate,p=d.wrapper,b=i.useInView({rootMargin:d.rootMargin,threshold:d.threshold}),y=b.ref,S=b.inView;m(function(){y(t.current)},[t]);var E=e.useState(),x=E[0],T=E[1],L=e.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,j=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,O=e.useState(j),I=O[0],V=O[1],M=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,q=e.useRef(f.default.vec3(0,0,0)).current;m(function(){var e,n=null==(e=t.current)?void 0:e.getBoundingClientRect(),r=p===window?p.scrollY:p.scrollTop,o=p===window?p.scrollX:p.scrollLeft;j.top=n.top+r,j.bottom=n.bottom+r,j.left=n.left+o,j.right=n.right+o,j.width=n.width,j.height=n.height,j.x=j.left+.5*n.width,j.y=j.top+.5*n.height,V(v({},j)),T(f.default.vec3((null==j?void 0:j.width)*c,(null==j?void 0:j.height)*c,1))},[t,r,a,c]);var z=e.useCallback(function(e){var n=void 0===e?{}:e,o=n.onlyUpdateInViewport,i=n.scroll,u=void 0===i?l:i;if(t.current&&(void 0!==o&&!o||L.inViewport)){!function(t,e,n,r){t.top=e.top-n.y,t.bottom=e.bottom-n.y,t.left=e.left-n.x,t.right=e.right-n.x,t.width=e.width,t.height=e.height,t.x=t.left+.5*e.width-.5*r.width,t.y=t.top+.5*e.height-.5*r.height,t.positiveYUpBottom=r.height-t.bottom}(M,j,u,r),function(t,e,n){t.x=e.x*n,t.y=-1*e.y*n}(q,M,c);var a="horizontal"===u.direction,s=a?"width":"height",d=r[s]-M[a?"left":"top"];L.progress=C(d,0,r[s]+M[s],0,1),L.visibility=C(d,0,M[s],0,1),L.viewport=C(d,0,r[s],0,1)}},[t,r,c,l]);return m(function(){L.inViewport=S,z({onlyUpdateInViewport:!1})},[S]),m(function(){z({onlyUpdateInViewport:!1})},[z]),e.useEffect(function(){if(h)return u(function(t){return z()})},[h,z,u]),{rect:I,bounds:M,scale:x,position:q,scrollState:L,inViewport:S,update:function(t){return z(v({onlyUpdateInViewport:!1},t))}}};
//# sourceMappingURL=scrollbar.cjs.map
