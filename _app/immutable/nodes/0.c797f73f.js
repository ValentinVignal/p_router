import{S as ce,i as ie,s as ue,k as h,q as C,l as g,m as v,r as B,h as i,n as m,b as X,C as n,D as Q,o as Ce,E as Be,u as Oe,F as Pe,a as w,y as V,c as I,z as T,G as Me,A as N,H as Ve,I as Te,J as Ne,g as L,d as x,B as j,K as xe,L as De,M as He}from"../chunks/index.481efb25.js";import{b as re}from"../chunks/paths.e568a2d4.js";import{p as Ke}from"../chunks/stores.057d117e.js";const ze=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:ze},Symbol.toStringTag,{value:"Module"})),Fe=""+new URL("../assets/profile-picture.b2eec859.jpg",import.meta.url).href;var je={exports:{}};(function(u,e){function s(){var a=document.querySelector("[data-toggle-theme]"),t=a?a.getAttribute("data-key"):null;(function(o=localStorage.getItem(t||"theme")){localStorage.getItem(t||"theme")&&(document.documentElement.setAttribute("data-theme",o),a&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(d=>{d.classList.add(a.getAttribute("data-act-class"))}))})(),a&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(o=>{o.addEventListener("click",function(){var d=o.getAttribute("data-toggle-theme");if(d){var c=d.split(",");document.documentElement.getAttribute("data-theme")==c[0]?c.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(t||"theme")):(document.documentElement.setAttribute("data-theme",c[1]),localStorage.setItem(t||"theme",c[1])):(document.documentElement.setAttribute("data-theme",c[0]),localStorage.setItem(t||"theme",c[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach($=>{$.classList.toggle(this.getAttribute("data-act-class"))})})})}function l(){var a=document.querySelector("[data-set-theme='']"),t=a?a.getAttribute("data-key"):null;(function(o=localStorage.getItem(t||"theme")){if(o!=null&&o!="")if(localStorage.getItem(t||"theme")&&localStorage.getItem(t||"theme")!=""){document.documentElement.setAttribute("data-theme",o);var d=document.querySelector("[data-set-theme='"+o.toString()+"']");d&&([...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.classList.remove(c.getAttribute("data-act-class"))}),d.getAttribute("data-act-class")&&d.classList.add(d.getAttribute("data-act-class")))}else{var d=document.querySelector("[data-set-theme='']");d.getAttribute("data-act-class")&&d.classList.add(d.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(o=>{o.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(t||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(d=>{d.classList.remove(d.getAttribute("data-act-class"))}),o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class"))})})}function r(){var a=document.querySelector("select[data-choose-theme]"),t=a?a.getAttribute("data-key"):null;(function(o=localStorage.getItem(t||"theme")){if(localStorage.getItem(t||"theme")){document.documentElement.setAttribute("data-theme",o);var d=document.querySelector("select[data-choose-theme] [value='"+o.toString()+"']");d&&[...document.querySelectorAll("select[data-choose-theme] [value='"+o.toString()+"']")].forEach(c=>{c.selected=!0})}})(),a&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(o=>{o.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(t||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(t||"theme")+"']")].forEach(d=>{d.selected=!0})})})}function f(a=!0){a===!0?document.addEventListener("DOMContentLoaded",function(t){s(),r(),l()}):(s(),r(),l())}u.exports={themeChange:f}})(je);var Ue=je.exports;function Ge(u){let e,s,l,r,f,a,t,o,d,c,$,E,q,p,y;return{c(){e=h("select"),s=h("option"),l=C("Default"),r=h("option"),f=C("Dark"),a=h("option"),t=C("Light"),o=h("option"),d=C("Halloween"),c=h("option"),$=C("Forest"),E=h("option"),q=C("Dracula"),p=h("option"),y=C("Night"),this.h()},l(b){e=g(b,"SELECT",{"data-choose-theme":!0,class:!0});var S=v(e);s=g(S,"OPTION",{});var M=v(s);l=B(M,"Default"),M.forEach(i),r=g(S,"OPTION",{});var O=v(r);f=B(O,"Dark"),O.forEach(i),a=g(S,"OPTION",{});var Y=v(a);t=B(Y,"Light"),Y.forEach(i),o=g(S,"OPTION",{});var H=v(o);d=B(H,"Halloween"),H.forEach(i),c=g(S,"OPTION",{});var P=v(c);$=B(P,"Forest"),P.forEach(i),E=g(S,"OPTION",{});var Z=v(E);q=B(Z,"Dracula"),Z.forEach(i),p=g(S,"OPTION",{});var K=v(p);y=B(K,"Night"),K.forEach(i),S.forEach(i),this.h()},h(){s.__value="",s.value=s.__value,r.__value="dark",r.value=r.__value,a.__value="light",a.value=a.__value,o.__value="halloween",o.value=o.__value,c.__value="forest",c.value=c.__value,E.__value="dracula",E.value=E.__value,p.__value="night",p.value=p.__value,m(e,"data-choose-theme",""),m(e,"class","select")},m(b,S){X(b,e,S),n(e,s),n(s,l),n(e,r),n(r,f),n(e,a),n(a,t),n(e,o),n(o,d),n(e,c),n(c,$),n(e,E),n(E,q),n(e,p),n(p,y)},p:Q,i:Q,o:Q,d(b){b&&i(e)}}}function We(u){return Ce(()=>{Ue.themeChange(!1)}),[]}class Je extends ce{constructor(e){super(),ie(this,e,We,Ge,ue,{})}}function Re(u){let e,s,l,r,f;return{c(){e=h("a"),s=C(u[1]),this.h()},l(a){e=g(a,"A",{href:!0});var t=v(e);s=B(t,u[1]),t.forEach(i),this.h()},h(){m(e,"href",l=""+(re+u[0]))},m(a,t){X(a,e,t),n(e,s),r||(f=Be(e,"click",u[2]),r=!0)},p(a,[t]){t&2&&Oe(s,a[1]),t&1&&l!==(l=""+(re+a[0]))&&m(e,"href",l)},i:Q,o:Q,d(a){a&&i(e),r=!1,f()}}}function Qe(u,e,s){let{href:l}=e,{text:r}=e;const f=()=>{var a;(a=document.getElementById("drawer"))==null||a.click()};return u.$$set=a=>{"href"in a&&s(0,l=a.href),"text"in a&&s(1,r=a.text)},[l,r,f]}class R extends ce{constructor(e){super(),ie(this,e,Qe,Re,ue,{href:0,text:1})}}function Xe(u){let e,s,l,r,f,a,t,o,d,c,$,E,q,p,y,b,S,M,O,Y,H,P,Z,K,F,me,le,U,he,se,G,ge,ne,W,ve,z,oe,_e,ee,J,te;const pe=u[1].default,k=Pe(pe,u,u[0],null);return b=new R({props:{href:"/",text:"Home"}}),O=new R({props:{href:"/education",text:"Education"}}),P=new R({props:{href:"/work-experience",text:"Work experience"}}),F=new R({props:{href:"/projects",text:"Projects"}}),U=new R({props:{href:"/contributions",text:"Contributions"}}),G=new R({props:{href:"/skills",text:"Skills"}}),W=new R({props:{href:"/accounts",text:"Accounts"}}),J=new Je({}),{c(){e=h("div"),s=h("input"),l=w(),r=h("div"),k&&k.c(),f=w(),a=h("div"),t=h("label"),o=w(),d=h("div"),c=h("a"),$=h("img"),q=w(),p=h("ul"),y=h("li"),V(b.$$.fragment),S=w(),M=h("li"),V(O.$$.fragment),Y=w(),H=h("li"),V(P.$$.fragment),Z=w(),K=h("li"),V(F.$$.fragment),me=w(),le=h("li"),V(U.$$.fragment),he=w(),se=h("li"),V(G.$$.fragment),ge=w(),ne=h("li"),V(W.$$.fragment),ve=w(),z=h("div"),oe=h("div"),_e=w(),ee=h("div"),V(J.$$.fragment),this.h()},l(_){e=g(_,"DIV",{class:!0});var D=v(e);s=g(D,"INPUT",{id:!0,type:!0,class:!0}),l=I(D),r=g(D,"DIV",{class:!0});var $e=v(r);k&&k.l($e),$e.forEach(i),f=I(D),a=g(D,"DIV",{class:!0});var de=v(a);t=g(de,"LABEL",{for:!0,class:!0}),v(t).forEach(i),o=I(de),d=g(de,"DIV",{class:!0});var ae=v(d);c=g(ae,"A",{href:!0,class:!0});var Ee=v(c);$=g(Ee,"IMG",{src:!0,alt:!0,class:!0}),Ee.forEach(i),q=I(ae),p=g(ae,"UL",{class:!0});var A=v(p);y=g(A,"LI",{});var be=v(y);T(b.$$.fragment,be),be.forEach(i),S=I(A),M=g(A,"LI",{});var we=v(M);T(O.$$.fragment,we),we.forEach(i),Y=I(A),H=g(A,"LI",{});var Ie=v(H);T(P.$$.fragment,Ie),Ie.forEach(i),Z=I(A),K=g(A,"LI",{});var Se=v(K);T(F.$$.fragment,Se),Se.forEach(i),me=I(A),le=g(A,"LI",{});var Ae=v(le);T(U.$$.fragment,Ae),Ae.forEach(i),he=I(A),se=g(A,"LI",{});var ke=v(se);T(G.$$.fragment,ke),ke.forEach(i),ge=I(A),ne=g(A,"LI",{});var ye=v(ne);T(W.$$.fragment,ye),ye.forEach(i),A.forEach(i),ve=I(ae),z=g(ae,"DIV",{class:!0});var fe=v(z);oe=g(fe,"DIV",{class:!0}),v(oe).forEach(i),_e=I(fe),ee=g(fe,"DIV",{class:!0});var Le=v(ee);T(J.$$.fragment,Le),Le.forEach(i),fe.forEach(i),ae.forEach(i),de.forEach(i),D.forEach(i),this.h()},h(){m(s,"id","drawer"),m(s,"type","checkbox"),m(s,"class","drawer-toggle"),m(r,"class","drawer-content flex flex-col items-center justify-start"),m(t,"for","drawer"),m(t,"class","drawer-overlay"),Me($.src,E=Fe)||m($,"src",E),m($,"alt","Profile"),m($,"class","svelte-1nenxsr"),m(c,"href",re+"/"),m(c,"class","profile-picture svelte-1nenxsr"),m(p,"class","menu w-80 text-base-content bg-base-200"),m(oe,"class","divider"),m(ee,"class","theme-switcher svelte-1nenxsr"),m(z,"class","bg-base-200"),m(d,"class","drawer-side-content bg-base-200 svelte-1nenxsr"),m(a,"class","drawer-side z-10"),m(e,"class","drawer md:drawer-open")},m(_,D){X(_,e,D),n(e,s),n(e,l),n(e,r),k&&k.m(r,null),n(e,f),n(e,a),n(a,t),n(a,o),n(a,d),n(d,c),n(c,$),n(d,q),n(d,p),n(p,y),N(b,y,null),n(p,S),n(p,M),N(O,M,null),n(p,Y),n(p,H),N(P,H,null),n(p,Z),n(p,K),N(F,K,null),n(p,me),n(p,le),N(U,le,null),n(p,he),n(p,se),N(G,se,null),n(p,ge),n(p,ne),N(W,ne,null),n(d,ve),n(d,z),n(z,oe),n(z,_e),n(z,ee),N(J,ee,null),te=!0},p(_,[D]){k&&k.p&&(!te||D&1)&&Ve(k,pe,_,_[0],te?Ne(pe,_[0],D,null):Te(_[0]),null)},i(_){te||(L(k,_),L(b.$$.fragment,_),L(O.$$.fragment,_),L(P.$$.fragment,_),L(F.$$.fragment,_),L(U.$$.fragment,_),L(G.$$.fragment,_),L(W.$$.fragment,_),L(J.$$.fragment,_),te=!0)},o(_){x(k,_),x(b.$$.fragment,_),x(O.$$.fragment,_),x(P.$$.fragment,_),x(F.$$.fragment,_),x(U.$$.fragment,_),x(G.$$.fragment,_),x(W.$$.fragment,_),x(J.$$.fragment,_),te=!1},d(_){_&&i(e),k&&k.d(_),j(b),j(O),j(P),j(F),j(U),j(G),j(W),j(J)}}}function Ye(u,e,s){let{$$slots:l={},$$scope:r}=e;return u.$$set=f=>{"$$scope"in f&&s(0,r=f.$$scope)},[r,l]}class Ze extends ce{constructor(e){super(),ie(this,e,Ye,Xe,ue,{})}}function qe(u){let e,s;return{c(){e=h("p"),s=C(u[0]),this.h()},l(l){e=g(l,"P",{class:!0});var r=v(e);s=B(r,u[0]),r.forEach(i),this.h()},h(){m(e,"class","text-lg")},m(l,r){X(l,e,r),n(e,s)},p(l,r){r&1&&Oe(s,l[0])},d(l){l&&i(e)}}}function et(u){let e,s,l,r,f,a,t,o,d,c=u[0]&&qe(u);return{c(){e=h("div"),s=h("div"),l=h("label"),r=xe("svg"),f=xe("path"),a=w(),t=h("a"),o=C("Valentin Vignal"),d=w(),c&&c.c(),this.h()},l($){e=g($,"DIV",{class:!0});var E=v(e);s=g(E,"DIV",{class:!0});var q=v(s);l=g(q,"LABEL",{for:!0,class:!0});var p=v(l);r=De(p,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var y=v(r);f=De(y,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(f).forEach(i),y.forEach(i),p.forEach(i),q.forEach(i),a=I(E),t=g(E,"A",{class:!0,href:!0});var b=v(t);o=B(b,"Valentin Vignal"),b.forEach(i),d=I(E),c&&c.l(E),E.forEach(i),this.h()},h(){m(f,"stroke-linecap","round"),m(f,"stroke-linejoin","round"),m(f,"stroke-width","2"),m(f,"d","M4 6h16M4 12h16M4 18h16"),m(r,"xmlns","http://www.w3.org/2000/svg"),m(r,"fill","none"),m(r,"viewBox","0 0 24 24"),m(r,"class","inline-block w-5 h-5 stroke-current"),m(l,"for","drawer"),m(l,"class","btn btn-ghost drawer-button md:hidden"),m(s,"class","flex-none"),m(t,"class","btn btn-ghost normal-case text-xl"),m(t,"href",re+"/"),m(e,"class","navbar bg-base-100")},m($,E){X($,e,E),n(e,s),n(s,l),n(l,r),n(r,f),n(e,a),n(e,t),n(t,o),n(e,d),c&&c.m(e,null)},p($,[E]){$[0]?c?c.p($,E):(c=qe($),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i:Q,o:Q,d($){$&&i(e),c&&c.d()}}}function tt(u,e,s){let l,r;He(u,Ke,a=>s(1,r=a));const f=a=>{switch(re&&(a=a.replace(re,"")),a){case"/education":return"Education";case"/work-experience":return"Work experience";case"/work-experience/novade-solutions":return"Novade Solutions";case"/projects":return"Projects";case"/contributions":return"Contributions";case"/skills":return"Skills";case"/accounts":return"Accounts";default:return""}};return u.$$.update=()=>{u.$$.dirty&2&&s(0,l=f(r.url.pathname))},[l,r]}class at extends ce{constructor(e){super(),ie(this,e,tt,et,ue,{})}}function rt(u){let e,s,l,r;e=new at({});const f=u[0].default,a=Pe(f,u,u[1],null);return{c(){V(e.$$.fragment),s=w(),l=h("div"),a&&a.c(),this.h()},l(t){T(e.$$.fragment,t),s=I(t),l=g(t,"DIV",{class:!0});var o=v(l);a&&a.l(o),o.forEach(i),this.h()},h(){m(l,"class","container svelte-we7rjr")},m(t,o){N(e,t,o),X(t,s,o),X(t,l,o),a&&a.m(l,null),r=!0},p(t,o){a&&a.p&&(!r||o&2)&&Ve(a,f,t,t[1],r?Ne(f,t[1],o,null):Te(t[1]),null)},i(t){r||(L(e.$$.fragment,t),L(a,t),r=!0)},o(t){x(e.$$.fragment,t),x(a,t),r=!1},d(t){j(e,t),t&&i(s),t&&i(l),a&&a.d(t)}}}function lt(u){let e,s;return e=new Ze({props:{$$slots:{default:[rt]},$$scope:{ctx:u}}}),{c(){V(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,r){N(e,l,r),s=!0},p(l,[r]){const f={};r&2&&(f.$$scope={dirty:r,ctx:l}),e.$set(f)},i(l){s||(L(e.$$.fragment,l),s=!0)},o(l){x(e.$$.fragment,l),s=!1},d(l){j(e,l)}}}function st(u,e,s){let{$$slots:l={},$$scope:r}=e;return u.$$set=f=>{"$$scope"in f&&s(1,r=f.$$scope)},[l,r]}class ut extends ce{constructor(e){super(),ie(this,e,st,lt,ue,{})}}export{ut as component,it as universal};
