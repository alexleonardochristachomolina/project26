import n from"zustand";import t,{useLayoutEffect as r,useEffect as o,forwardRef as e,useRef as i,useImperativeHandle as l,useCallback as c,useMemo as u,useState as a}from"react";import{addEffect as s,invalidate as d}from"@react-three/fiber";import f from"debounce";import v from"@studio-freight/lenis";import{useInView as h}from"react-intersection-observer";import p from"vecn";function w(){return w=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},w.apply(this,arguments)}function g(n,t){if(null==n)return{};var r,o,e={},i=Object.keys(n);for(o=0;o<i.length;o++)t.indexOf(r=i[o])>=0||(e[r]=n[r]);return e}function m(n){var t=function(n,t){if("object"!=typeof n||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==typeof t?t:String(t)}var b=n(function(n){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return n(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,r,o){return void 0===o&&(o={}),n(function(n){var e,i=n.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:w({},i,((e={})[t]={mesh:r,props:o,instances:1},e))}})},updateCanvas:function(t,r){return n(function(n){var o,e=n.canvasChildren;if(e[t]){var i=e[t],l=i.instances;return{canvasChildren:w({},e,((o={})[t]={mesh:i.mesh,props:w({},i.props,r),instances:l},o))}}})},removeFromCanvas:function(t,r){return void 0===r&&(r=!0),n(function(n){var o,e=n.canvasChildren;return(null==(o=e[t])?void 0:o.instances)>1?(e[t].instances-=1,{canvasChildren:e}):r?{canvasChildren:g(e,[t].map(m))}:(e[t].instances=0,e[t].props.inactive=!0,{canvasChildren:w({},e)})})},pageReflow:0,requestReflow:function(){n(function(n){return{pageReflow:n.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(n){return window.scrollTo(0,n)},onScroll:function(){return function(){}}}}),y=function(){return{enabled:b(function(n){return n.hasSmoothScrollbar}),scroll:b(function(n){return n.scroll}),scrollTo:b(function(n){return n.scrollTo}),onScroll:b(function(n){return n.onScroll})}},S="undefined"!=typeof window?r:o,C=["children","duration","easing","smooth","direction","config"],R=function(n){return 1===n?1:1-Math.pow(2,-10*n)},E=e(function(n,t){var r=n.children,e=n.duration,c=void 0===e?1:e,u=n.easing,a=void 0===u?R:u,s=n.smooth,d=void 0===s||s,f=n.direction,h=void 0===f?"vertical":f,p=n.config,m=g(n,C),b=i();return l(t,function(){return{start:function(){var n;return null==(n=b.current)?void 0:n.start()},stop:function(){var n;return null==(n=b.current)?void 0:n.stop()},on:function(n,t){var r;return null==(r=b.current)?void 0:r.on(n,t)},once:function(n,t){var r;return null==(r=b.current)?void 0:r.once(n,t)},off:function(n,t){var r;return null==(r=b.current)?void 0:r.off(n,t)},notify:function(){var n;return null==(n=b.current)?void 0:n.notify()},scrollTo:function(n,t){var r;return null==(r=b.current)?void 0:r.scrollTo(n,t)},raf:function(n){var t;return null==(t=b.current)?void 0:t.raf(n)}}}),o(function(){var n=b.current=new v(w({duration:c,easing:a,smooth:d,direction:h},p));return function(){n.destroy()}},[c,a,d,h]),r&&r(m)}),T=e(function(n,r){var e=n.children,a=n.enabled,v=void 0===a||a,h=n.locked,p=void 0!==h&&h,g=n.scrollRestoration,m=void 0===g?"auto":g,y=n.disablePointerOnScroll,C=void 0===y||y,R=n.horizontal,T=void 0!==R&&R,x=n.scrollInContainer,L=void 0!==x&&x,O=n.updateGlobalState,j=void 0===O||O,V=n.onScroll,z=n.config,I=i(),U=i(),M=i(!1),P=b(function(n){return n.scroll});l(r,function(){return{scrollTo:function(n,t){var r;return null==(r=U.current)?void 0:r.scrollTo(n,t)}}});var D=function(n){C&&I.current&&M.current!==n&&(M.current=n,I.current.style.pointerEvents=n?"none":"auto")},B=c(function(){D(!1)},[]),H=c(function(n){var t;return null==(t=U.current)||t.on("scroll",n),function(){var t;return null==(t=U.current)?void 0:t.off("scroll",n)}},[]);S(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=m)},[]),o(function(){var n,t,r,o=s(function(n){var t;return null==(t=U.current)?void 0:t.raf(n)});null==(n=U.current)||n.on("scroll",function(n){var t=n.scroll,r=n.limit,o=n.velocity,e=n.direction,i=n.progress;j&&(P.y=T?0:t,P.x=T?t:0,P.limit=r,P.velocity=o,P.direction=e,P.progress=i);var l=f.debounce(function(){return D(!0)},100,!0);Math.abs(o)>1.4?l():D(!1),V&&V({scroll:t,limit:r,velocity:o,direction:e,progress:i}),d()}),null==(t=U.current)||t.notify(),j&&(P.scrollDirection=T?"horizontal":"vertical",b.setState({scrollTo:null==(r=U.current)?void 0:r.scrollTo}),b.setState({onScroll:H}),b.getState().scroll.y=window.scrollY,b.getState().scroll.x=window.scrollX),document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",v),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!v),b.setState({hasSmoothScrollbar:v});var e=function(){return d()};return window.addEventListener("pointermove",B),window.addEventListener("wheel",e),function(){o(),window.removeEventListener("pointermove",B),window.removeEventListener("wheel",e)}},[v]),o(function(){var n,t;p?null==(n=U.current)||n.stop():null==(t=U.current)||t.start()},[p]);var W=u(function(){if("undefined"==typeof document)return{};var n=document.documentElement,t=document.body,r=document.body.firstElementChild;return n.classList.toggle("ScrollRig-scrollHtml",L),t.classList.toggle("ScrollRig-scrollWrapper",L),{wrapper:t,content:r}},[L]);return t.createElement(E,{ref:U,smooth:v,direction:T?"horizontal":"vertical",config:w(L?{smoothTouch:!0,wrapper:W.wrapper,content:W.content}:{},z)},function(n){return e(w({},n,{ref:I}))})}),x="undefined"!=typeof window;function L(n,t,r,o,e){return o+(n-t)*(e-o)/(r-t)}function O(n,t){var r=function(){var n=a({width:x?window.innerWidth:Infinity,height:x?window.innerHeight:Infinity}),t=n[0],r=n[1];return o(function(){var n=document.getElementById("ScrollRig-canvas");function t(){r({width:n?n.clientWidth:window.innerWidth,height:n?n.clientHeight:window.innerHeight})}var o,e=f.debounce(t,200);return n?(o=new ResizeObserver(e)).observe(n):window.addEventListener("resize",e),t(),function(){var n;window.removeEventListener("resize",e),null==(n=o)||n.disconnect()}},[]),t}(),e=y(),l=e.scroll,s=e.onScroll,d=b(function(n){return n.scaleMultiplier}),v=b(function(n){return n.pageReflow}),g=u(function(){var n={rootMargin:"50%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map(function(t,o){void 0!==r[t]&&(n[t]=r[t])}),n},[t]),m=g.autoUpdate,C=g.wrapper,R=h({rootMargin:g.rootMargin,threshold:g.threshold}),E=R.ref,T=R.inView;S(function(){E(n.current)},[n]);var O=a(),j=O[0],V=O[1],z=i({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,I=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,U=a(I),M=U[0],P=U[1],D=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,B=i(p.vec3(0,0,0)).current;S(function(){var t,r=null==(t=n.current)?void 0:t.getBoundingClientRect(),o=C?C.scrollTop:window.scrollY,e=C?C.scrollLeft:window.scrollX;I.top=r.top+o,I.bottom=r.bottom+o,I.left=r.left+e,I.right=r.right+e,I.width=r.width,I.height=r.height,I.x=I.left+.5*r.width,I.y=I.top+.5*r.height,P(w({},I)),V(p.vec3((null==I?void 0:I.width)*d,(null==I?void 0:I.height)*d,1))},[n,r,v,d]);var H=c(function(t){var o=void 0===t?{}:t,e=o.onlyUpdateInViewport,i=o.scroll,c=void 0===i?l:i;if(n.current&&(void 0!==e&&!e||z.inViewport)){!function(n,t,r,o){n.top=t.top-r.y,n.bottom=t.bottom-r.y,n.left=t.left-r.x,n.right=t.right-r.x,n.width=t.width,n.height=t.height,n.x=n.left+.5*t.width-.5*o.width,n.y=n.top+.5*t.height-.5*o.height,n.positiveYUpBottom=o.height-n.bottom}(D,I,c,r),function(n,t,r){n.x=t.x*r,n.y=-1*t.y*r}(B,D,d);var u="horizontal"===c.scrollDirection,a=u?"width":"height",s=r[a]-D[u?"left":"top"];z.progress=L(s,0,r[a]+D[a],0,1),z.visibility=L(s,0,D[a],0,1),z.viewport=L(s,0,r[a],0,1)}},[n,r,d,l]);return S(function(){z.inViewport=T,H({onlyUpdateInViewport:!1})},[T]),S(function(){H({onlyUpdateInViewport:!1})},[H]),o(function(){if(m)return s(function(n){return H()})},[m,H,s]),{rect:M,bounds:D,scale:j,position:B,scrollState:z,inViewport:T,update:function(n){return H(w({onlyUpdateInViewport:!1},n))}}}export{T as SmoothScrollbar,y as useScrollbar,O as useTracker};
//# sourceMappingURL=scrollbar.module.js.map
