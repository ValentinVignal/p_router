import{S as Z}from"../chunks/skills.D53hZCmO.js";import{s as _e,a as ne}from"../chunks/scheduler.tir4UGnv.js";import{S as pe,i as ge,e as m,s as $,c as _,a as k,d as o,f as L,l as ve,m as c,g as B,y as ke,u as x,v as ee,t as z,p as re,b as A,q as ie,h as i,r as oe,j as J,w as ce,x as Se}from"../chunks/index.DZgop0PW.js";import{e as de,u as we,I as be,o as ye}from"../chunks/Icon.BHYt4fLd.js";import{S as Ee}from"../chunks/Skills.DKGzdLua.js";import{a as De}from"../chunks/index.1IMVYY4w.js";const Ie=[{name:"National University of Singapore - School of Computing",url:"https://nus.edu.sg/",description:"Master in Computer Science - Specialization in Artificial Intelligence",start:new Date(2019,0),end:new Date(2020,5),logo:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/800px-NUS_coat_of_arms.svg.png",skills:[Z.Python]},{name:"CentraleSupélec",url:"https://www.centralesupelec.fr/en",description:"Master in Engineering - Specialization in Computer Science and Electrical Engineering",start:new Date(2016,8),end:new Date(2020,5),logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/LogoCS.png/1280px-LogoCS.png",skills:[Z.Python]},{name:"Lycée Masséna - MPSI/MP*",url:"http://www.lycee-massena.fr/les-cpge/",description:"Intensive two-year preparation to the highly competitive entrance examinations for the French Engineering Schools",start:new Date(2014,8),end:new Date(2016,5),skills:[Z.Python]}],$e=()=>({education:Ie}),ze=Object.freeze(Object.defineProperty({__proto__:null,load:$e},Symbol.toStringTag,{value:"Module"}));function ue(f,e,t){const r=f.slice();return r[1]=e[t],r}function fe(f){let e,t,r;return{c(){e=m("img"),this.h()},l(a){e=_(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ne(e.src,t=f[1].logo)||c(e,"src",t),c(e,"alt",r=f[1].name),c(e,"class","h-12 rounded svelte-18ea5c")},m(a,s){B(a,e,s)},p(a,s){s&1&&!ne(e.src,t=a[1].logo)&&c(e,"src",t),s&1&&r!==(r=a[1].name)&&c(e,"alt",r)},d(a){a&&o(e)}}}function he(f){let e,t=f[1].description+"",r;return{c(){e=m("p"),r=z(t)},l(a){e=_(a,"P",{});var s=k(e);r=A(s,t),s.forEach(o)},m(a,s){B(a,e,s),i(e,r)},p(a,s){s&1&&t!==(t=a[1].description+"")&&J(r,t)},d(a){a&&o(e)}}}function me(f,e){let t,r,a,s,h,S,n,l=e[1].name+"",p,E,w,M,b,K,P,D,Q,C,I,G=e[1].start.toLocaleDateString("en-GB",{month:"short",year:"numeric"})+"",U,W,j=e[1].end.toLocaleDateString("en-GB",{month:"short",year:"numeric"})+"",N,X,O,Y,y,d=e[1].logo&&fe(e);b=new Ee({props:{skillIds:e[1].skills}}),D=new be({props:{src:De,size:"25"}});let u=e[1].description&&he(e);return{key:f,first:null,c(){t=m("li"),r=m("a"),a=m("div"),s=m("div"),h=m("div"),S=m("div"),d&&d.c(),n=$(),p=z(l),E=$(),w=m("div"),M=m("div"),re(b.$$.fragment),K=$(),P=m("div"),re(D.$$.fragment),Q=$(),C=m("p"),I=m("small"),U=z(G),W=z(" - "),N=z(j),X=$(),u&&u.c(),Y=$(),this.h()},l(g){t=_(g,"LI",{"data-content":!0,class:!0});var v=k(t);r=_(v,"A",{href:!0});var q=k(r);a=_(q,"DIV",{class:!0});var te=k(a);s=_(te,"DIV",{class:!0});var V=k(s);h=_(V,"DIV",{class:!0});var T=k(h);S=_(T,"DIV",{class:!0});var F=k(S);d&&d.l(F),n=L(F),p=A(F,l),F.forEach(o),E=L(T),w=_(T,"DIV",{class:!0});var R=k(w);M=_(R,"DIV",{class:!0});var ae=k(M);ie(b.$$.fragment,ae),ae.forEach(o),K=L(R),P=_(R,"DIV",{class:!0});var le=k(P);ie(D.$$.fragment,le),le.forEach(o),R.forEach(o),T.forEach(o),Q=L(V),C=_(V,"P",{});var se=k(C);I=_(se,"SMALL",{});var H=k(I);U=A(H,G),W=A(H," - "),N=A(H,j),H.forEach(o),se.forEach(o),X=L(V),u&&u.l(V),V.forEach(o),te.forEach(o),q.forEach(o),Y=L(v),v.forEach(o),this.h()},h(){c(S,"class","card-name svelte-18ea5c"),c(M,"class","skills svelte-18ea5c"),c(P,"class","arrow-icon svelte-18ea5c"),c(w,"class","flex flex-row"),c(h,"class","card-title svelte-18ea5c"),c(s,"class","card-body"),c(a,"class","card shadow-xl bg-base-100 card-bordered svelte-18ea5c"),c(r,"href",O=e[1].url),c(t,"data-content",""),c(t,"class","step step-primary svelte-18ea5c"),this.first=t},m(g,v){B(g,t,v),i(t,r),i(r,a),i(a,s),i(s,h),i(h,S),d&&d.m(S,null),i(S,n),i(S,p),i(h,E),i(h,w),i(w,M),oe(b,M,null),i(w,K),i(w,P),oe(D,P,null),i(s,Q),i(s,C),i(C,I),i(I,U),i(I,W),i(I,N),i(s,X),u&&u.m(s,null),i(t,Y),y=!0},p(g,v){e=g,e[1].logo?d?d.p(e,v):(d=fe(e),d.c(),d.m(S,n)):d&&(d.d(1),d=null),(!y||v&1)&&l!==(l=e[1].name+"")&&J(p,l);const q={};v&1&&(q.skillIds=e[1].skills),b.$set(q),(!y||v&1)&&G!==(G=e[1].start.toLocaleDateString("en-GB",{month:"short",year:"numeric"})+"")&&J(U,G),(!y||v&1)&&j!==(j=e[1].end.toLocaleDateString("en-GB",{month:"short",year:"numeric"})+"")&&J(N,j),e[1].description?u?u.p(e,v):(u=he(e),u.c(),u.m(s,null)):u&&(u.d(1),u=null),(!y||v&1&&O!==(O=e[1].url))&&c(r,"href",O)},i(g){y||(x(b.$$.fragment,g),x(D.$$.fragment,g),y=!0)},o(g){ee(b.$$.fragment,g),ee(D.$$.fragment,g),y=!1},d(g){g&&o(t),d&&d.d(),ce(b),ce(D),u&&u.d()}}}function Le(f){let e,t=[],r=new Map,a,s,h=de(f[0].education);const S=n=>n[1].url;for(let n=0;n<h.length;n+=1){let l=ue(f,h,n),p=S(l);r.set(p,t[n]=me(p,l))}return{c(){e=m("ul");for(let n=0;n<t.length;n+=1)t[n].c();a=$(),this.h()},l(n){e=_(n,"UL",{class:!0});var l=k(e);for(let E=0;E<t.length;E+=1)t[E].l(l);l.forEach(o),a=L(n),ve("svelte-1asyk7j",document.head).forEach(o),this.h()},h(){c(e,"class","steps steps-vertical svelte-18ea5c"),document.title="Valentin Vignal - Education"},m(n,l){B(n,e,l);for(let p=0;p<t.length;p+=1)t[p]&&t[p].m(e,null);B(n,a,l),s=!0},p(n,[l]){l&1&&(h=de(n[0].education),Se(),t=we(t,l,S,1,n,h,r,e,ye,me,null,ue),ke())},i(n){if(!s){for(let l=0;l<h.length;l+=1)x(t[l]);s=!0}},o(n){for(let l=0;l<t.length;l+=1)ee(t[l]);s=!1},d(n){n&&(o(e),o(a));for(let l=0;l<t.length;l+=1)t[l].d()}}}function Me(f,e,t){let{data:r}=e;return f.$$set=a=>{"data"in a&&t(0,r=a.data)},[r]}class Ae extends pe{constructor(e){super(),ge(this,e,Me,Le,_e,{data:0})}}export{Ae as component,ze as universal};
