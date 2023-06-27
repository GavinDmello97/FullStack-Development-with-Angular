"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_form-utils_form-utils_ts-ui_packages_morpheus_index_ts-ui_packages_trusted-types--01a936"],{89359:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function a(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function i(){return`${window.location.protocol}//${window.location.host}${o()+a()}`}n.d(t,{S:()=>i})},24601:(e,t,n)=>{n.d(t,{aJ:()=>S,cI:()=>w,eK:()=>h});var r=n(82918),o=n(83314),a=n(28382),i=n(89359),c=n(68202),l=n(53729),s=n(86283);let u=!1,d=0,m=Date.now(),f=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function p(e){return!!("AbortError"===e.name||"TypeError"===e.name&&f.has(e.message)||e.name.startsWith("ApiError")&&f.has(e.message))}function h(e,t={}){p(e)||y(T(b(e),t))}async function y(e){if(!L())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(E(e.error.stacktrace)){u=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function b(e){return{type:e.name,value:e.message,stacktrace:w(e)}}function T(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,i.S)()||window.location.href,readyState:document.readyState,referrer:(0,c.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:S()||void 0,bundler:l.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function w(e){return(0,a.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let g=/(chrome|moz|safari)-extension:\/\//;function E(e){return e.some(e=>g.test(e.filename)||g.test(e.function))}function S(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let v=!1;function L(){return!v&&!u&&d<10&&(0,o.Gb)()}if(s.iG?.addEventListener("pageshow",()=>v=!1),s.iG?.addEventListener("pagehide",()=>v=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{h(e.data.error)})}},58700:(e,t,n)=>{n.d(t,{Bt:()=>a,DN:()=>l,KL:()=>d,Se:()=>c,qC:()=>m,sw:()=>s});var r=n(5582);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function a(e,t){t&&(i(e,t),(0,r.j)(t)),o(e,"submit",!0)&&e.submit()}function i(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}function c(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function l(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function s(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function u(e){return new URLSearchParams(e)}function d(e,t){let n=new URLSearchParams(e.search),r=u(t);for(let[e,t]of r)n.append(e,t);return n.toString()}function m(e){return u(new FormData(e)).toString()}},5582:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>r,u:()=>o})},95253:(e,t,n)=>{let r;n.d(t,{Y:()=>m,q:()=>f});var o=n(88149),a=n(86058),i=n(44544),c=n(71643);let{getItem:l}=(0,i.Z)("localStorage"),s="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,r=new a.R(e)}catch(e){}function d(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(s)&&(t[e.replace(s,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let r=new URLSearchParams(window.location.search);for(let[e,n]of r)u.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,c.B)().toString(),Object.assign(t,e)}function m(e){r?.sendPageView(d(e))}function f(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}},5875:(e,t,n)=>{n.d(t,{j1:()=>a,jI:()=>c,nn:()=>i});var r=n(39492);function o(e){return{getNodeKey:()=>null,onBeforeElUpdated:(t,n)=>{if("TURBO-FRAME"===n.tagName||n.matches(".js-task-list-field, .contains-task-list")||"false"===n.getAttribute("data-morpheus-enabled"))return t.replaceWith(n),!1;if(t.hasAttribute("data-catalyst")&&n.setAttribute("data-catalyst",t.getAttribute("data-catalyst")||""),t.hasAttribute("data-morpheus-ignore")){let e=(t.getAttribute("data-morpheus-ignore")||"").trim().split(/\s+/);for(let r of e)t.hasAttribute(r)?n.setAttribute(r,t.getAttribute(r)||""):n.removeAttribute(r)}return e?.keepInputValues&&(n instanceof HTMLInputElement&&n.type===t.type||n instanceof HTMLTextAreaElement)&&(n instanceof HTMLInputElement&&("checkbox"===n.type||"radio"===n.type)?n.checked=t.checked:n.value=t.value),!0},onBeforeElChildrenUpdated:(e,t)=>{for(let n of[...e.childNodes,...t.childNodes])n.nodeType===Node.COMMENT_NODE&&n.remove();return!0},onElUpdated:e=>{e.connectedCallback&&queueMicrotask(()=>{e.disconnectedCallback?.(),e.connectedCallback?.()})}}}function a(e){let t=e.closest("[data-morpheus-enabled]");return null!=t&&"false"!==t.getAttribute("data-morpheus-enabled")}function i(e,t,n){if("string"==typeof t){let e=document.createElement("template");e.innerHTML=t,t=e.content}if(!a(e)){e.replaceWith(t);return}if(t instanceof DocumentFragment){let a=Array.from(t.children);a.length?((0,r.Z)(e,a[0],o(n)),e.after(...a.slice(1))):e.replaceWith(t)}else(0,r.Z)(e,t,o(n))}function c(e,t,n){if(!a(e)){e.innerHTML=t;return}let i="",c="";e.firstChild?.nodeType===Node.TEXT_NODE&&(i=e.firstChild.nodeValue?.match(/^\s+/)?.[0]||""),e.lastChild?.nodeType===Node.TEXT_NODE&&(c=e.lastChild.nodeValue?.match(/\s+$/)?.[0]||"");let l=e.cloneNode(!1);l.innerHTML=`${i}${t.trim()}${c}`,(0,r.Z)(e,l,o(n))}},7180:(e,t,n)=>{n.d(t,{O:()=>u,d:()=>TrustedTypesPolicyError});var r=n(46426),o=n(71643),a=n(24601),i=n(27856),c=n.n(i),l=n(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function s({policy:e,policyName:t,fallback:n,fallbackOnError:i=!1,sanitize:s,silenceErrorReporting:u=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;let o=e();return s&&new Promise(e=>{let n=window.performance.now(),r=c().sanitize(o),a=o.replace(/\n/g," ").split(" "),i=r.replace(/\n/g," ").split(" "),s=a.filter(e=>!i.includes(e)),u=window.performance.now();o!==r&&((0,l.q)("trusted_types_policy.sanitize",{policyName:t,policyOutput:o,diffTokens:s.toString(),executionTime:u-n}),e(o))}),o}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,a.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!i))throw e}return n}let u={apply:s}},22490:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let a={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},i={createPolicy:(e,t)=>({name:e,...a,...t})},c=globalThis.trustedTypes??i,l=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}}]);
//# sourceMappingURL=ui_packages_form-utils_form-utils_ts-ui_packages_morpheus_index_ts-ui_packages_trusted-types--01a936-8e9e008d120f.js.map