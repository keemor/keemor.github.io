!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),u=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:"type"},n.onInput=n.onInput.bind(n),n}return i(t,e),l(t,[{key:"onInput",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(e,t){var n=t.text;return(0,a.h)("div",null,(0,a.h)("h2",null,"Hello: ",(0,a.h)("input",{value:n,onInput:this.onInput})),(0,a.h)("h2",null,"Hello: ",(0,a.h)("span",null,n," ")))}}]),t}(a.Component);(0,a.render)((0,a.h)(u,null),document.body)},function(e,t,n){"use strict";function o(){}function r(e,t){var n,r,i,l,a=W;for(l=arguments.length;l-- >2;)B.push(arguments[l]);for(t&&null!=t.children&&(B.length||B.push(t.children),delete t.children);B.length;)if((r=B.pop())&&void 0!==r.pop)for(l=r.length;l--;)B.push(r[l]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(i=!1)),i&&n?a[a.length-1]+=r:a===W?a=[r]:a.push(r),n=i;var u=new o;return u.nodeName=e,u.children=a,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==L.vnode&&L.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==V.push(e)&&(L.debounceRendering||I)(u)}function u(){var e,t=V;for(V=[];e=t.pop();)e._dirty&&U(e)}function p(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function s(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"===(void 0===o?"undefined":j(o))){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===H.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,m,l):e.removeEventListener(t,m,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)_(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function _(e,t,n){try{e[t]=n}catch(e){}}function m(e){return this._listeners[e.type](L.event&&L.event(e)||e)}function h(){for(var e;e=A.pop();)L.afterMount&&L.afterMount(e),e.componentDidMount&&e.componentDidMount()}function y(e,t,n,o,r,i){D++||(R=null!=r&&void 0!==r.ownerSVGElement,z=null!=e&&!("__preactattr_"in e));var l=b(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--D||(z=!1,i||h()),l}function b(e,t,n,o,r){var i=e,l=R;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return O(e,t,n,o);if(R="svg"===a||"foreignObject"!==a&&R,a=String(a),(!e||!c(e,a))&&(i=f(a,R),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0)}var u=i.firstChild,p=i.__preactattr_,s=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,v=d.length;v--;)p[d[v].name]=d[v].value}return!z&&s&&1===s.length&&"string"==typeof s[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=s[0]&&(u.nodeValue=s[0]):(s&&s.length||null!=u)&&g(i,s,n,o,z||null!=p.dangerouslySetInnerHTML),w(i,t.attributes,p),R=l,i}function g(e,t,n,o,r){var i,l,a,u,c,s=e.childNodes,f=[],v={},_=0,m=0,h=s.length,y=0,g=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var w=s[x],N=w.__preactattr_,k=g&&N?w._component?w._component.__key:N.key:null;null!=k?(_++,v[k]=w):(N||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(f[y++]=w)}if(0!==g)for(var x=0;x<g;x++){u=t[x],c=null;var k=u.key;if(null!=k)_&&void 0!==v[k]&&(c=v[k],v[k]=void 0,_--);else if(!c&&m<y)for(i=m;i<y;i++)if(void 0!==f[i]&&p(l=f[i],u,r)){c=l,f[i]=void 0,i===y-1&&y--,i===m&&m++;break}c=b(c,u,n,o),a=s[x],c&&c!==e&&c!==a&&(null==a?e.appendChild(c):c===a.nextSibling?d(a):e.insertBefore(c,a))}if(_)for(var x in v)void 0!==v[x]&&C(v[x],!1);for(;m<=y;)void 0!==(c=f[y--])&&C(c,!1)}function C(e,t){var n=e._component;n?T(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}function w(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||v(e,o,n[o],n[o]=void 0,R);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||v(e,o,n[o],n[o]=t[o],R)}function N(e){var t=e.constructor.name;($[t]||($[t]=[])).push(e)}function k(e,t,n){var o,r=$[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):(o=new E(t,n),o.constructor=e,o.render=S),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function S(e,t,n){return this.constructor(e,n)}function P(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===L.syncComponentUpdates&&e.base?a(e):U(e,1,r)),e.__ref&&e.__ref(e))}function U(e,t,n,o){if(!e._disable){var r,l,a,u=e.props,p=e.state,c=e.context,f=e.prevProps||u,d=e.prevState||p,v=e.prevContext||c,_=e.base,m=e.nextBase,b=_||m,g=e._component,x=!1;if(_&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,p,c)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(u,p,c),e.props=u,e.state=p,e.context=c),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){r=e.render(u,p,c),e.getChildContext&&(c=i(i({},c),e.getChildContext()));var w,N,S=r&&r.nodeName;if("function"==typeof S){var O=s(r);l=g,l&&l.constructor===S&&O.key==l.__key?P(l,O,1,c,!1):(w=l,e._component=l=k(S,O,c),l.nextBase=l.nextBase||m,l._parentComponent=e,P(l,O,0,c,!1),U(l,1,n,!0)),N=l.base}else a=b,w=g,w&&(a=e._component=null),(b||1===t)&&(a&&(a._component=null),N=y(a,r,c,n||!_,b&&b.parentNode,!0));if(b&&N!==b&&l!==g){var E=b.parentNode;E&&N!==E&&(E.replaceChild(N,b),w||(b._component=null,C(b,!1)))}if(w&&T(w),e.base=N,N&&!o){for(var M=e,j=e;j=j._parentComponent;)(M=j).base=N;N._component=M,N._componentConstructor=M.constructor}}if(!_||n?A.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),L.afterUpdate&&L.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);D||o||h()}}function O(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,u=a,p=s(t);r&&!u&&(r=r._parentComponent);)u=r.constructor===t.nodeName;return r&&u&&(!o||r._component)?(P(r,p,3,n,o),e=r.base):(i&&!a&&(T(i),e=l=null),r=k(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),P(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,C(l,!1))),e}function T(e){L.beforeUnmount&&L.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?T(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),N(e),x(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function M(e,t,n){return y(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0});var j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L={},B=[],W=[],I="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,H=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,V=[],A=[],D=0,R=!1,z=!1,$={};i(E.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),U(this,2)},render:function(){}});var G={h:r,createElement:r,cloneElement:l,Component:E,render:M,rerender:u,options:L};t.h=r,t.createElement=r,t.cloneElement=l,t.Component=E,t.render=M,t.rerender=u,t.options=L,t.default=G}]);