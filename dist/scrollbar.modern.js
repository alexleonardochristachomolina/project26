import t from"zustand";import e,{useLayoutEffect as r,useEffect as o,forwardRef as n,useRef as i,useImperativeHandle as l,useCallback as c,useMemo as s,useState as a}from"react";import{addEffect as u,invalidate as d}from"@react-three/fiber";import h from"debounce";import v from"@studio-freight/lenis";import{useInView as p}from"react-intersection-observer";import w from"vecn";function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},f.apply(this,arguments)}function g(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)e.indexOf(r=i[o])>=0||(n[r]=t[r]);return n}function m(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}const b=t(t=>({debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:()=>t(()=>({globalRenderQueue:!1})),isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:(e,r,o={})=>t(({canvasChildren:t})=>Object.getOwnPropertyDescriptor(t,e)?(t[e].instances+=1,t[e].props.inactive=!1,{canvasChildren:t}):{canvasChildren:f({},t,{[e]:{mesh:r,props:o,instances:1}})}),updateCanvas:(e,r)=>t(({canvasChildren:t})=>{if(!t[e])return;const{[e]:{mesh:o,props:n,instances:i}}=t;return{canvasChildren:f({},t,{[e]:{mesh:o,props:f({},n,r),instances:i}})}}),removeFromCanvas:(e,r=!0)=>t(({canvasChildren:t})=>{var o;return(null==(o=t[e])?void 0:o.instances)>1?(t[e].instances-=1,{canvasChildren:t}):r?{canvasChildren:g(t,[e].map(m))}:(t[e].instances=0,t[e].props.inactive=!0,{canvasChildren:f({},t)})}),pageReflow:0,requestReflow:()=>{t(t=>({pageReflow:t.pageReflow+1}))},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:""},scrollTo:t=>window.scrollTo(0,t),onScroll:()=>()=>{}})),y=()=>({enabled:b(t=>t.hasSmoothScrollbar),scroll:b(t=>t.scroll),scrollTo:b(t=>t.scrollTo),onScroll:b(t=>t.onScroll)}),S="undefined"!=typeof window?r:o,C=["children","duration","easing","smooth","direction","config"],R=t=>1===t?1:1-Math.pow(2,-10*t);var E=n(function(t,e){let{children:r,duration:n=1,easing:c=R,smooth:s=!0,direction:a="vertical",config:u}=t,d=g(t,C);const h=i();return l(e,()=>({start:()=>{var t;return null==(t=h.current)?void 0:t.start()},stop:()=>{var t;return null==(t=h.current)?void 0:t.stop()},on:(t,e)=>{var r;return null==(r=h.current)?void 0:r.on(t,e)},once:(t,e)=>{var r;return null==(r=h.current)?void 0:r.once(t,e)},off:(t,e)=>{var r;return null==(r=h.current)?void 0:r.off(t,e)},notify:()=>{var t;return null==(t=h.current)?void 0:t.notify()},scrollTo:(t,e)=>{var r;return null==(r=h.current)?void 0:r.scrollTo(t,e)},raf:t=>{var e;return null==(e=h.current)?void 0:e.raf(t)}})),o(function(){const t=h.current=new v(f({duration:n,easing:c,smooth:s,direction:a},u));return()=>{t.destroy()}},[n,c,s,a]),r&&r(d)});const x=({children:t,enabled:r=!0,locked:n=!1,scrollRestoration:l="auto",disablePointerOnScroll:a=!0,horizontal:v=!1,scrollInContainer:p=!1,config:w})=>{const g=i(),m=i(),y=i(!1),C=b(t=>t.scroll);C.direction=v?"horizontal":"vertical";const R=t=>{a&&g.current&&y.current!==t&&(y.current=t,g.current.style.pointerEvents=t?"none":"auto")},x=c(()=>{R(!1)},[]),L=c(t=>{var e;return null==(e=m.current)||e.on("scroll",t),()=>{var e;return null==(e=m.current)?void 0:e.off("scroll",t)}},[]);S(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration=l)},[]),o(()=>{var t,e,o;const n=u(t=>{var e;return null==(e=m.current)?void 0:e.raf(t)});null==(t=m.current)||t.on("scroll",({scroll:t,limit:e,velocity:r,direction:o,progress:n})=>{C.y="vertical"===o?t:0,C.x="horizontal"===o?t:0,C.limit=e,C.velocity=r,C.direction=o,C.progress=n;const i=h.debounce(()=>R(!0),100,!0);Math.abs(r)>1.4?i():R(!1),d()}),null==(e=m.current)||e.notify(),b.setState({scrollTo:null==(o=m.current)?void 0:o.scrollTo}),b.setState({onScroll:L}),b.getState().scroll.y=window.scrollY,b.getState().scroll.x=window.scrollX,document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",r),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!r),b.setState({hasSmoothScrollbar:r});const i=()=>d();return window.addEventListener("pointermove",x),window.addEventListener("wheel",i),()=>{n(),window.removeEventListener("pointermove",x),window.removeEventListener("wheel",i)}},[r]),o(()=>{var t,e;n?null==(t=m.current)||t.stop():null==(e=m.current)||e.start()},[n]);const{wrapper:T,content:O}=s(()=>{if("undefined"==typeof document)return{};const t=document.documentElement,e=document.body,r=document.body.firstElementChild;return t.classList.toggle("ScrollRig-scrollHtml",p),e.classList.toggle("ScrollRig-scrollWrapper",p),{wrapper:e,content:r}},[p]);return e.createElement(E,{ref:m,smooth:r,direction:v?"horizontal":"vertical",config:f(p?{smoothTouch:!0,wrapper:T,content:O}:{},w)},e=>t(f({},e,{ref:g})))},L="undefined"!=typeof window;function T(t,e,r,o,n){return o+(t-e)*(n-o)/(r-e)}const O={rootMargin:"50%",threshold:0,autoUpdate:!0};function j(t,e){const r=function(){const[t,e]=a({width:L?window.innerWidth:Infinity,height:L?window.innerHeight:Infinity});return o(()=>{const t=document.getElementById("ScrollRig-canvas");function r(){e({width:t?t.clientWidth:window.innerWidth,height:t?t.clientHeight:window.innerHeight})}const o=h.debounce(r,200);let n;return t?(n=new ResizeObserver(o),n.observe(t)):window.addEventListener("resize",o),r(),()=>{var t;window.removeEventListener("resize",o),null==(t=n)||t.disconnect()}},[]),t}(),{scroll:n,onScroll:l}=y(),s=b(t=>t.scaleMultiplier),u=b(t=>t.pageReflow),{rootMargin:d,threshold:v,autoUpdate:g}=f({},O,e),{ref:m,inView:C}=p({rootMargin:d,threshold:v});S(()=>{m(t.current)},[t]);const[R,E]=a(),x=i({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,j=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,[z,V]=a(j),I=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,U=i(w.vec3(0,0,0)).current;S(()=>{var e;const r=null==(e=t.current)?void 0:e.getBoundingClientRect();j.top=r.top+window.scrollY,j.bottom=r.bottom+window.scrollY,j.left=r.left+window.scrollX,j.right=r.right+window.scrollX,j.width=r.width,j.height=r.height,j.x=j.left+.5*r.width,j.y=j.top+.5*r.height,V(f({},j)),E(w.vec3((null==j?void 0:j.width)*s,(null==j?void 0:j.height)*s,1))},[t,r,u,s]);const M=c(({onlyUpdateInViewport:e=!0}={})=>{if(!t.current||e&&!x.inViewport)return;!function(t,e,r,o){t.top=e.top-r.y,t.bottom=e.bottom-r.y,t.left=e.left-r.x,t.right=e.right-r.x,t.width=e.width,t.height=e.height,t.x=t.left+.5*e.width-.5*o.width,t.y=t.top+.5*e.height-.5*o.height,t.positiveYUpBottom=o.height-t.bottom}(I,j,n,r),function(t,e,r){t.x=e.x*r,t.y=-1*e.y*r}(U,I,s);const o="horizontal"===n.direction,i=o?"width":"height",l=r[i]-I[o?"left":"top"];x.progress=T(l,0,r[i]+I[i],0,1),x.visibility=T(l,0,I[i],0,1),x.viewport=T(l,0,r[i],0,1)},[t,r,s,n]);return S(()=>{x.inViewport=C,M({onlyUpdateInViewport:!1})},[C]),S(()=>{M({onlyUpdateInViewport:!1})},[M]),o(()=>{if(g)return l(t=>M())},[g,M,l]),{rect:z,bounds:I,scale:R,position:U,scrollState:x,inViewport:C,update:()=>M({onlyUpdateInViewport:!1})}}export{x as SmoothScrollbar,y as useScrollbar,j as useTracker};
//# sourceMappingURL=scrollbar.modern.js.map
