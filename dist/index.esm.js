/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=t=>(...e)=>{const n=t(...e);return n.isDirective=!0,n};class Directive{constructor(){this.isDirective=!0,this.isClass=!0}body(t){}runPart(t){return this.body(t)}}const e=t=>null!=t&&"boolean"==typeof t.isDirective,n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,i=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,i),e=n}},s=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},o={},r={},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,d=new RegExp(`${a}|${l}`),h="$lit$";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Template{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,l=0;const{strings:c,values:{length:p}}=t;for(;l<p;){const t=s.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)u(e[t].name,h)&&i++;for(;i-- >0;){const e=c[l],n=g.exec(e)[2],i=n.toLowerCase()+h,s=t.getAttribute(i);t.removeAttribute(i);const o=s.split(d);this.parts.push({type:"attribute",index:r,name:n,strings:o}),l+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const i=t.parentNode,s=e.split(d),o=s.length-1;for(let e=0;e<o;e++){let n,o=s[e];if(""===o)n=m();else{const t=g.exec(o);null!==t&&u(t[2],h)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-h.length)+t[3]),n=document.createTextNode(o)}i.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===s[o]?(i.insertBefore(m(),t),n.push(t)):t.data=s[o],l+=o}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(m(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),l++}}else s.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const u=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},p=t=>-1!==t.index,f=document.createComment(""),m=()=>f.cloneNode(),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class TemplateInstance{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&(n.setValue(t[e]),n.commit()),e++}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=s.nextNode();for(;r<i.length;)if(o=i[r],p(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=e.pop(),l=s.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let v;const y=` ${a} `,b=document.createElement("template");class TemplateResult{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const o=g.exec(t);e+=null===o?t+(n?y:l):t.substr(0,o.index)+o[1]+o[2]+h+o[3]+a}return e+=this.strings[t]}getTemplateElement(){const t=b.cloneNode();return t.innerHTML=function convertConstantTemplateStringToTrustedHTML(t){const e=window,n=e.trustedTypes||e.TrustedTypes;return n&&!v&&(v=n.createPolicy("lit-html",{createHTML:t=>t})),v?v.createHTML(t):t}(this.getHTML()),t}}class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),i(e,n.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);let x;const $=(t,e,n,i)=>void 0!==x?x(t,e,n,i):t,C=document.createTextNode("");class AttributeCommitter{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new AttributePart(this)}_getValue(){const t=this.strings,e=this.parts,n=t.length-1;if(1===n&&""===t[0]&&""===t[1]&&void 0!==e[0]){const t=e[0].value;if(!_(t))return t}let i="";for(let s=0;s<n;s++){i+=t[s];const n=e[s];if(void 0!==n){const t=n.value;if(w(t)||!_(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[n]}commit(){if(this.dirty){this.dirty=!1;let t=this._getValue();"symbol"==typeof(t=$(t,this.name,"attribute",this.element))&&(t=String(t)),this.element.setAttribute(this.name,t)}}}class AttributePart{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||w(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=o,t.isClass?t.runPart(this):t(this)}this.value!==o&&this.committer.commit()}}class NodePart{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t.isClass?t.runPart(this):t(this)}const t=this.__pendingValue;t!==o&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof TemplateResult?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):_(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;if(t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType){const n=$(t,"data","property",e);e.data="string"==typeof n?n:String(n)}else{const e=C.cloneNode();this.__commitNode(e);const n=$(t,"textContent","property",e);e.data="string"==typeof n?n:String(n)}this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof TemplateInstance&&this.value.template===e)this.value.update(t.values);else{const n=this.endNode.parentNode;if(void 0!==x&&"STYLE"===n.nodeName||"SCRIPT"===n.nodeName)return void this.__commitText("/* lit-html will not write TemplateResults to scripts and styles */");const i=new TemplateInstance(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)void 0===(n=e[i])&&(n=new NodePart(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class BooleanAttributePart{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t.isClass?t.runPart(this):t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class PropertyCommitter extends AttributeCommitter{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){if(this.dirty){this.dirty=!1;let t=this._getValue();t=$(t,this.name,"property",this.element),this.element[this.name]=t}}}class PropertyPart extends AttributePart{}let M=!1;try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class EventPart{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t.isClass?t.runPart(this):t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,n=this.value,i=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),s=null!=t&&(null==n||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=P(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const P=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new class DefaultTemplateProcessor{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new PropertyCommitter(t,e.slice(1),n).parts}return"@"===s?[new EventPart(t,e.slice(1),i.eventContext)]:"?"===s?[new BooleanAttributePart(t,e.slice(1),n)]:new AttributeCommitter(t,e,n).parts}handleTextExpression(t){return new NodePart(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function templateFactory(t){let e=S.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},S.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(a);return void 0===(n=e.keyString.get(i))&&(n=new Template(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const S=new Map,D=new WeakMap,I=(t,e,n)=>{let i=D.get(e);void 0===i&&(s(e,e.firstChild),D.set(e,i=new NodePart(Object.assign({templateFactory:templateFactory},n))),i.appendInto(e)),i.setValue(t),i.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const A=(t,...e)=>new TemplateResult(t,e,"html",O),T=(t,...e)=>new SVGTemplateResult(t,e,"svg",O);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var L=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},verb("next"),verb("throw"),verb("return"),e[Symbol.asyncIterator]=function(){return this},e);function verb(n){e[n]=t[n]&&function(e){return new Promise((function(i,s){(function settle(t,e,n,i){Promise.resolve(i).then((function(e){t({value:e,done:n})}),e)})(i,s,(e=t[n](e)).done,e.value)}))}}};const E=t((t,e)=>async n=>{var i,s;if(!(n instanceof NodePart))throw new Error("asyncAppend can only be used in text bindings");if(t===n.value)return;let o;n.value=t;let r=0;try{for(var a,l=L(t);!(a=await l.next()).done;){let i=a.value;if(n.value!==t)break;0===r&&n.clear(),void 0!==e&&(i=e(i,r));let s=n.startNode;void 0!==o&&(s=m(),o.endNode=s,n.endNode.parentNode.insertBefore(s,n.endNode)),(o=new NodePart(n.options)).insertAfterNode(s),o.setValue(i),o.commit(),r++}}catch(t){i={error:t}}finally{try{a&&!a.done&&(s=l.return)&&await s.call(l)}finally{if(i)throw i.error}}});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var R=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},verb("next"),verb("throw"),verb("return"),e[Symbol.asyncIterator]=function(){return this},e);function verb(n){e[n]=t[n]&&function(e){return new Promise((function(i,s){(function settle(t,e,n,i){Promise.resolve(i).then((function(e){t({value:e,done:n})}),e)})(i,s,(e=t[n](e)).done,e.value)}))}}};const N=t((t,e)=>async n=>{var i,s;if(!(n instanceof NodePart))throw new Error("asyncReplace can only be used in text bindings");if(t===n.value)return;const o=new NodePart(n.options);n.value=t;let r=0;try{for(var a,l=R(t);!(a=await l.next()).done;){let i=a.value;if(n.value!==t)break;0===r&&(n.clear(),o.appendIntoPart(n)),void 0!==e&&(i=e(i,r)),o.setValue(i),o.commit(),r++}}catch(t){i={error:t}}finally{try{a&&!a.done&&(s=l.return)&&await s.call(l)}finally{if(i)throw i.error}}}),j=new WeakMap,k=t(t=>e=>{if(!(e instanceof NodePart))throw new Error("cache can only be used in text bindings");let n=j.get(e);void 0===n&&(n=new WeakMap,j.set(e,n));const s=e.value;if(s instanceof TemplateInstance){if(t instanceof TemplateResult&&s.template===e.options.templateFactory(t))return void e.setValue(t);{let t=n.get(s.template);void 0===t&&(t={instance:s,nodes:document.createDocumentFragment()},n.set(s.template,t)),i(t.nodes,e.startNode.nextSibling,e.endNode)}}if(t instanceof TemplateResult){const i=e.options.templateFactory(t),s=n.get(i);void 0!==s&&(e.setValue(s.nodes),e.commit(),e.value=s.instance)}e.setValue(t)}),H=new WeakMap,V=t(t=>e=>{if(!(e instanceof AttributePart)||e instanceof PropertyPart||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=e,{element:i}=n;let s=H.get(e);void 0===s&&(i.className=n.strings.join(" "),H.set(e,s=new Set));const{classList:o}=i;s.forEach(e=>{e in t||(o.remove(e),s.delete(e))});for(const e in t){const n=t[e];n!=s.has(e)&&(n?(o.add(e),s.add(e)):(o.remove(e),s.delete(e)))}}),z=new WeakMap,W=t((t,e)=>n=>{const i=z.get(n);if(Array.isArray(t)){if(Array.isArray(i)&&i.length===t.length&&t.every((t,e)=>t===i[e]))return}else if(i===t&&(void 0!==t||z.has(n)))return;n.setValue(e()),z.set(n,Array.isArray(t)?Array.from(t):t)}),Y=t(t=>e=>{if(void 0===t&&e instanceof AttributePart){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)}),B=(t,e)=>{const n=t.startNode.parentNode,i=void 0===e?t.endNode:e.startNode,s=n.insertBefore(m(),i);n.insertBefore(m(),i);const o=new NodePart(t.options);return o.insertAfterNode(s),o},G=(t,e)=>(t.setValue(e),t.commit(),t),F=(t,e,n)=>{const s=t.startNode.parentNode,o=n?n.startNode:t.endNode,r=e.endNode.nextSibling;r!==o&&i(s,e.startNode,r,o)},U=t=>{s(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},X=(t,e,n)=>{const i=new Map;for(let s=e;s<=n;s++)i.set(t[s],s);return i},J=new WeakMap,q=new WeakMap,Z=t((t,e,n)=>{let i;return void 0===n?n=e:void 0!==e&&(i=e),e=>{if(!(e instanceof NodePart))throw new Error("repeat can only be used in text bindings");const s=J.get(e)||[],o=q.get(e)||[],r=[],a=[],l=[];let c,d,h=0;for(const e of t)l[h]=i?i(e,h):h,a[h]=n(e,h),h++;let u=0,p=s.length-1,f=0,m=a.length-1;for(;u<=p&&f<=m;)if(null===s[u])u++;else if(null===s[p])p--;else if(o[u]===l[f])r[f]=G(s[u],a[f]),u++,f++;else if(o[p]===l[m])r[m]=G(s[p],a[m]),p--,m--;else if(o[u]===l[m])r[m]=G(s[u],a[m]),F(e,s[u],r[m+1]),u++,m--;else if(o[p]===l[f])r[f]=G(s[p],a[f]),F(e,s[p],s[u]),p--,f++;else if(void 0===c&&(c=X(l,f,m),d=X(o,u,p)),c.has(o[u]))if(c.has(o[p])){const t=d.get(l[f]),n=void 0!==t?s[t]:null;if(null===n){const t=B(e,s[u]);G(t,a[f]),r[f]=t}else r[f]=G(n,a[f]),F(e,n,s[u]),s[t]=null;f++}else U(s[p]),p--;else U(s[u]),u++;for(;f<=m;){const t=B(e,r[m+1]);G(t,a[f]),r[f++]=t}for(;u<=p;){const t=s[u++];null!==t&&U(t)}J.set(e,r),q.set(e,l)}}),K=new WeakMap,Q=document.createElement("template"),tt=t(t=>e=>{if(!(e instanceof NodePart))throw new Error("unsafeHTML can only be used in text bindings");const n=K.get(e);if(void 0!==n&&w(t)&&t===n.value&&e.value===n.fragment)return;const i=Q.cloneNode();i.innerHTML=t;const s=document.importNode(i.content,!0);e.setValue(s),K.set(e,{value:t,fragment:s})}),et=new WeakMap,nt=t((...t)=>e=>{let n=et.get(e);void 0===n&&(n={lastRenderedIndex:2147483647,values:[]},et.set(e,n));const i=n.values;let s=i.length;n.values=t;for(let o=0;o<t.length&&!(o>n.lastRenderedIndex);o++){const r=t[o];if(w(r)||"function"!=typeof r.then){e.setValue(r),n.lastRenderedIndex=o;break}o<s&&r===i[o]||(n.lastRenderedIndex=2147483647,s=0,Promise.resolve(r).then(t=>{const i=n.values.indexOf(r);i>-1&&i<n.lastRenderedIndex&&(n.lastRenderedIndex=i,e.setValue(t),e.commit())}))}});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function schedule(t){let e=0;return function wrapperFn(n){e||(e=requestAnimationFrame((function executeFrame(){e=0,t.apply(void 0,[n])})))}}function isObject(t){return t&&"object"==typeof t&&!Array.isArray(t)}function clone(t){if(void 0!==t.actions){const e=t.actions.map(t=>{const e=Object.assign({},t),n=Object.assign({},e.props);return delete n.state,delete n.api,delete e.element,e.props=n,e});t.actions=e}return function mergeDeep(t,...e){const n=e.shift();if(isObject(t)&&isObject(n))for(const e in n)if(isObject(n[e]))void 0===t[e]&&(t[e]={}),t[e]=mergeDeep(t[e],n[e]);else if(Array.isArray(n[e])){t[e]=[];for(let i of n[e])isObject(i)?t[e].push(mergeDeep({},i)):t[e].push(i)}else t[e]=n[e];return e.length?mergeDeep(t,...e):t}({},t)}var it=function(){if("undefined"!=typeof Map)return Map;function getIndex(t,e){var n=-1;return t.some((function(t,i){return t[0]===e&&(n=i,!0)})),n}return(function(){function class_1(){this.__entries__=[]}return Object.defineProperty(class_1.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),class_1.prototype.get=function(t){var e=getIndex(this.__entries__,t),n=this.__entries__[e];return n&&n[1]},class_1.prototype.set=function(t,e){var n=getIndex(this.__entries__,t);~n?this.__entries__[n][1]=e:this.__entries__.push([t,e])},class_1.prototype.delete=function(t){var e=this.__entries__,n=getIndex(e,t);~n&&e.splice(n,1)},class_1.prototype.has=function(t){return!!~getIndex(this.__entries__,t)},class_1.prototype.clear=function(){this.__entries__.splice(0)},class_1.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var s=i[n];t.call(e,s[1],s[0])}},class_1}())}(),st="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,ot="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),rt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(ot):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},at=2;var lt=20,ct=["top","right","bottom","left","width","height","size","weight"],dt="undefined"!=typeof MutationObserver,ht=function(){function ResizeObserverController(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function throttle(t,e){var n=!1,i=!1,s=0;function resolvePending(){n&&(n=!1,t()),i&&proxy()}function timeoutCallback(){rt(resolvePending)}function proxy(){var t=Date.now();if(n){if(t-s<at)return;i=!0}else n=!0,i=!1,setTimeout(timeoutCallback,e);s=t}return proxy}(this.refresh.bind(this),lt)}return ResizeObserverController.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},ResizeObserverController.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},ResizeObserverController.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},ResizeObserverController.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},ResizeObserverController.prototype.connect_=function(){st&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),dt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},ResizeObserverController.prototype.disconnect_=function(){st&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},ResizeObserverController.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;ct.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},ResizeObserverController.getInstance=function(){return this.instance_||(this.instance_=new ResizeObserverController),this.instance_},ResizeObserverController.instance_=null,ResizeObserverController}(),ut=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var s=i[n];Object.defineProperty(t,s,{value:e[s],enumerable:!1,writable:!1,configurable:!0})}return t},pt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||ot},ft=createRectInit(0,0,0,0);function toFloat(t){return parseFloat(t)||0}function getBordersSize(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+toFloat(t["border-"+n+"-width"])}),0)}function getHTMLElementContentRect(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return ft;var i=pt(t).getComputedStyle(t),s=function getPaddings(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var s=i[n],o=t["padding-"+s];e[s]=toFloat(o)}return e}(i),o=s.left+s.right,r=s.top+s.bottom,a=toFloat(i.width),l=toFloat(i.height);if("border-box"===i.boxSizing&&(Math.round(a+o)!==e&&(a-=getBordersSize(i,"left","right")+o),Math.round(l+r)!==n&&(l-=getBordersSize(i,"top","bottom")+r)),!function isDocumentElement(t){return t===pt(t).document.documentElement}(t)){var c=Math.round(a+o)-e,d=Math.round(l+r)-n;1!==Math.abs(c)&&(a-=c),1!==Math.abs(d)&&(l-=d)}return createRectInit(s.left,s.top,a,l)}var mt="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof pt(t).SVGGraphicsElement}:function(t){return t instanceof pt(t).SVGElement&&"function"==typeof t.getBBox};function getContentRect(t){return st?mt(t)?function getSVGContentRect(t){var e=t.getBBox();return createRectInit(0,0,e.width,e.height)}(t):getHTMLElementContentRect(t):ft}function createRectInit(t,e,n,i){return{x:t,y:e,width:n,height:i}}var gt=function(){function ResizeObservation(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=createRectInit(0,0,0,0),this.target=t}return ResizeObservation.prototype.isActive=function(){var t=getContentRect(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},ResizeObservation.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},ResizeObservation}(),vt=function vt(t,e){var n=function createReadOnlyRect(t){var e=t.x,n=t.y,i=t.width,s=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,r=Object.create(o.prototype);return ut(r,{x:e,y:n,width:i,height:s,top:n,right:e+i,bottom:s+n,left:e}),r}(e);ut(this,{target:t,contentRect:n})},yt=function(){function ResizeObserverSPI(t,e,n){if(this.activeObservations_=[],this.observations_=new it,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return ResizeObserverSPI.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof pt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new gt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},ResizeObserverSPI.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof pt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},ResizeObserverSPI.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},ResizeObserverSPI.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},ResizeObserverSPI.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new vt(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},ResizeObserverSPI.prototype.clearActive=function(){this.activeObservations_.splice(0)},ResizeObserverSPI.prototype.hasActive=function(){return this.activeObservations_.length>0},ResizeObserverSPI}(),bt="undefined"!=typeof WeakMap?new WeakMap:new it,wt=function ResizeObserver(t){if(!(this instanceof ResizeObserver))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=ht.getInstance(),n=new yt(t,e,this);bt.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){wt.prototype[t]=function(){var e;return(e=bt.get(this))[t].apply(e,arguments)}}));var _t=void 0!==ot.ResizeObserver?ot.ResizeObserver:wt;
/**
 * Main component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function Main(t,e={}){const{api:n,state:i,onDestroy:s,Actions:o,update:r,createComponent:a,html:l,StyleMap:c,schedule:d}=t,h=n.name;let u,p;s(i.subscribe("config.components.List",t=>u=t)),s(i.subscribe("config.components.Chart",t=>p=t));const f=a(u);s(f.destroy);const m=a(p);let g;s(m.destroy),s(i.subscribe("config.plugins",e=>{if(void 0!==e&&Array.isArray(e))for(const n of e){const e=n(t);"function"==typeof e&&s(e)}})),s(i.subscribe("config.wrappers.Main",t=>g=t));const v=n.getActions("");let y,b,w,_=new c({}),x=new c({}),$=new c({}),C=0,M=!1;s(i.subscribe("config.classNames",t=>{const e=i.get("config");y=n.getClass(h,{config:e}),M&&(y+=` ${h}__list-column-header-resizer--active`),b=n.getClass("vertical-scroll",{config:e}),r()})),s(i.subscribeAll(["config.height","config.headerHeight","_internal.scrollBarHeight"],(function heightChange(){const t=i.get("config"),e=i.get("_internal.scrollBarHeight"),n=t.height-t.headerHeight-e;i.update("_internal.height",n),_.style["--height"]=t.height+"px",x.style.height=n+"px",x.style.width=e+"px",x.style["margin-top"]=t.headerHeight+"px",r()}))),s(i.subscribe("_internal.list.columns.resizer.active",(function resizerActiveChange(t){M=t,y=n.getClass(n.name),M&&(y+=` ${n.name}__list-column-header-resizer--active`),r()}))),s(i.subscribeAll(["config.list.rows;","config.chart.items;","config.list.rows.*.parentId","config.chart.items.*.rowId"],(function generateTree(t,e){if(i.get("_internal.flatTreeMap").length&&"subscribe"===e.type)return;const s=i.get("config.list.rows"),o=[];for(const t in s)o.push(s[t]);n.fillEmptyRowValues(o);const a=i.get("config.chart.items"),l=[];for(const t in a)l.push(a[t]);const c=n.makeTreeMap(o,l);i.update("_internal.treeMap",c),i.update("_internal.flatTreeMapById",n.getFlatTreeMapById(c)),i.update("_internal.flatTreeMap",n.flattenTreeMap(c)),r()}),{bulk:!0})),s(i.subscribeAll(["config.list.rows.*.expanded","_internal.treeMap;"],(function prepareExpanded(){const t=i.get("config.list.rows"),e=n.getRowsFromIds(n.getRowsWithParentsExpanded(i.get("_internal.flatTreeMap"),i.get("_internal.flatTreeMapById"),t),t);C=n.getRowsHeight(e),i.update("_internal.list.rowsHeight",C),i.update("_internal.list.rowsWithParentsExpanded",e),r()}),{bulk:!0})),s(i.subscribeAll(["_internal.list.rowsWithParentsExpanded","config.scroll.top"],(function generateVisibleRows(){const{visibleRows:t,compensation:e}=n.getVisibleRowsAndCompensation(i.get("_internal.list.rowsWithParentsExpanded")),s=i.get("_internal.list.visibleRows");let o=!0;if(i.update("config.scroll.compensation",-e),t.length&&(o=t.some((t,e)=>void 0===s[e]||t.id!==s[e].id)),o){i.update("_internal.list.visibleRows",t);const e=[];for(const n of t)for(const t of n._internal.items)e.push(t);i.update("_internal.chart.visibleItems",e)}r()})));let P=0;s(i.subscribe("_internal.list.visibleRows;",(function onVisibleRowsChange(){const t=i.get("config.scroll.top");$.style.width="1px",$.style.height=C+"px",P!==t&&w&&(P=t,w.scrollTop=t),r()})));const O=(t,e)=>{const i=[];let s=e.leftGlobal;const o=e.rightGlobal,r=e.timePerPixel;let a=s-n.time.date(s).startOf(t),l=a/r,c=0,d=0;for(;s<o;){const e={sub:a,subPx:l,leftGlobal:s,rightGlobal:n.time.date(s).endOf(t).valueOf(),width:0,leftPx:0,rightPx:0};e.width=(e.rightGlobal-e.leftGlobal+a)/r,d=e.width>d?e.width:d,e.leftPx=c,c+=e.width,e.rightPx=c,i.push(e),s=e.rightGlobal+1,a=0,l=0}e.maxWidth[t]=d,e.dates[t]=i};s(i.subscribeAll(["config.chart.time","_internal.dimensions.width","config.scroll.left","_internal.scrollBarHeight","_internal.list.width","_internal.chart.dimensions"],d(()=>{const t=i.get("_internal.chart.dimensions.width");let e=n.mergeDeep({},i.get("config.chart.time"));const s=.01*(e=n.time.recalculateFromTo(e)).zoom;let o=i.get("config.scroll.left");if(e.timePerPixel=s+Math.pow(2,e.zoom),e.totalViewDurationMs=n.time.date(e.to).diff(e.from,"milliseconds"),e.totalViewDurationPx=e.totalViewDurationMs/e.timePerPixel,o>e.totalViewDurationPx&&(o=e.totalViewDurationPx-t),e.leftGlobal=o*e.timePerPixel+e.from,e.rightGlobal=e.leftGlobal+t*e.timePerPixel,e.leftInner=e.leftGlobal-e.from,e.rightInner=e.rightGlobal-e.from,e.leftPx=e.leftInner/e.timePerPixel,e.rightPx=e.rightInner/e.timePerPixel,Math.round(e.rightGlobal/e.timePerPixel)>Math.round(e.to/e.timePerPixel)){const t=(e.rightGlobal-e.to)/(e.rightGlobal-e.from);e.timePerPixel=e.timePerPixel-e.timePerPixel*t,e.leftGlobal=o*e.timePerPixel+e.from,e.rightGlobal=e.to,e.rightInner=e.rightGlobal-e.from,e.totalViewDurationMs=e.to-e.from,e.totalViewDurationPx=e.totalViewDurationMs/e.timePerPixel,e.rightInner=e.rightGlobal-e.from,e.rightPx=e.rightInner/e.timePerPixel,e.leftPx=e.leftInner/e.timePerPixel}O("day",e),O("month",e),i.update("_internal.chart.time",e),r()}),{bulk:!0}));const S=document.createElement("canvas"),D=S.getContext("2d");function renderIcon(t){return new Promise(e=>{const n=document.createElement("img");n.setAttribute("src","data:image/svg+xml;base64,"+btoa(t)),n.onload=function(){S.width=n.width,S.height=n.height,D.drawImage(n,0,0),e(S.toDataURL("image/png"))}})}!function renderIcons(){
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
return function __awaiter(t,e,n,i){return new(n||(n=Promise))((function(s,o){function fulfilled(t){try{step(i.next(t))}catch(t){o(t)}}function rejected(t){try{step(i.throw(t))}catch(t){o(t)}}function step(t){t.done?s(t.value):new n((function(e){e(t.value)})).then(fulfilled,rejected)}step((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const t=i.get("config.list.expander.icons"),e={};for(const n in t){const i=t[n];e[n]=yield renderIcon(i)}i.update("_internal.list.expander.icons",e)}))}(),i.update("_internal.scrollBarHeight",n.getScrollBarHeight());let I=0;const A={handleEvent:function handleEvent(t){if("scroll"===t.type){const e=t.target.scrollTop,n=t=>{t.top=e,I=t.top;const n=i.get("_internal.elements.vertical-scroll-inner");if(n){const e=n.clientHeight;t.percent.top=t.top/e}return t};I!==e&&i.update("config.scroll",n,{only:["top","percent.top"]})}else{const e=n.normalizeMouseWheelEvent(t),s=i.get("config.scroll.xMultiplier"),o=i.get("config.scroll.yMultiplier");t.shiftKey&&e.y?i.update("config.scroll.left",t=>n.limitScroll("left",t+=e.y*s)):e.x?i.update("config.scroll.left",t=>n.limitScroll("left",t+=e.x*s)):i.update("config.scroll.top",t=>I=n.limitScroll("top",t+=e.y*o))}},passive:!0,capture:!1};function onScrollStop(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault()}const T={width:0,height:0};let L;class ResizeAction{constructor(t){L||((L=new _t((e,n)=>{const s=t.clientWidth,o=t.clientHeight;T.width===s&&T.height===o||(T.width=s,T.height=o,i.update("_internal.dimensions",T))})).observe(t),i.update("_internal.elements.main",t))}update(){}destroy(t){L.unobserve(t)}}v.includes(ResizeAction)||v.push(ResizeAction),s(()=>{L.disconnect()});const E=Object.assign(Object.assign({},e),{api:n,state:i}),R=o.create(v,E),N=o.create([t=>{w||(w=t,i.update("_internal.elements.vertical-scroll",t))}]),j=o.create([t=>{i.update("_internal.elements.vertical-scroll-inner",t)}]);return n=>g(l`
        <div
          data-info-url="https://github.com/neuronetio/gantt-schedule-timeline-calendar"
          class=${y}
          style=${_}
          @scroll=${onScrollStop}
          @wheel=${onScrollStop}
          data-actions=${R}
        >
          ${f.html()}${m.html()}
          <div
            class=${b}
            style=${x}
            @scroll=${A}
            @wheel=${A}
            data-action=${N}
          >
            <div style=${$} data-actions=${j} />
          </div>
        </div>
      `,{props:e,vido:t,templateProps:n})}
/**
 * List component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function List(t,e={}){const{api:n,state:i,onDestroy:s,Actions:o,update:r,reuseComponents:a,html:l,schedule:c,StyleMap:d,cache:h}=t,u=n.getActions("list");let p,f,m,g,v;s(i.subscribe("config.wrappers.List",t=>p=t)),s(i.subscribe("config.components.ListColumn",t=>f=t)),s(i.subscribe("config.list",(function onListChange(){g=i.get("config.list"),v=g.columns.percent,r()}))),s(i.subscribe("config.classNames",()=>{m=n.getClass("list",{list:g}),r()}));let y=[];s(i.subscribe("config.list.columns.data;",(function onListColumnsDataChange(t){a(y,Object.values(t),t=>({columnId:t.id}),f),r()}))),s(()=>{y.forEach(t=>t.destroy())});const b=new d({height:"","--expander-padding-width":"","--expander-size":""});s(i.subscribeAll(["config.height","config.list.expander"],t=>{const e=i.get("config.list.expander");b.style.height=i.get("config.height")+"px",b.style["--expander-padding-width"]=e.padding+"px",b.style["--expander-size"]=e.size+"px",r()}));const w={handleEvent:c((function onScrollHandler(t){if(t.stopPropagation(),t.preventDefault(),"scroll"===t.type)i.update("config.scroll.top",t.target.scrollTop);else{const e=n.normalizeMouseWheelEvent(t);i.update("config.scroll.top",t=>n.limitScroll("top",t+=e.y*i.get("config.scroll.yMultiplier")))}})),passive:!1};let _;function getWidth(t){_||(_=t.clientWidth,0===v&&(_=0),i.update("_internal.list.width",_))}let x="",$=0,C=0,M=0,P=0;function onPointerStart(t){if("mousedown"===t.type&&0!==t.button)return;t.stopPropagation(),x="xy";const e=n.normalizePointerEvent(t);P=e.x,M=e.y,$=e.x,C=e.y}function onPointerMove(t){t.stopPropagation(),c(()=>{if(""===x||"mousemove"===t.type&&0!==t.button)return;const e=n.normalizePointerEvent(t);return"x"===x||"xy"===x&&Math.abs(e.x-$)>10?(x="x",function handleX(t){let e=t.x-P;i.update("config.list.columns.percent",t=>((t+=e)<0&&(t=0),t>100&&(t=100),t)),M=t.y,P=t.x}(e)):"y"===x||"xy"===x&&Math.abs(e.y-C)>10?(x="y",function handleY(t){let e=t.y-M;e*=i.get("config.scroll.yMultiplier"),Math.abs(t.y-C)<10||(i.update("config.scroll.top",t=>(t-=e,t=n.limitScroll("top",t))),M=t.y,P=t.x)}(e)):void 0})()}function onPointerEnd(t){x="",M=0,P=0}class ListAction{constructor(t){i.update("_internal.elements.list",t),t.addEventListener("touchstart",onPointerStart),document.addEventListener("touchmove",onPointerMove),document.addEventListener("touchend",onPointerEnd),t.addEventListener("mousedown",onPointerStart),document.addEventListener("mousemove",onPointerMove),document.addEventListener("mouseup",onPointerEnd),getWidth(t)}update(t){return getWidth(t)}destroy(t){t.removeEventListener("touchstart",onPointerStart),document.removeEventListener("touchmove",onPointerMove),document.removeEventListener("touchend",onPointerEnd),t.removeEventListener("mousedown",onPointerStart),document.removeEventListener("mousemove",onPointerMove),document.removeEventListener("mouseup",onPointerEnd)}}u.includes(ListAction)||u.push(ListAction);const O=o.create(u,Object.assign(Object.assign({},e),{api:n,state:i}));return e=>p(h(g.columns.percent>0?l`
              <div class=${m} data-actions=${O} style=${b} @scroll=${w} @wheel=${w}>
                ${y.map(t=>t.html())}
              </div>
            `:null),{vido:t,props:{},templateProps:e})}
/**
 * ListColumn component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ListColumn(t,e){const{api:n,state:i,onDestroy:s,onChange:o,Actions:r,update:a,createComponent:l,reuseComponents:c,html:d,StyleMap:h}=t;let u,p,f;s(i.subscribe("config.wrappers.ListColumn",t=>u=t)),s(i.subscribe("config.components.ListColumnRow",t=>p=t)),s(i.subscribe("config.components.ListColumnHeader",t=>f=t));const m=Object.assign(Object.assign({},e),{api:n,state:i}),g=n.getActions("list-column"),v=n.getActions("list-column-rows");let y,b,w;const _=new h({width:"","--width":""}),x=new h({width:"",height:""}),$=new h({width:"",height:""});let C,M,P=`config.list.columns.data.${e.columnId}`,O=i.subscribe(P,(function columnChanged(t){C=t,a()}));function calculateStyle(){const t=i.get("config.list"),e=i.get("config.scroll.compensation");w=t.columns.data[C.id].width*t.columns.percent*.01,M=w;const n=i.get("_internal.height");_.style.width=M+"px",_.style["--width"]=M+"px",x.style.height=n+"px",$.style.height=n+Math.abs(e)+"px",$.style.transform=`translate(0px, ${e}px)`}let S=i.subscribeAll(["config.list.columns.percent","config.list.columns.resizer.width",`config.list.columns.data.${C.id}.width`,"_internal.chart.dimensions.width","_internal.height","config.scroll.compensation","_internal.list.width"],calculateStyle,{bulk:!0});const D=l(f,{columnId:e.columnId});s(D.destroy),o(t=>{e=t;for(const t in e)m[t]=e[t];O&&O(),D.change({columnId:e.columnId}),P=`config.list.columns.data.${e.columnId}`,O=i.subscribe(P,(function columnChanged(t){C=t,a()})),S&&S(),S=i.subscribeAll(["config.list.columns.percent","config.list.columns.resizer.width",`config.list.columns.data.${C.id}.width`,"_internal.chart.dimensions.width","_internal.height","config.scroll.compensation","_internal.list.width"],calculateStyle,{bulk:!0}),D.change(e)}),s(()=>{O(),S()}),s(i.subscribe("config.classNames",t=>{y=n.getClass("list-column"),b=n.getClass("list-column-rows"),a()}));let I=[];function getRowHtml(t){return t.html()}s(i.subscribe("_internal.list.visibleRows;",t=>{c(I,t,t=>t&&{columnId:e.columnId,rowId:t.id,width:M},p),a()})),s((function rowsDestroy(){I.forEach(t=>t.destroy())})),g.push(t=>{i.update("_internal.elements.list-columns",e=>(void 0===e&&(e=[]),e.includes(t)||e.push(t),e))});const A=r.create(g,{column:C,state:i,api:n}),T=r.create(v,{api:n,state:i});return n=>u(d`
        <div class=${y} data-actions=${A} style=${_}>
          ${D.html()}
          <div class=${b} style=${x} data-actions=${T}>
            <div class=${b+"--scroll-compensation"} style=${$}>
              ${I.map(getRowHtml)}
            </div>
          </div>
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * ListColumnHeader component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ListColumnHeader(t,e){const{api:n,state:i,onDestroy:s,onChange:o,Actions:r,update:a,createComponent:l,html:c,cache:d,StyleMap:h}=t,u=Object.assign(Object.assign({},e),{api:n,state:i});let p;s(i.subscribe("config.wrappers.ListColumnHeader",t=>p=t));const f=n.getActions("list-column-header");let m;s(i.subscribe("config.components.ListColumnHeaderResizer",t=>m=t));const g=l(m,{columnId:e.columnId});let v;s(g.destroy),s(i.subscribe("config.components.ListExpander",t=>v=t));const y=l(v,{});let b;s(y.destroy);let w,_,x=i.subscribe(`config.list.columns.data.${e.columnId}`,t=>{b=t,a()});s(x),o(t=>{e=t;for(const t in e)u[t]=e[t];x&&x(),x=i.subscribe(`config.list.columns.data.${e.columnId}`,t=>{b=t,a()})}),s(i.subscribe("config.classNames",()=>{w=n.getClass("list-column-header"),_=n.getClass("list-column-header-content")}));const $=new h({height:"","--height":"","--paddings-count":""});s(i.subscribe("config.headerHeight",()=>{const t=i.get("config");$.style.height=t.headerHeight+"px",$.style["--height"]=t.headerHeight+"px",$.style["--paddings-count"]="1",a()}));const C=r.create(f,u);return n=>p(c`
        <div class=${w} style=${$} data-actions=${C}>
          ${d(b.expander?function withExpander(){return c`
      <div class=${_}>
        ${y.html()}${g.html(b)}
      </div>
    `}():function withoutExpander(){return c`
      <div class=${_}>
        ${g.html(b)}
      </div>
    `}())}
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * ListColumnHeaderResizer component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ListColumnHeaderResizer(t,e){const{api:n,state:i,onDestroy:s,update:o,html:r,Actions:a,cache:l,schedule:c,StyleMap:d}=t,h="list-column-header-resizer",u=n.getActions(h);let p,f;s(i.subscribe("config.wrappers.ListColumnHeaderResizer",t=>p=t)),s(i.subscribe(`config.list.columns.data.${e.columnId}`,t=>{f=t,o()}));let m,g,v,y,b,w,_=new d({width:""}),x=!1;s(i.subscribe("config.classNames",t=>{m=n.getClass(h,{column:f}),g=n.getClass(h+"-container",{column:f}),v=n.getClass(h+"-dots",{column:f}),y=n.getClass(h+"-dots-dot",{column:f}),b=n.getClass(h+"-line",{column:f}),o()})),s(i.subscribeAll([`config.list.columns.data.${f.id}.width`,"config.list.columns.percent","config.list.columns.resizer.width","config.list.columns.resizer.inRealTime"],(t,e)=>{const n=i.get("config.list");w=f.width*n.columns.percent*.01,_.style["--width"]=n.columns.resizer.width+"px",x=n.columns.resizer.inRealTime,i.update("_internal.list.width",w),o()}));let $=[1,2,3,4,5,6,7,8];s(i.subscribe("config.list.columns.resizer.dots",t=>{$=[];for(let e=0;e<t;e++)$.push(e);o()}));let C=!1,M=w;const P=new d({"--display":"none","--left":M+"px"}),O=`config.list.columns.data.${f.id}.width`;function onMouseDown(t){t.stopPropagation(),C=!0,i.update("_internal.list.columns.resizer.active",!0),C?(P.style.display="block",P.style["--left"]=M+"px"):(P.style.display="none",P.style["--left"]="0px")}function onMouseMove(t){if(C){t.stopPropagation();let e=i.get("config.list.columns.minWidth");"number"==typeof f.minWidth&&(e=f.minWidth),(M+=t.movementX)<e&&(M=e),x&&i.update(O,M)}}function onMouseUp(t){C&&(t.stopPropagation(),i.update("_internal.list.columns.resizer.active",!1),i.update(O,M),C=!1)}document.body.addEventListener("mousemove",onMouseMove),s(()=>document.body.removeEventListener("mousemove",c(onMouseMove))),document.body.addEventListener("mouseup",onMouseUp),s(()=>document.body.removeEventListener("mouseup",onMouseUp));const S=a.create(u,{column:f,api:n,state:i});return n=>p(r`
        <div class=${m} data-actions=${S}>
          <div class=${g}>
            ${l(f.header.html?r`
                    ${f.header.html}
                  `:f.header.content)}
          </div>
          <div class=${v} style=${_} @mousedown=${onMouseDown}>
            ${$.map(t=>r`
                  <div class=${y} />
                `)}
          </div>
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * ListColumnRow component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function saveElement(t,e){e.state.update("_internal.elements.list-column-rows",e=>(void 0===e&&(e=[]),e.includes(t)||e.push(t),e))}function ListColumnRow(t,e){const{api:n,state:i,onDestroy:s,Detach:o,Actions:r,update:a,html:l,createComponent:c,onChange:d,StyleMap:h,unsafeHTML:u}=t,p=Object.assign(Object.assign({},e),{api:n,state:i});let f=!1;const m=new o(()=>f);let g,v;s(i.subscribe("config.wrappers.ListColumnRow",t=>g=t)),s(i.subscribe("config.components.ListExpander",t=>v=t));let y,b,w=`_internal.flatTreeMapById.${e.rowId}`,_=i.get(w),x=`config.list.columns.data.${e.columnId}`,$=i.get(x),C=new h($.expander?{height:"",top:"","--height":"","--expander-padding-width":"","--expander-size":""}:{height:"",top:"","--height":""},!0);const M=c(v,{row:_});d((t,n)=>{if(n.leave)return f=!0,void a();f=!1,e=t;for(const t in e)p[t]=e[t];const s=e.rowId,o=e.columnId;y&&y(),b&&b(),w=`_internal.flatTreeMapById.${s}`,x=`config.list.columns.data.${o}`,y=i.subscribeAll([w,x,"config.list.expander"],t=>{$=i.get(x),_=i.get(w);const e=i.get("config.list.expander");C.setStyle({}),C.style.height=_.height+"px",C.style["--height"]=_.height+"px",$.expander&&(C.style["--expander-padding-width"]=e.padding*(_._internal.parents.length+1)+"px");for(let t of _._internal.parents){const e=i.get(`_internal.flatTreeMapById.${t}`);if("object"==typeof e.style&&"Object"===e.style.constructor.name&&"object"==typeof e.style.children){const t=e.style.children;for(const e in t)C.style[e]=t[e]}}if("object"==typeof _.style&&"Object"===_.style.constructor.name&&"object"==typeof _.style.current){const t=_.style.current;for(const e in t)C.style[e]=t[e]}a()},{bulk:!0}),M&&M.change({row:_}),b=i.subscribe(x,t=>{$=t,a()})}),s(()=>{M&&M.destroy(),b(),y()});const P=n.getActions("list-column-row");let O;s(i.subscribe("config.classNames",t=>{O=n.getClass("list-column-row"),a()})),P.includes(saveElement)||P.push();const S=r.create(P,p);return n=>g(l`
        <div detach=${m} class=${O} style=${C} data-actions=${S}>
          ${$.expander?M.html():null}
          <div class=${O+"-content"}>
            ${$.isHTML?function getHtml(){return"function"==typeof $.data?u($.data(_)):u(_[$.data])}():function getText(){return"function"==typeof $.data?$.data(_):_[$.data]}()}
          </div>
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * ListExpander component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ListExpander(t,e){const{api:n,state:i,onDestroy:s,Actions:o,update:r,html:a,createComponent:l,onChange:c}=t,d=n.getActions("list-expander"),h=Object.assign(Object.assign({},e),{api:n,state:i});let u,p;s(i.subscribe("config.components.ListToggle",t=>p=t));const f=l(p,e.row?{row:e.row}:{});let m;if(s(f.destroy),s(i.subscribe("config.wrappers.ListExpander",t=>m=t)),s(i.subscribe("config.classNames",t=>{u=n.getClass("list-expander"),r()})),e.row){c((function onPropsChange(t){e=t;for(const t in e)h[t]=e[t];f.change(e)})),s((function listExpanderDestroy(){}))}const g=o.create(d,h);return n=>m(a`
        <div class=${u} data-action=${g}>
          ${f.html()}
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * ListToggle component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ListToggle(t,e){const{api:n,state:i,onDestroy:s,Actions:o,update:r,html:a,onChange:l,cache:c}=t,d=Object.assign(Object.assign({},e),{api:n,state:i});let h;s(i.subscribe("config.wrappers.ListToggle",t=>h=t));const u=n.getActions("list-expander-toggle");let p,f,m,g,v,y,b,w=!1;if(s(i.subscribe("config.classNames",t=>{p=n.getClass("list-expander-toggle"),f=p+"-child",m=p+"-open",g=p+"-closed",r()})),s(i.subscribe("_internal.list.expander.icons",t=>{t&&(v=t.child,y=t.open,b=t.closed),r()})),e.row){function expandedChange(t){w=t,r()}let t;function onPropsChange(n){e=n;for(const t in e)d[t]=e[t];t&&t(),t=i.subscribe(`config.list.rows.${e.row.id}.expanded`,expandedChange)}l(onPropsChange),s((function listToggleDestroy(){t&&t()}))}else{function expandedChange(t){for(const e of t)if(e.value){w=!0;break}r()}s(i.subscribe("config.list.rows.*.expanded",expandedChange,{bulk:!0}))}function toggle(){w=!w,e.row?i.update(`config.list.rows.${e.row.id}.expanded`,w):i.update("config.list.rows",t=>{for(const e in t)t[e].expanded=w;return t},{only:["*.expanded"]})}const _=o.create(u,d);return n=>h(a`
        <div class=${p} data-action=${_} @click=${toggle}>
          ${c((()=>{var t,n,i;return v?0===(null===(i=null===(n=null===(t=e.row)||void 0===t?void 0:t._internal)||void 0===n?void 0:n.children)||void 0===i?void 0:i.length)?a`
          <img class=${f} src=${v} />
        `:w?a`
            <img class=${m} src=${y} />
          `:a`
            <img class=${g} src=${b} />
          `:""})())}
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * Chart component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function Chart(t,e={}){const{api:n,state:i,onDestroy:s,Actions:o,update:r,html:a,StyleMap:l,createComponent:c}=t,d=i.get("config.components.ChartCalendar"),h=i.get("config.components.ChartTimeline");let u;s(i.subscribe("config.wrappers.Chart",t=>u=t));const p=c(d);s(p.destroy);const f=c(h);s(f.destroy);let m,g,v,y,b=new l({}),w=new l({}),_=n.getActions("chart");s(i.subscribe("config.classNames",t=>{m=n.getClass("chart"),g=n.getClass("horizontal-scroll"),v=n.getClass("horizontal-scroll-inner"),r()})),s(i.subscribe("config.scroll.left",t=>{y&&y.scrollLeft!==t&&(y.scrollLeft=t),r()})),s(i.subscribeAll(["_internal.chart.dimensions.width","_internal.chart.time.totalViewDurationPx"],(function horizontalScroll(t,e){b.style.width=i.get("_internal.chart.dimensions.width")+"px",w.style.width=i.get("_internal.chart.time.totalViewDurationPx")+"px",w.style.height="1px",r()})));const x=t=>{let e,s;if("scroll"===t.type)i.update("config.scroll.left",t.target.scrollLeft),e=t.target.scrollLeft;else{const o=n.normalizeMouseWheelEvent(t),r=i.get("config.scroll.xMultiplier"),a=i.get("config.scroll.yMultiplier");t.shiftKey&&o.y?i.update("config.scroll.left",t=>e=n.limitScroll("left",t+=o.y*r)):o.x?i.update("config.scroll.left",t=>e=n.limitScroll("left",t+=o.x*r)):i.update("config.scroll.top",t=>s=n.limitScroll("top",t+=o.y*a))}const o=i.get("_internal.elements.chart"),r=i.get("_internal.elements.horizontal-scroll-inner");if(o){const t=i.get("config.scroll.left");let e=0;t&&(e=Math.round(t/(r.clientWidth-o.clientWidth)*100))>100&&(e=100),i.update("config.scroll.percent.left",e)}},$={handleEvent:x,passive:!0,capture:!1},C={handleEvent:x,passive:!0,capture:!1};let M,P=0;_.push(t=>{M||((M=new _t((e,n)=>{const s=t.clientWidth,o=t.clientHeight,r=s-i.get("_internal.scrollBarHeight");P!==s&&(P=s,i.update("_internal.chart.dimensions",{width:s,innerWidth:r,height:o}))})).observe(t),i.update("_internal.elements.chart",t))}),s(()=>{M.disconnect()});const O=o.create(_,{api:n,state:i}),S=o.create([t=>{y||(y=t,i.update("_internal.elements.horizontal-scroll",t))}]),D=o.create([t=>{i.update("_internal.elements.horizontal-scroll-inner",t)}]);return e=>u(a`
        <div class=${m} data-actions=${O} @wheel=${C}>
          ${p.html()}${f.html()}
          <div class=${g} style=${b} data-actions=${S} @scroll=${$}>
            <div class=${v} style=${w} data-actions=${D} />
          </div>
        </div>
      `,{vido:t,props:{},templateProps:e})}
/**
 * ChartCalendar component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ChartCalendar(t,e){const{api:n,state:i,onDestroy:s,Actions:o,update:r,reuseComponents:a,html:l,StyleMap:c}=t,d=n.getActions("chart-calendar"),h=Object.assign(Object.assign({},e),{api:n,state:i}),u=i.get("config.components.ChartCalendarDate");let p,f;s(i.subscribe("config.wrappers.ChartCalendar",t=>p=t)),s(i.subscribe("config.classNames",t=>{f=n.getClass("chart-calendar"),r()}));let m,g,v=new c({height:"","--headerHeight":""});s(i.subscribe("config.headerHeight",t=>{m=t,v.style.height=m+"px",v.style["--calendar-height"]=m+"px",r()})),s(i.subscribe("config.chart.time.period",t=>g=t));let y=[],b=[];s(i.subscribe("_internal.chart.time.dates",t=>{const e=n.time.date().format("YYYY-MM-DD");"object"==typeof t.day&&Array.isArray(t.day)&&t.day.length&&a(y,t.day,t=>t&&{period:"day",date:t,currentDate:e},u),"object"==typeof t.month&&Array.isArray(t.month)&&t.month.length&&a(b,t.month,t=>t&&{period:"month",date:t,currentDate:e},u),r()})),s(()=>{y.forEach(t=>t.destroy())}),d.push(t=>{i.update("_internal.elements.chart-calendar",t)});const w=o.create(d,h);return n=>p(l`
        <div class=${f} data-actions=${w} style=${v}>
          <div class=${f+"-dates "+f+"-dates--months"}>${b.map(t=>t.html())}</div>
          <div class=${f+"-dates "+f+"-dates--days"}>${y.map(t=>t.html())}</div>
          </div>
        </div>
      `,{props:e,vido:t,templateProps:n})}
/**
 * ChartCalendarDate component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function saveElement$1(t,e){e.state.update("_internal.elements.chart-calendar-dates",e=>(void 0===e&&(e=[]),e.includes(t)||e.push(t),e))}function ChartCalendarDate(t,e){const{api:n,state:i,onDestroy:s,Actions:o,update:r,onChange:a,html:l,StyleMap:c}=t,d=n.getActions("chart-calendar-date");let h;s(i.subscribe("config.wrappers.ChartCalendarDate",t=>h=t));let u=n.getClass("chart-calendar-date",e),p="";p=n.time.date(e.date.leftGlobal).format("YYYY-MM-DD")===e.currentDate?" current":"";let f,m,g=new c({width:"","margin-left":"",visibility:"visible"}),v=new c({overflow:"hidden","text-align":"left","margin-left":e.date.subPx+8+"px"});const y=()=>{if(!e)return;f=i.get("_internal.chart.time"),g.style.width=e.date.width+"px",g.style["margin-left"]=-e.date.subPx+"px",g.style.visibility="visible",v.style={overflow:"hidden","text-align":"left","margin-left":e.date.subPx+8+"px"};const t=n.time.date(e.date.leftGlobal);p=t.format("YYYY-MM-DD")===e.currentDate?" current":t.subtract(1,"days").format("YYYY-MM-DD")===e.currentDate?" next":t.add(1,"days").format("YYYY-MM-DD")===e.currentDate?" previous":"";const s=f.maxWidth[e.period];switch(e.period){case"month":m=l`
          <div class=${u+"-content "+u+"-content--month"+p} style=${v}>
            ${t.format("MMMM YYYY")}
          </div>
        `,s<=100&&(m=l`
            <div class=${u+"-content "+u+"-content--month"+p}>
              ${t.format("MMM'YY")}
            </div>
          `);break;case"day":if(m=l`
          <div class=${u+"-content "+u+"-content--day _0"+p}>
            <div class=${u+"-content "+u+"-content--day-small"+p}>
              ${t.format("DD")} ${t.format("ddd")}
            </div>
          </div>
        `,s>=40&&s<50)m=l`
            <div class=${u+"-content "+u+"-content--day _40"+p}>
              ${t.format("DD")}
            </div>
            <div class=${u+"-content "+u+"-content--day-word"+p}>
              ${t.format("dd")}
            </div>
          `;else if(s>=50&&s<90)m=l`
            <div class=${u+"-content "+u+"-content--day _50"+p}>
              ${t.format("DD")}
            </div>
            <div class=${u+"-content "+u+"-content--day-word"+p}>
              ${t.format("ddd")}
            </div>
          `;else if(s>=90&&s<180)m=l`
            <div class=${u+"-content "+u+"-content--day _90"+p}>
              ${t.format("DD")}
            </div>
            <div class=${u+"-content "+u+"-content--day-word"+p}>
              ${t.format("dddd")}
            </div>
          `;else if(s>=180&&s<400){const e=[],n=t.startOf("day");for(let t=0;t<12;t++){const i=n.add(2*t,"hours"),s=(n.add(2*t+1,"hours").endOf("hour").valueOf()-i.valueOf())/f.timePerPixel;e.push({width:s,formatted:i.format("HH")})}m=l`
            <div class=${u+"-content "+u+"-content--day _180"+p}>
              ${t.format("DD dddd")}
            </div>
            <div class=${u+"-content "+u+"-content--hours"+p}>
              ${e.map(t=>l`
                    <div
                      class="${u+"-content "+u+"-content--hours-hour"+p}"
                      style="width: ${t.width}px"
                    >
                      ${t.formatted}
                    </div>
                  `)}
            </div>
          `}else if(s>=400&&s<1e3){const e=[],n=t.startOf("day");for(let t=0;t<24;t++){const i=n.add(t,"hours"),s=(n.add(t,"hours").endOf("hour").valueOf()-i.valueOf())/f.timePerPixel;e.push({width:s,formatted:i.format("HH")})}m=l`
            <div class=${u+"-content "+u+"-content--day _400"+p}>
              ${t.format("DD dddd")}
            </div>
            <div class=${u+"-content "+u+"-content--hours"+p}>
              ${e.map(t=>l`
                    <div
                      class=${u+"-content "+u+"-content--hours-hour"+p}
                      style="width: ${t.width}px"
                    >
                      ${t.formatted}
                    </div>
                  `)}
            </div>
          `}else if(s>=1e3&&s<2e3){const e=[],n=t.startOf("day");for(let t=0;t<24;t++){const i=n.add(t,"hours"),s=(n.add(t,"hours").endOf("hour").valueOf()-i.valueOf())/f.timePerPixel;e.push({width:s,formatted:i.format("HH:mm")})}m=l`
            <div class=${u+"-content "+u+"-content--day _1000"+p} style=${v}>
              ${t.format("DD dddd")}
            </div>
            <div class=${u+"-content "+u+"-content--hours"+p}>
              ${e.map(t=>l`
                    <div
                      class=${u+"-content "+u+"-content--hours-hour"+p}
                      style="width: ${t.width}px"
                    >
                      ${t.formatted}
                    </div>
                  `)}
            </div>
          `}else if(s>=2e3&&s<5e3){const e=[],n=t.startOf("day");for(let t=0;t<48;t++){const i=n.add(30*t,"minutes"),s=(n.add(30*(t+1),"minutes").valueOf()-i.valueOf())/f.timePerPixel;e.push({width:s,formatted:i.format("HH:mm")})}m=l`
            <div class=${u+"-content "+u+"-content--day _2000"+p} style=${v}>
              ${t.format("DD dddd")}
            </div>
            <div class=${u+"-content "+u+"-content--hours"+p}>
              ${e.map(t=>l`
                    <div
                      class=${u+"-content "+u+"-content--hours-hour"+p}
                      style="width: ${t.width}px"
                    >
                      ${t.formatted}
                    </div>
                  `)}
            </div>
          `}else if(s>=5e3&&s<2e4){const e=[],n=t.startOf("day");for(let t=0;t<96;t++){const i=n.add(15*t,"minutes"),s=(n.add(15*(t+1),"minutes").valueOf()-i.valueOf())/f.timePerPixel;e.push({width:s,formatted:i.format("HH:mm")})}m=l`
            <div class=${u+"-content "+u+"-content--day _5000"+p} style=${v}>
              ${t.format("DD dddd")}
            </div>
            <div class=${u+"-content "+u+"-content--hours"+p}>
              ${e.map(t=>l`
                    <div
                      class=${u+"-content "+u+"-content--hours-hour"+p}
                      style="width: ${t.width}px"
                    >
                      ${t.formatted}
                    </div>
                  `)}
            </div>
          `}else if(s>=2e4){const e=[],n=t.startOf("day");for(let t=0;t<288;t++){const i=n.add(5*t,"minutes"),s=(n.add(5*(t+1),"minutes").valueOf()-i.valueOf())/f.timePerPixel;e.push({width:s,formatted:i.format("HH:mm")})}m=l`
            <div
              class=${u+"-content "+u+"-content--day _20000"+p}
              style=${v}
            >
              ${t.format("DD dddd")}
            </div>
            <div class=${u+"-content "+u+"-content--hours"+p}>
              ${e.map(t=>l`
                    <div
                      class=${u+"-content "+u+"-content--hours-hour"+p}
                      style="width: ${t.width}px"
                    >
                      ${t.formatted}
                    </div>
                  `)}
            </div>
          `}}r()};let b;const w={date:e.date,period:e.period,api:n,state:i};a((t,n)=>{if(n.leave)return g.style.visibility="hidden",r();e=t,w.date=e.date,w.period=e.period,b&&b(),b=i.subscribeAll(["_internal.chart.time","config.chart.calendar.vertical.smallFormat"],y,{bulk:!0})}),s(()=>{b()}),d.includes(saveElement$1)||d.push(saveElement$1);const _=o.create(d,w);return n=>h(l`
        <div
          class=${u+" "+u+"--"+e.period+p}
          style=${g}
          data-actions=${_}
        >
          ${m}
        </div>
      `,{props:e,vido:t,templateProps:n})}
/**
 * ChartTimeline component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ChartTimeline(t,e){const{api:n,state:i,onDestroy:s,Actions:o,update:r,html:a,createComponent:l,StyleMap:c}=t,d=n.getActions("chart-timeline"),h=Object.assign(Object.assign({},e),{api:n,state:i});let u;s(i.subscribe("config.wrappers.ChartTimeline",t=>u=t));const p=i.get("config.components.ChartTimelineGrid"),f=i.get("config.components.ChartTimelineItems"),m=l(p);s(m.destroy);const g=l(f);let v,y;s(g.destroy),s(i.subscribe("config.classNames",()=>{v=n.getClass("chart-timeline"),y=n.getClass("chart-timeline-inner"),r()}));let b=new c({}),w=new c({});s(i.subscribeAll(["_internal.height","_internal.chart.dimensions.width","_internal.list.rowsHeight","config.scroll.compensation","_internal.chart.time.dates.day"],(function calculateStyle(){const t=n.getCompensationX(),e=n.getCompensationY(),s=i.get("_internal.chart.dimensions.width"),o=i.get("_internal.list.rowsHeight");b.style.height=i.get("_internal.height")+"px",b.style.width=s?s+"px":"0px",w.style.height=o+"px",w.style.width=s?s+t+"px":"0px",w.style.transform=`translate(-${t}px, ${e}px)`,r()}))),d.push(t=>{i.update("_internal.elements.chart-timeline",t)});const _=o.create(d,h);return i=>u(a`
        <div class=${v} style=${b} data-actions=${_} @wheel=${n.onScroll}>
          <div class=${y} style=${w}>
            ${m.html()}${g.html()}
          </div>
        </div>
      `,{props:e,vido:t,templateProps:i})}
/**
 * ChartTimelineGrid component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function ChartTimelineGrid(t,e){const{api:n,state:i,onDestroy:s,Actions:o,update:r,html:a,reuseComponents:l,StyleMap:c}=t,d=n.getActions("chart-timeline-grid"),h={api:n,state:i};let u;s(i.subscribe("config.wrappers.ChartTimelineGrid",t=>u=t));const p=i.get("config.components.ChartTimelineGridRow");let f,m,g;s(i.subscribe("config.classNames",()=>{f=n.getClass("chart-timeline-grid"),r()})),s(i.subscribe("config.chart.time.period",t=>m=t)),s(i.subscribe("config.chart.grid.block.onCreate",t=>g=t));let v=[];const y=[],b=new Map,w=new c({});s(i.subscribeAll(["_internal.list.visibleRows;",`_internal.chart.time.dates.${m};`,"_internal.height","_internal.chart.dimensions.width"],()=>{const t=i.get("_internal.chart.dimensions.width"),e=i.get("_internal.height"),s=i.get(`_internal.chart.time.dates.${m}`);if(!s||0===s.length)return;const o=i.get("_internal.list.visibleRows"),r=n.getCompensationX(),a=n.getCompensationY();w.style.height=e+Math.abs(a)+"px",w.style.width=t+r+"px";let l=0;y.length=0;for(const e of o){const i=[];for(const t of s){let s;b.has(t.leftGlobal)?s=b.get(t.leftGlobal):(s=n.time.date(t.leftGlobal).format("YYYY-MM-DD"),b.set(t.leftGlobal,s));let o={id:e.id+":"+s,time:t,row:e,top:l};for(const t of g)o=t(o);i.push(o)}y.push({row:e,blocks:i,top:l,width:t}),l+=e.height}i.update("_internal.chart.grid.rowsWithBlocks",y)},{bulk:!0}));s(i.subscribe("_internal.chart.grid.rowsWithBlocks",t=>{t&&(l(v,t,t=>t,p),r())})),d.includes((function bindElement(t){i.update("_internal.elements.chart-timeline-grid",t)}))||d.push(),s(()=>{v.forEach(t=>t.destroy())});const _=o.create(d,h);return n=>u(a`
        <div class=${f} data-actions=${_} style=${w}>
          ${v.map(t=>t.html())}
        </div>
      `,{props:e,vido:t,templateProps:n})}
/**
 * ChartTimelineGridRow component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */function bindElementAction(t,e){return e.state.update("_internal.elements.chart-timeline-grid-rows",(function updateGridRows(e){return void 0===e&&(e=[]),e.push(t),e}),{only:null}),{update(){},destroy(t){e.state.update("_internal.elements.chart-timeline-grid-rows",e=>e.filter(e=>e!==t))}}}function ChartTimelineGridRow(t,e){const{api:n,state:i,onDestroy:s,Detach:o,Actions:r,update:a,html:l,reuseComponents:c,onChange:d,StyleMap:h}=t,u=Object.assign(Object.assign({},e),{api:n,state:i});let p;s(i.subscribe("config.wrappers.ChartTimelineGridRow",t=>{p=t,a()}));const f=i.get("config.components.ChartTimelineGridRowBlock"),m=n.getActions("chart-timeline-grid-row");let g=n.getClass("chart-timeline-grid-row"),v=new h({width:e.width+"px",height:e.row.height+"px",overflow:"hidden"},!0),y=!1;const b=new o(()=>y);let w=[];d((t,n)=>{var s,o,r,l,d,h,p;if(n.leave)return y=!0,void a();y=!1,c(w,(e=t).blocks,t=>t,f),v.setStyle({}),v.style.height=e.row.height+"px",v.style.width=e.width+"px";const m=i.get("config.list.rows");for(const t of e.row._internal.parents){const e=null===(r=null===(o=null===(s=m[t].style)||void 0===s?void 0:s.grid)||void 0===o?void 0:o.row)||void 0===r?void 0:r.children;if(e)for(const t in e)v.style[t]=e[t]}const g=null===(p=null===(h=null===(d=null===(l=e.row)||void 0===l?void 0:l.style)||void 0===d?void 0:d.grid)||void 0===h?void 0:h.row)||void 0===p?void 0:p.current;if(g)for(const t in g)v.style[t]=g[t];for(const t in e)u[t]=e[t];a()}),s(()=>{w.forEach(t=>t.destroy())}),-1===m.indexOf(bindElementAction)&&m.push(bindElementAction);const _=r.create(m,u);return n=>p(l`
        <div detach=${b} class=${g} data-actions=${_} style=${v}>
          ${w.map(t=>t.html())}
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * ChartTimelineGridRowBlock component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */const xt=(t,e)=>(e.state.update("_internal.elements.chart-timeline-grid-row-blocks",e=>(void 0===e&&(e=[]),e.push(t),e),{only:null}),t=>{e.state.update("_internal.elements.chart-timeline-grid-row-blocks",e=>e.filter(e=>e!==t),{only:[""]})}),$t=(t,e)=>{const{api:n,state:i,onDestroy:s,Detach:o,Actions:r,update:a,html:l,onChange:c,StyleMap:d}=t,h="chart-timeline-grid-row-block",u=Object.assign(Object.assign({},e),{api:n,state:i});let p=!1;const f=new o(()=>p),m=n.getActions(h);let g;s(i.subscribe("config.wrappers.ChartTimelineGridRowBlock",t=>{g=t,a()}));const v=n.time.date().startOf("day").valueOf();let y;function updateClassName(t){y=n.getClass(h),t.leftGlobal===v&&(y+=" current")}updateClassName(e.time);let b=new d({width:"",height:""});c((function onPropsChange(t,n){var s,o,r,l,c,d,h;if(n.leave)return p=!0,a();p=!1,e=t;for(const t in e)u[t]=e[t];updateClassName(e.time),b.setStyle({}),b.style.width=e.time.width+"px",b.style.height=e.row.height+"px";const f=i.get("config.list.rows");for(const t of e.row._internal.parents){const e=null===(r=null===(o=null===(s=f[t].style)||void 0===s?void 0:s.grid)||void 0===o?void 0:o.block)||void 0===r?void 0:r.children;e&&b.setStyle(Object.assign(Object.assign({},b.style),e))}const m=null===(h=null===(d=null===(c=null===(l=e.row)||void 0===l?void 0:l.style)||void 0===c?void 0:c.grid)||void 0===d?void 0:d.block)||void 0===h?void 0:h.current;m&&b.setStyle(Object.assign(Object.assign({},b.style),m)),a()})),m.includes(xt)||m.push(xt);const w=r.create(m,u);return n=>g(l`
        <div detach=${f} class=${y} data-actions=${w} style=${b}></div>
      `,{props:e,vido:t,templateProps:n})};
/**
 * ChartTimelineItems component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */
function ChartTimelineItems(t,e={}){const{api:n,state:i,onDestroy:s,Actions:o,update:r,html:a,reuseComponents:l,StyleMap:c}=t,d=n.getActions("chart-timeline-items");let h;s(i.subscribe("config.wrappers.ChartTimelineItems",t=>h=t));const u=i.get("config.components.ChartTimelineItemsRow");let p;s(i.subscribe("config.classNames",()=>{p=n.getClass("chart-timeline-items"),r()}));let f=new c({},!0);s(i.subscribeAll(["_internal.height","_internal.chart.dimensions.width","config.scroll.compensation","_internal.chart.time.dates.day"],()=>{const t=i.get("_internal.chart.dimensions.width"),e=i.get("_internal.height"),s=n.getCompensationY(),o=n.getCompensationX();f.style.width=t+o+"px",f.style.height=e+Math.abs(s)+"px"}));let m=[];s(i.subscribeAll(["_internal.list.visibleRows","config.chart.items","config.list.rows"],()=>{const t=i.get("_internal.list.visibleRows");m=l(m,t,t=>({row:t}),u),r()},{bulk:!0})),s((function destroyRows(){m.forEach(t=>t.destroy())}));const g=o.create(d,{api:n,state:i});return n=>h(a`
        <div class=${p} style=${f} data-actions=${g}>
          ${m.map(t=>t.html())}
        </div>
      `,{props:e,vido:t,templateProps:n})}
/**
 * ChartTimelineItemsRow component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */const Ct=(t,e)=>(e.state.update("_internal.elements.chart-timeline-items-rows",e=>(void 0===e&&(e=[]),e.push(t),e),{only:null}),{update(){},destroy(t){e.state.update("_internal.elements.chart-timeline-items-rows",e=>e.filter(e=>e!==t))}}),Mt=(t,e)=>{const{api:n,state:i,onDestroy:s,Detach:o,Actions:r,update:a,html:l,onChange:c,reuseComponents:d,StyleMap:h}=t,u=Object.assign(Object.assign({},e),{api:n,state:i});let p;s(i.subscribe("config.wrappers.ChartTimelineItemsRow",t=>p=t));const f=i.get("config.components.ChartTimelineItemsRowItem");let m,g,v=`_internal.flatTreeMapById.${e.row.id}._internal.items`,y=new h({width:"",height:""},!0),b=[],w=!1;const _=new o(()=>w),x=()=>{const t=i.get("_internal.chart");w=!1;const s=n.getCompensationX();y.style.width=t.dimensions.width+s+"px",e?(y.style.height=e.row.height+"px",y.style["--row-height"]=e.row.height+"px"):w=!0};c((t,n)=>{if(n.leave)return x(),a();e=t;for(const t in e)u[t]=e[t];(t=>{v=`_internal.flatTreeMapById.${t.id}._internal.items`,"function"==typeof m&&m(),"function"==typeof g&&g(),m=i.subscribe("_internal.chart",(t,e)=>{x(),a()}),g=i.subscribe(v,e=>{b=d(b,e,e=>({row:t,item:e}),f),x(),a()})})(e.row)}),s(()=>{g(),m(),b.forEach(t=>t.destroy())});const $=n.getActions("chart-timeline-items-row");let C;s(i.subscribe("config.classNames",()=>{C=n.getClass("chart-timeline-items-row",e),a()})),$.includes(Ct)||$.push(Ct);const M=r.create($,u);return n=>p(l`
        <div detach=${_} class=${C} data-actions=${M} style=${y}>
          ${b.map(t=>t.html())}
        </div>
      `,{props:e,vido:t,templateProps:n})};
/**
 * ChartTimelineItemsRowItem component
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0 (https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 * @link      https://github.com/neuronetio/gantt-schedule-timeline-calendar
 */
class BindElementAction{constructor(t,e){e.state.update("_internal.elements.chart-timeline-items-row-items",(function updateRowItems(e){return void 0===e&&(e=[]),e.push(t),e}),{only:null})}destroy(t,e){e.state.update("_internal.elements.chart-timeline-items-row-items",e=>e.filter(e=>e!==t))}}function ChartTimelineItemsRowItem(t,e){const{api:n,state:i,onDestroy:s,Detach:o,Actions:r,update:a,html:l,onChange:c,unsafeHTML:d,StyleMap:h}=t;let u;s(i.subscribe("config.wrappers.ChartTimelineItemsRowItem",t=>u=t));let p=new h({width:"",height:"",left:""}),f=0,m=0,g=!1;const v={item:e.item,row:e.row,left:f,width:m,api:n,state:i};let y=!1;function updateItem(){var t,s,o,r,l,c,d,h;if(g)return;let u=i.get("_internal.chart.time");f=(e.item.time.start-u.leftGlobal)/u.timePerPixel,f=.1*Math.round(10*f),m=(e.item.time.end-e.item.time.start)/u.timePerPixel,(m-=i.get("config.chart.spacing")||0)&&(m=.1*Math.round(10*m));const v=p.style.width,b=p.style.left,w=n.getCompensationX();p.setStyle({});const _=n.isItemInViewport(e.item,u.leftGlobal,u.rightGlobal);y=!_,_?(p.style.width=m+"px",p.style.left=f+w+"px"):(p.style.width=v,p.style.left=b);const x=i.get("config.list.rows");for(const n of e.row._internal.parents){const e=null===(o=null===(s=null===(t=x[n].style)||void 0===t?void 0:t.items)||void 0===s?void 0:s.item)||void 0===o?void 0:o.children;e&&p.setStyle(Object.assign(Object.assign({},p.style),e))}const $=null===(d=null===(c=null===(l=null===(r=e.row)||void 0===r?void 0:r.style)||void 0===l?void 0:l.items)||void 0===c?void 0:c.item)||void 0===d?void 0:d.current;$&&p.setStyle(Object.assign(Object.assign({},p.style),$));const C=null===(h=e.item)||void 0===h?void 0:h.style;C&&p.setStyle(Object.assign(Object.assign({},p.style),C)),a()}c((function onPropsChange(t,n){if(n.leave)return g=!0,y=!0,a();y=!1,g=!1,e=t,v.item=e.item,v.row=e.row,v.left=f,v.width=m,updateItem()}));const b="chart-timeline-items-row-item",w=n.getActions(b);let _,x;s(i.subscribe("config.classNames",()=>{_=n.getClass(b,e),x=n.getClass(b+"-label",e),a()})),s(i.subscribe("_internal.chart.time",t=>{updateItem()})),-1===w.indexOf(BindElementAction)&&w.push(BindElementAction);const $=r.create(w,v),C=new o(()=>y);return n=>u(l`
        <div detach=${C} class=${_} data-actions=${$} style=${p}>
          <div class=${x}>
            ${e.item.isHtml?d(e.item.label):e.item.label}
          </div>
        </div>
      `,{vido:t,props:e,templateProps:n})}
/**
 * Gantt-Schedule-Timeline-Calendar
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0
 */const Pt=["","list","list-column","list-column-header","list-expander","list-expander-toggle","list-column-header-resizer","list-column-row","chart","chart-calendar","chart-calendar-date","chart-timeline","chart-timeline-grid","chart-timeline-grid-row","chart-timeline-grid-row-block","chart-timeline-items","chart-timeline-items-row","chart-timeline-items-row-item"];function defaultConfig(){const t=function generateEmptyActions(){const t={};return Pt.forEach(e=>t[e]=[]),t}();return{plugins:[],plugin:{},height:740,headerHeight:86,components:{Main:Main,List:List,ListColumn:ListColumn,ListColumnHeader:ListColumnHeader,ListColumnHeaderResizer:ListColumnHeaderResizer,ListColumnRow:ListColumnRow,ListExpander:ListExpander,ListToggle:ListToggle,Chart:Chart,ChartCalendar:ChartCalendar,ChartCalendarDate:ChartCalendarDate,ChartTimeline:ChartTimeline,ChartTimelineGrid:ChartTimelineGrid,ChartTimelineGridRow:ChartTimelineGridRow,ChartTimelineGridRowBlock:$t,ChartTimelineItems:ChartTimelineItems,ChartTimelineItemsRow:Mt,ChartTimelineItemsRowItem:ChartTimelineItemsRowItem},wrappers:{Main:t=>t,List:t=>t,ListColumn:t=>t,ListColumnHeader:t=>t,ListColumnHeaderResizer:t=>t,ListColumnRow:t=>t,ListExpander:t=>t,ListToggle:t=>t,Chart:t=>t,ChartCalendar:t=>t,ChartCalendarDate:t=>t,ChartTimeline:t=>t,ChartTimelineGrid:t=>t,ChartTimelineGridRow:t=>t,ChartTimelineGridRowBlock:t=>t,ChartTimelineItems:t=>t,ChartTimelineItemsRow:t=>t,ChartTimelineItemsRowItem:t=>t},list:{rows:{},rowHeight:40,columns:{percent:100,resizer:{width:10,inRealTime:!0,dots:6},minWidth:50,data:{}},expander:{padding:18,size:20,icon:{width:16,height:16},icons:{child:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><ellipse ry="4" rx="4" id="svg_1" cy="12" cx="12" fill="#000000B0"/></svg>',open:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',closed:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'}}},scroll:{top:0,left:0,xMultiplier:3,yMultiplier:3,percent:{top:0,left:0}},chart:{time:{from:0,to:0,zoom:21,period:"day",dates:{},maxWidth:{}},calendar:{vertical:{smallFormat:"YYYY-MM-DD"}},grid:{block:{onCreate:[]}},items:{},spacing:1},classNames:{},actions:t,locale:{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:t=>{const e=["th","st","nd","rd"],n=t%100;return`[${t}${e[(n-20)%10]||e[n]||e[0]}]`}}}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ot=function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){t.exports=function(){var t="millisecond",e="second",n="minute",i="hour",s="day",o="week",r="month",a="quarter",l="year",d=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:u,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+u(i,2,"0")+":"+u(s,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,r),s=e-i<0,o=t.clone().add(n+(s?-1:1),r);return Number(-(n+(e-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:r,y:l,w:o,d:s,h:i,m:n,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",g={};g[m]=f;var v=function(t){return t instanceof _},y=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var s=t.name;g[s]=t,i=s}return n||(m=i),i},b=function(t,e,n){if(v(t))return t.clone();var i=e?"string"==typeof e?{format:e,pl:n}:e:{};return i.date=t,new _(i)},w=p;w.l=y,w.i=v,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var _=function(){function c(t){this.$L=this.$L||y(t.locale,null,!0),this.parse(t)}var u=c.prototype;return u.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(d);if(i)return n?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},u.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},u.$utils=function(){return w},u.isValid=function(){return!("Invalid Date"===this.$d.toString())},u.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},u.isAfter=function(t,e){return b(t)<this.startOf(e)},u.isBefore=function(t,e){return this.endOf(e)<b(t)},u.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},u.year=function(t){return this.$g(t,"$y",l)},u.month=function(t){return this.$g(t,"$M",r)},u.day=function(t){return this.$g(t,"$W",s)},u.date=function(t){return this.$g(t,"$D","date")},u.hour=function(t){return this.$g(t,"$H",i)},u.minute=function(t){return this.$g(t,"$m",n)},u.second=function(t){return this.$g(t,"$s",e)},u.millisecond=function(e){return this.$g(e,"$ms",t)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(t,a){var c=this,d=!!w.u(a)||a,h=w.p(t),u=function(t,e){var n=w.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return d?n:n.endOf(s)},p=function(t,e){return w.w(c.toDate()[t].apply(c.toDate(),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},f=this.$W,m=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return d?u(1,0):u(31,11);case r:return d?u(1,m):u(0,m+1);case o:var y=this.$locale().weekStart||0,b=(f<y?f+7:f)-y;return u(d?g-b:g+(6-b),m);case s:case"date":return p(v+"Hours",0);case i:return p(v+"Minutes",1);case n:return p(v+"Seconds",2);case e:return p(v+"Milliseconds",3);default:return this.clone()}},u.endOf=function(t){return this.startOf(t,!1)},u.$set=function(o,a){var c,d=w.p(o),h="set"+(this.$u?"UTC":""),u=(c={},c[s]=h+"Date",c.date=h+"Date",c[r]=h+"Month",c[l]=h+"FullYear",c[i]=h+"Hours",c[n]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[d],p=d===s?this.$D+(a-this.$W):a;if(d===r||d===l){var f=this.clone().set("date",1);f.$d[u](p),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else u&&this.$d[u](p);return this.init(),this},u.set=function(t,e){return this.clone().$set(t,e)},u.get=function(t){return this[w.p(t)]()},u.add=function(t,a){var c,d=this;t=Number(t);var h=w.p(a),u=function(e){var n=b(d);return w.w(n.date(n.date()+Math.round(e*t)),d)};if(h===r)return this.set(r,this.$M+t);if(h===l)return this.set(l,this.$y+t);if(h===s)return u(1);if(h===o)return u(7);var p=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,f=this.$d.getTime()+t*p;return w.w(f,this)},u.subtract=function(t,e){return this.add(-1*t,e)},u.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$locale(),o=this.$H,r=this.$m,a=this.$M,l=s.weekdays,c=s.months,d=function(t,i,s,o){return t&&(t[i]||t(e,n))||s[i].substr(0,o)},u=function(t){return w.s(o%12||12,t,"0")},p=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:d(s.monthsShort,a,c,3),MMMM:c[a]||c(this,n),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,l,2),ddd:d(s.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:w.s(o,2,"0"),h:u(1),hh:u(2),a:p(o,r,!0),A:p(o,r,!1),m:String(r),mm:w.s(r,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||f[t]||i.replace(":","")}))},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(t,c,d){var h,u=w.p(c),p=b(t),f=6e4*(p.utcOffset()-this.utcOffset()),m=this-p,g=w.m(this,p);return g=(h={},h[l]=g/12,h[r]=g,h[a]=g/3,h[o]=(m-f)/6048e5,h[s]=(m-f)/864e5,h[i]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[u]||m,d?g:w.a(g)},u.daysInMonth=function(){return this.endOf(r).$D},u.$locale=function(){return g[this.$L]},u.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=y(t,e,!0),n},u.clone=function(){return w.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},c}();return b.prototype=_.prototype,b.extend=function(t,e){return t(e,_,b),b},b.locale=y,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=g[m],b.Ls=g,b}()}));
/**
 * Gantt-Schedule-Timeline-Calendar
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0
 */function timeApi(t,e){const n=t.get("config.locale");return Ot.locale(n,null,!0),{date:t=>t?Ot(t).locale(n.name):Ot().locale(n.name),recalculateFromTo(e){0!==(e={...e}).from&&(e.from=this.date(e.from).startOf("day").valueOf()),0!==e.to&&(e.to=this.date(e.to).endOf("day").valueOf());let n=Number.MAX_SAFE_INTEGER,i=0;const s=t.get("config.chart.items");if(0===Object.keys(s).length)return e;if(0===e.from||0===e.to){for(let t in s){const e=s[t];n>e.time.start&&(n=e.time.start),i<e.time.end&&(i=e.time.end)}0===e.from&&(e.from=this.date(n).startOf("day").valueOf()),0===e.to&&(e.to=this.date(i).endOf("day").valueOf())}return e}}}function Matcher(t,e="*"){this.wchar=e,this.pattern=t,this.segments=[],this.starCount=0,this.minLength=0,this.maxLength=0,this.segStartIndex=0;for(let n=0,i=t.length;n<i;n+=1){const i=t[n];i===e&&(this.starCount+=1,n>this.segStartIndex&&this.segments.push(t.substring(this.segStartIndex,n)),this.segments.push(i),this.segStartIndex=n+1)}this.segStartIndex<t.length&&this.segments.push(t.substring(this.segStartIndex)),this.starCount?(this.minLength=t.length-this.starCount,this.maxLength=1/0):this.maxLength=this.minLength=t.length}function WildcardObject(t,e,n){this.obj=t,this.delimeter=e,this.wildcard=n}Matcher.prototype.match=function match(match){if(this.pattern===this.wchar)return!0;if(0===this.segments.length)return this.pattern===match;const{length:t}=match;if(t<this.minLength||t>this.maxLength)return!1;let e=this.segments.length-1,n=match.length-1,i=!1;for(;;){const t=this.segments[e];if(e-=1,t===this.wchar)i=!0;else{const e=n+1-t.length,s=match.lastIndexOf(t,e);if(-1===s||s>e)return!1;if(i)n=s-1,i=!1;else{if(s!==e)return!1;n-=t.length}}if(0>e)break}return!0},WildcardObject.prototype.simpleMatch=function simpleMatch(t,e){if(t===e)return!0;if(t===this.wildcard)return!0;const n=t.indexOf(this.wildcard);if(n>-1){const i=t.substr(n+1);if(0===n||e.substring(0,n)===t.substring(0,n)){const t=i.length;return!(t>0)||e.substr(-t)===i}}return!1},WildcardObject.prototype.match=function match(t,e){return t===e||t===this.wildcard||e===this.wildcard||this.simpleMatch(t,e)||new Matcher(t).match(e)},WildcardObject.prototype.handleArray=function handleArray(t,e,n,i,s={}){let o=t.indexOf(this.delimeter,n),r=!1;-1===o&&(r=!0,o=t.length);const a=t.substring(n,o);let l=0;for(const n of e){const e=l.toString(),c=""===i?e:i+this.delimeter+l;(a===this.wildcard||a===e||this.simpleMatch(a,e))&&(r?s[c]=n:this.goFurther(t,n,o+1,c,s)),l++}return s},WildcardObject.prototype.handleObject=function handleObject(t,e,n,i,s={}){let o=t.indexOf(this.delimeter,n),r=!1;-1===o&&(r=!0,o=t.length);const a=t.substring(n,o);for(let n in e){n=n.toString();const l=""===i?n:i+this.delimeter+n;(a===this.wildcard||a===n||this.simpleMatch(a,n))&&(r?s[l]=e[n]:this.goFurther(t,e[n],o+1,l,s))}return s},WildcardObject.prototype.goFurther=function goFurther(t,e,n,i,s={}){return Array.isArray(e)?this.handleArray(t,e,n,i,s):this.handleObject(t,e,n,i,s)},WildcardObject.prototype.get=function get(t){return this.goFurther(t,this.obj,0,"")};class ObjectPath{static get(t,e,n=null){if(null===n&&(n=t.slice()),0===n.length||void 0===e)return e;const i=n.shift();return e.hasOwnProperty(i)?0===n.length?e[i]:ObjectPath.get(t,e[i],n):void 0}static set(t,e,n,i=null){if(null===i&&(i=t.slice()),0===i.length){for(const t in n)delete n[t];for(const t in e)n[t]=e[t];return}const s=i.shift();0!==i.length?(n.hasOwnProperty(s)||(n[s]={}),ObjectPath.set(t,e,n[s],i)):n[s]=e}}const St={delimeter:".",notRecursive:";",param:":",wildcard:"*",log:function log(t,e){console.debug(t,e)}},Dt={bulk:!1,debug:!1,source:"",data:void 0},It={only:[],source:"",debug:!1,data:void 0};function DeepState(t={},e=St){this.listeners=new Map,this.data=t,this.options=Object.assign(Object.assign({},St),e),this.id=0,this.pathGet=ObjectPath.get,this.pathSet=ObjectPath.set,this.scan=new WildcardObject(this.data,this.options.delimeter,this.options.wildcard)}DeepState.prototype.getListeners=function getListeners(){return this.listeners},DeepState.prototype.destroy=function destroy(){this.data=void 0,this.listeners=new Map},DeepState.prototype.match=function match(t,e){return t===e||(t===this.options.wildcard||e===this.options.wildcard||this.scan.match(t,e))},DeepState.prototype.getIndicesOf=function getIndicesOf(t,e){const n=t.length;if(0==n)return[];let i,s=0,o=[];for(;(i=e.indexOf(t,s))>-1;)o.push(i),s=i+n;return o},DeepState.prototype.getIndicesCount=function getIndicesCount(t,e){const n=t.length;if(0==n)return 0;let i,s=0,o=0;for(;(i=e.indexOf(t,s))>-1;)o++,s=i+n;return o},DeepState.prototype.cutPath=function cutPath(t,e){t=this.cleanNotRecursivePath(t),e=this.cleanNotRecursivePath(e);const n=this.getIndicesCount(this.options.delimeter,e),i=this.getIndicesOf(this.options.delimeter,t);return t.substr(0,i[n])},DeepState.prototype.trimPath=function trimPath(t){return(t=this.cleanNotRecursivePath(t)).charAt(0)===this.options.delimeter?t.substr(1):t},DeepState.prototype.split=function split(t){return""===t?[]:t.split(this.options.delimeter)},DeepState.prototype.isWildcard=function isWildcard(t){return t.includes(this.options.wildcard)},DeepState.prototype.isNotRecursive=function isNotRecursive(t){return t.endsWith(this.options.notRecursive)},DeepState.prototype.cleanNotRecursivePath=function cleanNotRecursivePath(t){return this.isNotRecursive(t)?t.substring(0,t.length-1):t},DeepState.prototype.hasParams=function hasParams(t){return t.includes(this.options.param)},DeepState.prototype.getParamsInfo=function getParamsInfo(t){let e={replaced:"",original:t,params:{}},n=0,i=[];for(const s of this.split(t)){e.params[n]={original:s,replaced:"",name:""};const t=new RegExp(`\\${this.options.param}([^\\${this.options.delimeter}\\${this.options.param}]+)`,"g");let o=t.exec(s);o?(e.params[n].name=o[1],t.lastIndex=0,e.params[n].replaced=s.replace(t,this.options.wildcard),i.push(e.params[n].replaced),n++):(delete e.params[n],i.push(s),n++)}return e.replaced=i.join(this.options.delimeter),e},DeepState.prototype.getParams=function getParams(t,e){if(!t)return;const n=this.split(e),i={};for(const e in t.params){i[t.params[e].name]=n[e]}return i},DeepState.prototype.subscribeAll=function subscribeAll(t,e,n=Dt){let i=[];for(const s of t)i.push(this.subscribe(s,e,n));return()=>{for(const t of i)t();i=[]}},DeepState.prototype.getCleanListenersCollection=function getCleanListenersCollection(t={}){return Object.assign({listeners:new Map,isRecursive:!1,isWildcard:!1,hasParams:!1,match:void 0,paramsInfo:void 0,path:void 0,count:0},t)},DeepState.prototype.getCleanListener=function getCleanListener(t,e=Dt){return{fn:t,options:Object.assign(Object.assign({},Dt),e)}},DeepState.prototype.getListenerCollectionMatch=function getListenerCollectionMatch(t,e,n){t=this.cleanNotRecursivePath(t);const i=this;return function listenerCollectionMatch(s){return e&&(s=i.cutPath(s,t)),!(!n||!i.match(t,s))||t===s}},DeepState.prototype.getListenersCollection=function getListenersCollection(t,e){if(this.listeners.has(t)){let n=this.listeners.get(t);return this.id++,n.listeners.set(this.id,e),n}let n={isRecursive:!0,isWildcard:!1,hasParams:!1,paramsInfo:void 0,originalPath:t,path:t};this.hasParams(n.path)&&(n.paramsInfo=this.getParamsInfo(n.path),n.path=n.paramsInfo.replaced,n.hasParams=!0),n.isWildcard=this.isWildcard(n.path),this.isNotRecursive(n.path)&&(n.isRecursive=!1);let i=this.getCleanListenersCollection(Object.assign(Object.assign({},n),{match:this.getListenerCollectionMatch(n.path,n.isRecursive,n.isWildcard)}));return this.id++,i.listeners.set(this.id,e),this.listeners.set(n.path,i),i},DeepState.prototype.subscribe=function subscribe(t,e,n=Dt,i="subscribe"){let s=this.getCleanListener(e,n);const o=this.getListenersCollection(t,s);if(o.count++,t=o.path,o.isWildcard){const r=this.scan.get(this.cleanNotRecursivePath(t));if(n.bulk){const a=[];for(const t in r)a.push({path:t,params:this.getParams(o.paramsInfo,t),value:r[t]});e(a,{type:i,listener:s,listenersCollection:o,path:{listener:t,update:void 0,resolved:void 0},options:n,params:void 0})}else for(const a in r)e(r[a],{type:i,listener:s,listenersCollection:o,path:{listener:t,update:void 0,resolved:this.cleanNotRecursivePath(a)},params:this.getParams(o.paramsInfo,a),options:n})}else e(this.pathGet(this.split(this.cleanNotRecursivePath(t)),this.data),{type:i,listener:s,listenersCollection:o,path:{listener:t,update:void 0,resolved:this.cleanNotRecursivePath(t)},params:this.getParams(o.paramsInfo,t),options:n});return this.debugSubscribe(s,o,t),this.unsubscribe(t,this.id)},DeepState.prototype.unsubscribe=function unsubscribe(t,e){const n=this.listeners,i=n.get(t);return function unsub(){i.listeners.delete(e),i.count--,0===i.count&&n.delete(t)}},DeepState.prototype.same=function same(t,e){return(["number","string","undefined","boolean"].includes(typeof t)||null===t)&&e===t},DeepState.prototype.notifyListeners=function notifyListeners(t,e=[],n){const i=[];for(const s in t){let{single:o,bulk:r}=t[s];for(const t of o){if(e.includes(t))continue;const s=this.debugTime(t);t.listener.fn(t.value(),t.eventInfo),n&&i.push(t),this.debugListener(s,t)}for(const t of r){if(e.includes(t))continue;const s=this.debugTime(t),o=[];for(const e of t.value)o.push(Object.assign(Object.assign({},e),{value:e.value()}));t.listener.fn(o,t.eventInfo),n&&i.push(t),this.debugListener(s,t)}}return i},DeepState.prototype.getSubscribedListeners=function getSubscribedListeners(t,e,n,i="update",s=null){n=Object.assign(Object.assign({},It),n);const o={};for(let[r,a]of this.listeners)if(o[r]={single:[],bulk:[],bulkData:[]},a.match(t)){const l=a.paramsInfo?this.getParams(a.paramsInfo,t):void 0,c=a.isRecursive||a.isWildcard?()=>this.get(this.cutPath(t,r)):()=>e,d=[{value:c,path:t,params:l}];for(const e of a.listeners.values())e.options.bulk?o[r].bulk.push({listener:e,listenersCollection:a,eventInfo:{type:i,listener:e,path:{listener:r,update:s||t,resolved:void 0},params:l,options:n},value:d}):o[r].single.push({listener:e,listenersCollection:a,eventInfo:{type:i,listener:e,path:{listener:r,update:s||t,resolved:this.cleanNotRecursivePath(t)},params:l,options:n},value:c})}return o},DeepState.prototype.notifySubscribedListeners=function notifySubscribedListeners(t,e,n,i="update",s=null){return this.notifyListeners(this.getSubscribedListeners(t,e,n,i,s))},DeepState.prototype.getNestedListeners=function getNestedListeners(t,e,n,i="update",s=null){const o={};for(let[r,a]of this.listeners){o[r]={single:[],bulk:[]};const l=this.cutPath(r,t);if(this.match(l,t)){const c=this.trimPath(r.substr(l.length)),d=new WildcardObject(e,this.options.delimeter,this.options.wildcard).get(c),h=a.paramsInfo?this.getParams(a.paramsInfo,t):void 0,u=[],p={};for(const e in d){const l=()=>d[e],c=[t,e].join(this.options.delimeter);for(const[e,d]of a.listeners){const f={type:i,listener:d,listenersCollection:a,path:{listener:r,update:s||t,resolved:this.cleanNotRecursivePath(c)},params:h,options:n};d.options.bulk?(u.push({value:l,path:c,params:h}),p[e]=d):o[r].single.push({listener:d,listenersCollection:a,eventInfo:f,value:l})}}for(const e in p){const s=p[e],l={type:i,listener:s,listenersCollection:a,path:{listener:r,update:t,resolved:void 0},options:n,params:h};o[r].bulk.push({listener:s,listenersCollection:a,eventInfo:l,value:u})}}}return o},DeepState.prototype.notifyNestedListeners=function notifyNestedListeners(t,e,n,i="update",s,o=null){return this.notifyListeners(this.getNestedListeners(t,e,n,i,o),s,!1)},DeepState.prototype.getNotifyOnlyListeners=function getNotifyOnlyListeners(t,e,n,i="update",s=null){const o={};if("object"!=typeof n.only||!Array.isArray(n.only)||void 0===n.only[0]||!this.canBeNested(e))return o;for(const r of n.only){const a=new WildcardObject(e,this.options.delimeter,this.options.wildcard).get(r);o[r]={bulk:[],single:[]};for(const e in a){const l=t+this.options.delimeter+e;for(const[c,d]of this.listeners){const h=d.paramsInfo?this.getParams(d.paramsInfo,l):void 0;if(this.match(c,l)){const u=()=>a[e],p=[{value:u,path:l,params:h}];for(const e of d.listeners.values()){const a={type:i,listener:e,listenersCollection:d,path:{listener:c,update:s||t,resolved:this.cleanNotRecursivePath(l)},params:h,options:n};e.options.bulk?o[r].bulk.some(t=>t.listener===e)||o[r].bulk.push({listener:e,listenersCollection:d,eventInfo:a,value:p}):o[r].single.push({listener:e,listenersCollection:d,eventInfo:a,value:u})}}}}}return o},DeepState.prototype.notifyOnly=function notifyOnly(t,e,n,i="update",s){return void 0!==this.notifyListeners(this.getNotifyOnlyListeners(t,e,n,i,s))[0]},DeepState.prototype.canBeNested=function canBeNested(t){return"object"==typeof t&&null!==t},DeepState.prototype.getUpdateValues=function getUpdateValues(t,e,n){"object"==typeof t&&null!==t&&(t=Array.isArray(t)?t.slice():Object.assign({},t));let i=n;return"function"==typeof n&&(i=n(this.pathGet(e,this.data))),{newValue:i,oldValue:t}},DeepState.prototype.wildcardUpdate=function wildcardUpdate(t,e,n=It){n=Object.assign(Object.assign({},It),n);const i=this.scan.get(t),s={};for(const t in i){const n=this.split(t),{oldValue:o,newValue:r}=this.getUpdateValues(i[t],n,e);this.same(r,o)||(s[t]=r)}const o=[];for(const e in s){const i=s[e];n.only.length?o.push(this.getNotifyOnlyListeners(e,i,n,"update",t)):(o.push(this.getSubscribedListeners(e,i,n,"update",t)),this.canBeNested(i)&&o.push(this.getNestedListeners(e,i,n,"update",t))),n.debug&&this.options.log("Wildcard update",{path:e,newValue:i}),this.pathSet(this.split(e),i,this.data)}let r=[];for(const t of o)r=[...r,...this.notifyListeners(t,r)]},DeepState.prototype.update=function update(t,e,n=It){if(this.isWildcard(t))return this.wildcardUpdate(t,e,n);const i=this.split(t),{oldValue:s,newValue:o}=this.getUpdateValues(this.pathGet(i,this.data),i,e);if(n.debug&&this.options.log(`Updating ${t} ${n.source?`from ${n.source}`:""}`,s,o),this.same(o,s))return o;if(this.pathSet(i,o,this.data),null===(n=Object.assign(Object.assign({},It),n)).only)return o;if(n.only.length)return this.notifyOnly(t,o,n),o;const r=this.notifySubscribedListeners(t,o,n);return this.canBeNested(o)&&this.notifyNestedListeners(t,o,n,"update",r),o},DeepState.prototype.get=function get(t){return void 0===t||""===t?this.data:this.pathGet(this.split(t),this.data)},DeepState.prototype.debugSubscribe=function debugSubscribe(t,e,n){t.options.debug&&this.options.log("listener subscribed",n,t,e)},DeepState.prototype.debugListener=function debugListener(t,e){(e.eventInfo.options.debug||e.listener.options.debug)&&this.options.log("Listener fired",{time:Date.now()-t,info:e})},DeepState.prototype.debugTime=function debugTime(t){return t.listener.options.debug||t.eventInfo.options.debug?Date.now():0};
/**
 * Api functions
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0
 */
const At="gantt-schedule-timeline-calendar";function isObject$1(t){return t&&"object"==typeof t&&!Array.isArray(t)}function mergeDeep$1(t,...e){const n=e.shift();if(isObject$1(t)&&isObject$1(n))for(const e in n)if(isObject$1(n[e]))void 0===t[e]&&(t[e]={}),t[e]=mergeDeep$1(t[e],n[e]);else if(Array.isArray(n[e])){t[e]=[];for(let i of n[e])isObject$1(i)?t[e].push(mergeDeep$1({},i)):t[e].push(i)}else t[e]=n[e];return e.length?mergeDeep$1(t,...e):t}const Tt={name:At,stateFromConfig:function stateFromConfig(t){const e=defaultConfig(),n=function mergeActions(t,e){const n=mergeDeep$1({},e.actions),i=mergeDeep$1({},t.actions);let s=[...Object.keys(n),...Object.keys(i)];s=s.filter(t=>s.includes(t));const o={};for(const t of s)o[t]=[],void 0!==n[t]&&Array.isArray(n[t])&&(o[t]=[...n[t]]),void 0!==i[t]&&Array.isArray(i[t])&&(o[t]=[...o[t],...i[t]]);return delete t.actions,delete e.actions,o}(t,e),i={config:mergeDeep$1({},e,t)};return i.config.actions=n,new DeepState(i,{delimeter:"."})},mergeDeep:mergeDeep$1,date:t=>t?Ot(t):Ot(),dayjs:Ot};
/**
 * Gantt-Schedule-Timeline-Calendar
 *
 * @copyright Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @license   GPL-3.0
 */
function GSTC(e){const n=e.state,i=function getInternalApi(t){let e=t.get(),n=[];const i={name:At,debug:!1,log(...t){this.debug&&console.log.call(console,...t)},mergeDeep:mergeDeep$1,getClass(t){let e=`${At}__${t}`;return t===this.name&&(e=this.name),e},allActions:[],getActions(e){this.allActions.includes(e)||this.allActions.push(e);let n=t.get("config.actions."+e);return void 0===n&&(n=[]),n},isItemInViewport:(t,e,n)=>t.time.start>=e&&t.time.start<n||t.time.end>=e&&t.time.end<n,fillEmptyRowValues(t){let n=0;for(const i in t){const s=t[i];s._internal={parents:[],children:[],items:[]},"number"!=typeof s.height&&(s.height=e.config.list.rowHeight),"boolean"!=typeof s.expanded&&(s.expanded=!1),s.top=n,n+=s.height}return t},generateParents(t,e="parentId"){const n={};for(const i of t){const t=void 0!==i[e]?i[e]:"";void 0===n[t]&&(n[t]={}),n[t][i.id]=i}return n},fastTree(t,e,n=[]){const i=t[e.id];if(e._internal.parents=n,void 0===i)return e._internal.children=[],e;""!==e.id&&(n=[...n,e.id]),e._internal.children=Object.values(i);for(const e in i){const s=i[e];this.fastTree(t,s,n)}return e},makeTreeMap(t,e){const n=this.generateParents(e,"rowId");for(const e of t)e._internal.items=void 0!==n[e.id]?Object.values(n[e.id]):[];const i=this.generateParents(t);return this.fastTree(i,{id:"",_internal:{children:[],parents:[],items:[]}})},getFlatTreeMapById(t,e={}){for(const n of t._internal.children)e[n.id]=n,this.getFlatTreeMapById(n,e);return e},flattenTreeMap(t,e=[]){for(const n of t._internal.children)e.push(n.id),this.flattenTreeMap(n,e);return e},getRowsFromMap:(t,e)=>t.map(t=>e[t.id]),getRowsFromIds(t,e){const n=[];for(const i of t)n.push(e[i]);return n},getRowsWithParentsExpanded(t,e,n){const i=[];t:for(const s of t){for(const t of e[s]._internal.parents){if(!n[t].expanded)continue t}i.push(s)}return i},getRowsHeight(t){let e=0;for(let n of t)e+=n.height;return e},getVisibleRowsAndCompensation(e){const n=[];let i=0,s=0;const o=t.get("config.scroll.top"),r=t.get("_internal.height");let a=0,l=0;for(const t of e)if(a=o+r,i+t.height>=o&&i<=a&&(t.top=s,l=t.top+o-i,s+=t.height,n.push(t)),(i+=t.height)>=a)break;return{visibleRows:n,compensation:l}},normalizeMouseWheelEvent(t){let e=t.deltaX||0,n=t.deltaY||0,i=t.deltaZ||0;const s=t.deltaMode,o=parseInt(getComputedStyle(t.target).getPropertyValue("line-height"));let r=1;switch(s){case 1:r=o;break;case 2:r=window.height}return{x:e*=r,y:n*=r,z:i*=r,event:t}},normalizePointerEvent(t){let e=0,n=0;switch(t.type){case"wheel":const i=this.normalizeMouseWheelEvent(t);e=i.x,n=i.y;break;case"touchstart":case"touchmove":e=t.touches[0].screenX,n=t.touches[0].screenY;break;case"touchend":e=t.changedTouches[0].screenX,n=t.changedTouches[0].screenY;break;default:e=t.x,n=t.y}return{x:e,y:n,event:t}},limitScroll(e,n){if("top"===e){const e=t.get("_internal.list.rowsHeight")-t.get("_internal.height");return n<0?n=0:n>e&&(n=e),n}{const e=t.get("_internal.chart.time.totalViewDurationPx")-t.get("_internal.chart.dimensions.width");return n<0?n=0:n>e&&(n=e),n}},time:timeApi(t),getScrollBarHeight(){const t=document.createElement("div");t.style.visibility="hidden",t.style.height="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetHeight;t.style.overflow="scroll";var n=document.createElement("div");n.style.height="100%",t.appendChild(n);var i=n.offsetHeight;return t.parentNode.removeChild(t),e-i+1},getGridBlocksUnderRect(e,n,i,s){if(!t.get("_internal.elements.main"))return[]},getCompensationX(){const e=t.get("_internal.chart.time.dates.day");return e&&0!==e.length?e[0].subPx:0},getCompensationY:()=>t.get("config.scroll.compensation"),destroy(){e=void 0;for(const t of n)t();n=[],i.debug&&delete window.state}};return i.debug&&(window.state=t,window.api=i),i}(n),s={components:{Main:Main},scrollBarHeight:17,height:0,treeMap:{},flatTreeMap:[],flatTreeMapById:{},list:{expandedHeight:0,visibleRows:[],rows:{},width:0},dimensions:{width:0,height:0},chart:{dimensions:{width:0,innerWidth:0},visibleItems:[],time:{dates:{},timePerPixel:0,firstTaskTime:0,lastTaskTime:0,totalViewDurationMs:0,totalViewDurationPx:0,leftGlobal:0,rightGlobal:0,leftPx:0,rightPx:0,leftInner:0,rightInner:0,maxWidth:{}}},elements:{}};"boolean"==typeof e.debug&&e.debug&&(window.state=n),n.update("",t=>({config:t.config,_internal:s}));const o=function Vido(e,n){let i=0;const s=new Map;let o,r,a=new Map,l=0;const c=Promise.resolve();class ActionsCollector extends Directive{constructor(t){super(),this.instance=t}set(t,e,n=!1){return this.actions=t,this.props=e,n&&console.log(this),this}body(t){const e=t.committer.element;for(const t of this.actions)if(void 0!==t){let n;if(a.has(this.instance))for(const i of a.get(this.instance))if(i.componentAction.create===t&&i.element===e){n=i;break}if(n)n.props=this.props;else{void 0!==e.vido&&delete e.vido;const n={create:t,update(){},destroy(){}},i={instance:this.instance,componentAction:n,element:e,props:this.props};let s=[];a.has(this.instance)&&(s=a.get(this.instance)),s.push(i),a.set(this.instance,s)}}}}class InstanceActionsCollector{constructor(t){this.instance=t}create(t,e){const n=new ActionsCollector(this.instance);return n.set(t,e),n}}class PublicComponentMethods{constructor(t,e,n={}){this.instance=t,this.vidoInstance=e,this.props=n,this.destroy=this.destroy.bind(this),this.update=this.update.bind(this),this.change=this.change.bind(this),this.html=this.html.bind(this)}destroy(){return this.vidoInstance.debug&&(console.groupCollapsed(`destroying component ${this.instance}`),console.log(clone({components:s.keys(),actionsByInstance:a})),console.trace(),console.groupEnd()),this.vidoInstance.destroyComponent(this.instance,this.vidoInstance)}update(){return this.vidoInstance.debug&&(console.groupCollapsed(`updating component ${this.instance}`),console.log(clone({components:s.keys(),actionsByInstance:a})),console.trace(),console.groupEnd()),this.vidoInstance.updateTemplate(this.vidoInstance)}change(t,e){this.vidoInstance.debug&&(console.groupCollapsed(`changing component ${this.instance}`),console.log(clone({props:this.props,newProps:t,components:s.keys(),actionsByInstance:a})),console.trace(),console.groupEnd()),s.get(this.instance).change(t,e)}html(t={}){return s.get(this.instance).update(t,this.vidoInstance)}}function vido(){this.destroyable=[],this.onChangeFunctions=[],this.debug=!1,this.state=e,this.api=n,this.lastProps={},this.reuseComponents=this.reuseComponents.bind(this),this.onDestroy=this.onDestroy.bind(this),this.onChange=this.onChange.bind(this),this.update=this.update.bind(this)}vido.prototype.html=A,vido.prototype.svg=T,vido.prototype.directive=t,vido.prototype.asyncAppend=E,vido.prototype.asyncReplace=N,vido.prototype.cache=k,vido.prototype.classMap=V,vido.prototype.guard=W,vido.prototype.ifDefined=Y,vido.prototype.repeat=Z,vido.prototype.unsafeHTML=tt,vido.prototype.until=nt,vido.prototype.schedule=schedule,vido.prototype.actionsByInstance=(t,e)=>{};const d=[],h=[];vido.prototype.StyleMap=class StyleMap extends Directive{constructor(t,e=!1){super(),this.previous={},this.style=t,this.detach=e}setStyle(t){this.style=t}setDetach(t){this.detach=t}body(t){d.length=0,h.length=0;const e=t.committer.element,n=e.style;let i=this.previous;for(const t in i)void 0===this.style[t]&&d.push(t);for(const t in this.style){const e=this.style[t],n=i[t];void 0!==n&&n===e||h.push(t)}if(d.length||h.length){let t,i;this.detach&&(t=e.parentNode)&&(i=e.nextSibling,e.remove());for(const t of d)n.removeProperty(t);for(const t of h){const e=this.style[t];t.includes("-")?n.setProperty(t,e):n[t]=e}this.detach&&t&&t.insertBefore(e,i),this.previous=Object.assign({},this.style)}}};const u=new WeakMap;vido.prototype.Detach=class Detach extends Directive{constructor(t){super(),this.ifFn=t}body(t){const e=this.ifFn(),n=t.committer.element;if(e){if(!u.has(t)){const e=n.nextSibling;u.set(t,{element:n,nextSibling:e})}n.remove()}else{const e=u.get(t);null!=e&&(e.nextSibling.parentNode.insertBefore(e.element,e.nextSibling),u.delete(t))}}},vido.prototype.onDestroy=function onDestroy(t){this.destroyable.push(t)},vido.prototype.onChange=function onChange(t){this.onChangeFunctions.push(t)},vido.prototype.update=function update(){this.updateTemplate()},vido.prototype.reuseComponents=function reuseComponents(t,e,n,i,s=!0){const o=[],r=t.length,a=e.length;let l=!1,c=0;if(r<a){let s=a-r;for(;s;){const r=e[a-s],l=this.createComponent(i,n(r));t.push(l),o.push(l.instance),s--}}else if(r>a){let e=r-a;for(s&&(l=!0,c=r-e);e;){const n=r-e;s||(o.push(t[n].instance),t[n].destroy()),e--}s||(t.length=a)}let d=0;for(const i of t){const t=e[d];o.includes(i.instance)||i.change(n(t),{leave:l&&d>=c}),d++}return t};class InternalComponentMethods{constructor(t,e,n){this.instance=t,this.vidoInstance=e,this.updateFunction=n}destroy(){this.vidoInstance.debug&&(console.groupCollapsed(`component destroy method fired ${this.instance}`),console.log(clone({props:this.vidoInstance.props,components:s.keys(),destroyable:this.vidoInstance.destroyable,actionsByInstance:a})),console.trace(),console.groupEnd());for(const t of this.vidoInstance.destroyable)t();this.vidoInstance.onChangeFunctions=[],this.vidoInstance.destroyable=[]}update(t={}){return this.vidoInstance.debug&&(console.groupCollapsed(`component update method fired ${this.instance}`),console.log(clone({components:s.keys(),actionsByInstance:a})),console.trace(),console.groupEnd()),this.updateFunction(t)}change(t,e={leave:!1}){const n=t;this.vidoInstance.debug&&(console.groupCollapsed(`component change method fired ${this.instance}`),console.log(clone({props:n,components:s.keys(),onChangeFunctions:this.vidoInstance.onChangeFunctions,changedProps:t,actionsByInstance:a})),console.trace(),console.groupEnd());for(const n of this.vidoInstance.onChangeFunctions)n(t,e)}}return vido.prototype.createComponent=function createComponent(t,e={}){const n=t.name+":"+i++;let o;(o=new vido).instance=n,o.Actions=new InstanceActionsCollector(n);const r=new PublicComponentMethods(n,o,e),l=new InternalComponentMethods(n,o,t(o,e));return s.set(n,l),s.get(n).change(e),o.debug&&(console.groupCollapsed(`component created ${n}`),console.log(clone({props:e,components:s.keys(),actionsByInstance:a})),console.trace(),console.groupEnd()),r},vido.prototype.destroyComponent=function destroyComponent(t,e){if(e.debug&&(console.groupCollapsed(`destroying component ${t}...`),console.log(clone({components:s.keys(),actionsByInstance:a})),console.trace(),console.groupEnd()),a.has(t))for(const e of a.get(t))"function"==typeof e.componentAction.destroy&&e.componentAction.destroy(e.element,e.props);a.delete(t),s.get(t).destroy(),s.delete(t),e.debug&&(console.groupCollapsed(`component destroyed ${t}`),console.log(clone({components:s.keys(),actionsByInstance:a})),console.trace(),console.groupEnd())},vido.prototype.updateTemplate=function updateTemplate(){const t=++l,e=this;c.then((function flush(){t===l&&(l=0,e.render())}))},vido.prototype.createApp=function createApp(t){r=t.element;const e=this.createComponent(t.component,t.props);return o=e.instance,this.render(),e},vido.prototype.executeActions=function executeActions(){var t,e;for(const n of a.values()){for(const i of n)if(void 0===i.element.vido){const n=i.componentAction,s=n.create;if(void 0!==s){let o;void 0!==(o=void 0===(null===(t=s.prototype)||void 0===t?void 0:t.update)&&void 0===(null===(e=s.prototype)||void 0===e?void 0:e.destroy)?s(i.element,i.props):new s(i.element,i.props))&&("function"==typeof o?n.destroy=o:("function"==typeof o.update&&(n.update=o.update.bind(o)),"function"==typeof o.destroy&&(n.destroy=o.destroy.bind(o))))}}else i.element.vido=i.props,"function"==typeof i.componentAction.update&&i.componentAction.update(i.element,i.props);for(const t of n)t.element.vido=t.props}},vido.prototype.render=function renderView(){I(s.get(o).update(),r),this.executeActions()},new vido}(n,i);return{state:n,app:o.createApp({component:Main,props:o,element:e.element})}}GSTC.api=Tt;export default GSTC;
//# sourceMappingURL=index.esm.js.map
