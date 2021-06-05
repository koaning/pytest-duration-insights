var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(o)}function i(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function l(t,n,e){t.$$.on_destroy.push(s(n,e))}function a(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o,r,c,i){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=f(n,e,o,i);t.p(r,u)}}const p="undefined"!=typeof window;let h=p?()=>window.performance.now():()=>Date.now(),$=p?t=>requestAnimationFrame(t):t;const y=new Set;function g(t){y.forEach((n=>{n.c(t)||(y.delete(n),n.f())})),0!==y.size&&$(g)}function m(t){let n;return 0===y.size&&$(g),{promise:new Promise((e=>{y.add(n={c:t,f:e})})),abort(){y.delete(n)}}}function v(t,n){t.appendChild(n)}function x(t,n,e){t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function k(){return _(" ")}function A(){return _("")}function E(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function z(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function C(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let M;function j(){if(void 0===M){M=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){M=!0}}return M}function B(t,n,e){t.classList[e?"add":"remove"](n)}const O=new Set;let S,P=0;function R(t,n,e,o,r,c,i,u=0){const s=16.666/o;let l="{\n";for(let t=0;t<=1;t+=s){const o=n+(e-n)*c(t);l+=100*t+`%{${i(o,1-o)}}\n`}const a=l+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${u}`,d=t.ownerDocument;O.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(w("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,P+=1,f}function T(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),P-=r,P||$((()=>{P||(O.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),O.clear())})))}function D(t){S=t}function I(){if(!S)throw new Error("Function called outside component initialization");return S}const N=[],L=[],W=[],q=[],Y=Promise.resolve();let F=!1;function H(t){W.push(t)}let X=!1;const G=new Set;function J(){if(!X){X=!0;do{for(let t=0;t<N.length;t+=1){const n=N[t];D(n),K(n.$$)}for(D(null),N.length=0;L.length;)L.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];G.has(n)||(G.add(n),n())}W.length=0}while(N.length);for(;q.length;)q.pop()();F=!1,X=!1,G.clear()}}function K(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}let Q;function U(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const V=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function nt(){Z.r||c(Z.c),Z=Z.p}function et(t,n){t&&t.i&&(V.delete(t),t.i(n))}function ot(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),Z.c.push((()=>{V.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const rt={duration:0};function ct(e,o,r,u){let s=o(e,r),l=u?0:1,a=null,f=null,d=null;function p(){d&&T(e,d)}function $(t,n){const e=t.b-l;return n*=Math.abs(e),{a:l,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:r=0,duration:i=300,easing:u=n,tick:y=t,css:g}=s||rt,v={start:h()+r,b:o};o||(v.group=Z,Z.r+=1),a||f?f=v:(g&&(p(),d=R(e,l,o,i,r,u,g)),o&&y(0,1),a=$(v,i),H((()=>U(e,o,"start"))),m((t=>{if(f&&t>f.start&&(a=$(f,i),f=null,U(e,a.b,"start"),g&&(p(),d=R(e,l,a.b,a.duration,0,u,s.css))),a)if(t>=a.end)y(l=a.b,1-l),U(e,a.b,"end"),f||(a.b?p():--a.group.r||c(a.group.c)),a=null;else if(t>=a.start){const n=t-a.start;l=a.a+a.d*u(n/a.duration),y(l,1-l)}return!(!a&&!f)})))}return{run(t){i(s)?(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then((()=>{s=s(),y(t)})):y(t)},end(){p(),a=f=null}}}function it(t){t&&t.c()}function ut(t,n,e,r){const{fragment:u,on_mount:s,on_destroy:l,after_update:a}=t.$$;u&&u.m(n,e),r||H((()=>{const n=s.map(o).filter(i);l?l.push(...n):c(n),t.$$.on_mount=[]})),a.forEach(H)}function st(t,n){const e=t.$$;null!==e.fragment&&(c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){-1===t.$$.dirty[0]&&(N.push(t),F||(F=!0,Y.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,o,i,u,s,l=[-1]){const a=S;D(n);const f=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(f.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&lt(n,t)),e})):[],f.update(),d=!0,c(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();e.intro&&et(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),J()}D(a)}class ft{$destroy(){st(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function pt(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!dt.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),dt.push(e,n)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,u=t){const s=[i,u];return r.push(s),1===r.length&&(o=e(c)||t),i(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function ht(n,e,o){const r=!Array.isArray(n),u=r?[n]:n,l=e.length<2;return{subscribe:pt(o,(n=>{let o=!1;const a=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=e(r?a[0]:a,n);l?n(o):d=i(o)?o:t},h=u.map(((t,n)=>s(t,(t=>{a[n]=t,f&=~(1<<n),o&&p()}),(()=>{f|=1<<n}))));return o=!0,p(),function(){c(h),d()}})).subscribe}}function $t(t,n){var e=t[0],o=n[0],r=(n[1]-o)/(t[1]-e);return Object.assign((function(t){return o+(t-e)*r}),{inverse:function(){return $t(n,t)}})}function yt(t){var n=String(t).split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")}function gt(t){let n,e,o,r,i;const u=t[15].default,s=a(u,t,t[14],null);return{c(){n=w("div"),s&&s.c(),z(n,"class","pancake-chart svelte-1gzh5rp"),H((()=>t[17].call(n))),B(n,"clip",t[0])},m(c,u){x(c,n,u),s&&s.m(n,null),t[16](n),e=function(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=w("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const o=j();let r;return o?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=E(window,"message",(t=>{t.source===e.contentWindow&&n()}))):(e.src="about:blank",e.onload=()=>{r=E(e.contentWindow,"resize",n)}),v(t,e),()=>{(o||r&&e.contentWindow)&&r(),b(e)}}(n,t[17].bind(n)),o=!0,r||(i=[E(n,"mousemove",t[6]),E(n,"mouseleave",t[7])],r=!0)},p(t,[e]){s&&s.p&&(!o||16384&e)&&d(s,u,t,t[14],e,null,null),1&e&&B(n,"clip",t[0])},i(t){o||(et(s,t),o=!0)},o(t){ot(s,t),o=!1},d(o){o&&b(n),s&&s.d(o),t[16](null),e(),r=!1,c(i)}}}const mt={};function vt(){return function(t){return I().$$.context.get(t)}(mt)}function xt(t,n,e){let o,r,c,i,u,{$$slots:s={},$$scope:a}=n,{x1:f=0}=n,{y1:d=0}=n,{x2:p=1}=n,{y2:h=1}=n,{clip:$=!1}=n;const y=pt(),g=pt(),m=pt(),v=pt(),x=pt();l(t,x,(t=>e(2,c=t)));const b=pt();l(t,b,(t=>e(3,i=t)));const w=pt(null),_=ht([y,m],(([t,n])=>$t([t,n],[0,100]))),k=ht([g,v],(([t,n])=>$t([t,n],[100,0]))),A=ht(_,(t=>t.inverse()));l(t,A,(t=>e(18,o=t)));const E=ht(k,(t=>t.inverse()));return l(t,E,(t=>e(19,r=t))),function(t,n){I().$$.context.set(t,n)}(mt,{x1:y,y1:g,x2:m,y2:v,x_scale:_,y_scale:k,x_scale_inverse:A,y_scale_inverse:E,pointer:w,width:x,height:b}),t.$$set=t=>{"x1"in t&&e(10,f=t.x1),"y1"in t&&e(11,d=t.y1),"x2"in t&&e(12,p=t.x2),"y2"in t&&e(13,h=t.y2),"clip"in t&&e(0,$=t.clip),"$$scope"in t&&e(14,a=t.$$scope)},t.$$.update=()=>{1024&t.$$.dirty&&y.set(f),2048&t.$$.dirty&&g.set(d),4096&t.$$.dirty&&m.set(p),8192&t.$$.dirty&&v.set(h)},[$,u,c,i,x,b,t=>{const n=u.getBoundingClientRect(),e=t.clientX-n.left,c=t.clientY-n.top,i=o(100*e/(n.right-n.left)),s=r(100*c/(n.bottom-n.top));w.set({x:i,y:s,left:e,top:c})},()=>{w.set(null)},A,E,f,d,p,h,a,s,function(t){L[t?"unshift":"push"]((()=>{u=t,e(1,u)}))},function(){c=this.clientWidth,x.set(c),i=this.clientHeight,b.set(i)}]}class bt extends ft{constructor(t){super(),at(this,t,xt,gt,u,{x1:10,y1:11,x2:12,y2:13,clip:0})}}function wt(t){let n,e;const o=t[10].default,r=a(o,t,t[9],null);return{c(){n=w("div"),r&&r.c(),z(n,"class","pancake-box svelte-38xupb"),z(n,"style",t[0])},m(t,o){x(t,n,o),r&&r.m(n,null),e=!0},p(t,[c]){r&&r.p&&(!e||512&c)&&d(r,o,t,t[9],c,null,null),(!e||1&c)&&z(n,"style",t[0])},i(t){e||(et(r,t),e=!0)},o(t){ot(r,t),e=!1},d(t){t&&b(n),r&&r.d(t)}}}function _t(t,n,e){let o,r,{$$slots:c={},$$scope:i}=n,{x1:u=0}=n,{x2:s=1}=n,{y1:a=0}=n,{y2:f=1}=n;const{x_scale:d,y_scale:p}=vt();let h;return l(t,d,(t=>e(7,o=t))),l(t,p,(t=>e(8,r=t))),t.$$set=t=>{"x1"in t&&e(3,u=t.x1),"x2"in t&&e(4,s=t.x2),"y1"in t&&e(5,a=t.y1),"y2"in t&&e(6,f=t.y2),"$$scope"in t&&e(9,i=t.$$scope)},t.$$.update=()=>{if(504&t.$$.dirty){const t=o(u),n=o(s),c=r(a),i=r(f),l=Math.min(t,n),d=Math.max(t,n),p=Math.min(c,i),$=Math.max(c,i);e(0,h=`left: ${l}%; bottom: ${100-$}%; width: ${d-l}%; height: ${$-p}%;`)}},[h,d,p,u,s,a,f,o,r,i,c]}class kt extends ft{constructor(t){super(),at(this,t,_t,wt,u,{x1:3,x2:4,y1:5,y2:6})}}function At(t){var n=0,e=t.children,o=e&&e.length;if(o)for(;--o>=0;)n+=e[o].value;else n=1;t.value=n}function Et(t,n){t instanceof Map?(t=[void 0,t],void 0===n&&(n=Ct)):void 0===n&&(n=zt);for(var e,o,r,c,i,u=new Bt(t),s=[u];e=s.pop();)if((r=n(e.data))&&(i=(r=Array.from(r)).length))for(e.children=r,c=i-1;c>=0;--c)s.push(o=r[c]=new Bt(r[c])),o.parent=e,o.depth=e.depth+1;return u.eachBefore(jt)}function zt(t){return t.children}function Ct(t){return Array.isArray(t)?t[1]:null}function Mt(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function jt(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Bt(t){this.data=t,this.depth=this.height=0,this.parent=null}function Ot(t){if("function"!=typeof t)throw new Error;return t}function St(){return 0}function Pt(t){return function(){return t}}function Rt(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function Tt(t,n,e,o,r){for(var c,i=t.children,u=-1,s=i.length,l=t.value&&(o-n)/t.value;++u<s;)(c=i[u]).y0=e,c.y1=r,c.x0=n,c.x1=n+=c.value*l}function Dt(t,n,e,o,r){for(var c,i=t.children,u=-1,s=i.length,l=t.value&&(r-e)/t.value;++u<s;)(c=i[u]).x0=n,c.x1=o,c.y0=e,c.y1=e+=c.value*l}Bt.prototype=Et.prototype={constructor:Bt,count:function(){return this.eachAfter(At)},each:function(t,n){let e=-1;for(const o of this)t.call(n,o,++e,this);return this},eachAfter:function(t,n){for(var e,o,r,c=this,i=[c],u=[],s=-1;c=i.pop();)if(u.push(c),e=c.children)for(o=0,r=e.length;o<r;++o)i.push(e[o]);for(;c=u.pop();)t.call(n,c,++s,this);return this},eachBefore:function(t,n){for(var e,o,r=this,c=[r],i=-1;r=c.pop();)if(t.call(n,r,++i,this),e=r.children)for(o=e.length-1;o>=0;--o)c.push(e[o]);return this},find:function(t,n){let e=-1;for(const o of this)if(t.call(n,o,++e,this))return o},sum:function(t){return this.eachAfter((function(n){for(var e=+t(n.data)||0,o=n.children,r=o&&o.length;--r>=0;)e+=o[r].value;n.value=e}))},sort:function(t){return this.eachBefore((function(n){n.children&&n.children.sort(t)}))},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),o=n.ancestors(),r=null;t=e.pop(),n=o.pop();for(;t===n;)r=t,t=e.pop(),n=o.pop();return r}(n,t),o=[n];n!==e;)n=n.parent,o.push(n);for(var r=o.length;t!==e;)o.splice(r,0,t),t=t.parent;return o},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(n){n.children||t.push(n)})),t},links:function(){var t=this,n=[];return t.each((function(e){e!==t&&n.push({source:e.parent,target:e})})),n},copy:function(){return Et(this).eachBefore(Mt)},[Symbol.iterator]:function*(){var t,n,e,o,r=this,c=[r];do{for(t=c.reverse(),c=[];r=t.pop();)if(yield r,n=r.children)for(e=0,o=n.length;e<o;++e)c.push(n[e])}while(c.length)}};var It=function t(n){function e(t,e,o,r,c){!function(t,n,e,o,r,c){for(var i,u,s,l,a,f,d,p,h,$,y,g=[],m=n.children,v=0,x=0,b=m.length,w=n.value;v<b;){s=r-e,l=c-o;do{a=m[x++].value}while(!a&&x<b);for(f=d=a,y=a*a*($=Math.max(l/s,s/l)/(w*t)),h=Math.max(d/y,y/f);x<b;++x){if(a+=u=m[x].value,u<f&&(f=u),u>d&&(d=u),y=a*a*$,(p=Math.max(d/y,y/f))>h){a-=u;break}h=p}g.push(i={value:a,dice:s<l,children:m.slice(v,x)}),i.dice?Tt(i,e,o,r,w?o+=l*a/w:c):Dt(i,e,o,w?e+=s*a/w:r,c),w-=a,v=x}}(n,t,e,o,r,c)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}((1+Math.sqrt(5))/2);function Nt(t){const n=t-1;return n*n*n+1}function Lt(t){return"[object Date]"===Object.prototype.toString.call(t)}function Wt(t,n){if(t===n||t!=t)return()=>t;const e=typeof t;if(e!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const e=n.map(((n,e)=>Wt(t[e],n)));return t=>e.map((n=>n(t)))}if("object"===e){if(!t||!n)throw new Error("Object cannot be null");if(Lt(t)&&Lt(n)){t=t.getTime();const e=(n=n.getTime())-t;return n=>new Date(t+n*e)}const e=Object.keys(n),o={};return e.forEach((e=>{o[e]=Wt(t[e],n[e])})),t=>{const n={};return e.forEach((e=>{n[e]=o[e](t)})),n}}if("number"===e){const e=n-t;return n=>t+n*e}throw new Error(`Cannot interpolate ${e} values`)}function qt(t,{delay:e=0,duration:o=400,easing:r=n}={}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*c}}function Yt(t,n,e){const o=t.slice();return o[3]=n[e],o}const Ft=t=>({node:1&t}),Ht=t=>({node:t[0]}),Xt=t=>({node:1&t}),Gt=t=>({node:t[0]});function Jt(t){let n;const e=t[1].default,o=a(e,t,t[2],Gt);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||5&r)&&d(o,e,t,t[2],r,Xt,Gt)},i(t){n||(et(o,t),n=!0)},o(t){ot(o,t),n=!1},d(t){o&&o.d(t)}}}function Kt(t){let n,e;const o=t[1].default,r=a(o,t,t[2],Ht);return{c(){r&&r.c(),n=k()},m(t,o){r&&r.m(t,o),x(t,n,o),e=!0},p(t,n){r&&r.p&&(!e||5&n)&&d(r,o,t,t[2],n,Ft,Ht)},i(t){e||(et(r,t),e=!0)},o(t){ot(r,t),e=!1},d(t){r&&r.d(t),t&&b(n)}}}function Qt(t){let n,e;return n=new Zt({props:{node:t[3],$$slots:{default:[Kt,({node:t})=>({0:t}),({node:t})=>t?1:0]},$$scope:{ctx:t}}}),{c(){it(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.node=t[3]),5&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(et(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function Ut(t){let n,e,o,r;n=new kt({props:{x1:t[0].x0,x2:t[0].x1,y1:t[0].y1,y2:t[0].y0,$$slots:{default:[Jt]},$$scope:{ctx:t}}});let c=t[0].children||[],i=[];for(let n=0;n<c.length;n+=1)i[n]=Qt(Yt(t,c,n));const u=t=>ot(i[t],1,1,(()=>{i[t]=null}));return{c(){it(n.$$.fragment),e=k();for(let t=0;t<i.length;t+=1)i[t].c();o=A()},m(t,c){ut(n,t,c),x(t,e,c);for(let n=0;n<i.length;n+=1)i[n].m(t,c);x(t,o,c),r=!0},p(t,[e]){const r={};if(1&e&&(r.x1=t[0].x0),1&e&&(r.x2=t[0].x1),1&e&&(r.y1=t[0].y1),1&e&&(r.y2=t[0].y0),5&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r),5&e){let n;for(c=t[0].children||[],n=0;n<c.length;n+=1){const r=Yt(t,c,n);i[n]?(i[n].p(r,e),et(i[n],1)):(i[n]=Qt(r),i[n].c(),et(i[n],1),i[n].m(o.parentNode,o))}for(tt(),n=c.length;n<i.length;n+=1)u(n);nt()}},i(t){if(!r){et(n.$$.fragment,t);for(let t=0;t<c.length;t+=1)et(i[t]);r=!0}},o(t){ot(n.$$.fragment,t),i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)ot(i[t]);r=!1},d(t){st(n,t),t&&b(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(i,t),t&&b(o)}}}function Vt(t,n,e){let{$$slots:o={},$$scope:r}=n,{node:c}=n;return t.$$set=t=>{"node"in t&&e(0,c=t.node),"$$scope"in t&&e(2,r=t.$$scope)},[c,o,r]}class Zt extends ft{constructor(t){super(),at(this,t,Vt,Ut,u,{node:0})}}const tn=t=>({node:8&t}),nn=t=>({node:t[3]});function en(t){let n;const e=t[1].default,o=a(e,t,t[2],nn);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||12&r)&&d(o,e,t,t[2],r,tn,nn)},i(t){n||(et(o,t),n=!0)},o(t){ot(o,t),n=!1},d(t){o&&o.d(t)}}}function on(t){let n,e,o;return e=new Zt({props:{node:t[0],$$slots:{default:[en,({node:t})=>({3:t}),({node:t})=>t?8:0]},$$scope:{ctx:t}}}),{c(){var t,o,r;n=w("pancake-treemap"),it(e.$$.fragment),r="svelte-omgzip",(o="class")in(t=n)?t[o]="boolean"==typeof t[o]&&""===r||r:z(t,o,r)},m(t,r){x(t,n,r),ut(e,n,null),o=!0},p(t,[n]){const o={};1&n&&(o.node=t[0]),12&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(et(e.$$.fragment,t),o=!0)},o(t){ot(e.$$.fragment,t),o=!1},d(t){t&&b(n),st(e)}}}function rn(t,n,e){let{$$slots:o={},$$scope:r}=n,{root:c}=n;return t.$$set=t=>{"root"in t&&e(0,c=t.root),"$$scope"in t&&e(2,r=t.$$scope)},[c,o,r]}class cn extends ft{constructor(t){super(),at(this,t,rn,on,u,{root:0})}}function un(t){let n,e,o,r,c,i,u,s,l,a,f,d=t[12].data.name+"",p=yt(t[12].value)+"";function h(){return t[9](t[12])}return{c(){n=w("div"),e=w("div"),o=w("strong"),r=_(d),c=k(),i=w("span"),u=_(p),z(o,"class","svelte-z5r2z6"),z(i,"class","svelte-z5r2z6"),z(e,"class","contents svelte-z5r2z6"),z(n,"class","node svelte-z5r2z6"),B(n,"leaf",!t[12].children)},m(t,s){x(t,n,s),v(n,e),v(e,o),v(o,r),v(e,c),v(e,i),v(i,u),l=!0,a||(f=E(n,"click",h),a=!0)},p(e,o){t=e,(!l||4096&o)&&d!==(d=t[12].data.name+"")&&C(r,d),(!l||4096&o)&&p!==(p=yt(t[12].value)+"")&&C(u,p),4096&o&&B(n,"leaf",!t[12].children)},i(t){l||(H((()=>{s||(s=ct(n,qt,{duration:400},!0)),s.run(1)})),l=!0)},o(t){s||(s=ct(n,qt,{duration:400},!1)),s.run(0),l=!1},d(t){t&&b(n),t&&s&&s.end(),a=!1,f()}}}function sn(t){let n,e,o=t[6](t[12],t[0]),r=o&&un(t);return{c(){r&&r.c(),n=A()},m(t,o){r&&r.m(t,o),x(t,n,o),e=!0},p(t,e){4097&e&&(o=t[6](t[12],t[0])),o?r?(r.p(t,e),4097&e&&et(r,1)):(r=un(t),r.c(),et(r,1),r.m(n.parentNode,n)):r&&(tt(),ot(r,1,1,(()=>{r=null})),nt())},i(t){e||(et(r),e=!0)},o(t){ot(r),e=!1},d(t){r&&r.d(t),t&&b(n)}}}function ln(t){let n,e;return n=new cn({props:{root:t[2],$$slots:{default:[sn,({node:t})=>({12:t}),({node:t})=>t?4096:0]},$$scope:{ctx:t}}}),{c(){it(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,e){const o={};12289&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(et(n.$$.fragment,t),e=!0)},o(t){ot(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function an(t){let n,e,o,r,c,i,u,s,l,a=t[4](t[0])+"";return i=new bt({props:{x1:t[1].x1,x2:t[1].x2,y1:t[1].y1,y2:t[1].y2,$$slots:{default:[ln]},$$scope:{ctx:t}}}),{c(){n=w("button"),e=_(a),r=k(),c=w("div"),it(i.$$.fragment),z(n,"class","breadcrumbs svelte-z5r2z6"),n.disabled=o=!t[0].parent,z(c,"class","chart svelte-z5r2z6")},m(o,a){x(o,n,a),v(n,e),x(o,r,a),x(o,c,a),ut(i,c,null),u=!0,s||(l=E(n,"click",t[8]),s=!0)},p(t,[r]){(!u||1&r)&&a!==(a=t[4](t[0])+"")&&C(e,a),(!u||1&r&&o!==(o=!t[0].parent))&&(n.disabled=o);const c={};2&r&&(c.x1=t[1].x1),2&r&&(c.x2=t[1].x2),2&r&&(c.y1=t[1].y1),2&r&&(c.y2=t[1].y2),8193&r&&(c.$$scope={dirty:r,ctx:t}),i.$set(c)},i(t){u||(et(i.$$.fragment,t),u=!0)},o(t){ot(i.$$.fragment,t),u=!1},d(t){t&&b(n),t&&b(r),t&&b(c),st(i),s=!1,l()}}}function fn(t,o,r){let c,{data:i}=o;const u=function(){var t=It,n=!1,e=1,o=1,r=[0],c=St,i=St,u=St,s=St,l=St;function a(t){return t.x0=t.y0=0,t.x1=e,t.y1=o,t.eachBefore(f),r=[0],n&&t.eachBefore(Rt),t}function f(n){var e=r[n.depth],o=n.x0+e,a=n.y0+e,f=n.x1-e,d=n.y1-e;f<o&&(o=f=(o+f)/2),d<a&&(a=d=(a+d)/2),n.x0=o,n.y0=a,n.x1=f,n.y1=d,n.children&&(e=r[n.depth+1]=c(n)/2,o+=l(n)-e,a+=i(n)-e,(f-=u(n)-e)<o&&(o=f=(o+f)/2),(d-=s(n)-e)<a&&(a=d=(a+d)/2),t(n,o,a,f,d))}return a.round=function(t){return arguments.length?(n=!!t,a):n},a.size=function(t){return arguments.length?(e=+t[0],o=+t[1],a):[e,o]},a.tile=function(n){return arguments.length?(t=Ot(n),a):t},a.padding=function(t){return arguments.length?a.paddingInner(t).paddingOuter(t):a.paddingInner()},a.paddingInner=function(t){return arguments.length?(c="function"==typeof t?t:Pt(+t),a):c},a.paddingOuter=function(t){return arguments.length?a.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):a.paddingTop()},a.paddingTop=function(t){return arguments.length?(i="function"==typeof t?t:Pt(+t),a):i},a.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:Pt(+t),a):u},a.paddingBottom=function(t){return arguments.length?(s="function"==typeof t?t:Pt(+t),a):s},a.paddingLeft=function(t){return arguments.length?(l="function"==typeof t?t:Pt(+t),a):l},a}()(Et(i).sum((t=>t.value)).sort(((t,n)=>n.value-t.value)));let s=u;const a=t=>{for(;t.parent&&t.parent!==s;)t=t.parent;t&&t.children&&r(0,s=t)},f=function(t,o={}){const r=pt(t);let c,i=t;function u(u,s){if(null==t)return r.set(t=u),Promise.resolve();i=u;let l=c,a=!1,{delay:f=0,duration:d=400,easing:p=n,interpolate:$=Wt}=e(e({},o),s);if(0===d)return l&&(l.abort(),l=null),r.set(t=i),Promise.resolve();const y=h()+f;let g;return c=m((n=>{if(n<y)return!0;a||(g=$(t,u),"function"==typeof d&&(d=d(t,u)),a=!0),l&&(l.abort(),l=null);const e=n-y;return e>d?(r.set(t=u),!1):(r.set(t=g(p(e/d))),!0)})),c.promise}return{set:u,update:(n,e)=>u(n(i,t),e),subscribe:r.subscribe}}(void 0,{easing:Nt,duration:600});l(t,f,(t=>r(1,c=t)));return t.$$set=t=>{"data"in t&&r(7,i=t.data)},t.$$.update=()=>{1&t.$$.dirty&&function(t,n,e=n){t.set(e)}(f,c={x1:s.x0,x2:s.x1,y1:s.y1,y2:s.y0},c)},[s,c,u,a,t=>{const n=[];for(;t;)n.unshift(t.data.name),t=t.parent;return n.join("/")},f,(t,n)=>{for(;n;){if(t.parent===n)return!0;n=n.parent}return!1},i,()=>r(0,s=s.parent),t=>a(t)]}class dn extends ft{constructor(t){super(),at(this,t,fn,an,u,{data:7})}}function pn(n){let e,o,r=n[2].message+"";return{c(){e=w("p"),o=_(r),function(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}(e,"color","red")},m(t,n){x(t,e,n),v(e,o)},p:t,i:t,o:t,d(t){t&&b(e)}}}function hn(n){let e,o;return e=new dn({props:{data:n[1]}}),{c(){it(e.$$.fragment)},m(t,n){ut(e,t,n),o=!0},p:t,i(t){o||(et(e.$$.fragment,t),o=!0)},o(t){ot(e.$$.fragment,t),o=!1},d(t){st(e,t)}}}function $n(n){let e;return{c(){e=w("p"),e.textContent="...waiting"},m(t,n){x(t,e,n)},p:t,i:t,o:t,d(t){t&&b(e)}}}function yn(t){let n,e,o,r,c,i,u,s,l,a={ctx:t,current:null,token:null,hasCatch:!0,pending:$n,then:hn,catch:pn,value:1,error:2,blocks:[,,,]};return function(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let i=n.ctx;void 0!==r&&(i=i.slice(),i[r]=c);const u=t&&(n.current=t)(i);let s=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(tt(),ot(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),nt())})):n.block.d(1),u.c(),et(u,1),u.m(n.mount(),n.anchor),s=!0),n.block=u,n.blocks&&(n.blocks[o]=u),s&&J()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=I();if(t.then((t=>{D(e),o(n.then,1,n.value,t),D(null)}),(t=>{if(D(e),o(n.catch,2,n.error,t),D(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}(t[0],a),{c(){n=w("html"),e=k(),o=w("h1"),o.textContent="Pytest Duration Insights",r=k(),c=w("p"),c.textContent="You can click in the treemap below to explore where most time is spent.",i=k(),a.block.c(),u=k(),s=w("p"),s.textContent="You can also explore the nested table below for more details.",document.title="Duration Insights",z(n,"lang","en")},m(t,f){v(document.head,n),x(t,e,f),x(t,o,f),x(t,r,f),x(t,c,f),x(t,i,f),a.block.m(t,a.anchor=f),a.mount=()=>u.parentNode,a.anchor=u,x(t,u,f),x(t,s,f),l=!0},p(n,[e]){!function(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}(a,t=n,e)},i(t){l||(et(a.block),l=!0)},o(t){for(let t=0;t<3;t+=1){ot(a.blocks[t])}l=!1},d(t){b(n),t&&b(e),t&&b(o),t&&b(r),t&&b(c),t&&b(i),a.block.d(t),a.token=null,a=null,t&&b(u),t&&b(s)}}}function gn(t){return[async function(){const t=await fetch("/data.json");return await t.json()}()]}return new class extends ft{constructor(t){super(),at(this,t,gn,yn,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map