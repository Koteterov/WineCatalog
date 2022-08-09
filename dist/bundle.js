/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{h:()=>Be});const t=new WeakMap,i=e=>"function"==typeof e&&t.has(e),n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},a={},r={},o=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${o}--\x3e`,c=new RegExp(`${o}|${l}`),d="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let a=0,r=-1,l=0;const{strings:p,values:{length:u}}=e;for(;l<u;){const e=s.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)h(t[e].name,d)&&n++;for(;n-- >0;){const t=p[l],i=f.exec(t)[2],n=i.toLowerCase()+d,s=e.getAttribute(n);e.removeAttribute(n);const a=s.split(c);this.parts.push({type:"attribute",index:r,name:i,strings:a}),l+=a.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const n=e.parentNode,s=t.split(c),a=s.length-1;for(let t=0;t<a;t++){let i,a=s[t];if(""===a)i=m();else{const e=f.exec(a);null!==e&&h(e[2],d)&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-d.length)+e[3]),i=document.createTextNode(a)}n.insertBefore(i,e),this.parts.push({type:"node",index:++r})}""===s[a]?(n.insertBefore(m(),e),i.push(e)):e.data=s[a],l+=a}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&r!==a||(r++,t.insertBefore(m(),e)),a=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(i.push(e),r--),l++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),l++}}else s.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const h=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},u=e=>-1!==e.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class g{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let a,r=0,o=0,l=s.nextNode();for(;r<i.length;)if(a=i[r],u(a)){for(;o<a.index;)o++,"TEMPLATE"===l.nodeName&&(t.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=t.pop(),l=s.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,a.name,a.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),y=` ${o} `;class w{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],s=e.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===e.indexOf("--\x3e",s+1);const a=f.exec(e);t+=null===a?e+(i?y:l):e.substr(0,a.index)+a[1]+a[2]+d+a[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}const _=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new $(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!b(e))return e}let n="";for(let s=0;s<t;s++){n+=e[s];const t=i[s];if(void 0!==t){const e=t.value;if(_(e)||!b(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||_(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(_(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===r?(this.value=r,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const i=new g(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const s of e)i=t[n],void 0===i&&(i=new N(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class k extends x{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends ${}let S=!1;(()=>{try{const e={get capture(){return S=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class I{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(S?{capture:e.capture,passive:e.passive,once:e.once}:e.capture),U=new class{handleAttributeExpressions(e,t,i,n){const s=t[0];return"."===s?new k(e,t.slice(1),i).parts:"@"===s?[new I(e,t.slice(1),n.eventContext)]:"?"===s?[new E(e,t.slice(1),i)]:new x(e,t,i).parts}handleTextExpression(e){return new N(e)}};function A(e){let t=C.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},C.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(o);return i=t.keyString.get(n),void 0===i&&(i=new p(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const C=new Map,L=new WeakMap;"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(e,...t)=>new w(e,t,"html",U),R=(e,t)=>{const i=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,s=i.insertBefore(m(),n);i.insertBefore(m(),n);const a=new N(e.options);return a.insertAfterNode(s),a},O=(e,t)=>(e.setValue(t),e.commit(),e),Q=(e,t,i)=>{const n=e.startNode.parentNode,s=i?i.startNode:e.endNode,a=t.endNode.nextSibling;a!==s&&((e,t,i=null,n=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,n),t=i}})(n,t.startNode,a,s)},B=e=>{s(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},D=(e,t,i)=>{const n=new Map;for(let s=t;s<=i;s++)n.set(e[s],s);return n},j=new WeakMap,H=new WeakMap,q=(W=(e,t,i)=>{let n;return void 0===i?i=t:void 0!==t&&(n=t),t=>{if(!(t instanceof N))throw new Error("repeat can only be used in text bindings");const s=j.get(t)||[],a=H.get(t)||[],r=[],o=[],l=[];let c,d,p=0;for(const t of e)l[p]=n?n(t,p):p,o[p]=i(t,p),p++;let h=0,u=s.length-1,m=0,f=o.length-1;for(;h<=u&&m<=f;)if(null===s[h])h++;else if(null===s[u])u--;else if(a[h]===l[m])r[m]=O(s[h],o[m]),h++,m++;else if(a[u]===l[f])r[f]=O(s[u],o[f]),u--,f--;else if(a[h]===l[f])r[f]=O(s[h],o[f]),Q(t,s[h],r[f+1]),h++,f--;else if(a[u]===l[m])r[m]=O(s[u],o[m]),Q(t,s[u],s[h]),u--,m++;else if(void 0===c&&(c=D(l,m,f),d=D(a,h,u)),c.has(a[h]))if(c.has(a[u])){const e=d.get(l[m]),i=void 0!==e?s[e]:null;if(null===i){const e=R(t,s[h]);O(e,o[m]),r[m]=e}else r[m]=O(i,o[m]),Q(t,i,s[h]),s[e]=null;m++}else B(s[u]),u--;else B(s[h]),h++;for(;m<=f;){const e=R(t,r[f+1]);O(e,o[m]),r[m++]=e}for(;h<=u;){const e=s[h++];null!==e&&B(e)}j.set(t,r),H.set(t,l)}},(...e)=>{const i=W(...e);return t.set(i,!0),i});var W,M=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},F=function e(t,i,n){return M(i=i||[])?n||(n={}):(n=i,i=[]),t instanceof RegExp?function(e,t){var i=e.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return te(e,t)}(t,i):M(t)?function(t,i,n){for(var s=[],a=0;a<t.length;a++)s.push(e(t[a],i,n).source);return te(new RegExp("(?:"+s.join("|")+")",ie(n)),i)}(t,i,n):function(e,t,i){for(var n=J(e),s=ne(n,i),a=0;a<n.length;a++)"string"!=typeof n[a]&&t.push(n[a]);return te(s,t)}(t,i,n)},z=J,K=X,G=ne,Z=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function J(e){for(var t,i=[],n=0,s=0,a="";null!=(t=Z.exec(e));){var r=t[0],o=t[1],l=t.index;if(a+=e.slice(s,l),s=l+r.length,o)a+=o[1];else{a&&(i.push(a),a="");var c=t[2],d=t[3],p=t[4],h=t[5],u=t[6],m=t[7],f="+"===u||"*"===u,g="?"===u||"*"===u,v=c||"/",y=p||h||(m?".*":"[^"+v+"]+?");i.push({name:d||n++,prefix:c||"",delimiter:v,optional:g,repeat:f,pattern:ee(y)})}}return s<e.length&&(a+=e.substr(s)),a&&i.push(a),i}function X(e){for(var t=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var n="",s=i||{},a=0;a<e.length;a++){var r=e[a];if("string"!=typeof r){var o,l=s[r.name];if(null==l){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to be defined')}if(M(l)){if(!r.repeat)throw new TypeError('Expected "'+r.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(o=encodeURIComponent(l[c]),!t[a].test(o))throw new TypeError('Expected all "'+r.name+'" to match "'+r.pattern+'", but received "'+o+'"');n+=(0===c?r.prefix:r.delimiter)+o}}else{if(o=encodeURIComponent(l),!t[a].test(o))throw new TypeError('Expected "'+r.name+'" to match "'+r.pattern+'", but received "'+o+'"');n+=r.prefix+o}}else n+=r}return n}}function Y(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function ee(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function te(e,t){return e.keys=t,e}function ie(e){return e.sensitive?"":"i"}function ne(e,t){for(var i=(t=t||{}).strict,n=!1!==t.end,s="",a=e[e.length-1],r="string"==typeof a&&/\/$/.test(a),o=0;o<e.length;o++){var l=e[o];if("string"==typeof l)s+=Y(l);else{var c=Y(l.prefix),d=l.pattern;l.repeat&&(d+="(?:"+c+d+")*"),s+=d=l.optional?c?"(?:"+c+"("+d+"))?":"("+d+")?":c+"("+d+")"}}return i||(s=(r?s.slice(0,-2):s)+"(?:\\/(?=$))?"),s+=n?"$":i&&r?"":"(?=\\/|$)",new RegExp("^"+s,ie(t))}F.parse=z,F.compile=function(e){return X(J(e))},F.tokensToFunction=K,F.tokensToRegExp=G;var se,ae="undefined"!=typeof document,re="undefined"!=typeof window,oe="undefined"!=typeof history,le="undefined"!=typeof process,ce=ae&&document.ontouchstart?"touchstart":"click",de=re&&!(!window.history.location&&!window.location);function pe(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function he(e,t){if("function"==typeof e)return he.call(this,"*",e);if("function"==typeof t)for(var i=new fe(e,null,this),n=1;n<arguments.length;++n)this.callbacks.push(i.middleware(arguments[n]));else"string"==typeof e?this["string"==typeof t?"redirect":"show"](e,t):this.start(e)}function ue(e){if(!e.handled){var t=this,i=t._window;(t._hashbang?de&&this._getBase()+i.location.hash.replace("#!",""):de&&i.location.pathname+i.location.search)!==e.canonicalPath&&(t.stop(),e.handled=!1,de&&(i.location.href=e.canonicalPath))}}function me(e,t,i){var n=this.page=i||he,s=n._window,a=n._hashbang,r=n._getBase();"/"===e[0]&&0!==e.indexOf(r)&&(e=r+(a?"#!":"")+e);var o=e.indexOf("?");this.canonicalPath=e;var l=new RegExp("^"+r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=e.replace(l,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=ae&&s.document.title,this.state=t||{},this.state.path=e,this.querystring=~o?n._decodeURLEncodedURIComponent(e.slice(o+1)):"",this.pathname=n._decodeURLEncodedURIComponent(~o?e.slice(0,o):e),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=n._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function fe(e,t,i){var n=this.page=i||ge,s=t||{};s.strict=s.strict||n._strict,this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=F(this.path,this.keys=[],s)}pe.prototype.configure=function(e){var t=e||{};this._window=t.window||re&&window,this._decodeURLComponents=!1!==t.decodeURLComponents,this._popstate=!1!==t.popstate&&re,this._click=!1!==t.click&&ae,this._hashbang=!!t.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):re&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(ce,this.clickHandler,!1):ae&&i.document.removeEventListener(ce,this.clickHandler,!1),this._hashbang&&re&&!oe?i.addEventListener("hashchange",this._onpopstate,!1):re&&i.removeEventListener("hashchange",this._onpopstate,!1)},pe.prototype.base=function(e){if(0===arguments.length)return this._base;this._base=e},pe.prototype._getBase=function(){var e=this._base;if(e)return e;var t=re&&this._window&&this._window.location;return re&&this._hashbang&&t&&"file:"===t.protocol&&(e=t.pathname),e},pe.prototype.strict=function(e){if(0===arguments.length)return this._strict;this._strict=e},pe.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){var i;if(this._running=!0,de){var n=this._window.location;i=this._hashbang&&~n.hash.indexOf("#!")?n.hash.substr(2)+n.search:this._hashbang?n.search+n.hash:n.pathname+n.search+n.hash}this.replace(i,null,!0,t.dispatch)}},pe.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(ce,this.clickHandler,!1),re&&e.removeEventListener("popstate",this._onpopstate,!1),re&&e.removeEventListener("hashchange",this._onpopstate,!1)}},pe.prototype.show=function(e,t,i,n){var s=new me(e,t,this),a=this.prevContext;return this.prevContext=s,this.current=s.path,!1!==i&&this.dispatch(s,a),!1!==s.handled&&!1!==n&&s.pushState(),s},pe.prototype.back=function(e,t){var i=this;if(this.len>0){var n=this._window;oe&&n.history.back(),this.len--}else e?setTimeout((function(){i.show(e,t)})):setTimeout((function(){i.show(i._getBase(),t)}))},pe.prototype.redirect=function(e,t){var i=this;"string"==typeof e&&"string"==typeof t&&he.call(this,e,(function(e){setTimeout((function(){i.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){i.replace(e)}),0)},pe.prototype.replace=function(e,t,i,n){var s=new me(e,t,this),a=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=i,s.save(),!1!==n&&this.dispatch(s,a),s},pe.prototype.dispatch=function(e,t){var i=0,n=0,s=this;function a(){var t=s.callbacks[i++];if(e.path===s.current)return t?void t(e,a):ue.call(s,e);e.handled=!1}t?function e(){var i=s.exits[n++];if(!i)return a();i(t,e)}():a()},pe.prototype.exit=function(e,t){if("function"==typeof e)return this.exit("*",e);for(var i=new fe(e,null,this),n=1;n<arguments.length;++n)this.exits.push(i.middleware(arguments[n]))},pe.prototype.clickHandler=function(e){if(1===this._which(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=e.target,i=e.path||(e.composedPath?e.composedPath():null);if(i)for(var n=0;n<i.length;n++)if(i[n].nodeName&&"A"===i[n].nodeName.toUpperCase()&&i[n].href){t=i[n];break}for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;if(t&&"A"===t.nodeName.toUpperCase()){var s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name;if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var a=t.getAttribute("href");if((this._hashbang||!this._samePath(t)||!t.hash&&"#"!==a)&&!(a&&a.indexOf("mailto:")>-1)&&!(s?t.target.baseVal:t.target)&&(s||this.sameOrigin(t.href))){var r=s?t.href.baseVal:t.pathname+t.search+(t.hash||"");r="/"!==r[0]?"/"+r:r,le&&r.match(/^\/[a-zA-Z]:\//)&&(r=r.replace(/^\/[a-zA-Z]:\//,"/"));var o=r,l=this._getBase();0===r.indexOf(l)&&(r=r.substr(l.length)),this._hashbang&&(r=r.replace("#!","")),(!l||o!==r||de&&"file:"===this._window.location.protocol)&&(e.preventDefault(),this.show(o))}}}}},pe.prototype._onpopstate=(se=!1,re?(ae&&"complete"===document.readyState?se=!0:window.addEventListener("load",(function(){setTimeout((function(){se=!0}),0)})),function(e){if(se){var t=this;if(e.state){var i=e.state.path;t.replace(i,e.state)}else if(de){var n=t._window.location;t.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}),pe.prototype._which=function(e){return null==(e=e||re&&this._window.event).which?e.button:e.which},pe.prototype._toURL=function(e){var t=this._window;if("function"==typeof URL&&de)return new URL(e,t.location.toString());if(ae){var i=t.document.createElement("a");return i.href=e,i}},pe.prototype.sameOrigin=function(e){if(!e||!de)return!1;var t=this._toURL(e),i=this._window.location;return i.protocol===t.protocol&&i.hostname===t.hostname&&(i.port===t.port||""===i.port&&(80==t.port||443==t.port))},pe.prototype._samePath=function(e){if(!de)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},pe.prototype._decodeURLEncodedURIComponent=function(e){return"string"!=typeof e?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e},me.prototype.pushState=function(){var e=this.page,t=e._window,i=e._hashbang;e.len++,oe&&t.history.pushState(this.state,this.title,i&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},me.prototype.save=function(){var e=this.page;oe&&e._window.history.replaceState(this.state,this.title,e._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},fe.prototype.middleware=function(e){var t=this;return function(i,n){if(t.match(i.path,i.params))return i.routePath=t.path,e(i,n);n()}},fe.prototype.match=function(e,t){var i=this.keys,n=e.indexOf("?"),s=~n?e.slice(0,n):e,a=this.regexp.exec(decodeURIComponent(s));if(!a)return!1;delete t[0];for(var r=1,o=a.length;r<o;++r){var l=i[r-1],c=this.page._decodeURLEncodedURIComponent(a[r]);void 0===c&&hasOwnProperty.call(t,l.name)||(t[l.name]=c)}return!0};var ge=function e(){var t=new pe;function i(){return he.apply(t,arguments)}return i.callbacks=t.callbacks,i.exits=t.exits,i.base=t.base.bind(t),i.strict=t.strict.bind(t),i.start=t.start.bind(t),i.stop=t.stop.bind(t),i.show=t.show.bind(t),i.back=t.back.bind(t),i.redirect=t.redirect.bind(t),i.replace=t.replace.bind(t),i.dispatch=t.dispatch.bind(t),i.exit=t.exit.bind(t),i.configure=t.configure.bind(t),i.sameOrigin=t.sameOrigin.bind(t),i.clickHandler=t.clickHandler.bind(t),i.create=e,Object.defineProperty(i,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(i,"current",{get:function(){return t.current},set:function(e){t.current=e}}),i.Context=me,i.Route=fe,i}(),ve=ge,ye=ge;ve.default=ye;const we=ve,_e={host:""};async function be(e,t){try{const i=await fetch(e,t);if(0==i.ok){403==i.status&&(sessionStorage.removeItem("email"),sessionStorage.removeItem("authToken"),sessionStorage.removeItem("userId"));const e=await i.json();throw new Error(e.message)}try{return await i.json()}catch(e){return i}}catch(e){throw e}}function xe(e="get",t){const i={method:e,headers:{}},n=sessionStorage.getItem("authToken");return null!=n&&(i.headers["X-Authorization"]=n),t&&(i.headers["Content-Type"]="application/json",i.body=JSON.stringify(t)),i}async function $e(e){return await be(e,xe())}async function Ne(e,t){return await be(e,xe("post",t))}async function Ee(e){return await be(e,xe("delete"))}const ke="https://wine-catalog-api.herokuapp.com";_e.host=ke;const Pe="/data/wines",Se=e=>`/data/wines/${e}`,Ie="/data/likes",Te="/data/comments";async function Ue(e){return await $e(ke+Se(e))}async function Ae(e){return await $e(ke+(e=>`/data/likes?where=wineId%3D%22${e}%22&distinct=_ownerId&count`)(e))}async function Ce(e,t){return await $e(ke+((e,t)=>`/data/likes?where=wineId%3D%22${e}%22%20and%20_ownerId%3D%22${t}%22&count`)(e,t))}async function Le(e){return await $e(ke+(e=>`/data/comments?where=wineId%3D%22${e}%22`)(e))}async function Ve(e){return await $e(ke+(e=>`/data/likes?where=wineId%3D%22${e}%22`)(e))}document.getElementById("logoutBtn").addEventListener("click",(async function(){await async function(){const e=await $e(_e.host+"/users/logout");return sessionStorage.removeItem("email"),sessionStorage.removeItem("authToken"),sessionStorage.removeItem("userId"),e}(),we.redirect("/"),Qe()}));const Re=document.getElementById("main-content"),Oe=document.querySelector("span");function Qe(){null!=sessionStorage.getItem("userId")?(document.querySelectorAll(".user").forEach((e=>e.style.display="inline")),document.querySelectorAll(".guest").forEach((e=>e.style.display="none")),Oe.style.display="inline",Oe.textContent=`Welcome, ${sessionStorage.getItem("email")}!`):(document.querySelectorAll(".user").forEach((e=>e.style.display="none")),document.querySelectorAll(".guest").forEach((e=>e.style.display="inline")),Oe.style.display="none")}function Be(e){const t=document.getElementById("errorBox");t.querySelector("span").textContent=e,t.style.display="block",setTimeout((()=>t.style.display="none"),3e3)}we((function(e,t){e.render=e=>((e,t,i)=>{let n=L.get(t);void 0===n&&(s(t,t.firstChild),L.set(t,n=new N(Object.assign({templateFactory:A},void 0))),n.appendInto(t)),n.setValue(e),n.commit()})(e,Re),e.setUserNav=Qe;const i=sessionStorage.getItem("userId");i&&(e.user=i),t()})),we((function(e,t){if(e.query={},e.querystring){const t=Object.fromEntries(e.querystring.split("&").map((e=>e.split("="))));Object.assign(e.query,t)}t()})),we("/index.html","/"),we("/",(async function(e){const t=e.user;e.render((e=>V`
  <section id="welcomePage">
    <div>
      <div class="wine-img" id="welcome-message">
        <h1>Welcome To Wine Catalog!</h1>
      </div>
      <div class="wine-img">
        <img src="./images/Wine-Home.webp" />
      </div>
      ${e?r:V`
            <h2 id="loginPrompt">
              Please, <a href="/login">login</a> to like, add, edit and delete
              wines!
            </h2>
          `}
    </div>
  </section>
