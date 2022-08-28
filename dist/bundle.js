/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{h:()=>He});const t=new WeakMap,n=e=>(...n)=>{const i=e(...n);return t.set(i,!0),i},i=e=>"function"==typeof e&&t.has(e),s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},r={},o={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${c}`),p="$lit$";class h{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let a=0,r=-1,o=0;const{strings:c,values:{length:h}}=e;for(;o<h;){const e=s.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)u(t[e].name,p)&&i++;for(;i-- >0;){const t=c[o],n=g.exec(t)[2],i=n.toLowerCase()+p,s=e.getAttribute(i);e.removeAttribute(i);const a=s.split(d);this.parts.push({type:"attribute",index:r,name:n,strings:a}),o+=a.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const i=e.parentNode,s=t.split(d),a=s.length-1;for(let t=0;t<a;t++){let n,a=s[t];if(""===a)n=f();else{const e=g.exec(a);null!==e&&u(e[2],p)&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-p.length)+e[3]),n=document.createTextNode(a)}i.insertBefore(n,e),this.parts.push({type:"node",index:++r})}""===s[a]?(i.insertBefore(f(),e),n.push(e)):e.data=s[a],o+=a}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&r!==a||(r++,t.insertBefore(f(),e)),a=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(n.push(e),r--),o++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),o++}}else s.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const u=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class v{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let a,r=0,o=0,l=i.nextNode();for(;r<n.length;)if(a=n[r],m(a)){for(;o<a.index;)o++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,a.name,a.strings,this.options));r++}else this.__parts.push(void 0),r++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${l} `;class _{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const a=g.exec(e);t+=null===a?e+(n?w:c):e.substr(0,a.index)+a[1]+a[2]+p+a[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==y&&(t=y.createHTML(t)),e.innerHTML=t,e}}const b=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ${constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let i="";for(let s=0;s<t;s++){i+=e[s];const t=n[s];if(void 0!==t){const e=t.value;if(b(e)||!x(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||b(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}insertAfterPart(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(b(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===o?(this.value=o,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const n=new v(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const s of e)n=t[i],void 0===n&&(n=new E(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(s),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class P extends ${constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends N{}let S=!1;(()=>{try{const e={get capture(){return S=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=U(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const U=e=>e&&(S?{capture:e.capture,passive:e.passive,once:e.once}:e.capture),A=new class{handleAttributeExpressions(e,t,n,i){const s=t[0];return"."===s?new P(e,t.slice(1),n).parts:"@"===s?[new T(e,t.slice(1),i.eventContext)]:"?"===s?[new k(e,t.slice(1),n)]:new $(e,t,n).parts}handleTextExpression(e){return new E(e)}};function C(e){let t=L.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},L.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(l);return n=t.keyString.get(i),void 0===n&&(n=new h(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const L=new Map,R=new WeakMap;"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(e,...t)=>new _(e,t,"html",A),O=(e,t)=>{const n=e.startNode.parentNode,i=void 0===t?e.endNode:t.startNode,s=n.insertBefore(f(),i);n.insertBefore(f(),i);const a=new E(e.options);return a.insertAfterNode(s),a},Q=(e,t)=>(e.setValue(t),e.commit(),e),B=(e,t,n)=>{const i=e.startNode.parentNode,s=n?n.startNode:e.endNode,a=t.endNode.nextSibling;a!==s&&((e,t,n=null,i=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,i),t=n}})(i,t.startNode,a,s)},D=e=>{a(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},j=(e,t,n)=>{const i=new Map;for(let s=t;s<=n;s++)i.set(e[s],s);return i},H=new WeakMap,W=new WeakMap,q=n(((e,t,n)=>{let i;return void 0===n?n=t:void 0!==t&&(i=t),t=>{if(!(t instanceof E))throw new Error("repeat can only be used in text bindings");const s=H.get(t)||[],a=W.get(t)||[],r=[],o=[],l=[];let c,d,p=0;for(const t of e)l[p]=i?i(t,p):p,o[p]=n(t,p),p++;let h=0,u=s.length-1,m=0,f=o.length-1;for(;h<=u&&m<=f;)if(null===s[h])h++;else if(null===s[u])u--;else if(a[h]===l[m])r[m]=Q(s[h],o[m]),h++,m++;else if(a[u]===l[f])r[f]=Q(s[u],o[f]),u--,f--;else if(a[h]===l[f])r[f]=Q(s[h],o[f]),B(t,s[h],r[f+1]),h++,f--;else if(a[u]===l[m])r[m]=Q(s[u],o[m]),B(t,s[u],s[h]),u--,m++;else if(void 0===c&&(c=j(l,m,f),d=j(a,h,u)),c.has(a[h]))if(c.has(a[u])){const e=d.get(l[m]),n=void 0!==e?s[e]:null;if(null===n){const e=O(t,s[h]);Q(e,o[m]),r[m]=e}else r[m]=Q(n,o[m]),B(t,n,s[h]),s[e]=null;m++}else D(s[u]),u--;else D(s[h]),h++;for(;m<=f;){const e=O(t,r[f+1]);Q(e,o[m]),r[m++]=e}for(;h<=u;){const e=s[h++];null!==e&&D(e)}H.set(t,r),W.set(t,l)}})),M=new WeakMap,F=2147483647,z=n(((...e)=>t=>{let n=M.get(t);void 0===n&&(n={lastRenderedIndex:F,values:[]},M.set(t,n));const i=n.values;let s=i.length;n.values=e;for(let a=0;a<e.length&&!(a>n.lastRenderedIndex);a++){const r=e[a];if(b(r)||"function"!=typeof r.then){t.setValue(r),n.lastRenderedIndex=a;break}a<s&&r===i[a]||(n.lastRenderedIndex=F,s=0,Promise.resolve(r).then((e=>{const i=n.values.indexOf(r);i>-1&&i<n.lastRenderedIndex&&(n.lastRenderedIndex=i,t.setValue(e),t.commit())})))}}));var K=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},G=function e(t,n,i){return K(n=n||[])?i||(i={}):(i=n,n=[]),t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return se(e,t)}(t,n):K(t)?function(t,n,i){for(var s=[],a=0;a<t.length;a++)s.push(e(t[a],n,i).source);return se(new RegExp("(?:"+s.join("|")+")",ae(i)),n)}(t,n,i):function(e,t,n){for(var i=ee(e),s=re(i,n),a=0;a<i.length;a++)"string"!=typeof i[a]&&t.push(i[a]);return se(s,t)}(t,n,i)},Z=ee,J=te,X=re,Y=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function ee(e){for(var t,n=[],i=0,s=0,a="";null!=(t=Y.exec(e));){var r=t[0],o=t[1],l=t.index;if(a+=e.slice(s,l),s=l+r.length,o)a+=o[1];else{a&&(n.push(a),a="");var c=t[2],d=t[3],p=t[4],h=t[5],u=t[6],m=t[7],f="+"===u||"*"===u,g="?"===u||"*"===u,v=c||"/",y=p||h||(m?".*":"[^"+v+"]+?");n.push({name:d||i++,prefix:c||"",delimiter:v,optional:g,repeat:f,pattern:ie(y)})}}return s<e.length&&(a+=e.substr(s)),a&&n.push(a),n}function te(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(n){for(var i="",s=n||{},a=0;a<e.length;a++){var r=e[a];if("string"!=typeof r){var o,l=s[r.name];if(null==l){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to be defined')}if(K(l)){if(!r.repeat)throw new TypeError('Expected "'+r.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(o=encodeURIComponent(l[c]),!t[a].test(o))throw new TypeError('Expected all "'+r.name+'" to match "'+r.pattern+'", but received "'+o+'"');i+=(0===c?r.prefix:r.delimiter)+o}}else{if(o=encodeURIComponent(l),!t[a].test(o))throw new TypeError('Expected "'+r.name+'" to match "'+r.pattern+'", but received "'+o+'"');i+=r.prefix+o}}else i+=r}return i}}function ne(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ie(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function se(e,t){return e.keys=t,e}function ae(e){return e.sensitive?"":"i"}function re(e,t){for(var n=(t=t||{}).strict,i=!1!==t.end,s="",a=e[e.length-1],r="string"==typeof a&&/\/$/.test(a),o=0;o<e.length;o++){var l=e[o];if("string"==typeof l)s+=ne(l);else{var c=ne(l.prefix),d=l.pattern;l.repeat&&(d+="(?:"+c+d+")*"),s+=d=l.optional?c?"(?:"+c+"("+d+"))?":"("+d+")?":c+"("+d+")"}}return n||(s=(r?s.slice(0,-2):s)+"(?:\\/(?=$))?"),s+=i?"$":n&&r?"":"(?=\\/|$)",new RegExp("^"+s,ae(t))}G.parse=Z,G.compile=function(e){return te(ee(e))},G.tokensToFunction=J,G.tokensToRegExp=X;var oe,le="undefined"!=typeof document,ce="undefined"!=typeof window,de="undefined"!=typeof history,pe="undefined"!=typeof process,he=le&&document.ontouchstart?"touchstart":"click",ue=ce&&!(!window.history.location&&!window.location);function me(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function fe(e,t){if("function"==typeof e)return fe.call(this,"*",e);if("function"==typeof t)for(var n=new ye(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?this["string"==typeof t?"redirect":"show"](e,t):this.start(e)}function ge(e){if(!e.handled){var t=this,n=t._window;(t._hashbang?ue&&this._getBase()+n.location.hash.replace("#!",""):ue&&n.location.pathname+n.location.search)!==e.canonicalPath&&(t.stop(),e.handled=!1,ue&&(n.location.href=e.canonicalPath))}}function ve(e,t,n){var i=this.page=n||fe,s=i._window,a=i._hashbang,r=i._getBase();"/"===e[0]&&0!==e.indexOf(r)&&(e=r+(a?"#!":"")+e);var o=e.indexOf("?");this.canonicalPath=e;var l=new RegExp("^"+r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=e.replace(l,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=le&&s.document.title,this.state=t||{},this.state.path=e,this.querystring=~o?i._decodeURLEncodedURIComponent(e.slice(o+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~o?e.slice(0,o):e),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function ye(e,t,n){var i=this.page=n||we,s=t||{};s.strict=s.strict||i._strict,this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=G(this.path,this.keys=[],s)}me.prototype.configure=function(e){var t=e||{};this._window=t.window||ce&&window,this._decodeURLComponents=!1!==t.decodeURLComponents,this._popstate=!1!==t.popstate&&ce,this._click=!1!==t.click&&le,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):ce&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(he,this.clickHandler,!1):le&&n.document.removeEventListener(he,this.clickHandler,!1),this._hashbang&&ce&&!de?n.addEventListener("hashchange",this._onpopstate,!1):ce&&n.removeEventListener("hashchange",this._onpopstate,!1)},me.prototype.base=function(e){if(0===arguments.length)return this._base;this._base=e},me.prototype._getBase=function(){var e=this._base;if(e)return e;var t=ce&&this._window&&this._window.location;return ce&&this._hashbang&&t&&"file:"===t.protocol&&(e=t.pathname),e},me.prototype.strict=function(e){if(0===arguments.length)return this._strict;this._strict=e},me.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){var n;if(this._running=!0,ue){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,t.dispatch)}},me.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(he,this.clickHandler,!1),ce&&e.removeEventListener("popstate",this._onpopstate,!1),ce&&e.removeEventListener("hashchange",this._onpopstate,!1)}},me.prototype.show=function(e,t,n,i){var s=new ve(e,t,this),a=this.prevContext;return this.prevContext=s,this.current=s.path,!1!==n&&this.dispatch(s,a),!1!==s.handled&&!1!==i&&s.pushState(),s},me.prototype.back=function(e,t){var n=this;if(this.len>0){var i=this._window;de&&i.history.back(),this.len--}else e?setTimeout((function(){n.show(e,t)})):setTimeout((function(){n.show(n._getBase(),t)}))},me.prototype.redirect=function(e,t){var n=this;"string"==typeof e&&"string"==typeof t&&fe.call(this,e,(function(e){setTimeout((function(){n.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){n.replace(e)}),0)},me.prototype.replace=function(e,t,n,i){var s=new ve(e,t,this),a=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=n,s.save(),!1!==i&&this.dispatch(s,a),s},me.prototype.dispatch=function(e,t){var n=0,i=0,s=this;function a(){var t=s.callbacks[n++];if(e.path===s.current)return t?void t(e,a):ge.call(s,e);e.handled=!1}t?function e(){var n=s.exits[i++];if(!n)return a();n(t,e)}():a()},me.prototype.exit=function(e,t){if("function"==typeof e)return this.exit("*",e);for(var n=new ye(e,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},me.prototype.clickHandler=function(e){if(1===this._which(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){t=n[i];break}for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;if(t&&"A"===t.nodeName.toUpperCase()){var s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name;if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var a=t.getAttribute("href");if((this._hashbang||!this._samePath(t)||!t.hash&&"#"!==a)&&!(a&&a.indexOf("mailto:")>-1)&&!(s?t.target.baseVal:t.target)&&(s||this.sameOrigin(t.href))){var r=s?t.href.baseVal:t.pathname+t.search+(t.hash||"");r="/"!==r[0]?"/"+r:r,pe&&r.match(/^\/[a-zA-Z]:\//)&&(r=r.replace(/^\/[a-zA-Z]:\//,"/"));var o=r,l=this._getBase();0===r.indexOf(l)&&(r=r.substr(l.length)),this._hashbang&&(r=r.replace("#!","")),(!l||o!==r||ue&&"file:"===this._window.location.protocol)&&(e.preventDefault(),this.show(o))}}}}},me.prototype._onpopstate=(oe=!1,ce?(le&&"complete"===document.readyState?oe=!0:window.addEventListener("load",(function(){setTimeout((function(){oe=!0}),0)})),function(e){if(oe){var t=this;if(e.state){var n=e.state.path;t.replace(n,e.state)}else if(ue){var i=t._window.location;t.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),me.prototype._which=function(e){return null==(e=e||ce&&this._window.event).which?e.button:e.which},me.prototype._toURL=function(e){var t=this._window;if("function"==typeof URL&&ue)return new URL(e,t.location.toString());if(le){var n=t.document.createElement("a");return n.href=e,n}},me.prototype.sameOrigin=function(e){if(!e||!ue)return!1;var t=this._toURL(e),n=this._window.location;return n.protocol===t.protocol&&n.hostname===t.hostname&&(n.port===t.port||""===n.port&&(80==t.port||443==t.port))},me.prototype._samePath=function(e){if(!ue)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},me.prototype._decodeURLEncodedURIComponent=function(e){return"string"!=typeof e?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e},ve.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,de&&t.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},ve.prototype.save=function(){var e=this.page;de&&e._window.history.replaceState(this.state,this.title,e._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},ye.prototype.middleware=function(e){var t=this;return function(n,i){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,i);i()}},ye.prototype.match=function(e,t){var n=this.keys,i=e.indexOf("?"),s=~i?e.slice(0,i):e,a=this.regexp.exec(decodeURIComponent(s));if(!a)return!1;delete t[0];for(var r=1,o=a.length;r<o;++r){var l=n[r-1],c=this.page._decodeURLEncodedURIComponent(a[r]);void 0===c&&hasOwnProperty.call(t,l.name)||(t[l.name]=c)}return!0};var we=function e(){var t=new me;function n(){return fe.apply(t,arguments)}return n.callbacks=t.callbacks,n.exits=t.exits,n.base=t.base.bind(t),n.strict=t.strict.bind(t),n.start=t.start.bind(t),n.stop=t.stop.bind(t),n.show=t.show.bind(t),n.back=t.back.bind(t),n.redirect=t.redirect.bind(t),n.replace=t.replace.bind(t),n.dispatch=t.dispatch.bind(t),n.exit=t.exit.bind(t),n.configure=t.configure.bind(t),n.sameOrigin=t.sameOrigin.bind(t),n.clickHandler=t.clickHandler.bind(t),n.create=e,Object.defineProperty(n,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(n,"current",{get:function(){return t.current},set:function(e){t.current=e}}),n.Context=ve,n.Route=ye,n}(),_e=we,be=we;_e.default=be;const xe=_e,$e={host:""};async function Ne(e,t){try{const n=await fetch(e,t);if(0==n.ok){403==n.status&&(sessionStorage.removeItem("email"),sessionStorage.removeItem("authToken"),sessionStorage.removeItem("userId"));const e=await n.json();throw new Error(e.message)}try{return await n.json()}catch(e){return n}}catch(e){throw e}}function Ee(e="get",t){const n={method:e,headers:{}},i=sessionStorage.getItem("authToken");return null!=i&&(n.headers["X-Authorization"]=i),t&&(n.headers["Content-Type"]="application/json",n.body=JSON.stringify(t)),n}async function ke(e){return await Ne(e,Ee())}async function Pe(e,t){return await Ne(e,Ee("post",t))}async function Ie(e){return await Ne(e,Ee("delete"))}const Se="https://wine-catalog-api.herokuapp.com";$e.host=Se;const Te="/data/wines",Ue=e=>`/data/wines/${e}`,Ae="/data/likes",Ce="/data/comments";async function Le(e){return await ke(Se+Ue(e))}async function Re(e){return await ke(Se+(e=>`/data/likes?where=wineId%3D%22${e}%22&distinct=_ownerId&count`)(e))}async function Ve(e,t){return await ke(Se+((e,t)=>`/data/likes?where=wineId%3D%22${e}%22%20and%20_ownerId%3D%22${t}%22&count`)(e,t))}async function Oe(e){return await ke(Se+(e=>`/data/comments?where=wineId%3D%22${e}%22`)(e))}async function Qe(e){return await ke(Se+(e=>`/data/likes?where=wineId%3D%22${e}%22`)(e))}document.getElementById("logoutBtn").addEventListener("click",(async function(){await async function(){const e=await ke($e.host+"/users/logout");return sessionStorage.removeItem("email"),sessionStorage.removeItem("authToken"),sessionStorage.removeItem("userId"),e}(),xe.redirect("/"),je()}));const Be=document.getElementById("main-content"),De=document.querySelector("span");function je(){null!=sessionStorage.getItem("userId")?(document.querySelectorAll(".user").forEach((e=>e.style.display="inline")),document.querySelectorAll(".guest").forEach((e=>e.style.display="none")),De.style.display="inline",De.textContent=`Welcome, ${sessionStorage.getItem("email")}!`):(document.querySelectorAll(".user").forEach((e=>e.style.display="none")),document.querySelectorAll(".guest").forEach((e=>e.style.display="inline")),De.style.display="none")}function He(e){const t=document.getElementById("errorBox");t.querySelector("span").textContent=e,t.style.display="block",setTimeout((()=>t.style.display="none"),3e3)}xe((function(e,t){e.render=e=>((e,t,n)=>{let i=R.get(t);void 0===i&&(a(t,t.firstChild),R.set(t,i=new E(Object.assign({templateFactory:C},void 0))),i.appendInto(t)),i.setValue(e),i.commit()})(e,Be),e.setUserNav=je;const n=sessionStorage.getItem("userId");n&&(e.user=n),t()})),xe((function(e,t){if(e.query={},e.querystring){const t=Object.fromEntries(e.querystring.split("&").map((e=>e.split("="))));Object.assign(e.query,t)}t()})),xe("/index.html","/"),xe("/",(async function(e){const t=e.user;e.render((e=>V`
  <section id="welcomePage">
    <div>
      <div class="wine-img" id="welcome-message">
        <h1>Welcome To Wine Catalog!</h1>
      </div>
      <div class="wine-img">
        <img src="./images/Wine-Home.webp" />
      </div>
      ${e?o:V`
            <h2 id="loginPrompt">
              Please, <a href="/login">login</a> to like, add, edit and delete
              wines!
            </h2>
          `}
    </div>
  </section>
`)(t))})),xe("/catalog",(async function(e){e.render(z(async function(e){const t=e.user,n=Number(e.query.page)||1,{data:i,pages:s}=await async function(e){let t="/data/wines?pageSize=3&offset="+3*(e-1);const[n,i]=await Promise.all([ke(Se+t),ke(Se+"/data/wines?count")]);return{data:n,pages:Math.ceil(i/3)}}(n);return((e,t,n,i)=>V`
  <section class="catalogPage">
    <h1>All Wines</h1>
  <div id="pagination">
    ${n>1?V`<a href="?page=${n-1}">&lt; Prev</a>`:V`<a>&lt; Prev</a>`}
    <span>Page ${n} of ${i}</span>
    ${n<i?V`<a href="?page=${n+1}">Next &gt;</a>`:V`<a>Next &gt;</a>`}
  </div>

    ${e.length>0?q(e,(e=>e._id),(e=>V`
  <div class="card-box">
    <img src=${e.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Product Name: ${e.name}</p>
        <p class="quantity">Net Quantity: ${e.netQty}</p>
        <p class="origin">Origin: ${e.origin}</p>
        <p class="price">Price: ${e.price} lv</p>
        <p class="supplier">Supplier: ${e.supplier}</p>
      </div>
      <div class="btn-group">
        ${t?V` <a href="/details/${e._id}" id="details">Details</a> `:o}
      </div>
    </div>
  </div>`)):V` <p>No Wines in Catalog!</p> `}
  </section>
`)(i,t,n,s)}(e),V`<h1 id="loading">Loading...</h1>`))})),xe("/login",(async function(e){e.render(V`
        <section id="loginPage">
            <form @submit=${async function(t){t.preventDefault();const n=new FormData(t.target),i=n.get("email").trim(),s=n.get("password").trim();if(i&&s)try{await async function(e,t){const n=await Pe($e.host+"/users/login",{email:e,password:t});return sessionStorage.setItem("email",n.email),sessionStorage.setItem("authToken",n.accessToken),sessionStorage.setItem("userId",n._id),n}(i,s),e.setUserNav(),e.page.redirect("/")}catch(e){He(e.message)}else He("Please fill in both fields!")}}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>


`)})),xe("/register",(async function(e){e.render(V`
<section id="registerPage">
<form @submit=${async function(t){t.preventDefault();const n=new FormData(t.target),i=n.get("email").trim(),s=n.get("password").trim(),a=n.get("conf-pass").trim();try{if(!i||!s)throw new Error("Please fill in all fields!");if(s!=a)throw new Error("Paswords don't match!");await async function(e,t){const n=await Pe($e.host+"/users/register",{email:e,password:t});return sessionStorage.setItem("email",n.email),sessionStorage.setItem("authToken",n.accessToken),sessionStorage.setItem("userId",n._id),n}(i,s),e.setUserNav(),e.page.redirect("/")}catch(e){He(e.message)}}}>
    <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

        <button type="submit" class="register">Register</button>

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`)})),xe("/details/:id",(async function(e){const t=e.user,n=e.params.id,[i,s,a,r,l]=await Promise.all([Le(n),Re(n),Ve(n,t),Oe(n),Qe(n)]),c=t==i._ownerId,d=0==a&&t&&!c,p=1==a&&t&&!c,h=t&&!c,u=t==i._ownerId;e.render(((i,s,a,r,c,d,p,h,u,m,f)=>V`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="wineCover">
        <img src=${i.imgUrl} />
      </div>
      <div class="wineInfo">
        <div class="wineText">
          <h1>Product Name: ${i.name}</h1>
          <h3>Net Quantity: ${i.netQty}</h3>
          <h4>Origin: ${i.origin}</h4>
          <h4>Price: ${i.price} lv</h4>
          <h4>Supplier: ${i.supplier}</h4>
          <p>Storage: ${i.storage}</p>
        </div>

        <div class="actionBtn">
          ${s?V`
                <a href="/edit/${i._id}" class="edit">Edit</a>
                <a @click=${async function(){confirm("Are you sure you want to delete this wine?")&&(await async function(e){return await Ie(Se+(e=>`/data/wines/${e}`)(e))}(n),e.page.redirect("/catalog"))}} href="javascript:void(0)" class="remove"
                  >Delete</a
                >
              `:o}
          <div class="actionBtn">
            ${r?V`<a
                  @click=${async function(){await async function(e){return await Pe(Se+Ae,e)}({wineId:n}),e.page.redirect(`/details/${n}`)}}
                  id="likes"
                  class="button"
                  href="javascript:void(0)"
                  >Like</a
                > `:o}
            ${f?V`<a
                  @click=${async function(){const i=l.find((e=>e.wineId==n&&e._ownerId==t));await async function(e){return await Ie(Se+(e=>`/data/likes/${e}`)(e))}(i._id),e.page.redirect(`/details/${n}`)}}
                  id="likes"
                  class="button"
                  href="javascript:void(0)"
                  >Unlike</a
                > `:o}
          </div>
          <div class="likes">
            <img class="hearts" src="/images/heart.png" />
            <span id="total-likes">Likes: ${d}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="details-comments">
      <h2>Comments:</h2>
      <ul>
        ${0==p.length?V`<p class="no-comment">No comments.</p>`:p.map((e=>V`
                <li class="comment">
                  <p>Content: ${e.comment}</p>
                </li>
              `))}
      </ul>
    </div>
    ${u?V`
          <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${async function(t){t.preventDefault();const i=new FormData(t.target).get("comment").trim();try{if(""==i)throw new Error("Please fill in !");await async function(e){return await Pe(Se+Ce,e)}({wineId:n,comment:i}),t.target.reset(),e.page.redirect(`/details/${n}`)}catch(e){He(e.message)}}} class="form">
              <textarea name="comment" placeholder="Comment......"></textarea>
              <input class="btn-submit" type="submit" value="Add Comment" />
            </form>
          </article>
        `:o}
  </section>
`)(i,u,0,d,0,s,r,0,h,0,p))})),xe("/create",(async function(e){e.render(V`
  <section class="createPage">
    <form @submit=${async function(t){t.preventDefault();const n=new FormData(t.target),i=n.get("name").trim(),s=n.get("imgUrl").trim(),a=n.get("price").trim(),r=n.get("netQuantity").trim(),o=n.get("origin").trim(),l=n.get("supplier").trim(),c=n.get("storage").trim();try{if(!(i&&s&&a&&r&&o&&l&&c))throw new Error("Please fill in all fields!");await async function(e){return await Pe(Se+Te,e)}({name:i,imgUrl:s,price:a,netQty:r,origin:o,supplier:l,storage:c}),t.target.reset(),e.page.redirect("/catalog")}catch(e){He(e.message)}}}>
      <fieldset>
        <legend>Add Wine</legend>

        <div class="container">
          <label for="name" class="vhide">Album name</label>
          <input
            id="name"
            name="name"
            class="name"
            type="text"
            placeholder="Product name"
          />

          <label for="imgUrl" class="vhide">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            class="imgUrl"
            type="text"
            placeholder="Image Url"
          />

          <label for="price" class="vhide">Price</label>
          <input
            id="price"
            name="price"
            class="price"
            type="text"
            placeholder="Price"
          />

          <label for="netQuantity" class="vhide">Net Quantity</label>
          <input
            id="netQuantity"
            name="netQuantity"
            class="netQuantity"
            type="text"
            placeholder="Net Quantity"
          />

          <label for="origin" class="vhide">Origin</label>
          <input
            id="origin"
            name="origin"
            class="origin"
            type="text"
            placeholder="Origin"
          />

          <label for="supplier" class="vhide">Supplier</label>
          <input
            id="supplier"
            name="supplier"
            class="supplier"
            type="text"
            placeholder="Supplier"
          />

          <label for="storage" class="vhide">Storage</label>
          <textarea
            name="storage"
            class="storage"
            placeholder="Storage"
          ></textarea>

          <button class="add-wine" type="submit">Add New Wine</button>
        </div>
      </fieldset>
    </form>
  </section>
`)})),xe("/edit/:id",(async function(e){const t=e.params.id,n=await Le(t);e.render(((n,i)=>V`
  <section class="editPage">
    <form @submit=${async function(n){n.preventDefault();const i=new FormData(n.target),s=i.get("name").trim(),a=i.get("imgUrl").trim(),r=i.get("price").trim(),o=i.get("netQuantity").trim(),l=i.get("origin").trim(),c=i.get("supplier").trim(),d=i.get("storage").trim();try{if(!(s&&a&&r&&o&&l&&c&&d))throw new Error("Please fill in all fields!");await async function(e,t){return await async function(e,t){return await Ne(e,Ee("put",t))}(Se+Ue(e),t)}(t,{name:s,imgUrl:a,price:r,netQty:o,origin:l,supplier:c,storage:d}),n.target.reset(),e.page.redirect("/catalog")}catch(e){He(e.message)}}}>
      <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
          <label for="name" class="vhide">Product name</label>
          <input
            id="name"
            name="name"
            class="name"
            type="text"
            .value=${n.name}
          />

          <label for="imgUrl" class="vhide">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            class="imgUrl"
            type="text"
            .value=${n.imgUrl}
          />

          <label for="price" class="vhide">Price</label>
          <input
            id="price"
            name="price"
            class="price"
            type="text"
            .value=${n.price}
          />

          <label for="netQuantity" class="vhide">Net Quantity</label>
          <input
            id="netQuantity"
            name="netQuantity"
            class="netQuantity"
            type="text"
            .value=${n.netQty}
          />

          <label for="origin" class="vhide">Origin</label>
          <input
            id="origin"
            name="origin"
            class="origin"
            type="text"
            .value=${n.origin}
          />

          <label for="genre" class="vhide">Supplier</label>
          <input
            id="supplier"
            name="supplier"
            class="supplier"
            type="text"
            .value=${n.supplier}
          />

          <label for="storage" class="vhide">Storage</label>
          <textarea
            name="storage"
            class="storage"
            rows="10"
            cols="10"
            .value=${n.storage}
          ></textarea>

          <button class="edit-album" type="submit">Edit Wine</button>
        </div>
      </fieldset>
    </form>
  </section>
`)(n))})),xe("/mywines",(async function(e){const t=e.user,n=await async function(e){return await ke(Se+(e=>`/data/wines?where=_ownerId%3D%22${e}%22&sortBy=_createdOn%20desc`)(e))}(t);var i;e.render(V`
  <section id="catalogPage">
    <h1>My Wines</h1>

    ${(i=n).length>0?q(i,(e=>e._id),(e=>V`
  <div class="card-box">
    <img src=${e.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Product Name: ${e.name}</p>
        <p class="quantity">Net Quantity: ${e.netQty}</p>
        <p class="origin">Origin: ${e.origin}</p>
        <p class="price">Price: ${e.price} lv</p>
        <p class="supplier">Supplier: ${e.supplier}</p>
      </div>
      <div class="btn-group">
      <a href="/details/${e._id}" id="details">Details</a>
      </div>
    </div>
  </div>`)):V` <p>You Don Not Have Wines in Catalog!</p>`}

  </section>
`)})),xe("/search",(async function(e){const t=e.query.query,n=null==t?[]:await async function(e){return await ke(Se+(e=>`/data/wines?where=name%20LIKE%20%22${e}%22`)(e))}(t),i=e.user;e.render(((t,n,i,s)=>V`
  <section id="searchPage">
    <h1>Search by Name</h1>
    <div class="search">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired wine's name"
        .value=${i||""}
      />
      <button @click=${function(){const t=document.getElementById("search-input");if(""==t.value)return void He("Please fill in!");e.page.redirect(`search?query=${t.value.trim()}`)}} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result">
      ${n.length>0?q(n,(e=>e._id),(e=>V`
              <div class="card-box">
                <img src=${e.imgUrl} />
                <div>
                  <div class="text-center">
                    <p class="name">Product Name: ${e.name}</p>
                    <p class="artist">Net Quantity: ${e.netQty}</p>
                    <p class="genre">Origin: ${e.origin}</p>
                    <p class="price">Price: ${e.price} lv</p>
                    <p class="date">Supplier: ${e.supplier}</p>
                  </div>
                  <div class="btn-group">
                    ${s?V`
                          <a href="/details/${e._id}" id="details">Details</a>
                        `:o}
                  </div>
                </div>
              </div>
            `)):V`<p class="no-result">No result.</p>`}
    </div>
  </section>
`)(0,n,t,i))})),je(),xe.start()})();