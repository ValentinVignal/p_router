import{s as W,n as te,c as fe,a as xe,o as De,b as Ce,e as Ee,u as ye,g as Le,f as Se}from"../chunks/scheduler.tir4UGnv.js";import{S as X,i as F,A as ve,l as Ve,d as m,h as f,e as v,s as y,c as _,k as ae,f as L,m as g,g as q,t as me,p as I,a as E,b as he,q as x,r as D,u as S,v as k,w as C,n as _e,o as ke,j as Ae}from"../chunks/index.DZgop0PW.js";import{p as ge}from"../chunks/stores.CjAL0hlM.js";import{b as K}from"../chunks/entry.BvPRSOBB.js";import{I as se,e as Te}from"../chunks/Icon.BHYt4fLd.js";import{b as je,H as qe,B as Be,c as He,d as Pe,e as Me,f as ze,U as Ue,g as Ge,h as Re}from"../chunks/index.1IMVYY4w.js";import{a as Ne,g as Oe,G as Ke}from"../chunks/gtag.Df4n8T0S.js";const We=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Xe=!0,It=Object.freeze(Object.defineProperty({__proto__:null,prerender:Xe},Symbol.toStringTag,{value:"Module"})),{document:de}=We;function be(o){let e,t="",s,r,l,n=`window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			// cspell: disable-next-line
			gtag('config', 'G-1SBGVLP63X');`;return{c(){e=v("script"),e.innerHTML=t,r=y(),l=v("script"),l.textContent=n,this.h()},l(a){e=_(a,"SCRIPT",{src:!0,"data-svelte-h":!0}),ae(e)!=="svelte-fz7z9x"&&(e.innerHTML=t),r=L(a),l=_(a,"SCRIPT",{"data-svelte-h":!0}),ae(l)!=="svelte-iw072v"&&(l.textContent=n),this.h()},h(){e.async=!0,xe(e.src,s="https://www.googletagmanager.com/gtag/js?id=G-1SBGVLP63X")||g(e,"src",s)},m(a,i){q(a,e,i),q(a,r,i),q(a,l,i)},d(a){a&&(m(e),m(r),m(l))}}}function Fe(o){let e,t=!o[0]&&be();return{c(){t&&t.c(),e=ve()},l(s){const r=Ve("svelte-1qmfufu",de.head);t&&t.l(r),e=ve(),r.forEach(m)},m(s,r){t&&t.m(de.head,null),f(de.head,e)},p(s,[r]){s[0]?t&&(t.d(1),t=null):t||(t=be(),t.c(),t.m(e.parentNode,e))},i:te,o:te,d(s){t&&t.d(s),m(e)}}}function Qe(o,e,t){let s,r;return fe(o,ge,l=>t(1,r=l)),o.$$.update=()=>{o.$$.dirty&2&&t(0,s=r.url.hostname==="localhost"),o.$$.dirty&3&&!s&&typeof gtag<"u"&&gtag("config","G-1SBGVLP63X",{page_title:document.title,page_path:r.url.pathname})},[s,r]}class Ze extends X{constructor(e){super(),F(this,e,Qe,Fe,W,{})}}const Je=""+new URL("../assets/profile-picture.CRM4Qggu.jpg",import.meta.url).href,Ye=[["default","Default"],["dark","Dark"],["light","Light"],["halloween","Halloween"],["forest","Forest"],["dracula","Dracula"],["night","Night"],["sunset","Sunset"],["grassland","Grassland"]];var Ie={exports:{}};(function(o,e){function t(){var n=document.querySelector("[data-toggle-theme]"),a=n?n.getAttribute("data-key"):null;(function(i=localStorage.getItem(a||"theme")){localStorage.getItem(a||"theme")&&(document.documentElement.setAttribute("data-theme",i),n&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.classList.add(n.getAttribute("data-act-class"))}))})(),n&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(i=>{i.addEventListener("click",function(){var c=i.getAttribute("data-toggle-theme");if(c){var d=c.split(",");document.documentElement.getAttribute("data-theme")==d[0]?d.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(a||"theme")):(document.documentElement.setAttribute("data-theme",d[1]),localStorage.setItem(a||"theme",d[1])):(document.documentElement.setAttribute("data-theme",d[0]),localStorage.setItem(a||"theme",d[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(h=>{h.classList.toggle(this.getAttribute("data-act-class"))})})})}function s(){var n=document.querySelector("[data-set-theme='']"),a=n?n.getAttribute("data-key"):null;(function(i=localStorage.getItem(a||"theme")){if(i!=null&&i!="")if(localStorage.getItem(a||"theme")&&localStorage.getItem(a||"theme")!=""){document.documentElement.setAttribute("data-theme",i);var c=document.querySelector("[data-set-theme='"+i.toString()+"']");c&&([...document.querySelectorAll("[data-set-theme]")].forEach(d=>{d.classList.remove(d.getAttribute("data-act-class"))}),c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class")))}else{var c=document.querySelector("[data-set-theme='']");c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(i=>{i.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.classList.remove(c.getAttribute("data-act-class"))}),i.getAttribute("data-act-class")&&i.classList.add(i.getAttribute("data-act-class"))})})}function r(){var n=document.querySelector("select[data-choose-theme]"),a=n?n.getAttribute("data-key"):null;(function(i=localStorage.getItem(a||"theme")){if(localStorage.getItem(a||"theme")){document.documentElement.setAttribute("data-theme",i);var c=document.querySelector("select[data-choose-theme] [value='"+i.toString()+"']");c&&[...document.querySelectorAll("select[data-choose-theme] [value='"+i.toString()+"']")].forEach(d=>{d.selected=!0})}})(),n&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(i=>{i.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(a||"theme")+"']")].forEach(c=>{c.selected=!0})})})}function l(n=!0){n===!0?document.addEventListener("DOMContentLoaded",function(a){t(),r(),s()}):(t(),r(),s())}o.exports={themeChange:l}})(Ie);var et=Ie.exports;function tt(o,e,t){const s=o.slice();return s[0]=e[t][0],s[1]=e[t][1],s}function at(o,e){let t,s=`<input tabindex="-1" data-set-theme="${e[0]}" id="theme-dropdown-${e[0]}" type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="${e[1]}" value="${e[0]}"/> `;return{key:o,first:null,c(){t=v("li"),t.innerHTML=s,this.h()},l(r){t=_(r,"LI",{"data-svelte-h":!0}),ae(t)!=="svelte-hlkove"&&(t.innerHTML=s),this.h()},h(){this.first=t},m(r,l){q(r,t,l)},p:te,d(r){r&&m(t)}}}function rt(o){let e,t,s,r,l,n,a,i=[],c=new Map,d;l=new se({props:{src:je,size:"14"}});let h=Te(Ye);const B=u=>u[0];for(let u=0;u<h.length;u+=1){let b=tt(o,h,u),$=B(b);c.set($,i[u]=at($,b))}return{c(){e=v("div"),t=v("label"),s=me(`Theme
		`),r=v("div"),I(l.$$.fragment),n=y(),a=v("ul");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=_(u,"DIV",{class:!0});var b=E(e);t=_(b,"LABEL",{for:!0,tabindex:!0,class:!0});var $=E(t);s=he($,`Theme
		`),r=_($,"DIV",{class:!0});var w=E(r);x(l.$$.fragment,w),w.forEach(m),$.forEach(m),n=L(b),a=_(b,"UL",{class:!0});var A=E(a);for(let V=0;V<i.length;V+=1)i[V].l(A);A.forEach(m),b.forEach(m),this.h()},h(){g(r,"class","icon opacity-60"),g(t,"for","theme-dropdown"),g(t,"tabindex","-1"),g(t,"class","btn m-1"),g(a,"class","dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"),g(e,"class","dropdown dropdown-top m-4")},m(u,b){q(u,e,b),f(e,t),f(t,s),f(t,r),D(l,r,null),f(e,n),f(e,a);for(let $=0;$<i.length;$+=1)i[$]&&i[$].m(a,null);d=!0},p:te,i(u){d||(S(l.$$.fragment,u),d=!0)},o(u){k(l.$$.fragment,u),d=!1},d(u){u&&m(e),C(l);for(let b=0;b<i.length;b+=1)i[b].d()}}}function nt(o){return De(()=>{et.themeChange(!1)}),[]}class st extends X{constructor(e){super(),F(this,e,nt,rt,W,{})}}function lt(o){let e,t,s,r,l,n,a,i;return s=new se({props:{src:o[1],size:"25",theme:o[3]?"solid":void 0,class:"primary"}}),{c(){e=v("li"),t=v("a"),I(s.$$.fragment),r=y(),l=me(o[0]),this.h()},l(c){e=_(c,"LI",{});var d=E(e);t=_(d,"A",{href:!0});var h=E(t);x(s.$$.fragment,h),r=L(h),l=he(h,o[0]),h.forEach(m),d.forEach(m),this.h()},h(){g(t,"href",o[2]),_e(t,"active",o[3])},m(c,d){q(c,e,d),f(e,t),D(s,t,null),f(t,r),f(t,l),n=!0,a||(i=ke(t,"click",o[6]),a=!0)},p(c,[d]){const h={};d&2&&(h.src=c[1]),d&8&&(h.theme=c[3]?"solid":void 0),s.$set(h),(!n||d&1)&&Ae(l,c[0]),(!n||d&4)&&g(t,"href",c[2]),(!n||d&8)&&_e(t,"active",c[3])},i(c){n||(S(s.$$.fragment,c),n=!0)},o(c){k(s.$$.fragment,c),n=!1},d(c){c&&m(e),C(s),a=!1,i()}}}function ot(o,e,t){let s,r;fe(o,ge,h=>t(5,r=h));let{href:l}=e,{text:n}=e,{icon:a}=e;const i=h=>(K&&(h=h.replace(K,"")),l==="/"?["","/"].includes(h):h.startsWith(l));let c=K+l;Ce(()=>{t(2,c=Ne(r.url,l).toString())});const d=()=>{var h;(h=document.getElementById("drawer"))==null||h.click()};return o.$$set=h=>{"href"in h&&t(4,l=h.href),"text"in h&&t(0,n=h.text),"icon"in h&&t(1,a=h.icon)},o.$$.update=()=>{o.$$.dirty&32&&t(3,s=i(r.url.pathname))},[n,a,c,s,l,r,d]}class O extends X{constructor(e){super(),F(this,e,ot,lt,W,{href:4,text:0,icon:1})}}function it(o){let e,t,s,r,l,n,a,i,c,d,h=`<img src="${Je}" alt="Profile" class="svelte-gnl2ej"/>`,B,u,b,$,w,A,V,Q,P,z,M,le,G,oe,R,ie,U,ee,ce,Z,N,J;const ue=o[1].default,j=Ee(ue,o,o[0],null);return b=new O({props:{href:"/",text:"Home",icon:qe}}),w=new O({props:{href:"/education",text:"Education",icon:Be}}),V=new O({props:{href:"/work-experience",text:"Work experience",icon:He}}),P=new O({props:{href:"/projects",text:"Projects",icon:Pe}}),M=new O({props:{href:"/contributions",text:"Contributions",icon:Me}}),G=new O({props:{href:"/skills",text:"Skills",icon:ze}}),R=new O({props:{href:"/accounts",text:"Accounts",icon:Ue}}),N=new st({}),{c(){e=v("div"),t=v("input"),s=y(),r=v("div"),j&&j.c(),l=y(),n=v("div"),a=v("label"),i=y(),c=v("div"),d=v("a"),d.innerHTML=h,B=y(),u=v("ul"),I(b.$$.fragment),$=y(),I(w.$$.fragment),A=y(),I(V.$$.fragment),Q=y(),I(P.$$.fragment),z=y(),I(M.$$.fragment),le=y(),I(G.$$.fragment),oe=y(),I(R.$$.fragment),ie=y(),U=v("div"),ee=v("div"),ce=y(),Z=v("div"),I(N.$$.fragment),this.h()},l(p){e=_(p,"DIV",{class:!0});var H=E(e);t=_(H,"INPUT",{id:!0,type:!0,class:!0}),s=L(H),r=_(H,"DIV",{class:!0});var $e=E(r);j&&j.l($e),$e.forEach(m),l=L(H),n=_(H,"DIV",{class:!0});var re=E(n);a=_(re,"LABEL",{for:!0,class:!0}),E(a).forEach(m),i=L(re),c=_(re,"DIV",{class:!0});var Y=E(c);d=_(Y,"A",{href:!0,class:!0,"data-svelte-h":!0}),ae(d)!=="svelte-ne344z"&&(d.innerHTML=h),B=L(Y),u=_(Y,"UL",{class:!0});var T=E(u);x(b.$$.fragment,T),$=L(T),x(w.$$.fragment,T),A=L(T),x(V.$$.fragment,T),Q=L(T),x(P.$$.fragment,T),z=L(T),x(M.$$.fragment,T),le=L(T),x(G.$$.fragment,T),oe=L(T),x(R.$$.fragment,T),T.forEach(m),ie=L(Y),U=_(Y,"DIV",{class:!0});var ne=E(U);ee=_(ne,"DIV",{class:!0}),E(ee).forEach(m),ce=L(ne),Z=_(ne,"DIV",{class:!0});var pe=E(Z);x(N.$$.fragment,pe),pe.forEach(m),ne.forEach(m),Y.forEach(m),re.forEach(m),H.forEach(m),this.h()},h(){g(t,"id","drawer"),g(t,"type","checkbox"),g(t,"class","drawer-toggle"),g(r,"class","drawer-content flex flex-col items-center justify-start"),g(a,"for","drawer"),g(a,"class","drawer-overlay"),g(d,"href",K+"/"),g(d,"class","profile-picture svelte-gnl2ej"),g(u,"class","menu w-80 text-base-content bg-base-200"),g(ee,"class","divider"),g(Z,"class","theme-switcher svelte-gnl2ej"),g(U,"class","bg-base-200"),g(c,"class","drawer-side-content bg-base-200 svelte-gnl2ej"),g(n,"class","drawer-side z-10"),g(e,"class","drawer md:drawer-open")},m(p,H){q(p,e,H),f(e,t),f(e,s),f(e,r),j&&j.m(r,null),f(e,l),f(e,n),f(n,a),f(n,i),f(n,c),f(c,d),f(c,B),f(c,u),D(b,u,null),f(u,$),D(w,u,null),f(u,A),D(V,u,null),f(u,Q),D(P,u,null),f(u,z),D(M,u,null),f(u,le),D(G,u,null),f(u,oe),D(R,u,null),f(c,ie),f(c,U),f(U,ee),f(U,ce),f(U,Z),D(N,Z,null),J=!0},p(p,[H]){j&&j.p&&(!J||H&1)&&ye(j,ue,p,p[0],J?Se(ue,p[0],H,null):Le(p[0]),null)},i(p){J||(S(j,p),S(b.$$.fragment,p),S(w.$$.fragment,p),S(V.$$.fragment,p),S(P.$$.fragment,p),S(M.$$.fragment,p),S(G.$$.fragment,p),S(R.$$.fragment,p),S(N.$$.fragment,p),J=!0)},o(p){k(j,p),k(b.$$.fragment,p),k(w.$$.fragment,p),k(V.$$.fragment,p),k(P.$$.fragment,p),k(M.$$.fragment,p),k(G.$$.fragment,p),k(R.$$.fragment,p),k(N.$$.fragment,p),J=!1},d(p){p&&m(e),j&&j.d(p),C(b),C(w),C(V),C(P),C(M),C(G),C(R),C(N)}}}function ct(o,e,t){let{$$slots:s={},$$scope:r}=e;return o.$$set=l=>{"$$scope"in l&&t(0,r=l.$$scope)},[r,s]}class ut extends X{constructor(e){super(),F(this,e,ct,it,W,{})}}const dt=""+new URL("../assets/ValentinVignal.BfZhsrpT.pdf",import.meta.url).href;function ft(o){let e,t,s,r,l;return t=new se({props:{src:Ge,size:"24"}}),{c(){e=v("a"),I(t.$$.fragment),this.h()},l(n){e=_(n,"A",{class:!0,download:!0,target:!0,href:!0,title:!0});var a=E(e);x(t.$$.fragment,a),a.forEach(m),this.h()},h(){g(e,"class","btn btn-square"),g(e,"download","ValentinVignal.pdf"),g(e,"target","_blank"),g(e,"href",dt),g(e,"title","Download my resume")},m(n,a){q(n,e,a),D(t,e,null),s=!0,r||(l=ke(e,"click",o[0]),r=!0)},p:te,i(n){s||(S(t.$$.fragment,n),s=!0)},o(n){k(t.$$.fragment,n),s=!1},d(n){n&&m(e),C(t),r=!1,l()}}}function mt(o){return[()=>{Oe({event:Ke.DownloadResume})}]}class ht extends X{constructor(e){super(),F(this,e,mt,ft,W,{})}}function we(o){let e,t,s;return{c(){e=v("li"),t=v("p"),s=me(o[0]),this.h()},l(r){e=_(r,"LI",{});var l=E(e);t=_(l,"P",{class:!0});var n=E(t);s=he(n,o[0]),n.forEach(m),l.forEach(m),this.h()},h(){g(t,"class","text-lg")},m(r,l){q(r,e,l),f(e,t),f(t,s)},p(r,l){l&1&&Ae(s,r[0])},d(r){r&&m(e)}}}function gt(o){let e,t,s,r,l,n,a,i,c=`<a id="main-nav-bar-button" class="btn btn-ghost normal-case text-xl svelte-jhhvvk" href="${K}/">Valentin Vignal</a>`,d,h,B,u,b;r=new se({props:{src:Re,size:"24"}});let $=o[0]&&we(o);return u=new ht({}),{c(){e=v("div"),t=v("div"),s=v("label"),I(r.$$.fragment),l=y(),n=v("div"),a=v("ul"),i=v("li"),i.innerHTML=c,d=y(),$&&$.c(),h=y(),B=v("div"),I(u.$$.fragment),this.h()},l(w){e=_(w,"DIV",{class:!0});var A=E(e);t=_(A,"DIV",{class:!0});var V=E(t);s=_(V,"LABEL",{for:!0,class:!0});var Q=E(s);x(r.$$.fragment,Q),Q.forEach(m),V.forEach(m),l=L(A),n=_(A,"DIV",{class:!0});var P=E(n);a=_(P,"UL",{});var z=E(a);i=_(z,"LI",{"data-svelte-h":!0}),ae(i)!=="svelte-13pkz0i"&&(i.innerHTML=c),d=L(z),$&&$.l(z),z.forEach(m),P.forEach(m),h=L(A),B=_(A,"DIV",{class:!0});var M=E(B);x(u.$$.fragment,M),M.forEach(m),A.forEach(m),this.h()},h(){g(s,"for","drawer"),g(s,"class","btn btn-ghost drawer-button md:hidden"),g(t,"class","flex-none"),g(n,"class","breadcrumbs"),g(B,"class","download-resume-button svelte-jhhvvk"),g(e,"class","navbar bg-base-100 svelte-jhhvvk")},m(w,A){q(w,e,A),f(e,t),f(t,s),D(r,s,null),f(e,l),f(e,n),f(n,a),f(a,i),f(a,d),$&&$.m(a,null),f(e,h),f(e,B),D(u,B,null),b=!0},p(w,[A]){w[0]?$?$.p(w,A):($=we(w),$.c(),$.m(a,null)):$&&($.d(1),$=null)},i(w){b||(S(r.$$.fragment,w),S(u.$$.fragment,w),b=!0)},o(w){k(r.$$.fragment,w),k(u.$$.fragment,w),b=!1},d(w){w&&m(e),C(r),$&&$.d(),C(u)}}}function $t(o,e,t){let s,r;fe(o,ge,n=>t(1,r=n));const l=n=>{switch(K&&(n=n.replace(K,"")),n){case"/education":return"Education";case"/work-experience":return"Work experience";case"/work-experience/novade-solutions":return"Novade Solutions";case"/projects":return"Projects";case"/contributions":return"Contributions";case"/skills":return"Skills";case"/accounts":return"Accounts";default:return""}};return o.$$.update=()=>{o.$$.dirty&2&&t(0,s=l(r.url.pathname))},[s,r]}class pt extends X{constructor(e){super(),F(this,e,$t,gt,W,{})}}function vt(o){let e,t,s,r;e=new pt({});const l=o[0].default,n=Ee(l,o,o[1],null);return{c(){I(e.$$.fragment),t=y(),s=v("div"),n&&n.c(),this.h()},l(a){x(e.$$.fragment,a),t=L(a),s=_(a,"DIV",{class:!0});var i=E(s);n&&n.l(i),i.forEach(m),this.h()},h(){g(s,"class","container svelte-we7rjr")},m(a,i){D(e,a,i),q(a,t,i),q(a,s,i),n&&n.m(s,null),r=!0},p(a,i){n&&n.p&&(!r||i&2)&&ye(n,l,a,a[1],r?Se(l,a[1],i,null):Le(a[1]),null)},i(a){r||(S(e.$$.fragment,a),S(n,a),r=!0)},o(a){k(e.$$.fragment,a),k(n,a),r=!1},d(a){a&&(m(t),m(s)),C(e,a),n&&n.d(a)}}}function _t(o){let e,t,s,r;return e=new Ze({}),s=new ut({props:{$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){I(e.$$.fragment),t=y(),I(s.$$.fragment)},l(l){x(e.$$.fragment,l),t=L(l),x(s.$$.fragment,l)},m(l,n){D(e,l,n),q(l,t,n),D(s,l,n),r=!0},p(l,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:l}),s.$set(a)},i(l){r||(S(e.$$.fragment,l),S(s.$$.fragment,l),r=!0)},o(l){k(e.$$.fragment,l),k(s.$$.fragment,l),r=!1},d(l){l&&m(t),C(e,l),C(s,l)}}}function bt(o,e,t){let{$$slots:s={},$$scope:r}=e;return o.$$set=l=>{"$$scope"in l&&t(1,r=l.$$scope)},[s,r]}class xt extends X{constructor(e){super(),F(this,e,bt,_t,W,{})}}export{xt as component,It as universal};