`)(t))})),we("/catalog",(async function(e){const t=e.user,i=Number(e.query.page)||1,{data:n,pages:s}=await async function(e){let t="/data/wines?pageSize=3&offset="+3*(e-1);const[i,n]=await Promise.all([$e(ke+t),$e(ke+"/data/wines?count")]);return{data:i,pages:Math.ceil(n/3)}}(i);e.render(((e,t,i,n)=>V`
  <section id="catalogPage">
    <h1>All Wines</h1>
  <div id="pagination">
    ${i>1?V`<a href="?page=${i-1}">&lt; Prev</a>`:V`<a>&lt; Prev</a>`}
    <span>Page ${i} of ${n}</span>
    ${i<n?V`<a href="?page=${i+1}">Next &gt;</a>`:V`<a>Next &gt;</a>`}
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
        ${t?V` <a href="/details/${e._id}" id="details">Details</a> `:r}
      </div>
    </div>
  </div>`)):V` <p>No Wines in Catalog!</p> `}
  </section>
`)(n,t,i,s))})),we("/login",(async function(e){e.render(V`
        <section id="loginPage">
            <form @submit=${async function(t){t.preventDefault();const i=new FormData(t.target),n=i.get("email").trim(),s=i.get("password").trim();if(n&&s)try{await async function(e,t){const i=await Ne(_e.host+"/users/login",{email:e,password:t});return sessionStorage.setItem("email",i.email),sessionStorage.setItem("authToken",i.accessToken),sessionStorage.setItem("userId",i._id),i}(n,s),e.setUserNav(),e.page.redirect("/")}catch(e){Be(e.message)}else Be("Please fill in both fields!")}}>
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


`)})),we("/register",(async function(e){e.render(V`
<section id="registerPage">
<form @submit=${async function(t){t.preventDefault();const i=new FormData(t.target),n=i.get("email").trim(),s=i.get("password").trim(),a=i.get("conf-pass").trim();try{if(!n||!s)throw new Error("Please fill in all fields!");if(s!=a)throw new Error("Paswords don't match!");await async function(e,t){const i=await Ne(_e.host+"/users/register",{email:e,password:t});return sessionStorage.setItem("email",i.email),sessionStorage.setItem("authToken",i.accessToken),sessionStorage.setItem("userId",i._id),i}(n,s),e.setUserNav(),e.page.redirect("/")}catch(e){Be(e.message)}}}>
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
`)})),we("/details/:id",(async function(e){const t=e.user,i=e.params.id,[n,s,a,o,l]=await Promise.all([Ue(i),Ae(i),Ce(i,t),Le(i),Ve(i)]),c=t==n._ownerId,d=0==a&&t&&!c,p=1==a&&t&&!c,h=t&&!c,u=t==n._ownerId;e.render(((n,s,a,o,c,d,p,h,u,m,f)=>V`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="wineCover">
        <img src=${n.imgUrl} />
      </div>
      <div class="wineInfo">
        <div class="wineText">
          <h1>Product Name: ${n.name}</h1>
          <h3>Net Quantity: ${n.netQty}</h3>
          <h4>Origin: ${n.origin}</h4>
          <h4>Price: ${n.price} lv</h4>
          <h4>Supplier: ${n.supplier}</h4>
          <p>Storage: ${n.storage}</p>
        </div>

        <div class="actionBtn">
          ${s?V`
                <a href="/edit/${n._id}" class="edit">Edit</a>
                <a @click=${async function(){confirm("Are you sure you want to delete this wine?")&&(await async function(e){return await Ee(ke+(e=>`/data/wines/${e}`)(e))}(i),e.page.redirect("/catalog"))}} href="javascript:void(0)" class="remove"
                  >Delete</a
                >
              `:r}
          <div class="actionBtn">
            ${o?V`<a
                  @click=${async function(){await async function(e){return await Ne(ke+Ie,e)}({wineId:i}),e.page.redirect(`/details/${i}`)}}
                  id="likes"
                  class="button"
                  href="javascript:void(0)"
                  >Like</a
                > `:r}
            ${f?V`<a
                  @click=${async function(){const n=l.find((e=>e.wineId==i&&e._ownerId==t));await async function(e){return await Ee(ke+(e=>`/data/likes/${e}`)(e))}(n._id),e.page.redirect(`/details/${i}`)}}
                  id="likes"
                  class="button"
                  href="javascript:void(0)"
                  >Unlike</a
                > `:r}
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
            <form @submit=${async function(t){t.preventDefault();const n=new FormData(t.target).get("comment").trim();try{if(""==n)throw new Error("Please fill in !");await async function(e){return await Ne(ke+Te,e)}({wineId:i,comment:n}),t.target.reset(),e.page.redirect(`/details/${i}`)}catch(e){Be(e.message)}}} class="form">
              <textarea name="comment" placeholder="Comment......"></textarea>
              <input class="btn-submit" type="submit" value="Add Comment" />
            </form>
          </article>
        `:r}
  </section>
`)(n,u,0,d,0,s,o,0,h,0,p))})),we("/create",(async function(e){e.render(V`
  <section class="createPage">
    <form @submit=${async function(t){t.preventDefault();const i=new FormData(t.target),n=i.get("name").trim(),s=i.get("imgUrl").trim(),a=i.get("price").trim(),r=i.get("netQuantity").trim(),o=i.get("origin").trim(),l=i.get("supplier").trim(),c=i.get("storage").trim();try{if(!(n&&s&&a&&r&&o&&l&&c))throw new Error("Please fill in all fields!");await async function(e){return await Ne(ke+Pe,e)}({name:n,imgUrl:s,price:a,netQty:r,origin:o,supplier:l,storage:c}),t.target.reset(),e.page.redirect("/catalog")}catch(e){Be(e.message)}}}>
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
`)})),we("/edit/:id",(async function(e){const t=e.params.id,i=await Ue(t);e.render(((i,n)=>V`
  <section class="editPage">
    <form @submit=${async function(i){i.preventDefault();const n=new FormData(i.target),s=n.get("name").trim(),a=n.get("imgUrl").trim(),r=n.get("price").trim(),o=n.get("netQuantity").trim(),l=n.get("origin").trim(),c=n.get("supplier").trim(),d=n.get("storage").trim();try{if(!(s&&a&&r&&o&&l&&c&&d))throw new Error("Please fill in all fields!");await async function(e,t){return await async function(e,t){return await be(e,xe("put",t))}(ke+Se(e),t)}(t,{name:s,imgUrl:a,price:r,netQty:o,origin:l,supplier:c,storage:d}),i.target.reset(),e.page.redirect("/catalog")}catch(e){Be(e.message)}}}>
      <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
          <label for="name" class="vhide">Product name</label>
          <input
            id="name"
            name="name"
            class="name"
            type="text"
            .value=${i.name}
          />

          <label for="imgUrl" class="vhide">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            class="imgUrl"
            type="text"
            .value=${i.imgUrl}
          />

          <label for="price" class="vhide">Price</label>
          <input
            id="price"
            name="price"
            class="price"
            type="text"
            .value=${i.price}
          />

          <label for="netQuantity" class="vhide">Net Quantity</label>
          <input
            id="netQuantity"
            name="netQuantity"
            class="netQuantity"
            type="text"
            .value=${i.netQty}
          />

          <label for="origin" class="vhide">Origin</label>
          <input
            id="origin"
            name="origin"
            class="origin"
            type="text"
            .value=${i.origin}
          />

          <label for="genre" class="vhide">Supplier</label>
          <input
            id="supplier"
            name="supplier"
            class="supplier"
            type="text"
            .value=${i.supplier}
          />

          <label for="storage" class="vhide">Storage</label>
          <textarea
            name="storage"
            class="storage"
            rows="10"
            cols="10"
            .value=${i.storage}
          ></textarea>

          <button class="edit-album" type="submit">Edit Wine</button>
        </div>
      </fieldset>
    </form>
  </section>
`)(i))})),we("/mywines",(async function(e){const t=e.user,i=await async function(e){return await $e(ke+(e=>`/data/wines?where=_ownerId%3D%22${e}%22&sortBy=_createdOn%20desc`)(e))}(t);var n;e.render(V`
  <section id="catalogPage">
    <h1>My Wines</h1>

    ${(n=i).length>0?q(n,(e=>e._id),(e=>V`
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
`)})),we("/search",(async function(e){const t=e.query.query,i=null==t?[]:await async function(e){return await $e(ke+(e=>`/data/wines?where=name%20LIKE%20%22${e}%22`)(e))}(t),n=e.user;e.render(((t,i,n,s)=>V`
  <section id="searchPage">
    <h1>Search by Name</h1>
    <div class="search">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired wine's name"
        .value=${n||""}
      />
      <button @click=${function(){const t=document.getElementById("search-input");if(""==t.value)return void Be("Please fill in!");e.page.redirect(`search?query=${t.value.trim()}`)}} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result">
      ${i.length>0?q(i,(e=>e._id),(e=>V`
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
                        `:r}
                  </div>
                </div>
              </div>
            `)):V`<p class="no-result">No result.</p>`}
    </div>
  </section>
`)(0,i,t,n))})),Qe(),we.start()})();