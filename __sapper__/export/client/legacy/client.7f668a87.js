import{_ as t,a as e,b as n,c as r,i as s,s as o,d as a,S as c,e as i,f as u,g as f,h as l,j as p,k as m,l as h,m as g,n as $,o as v,p as d,q as b,t as x,r as y,u as _,v as S,w as E,x as w,y as P,z as R,A as k,B as j,C as A,D as C,E as L,F as D,G as O,H as N}from"./index.0fcd23a7.js";import{_ as q,a as H}from"./asyncToGenerator.b00c1549.js";import{I,N as U,a as T,b as B,w as G}from"./index.ba42d3d9.js";function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,s=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){s=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(s)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var V={},K=function(){return{}},Y=[["store/categories","Categories"],["store/products","Products"],["blog","Blog"],["about","About"]];function z(t,e,n){var r=Object.create(t);return r.item=e[n],r}function F(t){var e,n=t.item[1]+"";return{c:function(){e=P(n)},l:function(t){e=l(t,n)},m:function(t,n){v(t,e,n)},p:R,d:function(t){t&&h(e)}}}function M(t){var e,n=new T({props:{segment:t.item[0],selected:t.segment===t.item[0],$$slots:{default:[F]},$$scope:{ctx:t}}});return{c:function(){n.$$.fragment.c()},l:function(t){n.$$.fragment.l(t)},m:function(t,r){$(n,t,r),e=!0},p:function(t,e){var r={};t.menu&&(r.segment=e.item[0]),(t.segment||t.menu)&&(r.selected=e.segment===e.item[0]),t.$$scope&&(r.$$scope={changed:t,ctx:e}),n.$set(r)},i:function(t){e||(x(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function W(t){var e;return{c:function(){e=P("Docs")},l:function(t){e=l(t,"Docs")},m:function(t,n){v(t,e,n)},d:function(t){t&&h(e)}}}function X(t){var e;return{c:function(){e=P("Svelte")},l:function(t){e=l(t,"Svelte")},m:function(t,n){v(t,e,n)},d:function(t){t&&h(e)}}}function Q(t){var e,n=new B({props:{name:"message-square"}});return{c:function(){n.$$.fragment.c()},l:function(t){n.$$.fragment.l(t)},m:function(t,r){$(n,t,r),e=!0},p:R,i:function(t){e||(x(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function Z(t){var e,n=new B({props:{name:"github"}});return{c:function(){n.$$.fragment.c()},l:function(t){n.$$.fragment.l(t)},m:function(t,r){$(n,t,r),e=!0},p:R,i:function(t){e||(x(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function tt(t){for(var e,n,r,s,o,a=Y,c=[],i=0;i<a.length;i+=1)c[i]=M(z(t,a,i));var f=function(t){return y(c[t],1,1,function(){c[t]=null})},p=new T({props:{segment:"docs",$$slots:{default:[W]},$$scope:{ctx:t}}}),m=new T({props:{external:"https://svelte.dev",$$slots:{default:[X]},$$scope:{ctx:t}}}),g=new T({props:{external:"https://svelte.dev/chat",title:"Discord Chat",$$slots:{default:[Q]},$$scope:{ctx:t}}}),d=new T({props:{external:"https://github.com/sveltejs/sapper",title:"GitHub Repo",$$slots:{default:[Z]},$$scope:{ctx:t}}});return{c:function(){for(var t=0;t<c.length;t+=1)c[t].c();e=u(),p.$$.fragment.c(),n=u(),m.$$.fragment.c(),r=u(),g.$$.fragment.c(),s=u(),d.$$.fragment.c()},l:function(t){for(var o=0;o<c.length;o+=1)c[o].l(t);e=l(t,"\n\n\t"),p.$$.fragment.l(t),n=l(t,"\n\n\t"),m.$$.fragment.l(t),r=l(t,"\n\n\t"),g.$$.fragment.l(t),s=l(t,"\n\n\t"),d.$$.fragment.l(t)},m:function(t,a){for(var i=0;i<c.length;i+=1)c[i].m(t,a);v(t,e,a),$(p,t,a),v(t,n,a),$(m,t,a),v(t,r,a),$(g,t,a),v(t,s,a),$(d,t,a),o=!0},p:function(t,n){if(t.menu||t.segment){a=Y;for(var r=0;r<a.length;r+=1){var s=z(n,a,r);c[r]?(c[r].p(t,s),x(c[r],1)):(c[r]=M(s),c[r].c(),x(c[r],1),c[r].m(e.parentNode,e))}for(S(),r=a.length;r<c.length;r+=1)f(r);E()}var o={};t.$$scope&&(o.$$scope={changed:t,ctx:n}),p.$set(o);var i={};t.$$scope&&(i.$$scope={changed:t,ctx:n}),m.$set(i);var u={};t.$$scope&&(u.$$scope={changed:t,ctx:n}),g.$set(u);var l={};t.$$scope&&(l.$$scope={changed:t,ctx:n}),d.$set(l)},i:function(t){if(!o){for(var e=0;e<a.length;e+=1)x(c[e]);x(p.$$.fragment,t),x(m.$$.fragment,t),x(g.$$.fragment,t),x(d.$$.fragment,t),o=!0}},o:function(t){c=c.filter(Boolean);for(var e=0;e<c.length;e+=1)y(c[e]);y(p.$$.fragment,t),y(m.$$.fragment,t),y(g.$$.fragment,t),y(d.$$.fragment,t),o=!1},d:function(t){w(c,t),t&&h(e),_(p,t),t&&h(n),_(m,t),t&&h(r),_(g,t),t&&h(s),_(d,t)}}}function et(t){var e,n,r,s,o=new I({}),a=new U({props:{segment:t.segment,page:t.page,logo:"sapper-logo-horizontal.svg",$$slots:{default:[tt]},$$scope:{ctx:t}}}),c=t.$$slots.default,S=i(c,t,null);return{c:function(){o.$$.fragment.c(),e=u(),a.$$.fragment.c(),n=u(),r=f("main"),S&&S.c(),this.h()},l:function(t){o.$$.fragment.l(t),e=l(t,"\n\n"),a.$$.fragment.l(t),n=l(t,"\n\n"),r=p(t,"MAIN",{class:!0},!1);var s=m(r);S&&S.l(s),s.forEach(h),this.h()},h:function(){g(r,"class","svelte-lmij9w")},m:function(t,c){$(o,t,c),v(t,e,c),$(a,t,c),v(t,n,c),v(t,r,c),S&&S.m(r,null),s=!0},p:function(t,e){var n={};t.segment&&(n.segment=e.segment),t.page&&(n.page=e.page),(t.$$scope||t.segment)&&(n.$$scope={changed:t,ctx:e}),a.$set(n),S&&S.p&&t.$$scope&&S.p(d(c,e,t,null),b(c,e,null))},i:function(t){s||(x(o.$$.fragment,t),x(a.$$.fragment,t),x(S,t),s=!0)},o:function(t){y(o.$$.fragment,t),y(a.$$.fragment,t),y(S,t),s=!1},d:function(t){_(o,t),t&&h(e),_(a,t),t&&(h(n),h(r)),S&&S.d(t)}}}function nt(t,e,n){var r=e.segment,s=ce().page,o=e.$$slots,a=void 0===o?{}:o,c=e.$$scope;return t.$set=function(t){"segment"in t&&n("segment",r=t.segment),"$$scope"in t&&n("$$scope",c=t.$$scope)},{segment:r,page:s,$$slots:a,$$scope:c}}var rt=function(i){function u(t){var c;return e(this,u),c=n(this,r(u).call(this)),s(a(c),t,nt,et,o,["segment"]),c}return t(u,c),u}();function st(t){var e,n,r,s,o;return{c:function(){e=f("h1"),n=P("It looks like you're offline"),r=u(),s=f("p"),o=P("Reload the page once you've found the internet."),this.h()},l:function(t){e=p(t,"H1",{class:!0},!1);var a=m(e);n=l(a,"It looks like you're offline"),a.forEach(h),r=l(t,"\n\n\t\t"),s=p(t,"P",{class:!0},!1);var c=m(s);o=l(c,"Reload the page once you've found the internet."),c.forEach(h),this.h()},h:function(){g(e,"class","svelte-u533s9"),g(s,"class","svelte-u533s9")},m:function(t,a){v(t,e,a),k(e,n),v(t,r,a),v(t,s,a),k(s,o)},p:R,d:function(t){t&&(h(e),h(r),h(s))}}}function ot(t){var e,n,r,s,o;function a(t,e){return e.error.message?ct:at}var c=a(0,t),i=c(t);function $(t,e){return e.dev&&e.error.stack?ut:it}var d=$(0,t),b=d(t);return{c:function(){e=f("h1"),n=P("Yikes!"),r=u(),i.c(),s=u(),b.c(),o=j(),this.h()},l:function(t){e=p(t,"H1",{class:!0},!1);var a=m(e);n=l(a,"Yikes!"),a.forEach(h),r=l(t,"\n\n\t\t"),i.l(t),s=l(t,"\n\n\t\t"),b.l(t),o=j(),this.h()},h:function(){g(e,"class","svelte-u533s9")},m:function(t,a){v(t,e,a),k(e,n),v(t,r,a),i.m(t,a),v(t,s,a),b.m(t,a),v(t,o,a)},p:function(t,e){c===(c=a(0,e))&&i?i.p(t,e):(i.d(1),(i=c(e))&&(i.c(),i.m(s.parentNode,s))),d===(d=$(0,e))&&b?b.p(t,e):(b.d(1),(b=d(e))&&(b.c(),b.m(o.parentNode,o)))},d:function(t){t&&(h(e),h(r)),i.d(t),t&&h(s),b.d(t),t&&h(o)}}}function at(t){var e,n,r,s;return{c:function(){e=f("p"),n=P("Encountered a "),r=P(t.status),s=P(" error"),this.h()},l:function(o){e=p(o,"P",{class:!0},!1);var a=m(e);n=l(a,"Encountered a "),r=l(a,t.status),s=l(a," error"),a.forEach(h),this.h()},h:function(){g(e,"class","error svelte-u533s9")},m:function(t,o){v(t,e,o),k(e,n),k(e,r),k(e,s)},p:function(t,e){t.status&&A(r,e.status)},d:function(t){t&&h(e)}}}function ct(t){var e,n,r,s,o=t.error.message+"";return{c:function(){e=f("p"),n=P(t.status),r=P(": "),s=P(o),this.h()},l:function(a){e=p(a,"P",{class:!0},!1);var c=m(e);n=l(c,t.status),r=l(c,": "),s=l(c,o),c.forEach(h),this.h()},h:function(){g(e,"class","error svelte-u533s9")},m:function(t,o){v(t,e,o),k(e,n),k(e,r),k(e,s)},p:function(t,e){t.status&&A(n,e.status),t.error&&o!==(o=e.error.message+"")&&A(s,o)},d:function(t){t&&h(e)}}}function it(t){var e,n,r,s,o,a,c,i,$,d=t.status>=500&&ft();return{c:function(){d&&d.c(),e=u(),n=f("p"),r=P("If the error persists, please drop by "),s=f("a"),o=P("Discord chatroom"),a=P(" and let us know, or raise an issue on "),c=f("a"),i=P("GitHub"),$=P(". Thanks!"),this.h()},l:function(t){d&&d.l(t),e=l(t,"\n\n\t\t\t"),n=p(t,"P",{class:!0},!1);var u=m(n);r=l(u,"If the error persists, please drop by "),s=p(u,"A",{href:!0},!1);var f=m(s);o=l(f,"Discord chatroom"),f.forEach(h),a=l(u," and let us know, or raise an issue on "),c=p(u,"A",{href:!0},!1);var g=m(c);i=l(g,"GitHub"),g.forEach(h),$=l(u,". Thanks!"),u.forEach(h),this.h()},h:function(){g(s,"href","https://svelte.dev/chat"),g(c,"href","https://github.com/sveltejs/svelte"),g(n,"class","svelte-u533s9")},m:function(t,u){d&&d.m(t,u),v(t,e,u),v(t,n,u),k(n,r),k(n,s),k(s,o),k(n,a),k(n,c),k(c,i),k(n,$)},p:function(t,n){n.status>=500?d||((d=ft()).c(),d.m(e.parentNode,e)):d&&(d.d(1),d=null)},d:function(t){d&&d.d(t),t&&(h(e),h(n))}}}function ut(t){var e,n,r=t.error.stack+"";return{c:function(){e=f("pre"),n=P(r)},l:function(t){e=p(t,"PRE",{},!1);var s=m(e);n=l(s,r),s.forEach(h)},m:function(t,r){v(t,e,r),k(e,n)},p:function(t,e){t.error&&r!==(r=e.error.stack+"")&&A(n,r)},d:function(t){t&&h(e)}}}function ft(t){var e,n;return{c:function(){e=f("p"),n=P("Please try reloading the page."),this.h()},l:function(t){e=p(t,"P",{class:!0},!1);var r=m(e);n=l(r,"Please try reloading the page."),r.forEach(h),this.h()},h:function(){g(e,"class","svelte-u533s9")},m:function(t,r){v(t,e,r),k(e,n)},d:function(t){t&&h(e)}}}function lt(t){var e,n,r;function s(t,e){return e.online?ot:st}document.title=e=t.status;var o=s(0,t),a=o(t);return{c:function(){n=u(),r=f("div"),a.c(),this.h()},l:function(t){n=l(t,"\n\n"),r=p(t,"DIV",{class:!0},!1);var e=m(r);a.l(e),e.forEach(h),this.h()},h:function(){g(r,"class","container svelte-u533s9")},m:function(t,e){v(t,n,e),v(t,r,e),a.m(r,null)},p:function(t,n){t.status&&e!==(e=n.status)&&(document.title=e),o===(o=s(0,n))&&a?a.p(t,n):(a.d(1),(a=o(n))&&(a.c(),a.m(r,null)))},i:R,o:R,d:function(t){t&&(h(n),h(r)),a.d()}}}function pt(t,e,n){var r=e.status,s=e.error,o="undefined"==typeof navigator||navigator.onLine;return t.$set=function(t){"status"in t&&n("status",r=t.status),"error"in t&&n("error",s=t.error)},{dev:!1,status:r,error:s,online:o}}var mt=function(i){function u(t){var c;return e(this,u),c=n(this,r(u).call(this)),s(a(c),t,pt,lt,o,["status","error"]),c}return t(u,c),u}();function ht(t){var e,n,r=[t.level1.props],s=t.level1.component;function o(t){for(var e={},n=0;n<r.length;n+=1)e=C(e,r[n]);return{props:e}}if(s)var a=new s(o());return{c:function(){a&&a.$$.fragment.c(),e=j()},l:function(t){a&&a.$$.fragment.l(t),e=j()},m:function(t,r){a&&$(a,t,r),v(t,e,r),n=!0},p:function(t,n){var c=t.level1?L(r,[n.level1.props]):{};if(s!==(s=n.level1.component)){if(a){S();var i=a;y(i.$$.fragment,1,0,function(){_(i,1)}),E()}s?((a=new s(o())).$$.fragment.c(),x(a.$$.fragment,1),$(a,e.parentNode,e)):a=null}else s&&a.$set(c)},i:function(t){n||(a&&x(a.$$.fragment,t),n=!0)},o:function(t){a&&y(a.$$.fragment,t),n=!1},d:function(t){t&&h(e),a&&_(a,t)}}}function gt(t){var e,n=new mt({props:{error:t.error,status:t.status}});return{c:function(){n.$$.fragment.c()},l:function(t){n.$$.fragment.l(t)},m:function(t,r){$(n,t,r),e=!0},p:function(t,e){var r={};t.error&&(r.error=e.error),t.status&&(r.status=e.status),n.$set(r)},i:function(t){e||(x(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function $t(t){var e,n,r,s,o=[gt,ht],a=[];function c(t,e){return e.error?0:1}return e=c(0,t),n=a[e]=o[e](t),{c:function(){n.c(),r=j()},l:function(t){n.l(t),r=j()},m:function(t,n){a[e].m(t,n),v(t,r,n),s=!0},p:function(t,s){var i=e;(e=c(0,s))===i?a[e].p(t,s):(S(),y(a[i],1,1,function(){a[i]=null}),E(),(n=a[e])||(n=a[e]=o[e](s)).c(),x(n,1),n.m(r.parentNode,r))},i:function(t){s||(x(n),s=!0)},o:function(t){y(n),s=!1},d:function(t){a[e].d(t),t&&h(r)}}}function vt(t){for(var e,n=[{segment:t.segments[0]},t.level0.props],r={$$slots:{default:[$t]},$$scope:{ctx:t}},s=0;s<n.length;s+=1)r=C(r,n[s]);var o=new rt({props:r});return{c:function(){o.$$.fragment.c()},l:function(t){o.$$.fragment.l(t)},m:function(t,n){$(o,t,n),e=!0},p:function(t,e){var r=t.segments||t.level0?L(n,[t.segments&&{segment:e.segments[0]},t.level0&&e.level0.props]):{};(t.$$scope||t.error||t.status||t.level1)&&(r.$$scope={changed:t,ctx:e}),o.$set(r)},i:function(t){e||(x(o.$$.fragment,t),e=!0)},o:function(t){y(o.$$.fragment,t),e=!1},d:function(t){_(o,t)}}}function dt(t,e,n){var r=e.stores,s=e.error,o=e.status,a=e.segments,c=e.level0,i=e.level1,u=void 0===i?null:i;return D(V,r),t.$set=function(t){"stores"in t&&n("stores",r=t.stores),"error"in t&&n("error",s=t.error),"status"in t&&n("status",o=t.status),"segments"in t&&n("segments",a=t.segments),"level0"in t&&n("level0",c=t.level0),"level1"in t&&n("level1",u=t.level1)},{stores:r,error:s,status:o,segments:a,level0:c,level1:u}}var bt,xt=function(i){function u(t){var c;return e(this,u),c=n(this,r(u).call(this)),s(a(c),t,dt,vt,o,["stores","error","status","segments","level0","level1"]),c}return t(u,c),u}(),yt=[/^\/migrating.json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/,/^\/docs.json$/],_t=[{js:function(){return import("./index.e212d825.js")},css:["legacy/index.e212d825.css","legacy/index.ba42d3d9.css","legacy/Card.4b3840f0.css"]},{js:function(){return import("./index.2ec7e5ee.js")},css:["legacy/index.ba42d3d9.css"]},{js:function(){return import("./about.f8000cf0.js")},css:["legacy/Card.4b3840f0.css"]},{js:function(){return import("./categories.14858a0d.js")},css:["legacy/Card.4b3840f0.css"]},{js:function(){return import("./products.0ab88095.js")},css:["legacy/products.0ab88095.css","legacy/Card.4b3840f0.css"]},{js:function(){return import("./index.df6aa1bc.js")},css:["legacy/index.df6aa1bc.css","legacy/Card.4b3840f0.css"]},{js:function(){return import("./[slug].752d2622.js")},css:["legacy/[slug].752d2622.css","legacy/Card.4b3840f0.css"]},{js:function(){return import("./index.b1ea003a.js")},css:["legacy/index.ba42d3d9.css"]}],St=(bt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/migrating\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/store\/categories\/?$/,parts:[null,{i:3}]},{pattern:/^\/store\/products\/?$/,parts:[null,{i:4}]},{pattern:/^\/blog\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:6,params:function(t){return{slug:bt(t[1])}}}]},{pattern:/^\/docs\/?$/,parts:[{i:7}]}]);function Et(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=Jt(new URL(t,document.baseURI));return n?(Tt[e.replaceState?"replaceState":"pushState"]({id:Ht},"",t),Kt(n,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var wt,Pt,Rt,kt,jt,At="undefined"!=typeof __SAPPER__&&__SAPPER__,Ct=!1,Lt=[],Dt="{}",Ot={page:G({}),preloading:G(null),session:G(At&&At.session)};Ot.session.subscribe(function(){var t=q(H.mark(function t(e){var n,r,s,o,a,c;return H.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(kt=e,Ct){t.next=3;break}return t.abrupt("return");case 3:return jt=!0,n=Jt(new URL(location.href)),r=Pt={},t.next=8,Wt(n);case 8:if(s=t.sent,o=s.redirect,a=s.props,c=s.branch,r===Pt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,zt(o,c,a,n.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var Nt,qt=null;var Ht,It=1;var Ut,Tt="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},Bt={};function Gt(t){var e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(function(t){var n=J(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," "))),3),r=n[1],s=n[2],o=void 0===s?"":s;"string"==typeof e[r]&&(e[r]=[e[r]]),"object"===O(e[r])?e[r].push(o):e[r]=o}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At.baseUrl))return null;var e=t.pathname.slice(At.baseUrl.length);if(""===e&&(e="/"),!yt.some(function(t){return t.test(e)}))for(var n=0;n<St.length;n+=1){var r=St[n],s=r.pattern.exec(e);if(s){var o=Gt(t.search),a=r.parts[r.parts.length-1],c=a.params?a.params(s):{},i={host:location.host,path:e,query:o,params:c};return{href:t.href,route:r,match:s,page:i}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}function Kt(t,e,n,r){return Yt.apply(this,arguments)}function Yt(){return(Yt=q(H.mark(function t(e,n,r,s){var o,a,c,i,u,f,l,p,m;return H.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n?Ht=n:(o=Vt(),Bt[Ht]=o,n=Ht=++It,Bt[Ht]=r?o:{x:0,y:0}),Ht=n,wt&&Ot.preloading.set(!0),a=qt&&qt.href===e.href?qt.promise:Wt(e),qt=null,c=Pt={},t.next=8,a;case 8:if(i=t.sent,u=i.redirect,f=i.props,l=i.branch,c===Pt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,zt(u,l,f,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=Bt[n],s&&(m=document.getElementById(s.slice(1)))&&(p={x:0,y:m.getBoundingClientRect().top}),Bt[Ht]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function zt(t,e,n,r){return Ft.apply(this,arguments)}function Ft(){return(Ft=q(H.mark(function t(e,n,r,s){var o,a;return H.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Et(e.location,{replaceState:!0}));case 2:if(Ot.page.set(s),Ot.preloading.set(!1),!wt){t.next=8;break}wt.$set(r),t.next=17;break;case 8:return r.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},t.next=11,Rt;case 11:if(t.t0=t.sent,r.level0={props:t.t0},o=document.querySelector("#sapper-head-start"),a=document.querySelector("#sapper-head-end"),o&&a){for(;o.nextSibling!==a;)te(o.nextSibling);te(o),te(a)}wt=new xt({target:Nt,props:r,hydrate:!0});case 17:Lt=n,Dt=JSON.stringify(s.query),Ct=!0,jt=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Mt(t,e,n,r){if(r!==Dt)return!0;var s=Lt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Wt(t){return Xt.apply(this,arguments)}function Xt(){return(Xt=q(H.mark(function t(e){var n,r,s,o,a,c,i,u,f,l,p;return H.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,s=r.path.split("/").filter(Boolean),o=null,a={error:null,status:200,segments:[s[0]]},c={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:function(t,e){a.error="string"==typeof e?new Error(e):e,a.status=t}},Rt||(Rt=At.preloaded[0]||K.call(c,{host:r.host,path:r.path,query:r.query,params:{}},kt)),u=1,t.prev=7,f=JSON.stringify(r.query),l=n.pattern.exec(r.path),p=!1,t.next=13,Promise.all(n.parts.map(function(){var t=q(H.mark(function t(n,o){var i,m,h,g,$,v;return H.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=s[o],Mt(o,i,l,f)&&(p=!0),a.segments[u]=s[o+1],n){t.next=5;break}return t.abrupt("return",{segment:i});case 5:if(m=u++,jt||p||!Lt[o]||Lt[o].part!==n.i){t.next=8;break}return t.abrupt("return",Lt[o]);case 8:return p=!1,t.next=11,Zt(_t[n.i]);case 11:if(h=t.sent,g=h.default,$=h.preload,!Ct&&At.preloaded[o+1]){t.next=25;break}if(!$){t.next=21;break}return t.next=18,$.call(c,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},kt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:v=t.t0,t.next=26;break;case 25:v=At.preloaded[o+1];case 26:return t.abrupt("return",a["level".concat(m)]={component:g,props:v,segment:i,match:l,part:n.i});case 27:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()));case 13:i=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),a.error=t.t0,a.status=500,i=[];case 21:return t.abrupt("return",{redirect:o,props:a,branch:i});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Qt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)})}function Zt(t){var e="string"==typeof t.css?[]:t.css.map(Qt);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function te(t){t.parentNode.removeChild(t)}function ee(t){var e=Jt(new URL(t,document.baseURI));if(e)return qt&&t===qt.href||function(t,e){qt={href:t,promise:e}}(t,Wt(e)),qt.promise}function ne(t){clearTimeout(Ut),Ut=setTimeout(function(){re(t)},20)}function re(t){var e=oe(t.target);e&&"prefetch"===e.rel&&ee(e.href)}function se(t){if(1===function(t){return null===t.which?t.button:t.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=oe(t.target);if(e&&e.href){var n="object"===O(e.href)&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&(n?!e.target.baseVal:!e.target)){var s=new URL(r);if(s.pathname!==location.pathname||s.search!==location.search){var o=Jt(s);if(o)Kt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Tt.pushState({id:Ht},"",s.href)}}}else location.hash||t.preventDefault()}}}function oe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ae(t){if(Bt[Ht]=Vt(),t.state){var e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else(function(t){Ht=t})(It=It+1),Tt.replaceState({id:Ht},"",location.href)}var ce=function(){return N(V)};!function(t){var e;"scrollRestoration"in Tt&&(Tt.scrollRestoration="manual"),e=t.target,Nt=e,addEventListener("click",se),addEventListener("popstate",ae),addEventListener("touchstart",re),addEventListener("mousemove",ne),Promise.resolve().then(function(){var t=location,e=t.hash,n=t.href;Tt.replaceState({id:It},"",n);var r,s,o,a,c,i,u,f,l=new URL(location.href);if(At.error)return r=location,s=r.host,o=r.pathname,a=r.search,c=At.session,i=At.preloaded,u=At.status,f=At.error,Rt||(Rt=i&&i[0]),void zt(null,[],{error:f,status:u,session:c,level0:{props:Rt},level1:{props:{status:u,error:f},component:mt},segments:i},{host:s,path:o,query:Gt(a),params:{}});var p=Jt(l);return p?Kt(p,It,!0,e):void 0})}({target:document.querySelector("#sapper")});
