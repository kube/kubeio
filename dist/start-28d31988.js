var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,o=(t,o)=>{for(var a in o||(o={}))e.call(o,a)&&n(t,a,o[a]);if(r)for(var a of r(o))s.call(o,a)&&n(t,a,o[a]);return t};import{S as a,i,s as c,e as l,t as u,c as h,a as p,b as d,d as f,f as m,g,h as $,j as v,k as y,l as w,n as b,m as E,o as _,p as x,q as L,r as A,u as q,v as j,w as P,x as R,y as S,z as k,A as M,B as I,C as O,D as T,E as N,F as V,G as D,H as U,I as C,J as Y,K as X,L as B,M as H,N as F}from"./chunks/vendor-63eb3295.js";function K(t){let e,r,s=t[1].stack+"";return{c(){e=l("pre"),r=u(s)},l(t){e=h(t,"PRE",{});var n=p(e);r=d(n,s),n.forEach(f)},m(t,s){m(t,e,s),g(e,r)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&$(r,s)},d(t){t&&f(e)}}}function Z(t){let e,r,s,n,o,a,i,c=t[1].message+"",E=t[1].stack&&K(t);return{c(){e=l("h1"),r=u(t[0]),s=v(),n=l("p"),o=u(c),a=v(),E&&E.c(),i=y()},l(l){e=h(l,"H1",{});var u=p(e);r=d(u,t[0]),u.forEach(f),s=w(l),n=h(l,"P",{});var m=p(n);o=d(m,c),m.forEach(f),a=w(l),E&&E.l(l),i=y()},m(t,c){m(t,e,c),g(e,r),m(t,s,c),m(t,n,c),g(n,o),m(t,a,c),E&&E.m(t,c),m(t,i,c)},p(t,[e]){1&e&&$(r,t[0]),2&e&&c!==(c=t[1].message+"")&&$(o,c),t[1].stack?E?E.p(t,e):(E=K(t),E.c(),E.m(i.parentNode,i)):E&&(E.d(1),E=null)},i:b,o:b,d(t){t&&f(e),t&&f(s),t&&f(n),t&&f(a),E&&E.d(t),t&&f(i)}}}function z(t,e,r){let{status:s}=e,{error:n}=e;return t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,n=t.error)},[s,n]}class W extends a{constructor(t){super(),i(this,t,z,Z,c,{status:0,error:1})}}function G(t){let e,r,s;const n=[t[4]||{}];var o=t[2][1];function a(t){let e={};for(let r=0;r<n.length;r+=1)e=E(e,n[r]);return{props:e}}return o&&(e=new o(a())),{c(){e&&x(e.$$.fragment),r=y()},l(t){e&&L(e.$$.fragment,t),r=y()},m(t,n){e&&A(e,t,n),m(t,r,n),s=!0},p(t,s){const i=16&s?q(n,[j(t[4]||{})]):{};if(o!==(o=t[2][1])){if(e){O();const t=e;R(t.$$.fragment,1,0,(()=>{S(t,1)})),T()}o?(e=new o(a()),x(e.$$.fragment),P(e.$$.fragment,1),A(e,r.parentNode,r)):e=null}else o&&e.$set(i)},i(t){s||(e&&P(e.$$.fragment,t),s=!0)},o(t){e&&R(e.$$.fragment,t),s=!1},d(t){t&&f(r),e&&S(e,t)}}}function J(t){let e,r;return e=new W({props:{status:t[0],error:t[1]}}),{c(){x(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){A(e,t,s),r=!0},p(t,r){const s={};1&r&&(s.status=t[0]),2&r&&(s.error=t[1]),e.$set(s)},i(t){r||(P(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function Q(t){let e,r,s,n;const o=[J,G],a=[];function i(t,e){return t[1]?0:1}return e=i(t),r=a[e]=o[e](t),{c(){r.c(),s=y()},l(t){r.l(t),s=y()},m(t,r){a[e].m(t,r),m(t,s,r),n=!0},p(t,n){let c=e;e=i(t),e===c?a[e].p(t,n):(O(),R(a[c],1,1,(()=>{a[c]=null})),T(),r=a[e],r?r.p(t,n):(r=a[e]=o[e](t),r.c()),P(r,1),r.m(s.parentNode,s))},i(t){n||(P(r),n=!0)},o(t){R(r),n=!1},d(t){a[e].d(t),t&&f(s)}}}function tt(t){let e,r=t[6]&&et(t);return{c(){e=l("div"),r&&r.c(),this.h()},l(t){e=h(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var s=p(e);r&&r.l(s),s.forEach(f),this.h()},h(){_(e,"id","svelte-announcer"),_(e,"aria-live","assertive"),_(e,"aria-atomic","true"),_(e,"class","svelte-1j55zn5")},m(t,s){m(t,e,s),r&&r.m(e,null)},p(t,s){t[6]?r?r.p(t,s):(r=et(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&f(e),r&&r.d()}}}function et(t){let e,r;return{c(){e=u("Navigated to "),r=u(t[7])},l(s){e=d(s,"Navigated to "),r=d(s,t[7])},m(t,s){m(t,e,s),m(t,r,s)},p(t,e){128&e&&$(r,t[7])},d(t){t&&f(e),t&&f(r)}}}function rt(t){let e,r,s,n;const o=[t[3]||{}];let a={$$slots:{default:[Q]},$$scope:{ctx:t}};for(let c=0;c<o.length;c+=1)a=E(a,o[c]);e=new t[8]({props:a});let i=t[5]&&tt(t);return{c(){x(e.$$.fragment),r=v(),i&&i.c(),s=y()},l(t){L(e.$$.fragment,t),r=w(t),i&&i.l(t),s=y()},m(t,o){A(e,t,o),m(t,r,o),i&&i.m(t,o),m(t,s,o),n=!0},p(t,[r]){const n=8&r?q(o,[j(t[3]||{})]):{};2071&r&&(n.$$scope={dirty:r,ctx:t}),e.$set(n),t[5]?i?i.p(t,r):(i=tt(t),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){S(e,t),t&&f(r),i&&i.d(t),t&&f(s)}}}function st(t,e,r){let{status:s}=e,{error:n}=e,{stores:o}=e,{page:a}=e,{components:i}=e,{props_0:c=null}=e,{props_1:l=null}=e;const u=i[0];k("__svelte__",o),M(o.page.notify);let h=!1,p=!1,d=null;return I((()=>{const t=o.page.subscribe((()=>{h&&(r(6,p=!0),r(7,d=document.title))}));return r(5,h=!0),t})),t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,n=t.error),"stores"in t&&r(9,o=t.stores),"page"in t&&r(10,a=t.page),"components"in t&&r(2,i=t.components),"props_0"in t&&r(3,c=t.props_0),"props_1"in t&&r(4,l=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&o.page.set(a)},[s,n,i,c,l,h,p,d,u,o,a]}class nt extends a{constructor(t){super(),i(this,t,st,rt,c,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let ot;const at={},it=function(t,e){if(!e)return t();if(void 0===ot){const t=document.createElement("link").relList;ot=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in at)return;at[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":ot,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))};function ct(t,e,r=1){const s=void 0===e?0:t,n=void 0===e?t:e,o=Math.ceil((n-s)/r)||1;return Array(o).fill(0).map(((t,e)=>s+e*r))}const{cos:lt,sin:ut}=Math;class ht extends Float64Array{constructor(t,e,r){super(r||t*e),this.rows=t,this.columns=e}static identity(t){const e=new Float64Array(t*t),r=t+1;for(let s=0;s<t;s++)e[s*r]=1;return new ht(t,t,e)}static scale(t){const e=new Float64Array(16);let r=0;for(;r<3;)e[5*r]=t,r++;return e[5*r]=1,new ht(4,4,e)}static fromArray(t){return new ht(t.length,t[0].length,t.reduce(((t,e)=>t.concat(e))))}static rotationX(t){const e=lt(t),r=ut(t);return new ht(4,4,[1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1])}static rotationY(t){const e=lt(t),r=ut(t);return new ht(4,4,[e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1])}static rotationZ(t){const e=lt(t),r=ut(t);return new ht(4,4,[e,r,0,0,-r,e,0,0,0,0,1,0,0,0,0,1])}static translationX(t){return ht.identity(4).setAt(3,0,t)}static translationY(t){return ht.identity(4).setAt(3,1,t)}static translationZ(t){return ht.identity(4).setAt(3,2,t)}static translation(t,e,r){return ht.identity(4).setAt(3,0,t).setAt(3,1,e).setAt(3,2,r)}static product(t,e){const r=t.rows,s=e.columns,n=e.rows,o=new ht(r,s);for(let a=0;a<r;a++)for(let r=0;r<s;r++){let s=0;for(let o=0;o<n;o++)s+=t.getAt(a,o)*e.getAt(o,r);o.setAt(a,r,s)}return o}setAt(t,e,r){return this[t*this.columns+e]=r,this}getAt(t,e){return this[t*this.columns+e]}dot(t){return ht.product(this,t)}toPrettyString(){const t=Array.from(this).map((t=>{return(e=t,Math.floor(100*e)/100).toString();var e})),e=t.reduce(((t,e)=>Math.max(t,e.length)),0);return t.map((function(t){return function(t,e=" "){return t?ct(t).map((()=>e)).join(""):""}(e-t.length," ")+t})).map(((t,e)=>t+(e%this.columns==this.columns-1?"\n":", "))).join("")}toArray(){return ct(this.rows).map((t=>ct(this.columns).map((e=>this[t*this.columns+e]))))}}class pt extends Float64Array{constructor(t){super(t)}static cross(t,e){return new pt([t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]])}static dot(t,e){let r=0;for(let s=0;s<t.length;s++)r+=t[s]*e[s];return r}static add(t,e){const r=new pt(t.length);for(let s=0;s<t.length;s++)r[s]=t[s]+e[s];return r}static subtract(t,e){const r=new pt(t.length);for(let s=0;s<t.length;s++)r[s]=t[s]-e[s];return r}cross(t){return pt.cross(this,t)}multiplyByMatrix(t){return new pt(ht.product(new ht(1,this.length,this),t))}dot(t){return pt.dot(this,t)}add(t){return pt.add(this,t)}subtract(t){return pt.subtract(this,t)}rotateX(){}rotateY(){}rotateZ(){}toArray(){return Array.from(this)}}const dt=new pt([0,0,-1,1]);function ft(t){return pt.dot(function([t,e,r,s]){return pt.cross(pt.subtract(r,t),pt.subtract(s,e))}(t),dt)>0}function mt(t){return Math.floor(4*t)/4}function gt(t){return t.map((([e,r],s)=>{const n=mt(e),o=mt(r);return 0===s?`M${n},${o}`:n===t[s-1][0]?`V${o}`:o===t[s-1][1]?`H${n}`:`L${n},${o}`})).concat("Z").join("")}const $t=[...new Array(3)].map(((t,e)=>{const r=.33671666666666666*e-.445,s=r+.21656666666666669;return[new pt([-.445,r,.5,1]),new pt([.445,r,.5,1]),new pt([.445,s,.5,1]),new pt([-.445,s,.5,1])]})),vt=[[-.5,0,0],[.5,0,0],[0,.5,0],[0,-.5,0],[0,0,-.5],[1,0,.5]].map((([t,e,r])=>{const s=ht.rotationX(Math.PI*t).dot(ht.rotationY(Math.PI*e)).dot(ht.rotationZ(Math.PI*r));return $t.map((t=>t.map((t=>t.multiplyByMatrix(s)))))})).reduce(((t,e)=>t.concat(e)));function yt(t){let e,r,s,n;return{c(){e=N("svg"),r=N("path"),this.h()},l(t){e=h(t,"svg",{width:!0,height:!0,viewBox:!0,class:!0},1);var s=p(e);r=h(s,"path",{fill:!0,d:!0},1),p(r).forEach(f),s.forEach(f),this.h()},h(){_(r,"fill","#7160b7"),_(r,"d",t[1]),_(e,"width",wt),_(e,"height",bt),_(e,"viewBox",t[2]),_(e,"class","svelte-15wkv3x")},m(o,a){m(o,e,a),g(e,r),t[8](e),s||(n=V(e,"click",t[4]),s=!0)},p(t,[e]){2&e&&_(r,"d",t[1])},i:b,o:b,d(r){r&&f(e),t[8](null),s=!1,n()}}}const wt=76,bt=76;function Et(t,e,r){let s,n,o,a,i;const c=[-wt/2,-bt/2,wt,bt].toString(),l=Math.PI/4,u=Math.PI/5;let h=0,p=0,d=0;const f=U({x:l,y:u},{stiffness:.0061,damping:.094});function m([t,e]){p=t,d=e}function g([t,e]){const r=(t-p)/100,s=(e-d)/100;f.set({x:l-s,y:u+2*Math.PI*h+r})}function $(){f.set({x:l,y:u+2*Math.PI*h})}function v(t){const{clientX:e,clientY:r}=t.touches[0];m([e,r])}function y(t){const{clientX:e,clientY:r}=t.touches[0];g([e,r]),t.preventDefault()}function w(){$()}function b(t){const{clientX:e,clientY:r}=t;g([e,r])}function E(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",E),$()}function _(t){const{clientX:e,clientY:r}=t;m([e,r]),document.addEventListener("mousemove",b),document.addEventListener("mouseup",E),t.preventDefault()}return D(t,f,(t=>r(6,a=t))),I((()=>(i.addEventListener("mousedown",_),i.addEventListener("touchstart",v),i.addEventListener("touchmove",y),i.addEventListener("touchend",w),()=>{i.removeEventListener("mousedown",_),i.removeEventListener("touchstart",v),i.removeEventListener("touchmove",y),i.removeEventListener("touchend",w)}))),t.$$.update=()=>{64&t.$$.dirty&&r(5,s=ht.scale(.6*wt).dot(ht.rotationX(a.x)).dot(ht.rotationY(a.y))),32&t.$$.dirty&&r(7,n=vt.map((t=>t.map((t=>t.multiplyByMatrix(s))))).filter(ft)),128&t.$$.dirty&&r(1,o=n.map(gt).join(" "))},[i,o,c,f,function(){h=1===h?0:1,f.set({x:l,y:u+2*Math.PI*h})},s,a,n,function(t){C[t?"unshift":"push"]((()=>{i=t,r(0,i)}))}]}class _t extends a{constructor(t){super(),i(this,t,Et,yt,c,{})}}const xt={subscribe:t=>(()=>{const t=Y("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}})().page.subscribe(t)};function Lt(t){let e,r;const s=t[3].default,n=X(s,t,t[2],null);return{c(){e=l("a"),n&&n.c(),this.h()},l(t){e=h(t,"A",{href:!0,class:!0});var r=p(e);n&&n.l(r),r.forEach(f),this.h()},h(){_(e,"href",t[0]),_(e,"class","svelte-1k7c9lj"),B(e,"active",t[1].path===t[0])},m(t,s){m(t,e,s),n&&n.m(e,null),r=!0},p(t,[o]){n&&n.p&&4&o&&H(n,s,t,t[2],o,null,null),(!r||1&o)&&_(e,"href",t[0]),3&o&&B(e,"active",t[1].path===t[0])},i(t){r||(P(n,t),r=!0)},o(t){R(n,t),r=!1},d(t){t&&f(e),n&&n.d(t)}}}function At(t,e,r){let s;D(t,xt,(t=>r(1,s=t)));let{$$slots:n={},$$scope:o}=e,{path:a}=e;return t.$$set=t=>{"path"in t&&r(0,a=t.path),"$$scope"in t&&r(2,o=t.$$scope)},[a,s,o,n]}class qt extends a{constructor(t){super(),i(this,t,At,Lt,c,{path:0})}}function jt(t){let e;return{c(){e=u("Hello")},l(t){e=d(t,"Hello")},m(t,r){m(t,e,r)},d(t){t&&f(e)}}}function Pt(t){let e;return{c(){e=u("Projects")},l(t){e=d(t,"Projects")},m(t,r){m(t,e,r)},d(t){t&&f(e)}}}function Rt(t){let e;return{c(){e=u("CV")},l(t){e=d(t,"CV")},m(t,r){m(t,e,r)},d(t){t&&f(e)}}}function St(t){let e,r,s,n,o,a,i,c,u,d,$;return n=new qt({props:{path:"/",$$slots:{default:[jt]},$$scope:{ctx:t}}}),i=new qt({props:{path:"/projects",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),d=new qt({props:{path:"/cv",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){e=l("nav"),r=l("ul"),s=l("li"),x(n.$$.fragment),o=v(),a=l("li"),x(i.$$.fragment),c=v(),u=l("li"),x(d.$$.fragment),this.h()},l(t){e=h(t,"NAV",{class:!0});var l=p(e);r=h(l,"UL",{class:!0});var m=p(r);s=h(m,"LI",{class:!0});var g=p(s);L(n.$$.fragment,g),g.forEach(f),o=w(m),a=h(m,"LI",{class:!0});var $=p(a);L(i.$$.fragment,$),$.forEach(f),c=w(m),u=h(m,"LI",{class:!0});var v=p(u);L(d.$$.fragment,v),v.forEach(f),m.forEach(f),l.forEach(f),this.h()},h(){_(s,"class","svelte-1yn3osj"),_(a,"class","svelte-1yn3osj"),_(u,"class","svelte-1yn3osj"),_(r,"class","svelte-1yn3osj"),_(e,"class","svelte-1yn3osj")},m(t,l){m(t,e,l),g(e,r),g(r,s),A(n,s,null),g(r,o),g(r,a),A(i,a,null),g(r,c),g(r,u),A(d,u,null),$=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),d.$set(o)},i(t){$||(P(n.$$.fragment,t),P(i.$$.fragment,t),P(d.$$.fragment,t),$=!0)},o(t){R(n.$$.fragment,t),R(i.$$.fragment,t),R(d.$$.fragment,t),$=!1},d(t){t&&f(e),S(n),S(i),S(d)}}}class kt extends a{constructor(t){super(),i(this,t,null,St,c,{})}}function Mt(t){let e,r,s,n,o,a,i;s=new _t({}),o=new kt({});const c=t[1].default,u=X(c,t,t[0],null);return{c(){e=l("div"),r=l("header"),x(s.$$.fragment),n=v(),x(o.$$.fragment),a=v(),u&&u.c(),this.h()},l(t){e=h(t,"DIV",{class:!0});var i=p(e);r=h(i,"HEADER",{});var c=p(r);L(s.$$.fragment,c),c.forEach(f),n=w(i),L(o.$$.fragment,i),a=w(i),u&&u.l(i),i.forEach(f),this.h()},h(){_(e,"class","website-wrapper svelte-zcxqt8")},m(t,c){m(t,e,c),g(e,r),A(s,r,null),g(e,n),A(o,e,null),g(e,a),u&&u.m(e,null),i=!0},p(t,[e]){u&&u.p&&1&e&&H(u,c,t,t[0],e,null,null)},i(t){i||(P(s.$$.fragment,t),P(o.$$.fragment,t),P(u,t),i=!0)},o(t){R(s.$$.fragment,t),R(o.$$.fragment,t),R(u,t),i=!1},d(t){t&&f(e),S(s),S(o),u&&u.d(t)}}}function It(t,e,r){let{$$slots:s={},$$scope:n}=e;return t.$$set=t=>{"$$scope"in t&&r(0,n=t.$$scope)},[n,s]}var Ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends a{constructor(t){super(),i(this,t,It,Mt,c,{})}}});const Tt=[()=>it((()=>import("./pages/index.svelte-23c5c334.js")),["/dist/pages/index.svelte-23c5c334.js","/dist/assets/pages/index.svelte-3590a1b7.css","/dist/chunks/vendor-63eb3295.js","/dist/pages/intro.md-0405a9e8.js","/dist/assets/pages/intro.md-a968cb61.css","/dist/chunks/Github-a9f3387f.js","/dist/chunks/index-32306406.js"]),()=>it((()=>import("./pages/projects.svelte-eb5edc20.js")),["/dist/pages/projects.svelte-eb5edc20.js","/dist/assets/pages/projects.svelte-205540fe.css","/dist/chunks/vendor-63eb3295.js","/dist/chunks/Github-a9f3387f.js","/dist/chunks/index-32306406.js"]),()=>it((()=>import("./pages/intro.md-0405a9e8.js")),["/dist/pages/intro.md-0405a9e8.js","/dist/assets/pages/intro.md-a968cb61.css","/dist/chunks/vendor-63eb3295.js"]),()=>it((()=>import("./pages/cv.svelte-e8ae9c30.js")),["/dist/pages/cv.svelte-e8ae9c30.js","/dist/assets/pages/cv.svelte-524f2183.css","/dist/chunks/vendor-63eb3295.js","/dist/chunks/index-32306406.js"])],Nt=[[/^\/$/,[Tt[0]]],[/^\/projects\/?$/,[Tt[1]]],[/^\/intro\/?$/,[Tt[2]]],[/^\/cv\/?$/,[Tt[3]]]];function Vt(){return{x:pageXOffset,y:pageYOffset}}function Dt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}class Ut{constructor({base:t,routes:e}){this.base=t,this.routes=e}init(t){let e;this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{history.scrollRestoration="auto"})),addEventListener("load",(()=>{history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=o(o({},history.state||{}),{"sveltekit:scroll":Vt()});history.replaceState(t,document.title,window.location.href)}),50)}));const r=t=>{const e=Dt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let s;addEventListener("touchstart",r),addEventListener("mousemove",(t=>{clearTimeout(s),s=setTimeout((()=>{r(t)}),20)})),addEventListener("click",(t=>{if(!this.enabled)return;if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Dt(t.target);if(!e)return;if(!e.href)return;const r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(r?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(r?e.target.baseVal:e.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const o=this.parse(n);if(o){const r=e.hasAttribute("sveltekit:noscroll");history.pushState({},"",n.href),this._navigate(o,r?Vt():null,[],n.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state&&this.enabled){const e=new URL(location.href),r=this.parse(e);r?this._navigate(r,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}parse(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;const e=t.pathname.slice(this.base.length)||"/",r=this.routes.filter((([t])=>t.test(e)));if(r.length>0){const s=new URLSearchParams(t.search);return{id:`${e}?${s}`,routes:r,path:e,query:s}}}async goto(t,{noscroll:e=!1,replaceState:r=!1}={},s){if(this.enabled){const n=new URL(t,function(t){let e=t.baseURI;if(!e){const r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}(document)),o=this.parse(n);if(o)return history[r?"replaceState":"pushState"]({},"",t),this._navigate(o,e?Vt():null,s,n.hash)}return location.href=t,new Promise((()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(e)return this.renderer.load(e);throw new Error(`Could not prefetch ${t.href}`)}async _navigate(t,e,r,s){this.renderer.notify({path:t.path,query:t.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(t,r),document.body.focus();const n=s&&document.getElementById(s.slice(1));e?scrollTo(e.x,e.y):n?scrollTo(0,n.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function Ct(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,r=t.status;return e instanceof Error?!r||r<400||r>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:r,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function Yt(t){const e=F(t);let r=!0;return{notify:function(){r=!0,e.update((t=>t))},set:function(t){r=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||r&&e!==s)&&t(s=e)}))}}}function Xt(t,n){const o="string"==typeof t?t:t.url,a=document.querySelector(`script[type="svelte-data"][url="${o}"]`);if(a){const t=JSON.parse(a.textContent),{body:n}=t,o=((t,n)=>{var o={};for(var a in t)e.call(t,a)&&n.indexOf(a)<0&&(o[a]=t[a]);if(null!=t&&r)for(var a of r(t))n.indexOf(a)<0&&s.call(t,a)&&(o[a]=t[a]);return o})(t,["body"]);return Promise.resolve(new Response(n,o))}return fetch(t,n)}class Bt{constructor({Root:t,layout:e,target:r,session:s,host:n}){this.Root=t,this.layout=e,this.host=n,this.router=null,this.target=r,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.loading={id:null,promise:null},this.stores={page:Yt({}),navigating:F(null),session:F(s)},this.$session=null,this.root=null;let o=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!o)return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e,[])})),o=!0}async start(t){const e=await this._load(t);e.redirect?location.href=new URL(e.redirect,location.href).href:this._init(e)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e){const r=this.token={},s=await this._get_navigation_result(t);if(r!==this.token)return;if(s.reload)location.reload();else if(s.redirect){if(!(e.length>10||e.includes(t.path)))return void(this.router?this.router.goto(s.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(s.redirect,location.href).href);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.started?(this.current=s.state,this.root.$set(s.props),this.stores.navigating.set(null),await 0):this._init(s);dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null;!1===s.state.nodes[s.state.nodes.length-1].module.router?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t),this.loading.id=t.id,this.loading.promise}async _get_navigation_result(t){if(this.loading.id===t.id)return this.loading.promise;for(let e=0;e<t.routes.length;e+=1){const r=t.routes[e],[s,n,o]=r;if(1===r.length)return{reload:!0};let a=e+1;for(;a<t.routes.length;){const e=t.routes[a];if(e[0].toString()!==s.toString())break;1!==e.length&&e[1].forEach((t=>t())),a+=1}const i=n.map((t=>t())),c={host:this.host,path:t.path,params:o?o(r[0].exec(t.path)):{},query:t.query},l=await this._load({status:200,error:null,nodes:i,page:c});if(l)return l}return await this._load({status:404,error:new Error(`Not found: ${t.path}`),nodes:[],page:{host:this.host,path:t.path,query:t.query,params:{}}})}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:o({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _load({status:t,error:e,nodes:r,page:s}){const n=s.query.toString(),a={state:{page:s,query:n,session_changed:!1,nodes:[],contexts:[]},props:{status:t,error:e,components:[]}},i={path:!this.current.page||s.path!==this.current.page.path,params:Object.keys(s.params).filter((t=>!this.current.page||this.current.page.params[t]!==s.params[t])),query:n!==this.current.query,session:this.current.session_changed,context:!1};try{const t=[this.layout,...r],c=[];let l;for(let r=0;r<t.length;r+=1){const u=this.current.nodes[r],h=this.current.contexts[r],p=await t[r];if(a.props.components[r]=p.default,p.preload)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading");if(!u||p!==u.module||i.path&&u.uses.path||i.params.some((t=>u.uses.params.has(t)))||i.query&&u.uses.query||i.session&&u.uses.session||i.context&&u.uses.context){const u=s.path+n,h=this.caches.get(p),d=h&&h.get(u);let f,m;if(!d||i.context&&d.node.uses.context){f={module:p,uses:{params:new Set,path:!1,query:!1,session:!1,context:!1}};const n={};for(const t in s.params)Object.defineProperty(n,t,{get:()=>(f.uses.params.add(t),s.params[t]),enumerable:!0});const a=this.$session;if(p.load){m=await p.load.call(null,{page:{host:s.host,params:n,get path(){return f.uses.path=!0,s.path},get query(){return f.uses.query=!0,s.query}},get session(){return f.uses.session=!0,a},get context(){return f.uses.context=!0,o({},l)},fetch:this.started?fetch:Xt});const i=r===t.length-1&&!e;if(!m&&i)return}}else({node:f,loaded:m}=d);if(m){if(m=Ct(m),m.error){if(e)throw e;return await this._load({status:m.status||500,error:m.error,nodes:[],page:{host:s.host,path:s.path,query:s.query,params:{}}})}if(m.redirect)return{redirect:m.redirect};if(m.context&&(i.context=!0,l=o(o({},l),m.context)),m.maxage){this.caches.has(p)||this.caches.set(p,new Map);const t=this.caches.get(p),e={node:f,loaded:m};t.set(u,e);let r=!1;const s=setTimeout((()=>{n()}),1e3*m.maxage),n=()=>{t.get(u)===e&&t.delete(u),o(),clearTimeout(s)},o=this.stores.session.subscribe((()=>{r&&n()}));r=!0}c[r]=m.props}a.state.nodes[r]=f,a.state.contexts[r]=l}else a.state.nodes[r]=u,a.state.contexts[r]=l=h}return(await Promise.all(c)).forEach(((t,e)=>{t&&(a.props[`props_${e}`]=t)})),this.current.page&&s.path===this.current.page.path&&!i.query||(a.props.page=s),a}catch(c){if(e)throw e;return await this._load({status:500,error:c,nodes:[],page:{host:s.host,path:s.path,query:s.query,params:{}}})}}}async function Ht({paths:t,target:e,session:r,host:s,route:n,hydrate:o}){const a=n&&new Ut({base:t.base,routes:Nt}),i=new Bt({Root:nt,layout:Ot,target:e,session:r,host:s});o&&await i.start(o),n&&a.init(i),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ht as start};
