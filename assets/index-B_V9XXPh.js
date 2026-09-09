function dd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bs={exports:{}},kl={},zs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),pd=Symbol.for("react.portal"),hd=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),xd=Symbol.for("react.memo"),wd=Symbol.for("react.lazy"),di=Symbol.iterator;function Sd(e){return e===null||typeof e!="object"?null:(e=di&&e[di]||e["@@iterator"],typeof e=="function"?e:null)}var Ts={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ls=Object.assign,Bs={};function vn(e,t,n){this.props=e,this.context=t,this.refs=Bs,this.updater=n||Ts}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rs(){}Rs.prototype=vn.prototype;function pa(e,t,n){this.props=e,this.context=t,this.refs=Bs,this.updater=n||Ts}var ha=pa.prototype=new Rs;ha.constructor=pa;Ls(ha,vn.prototype);ha.isPureReactComponent=!0;var fi=Array.isArray,Ms=Object.prototype.hasOwnProperty,ma={current:null},Os={key:!0,ref:!0,__self:!0,__source:!0};function Ds(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ms.call(t,r)&&!Os.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:ur,type:e,key:o,ref:a,props:l,_owner:ma.current}}function jd(e,t){return{$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Cd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pi=/\/+/g;function Ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cd(""+e.key):t.toString(36)}function Rr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ur:case pd:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Ul(a,0):r,fi(l)?(n="",e!=null&&(n=e.replace(pi,"$&/")+"/"),Rr(l,t,n,"",function(c){return c})):l!=null&&(ga(l)&&(l=jd(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(pi,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",fi(e))for(var i=0;i<e.length;i++){o=e[i];var s=r+Ul(o,i);a+=Rr(o,t,n,s,l)}else if(s=Sd(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=r+Ul(o,i++),a+=Rr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function vr(e,t,n){if(e==null)return e;var r=[],l=0;return Rr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Ed(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Mr={transition:null},Nd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ma};function Fs(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=vn;L.Fragment=hd;L.Profiler=gd;L.PureComponent=pa;L.StrictMode=md;L.Suspense=kd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd;L.act=Fs;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ls({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ma.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)Ms.call(t,s)&&!Os.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var c=0;c<s;c++)i[c]=arguments[c+2];r.children=i}return{$$typeof:ur,type:e.type,key:l,ref:o,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vd,_context:e},e.Consumer=e};L.createElement=Ds;L.createFactory=function(e){var t=Ds.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:_d,render:e}};L.isValidElement=ga;L.lazy=function(e){return{$$typeof:wd,_payload:{_status:-1,_result:e},_init:Ed}};L.memo=function(e,t){return{$$typeof:xd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};L.unstable_act=Fs;L.useCallback=function(e,t){return ce.current.useCallback(e,t)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return ce.current.useEffect(e,t)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";zs.exports=L;var w=zs.exports;const As=fd(w),Pd=dd({__proto__:null,default:As},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=w,bd=Symbol.for("react.element"),zd=Symbol.for("react.fragment"),Td=Object.prototype.hasOwnProperty,Ld=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function Ws(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Td.call(t,r)&&!Bd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:bd,type:e,key:o,ref:a,props:l,_owner:Ld.current}}kl.Fragment=zd;kl.jsx=Ws;kl.jsxs=Ws;bs.exports=kl;var u=bs.exports,go={},Us={exports:{}},we={},$s={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,b){var T=E.length;E.push(b);e:for(;0<T;){var K=T-1>>>1,X=E[K];if(0<l(X,b))E[K]=b,E[T]=X,T=K;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var b=E[0],T=E.pop();if(T!==b){E[0]=T;e:for(var K=0,X=E.length,mr=X>>>1;K<mr;){var jt=2*(K+1)-1,Wl=E[jt],Ct=jt+1,gr=E[Ct];if(0>l(Wl,T))Ct<X&&0>l(gr,Wl)?(E[K]=gr,E[Ct]=T,K=Ct):(E[K]=Wl,E[jt]=T,K=jt);else if(Ct<X&&0>l(gr,T))E[K]=gr,E[Ct]=T,K=Ct;else break e}}return b}function l(E,b){var T=E.sortIndex-b.sortIndex;return T!==0?T:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var s=[],c=[],m=1,h=null,g=3,_=!1,y=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var b=n(c);b!==null;){if(b.callback===null)r(c);else if(b.startTime<=E)r(c),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(c)}}function v(E){if(k=!1,p(E),!y)if(n(s)!==null)y=!0,Fl(S);else{var b=n(c);b!==null&&Al(v,b.startTime-E)}}function S(E,b){y=!1,k&&(k=!1,f(I),I=-1),_=!0;var T=g;try{for(p(b),h=n(s);h!==null&&(!(h.expirationTime>b)||E&&!ve());){var K=h.callback;if(typeof K=="function"){h.callback=null,g=h.priorityLevel;var X=K(h.expirationTime<=b);b=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(s)&&r(s),p(b)}else r(s);h=n(s)}if(h!==null)var mr=!0;else{var jt=n(c);jt!==null&&Al(v,jt.startTime-b),mr=!1}return mr}finally{h=null,g=T,_=!1}}var N=!1,P=null,I=-1,A=5,z=-1;function ve(){return!(e.unstable_now()-z<A)}function xn(){if(P!==null){var E=e.unstable_now();z=E;var b=!0;try{b=P(!0,E)}finally{b?wn():(N=!1,P=null)}}else N=!1}var wn;if(typeof d=="function")wn=function(){d(xn)};else if(typeof MessageChannel<"u"){var ci=new MessageChannel,cd=ci.port2;ci.port1.onmessage=xn,wn=function(){cd.postMessage(null)}}else wn=function(){j(xn,0)};function Fl(E){P=E,N||(N=!0,wn())}function Al(E,b){I=j(function(){E(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||_||(y=!0,Fl(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var T=g;g=b;try{return E()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=g;g=E;try{return b()}finally{g=T}},e.unstable_scheduleCallback=function(E,b,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=T+X,E={id:m++,callback:b,priorityLevel:E,startTime:T,expirationTime:X,sortIndex:-1},T>K?(E.sortIndex=T,t(c,E),n(s)===null&&E===n(c)&&(k?(f(I),I=-1):k=!0,Al(v,T-K))):(E.sortIndex=X,t(s,E),y||_||(y=!0,Fl(S))),E},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(E){var b=g;return function(){var T=g;g=b;try{return E.apply(this,arguments)}finally{g=T}}}})(Vs);$s.exports=Vs;var Rd=$s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md=w,xe=Rd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hs=new Set,Vn={};function At(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Hs.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vo=Object.prototype.hasOwnProperty,Od=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hi={},mi={};function Dd(e){return vo.call(mi,e)?!0:vo.call(hi,e)?!1:Od.test(e)?mi[e]=!0:(hi[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(va,ya);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(va,ya);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(va,ya);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ad(t,n,l,r)&&(n=null),r||l===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),ka=Symbol.for("react.strict_mode"),yo=Symbol.for("react.profiler"),Ks=Symbol.for("react.provider"),Gs=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),_o=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),wa=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Qs=Symbol.for("react.offscreen"),gi=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=gi&&e[gi]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,$l;function zn(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Vl=!1;function Hl(e,t){if(!e||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,i=o.length-1;1<=a&&0<=i&&l[a]!==o[i];)i--;for(;1<=a&&0<=i;a--,i--)if(l[a]!==o[i]){if(a!==1||i!==1)do if(a--,i--,0>i||l[a]!==o[i]){var s=`
`+l[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=i);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function Wd(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Vt:return"Portal";case yo:return"Profiler";case ka:return"StrictMode";case _o:return"Suspense";case ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gs:return(e.displayName||"Context")+".Consumer";case Ks:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wa:return t=e.displayName||null,t!==null?t:xo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return xo(e(t))}catch{}}return null}function Ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xo(t);case 8:return t===ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $d(e){var t=Zs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=$d(e))}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ys(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function So(e,t){Ys(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&jo(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jo(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Co(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _i(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Tn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Xs(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ki(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Hd=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(e,t){if(t){if(Hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Po(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Io=null;function Sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bo=null,rn=null,ln=null;function xi(e){if(e=fr(e)){if(typeof bo!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Cl(t),bo(e.stateNode,e.type,t))}}function ru(e){rn?ln?ln.push(e):ln=[e]:rn=e}function lu(){if(rn){var e=rn,t=ln;if(ln=rn=null,xi(e),t)for(e=0;e<t.length;e++)xi(t[e])}}function ou(e,t){return e(t)}function au(){}var Kl=!1;function iu(e,t,n){if(Kl)return e(t,n);Kl=!0;try{return ou(e,t,n)}finally{Kl=!1,(rn!==null||ln!==null)&&(au(),lu())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var zo=!1;if(Qe)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){zo=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{zo=!1}function Kd(e,t,n,r,l,o,a,i,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Mn=!1,Zr=null,Jr=!1,To=null,Gd={onError:function(e){Mn=!0,Zr=e}};function Qd(e,t,n,r,l,o,a,i,s){Mn=!1,Zr=null,Kd.apply(Gd,arguments)}function Zd(e,t,n,r,l,o,a,i,s){if(Qd.apply(this,arguments),Mn){if(Mn){var c=Zr;Mn=!1,Zr=null}else throw Error(x(198));Jr||(Jr=!0,To=c)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wi(e){if(Wt(e)!==e)throw Error(x(188))}function Jd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return wi(l),e;if(o===r)return wi(l),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,i=l.child;i;){if(i===n){a=!0,n=l,r=o;break}if(i===r){a=!0,r=l,n=o;break}i=i.sibling}if(!a){for(i=o.child;i;){if(i===n){a=!0,n=o,r=l;break}if(i===r){a=!0,r=o,n=l;break}i=i.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function uu(e){return e=Jd(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cu(e);if(t!==null)return t;e=e.sibling}return null}var du=xe.unstable_scheduleCallback,Si=xe.unstable_cancelCallback,Yd=xe.unstable_shouldYield,Xd=xe.unstable_requestPaint,G=xe.unstable_now,qd=xe.unstable_getCurrentPriorityLevel,ja=xe.unstable_ImmediatePriority,fu=xe.unstable_UserBlockingPriority,Yr=xe.unstable_NormalPriority,ef=xe.unstable_LowPriority,pu=xe.unstable_IdlePriority,xl=null,We=null;function tf(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:lf,nf=Math.log,rf=Math.LN2;function lf(e){return e>>>=0,e===0?32:31-(nf(e)/rf|0)|0}var xr=64,wr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var i=a&~l;i!==0?r=Ln(i):(o&=a,o!==0&&(r=Ln(o)))}else a=n&~l,a!==0?r=Ln(a):o!==0&&(r=Ln(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),l=1<<n,r|=e[n],t&=~l;return r}function of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Be(o),i=1<<a,s=l[a];s===-1?(!(i&n)||i&r)&&(l[a]=of(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}function Lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Be(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Ca(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gu,Ea,vu,yu,_u,Bo=!1,Sr=[],st=null,ut=null,ct=null,Gn=new Map,Qn=new Map,rt=[],uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ji(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Cn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&Ea(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function cf(e,t,n,r,l){switch(t){case"focusin":return st=Cn(st,e,t,n,r,l),!0;case"dragenter":return ut=Cn(ut,e,t,n,r,l),!0;case"mouseover":return ct=Cn(ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Gn.set(o,Cn(Gn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Qn.set(o,Cn(Qn.get(o)||null,e,t,n,r,l)),!0}return!1}function ku(e){var t=It(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=su(n),t!==null){e.blockedOn=t,_u(e.priority,function(){vu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ro(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Io=r,n.target.dispatchEvent(r),Io=null}else return t=fr(n),t!==null&&Ea(t),e.blockedOn=n,!1;t.shift()}return!0}function Ci(e,t,n){Or(e)&&n.delete(t)}function df(){Bo=!1,st!==null&&Or(st)&&(st=null),ut!==null&&Or(ut)&&(ut=null),ct!==null&&Or(ct)&&(ct=null),Gn.forEach(Ci),Qn.forEach(Ci)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,df)))}function Zn(e){function t(l){return En(l,e)}if(0<Sr.length){En(Sr[0],e);for(var n=1;n<Sr.length;n++){var r=Sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&En(st,e),ut!==null&&En(ut,e),ct!==null&&En(ct,e),Gn.forEach(t),Qn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)ku(n),n.blockedOn===null&&rt.shift()}var on=Xe.ReactCurrentBatchConfig,qr=!0;function ff(e,t,n,r){var l=R,o=on.transition;on.transition=null;try{R=1,Na(e,t,n,r)}finally{R=l,on.transition=o}}function pf(e,t,n,r){var l=R,o=on.transition;on.transition=null;try{R=4,Na(e,t,n,r)}finally{R=l,on.transition=o}}function Na(e,t,n,r){if(qr){var l=Ro(e,t,n,r);if(l===null)ro(e,t,r,el,n),ji(e,r);else if(cf(l,e,t,n,r))r.stopPropagation();else if(ji(e,r),t&4&&-1<uf.indexOf(e)){for(;l!==null;){var o=fr(l);if(o!==null&&gu(o),o=Ro(e,t,n,r),o===null&&ro(e,t,r,el,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else ro(e,t,r,null,n)}}var el=null;function Ro(e,t,n,r){if(el=null,e=Sa(r),e=It(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return el=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qd()){case ja:return 1;case fu:return 4;case Yr:case ef:return 16;case pu:return 536870912;default:return 16}default:return 16}}var ot=null,Pa=null,Dr=null;function wu(){if(Dr)return Dr;var e,t=Pa,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function Ei(){return!1}function Se(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jr:Ei,this.isPropagationStopped=Ei,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Se(yn),dr=$({},yn,{view:0,detail:0}),hf=Se(dr),Ql,Zl,Nn,wl=$({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Ql=e.screenX-Nn.screenX,Zl=e.screenY-Nn.screenY):Zl=Ql=0,Nn=e),Ql)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Ni=Se(wl),mf=$({},wl,{dataTransfer:0}),gf=Se(mf),vf=$({},dr,{relatedTarget:0}),Jl=Se(vf),yf=$({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=Se(yf),kf=$({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xf=Se(kf),wf=$({},yn,{data:0}),Pi=Se(wf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function ba(){return Ef}var Nf=$({},dr,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pf=Se(Nf),If=$({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ii=Se(If),bf=$({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),zf=Se(bf),Tf=$({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lf=Se(Tf),Bf=$({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rf=Se(Bf),Mf=[9,13,27,32],za=Qe&&"CompositionEvent"in window,On=null;Qe&&"documentMode"in document&&(On=document.documentMode);var Of=Qe&&"TextEvent"in window&&!On,Su=Qe&&(!za||On&&8<On&&11>=On),bi=" ",zi=!1;function ju(e,t){switch(e){case"keyup":return Mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Df(e,t){switch(e){case"compositionend":return Cu(t);case"keypress":return t.which!==32?null:(zi=!0,bi);case"textInput":return e=t.data,e===bi&&zi?null:e;default:return null}}function Ff(e,t){if(Kt)return e==="compositionend"||!za&&ju(e,t)?(e=wu(),Dr=Pa=ot=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Eu(e,t,n,r){ru(r),t=tl(t,"onChange"),0<t.length&&(n=new Ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Jn=null;function Wf(e){Ou(e,0)}function Sl(e){var t=Zt(e);if(Js(t))return e}function Uf(e,t){if(e==="change")return t}var Nu=!1;if(Qe){var Yl;if(Qe){var Xl="oninput"in document;if(!Xl){var Li=document.createElement("div");Li.setAttribute("oninput","return;"),Xl=typeof Li.oninput=="function"}Yl=Xl}else Yl=!1;Nu=Yl&&(!document.documentMode||9<document.documentMode)}function Bi(){Dn&&(Dn.detachEvent("onpropertychange",Pu),Jn=Dn=null)}function Pu(e){if(e.propertyName==="value"&&Sl(Jn)){var t=[];Eu(t,Jn,e,Sa(e)),iu(Wf,t)}}function $f(e,t,n){e==="focusin"?(Bi(),Dn=t,Jn=n,Dn.attachEvent("onpropertychange",Pu)):e==="focusout"&&Bi()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(Jn)}function Hf(e,t){if(e==="click")return Sl(t)}function Kf(e,t){if(e==="input"||e==="change")return Sl(t)}function Gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Gf;function Yn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!vo.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function Ri(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mi(e,t){var n=Ri(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ri(n)}}function Iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qf(e){var t=bu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Iu(n.ownerDocument.documentElement,n)){if(r!==null&&Ta(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Mi(n,o);var a=Mi(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zf=Qe&&"documentMode"in document&&11>=document.documentMode,Gt=null,Mo=null,Fn=null,Oo=!1;function Oi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oo||Gt==null||Gt!==Qr(r)||(r=Gt,"selectionStart"in r&&Ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&Yn(Fn,r)||(Fn=r,r=tl(Mo,"onSelect"),0<r.length&&(t=new Ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},ql={},zu={};Qe&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function jl(e){if(ql[e])return ql[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zu)return ql[e]=t[n];return e}var Tu=jl("animationend"),Lu=jl("animationiteration"),Bu=jl("animationstart"),Ru=jl("transitionend"),Mu=new Map,Di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Mu.set(e,t),At(t,[e])}for(var eo=0;eo<Di.length;eo++){var to=Di[eo],Jf=to.toLowerCase(),Yf=to[0].toUpperCase()+to.slice(1);_t(Jf,"on"+Yf)}_t(Tu,"onAnimationEnd");_t(Lu,"onAnimationIteration");_t(Bu,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Ru,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Fi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zd(r,t,void 0,e),e.currentTarget=null}function Ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var i=r[a],s=i.instance,c=i.currentTarget;if(i=i.listener,s!==o&&l.isPropagationStopped())break e;Fi(l,i,c),o=s}else for(a=0;a<r.length;a++){if(i=r[a],s=i.instance,c=i.currentTarget,i=i.listener,s!==o&&l.isPropagationStopped())break e;Fi(l,i,c),o=s}}}if(Jr)throw e=To,Jr=!1,To=null,e}function O(e,t){var n=t[Uo];n===void 0&&(n=t[Uo]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function no(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Er]){e[Er]=!0,Hs.forEach(function(n){n!=="selectionchange"&&(Xf.has(n)||no(n,!1,e),no(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,no("selectionchange",!1,t))}}function Du(e,t,n,r){switch(xu(t)){case 1:var l=ff;break;case 4:l=pf;break;default:l=Na}n=l.bind(null,t,n,e),l=void 0,!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ro(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;a=a.return}for(;i!==null;){if(a=It(i),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}i=i.parentNode}}r=r.return}iu(function(){var c=o,m=Sa(n),h=[];e:{var g=Mu.get(e);if(g!==void 0){var _=Ia,y=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":_=Pf;break;case"focusin":y="focus",_=Jl;break;case"focusout":y="blur",_=Jl;break;case"beforeblur":case"afterblur":_=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=zf;break;case Tu:case Lu:case Bu:_=_f;break;case Ru:_=Lf;break;case"scroll":_=hf;break;case"wheel":_=Rf;break;case"copy":case"cut":case"paste":_=xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ii}var k=(t&4)!==0,j=!k&&e==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Kn(d,f),v!=null&&k.push(qn(d,v,p)))),j)break;d=d.return}0<k.length&&(g=new _(g,y,null,n,m),h.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",g&&n!==Io&&(y=n.relatedTarget||n.fromElement)&&(It(y)||y[Ze]))break e;if((_||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=c,y=y?It(y):null,y!==null&&(j=Wt(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=c),_!==y)){if(k=Ni,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ii,v="onPointerLeave",f="onPointerEnter",d="pointer"),j=_==null?g:Zt(_),p=y==null?g:Zt(y),g=new k(v,d+"leave",_,n,m),g.target=j,g.relatedTarget=p,v=null,It(m)===c&&(k=new k(f,d+"enter",y,n,m),k.target=p,k.relatedTarget=j,v=k),j=v,_&&y)t:{for(k=_,f=y,d=0,p=k;p;p=$t(p))d++;for(p=0,v=f;v;v=$t(v))p++;for(;0<d-p;)k=$t(k),d--;for(;0<p-d;)f=$t(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=$t(k),f=$t(f)}k=null}else k=null;_!==null&&Ai(h,g,_,k,!1),y!==null&&j!==null&&Ai(h,j,y,k,!0)}}e:{if(g=c?Zt(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var S=Uf;else if(Ti(g))if(Nu)S=Kf;else{S=Vf;var N=$f}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Hf);if(S&&(S=S(e,c))){Eu(h,S,n,m);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&jo(g,"number",g.value)}switch(N=c?Zt(c):window,e){case"focusin":(Ti(N)||N.contentEditable==="true")&&(Gt=N,Mo=c,Fn=null);break;case"focusout":Fn=Mo=Gt=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Oi(h,n,m);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":Oi(h,n,m)}var P;if(za)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Kt?ju(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Su&&n.locale!=="ko"&&(Kt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Kt&&(P=wu()):(ot=m,Pa="value"in ot?ot.value:ot.textContent,Kt=!0)),N=tl(c,I),0<N.length&&(I=new Pi(I,e,null,n,m),h.push({event:I,listeners:N}),P?I.data=P:(P=Cu(n),P!==null&&(I.data=P)))),(P=Of?Df(e,n):Ff(e,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(m=new Pi("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=P))}Ou(h,t)})}function qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Kn(e,n),o!=null&&r.unshift(qn(e,o,l)),o=Kn(e,t),o!=null&&r.push(qn(e,o,l))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ai(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var i=n,s=i.alternate,c=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&c!==null&&(i=c,l?(s=Kn(n,o),s!=null&&a.unshift(qn(n,s,i))):l||(s=Kn(n,o),s!=null&&a.push(qn(n,s,i)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var qf=/\r\n?/g,ep=/\u0000|\uFFFD/g;function Wi(e){return(typeof e=="string"?e:""+e).replace(qf,`
`).replace(ep,"")}function Nr(e,t,n){if(t=Wi(t),Wi(e)!==t&&n)throw Error(x(425))}function nl(){}var Do=null,Fo=null;function Ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wo=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,Ui=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof Ui<"u"?function(e){return Ui.resolve(null).then(e).catch(rp)}:Wo;function rp(e){setTimeout(function(){throw e})}function lo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Zn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $i(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),Ae="__reactFiber$"+_n,er="__reactProps$"+_n,Ze="__reactContainer$"+_n,Uo="__reactEvents$"+_n,lp="__reactListeners$"+_n,op="__reactHandles$"+_n;function It(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$i(e);e!==null;){if(n=e[Ae])return n;e=$i(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Ae]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Cl(e){return e[er]||null}var $o=[],Jt=-1;function kt(e){return{current:e}}function D(e){0>Jt||(e.current=$o[Jt],$o[Jt]=null,Jt--)}function M(e,t){Jt++,$o[Jt]=e.current,e.current=t}var yt={},ie=kt(yt),he=kt(!1),Rt=yt;function cn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function rl(){D(he),D(ie)}function Vi(e,t,n){if(ie.current!==yt)throw Error(x(168));M(ie,t),M(he,n)}function Fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Ud(e)||"Unknown",l));return $({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Rt=ie.current,M(ie,e),M(he,he.current),!0}function Hi(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Fu(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,D(he),D(ie),M(ie,e)):D(he),M(he,n)}var Ve=null,El=!1,oo=!1;function Au(e){Ve===null?Ve=[e]:Ve.push(e)}function ap(e){El=!0,Au(e)}function xt(){if(!oo&&Ve!==null){oo=!0;var e=0,t=R;try{var n=Ve;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,El=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),du(ja,xt),l}finally{R=t,oo=!1}}return null}var Yt=[],Xt=0,ol=null,al=0,je=[],Ce=0,Mt=null,He=1,Ke="";function Et(e,t){Yt[Xt++]=al,Yt[Xt++]=ol,ol=e,al=t}function Wu(e,t,n){je[Ce++]=He,je[Ce++]=Ke,je[Ce++]=Mt,Mt=e;var r=He;e=Ke;var l=32-Be(r)-1;r&=~(1<<l),n+=1;var o=32-Be(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,He=1<<32-Be(t)+l|n<<l|r,Ke=o+e}else He=1<<o|n<<l|r,Ke=e}function La(e){e.return!==null&&(Et(e,1),Wu(e,1,0))}function Ba(e){for(;e===ol;)ol=Yt[--Xt],Yt[Xt]=null,al=Yt[--Xt],Yt[Xt]=null;for(;e===Mt;)Mt=je[--Ce],je[Ce]=null,Ke=je[--Ce],je[Ce]=null,He=je[--Ce],je[Ce]=null}var ke=null,_e=null,F=!1,Le=null;function Uu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ki(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,_e=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:He,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,_e=null,!0):!1;default:return!1}}function Vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ho(e){if(F){var t=_e;if(t){var n=t;if(!Ki(e,t)){if(Vo(e))throw Error(x(418));t=dt(n.nextSibling);var r=ke;t&&Ki(e,t)?Uu(r,n):(e.flags=e.flags&-4097|2,F=!1,ke=e)}}else{if(Vo(e))throw Error(x(418));e.flags=e.flags&-4097|2,F=!1,ke=e}}}function Gi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Pr(e){if(e!==ke)return!1;if(!F)return Gi(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ao(e.type,e.memoizedProps)),t&&(t=_e)){if(Vo(e))throw $u(),Error(x(418));for(;t;)Uu(e,t),t=dt(t.nextSibling)}if(Gi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=ke?dt(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=_e;e;)e=dt(e.nextSibling)}function dn(){_e=ke=null,F=!1}function Ra(e){Le===null?Le=[e]:Le.push(e)}var ip=Xe.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var i=l.refs;a===null?delete i[o]:i[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qi(e){var t=e._init;return t(e._payload)}function Vu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,d,p,v){return d===null||d.tag!==6?(d=po(p,f.mode,v),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,v){var S=p.type;return S===Ht?m(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Qi(S)===d.type)?(v=l(d,p.props),v.ref=Pn(f,d,p),v.return=f,v):(v=Kr(p.type,p.key,p.props,null,f.mode,v),v.ref=Pn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ho(p,f.mode,v),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function m(f,d,p,v,S){return d===null||d.tag!==7?(d=Lt(p,f.mode,v,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=po(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return p=Kr(d.type,d.key,d.props,null,f.mode,p),p.ref=Pn(f,null,d),p.return=f,p;case Vt:return d=ho(d,f.mode,p),d.return=f,d;case tt:var v=d._init;return h(f,v(d._payload),p)}if(Tn(d)||Sn(d))return d=Lt(d,f.mode,p,null),d.return=f,d;Ir(f,d)}return null}function g(f,d,p,v){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:i(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:return p.key===S?s(f,d,p,v):null;case Vt:return p.key===S?c(f,d,p,v):null;case tt:return S=p._init,g(f,d,S(p._payload),v)}if(Tn(p)||Sn(p))return S!==null?null:m(f,d,p,v,null);Ir(f,p)}return null}function _(f,d,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,i(d,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yr:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,S);case Vt:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,S);case tt:var N=v._init;return _(f,d,p,N(v._payload),S)}if(Tn(v)||Sn(v))return f=f.get(p)||null,m(d,f,v,S,null);Ir(d,v)}return null}function y(f,d,p,v){for(var S=null,N=null,P=d,I=d=0,A=null;P!==null&&I<p.length;I++){P.index>I?(A=P,P=null):A=P.sibling;var z=g(f,P,p[I],v);if(z===null){P===null&&(P=A);break}e&&P&&z.alternate===null&&t(f,P),d=o(z,d,I),N===null?S=z:N.sibling=z,N=z,P=A}if(I===p.length)return n(f,P),F&&Et(f,I),S;if(P===null){for(;I<p.length;I++)P=h(f,p[I],v),P!==null&&(d=o(P,d,I),N===null?S=P:N.sibling=P,N=P);return F&&Et(f,I),S}for(P=r(f,P);I<p.length;I++)A=_(P,f,I,p[I],v),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?I:A.key),d=o(A,d,I),N===null?S=A:N.sibling=A,N=A);return e&&P.forEach(function(ve){return t(f,ve)}),F&&Et(f,I),S}function k(f,d,p,v){var S=Sn(p);if(typeof S!="function")throw Error(x(150));if(p=S.call(p),p==null)throw Error(x(151));for(var N=S=null,P=d,I=d=0,A=null,z=p.next();P!==null&&!z.done;I++,z=p.next()){P.index>I?(A=P,P=null):A=P.sibling;var ve=g(f,P,z.value,v);if(ve===null){P===null&&(P=A);break}e&&P&&ve.alternate===null&&t(f,P),d=o(ve,d,I),N===null?S=ve:N.sibling=ve,N=ve,P=A}if(z.done)return n(f,P),F&&Et(f,I),S;if(P===null){for(;!z.done;I++,z=p.next())z=h(f,z.value,v),z!==null&&(d=o(z,d,I),N===null?S=z:N.sibling=z,N=z);return F&&Et(f,I),S}for(P=r(f,P);!z.done;I++,z=p.next())z=_(P,f,I,z.value,v),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?I:z.key),d=o(z,d,I),N===null?S=z:N.sibling=z,N=z);return e&&P.forEach(function(xn){return t(f,xn)}),F&&Et(f,I),S}function j(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Ht&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yr:e:{for(var S=p.key,N=d;N!==null;){if(N.key===S){if(S=p.type,S===Ht){if(N.tag===7){n(f,N.sibling),d=l(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Qi(S)===N.type){n(f,N.sibling),d=l(N,p.props),d.ref=Pn(f,N,p),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Ht?(d=Lt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Kr(p.type,p.key,p.props,null,f.mode,v),v.ref=Pn(f,d,p),v.return=f,f=v)}return a(f);case Vt:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ho(p,f.mode,v),d.return=f,f=d}return a(f);case tt:return N=p._init,j(f,d,N(p._payload),v)}if(Tn(p))return y(f,d,p,v);if(Sn(p))return k(f,d,p,v);Ir(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=po(p,f.mode,v),d.return=f,f=d),a(f)):n(f,d)}return j}var fn=Vu(!0),Hu=Vu(!1),il=kt(null),sl=null,qt=null,Ma=null;function Oa(){Ma=qt=sl=null}function Da(e){var t=il.current;D(il),e._currentValue=t}function Ko(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){sl=e,Ma=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Ma!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(sl===null)throw Error(x(308));qt=e,sl.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var bt=null;function Fa(e){bt===null?bt=[e]:bt.push(e)}function Ku(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Fa(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,Fa(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ca(e,n)}}function Zi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ul(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var s=i,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==a&&(i===null?m.firstBaseUpdate=c:i.next=c,m.lastBaseUpdate=s))}if(o!==null){var h=l.baseState;a=0,m=c=s=null,i=o;do{var g=i.lane,_=i.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:_,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,k=i;switch(g=t,_=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){h=y.call(_,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,g=typeof y=="function"?y.call(_,h,g):y,g==null)break e;h=$({},h,g);break e;case 2:nt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[i]:g.push(i))}else _={eventTime:_,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(c=m=_,s=h):m=m.next=_,a|=g;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;g=i,i=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Dt|=a,e.lanes=a,e.memoizedState=h}}function Ji(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var pr={},Ue=kt(pr),tr=kt(pr),nr=kt(pr);function zt(e){if(e===pr)throw Error(x(174));return e}function Wa(e,t){switch(M(nr,t),M(tr,e),M(Ue,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Eo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Eo(t,e)}D(Ue),M(Ue,t)}function pn(){D(Ue),D(tr),D(nr)}function Qu(e){zt(nr.current);var t=zt(Ue.current),n=Eo(t,e.type);t!==n&&(M(tr,e),M(Ue,n))}function Ua(e){tr.current===e&&(D(Ue),D(tr))}var W=kt(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=[];function $a(){for(var e=0;e<ao.length;e++)ao[e]._workInProgressVersionPrimary=null;ao.length=0}var Wr=Xe.ReactCurrentDispatcher,io=Xe.ReactCurrentBatchConfig,Ot=0,U=null,J=null,q=null,dl=!1,An=!1,rr=0,sp=0;function le(){throw Error(x(321))}function Va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function Ha(e,t,n,r,l,o){if(Ot=o,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?fp:pp,e=n(r,l),An){o=0;do{if(An=!1,rr=0,25<=o)throw Error(x(301));o+=1,q=J=null,t.updateQueue=null,Wr.current=hp,e=n(r,l)}while(An)}if(Wr.current=fl,t=J!==null&&J.next!==null,Ot=0,q=J=U=null,dl=!1,t)throw Error(x(300));return e}function Ka(){var e=rr!==0;return rr=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?U.memoizedState=q=e:q=q.next=e,q}function Ie(){if(J===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=q===null?U.memoizedState:q.next;if(t!==null)q=t,J=e;else{if(e===null)throw Error(x(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},q===null?U.memoizedState=q=e:q=q.next=e}return q}function lr(e,t){return typeof t=="function"?t(e):t}function so(e){var t=Ie(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var i=a=null,s=null,c=o;do{var m=c.lane;if((Ot&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(i=s=h,a=r):s=s.next=h,U.lanes|=m,Dt|=m}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=i,Me(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,U.lanes|=o,Dt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uo(e){var t=Ie(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);Me(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Zu(){}function Ju(e,t){var n=U,r=Ie(),l=t(),o=!Me(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Ga(qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,or(9,Xu.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(x(349));Ot&30||Yu(n,t,l)}return l}function Yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xu(e,t,n,r){t.value=n,t.getSnapshot=r,ec(t)&&tc(e)}function qu(e,t,n){return n(function(){ec(t)&&tc(e)})}function ec(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function tc(e){var t=Je(e,1);t!==null&&Re(t,e,1,-1)}function Yi(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,U,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nc(){return Ie().memoizedState}function Ur(e,t,n,r){var l=Fe();U.flags|=e,l.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var o=void 0;if(J!==null){var a=J.memoizedState;if(o=a.destroy,r!==null&&Va(r,a.deps)){l.memoizedState=or(t,n,o,r);return}}U.flags|=e,l.memoizedState=or(1|t,n,o,r)}function Xi(e,t){return Ur(8390656,8,e,t)}function Ga(e,t){return Nl(2048,8,e,t)}function rc(e,t){return Nl(4,2,e,t)}function lc(e,t){return Nl(4,4,e,t)}function oc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,oc.bind(null,t,e),n)}function Qa(){}function ic(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Va(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Va(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uc(e,t,n){return Ot&21?(Me(n,t)||(n=hu(),U.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function up(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{R=n,io.transition=r}}function cc(){return Ie().memoizedState}function cp(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e))fc(t,n);else if(n=Ku(e,t,n,r),n!==null){var l=ue();Re(n,e,r,l),pc(n,t,r)}}function dp(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,i=o(a,n);if(l.hasEagerState=!0,l.eagerState=i,Me(i,a)){var s=t.interleaved;s===null?(l.next=l,Fa(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Ku(e,t,l,r),n!==null&&(l=ue(),Re(n,e,r,l),pc(n,t,r))}}function dc(e){var t=e.alternate;return e===U||t!==null&&t===U}function fc(e,t){An=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ca(e,n)}}var fl={readContext:Pe,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},fp={readContext:Pe,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Xi,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,oc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cp.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Yi,useDebugValue:Qa,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Yi(!1),t=e[0];return e=up.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=Fe();if(F){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ee===null)throw Error(x(349));Ot&30||Yu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Xi(qu.bind(null,r,o,e),[e]),r.flags|=2048,or(9,Xu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(F){var n=Ke,r=He;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:Pe,useCallback:ic,useContext:Pe,useEffect:Ga,useImperativeHandle:ac,useInsertionEffect:rc,useLayoutEffect:lc,useMemo:sc,useReducer:so,useRef:nc,useState:function(){return so(lr)},useDebugValue:Qa,useDeferredValue:function(e){var t=Ie();return uc(t,J.memoizedState,e)},useTransition:function(){var e=so(lr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:Ju,useId:cc,unstable_isNewReconciler:!1},hp={readContext:Pe,useCallback:ic,useContext:Pe,useEffect:Ga,useImperativeHandle:ac,useInsertionEffect:rc,useLayoutEffect:lc,useMemo:sc,useReducer:uo,useRef:nc,useState:function(){return uo(lr)},useDebugValue:Qa,useDeferredValue:function(e){var t=Ie();return J===null?t.memoizedState=e:uc(t,J.memoizedState,e)},useTransition:function(){var e=uo(lr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:Ju,useId:cc,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Go(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pl={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ht(e),o=Ge(r,l);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Re(t,e,l,r),Ar(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ht(e),o=Ge(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Re(t,e,l,r),Ar(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ht(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Re(t,e,r,n),Ar(t,e,r))}};function qi(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,o):!0}function hc(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(l=me(t)?Rt:ie.current,r=t.contextTypes,o=(r=r!=null)?cn(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pl.enqueueReplaceState(t,t.state,null)}function Qo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Aa(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Pe(o):(o=me(t)?Rt:ie.current,l.context=cn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Go(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Pl.enqueueReplaceState(l,l.state,null),ul(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=Wd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function mc(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hl||(hl=!0,oa=r),Zo(e,t)},n}function gc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zo(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ts(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ip.bind(null,e,t,n),t.then(e,e))}function ns(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var gp=Xe.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?Hu(t,null,n,r):fn(t,e.child,n,r)}function ls(e,t,n,r,l){n=n.render;var o=t.ref;return an(t,l),r=Ha(e,t,n,r,o,l),n=Ka(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(F&&n&&La(t),t.flags|=1,se(e,t,r,l),t.child)}function os(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ni(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vc(e,t,o,r,l)):(e=Kr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(a,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function vc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Jo(e,t,n,r,l)}function yc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(tn,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(tn,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(tn,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(tn,ye),ye|=r;return se(e,t,l,n),t.child}function _c(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jo(e,t,n,r,l){var o=me(n)?Rt:ie.current;return o=cn(t,o),an(t,l),n=Ha(e,t,n,r,o,l),r=Ka(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(F&&r&&La(t),t.flags|=1,se(e,t,n,l),t.child)}function as(e,t,n,r,l){if(me(n)){var o=!0;ll(t)}else o=!1;if(an(t,l),t.stateNode===null)$r(e,t),hc(t,n,r),Qo(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=me(n)?Rt:ie.current,c=cn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==r||s!==c)&&es(t,a,r,c),nt=!1;var g=t.memoizedState;a.state=g,ul(t,r,a,l),s=t.memoizedState,i!==r||g!==s||he.current||nt?(typeof m=="function"&&(Go(t,n,m,r),s=t.memoizedState),(i=nt||qi(t,n,i,r,g,s,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Gu(e,t),i=t.memoizedProps,c=t.type===t.elementType?i:ze(t.type,i),a.props=c,h=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=me(n)?Rt:ie.current,s=cn(t,s));var _=n.getDerivedStateFromProps;(m=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==h||g!==s)&&es(t,a,r,s),nt=!1,g=t.memoizedState,a.state=g,ul(t,r,a,l);var y=t.memoizedState;i!==h||g!==y||he.current||nt?(typeof _=="function"&&(Go(t,n,_,r),y=t.memoizedState),(c=nt||qi(t,n,c,r,g,y,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Yo(e,t,n,r,o,l)}function Yo(e,t,n,r,l,o){_c(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Hi(t,n,!1),Ye(e,t,o);r=t.stateNode,gp.current=t;var i=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=fn(t,e.child,null,o),t.child=fn(t,null,i,o)):se(e,t,i,o),t.memoizedState=r.state,l&&Hi(t,n,!0),t.child}function kc(e){var t=e.stateNode;t.pendingContext?Vi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vi(e,t.context,!1),Wa(e,t.containerInfo)}function is(e,t,n,r,l){return dn(),Ra(l),t.flags|=256,se(e,t,n,r),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,t,n){var r=t.pendingProps,l=W.current,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(W,l&1),e===null)return Ho(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=zl(a,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=qo(n),t.memoizedState=Xo,e):Za(t,a));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return vp(e,t,a,r,i,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,i=l.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?o=mt(i,o):(o=Lt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?qo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Xo,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Za(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function br(e,t,n,r){return r!==null&&Ra(r),fn(t,e.child,null,n),e=Za(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=co(Error(x(422))),br(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),o=Lt(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fn(t,e.child,null,a),t.child.memoizedState=qo(a),t.memoizedState=Xo,o);if(!(t.mode&1))return br(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(x(419)),r=co(o,r,void 0),br(e,t,a,r)}if(i=(a&e.childLanes)!==0,pe||i){if(r=ee,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Je(e,l),Re(r,e,l,-1))}return ti(),r=co(Error(x(421))),br(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=bp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,_e=dt(l.nextSibling),ke=t,F=!0,Le=null,e!==null&&(je[Ce++]=He,je[Ce++]=Ke,je[Ce++]=Mt,He=e.id,Ke=e.overflow,Mt=t),t=Za(t,r.children),t.flags|=4096,t)}function ss(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ko(e.return,t,n)}function fo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function wc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,n,t);else if(e.tag===19)ss(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(W,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),fo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}fo(t,!0,n,null,o);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yp(e,t,n){switch(t.tag){case 3:kc(t),dn();break;case 5:Qu(t);break;case 1:me(t.type)&&ll(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(il,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?xc(e,t,n):(M(W,W.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);M(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,yc(e,t,n)}return Ye(e,t,n)}var Sc,ea,jc,Cc;Sc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ea=function(){};jc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(Ue.current);var o=null;switch(n){case"input":l=wo(e,l),r=wo(e,r),o=[];break;case"select":l=$({},l,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":l=Co(e,l),r=Co(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nl)}No(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var i=l[c];for(a in i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(i=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==i&&(s!=null||i!=null))if(c==="style")if(i){for(a in i)!i.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&i[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&O("scroll",e),o||i===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _p(e,t,n){var r=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&rl(),oe(t),null;case 3:return r=t.stateNode,pn(),D(he),D(ie),$a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(sa(Le),Le=null))),ea(e,t),oe(t),null;case 5:Ua(t);var l=zt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)jc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return oe(t),null}if(e=zt(Ue.current),Pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[er]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<Bn.length;l++)O(Bn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":vi(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":_i(r,o),O("invalid",r)}No(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];a==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,i,e),l=["children",""+i]):Vn.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&O("scroll",r)}switch(n){case"input":_r(r),yi(r,o,!0);break;case"textarea":_r(r),ki(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=nl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ae]=t,e[er]=r,Sc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Po(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<Bn.length;l++)O(Bn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":vi(e,r),l=wo(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=$({},r,{value:void 0}),O("invalid",e);break;case"textarea":_i(e,r),l=Co(e,r),O("invalid",e);break;default:l=r}No(n,l),i=l;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?nu(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&eu(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hn(e,s):typeof s=="number"&&Hn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&O("scroll",e):s!=null&&_a(e,o,s,a))}switch(n){case"input":_r(e),yi(e,r,!1);break;case"textarea":_r(e),ki(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Cc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=zt(nr.current),zt(Ue.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return oe(t),null;case 13:if(D(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&_e!==null&&t.mode&1&&!(t.flags&128))$u(),dn(),t.flags|=98560,o=!1;else if(o=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Ae]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Le!==null&&(sa(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Y===0&&(Y=3):ti())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return pn(),ea(e,t),e===null&&Xn(t.stateNode.containerInfo),oe(t),null;case 10:return Da(t.type._context),oe(t),null;case 17:return me(t.type)&&rl(),oe(t),null;case 19:if(D(W),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)In(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=cl(e),a!==null){for(t.flags|=128,In(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>mn&&(t.flags|=128,r=!0,In(o,!1),t.lanes=4194304)}else{if(!r)if(e=cl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!F)return oe(t),null}else 2*G()-o.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,In(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=W.current,M(W,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ei(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function kp(e,t){switch(Ba(t),t.tag){case 1:return me(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),D(he),D(ie),$a(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ua(t),null;case 13:if(D(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(W),null;case 4:return pn(),null;case 10:return Da(t.type._context),null;case 22:case 23:return ei(),null;case 24:return null;default:return null}}var zr=!1,ae=!1,xp=typeof WeakSet=="function"?WeakSet:Set,C=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ta(e,t,n){try{n()}catch(r){V(e,t,r)}}var us=!1;function wp(e,t){if(Do=qr,e=bu(),Ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,i=-1,s=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var _;h!==n||l!==0&&h.nodeType!==3||(i=a+l),h!==o||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(_=h.firstChild)!==null;)g=h,h=_;for(;;){if(h===e)break t;if(g===n&&++c===l&&(i=a),g===o&&++m===r&&(s=a),(_=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=_}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fo={focusedElem:e,selectionRange:n},qr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,j=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:ze(t.type,k),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=us,us=!1,y}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ta(t,n,o)}l=l.next}while(l!==r)}}function Il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[er],delete t[Uo],delete t[lp],delete t[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nl));else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}function la(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(la(e,t,n),e=e.sibling;e!==null;)la(e,t,n),e=e.sibling}var te=null,Te=!1;function qe(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:ae||en(n,t);case 6:var r=te,l=Te;te=null,qe(e,t,n),te=r,Te=l,te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?lo(e.parentNode,n):e.nodeType===1&&lo(e,n),Zn(e)):lo(te,n.stateNode));break;case 4:r=te,l=Te,te=n.stateNode.containerInfo,Te=!0,qe(e,t,n),te=r,Te=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ta(n,t,a),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!ae&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){V(n,t,i)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,qe(e,t,n),ae=r):qe(e,t,n);break;default:qe(e,t,n)}}function ds(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xp),t.forEach(function(r){var l=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:te=i.stateNode,Te=!1;break e;case 3:te=i.stateNode.containerInfo,Te=!0;break e;case 4:te=i.stateNode.containerInfo,Te=!0;break e}i=i.return}if(te===null)throw Error(x(160));Pc(o,a,l),te=null,Te=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Oe(e),r&4){try{Wn(3,e,e.return),Il(3,e)}catch(k){V(e,e.return,k)}try{Wn(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:be(t,e),Oe(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(be(t,e),Oe(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Ys(l,o),Po(i,a);var c=Po(i,o);for(a=0;a<s.length;a+=2){var m=s[a],h=s[a+1];m==="style"?nu(l,h):m==="dangerouslySetInnerHTML"?eu(l,h):m==="children"?Hn(l,h):_a(l,m,h,c)}switch(i){case"input":So(l,o);break;case"textarea":Xs(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?nn(l,!!o.multiple,_,!1):g!==!!o.multiple&&(o.defaultValue!=null?nn(l,!!o.multiple,o.defaultValue,!0):nn(l,!!o.multiple,o.multiple?[]:"",!1))}l[er]=o}catch(k){V(e,e.return,k)}}break;case 6:if(be(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){V(e,e.return,k)}}break;case 3:if(be(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:be(t,e),Oe(e);break;case 13:be(t,e),Oe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Xa=G())),r&4&&ds(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||m,be(t,e),ae=c):be(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(h=C=m;C!==null;){switch(g=C,_=g.child,g.tag){case 0:case 11:case 14:case 15:Wn(4,g,g.return);break;case 1:en(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:en(g,g.return);break;case 22:if(g.memoizedState!==null){ps(h);continue}}_!==null?(_.return=g,C=_):ps(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=tu("display",a))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:be(t,e),Oe(e),r&4&&ds(e);break;case 21:break;default:be(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nc(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var o=cs(e);la(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,i=cs(e);ra(e,i,a);break;default:throw Error(x(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){C=e,bc(e)}function bc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||zr;if(!a){var i=l.alternate,s=i!==null&&i.memoizedState!==null||ae;i=zr;var c=ae;if(zr=a,(ae=s)&&!c)for(C=l;C!==null;)a=C,s=a.child,a.tag===22&&a.memoizedState!==null?hs(l):s!==null?(s.return=a,C=s):hs(l);for(;o!==null;)C=o,bc(o),o=o.sibling;C=l,zr=i,ae=c}fs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,C=o):fs(e)}}function fs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ji(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ji(t,a,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ae||t.flags&512&&na(t)}catch(g){V(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ps(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function hs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Il(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){V(t,l,s)}}var o=t.return;try{na(t)}catch(s){V(t,o,s)}break;case 5:var a=t.return;try{na(t)}catch(s){V(t,a,s)}}}catch(s){V(t,t.return,s)}if(t===e){C=null;break}var i=t.sibling;if(i!==null){i.return=t.return,C=i;break}C=t.return}}var jp=Math.ceil,pl=Xe.ReactCurrentDispatcher,Ja=Xe.ReactCurrentOwner,Ne=Xe.ReactCurrentBatchConfig,B=0,ee=null,Z=null,ne=0,ye=0,tn=kt(0),Y=0,ar=null,Dt=0,bl=0,Ya=0,Un=null,fe=null,Xa=0,mn=1/0,$e=null,hl=!1,oa=null,pt=null,Tr=!1,at=null,ml=0,$n=0,aa=null,Vr=-1,Hr=0;function ue(){return B&6?G():Vr!==-1?Vr:Vr=G()}function ht(e){return e.mode&1?B&2&&ne!==0?ne&-ne:ip.transition!==null?(Hr===0&&(Hr=hu()),Hr):(e=R,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e):1}function Re(e,t,n,r){if(50<$n)throw $n=0,aa=null,Error(x(185));cr(e,n,r),(!(B&2)||e!==ee)&&(e===ee&&(!(B&2)&&(bl|=n),Y===4&&lt(e,ne)),ge(e,r),n===1&&B===0&&!(t.mode&1)&&(mn=G()+500,El&&xt()))}function ge(e,t){var n=e.callbackNode;af(e,t);var r=Xr(e,e===ee?ne:0);if(r===0)n!==null&&Si(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Si(n),t===1)e.tag===0?ap(ms.bind(null,e)):Au(ms.bind(null,e)),np(function(){!(B&6)&&xt()}),n=null;else{switch(mu(r)){case 1:n=ja;break;case 4:n=fu;break;case 16:n=Yr;break;case 536870912:n=pu;break;default:n=Yr}n=Dc(n,zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zc(e,t){if(Vr=-1,Hr=0,B&6)throw Error(x(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Xr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gl(e,r);else{t=r;var l=B;B|=2;var o=Lc();(ee!==e||ne!==t)&&($e=null,mn=G()+500,Tt(e,t));do try{Np();break}catch(i){Tc(e,i)}while(!0);Oa(),pl.current=o,B=l,Z!==null?t=0:(ee=null,ne=0,t=Y)}if(t!==0){if(t===2&&(l=Lo(e),l!==0&&(r=l,t=ia(e,l))),t===1)throw n=ar,Tt(e,0),lt(e,r),ge(e,G()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Cp(l)&&(t=gl(e,r),t===2&&(o=Lo(e),o!==0&&(r=o,t=ia(e,o))),t===1))throw n=ar,Tt(e,0),lt(e,r),ge(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Nt(e,fe,$e);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Xa+500-G(),10<t)){if(Xr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Wo(Nt.bind(null,e,fe,$e),t);break}Nt(e,fe,$e);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Be(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jp(r/1960))-r,10<r){e.timeoutHandle=Wo(Nt.bind(null,e,fe,$e),r);break}Nt(e,fe,$e);break;case 5:Nt(e,fe,$e);break;default:throw Error(x(329))}}}return ge(e,G()),e.callbackNode===n?zc.bind(null,e):null}function ia(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=gl(e,t),e!==2&&(t=fe,fe=n,t!==null&&sa(t)),e}function sa(e){fe===null?fe=e:fe.push.apply(fe,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Me(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Ya,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function ms(e){if(B&6)throw Error(x(327));sn();var t=Xr(e,0);if(!(t&1))return ge(e,G()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var r=Lo(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=ar,Tt(e,0),lt(e,t),ge(e,G()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,fe,$e),ge(e,G()),null}function qa(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(mn=G()+500,El&&xt())}}function Ft(e){at!==null&&at.tag===0&&!(B&6)&&sn();var t=B;B|=1;var n=Ne.transition,r=R;try{if(Ne.transition=null,R=1,e)return e()}finally{R=r,Ne.transition=n,B=t,!(B&6)&&xt()}}function ei(){ye=tn.current,D(tn)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tp(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:pn(),D(he),D(ie),$a();break;case 5:Ua(r);break;case 4:pn();break;case 13:D(W);break;case 19:D(W);break;case 10:Da(r.type._context);break;case 22:case 23:ei()}n=n.return}if(ee=e,Z=e=mt(e.current,null),ne=ye=t,Y=0,ar=null,Ya=bl=Dt=0,fe=Un=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}bt=null}return e}function Tc(e,t){do{var n=Z;try{if(Oa(),Wr.current=fl,dl){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(Ot=0,q=J=U=null,An=!1,rr=0,Ja.current=null,n===null||n.return===null){Y=1,ar=t,Z=null;break}e:{var o=e,a=n.return,i=n,s=t;if(t=ne,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=i,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var _=ns(a);if(_!==null){_.flags&=-257,rs(_,a,i,o,t),_.mode&1&&ts(o,c,t),t=_,s=c;var y=t.updateQueue;if(y===null){var k=new Set;k.add(s),t.updateQueue=k}else y.add(s);break e}else{if(!(t&1)){ts(o,c,t),ti();break e}s=Error(x(426))}}else if(F&&i.mode&1){var j=ns(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),rs(j,a,i,o,t),Ra(hn(s,i));break e}}o=s=hn(s,i),Y!==4&&(Y=2),Un===null?Un=[o]:Un.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=mc(o,s,t);Zi(o,f);break e;case 1:i=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=gc(o,i,t);Zi(o,v);break e}}o=o.return}while(o!==null)}Rc(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Lc(){var e=pl.current;return pl.current=fl,e===null?fl:e}function ti(){(Y===0||Y===3||Y===2)&&(Y=4),ee===null||!(Dt&268435455)&&!(bl&268435455)||lt(ee,ne)}function gl(e,t){var n=B;B|=2;var r=Lc();(ee!==e||ne!==t)&&($e=null,Tt(e,t));do try{Ep();break}catch(l){Tc(e,l)}while(!0);if(Oa(),B=n,pl.current=r,Z!==null)throw Error(x(261));return ee=null,ne=0,Y}function Ep(){for(;Z!==null;)Bc(Z)}function Np(){for(;Z!==null&&!Yd();)Bc(Z)}function Bc(e){var t=Oc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Rc(e):Z=t,Ja.current=null}function Rc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kp(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Z=null;return}}else if(n=_p(n,t,ye),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Y===0&&(Y=5)}function Nt(e,t,n){var r=R,l=Ne.transition;try{Ne.transition=null,R=1,Pp(e,t,n,r)}finally{Ne.transition=l,R=r}return null}function Pp(e,t,n,r){do sn();while(at!==null);if(B&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sf(e,o),e===ee&&(Z=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,Dc(Yr,function(){return sn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var a=R;R=1;var i=B;B|=4,Ja.current=null,wp(e,n),Ic(n,e),Qf(Fo),qr=!!Do,Fo=Do=null,e.current=n,Sp(n),Xd(),B=i,R=a,Ne.transition=o}else e.current=n;if(Tr&&(Tr=!1,at=e,ml=l),o=e.pendingLanes,o===0&&(pt=null),tf(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(hl)throw hl=!1,e=oa,oa=null,e;return ml&1&&e.tag!==0&&sn(),o=e.pendingLanes,o&1?e===aa?$n++:($n=0,aa=e):$n=0,xt(),null}function sn(){if(at!==null){var e=mu(ml),t=Ne.transition,n=R;try{if(Ne.transition=null,R=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,ml=0,B&6)throw Error(x(331));var l=B;for(B|=4,C=e.current;C!==null;){var o=C,a=o.child;if(C.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var c=i[s];for(C=c;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Wn(8,m,o)}var h=m.child;if(h!==null)h.return=m,C=h;else for(;C!==null;){m=C;var g=m.sibling,_=m.return;if(Ec(m),m===c){C=null;break}if(g!==null){g.return=_,C=g;break}C=_}}}var y=o.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}C=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,C=a;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,C=f;break e}C=o.return}}var d=e.current;for(C=d;C!==null;){a=C;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,C=p;else e:for(a=d;C!==null;){if(i=C,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Il(9,i)}}catch(S){V(i,i.return,S)}if(i===a){C=null;break e}var v=i.sibling;if(v!==null){v.return=i.return,C=v;break e}C=i.return}}if(B=l,xt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{R=n,Ne.transition=t}}return!1}function gs(e,t,n){t=hn(n,t),t=mc(e,t,1),e=ft(e,t,1),t=ue(),e!==null&&(cr(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)gs(e,e,n);else for(;t!==null;){if(t.tag===3){gs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=hn(n,e),e=gc(t,e,1),t=ft(t,e,1),e=ue(),t!==null&&(cr(t,1,e),ge(t,e));break}}t=t.return}}function Ip(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Y===4||Y===3&&(ne&130023424)===ne&&500>G()-Xa?Tt(e,0):Ya|=n),ge(e,t)}function Mc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ue();e=Je(e,t),e!==null&&(cr(e,t,n),ge(e,n))}function bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mc(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Mc(e,n)}var Oc;Oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,yp(e,t,n);pe=!!(e.flags&131072)}else pe=!1,F&&t.flags&1048576&&Wu(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var l=cn(t,ie.current);an(t,n),l=Ha(null,t,r,e,l,n);var o=Ka();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,ll(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Aa(t),l.updater=Pl,t.stateNode=l,l._reactInternals=t,Qo(t,r,e,n),t=Yo(null,t,r,!0,o,n)):(t.tag=0,F&&o&&La(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Lp(r),e=ze(r,e),l){case 0:t=Jo(null,t,r,e,n);break e;case 1:t=as(null,t,r,e,n);break e;case 11:t=ls(null,t,r,e,n);break e;case 14:t=os(null,t,r,ze(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Jo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),as(e,t,r,l,n);case 3:e:{if(kc(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Gu(e,t),ul(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=hn(Error(x(423)),t),t=is(e,t,r,n,l);break e}else if(r!==l){l=hn(Error(x(424)),t),t=is(e,t,r,n,l);break e}else for(_e=dt(t.stateNode.containerInfo.firstChild),ke=t,F=!0,Le=null,n=Hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=Ye(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Qu(t),e===null&&Ho(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Ao(r,l)?a=null:o!==null&&Ao(r,o)&&(t.flags|=32),_c(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Ho(t),null;case 13:return xc(e,t,n);case 4:return Wa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),ls(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,M(il,r._currentValue),r._currentValue=a,o!==null)if(Me(o.value,a)){if(o.children===l.children&&!he.current){t=Ye(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){a=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ge(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ko(o.return,n,t),i.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(x(341));a.lanes|=n,i=a.alternate,i!==null&&(i.lanes|=n),Ko(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=Pe(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),os(e,t,r,l,n);case 15:return vc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),$r(e,t),t.tag=1,me(r)?(e=!0,ll(t)):e=!1,an(t,n),hc(t,r,l),Qo(t,r,l,n),Yo(null,t,r,!0,e,n);case 19:return wc(e,t,n);case 22:return yc(e,t,n)}throw Error(x(156,t.tag))};function Dc(e,t){return du(e,t)}function Tp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Tp(e,t,n,r)}function ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return ni(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===wa)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")ni(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ht:return Lt(n.children,l,o,t);case ka:a=8,l|=8;break;case yo:return e=Ee(12,n,t,l|2),e.elementType=yo,e.lanes=o,e;case _o:return e=Ee(13,n,t,l),e.elementType=_o,e.lanes=o,e;case ko:return e=Ee(19,n,t,l),e.elementType=ko,e.lanes=o,e;case Qs:return zl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ks:a=10;break e;case Gs:a=9;break e;case xa:a=11;break e;case wa:a=14;break e;case tt:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ee(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Qs,e.lanes=n,e.stateNode={isHidden:!1},e}function po(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function ho(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ri(e,t,n,r,l,o,a,i,s){return e=new Bp(e,t,n,i,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Aa(o),e}function Rp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fc(e){if(!e)return yt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(me(n))return Fu(e,n,t)}return t}function Ac(e,t,n,r,l,o,a,i,s){return e=ri(n,r,!0,e,l,o,a,i,s),e.context=Fc(null),n=e.current,r=ue(),l=ht(n),o=Ge(r,l),o.callback=t??null,ft(n,o,l),e.current.lanes=l,cr(e,l,r),ge(e,r),e}function Tl(e,t,n,r){var l=t.current,o=ue(),a=ht(l);return n=Fc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,a),e!==null&&(Re(e,l,a,o),Ar(e,l,a)),a}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function li(e,t){vs(e,t),(e=e.alternate)&&vs(e,t)}function Mp(){return null}var Wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function oi(e){this._internalRoot=e}Ll.prototype.render=oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Tl(e,t,null,null)};Ll.prototype.unmount=oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Tl(null,e,null,null)}),t[Ze]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=yu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&ku(e)}};function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ys(){}function Op(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=vl(a);o.call(c)}}var a=Ac(t,r,e,0,null,!1,!1,"",ys);return e._reactRootContainer=a,e[Ze]=a.current,Xn(e.nodeType===8?e.parentNode:e),Ft(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var c=vl(s);i.call(c)}}var s=ri(e,0,!1,null,null,!1,!1,"",ys);return e._reactRootContainer=s,e[Ze]=s.current,Xn(e.nodeType===8?e.parentNode:e),Ft(function(){Tl(t,s,n,r)}),s}function Rl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var i=l;l=function(){var s=vl(a);i.call(s)}}Tl(t,a,e,l)}else a=Op(n,t,e,l,r);return vl(a)}gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(Ca(t,n|1),ge(t,G()),!(B&6)&&(mn=G()+500,xt()))}break;case 13:Ft(function(){var r=Je(e,1);if(r!==null){var l=ue();Re(r,e,1,l)}}),li(e,1)}};Ea=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}li(e,134217728)}};vu=function(e){if(e.tag===13){var t=ht(e),n=Je(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}li(e,t)}};yu=function(){return R};_u=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};bo=function(e,t,n){switch(t){case"input":if(So(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Cl(r);if(!l)throw Error(x(90));Js(r),So(r,l)}}}break;case"textarea":Xs(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};ou=qa;au=Ft;var Dp={usingClientEntryPoint:!1,Events:[fr,Zt,Cl,ru,lu,qa]},bn={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{xl=Lr.inject(Fp),We=Lr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ai(t))throw Error(x(200));return Rp(e,t,null,n)};we.createRoot=function(e,t){if(!ai(e))throw Error(x(299));var n=!1,r="",l=Wc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ri(e,1,!1,null,null,n,!1,r,l),e[Ze]=t.current,Xn(e.nodeType===8?e.parentNode:e),new oi(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=uu(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Ft(e)};we.hydrate=function(e,t,n){if(!Bl(t))throw Error(x(200));return Rl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!ai(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=Wc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ac(t,null,e,1,n??null,l,!1,o,a),e[Ze]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ll(t)};we.render=function(e,t,n){if(!Bl(t))throw Error(x(200));return Rl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(x(40));return e._reactRootContainer?(Ft(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};we.unstable_batchedUpdates=qa;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Rl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function Uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc)}catch(e){console.error(e)}}Uc(),Us.exports=we;var Ap=Us.exports,_s=Ap;go.createRoot=_s.createRoot,go.hydrateRoot=_s.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(null,arguments)}var it;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(it||(it={}));const ks="popstate";function Wp(e){e===void 0&&(e={});function t(l,o){let{pathname:a="/",search:i="",hash:s=""}=Ut(l.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ua("",{pathname:a,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(l,o){let a=l.document.querySelector("base"),i="";if(a&&a.getAttribute("href")){let s=l.location.href,c=s.indexOf("#");i=c===-1?s:s.slice(0,c)}return i+"#"+(typeof o=="string"?o:yl(o))}function r(l,o){ii(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return $p(t,n,r,e)}function H(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ii(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Up(){return Math.random().toString(36).substr(2,8)}function xs(e,t){return{usr:e.state,key:e.key,idx:t}}function ua(e,t,n,r){return n===void 0&&(n=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ut(t):t,{state:n,key:t&&t.key||r||Up()})}function yl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ut(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $p(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,a=l.history,i=it.Pop,s=null,c=m();c==null&&(c=0,a.replaceState(ir({},a.state,{idx:c}),""));function m(){return(a.state||{idx:null}).idx}function h(){i=it.Pop;let j=m(),f=j==null?null:j-c;c=j,s&&s({action:i,location:k.location,delta:f})}function g(j,f){i=it.Push;let d=ua(k.location,j,f);n&&n(d,j),c=m()+1;let p=xs(d,c),v=k.createHref(d);try{a.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(v)}o&&s&&s({action:i,location:k.location,delta:1})}function _(j,f){i=it.Replace;let d=ua(k.location,j,f);n&&n(d,j),c=m();let p=xs(d,c),v=k.createHref(d);a.replaceState(p,"",v),o&&s&&s({action:i,location:k.location,delta:0})}function y(j){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof j=="string"?j:yl(j);return d=d.replace(/ $/,"%20"),H(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return i},get location(){return e(l,a)},listen(j){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(ks,h),s=j,()=>{l.removeEventListener(ks,h),s=null}},createHref(j){return t(l,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:_,go(j){return a.go(j)}};return k}var ws;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ws||(ws={}));function Vp(e,t,n){return n===void 0&&(n="/"),Hp(e,t,n)}function Hp(e,t,n,r){let l=typeof t=="string"?Ut(t):t,o=gn(l.pathname||"/",n);if(o==null)return null;let a=$c(e);Kp(a);let i=null,s=rh(o);for(let c=0;i==null&&c<a.length;++c)i=th(a[c],s);return i}function $c(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,a,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(H(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=gt([r,s.relativePath]),m=n.concat(s);o.children&&o.children.length>0&&(H(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$c(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:qp(c,o.index),routesMeta:m})};return e.forEach((o,a)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))l(o,a);else for(let s of Vc(o.path))l(o,a,s)}),t}function Vc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let a=Vc(r.join("/")),i=[];return i.push(...a.map(s=>s===""?o:[o,s].join("/"))),l&&i.push(...a),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Kp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:eh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gp=/^:[\w-]+$/,Qp=3,Zp=2,Jp=1,Yp=10,Xp=-2,Ss=e=>e==="*";function qp(e,t){let n=e.split("/"),r=n.length;return n.some(Ss)&&(r+=Xp),t&&(r+=Zp),n.filter(l=>!Ss(l)).reduce((l,o)=>l+(Gp.test(o)?Qp:o===""?Jp:Yp),r)}function eh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function th(e,t,n){let{routesMeta:r}=e,l={},o="/",a=[];for(let i=0;i<r.length;++i){let s=r[i],c=i===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",h=ca({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},m),g=s.route;if(!h)return null;Object.assign(l,h.params),a.push({params:l,pathname:gt([o,h.pathname]),pathnameBase:ah(gt([o,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(o=gt([o,h.pathnameBase]))}return a}function ca(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nh(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],a=o.replace(/(.)\/+$/,"$1"),i=l.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:_}=m;if(g==="*"){let k=i[h]||"";a=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const y=i[h];return _&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function nh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ii(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,i,s)=>(r.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function rh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ii(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Ut(e):e,o;return n?(n=Gc(n),n.startsWith("/")?o=js(n.substring(1),"/"):o=js(n,t)):o=t,{pathname:o,search:ih(r),hash:sh(l)}}function js(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function mo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hc(e,t){let n=oh(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Kc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Ut(e):(l=ir({},e),H(!l.pathname||!l.pathname.includes("?"),mo("?","pathname","search",l)),H(!l.pathname||!l.pathname.includes("#"),mo("#","pathname","hash",l)),H(!l.search||!l.search.includes("#"),mo("#","search","hash",l)));let o=e===""||l.pathname==="",a=o?"/":l.pathname,i;if(a==null)i=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}i=h>=0?t[h]:"/"}let s=lh(l,i),c=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||m)&&(s.pathname+="/"),s}const Gc=e=>e.replace(/\/\/+/g,"/"),gt=e=>Gc(e.join("/")),ah=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ih=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qc=["post","put","patch","delete"];new Set(Qc);const ch=["get",...Qc];new Set(ch);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(null,arguments)}const Ml=w.createContext(null),Zc=w.createContext(null),wt=w.createContext(null),Ol=w.createContext(null),St=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Jc=w.createContext(null);function dh(e,t){let{relative:n}=t===void 0?{}:t;hr()||H(!1);let{basename:r,navigator:l}=w.useContext(wt),{hash:o,pathname:a,search:i}=Dl(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:gt([r,a])),l.createHref({pathname:s,search:i,hash:o})}function hr(){return w.useContext(Ol)!=null}function kn(){return hr()||H(!1),w.useContext(Ol).location}function Yc(e){w.useContext(wt).static||w.useLayoutEffect(e)}function fh(){let{isDataRoute:e}=w.useContext(St);return e?Ch():ph()}function ph(){hr()||H(!1);let e=w.useContext(Ml),{basename:t,future:n,navigator:r}=w.useContext(wt),{matches:l}=w.useContext(St),{pathname:o}=kn(),a=JSON.stringify(Hc(l,n.v7_relativeSplatPath)),i=w.useRef(!1);return Yc(()=>{i.current=!0}),w.useCallback(function(c,m){if(m===void 0&&(m={}),!i.current)return;if(typeof c=="number"){r.go(c);return}let h=Kc(c,JSON.parse(a),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:gt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,a,o,e])}function Xc(){let{matches:e}=w.useContext(St),t=e[e.length-1];return t?t.params:{}}function Dl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(wt),{matches:l}=w.useContext(St),{pathname:o}=kn(),a=JSON.stringify(Hc(l,r.v7_relativeSplatPath));return w.useMemo(()=>Kc(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function hh(e,t){return mh(e,t)}function mh(e,t,n,r){hr()||H(!1);let{navigator:l}=w.useContext(wt),{matches:o}=w.useContext(St),a=o[o.length-1],i=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let c=kn(),m;if(t){var h;let j=typeof t=="string"?Ut(t):t;s==="/"||(h=j.pathname)!=null&&h.startsWith(s)||H(!1),m=j}else m=c;let g=m.pathname||"/",_=g;if(s!=="/"){let j=s.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=Vp(e,{pathname:_}),k=kh(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},i,j.params),pathname:gt([s,l.encodeLocation?l.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?s:gt([s,l.encodeLocation?l.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&k?w.createElement(Ol.Provider,{value:{location:sr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:it.Pop}},k):k}function gh(){let e=jh(),t=uh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,null)}const vh=w.createElement(gh,null);class yh extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(St.Provider,{value:this.props.routeContext},w.createElement(Jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _h(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(Ml);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(St.Provider,{value:t},r)}function kh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=(l=n)==null?void 0:l.errors;if(i!=null){let m=a.findIndex(h=>h.route.id&&(i==null?void 0:i[h.route.id])!==void 0);m>=0||H(!1),a=a.slice(0,Math.min(a.length,m+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let h=a[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:_}=n,y=h.route.loader&&g[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||y){s=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((m,h,g)=>{let _,y=!1,k=null,j=null;n&&(_=i&&h.route.id?i[h.route.id]:void 0,k=h.route.errorElement||vh,s&&(c<0&&g===0?(Eh("route-fallback"),y=!0,j=null):c===g&&(y=!0,j=h.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,g+1)),d=()=>{let p;return _?p=k:y?p=j:h.route.Component?p=w.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,w.createElement(_h,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?w.createElement(yh,{location:n.location,revalidation:n.revalidation,component:k,error:_,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var qc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qc||{}),ed=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ed||{});function xh(e){let t=w.useContext(Ml);return t||H(!1),t}function wh(e){let t=w.useContext(Zc);return t||H(!1),t}function Sh(e){let t=w.useContext(St);return t||H(!1),t}function td(e){let t=Sh(),n=t.matches[t.matches.length-1];return n.route.id||H(!1),n.route.id}function jh(){var e;let t=w.useContext(Jc),n=wh(),r=td();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ch(){let{router:e}=xh(qc.UseNavigateStable),t=td(ed.UseNavigateStable),n=w.useRef(!1);return Yc(()=>{n.current=!0}),w.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,sr({fromRouteId:t},o)))},[e,t])}const Cs={};function Eh(e,t,n){Cs[e]||(Cs[e]=!0)}function Nh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pt(e){H(!1)}function Ph(e){let{basename:t="/",children:n=null,location:r,navigationType:l=it.Pop,navigator:o,static:a=!1,future:i}=e;hr()&&H(!1);let s=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:s,navigator:o,static:a,future:sr({v7_relativeSplatPath:!1},i)}),[s,i,o,a]);typeof r=="string"&&(r=Ut(r));let{pathname:m="/",search:h="",hash:g="",state:_=null,key:y="default"}=r,k=w.useMemo(()=>{let j=gn(m,s);return j==null?null:{location:{pathname:j,search:h,hash:g,state:_,key:y},navigationType:l}},[s,m,h,g,_,y,l]);return k==null?null:w.createElement(wt.Provider,{value:c},w.createElement(Ol.Provider,{children:n,value:k}))}function Ih(e){let{children:t,location:n}=e;return hh(da(t),n)}new Promise(()=>{});function da(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;let o=[...t,l];if(r.type===w.Fragment){n.push.apply(n,da(r.props.children,o));return}r.type!==Pt&&H(!1),!r.props.index||!r.props.children||H(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=da(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_l.apply(null,arguments)}function nd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function bh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zh(e,t){return e.button===0&&(!t||t==="_self")&&!bh(e)}const Th=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Lh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Bh="6";try{window.__reactRouterVersion=Bh}catch{}const Rh=w.createContext({isTransitioning:!1}),Mh="startTransition",Es=Pd[Mh];function Oh(e){let{basename:t,children:n,future:r,window:l}=e,o=w.useRef();o.current==null&&(o.current=Wp({window:l,v5Compat:!0}));let a=o.current,[i,s]=w.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},m=w.useCallback(h=>{c&&Es?Es(()=>s(h)):s(h)},[s,c]);return w.useLayoutEffect(()=>a.listen(m),[a,m]),w.useEffect(()=>Nh(r),[r]),w.createElement(Ph,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:a,future:r})}const Dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:a,state:i,target:s,to:c,preventScrollReset:m,viewTransition:h}=t,g=nd(t,Th),{basename:_}=w.useContext(wt),y,k=!1;if(typeof c=="string"&&Fh.test(c)&&(y=c,Dh))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),S=gn(v.pathname,_);v.origin===p.origin&&S!=null?c=S+v.search+v.hash:k=!0}catch{}let j=dh(c,{relative:l}),f=Wh(c,{replace:a,state:i,target:s,preventScrollReset:m,relative:l,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return w.createElement("a",_l({},g,{href:y||j,onClick:k||o?r:d,ref:n,target:s}))}),De=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:a=!1,style:i,to:s,viewTransition:c,children:m}=t,h=nd(t,Lh),g=Dl(s,{relative:h.relative}),_=kn(),y=w.useContext(Zc),{navigator:k,basename:j}=w.useContext(wt),f=y!=null&&Uh(g)&&c===!0,d=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,p=_.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;l||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&j&&(v=gn(v,j)||v);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let N=p===d||!a&&p.startsWith(d)&&p.charAt(S)==="/",P=v!=null&&(v===d||!a&&v.startsWith(d)&&v.charAt(d.length)==="/"),I={isActive:N,isPending:P,isTransitioning:f},A=N?r:void 0,z;typeof o=="function"?z=o(I):z=[o,N?"active":null,P?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ve=typeof i=="function"?i(I):i;return w.createElement(Q,_l({},h,{"aria-current":A,className:z,ref:n,style:ve,to:s,viewTransition:c}),typeof m=="function"?m(I):m)});var fa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fa||(fa={}));var Ns;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ns||(Ns={}));function Ah(e){let t=w.useContext(Ml);return t||H(!1),t}function Wh(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:a,viewTransition:i}=t===void 0?{}:t,s=fh(),c=kn(),m=Dl(e,{relative:a});return w.useCallback(h=>{if(zh(h,n)){h.preventDefault();let g=r!==void 0?r:yl(c)===yl(m);s(e,{replace:g,state:l,preventScrollReset:o,relative:a,viewTransition:i})}},[c,s,m,r,l,n,e,o,a,i])}function Uh(e,t){t===void 0&&(t={});let n=w.useContext(Rh);n==null&&H(!1);let{basename:r}=Ah(fa.useViewTransitionState),l=Dl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ca(l.pathname,a)!=null||ca(l.pathname,o)!=null}const rd="/Ilkal_Saree/assets/logo-XeW0Vqsh.png";function $h(){const[e,t]=w.useState(!1);return w.useEffect(()=>{function n(){window.innerWidth>900&&t(!1)}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),u.jsxs("header",{className:"navbar",children:[u.jsx("style",{children:`
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-ivory);
  box-shadow: var(--shadow-card);
}

.navbar__row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-block: var(--space-2);
  min-height: var(--header-height);
}

.navbar__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar__logo img {
  height: 52px;
  width: auto;
  display: block;
}

.navbar__burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;
  flex-shrink: 0;
}

.navbar__burger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--color-charcoal);
  border-radius: 2px;
}

/* Desktop inline menu — hidden on mobile */
.navbar__desktop-menu {
  display: none;
}

/* Mobile dropdown menu — full width, collapses below the row */
.navbar__mobile-menu {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.25s ease;
  background: var(--color-white);
}

.navbar__mobile-menu--open {
  max-height: 320px;
}

.navbar__menu-list {
  display: flex;
  flex-direction: column;
  padding-block: var(--space-2);
}

.navbar__menu-list li a {
  display: block;
  padding: var(--space-3);
  font-weight: 500;
  border-bottom: 1px solid var(--color-blush);
}

.navbar__menu-list li a.active {
  color: var(--color-maroon);
  font-weight: 700;
}

/* ===== Tablet / Desktop ===== */
@media (min-width: 900px) {
  .navbar__burger {
    display: none;
  }

  .navbar__mobile-menu {
    display: none;
  }

  .navbar__logo img {
    height: 64px;
    margin-right: var(--space-5);
  }

  .navbar__row {
    flex-wrap: nowrap;
  }

  .navbar__desktop-menu {
    display: block;
    margin-left: auto;
  }

  .navbar__desktop-menu .navbar__menu-list {
    flex-direction: row;
    gap: var(--space-6);
    padding-block: 0;
  }

  .navbar__desktop-menu .navbar__menu-list li a {
    padding: var(--space-2) 0;
    border-bottom: 2px solid transparent;
  }

  .navbar__desktop-menu .navbar__menu-list li a.active,
  .navbar__desktop-menu .navbar__menu-list li a:hover {
    color: var(--color-maroon);
    border-bottom-color: var(--color-gold);
  }
}
      `}),u.jsxs("div",{className:"navbar__row container",children:[u.jsx(Q,{to:"/",className:"navbar__logo",onClick:()=>t(!1),children:u.jsx("img",{src:rd,alt:"Culture — rooted in culture, woven with grace"})}),u.jsxs("button",{className:"navbar__burger","aria-label":e?"Close menu":"Open menu","aria-expanded":e,onClick:()=>t(n=>!n),children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsx("nav",{className:"navbar__desktop-menu","aria-label":"Primary",children:u.jsxs("ul",{className:"navbar__menu-list",children:[u.jsx("li",{children:u.jsx(De,{to:"/",end:!0,onClick:()=>t(!1),children:"Home"})}),u.jsx("li",{children:u.jsx(De,{to:"/all-saree",end:!0,onClick:()=>t(!1),children:"All Saree"})}),u.jsx("li",{children:u.jsx(De,{to:"/about",onClick:()=>t(!1),children:"About Us"})}),u.jsx("li",{children:u.jsx(De,{to:"/all-saree/duppata",onClick:()=>t(!1),children:"Duppata"})}),u.jsx("li",{children:u.jsx(De,{to:"/all-saree/stoles",onClick:()=>t(!1),children:"Stoles"})})]})})]}),u.jsx("nav",{className:`navbar__mobile-menu ${e?"navbar__mobile-menu--open":""}`,"aria-label":"Primary mobile",children:u.jsxs("ul",{className:"navbar__menu-list container",children:[u.jsx("li",{children:u.jsx(De,{to:"/",end:!0,onClick:()=>t(!1),children:"Home"})}),u.jsx("li",{children:u.jsx(De,{to:"/all-saree",end:!0,onClick:()=>t(!1),children:"All Saree"})}),u.jsx("li",{children:u.jsx(De,{to:"/about",onClick:()=>t(!1),children:"About Us"})}),u.jsx("li",{children:u.jsx(De,{to:"/all-saree/duppata",onClick:()=>t(!1),children:"Duppata"})}),u.jsx("li",{children:u.jsx(De,{to:"/all-saree/stoles",onClick:()=>t(!1),children:"Stoles"})})]})}),u.jsx("div",{className:"temple-border"})]})}const et={phone:"+91 90000 00000",phoneHref:"tel:+919000000000",email:"culturetraditionalilkalsaree@gmail.com",facebook:"https://facebook.com/",instagram:"https://instagram.com/",mapsUrl:"https://maps.google.com/?q=Ilkal,Karnataka",address:"Kamatagi, Near Hosapeti Oni, Bagalkot District, Karnataka"};function Vh(){return u.jsxs("footer",{className:"footer",children:[u.jsx("style",{children:`
.footer {
  background: var(--color-maroon-dark);
  color: var(--color-blush);
  margin-top: var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  padding-block: var(--space-6);
}

.footer__brand h3 {
  color: var(--color-gold-light);
  font-size: 1.4rem;
  line-height: 1.3;
  margin-bottom: var(--space-2);
}

.footer__logo {
  height: 88px;
  width: auto;
  margin-bottom: var(--space-3);
}

.footer__brand p {
  max-width: 32ch;
  color: var(--color-blush);
  opacity: 0.85;
  font-size: 0.9rem;
}

.footer__col h4 {
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.footer__col ul li {
  margin-bottom: var(--space-2);
}

.footer__col ul li a {
  font-size: 0.9rem;
  opacity: 0.85;
}

.footer__col ul li a:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer__contact-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.9rem;
  opacity: 0.92;
}

.footer__contact-item:hover {
  opacity: 1;
}

.footer__contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 1rem;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-block: var(--space-3);
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (min-width: 640px) {
  .footer__grid {
    grid-template-columns: 1.3fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
  }
}
      `}),u.jsx("div",{className:"temple-border"}),u.jsxs("div",{className:"container footer__grid",children:[u.jsxs("div",{className:"footer__brand",children:[u.jsx("img",{src:rd,alt:"Culture — rooted in culture, woven with grace",className:"footer__logo"}),u.jsx("p",{children:"Handwoven Ilkal sarees, khand sarees, duppatas and stoles, sourced directly from weaver families in Karnataka."})]}),u.jsxs("div",{className:"footer__col",children:[u.jsx("h4",{children:"Categories"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(Q,{to:"/all-saree/ilkal-saree",children:"Ilkal Saree"})}),u.jsx("li",{children:u.jsx(Q,{to:"/all-saree/khand-saree",children:"Khand Saree"})}),u.jsx("li",{children:u.jsx(Q,{to:"/all-saree/duppata",children:"Duppata"})}),u.jsx("li",{children:u.jsx(Q,{to:"/all-saree/stoles",children:"Stoles"})})]})]}),u.jsxs("div",{className:"footer__col",children:[u.jsx("h4",{children:"Quick Links"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(Q,{to:"/",children:"Home"})}),u.jsx("li",{children:u.jsx(Q,{to:"/all-saree",children:"All Saree"})}),u.jsx("li",{children:u.jsx(Q,{to:"/about",children:"About Us"})}),u.jsx("li",{children:u.jsx(Q,{to:"/#ilkal-info",children:"The Ilkal Saree Story"})})]})]}),u.jsxs("div",{className:"footer__col",children:[u.jsx("h4",{children:"Get In Touch"}),u.jsxs("div",{className:"footer__contact-list",children:[u.jsxs("a",{className:"footer__contact-item",href:et.phoneHref,children:[u.jsx("span",{className:"footer__contact-icon","aria-hidden":!0,children:"📞"}),et.phone]}),u.jsxs("a",{className:"footer__contact-item",href:`mailto:${et.email}`,children:[u.jsx("span",{className:"footer__contact-icon","aria-hidden":!0,children:"✉️"}),et.email]}),u.jsxs("a",{className:"footer__contact-item",href:et.mapsUrl,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"footer__contact-icon","aria-hidden":!0,children:"📍"}),et.address]}),u.jsxs("a",{className:"footer__contact-item",href:et.facebook,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"footer__contact-icon","aria-hidden":!0,children:"f"}),"Facebook"]}),u.jsxs("a",{className:"footer__contact-item",href:et.instagram,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"footer__contact-icon","aria-hidden":!0,children:"📷"}),"Instagram"]})]})]})]}),u.jsx("div",{className:"container footer__bottom",children:u.jsxs("p",{children:["© ",new Date().getFullYear()," Culture Traditional Ilkal Saree. All rights reserved."]})})]})}const Hh="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Kh="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Gh="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Qh="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",Zh="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Jh="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Yh="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Xh="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",qh="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",em="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",tm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",nm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",rm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",lm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",om="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",am="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",im="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",sm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",um="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",cm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",dm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",fm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",pm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",hm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",mm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",gm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",vm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",ym="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",_m="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",km="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",xm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",wm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",Sm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",jm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Cm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Em="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",Nm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Pm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Im="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",bm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",zm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Tm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Lm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Bm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",Rm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Mm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Om="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Dm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",Fm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Am="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Wm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Um="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",$m="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Vm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Hm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Km="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",Gm="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Qm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Zm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Jm="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",Ym="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Xm="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",qm="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",eg="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",tg="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",ng="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",rg="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",lg="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",og="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",ag="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",ig="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",sg="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",ug="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",cg="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",dg="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",fg="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",pg="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",hg="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",mg="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",gg="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",vg="/Ilkal_Saree/assets/1-BTBcYTb7.jpeg",yg="/Ilkal_Saree/assets/10-C9EthWlw.jpeg",_g="/Ilkal_Saree/assets/11-4Z7x1Gs5.jpeg",kg="/Ilkal_Saree/assets/12-CwwKoC6_.jpeg",xg="/Ilkal_Saree/assets/13-DlTMiGSb.jpeg",wg="/Ilkal_Saree/assets/14-BZeK8ker.jpeg",Sg="/Ilkal_Saree/assets/15-BeyXDiCr.jpeg",jg="/Ilkal_Saree/assets/16-DTeWaLGt.jpeg",Cg="/Ilkal_Saree/assets/17-CsE-FSup.jpeg",Eg="/Ilkal_Saree/assets/18-BAc3nDtz.jpeg",Ng="/Ilkal_Saree/assets/19-B-K-Zyvt.jpeg",Pg="/Ilkal_Saree/assets/2-CmBlZGoJ.jpeg",Ig="/Ilkal_Saree/assets/20-rb2gRs4k.jpeg",bg="/Ilkal_Saree/assets/21-CMg3K4Ef.jpeg",zg="/Ilkal_Saree/assets/3-AlzmUidq.jpeg",Tg="/Ilkal_Saree/assets/4-y14Ba3sy.jpeg",Lg="/Ilkal_Saree/assets/5-C1GmStRe.jpeg",Bg="/Ilkal_Saree/assets/6-BhG-mPag.jpeg",Rg="/Ilkal_Saree/assets/7-BlaW7OiJ.jpeg",Mg="/Ilkal_Saree/assets/8-BveLpM4I.jpeg",Og="/Ilkal_Saree/assets/9-Bsj-VWmc.jpeg",Dg=Object.entries(Object.assign({"../assets/products/Duppata - Border Silk Pallu Silk Body Cotton/2.jpeg":Hh,"../assets/products/Duppata - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Kh,"../assets/products/Duppata - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Gh,"../assets/products/Duppata - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Qh,"../assets/products/Duppata - Border Silk by Cotton/2.jpeg":Zh,"../assets/products/Duppata - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Jh,"../assets/products/Duppata - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Yh,"../assets/products/Duppata - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Xh,"../assets/products/Duppata - Cotton by Cotton/2.jpeg":qh,"../assets/products/Duppata - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":em,"../assets/products/Duppata - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":tm,"../assets/products/Duppata - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":nm,"../assets/products/Duppata - Pallu Silk Body Cotton/2.jpeg":rm,"../assets/products/Duppata - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":lm,"../assets/products/Duppata - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":om,"../assets/products/Duppata - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":am,"../assets/products/Duppata - Silk by Silk/2.jpeg":im,"../assets/products/Duppata - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":sm,"../assets/products/Duppata - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":um,"../assets/products/Duppata - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":cm,"../assets/products/Ilkal Saree - Border Silk Pallu Silk Body Cotton/2.jpeg":dm,"../assets/products/Ilkal Saree - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":fm,"../assets/products/Ilkal Saree - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":pm,"../assets/products/Ilkal Saree - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":hm,"../assets/products/Ilkal Saree - Border Silk by Cotton/2.jpeg":mm,"../assets/products/Ilkal Saree - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":gm,"../assets/products/Ilkal Saree - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":vm,"../assets/products/Ilkal Saree - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":ym,"../assets/products/Ilkal Saree - Cotton by Cotton/2.jpeg":_m,"../assets/products/Ilkal Saree - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":km,"../assets/products/Ilkal Saree - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":xm,"../assets/products/Ilkal Saree - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":wm,"../assets/products/Ilkal Saree - Pallu Silk Body Cotton/2.jpeg":Sm,"../assets/products/Ilkal Saree - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":jm,"../assets/products/Ilkal Saree - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Cm,"../assets/products/Ilkal Saree - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Em,"../assets/products/Ilkal Saree - Silk by Silk/2.jpeg":Nm,"../assets/products/Ilkal Saree - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Pm,"../assets/products/Ilkal Saree - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Im,"../assets/products/Ilkal Saree - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":bm,"../assets/products/Khand Saree - Border Silk Pallu Silk Body Cotton/2.jpeg":zm,"../assets/products/Khand Saree - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Tm,"../assets/products/Khand Saree - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Lm,"../assets/products/Khand Saree - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Bm,"../assets/products/Khand Saree - Border Silk by Cotton/2.jpeg":Rm,"../assets/products/Khand Saree - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Mm,"../assets/products/Khand Saree - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Om,"../assets/products/Khand Saree - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Dm,"../assets/products/Khand Saree - Cotton by Cotton/2.jpeg":Fm,"../assets/products/Khand Saree - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Am,"../assets/products/Khand Saree - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Wm,"../assets/products/Khand Saree - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Um,"../assets/products/Khand Saree - Pallu Silk Body Cotton/2.jpeg":$m,"../assets/products/Khand Saree - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Vm,"../assets/products/Khand Saree - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Hm,"../assets/products/Khand Saree - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Km,"../assets/products/Khand Saree - Silk by Silk/2.jpeg":Gm,"../assets/products/Khand Saree - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Qm,"../assets/products/Khand Saree - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":Zm,"../assets/products/Khand Saree - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":Jm,"../assets/products/Stoles - Border Silk Pallu Silk Body Cotton/2.jpeg":Ym,"../assets/products/Stoles - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":Xm,"../assets/products/Stoles - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":qm,"../assets/products/Stoles - Border Silk Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":eg,"../assets/products/Stoles - Border Silk by Cotton/2.jpeg":tg,"../assets/products/Stoles - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":ng,"../assets/products/Stoles - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":rg,"../assets/products/Stoles - Border Silk by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":lg,"../assets/products/Stoles - Cotton by Cotton/2.jpeg":og,"../assets/products/Stoles - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":ag,"../assets/products/Stoles - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":ig,"../assets/products/Stoles - Cotton by Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":sg,"../assets/products/Stoles - Pallu Silk Body Cotton/2.jpeg":ug,"../assets/products/Stoles - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":cg,"../assets/products/Stoles - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":dg,"../assets/products/Stoles - Pallu Silk Body Cotton/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":fg,"../assets/products/Stoles - Silk by Silk/2.jpeg":pg,"../assets/products/Stoles - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.30 PM.jpeg":hg,"../assets/products/Stoles - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.31 PM.jpeg":mg,"../assets/products/Stoles - Silk by Silk/WhatsApp Image 2026-09-05 at 8.06.32 PM.jpeg":gg})).sort(([e],[t])=>e.localeCompare(t)),Bt={};for(const[e,t]of Dg){const n=e.match(/products\/([^/]+)\//);if(!n)continue;const r=n[1];Bt[r]||(Bt[r]=[]),Bt[r].push(t)}function ld(e,t=0){const n=Bt[e]||[];return n.length===0?null:n[t%n.length]}function Fg(e){const t=`${e} - `;for(const n of Object.keys(Bt).sort())if(n.startsWith(t)&&Bt[n].length>0)return Bt[n][0];return null}const Gr=Object.entries(Object.assign({"../assets/carousel/1.jpeg":vg,"../assets/carousel/10.jpeg":yg,"../assets/carousel/11.jpeg":_g,"../assets/carousel/12.jpeg":kg,"../assets/carousel/13.jpeg":xg,"../assets/carousel/14.jpeg":wg,"../assets/carousel/15.jpeg":Sg,"../assets/carousel/16.jpeg":jg,"../assets/carousel/17.jpeg":Cg,"../assets/carousel/18.jpeg":Eg,"../assets/carousel/19.jpeg":Ng,"../assets/carousel/2.jpeg":Pg,"../assets/carousel/20.jpeg":Ig,"../assets/carousel/21.jpeg":bg,"../assets/carousel/3.jpeg":zg,"../assets/carousel/4.jpeg":Tg,"../assets/carousel/5.jpeg":Lg,"../assets/carousel/6.jpeg":Bg,"../assets/carousel/7.jpeg":Rg,"../assets/carousel/8.jpeg":Mg,"../assets/carousel/9.jpeg":Og})).sort(([e],[t])=>e.localeCompare(t)).map(([,e])=>e);function Ag(e){return Gr.length===0?null:Gr[e%Gr.length]}function Wg({slides:e}){const[t,n]=w.useState(0);return w.useEffect(()=>{const r=setInterval(()=>{n(l=>(l+1)%e.length)},3e3);return()=>clearInterval(r)},[e.length]),u.jsxs("div",{className:"carousel",role:"region","aria-label":"Featured sarees",children:[u.jsx("style",{children:`
.carousel {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  max-height: 640px;
  overflow: hidden;
  background: var(--color-maroon-dark);
}

.carousel__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.carousel__slide--active {
  opacity: 1;
}

.carousel__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__slide img.carousel__slide-img--contain {
  object-fit: contain;
  background: var(--color-maroon-dark);
}

.carousel__slide-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
  color: var(--color-blush);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.1rem;
  opacity: 0.6;
  text-align: center;
  padding: var(--space-4);
}

.carousel__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 8, 6, 0.75) 0%, rgba(20, 8, 6, 0) 45%);
}

.carousel__caption {
  position: absolute;
  right: var(--space-3);
  bottom: var(--space-4);
  text-align: right;
  max-width: 80%;
}

.carousel__caption h2 {
  color: var(--color-white);
  font-size: clamp(1.3rem, 5vw, 2.4rem);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.carousel__dots {
  position: absolute;
  left: 50%;
  bottom: var(--space-3);
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 0;
}

.carousel__dot--active {
  background: var(--color-gold);
  width: 22px;
}

@media (min-width: 768px) {
  .carousel {
    aspect-ratio: 21 / 9;
  }
  .carousel__caption {
    right: var(--space-6);
    bottom: var(--space-6);
  }
}
      `}),e.map((r,l)=>u.jsxs("div",{className:`carousel__slide ${l===t?"carousel__slide--active":""}`,children:[r.image?u.jsx("img",{src:r.image,alt:r.title,className:"carousel__slide-img--contain"}):u.jsx("div",{className:"carousel__slide-placeholder",children:"Add images to src/assets/carousel/ to replace this placeholder"}),u.jsx("div",{className:"carousel__scrim"}),u.jsx("div",{className:"carousel__caption",children:u.jsx("h2",{children:r.title})})]},l)),u.jsx("div",{className:"carousel__dots",children:e.map((r,l)=>u.jsx("button",{className:`carousel__dot ${l===t?"carousel__dot--active":""}`,"aria-label":`Go to slide ${l+1}`,onClick:()=>n(l)},l))})]})}function Ug(e){return e.map((t,n)=>({title:t,image:Gr.length>0?Ag(n):null}))}const $g=[{name:"Gomi (Ilkal Dadi)",desc:"Angle-bracket shapes set between broad stripes — the most recognisable Ilkal border."},{name:"Chikki Paras",desc:"A row of small triangles arranged between wide bands of colour."},{name:"Zari / Jari",desc:"Fine embroidery worked in gold or silver-toned thread along the edge."},{name:"Gayathri",desc:"A newer border style, 2.5–4 inches wide, added to the traditional set."}],Vg=[{label:"Origin",value:"Ilkal town, Bagalkot district, Karnataka"},{label:"Tradition dates to",value:"~8th century AD"},{label:"GI Tag",value:"Granted in 2006"},{label:"Typical weave time",value:"5–10 days per saree, handloom"},{label:"Common lengths",value:"6, 8 and 9 yards"},{label:"Yarn combinations",value:"Cotton body with silk or art-silk pallu and border"}];function Hg(){return u.jsxs("section",{id:"ilkal-info",className:"ilkal-info",children:[u.jsx("style",{children:`
.ilkal-info {
  padding-block: var(--space-7);
  scroll-margin-top: calc(var(--header-height) + var(--space-3));
}

.ilkal-info__intro {
  text-align: center;
  max-width: 68ch;
  margin-inline: auto;
  margin-bottom: var(--space-6);
}

.ilkal-info__intro h2 {
  font-size: clamp(1.6rem, 4vw, 2.3rem);
  margin-block: var(--space-2) var(--space-3);
}

.ilkal-info__intro p {
  color: var(--color-charcoal-soft);
  font-size: 1.02rem;
}

.ilkal-technique__grid {
  display: grid;
  gap: var(--space-5);
  margin-bottom: var(--space-7);
}

.ilkal-technique h3 {
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  margin-bottom: var(--space-3);
}

.ilkal-technique p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-3);
  max-width: 62ch;
}

.ilkal-facts {
  background: var(--color-blush);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  align-self: start;
}

.ilkal-facts h4 {
  font-size: 1.05rem;
  margin-bottom: var(--space-3);
  color: var(--color-maroon-dark);
}

.ilkal-facts__row {
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  padding-block: var(--space-2);
  border-bottom: 1px solid rgba(110, 20, 35, 0.12);
  font-size: 0.85rem;
}

.ilkal-facts__row dt {
  color: var(--color-charcoal-soft);
  font-weight: 600;
}

.ilkal-facts__row dd {
  margin: 0;
  text-align: right;
  font-weight: 600;
  color: var(--color-maroon-dark);
}

.ilkal-borders__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  margin-bottom: var(--space-7);
}

.border-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  box-shadow: var(--shadow-card);
}

.border-card h4 {
  font-size: 1rem;
  color: var(--color-maroon);
  margin-bottom: var(--space-2);
}

.border-card p {
  font-size: 0.88rem;
  color: var(--color-charcoal-soft);
}

.ilkal-colour__grid {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

.ilkal-colour h3 {
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  margin-block: var(--space-2) var(--space-3);
}

.ilkal-colour p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-3);
  max-width: 60ch;
}

.ilkal-colour__swatches {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4 / 1;
}

.ilkal-colour__swatches span {
  display: block;
  height: 100%;
}

.ilkal-info__sources {
  font-size: 0.75rem;
  color: var(--color-charcoal-soft);
  text-align: center;
  padding-top: var(--space-6);
}

@media (min-width: 768px) {
  .ilkal-technique__grid {
    grid-template-columns: 1.5fr 1fr;
  }

  .ilkal-borders__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .ilkal-colour__grid {
    grid-template-columns: 1fr 1.2fr;
  }
}
      `}),u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"ilkal-info__intro",children:[u.jsx("p",{className:"eyebrow",children:"Heritage & Craft"}),u.jsx("h2",{children:"The Ilkal Saree"}),u.jsx("p",{children:"A handloom tradition from the town of Ilkal in Karnataka's Bagalkot district, known for a joinery technique found nowhere else in Indian weaving — and for borders bold enough to be recognised at a glance."})]}),u.jsxs("div",{className:"ilkal-technique__grid",children:[u.jsxs("div",{className:"ilkal-technique",children:[u.jsx("h3",{children:"The Tope Teni technique"}),u.jsx("p",{children:"In almost every other Indian saree, the body and the pallu are woven as one continuous piece of fabric. An Ilkal saree is woven differently: the body, the border and the pallu are each woven separately, then joined by hand using a series of small interlocking loops — a method called Tope Teni, or the looping technique."}),u.jsx("p",{children:'The join is done on a traditional pit loom (locally called a "kuni magga"), using three shuttles and two contrasting yarn colours. The result is a saree with a distinct, almost temple-shaped structure where the pallu meets the body — the exact motif this site borrows for its own dividing lines.'})]}),u.jsxs("div",{className:"ilkal-facts",children:[u.jsx("h4",{children:"Quick Facts"}),u.jsx("dl",{children:Vg.map(e=>u.jsxs("div",{className:"ilkal-facts__row",children:[u.jsx("dt",{children:e.label}),u.jsx("dd",{children:e.value})]},e.label))})]})]}),u.jsxs("div",{className:"section__heading",children:[u.jsx("p",{className:"eyebrow",children:"Reading The Fabric"}),u.jsx("h3",{style:{marginTop:"8px"},children:"Four traditional border styles"})]}),u.jsx("div",{className:"ilkal-borders__grid",children:$g.map(e=>u.jsxs("div",{className:"border-card",children:[u.jsx("h4",{children:e.name}),u.jsx("p",{children:e.desc})]},e.name))}),u.jsxs("div",{className:"ilkal-colour__grid",children:[u.jsxs("div",{className:"ilkal-colour__swatches","aria-hidden":"true",children:[u.jsx("span",{style:{background:"#6e1423"}}),u.jsx("span",{style:{background:"#c9a227"}}),u.jsx("span",{style:{background:"#0f4c46"}}),u.jsx("span",{style:{background:"#f3e4e1"}})]}),u.jsxs("div",{className:"ilkal-colour",children:[u.jsx("p",{className:"eyebrow",children:"Colour & Pattern"}),u.jsx("h3",{children:"Deep reds, bold contrast, agricultural motifs"}),u.jsx("p",{children:"Ilkal pallus are traditionally built from bold red and white bands in simple, striking geometric patterns. The best-known pattern is called Tope Teni, said to echo the look of a jowar (sorghum) crop. Some sarees add Kasuti embroidery, a folk needlework style from Karnataka, worked into motifs like temple chariots, elephants and lotus flowers."}),u.jsx("p",{children:"Historically, an Ilkal saree marked more than an occasion — it was considered a sign of a woman's standing and inner strength, and it's still worn today for weddings, festivals and temple ceremonies across North Karnataka."})]})]}),u.jsx("p",{className:"ilkal-info__sources",children:"Sources: Incredible India (Ministry of Tourism), Wikipedia — Ilkal sari, and independent heritage and craft publications on Ilkal weaving."})]})]})}function Kg({category:e}){const t=Fg(e.name);return u.jsxs(Q,{to:`/all-saree/${e.id}`,className:"category-card",children:[u.jsx("style",{children:`
.category-card {
  position: relative;
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  isolation: isolate;
  background: var(--color-blush);
  z-index: 1;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.category-card:hover img,
.category-card:focus-visible img {
  transform: scale(1.06);
}

/* Empty-state: a single self-contained box, not layered under anything else. */
.category-card__empty {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
  padding: var(--space-3);
}

.category-card__empty h3 {
  color: var(--color-maroon-dark);
  font-size: 1.2rem;
}

.category-card__empty p {
  font-size: 0.78rem;
  color: var(--color-charcoal-soft);
  max-width: 22ch;
}

.category-card__empty small {
  font-size: 0.68rem;
  color: var(--color-charcoal-soft);
  opacity: 0.7;
  margin-top: var(--space-2);
}

/* Image-state: gradient + text overlaid on the photo. Only ever rendered
   together with the <img>, never with the empty-state block above, so
   there is nothing for it to visually collide with. */
.category-card__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-3);
  background: linear-gradient(to top, rgba(42, 21, 15, 0.85) 0%, rgba(42, 21, 15, 0) 60%);
  color: var(--color-white);
}

.category-card__overlay h3 {
  color: var(--color-white);
  font-size: 1.3rem;
}

.category-card__overlay p {
  font-size: 0.82rem;
  opacity: 0.9;
  margin-top: 2px;
}
`}),t?u.jsxs(u.Fragment,{children:[u.jsx("img",{src:t,alt:e.name,loading:"lazy"}),u.jsxs("div",{className:"category-card__overlay",children:[u.jsx("h3",{children:e.name}),u.jsx("p",{children:e.tagline})]})]}):u.jsxs("div",{className:"category-card__empty",children:[u.jsx("h3",{children:e.name}),u.jsx("p",{children:e.tagline}),u.jsxs("small",{children:['Add images to any "',e.name,' - ..." folder in src/assets/products/']})]})]})}const Br=[{id:"silk-by-silk",name:"Silk by Silk"},{id:"cotton-by-cotton",name:"Cotton by Cotton"},{id:"border-silk-by-cotton",name:"Border Silk by Cotton"},{id:"pallu-silk-body-cotton",name:"Pallu Silk Body Cotton"},{id:"border-silk-pallu-silk-body-cotton",name:"Border Silk Pallu Silk Body Cotton"}],si=[{id:"ilkal-saree",name:"Ilkal Saree",tagline:"Traditional Tope Teni handloom sarees from Karnataka",subcategories:Br},{id:"khand-saree",name:"Khand Saree",tagline:"Classic khand weave sarees, handcrafted on the loom",subcategories:Br},{id:"duppata",name:"Duppata",tagline:"Handwoven duppatas in silk and cotton blends",subcategories:Br},{id:"stoles",name:"Stoles",tagline:"Lightweight handloom stoles for everyday and festive wear",subcategories:Br}];function Gg(){const e=[];for(const t of si)for(const n of t.subcategories){const r=`${t.name} - ${n.name}`;e.push({id:`${t.id}-${n.id}`,name:`${t.name} — ${n.name}`,category:t.id,subcategory:n.id,folderName:r,description:`A handwoven ${t.name.toLowerCase()} in the "${n.name}" style — sample placeholder description, update with real product details later.`})}return e}const od=Gg();function Qg(e){return od.find(t=>t.id===e)}function ad(e){return si.find(t=>t.id===e)}function id(e,t){var r;const n=ad(e);return((r=n==null?void 0:n.subcategories.find(l=>l.id===t))==null?void 0:r.name)||t}const sd=w.createContext(null);function Zg({children:e}){const t={products:od,categories:si,getProductById:Qg,getCategoryById:ad,getSubcategoryName:id};return u.jsx(sd.Provider,{value:t,children:e})}function ui(){const e=w.useContext(sd);if(!e)throw new Error("useCatalog must be used within a CatalogProvider");return e}const Jg=["Culture Traditional Ilkal Saree","Handwoven Ilkal Sarees","Traditional Khand Weaves","Duppatas & Stoles","Crafted by Karnataka Weavers"];function Yg(){const{categories:e}=ui(),t=kn();w.useEffect(()=>{if(t.hash==="#ilkal-info"){const r=document.getElementById("ilkal-info");r&&r.scrollIntoView({behavior:"smooth"})}},[t]);const n=Ug(Jg);return u.jsxs("div",{className:"page",children:[u.jsx("style",{children:`
.section {
  padding-block: var(--space-7);
}

.section--tint {
  background: var(--color-blush);
}

.section__heading {
  margin-bottom: var(--space-5);
  text-align: center;
}

.section__heading h2 {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-top: var(--space-1);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.home-contact {
  background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-4);
  text-align: center;
}

.home-contact h2 {
  color: var(--color-white);
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-2) var(--space-3);
}

.home-contact p {
  color: var(--color-blush);
  max-width: 60ch;
  margin-inline: auto;
  margin-bottom: var(--space-4);
}

.home-contact__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
}

.home-contact .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}

.home-contact .btn-outline:hover {
  background: var(--color-white);
  color: var(--color-maroon);
}

@media (min-width: 640px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .category-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
      `}),u.jsx(Wg,{slides:n}),u.jsx(Hg,{}),u.jsx("div",{className:"temple-border"}),u.jsxs("section",{className:"section container",children:[u.jsxs("div",{className:"section__heading",children:[u.jsx("p",{className:"eyebrow",children:"Browse"}),u.jsx("h2",{children:"Shop by Category"})]}),u.jsx("div",{className:"category-grid",children:e.map(r=>u.jsx(Kg,{category:r},r.id))})]}),u.jsx("section",{className:"section section--tint container",children:u.jsxs("div",{className:"home-contact",children:[u.jsx("p",{className:"eyebrow",style:{color:"var(--color-gold-light)"},children:"Get In Touch"}),u.jsx("h2",{children:"Visit, call or message us"}),u.jsx("p",{children:"Reach out on Facebook, Instagram, phone or email — or find us on the map. We'll be adding online ordering soon; for now, get in touch directly for enquiries."}),u.jsxs("div",{className:"home-contact__row",children:[u.jsx(Q,{to:"/all-saree",className:"btn btn-gold",children:"Browse All Saree"}),u.jsx(Q,{to:"/about",className:"btn btn-outline",children:"About Us"})]})]})})]})}const Xg="/Ilkal_Saree/assets/1-BTBcYTb7.jpeg",qg="/Ilkal_Saree/assets/family-outside-shop-CJ956wew.jpeg",ev="/Ilkal_Saree/assets/family-inside-workshop-1-B4d9FKo-.jpeg",tv="/Ilkal_Saree/assets/family-inside-workshop-2-CI9S3Vib.jpeg",nv="/Ilkal_Saree/assets/kumaraswamy-visit-NmqN6qSy.jpeg",rv="/Ilkal_Saree/assets/skv-logo-BfJIM2CJ.png",lv="/Ilkal_Saree/assets/project-weavers-with-fabric-Bx5QPD2i.jpeg",ov="/Ilkal_Saree/assets/project-loom-training-Ctq4USiq.png",av=[{title:"Authenticity",desc:"Bringing genuine, traditionally woven Ilkal sarees to our customers."},{title:"Quality",desc:"Choosing sarees with care — attention to fabric, weaving, colour and finishing."},{title:"Tradition",desc:"Respecting the heritage and craftsmanship behind every saree."},{title:"Trust",desc:"Building long-lasting relationships with our customers through honest service."},{title:"Supporting Handloom",desc:"Helping preserve handloom weaving skills by promoting traditional sarees."}];function iv(){return u.jsxs("div",{className:"page about",children:[u.jsx("style",{children:`
.about-hero {
  background: linear-gradient(160deg, var(--color-blush) 0%, var(--color-ivory) 55%);
  padding-block: var(--space-6) var(--space-5);
}

.about-hero__grid {
  display: grid;
  gap: var(--space-5);
}

.about-hero h1 {
  font-size: clamp(1.9rem, 5vw, 3rem);
  margin-block: var(--space-2) var(--space-3);
}

.about-hero__lede {
  color: var(--color-charcoal-soft);
  max-width: 60ch;
  font-size: 1.05rem;
}

.about-hero__image img {
  width: 100%;
  border-radius: var(--radius-md);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  box-shadow: var(--shadow-hover);
}

.about-founder__grid,
.about-family__grid {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

.about-founder {
  padding-block: var(--space-7);
}

.about-founder h2,
.about-family h2 {
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-2) var(--space-3);
}

.about-founder p,
.about-family p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-3);
  max-width: 60ch;
}

.about-founder__images img {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-family {
  background: var(--color-blush);
  padding-block: var(--space-7);
}

.about-family__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

.about-family__images img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.about-beliefs {
  padding-block: var(--space-7);
}

.about-beliefs__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.belief-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  box-shadow: var(--shadow-card);
  border-top: 3px solid var(--color-gold);
}

.belief-card h3 {
  color: var(--color-maroon);
  font-size: 1.15rem;
  margin-bottom: var(--space-2);
}

.belief-card p {
  color: var(--color-charcoal-soft);
  font-size: 0.92rem;
}

.about-vision {
  background: var(--color-maroon-dark);
  color: var(--color-blush);
  padding-block: var(--space-7);
  text-align: center;
}

.about-vision__inner {
  max-width: 720px;
}

.about-vision h2 {
  color: var(--color-white);
  font-size: clamp(1.5rem, 3.6vw, 2.2rem);
  margin-block: var(--space-2) var(--space-4);
}

.about-vision__signature {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.15rem;
  color: var(--color-gold-light);
  line-height: 1.6;
  margin-bottom: var(--space-5);
}

.about-vision__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
}

.btn-outline--light {
  border-color: var(--color-blush);
  color: var(--color-blush);
}

.btn-outline--light:hover {
  background: var(--color-blush);
  color: var(--color-maroon-dark);
}

.about-skv {
  padding-block: var(--space-7);
}

.about-skv__intro {
  text-align: center;
  max-width: 68ch;
  margin-inline: auto;
  margin-bottom: var(--space-5);
}

.about-skv__logo {
  width: 100px;
  margin-inline: auto;
  margin-bottom: var(--space-3);
}

.about-skv__intro h2 {
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-1) var(--space-3);
}

.about-skv__intro p,
.about-skv__body p {
  color: var(--color-charcoal-soft);
}

.about-skv__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.about-skv__grid img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-skv__body {
  max-width: 68ch;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.about-moment {
  background: var(--color-blush);
  padding-block: var(--space-7);
}

.about-moment__grid {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

.about-moment__grid img {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-moment h2 {
  font-size: clamp(1.5rem, 3.6vw, 2.1rem);
  margin-block: var(--space-2) var(--space-3);
}

.about-moment p {
  color: var(--color-charcoal-soft);
  max-width: 55ch;
}

@media (min-width: 768px) {
  .about-hero__grid {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }

  .about-founder__grid {
    grid-template-columns: 1fr 1.1fr;
  }

  .about-family__grid {
    grid-template-columns: 1fr 1.1fr;
  }

  .about-beliefs__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .about-moment__grid {
    grid-template-columns: 0.9fr 1.1fr;
  }
}

@media (min-width: 1024px) {
  .about-beliefs__grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
`}),u.jsx("section",{className:"about-hero",children:u.jsxs("div",{className:"container about-hero__grid",children:[u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"Our Story"}),u.jsx("h1",{children:"Woven with tradition. Made with love."}),u.jsx("p",{className:"about-hero__lede",children:"Welcome to Culture Traditional Ilkal Saree — a place where tradition, craftsmanship and the beauty of Indian handloom come together. Our journey began with a simple dream: to bring the timeless beauty of authentic Ilkal sarees to every woman who loves and respects our traditional culture."}),u.jsx("p",{className:"about-hero__lede",children:"Ilkal sarees are more than just beautiful garments. They carry the skill, dedication and heritage of generations of handloom weavers — every saree tells a story through its colours, patterns, traditional borders and distinctive Tope Teni weaving technique. Wearing an Ilkal saree isn't simply wearing a piece of clothing — it's carrying a part of our culture and heritage with you."})]}),u.jsx("div",{className:"about-hero__image",children:u.jsx("img",{src:Xg,alt:"Dashartha R. Hoti weaving at a traditional pit loom"})})]})}),u.jsx("div",{className:"temple-border"}),u.jsx("section",{className:"section container about-founder",children:u.jsxs("div",{className:"about-founder__grid",children:[u.jsx("div",{className:"about-founder__images",children:u.jsx("img",{src:ev,alt:"The Hoti family and weaving team seated together in the workshop"})}),u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"30+ Years of Handloom Tradition"}),u.jsx("h2",{children:"The story of Dashartha R. Hoti"}),u.jsx("p",{children:"Culture Traditional Ilkal Saree is more than a saree business — it is the journey of Dashartha R. Hoti, a passionate handloom weaver with more than 30 years of experience. For over three decades he has worked at the loom with patience, skill and love for the craft, learning that a saree isn't simply made with yarn and colour — it's made with time, patience, craftsmanship and tradition."}),u.jsx("p",{children:"Today he continues to weave traditional Ilkal sarees while also creating new designs inspired by the heritage of our culture — bringing handwoven sarees directly to people who appreciate authentic craftsmanship and timeless Indian tradition. Behind every saree is the hand of a weaver, and behind those hands, 30+ years of experience and a deep respect for our traditional craft."}),u.jsx("p",{children:"Every saree we select is chosen with care, because we know you're not just buying a saree — you're choosing something for a festival, a family celebration, or a memory you'll keep. Our promise is to offer sarees that make you feel connected to tradition, confident in your style, and proud of our culture."})]})]})}),u.jsx("section",{className:"about-family",children:u.jsxs("div",{className:"container about-family__grid",children:[u.jsxs("div",{className:"about-family__images",children:[u.jsx("img",{src:qg,alt:"The Hoti weaving family and community outside their workshop in Kamatagi"}),u.jsx("img",{src:tv,alt:"Family members and weavers gathered inside the workshop"})]}),u.jsxs("div",{className:"about-family__copy",children:[u.jsx("p",{className:"eyebrow",children:"A Family Tradition, Woven by Hand"}),u.jsx("h2",{children:"More than 15 hands keep this craft alive"}),u.jsx("p",{children:"Our journey isn't just about sarees — it's about family, tradition, hard work and the art of handloom weaving. For generations our family has been connected to traditional Ilkal weaving, and today more than 15 skilled members of our family and weaving community work together, carrying the craft forward with dedication and pride."}),u.jsx("p",{children:"Our master weavers carefully select the yarn, prepare the loom, and weave each saree with patience and attention to detail. Every saree takes time, skill and countless hours of handwork — because behind every saree is the hand of a weaver, and behind those hands, 30+ years of experience."})]})]})}),u.jsxs("section",{className:"section container about-beliefs",children:[u.jsxs("div",{className:"section__heading",children:[u.jsx("p",{className:"eyebrow",children:"What We Believe"}),u.jsx("h2",{children:"The values behind every saree"})]}),u.jsx("div",{className:"about-beliefs__grid",children:av.map(e=>u.jsxs("div",{className:"belief-card",children:[u.jsx("h3",{children:e.title}),u.jsx("p",{children:e.desc})]},e.title))})]}),u.jsxs("section",{className:"section container about-skv",children:[u.jsxs("div",{className:"about-skv__intro",children:[u.jsx("img",{src:rv,alt:"Somaiya Kala Vidya",className:"about-skv__logo"}),u.jsx("p",{className:"eyebrow",children:"In Partnership With"}),u.jsx("h2",{children:"Somaiya Kala Vidya"}),u.jsx("p",{children:'Special thanks to Somaiya Kala Vidya for its invaluable support and guidance. Their "Bhujodi to Bagalkote" initiative brought an Artisan-to-Artisan design exchange to our village of Kamatagi — connecting our weavers with the artisan community of Bhujodi, Gujarat, to help traditional Ilkal weavers design for new markets while staying true to their craft.'})]}),u.jsxs("div",{className:"about-skv__grid",children:[u.jsx("img",{src:lv,alt:"Weavers from the Bhujodi to Bagalkote exchange holding handwoven fabric"}),u.jsx("img",{src:ov,alt:"Weavers and trainers working together at a traditional loom"})]}),u.jsxs("div",{className:"about-skv__body",children:[u.jsx("p",{children:"What began as a design exchange grew into something bigger. After years of continued engagement with weavers around Kamatagi, the community came together to request an independent design school for the artisans of North Karnataka. With support from the K J Somaiya Trust and Rohini Nilekani Philanthropies, Somaiya Kala Vidya – Bagalkote was born, welcoming its first class of students in March 2024."}),u.jsx("p",{children:"Somaiya Kala Vidya's goal is to help artisans build on their own traditional knowledge and increase the value of their craft — without necessarily increasing the cost of time or materials — so that Ilkal weaving remains a sustainable, respected livelihood for the next generation."})]})]}),u.jsx("section",{className:"about-moment",children:u.jsxs("div",{className:"container about-moment__grid",children:[u.jsx("img",{src:nv,alt:"Dashartha R. Hoti present during a visit to a Guledagudda handloom store"}),u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"A Special Memory"}),u.jsx("h2",{children:"A proud moment for our family"}),u.jsx("p",{children:"During a visit to the Hanamant Mavinmarada Handloom Store in Guledagudda, my father, Shri Dashartha R. Hoti, was present and had the chance to be personally acknowledged during the visit. It was a truly proud and memorable moment for our family — one we'll always carry with us."})]})]})}),u.jsx("section",{className:"about-vision",children:u.jsxs("div",{className:"container about-vision__inner",children:[u.jsx("p",{className:"eyebrow",children:"Our Vision"}),u.jsx("h2",{children:"To preserve our traditional Ilkal handloom heritage while creating beautiful new designs for today's generation."}),u.jsxs("p",{className:"about-vision__signature",children:["Our father's 30+ years of experience is our foundation.",u.jsx("br",{}),"Our creativity is our future.",u.jsx("br",{}),"And tradition will always be at the heart of our sarees."]}),u.jsxs("div",{className:"about-vision__actions",children:[u.jsx(Q,{to:"/all-saree",className:"btn btn-gold",children:"Shop Our Collection"}),u.jsx(Q,{to:"/#ilkal-info",className:"btn btn-outline btn-outline--light",children:"Learn About Ilkal Sarees"})]})]})})]})}function ud({product:e}){const t=ld(e.folderName);return u.jsxs(Q,{to:`/product/${e.id}`,className:"product-card",children:[u.jsx("style",{children:`
.product-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;
  z-index: 1;
}

.product-card:hover,
.product-card:focus-visible {
  box-shadow: var(--shadow-hover);
  z-index: 2;
  transform: translateY(-3px);
}

.product-card__image-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--color-blush);
}

.product-card__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-3);
  color: var(--color-maroon-dark);
  font-size: 0.75rem;
  opacity: 0.6;
}

.product-card__body {
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.product-card__subcategory {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-teal);
}

.product-card__name {
  font-size: 1.05rem;
  color: var(--color-charcoal);
  font-weight: 600;
}
      `}),u.jsx("div",{className:"product-card__image-wrap",children:t?u.jsx("img",{src:t,alt:e.name,loading:"lazy"}):u.jsx("div",{className:"product-card__placeholder",children:"Photo coming soon"})}),u.jsxs("div",{className:"product-card__body",children:[u.jsx("p",{className:"product-card__subcategory",children:id(e.category,e.subcategory)}),u.jsx("h3",{className:"product-card__name",children:e.name})]})]})}function sv({categories:e,activeCategory:t,activeSubcategory:n,onSelectCategory:r,onSelectSubcategory:l,isOpen:o,onClose:a}){const i=e.find(s=>s.id===t);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
.filter-sidebar__scrim {
  position: fixed;
  inset: 0;
  background: rgba(42, 33, 28, 0.5);
  z-index: 199;
}

.filter-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: min(84vw, 320px);
  background: var(--color-white);
  z-index: 200;
  padding: var(--space-4);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
}

.filter-sidebar--open {
  transform: translateX(0);
}

.filter-sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.filter-sidebar__close {
  background: none;
  border: none;
  font-size: 1.1rem;
}

.filter-sidebar__group {
  margin-bottom: var(--space-5);
}

.filter-sidebar__group h4 {
  font-family: var(--font-body);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-2);
}

.filter-sidebar__group ul li button {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 8px 0;
  font-size: 0.92rem;
  color: var(--color-charcoal);
}

.filter-sidebar__group ul li button.is-active {
  color: var(--color-maroon);
  font-weight: 700;
}

.filter-sidebar__group input[type='range'] {
  width: 100%;
  accent-color: var(--color-maroon);
}

/* Desktop: docked column, no drawer/scrim behaviour */
@media (min-width: 900px) {
  .filter-sidebar__scrim {
    display: none;
  }

  .filter-sidebar {
    position: static;
    transform: none;
    width: 100%;
    box-shadow: var(--shadow-card);
    border-radius: var(--radius-md);
    padding: var(--space-4);
  }

  .filter-sidebar__header {
    display: none;
  }
}
`}),o&&u.jsx("div",{className:"filter-sidebar__scrim",onClick:a}),u.jsxs("aside",{className:`filter-sidebar ${o?"filter-sidebar--open":""}`,children:[u.jsxs("div",{className:"filter-sidebar__header",children:[u.jsx("h3",{children:"Filters"}),u.jsx("button",{className:"filter-sidebar__close",onClick:a,"aria-label":"Close filters",children:"✕"})]}),u.jsxs("div",{className:"filter-sidebar__group",children:[u.jsx("h4",{children:"Category"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("button",{className:t?"":"is-active",onClick:()=>r(null),children:"All Sarees"})}),e.map(s=>u.jsx("li",{children:u.jsx("button",{className:t===s.id?"is-active":"",onClick:()=>r(s.id),children:s.name})},s.id))]})]}),i&&u.jsxs("div",{className:"filter-sidebar__group",children:[u.jsxs("h4",{children:[i.name," — Type"]}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("button",{className:n?"":"is-active",onClick:()=>l(null),children:"All Types"})}),i.subcategories.map(s=>u.jsx("li",{children:u.jsx("button",{className:n===s.id?"is-active":"",onClick:()=>l(s.id),children:s.name})},s.id))]})]})]})]})}function Ps(){const{categoryId:e}=Xc(),{categories:t,products:n}=ui(),[r,l]=w.useState(null),[o,a]=w.useState(!1),i=t.find(m=>m.id===e),s=w.useMemo(()=>{let m=n;return e&&(m=m.filter(h=>h.category===e)),r&&(m=m.filter(h=>h.subcategory===r)),m},[n,e,r]);function c(m){window.location.href=m?`/all-saree/${m}`:"/all-saree"}return u.jsxs("div",{className:"page all-saree",children:[u.jsx("style",{children:`
.all-saree__banner {
  padding-block: var(--space-5) var(--space-4);
  border-bottom: 1px solid var(--color-blush);
}

.all-saree__banner h1 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin-top: var(--space-1);
}

.all-saree__layout {
  display: grid;
  gap: var(--space-4);
  padding-block: var(--space-5) var(--space-7);
}

.all-saree__toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
}

.all-saree__count {
  color: var(--color-charcoal-soft);
  font-size: 0.9rem;
}

.all-saree__filter-btn {
  padding: 10px 18px;
}

.all-saree__empty {
  text-align: center;
  padding-block: var(--space-7);
  color: var(--color-charcoal-soft);
}

.all-saree__empty h3 {
  color: var(--color-maroon-dark);
  margin-bottom: var(--space-2);
}

.all-saree .product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

@media (min-width: 640px) {
  .all-saree .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 900px) {
  .all-saree__layout {
    grid-template-columns: 240px 1fr;
    align-items: start;
  }
  .all-saree__filter-btn {
    display: none;
  }
}

@media (min-width: 1280px) {
  .all-saree .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
      `}),u.jsxs("div",{className:"all-saree__banner container",children:[u.jsx("p",{className:"eyebrow",children:i?i.name:"All Sarees"}),u.jsx("h1",{children:i?i.tagline:"Browse The Full Collection"})]}),u.jsxs("div",{className:"container all-saree__layout",children:[u.jsx(sv,{categories:t,activeCategory:e||null,activeSubcategory:r,onSelectCategory:c,onSelectSubcategory:l,isOpen:o,onClose:()=>a(!1)}),u.jsxs("div",{children:[u.jsxs("div",{className:"all-saree__toolbar",children:[u.jsx("button",{className:"btn btn-outline all-saree__filter-btn",onClick:()=>a(!0),children:"Filters"}),u.jsxs("p",{className:"all-saree__count",children:[s.length," sarees"]})]}),s.length===0?u.jsxs("div",{className:"all-saree__empty",children:[u.jsx("h3",{children:"No sarees match those filters"}),u.jsx("p",{children:"Try a different category or type."})]}):u.jsx("div",{className:"product-grid",children:s.map(m=>u.jsx(ud,{product:m},m.id))})]})]})]})}const Is=`
.breadcrumb {
  padding-block: var(--space-4) var(--space-2);
  font-size: 0.8rem;
  color: var(--color-charcoal-soft);
  text-transform: capitalize;
}

.breadcrumb a:hover {
  color: var(--color-maroon);
}

.product-detail__grid {
  display: grid;
  gap: var(--space-5);
  padding-block: var(--space-3) var(--space-7);
}

.product-detail__image img {
  width: 100%;
  border-radius: var(--radius-md);
  aspect-ratio: 3 / 4;
  object-fit: cover;
  box-shadow: var(--shadow-card);
}

.product-detail__image-placeholder {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-md);
  background: var(--color-blush);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-4);
  color: var(--color-maroon-dark);
  opacity: 0.6;
}

.product-detail__info h1 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin-block: var(--space-2) var(--space-3);
}

.product-detail__desc {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-5);
  max-width: 60ch;
}

.product-detail__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.product-detail__facts {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-size: 0.88rem;
  color: var(--color-charcoal-soft);
}

.product-detail__related {
  padding-block: var(--space-6) var(--space-7);
  border-top: 1px solid var(--color-blush);
}

.product-detail__related h2 {
  font-size: 1.6rem;
  margin-bottom: var(--space-4);
}

.product-detail__related .product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.empty-state {
  text-align: center;
  padding-block: var(--space-8);
}

.empty-state h2 {
  margin-bottom: var(--space-2);
}

.empty-state p {
  color: var(--color-charcoal-soft);
  margin-bottom: var(--space-4);
}

@media (min-width: 768px) {
  .product-detail__grid {
    grid-template-columns: 1fr 1fr;
  }
  .product-detail__related .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
`;function uv(){const{productId:e}=Xc(),{getProductById:t,getSubcategoryName:n,products:r}=ui(),l=t(e);if(!l)return u.jsxs("div",{className:"page container empty-state",children:[u.jsx("style",{children:Is}),u.jsx("h2",{children:"Saree not found"}),u.jsx("p",{children:"The link may be incorrect."}),u.jsx(Q,{to:"/all-saree",className:"btn btn-primary",children:"Back to All Saree"})]});const o=ld(l.folderName),a=r.filter(i=>i.category===l.category&&i.id!==l.id).slice(0,4);return u.jsxs("div",{className:"page container product-detail",children:[u.jsx("style",{children:Is}),u.jsxs("nav",{className:"breadcrumb","aria-label":"Breadcrumb",children:[u.jsx(Q,{to:"/",children:"Home"})," / ",u.jsx(Q,{to:`/all-saree/${l.category}`,children:l.category})," / ",l.name]}),u.jsxs("div",{className:"product-detail__grid",children:[u.jsx("div",{className:"product-detail__image",children:o?u.jsx("img",{src:o,alt:l.name}):u.jsxs("div",{className:"product-detail__image-placeholder",children:["Add images to src/assets/products/",l.folderName,"/"]})}),u.jsxs("div",{className:"product-detail__info",children:[u.jsx("p",{className:"eyebrow",children:n(l.category,l.subcategory)}),u.jsx("h1",{children:l.name}),u.jsx("p",{className:"product-detail__desc",children:l.description}),u.jsxs("div",{className:"product-detail__actions",children:[u.jsx("a",{href:"tel:+919000000000",className:"btn btn-primary",children:"Call to Enquire"}),u.jsx("a",{href:"mailto:culturetraditionalilkalsaree@gmail.com",className:"btn btn-outline",children:"Email Us"})]}),u.jsxs("ul",{className:"product-detail__facts",children:[u.jsx("li",{children:"✓ 100% authentic handloom, sourced directly from weavers"}),u.jsx("li",{children:"✓ Contact us for availability, pricing and custom orders"}),u.jsx("li",{children:"✓ Photos are representative — actual weave and colour may vary slightly"})]})]})]}),a.length>0&&u.jsxs("section",{className:"product-detail__related",children:[u.jsx("h2",{children:"You may also like"}),u.jsx("div",{className:"product-grid",children:a.map(i=>u.jsx(ud,{product:i},i.id))})]})]})}function cv(){return u.jsxs("div",{className:"page container",style:{textAlign:"center",paddingBlock:"96px"},children:[u.jsx("h1",{style:{fontSize:"3rem"},children:"404"}),u.jsx("p",{style:{color:"var(--color-charcoal-soft)",margin:"16px 0 24px"},children:"This page doesn't exist, or the saree you're looking for has been unwoven."}),u.jsx(Q,{to:"/",className:"btn btn-primary",children:"Back to Home"})]})}function dv(){return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
/* =========================================================
   DESIGN TOKENS
   Palette drawn from silk saree materials:
   maroon (kanjeevaram silk), antique gold (zari thread),
   ivory (undyed silk), deep teal (contrast border thread)
   ========================================================= */
:root {
  --color-maroon: #6e1423;
  --color-maroon-dark: #4a0d18;
  --color-gold: #c9a227;
  --color-gold-light: #e6c866;
  --color-ivory: #fbf6ed;
  --color-blush: #f3e4e1;
  --color-teal: #0f4c46;
  --color-charcoal: #2a211c;
  --color-charcoal-soft: #5c5049;
  --color-white: #ffffff;
  --color-error: #b3261e;
  --color-success: #2e6b3e;

  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Work Sans', sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;

  --container-max: 1280px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 96px;

  --shadow-card: 0 4px 20px rgba(42, 33, 28, 0.08);
  --shadow-hover: 0 10px 30px rgba(42, 33, 28, 0.14);

  --header-height: 68px;
}

/* =========================================================
   RESET
   ========================================================= */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--color-ivory);
  color: var(--color-charcoal);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.15;
  margin: 0;
  color: var(--color-maroon-dark);
}

p {
  margin: 0;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

input, select, textarea {
  font-family: inherit;
  font-size: 1rem;
}

/* Visible keyboard focus everywhere, always */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* =========================================================
   LAYOUT PRIMITIVES (used across all pages)
   ========================================================= */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-3);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-5);
  }
}

@media (min-width: 1280px) {
  .container {
    padding-inline: var(--space-6);
  }
}

.page {
  min-height: calc(100vh - var(--header-height));
}

/* Temple-border motif: the signature recurring divider,
   modelled on the woven zigzag border found on a saree. */
.temple-border {
  height: 14px;
  width: 100%;
  background:
    linear-gradient(135deg, var(--color-gold) 25%, transparent 25%) -7px 0,
    linear-gradient(225deg, var(--color-gold) 25%, transparent 25%) -7px 0;
  background-size: 14px 14px;
  background-color: transparent;
  opacity: 0.9;
}

.eyebrow {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-teal);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}

.btn:active {
  transform: translateY(1px);
}

.btn-primary {
  background: var(--color-maroon);
  color: var(--color-white);
}
.btn-primary:hover {
  background: var(--color-maroon-dark);
}

.btn-outline {
  background: transparent;
  border-color: var(--color-maroon);
  color: var(--color-maroon);
}
.btn-outline:hover {
  background: var(--color-maroon);
  color: var(--color-white);
}

.btn-gold {
  background: var(--color-gold);
  color: var(--color-charcoal);
}
.btn-gold:hover {
  background: var(--color-gold-light);
}

.btn-block {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
`}),u.jsx($h,{}),u.jsx("main",{children:u.jsxs(Ih,{children:[u.jsx(Pt,{path:"/",element:u.jsx(Yg,{})}),u.jsx(Pt,{path:"/about",element:u.jsx(iv,{})}),u.jsx(Pt,{path:"/all-saree",element:u.jsx(Ps,{})}),u.jsx(Pt,{path:"/all-saree/:categoryId",element:u.jsx(Ps,{})}),u.jsx(Pt,{path:"/product/:productId",element:u.jsx(uv,{})}),u.jsx(Pt,{path:"*",element:u.jsx(cv,{})})]})}),u.jsx(Vh,{})]})}go.createRoot(document.getElementById("root")).render(u.jsx(As.StrictMode,{children:u.jsx(Oh,{children:u.jsx(Zg,{children:u.jsx(dv,{})})})}));
