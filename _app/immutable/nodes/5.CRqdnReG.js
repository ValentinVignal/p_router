import{S as o}from"../chunks/skills.DAp2Z1pH.js";import{d as T,e as p,t as m}from"../chunks/disclose-version.BQ1VF5Y-.js";import"../chunks/legacy.DU8k3j3-.js";import{A as V,C as F,$ as J,G as a,g as t,N as n,I as e,J as d,K as P}from"../chunks/runtime.Dd1qabc2.js";import{s as w}from"../chunks/render.BlEraNsf.js";import{p as R,i as $}from"../chunks/props.B-Rn7FuN.js";import{e as H,I as Q}from"../chunks/Icon.DcxCQ35N.js";import{s as v}from"../chunks/attributes.BxGyt5al.js";import{i as W}from"../chunks/lifecycle.CB8Icp5i.js";import{S as X}from"../chunks/Skills.m4QNpkkj.js";import{a as Y}from"../chunks/index.B4gE-Eqw.js";const Z=[{name:"National University of Singapore - School of Computing",url:"https://nus.edu.sg/",description:"Master in Computer Science - Specialization in Artificial Intelligence",start:new Date(2019,0),end:new Date(2020,5),logo:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/800px-NUS_coat_of_arms.svg.png",skills:[o.Python,o.Kotlin,o.Android]},{name:"CentraleSupélec",url:"https://www.centralesupelec.fr/en",description:"Master in Engineering - Specialization in Computer Science and Electrical Engineering",start:new Date(2016,8),end:new Date(2020,5),logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/LogoCS.png/1280px-LogoCS.png",skills:[o.Python]},{name:"Lycée Masséna - MPSI/MP*",url:"http://www.lycee-massena.fr/les-cpge/",description:"Intensive two-year preparation to the highly competitive entrance examinations for the French Engineering Schools",start:new Date(2014,8),end:new Date(2016,5),skills:[o.Python]}],ee=()=>({education:Z}),fe=Object.freeze(Object.defineProperty({__proto__:null,load:ee},Symbol.toStringTag,{value:"Module"}));var ae=m('<img class="h-12 rounded svelte-18ea5c">'),te=m("<p> </p>"),re=m('<li data-content="" class="step step-primary svelte-18ea5c"><div class="card shadow-xl bg-base-100 card-bordered svelte-18ea5c"><div class="card-body"><div class="card-title svelte-18ea5c"><a><div class="card-name svelte-18ea5c"><!> </div></a> <div class="flex flex-row"><div class="skills svelte-18ea5c"><!></div> <a><div class="arrow-icon svelte-18ea5c"><!></div></a></div></div> <p><small> </small></p> <!></div></div></li>'),ie=m('<ul class="steps steps-vertical svelte-18ea5c"></ul>');function he(E,b){V(b,!1);let L=R(b,"data",8);W();var g=ie();T(l=>{J.title="Valentin Vignal - Education"}),H(g,5,()=>L().education,l=>l.url,(l,r)=>{var _=re(),y=a(_),k=a(y),f=a(k),c=a(f),x=a(c),D=a(x);{var z=i=>{var s=ae();d(()=>{v(s,"src",t(r).logo),v(s,"alt",t(r).name)}),p(i,s)};$(D,i=>{t(r).logo&&i(z)})}var A=n(D);e(x),e(c);var I=n(c,2),h=a(I),N=a(h);X(N,{get skillIds(){return t(r).skills}}),e(h);var u=n(h,2),C=a(u),G=a(C);Q(G,{src:Y,size:"25"}),e(C),e(u),e(I),e(f);var S=n(f,2),M=a(S);const O=P(()=>t(r).start.toLocaleDateString("en-GB",{month:"short",year:"numeric"})??""),U=P(()=>t(r).end.toLocaleDateString("en-GB",{month:"short",year:"numeric"})??"");var j=a(M);d(()=>w(j,`${t(O)} - ${t(U)}`)),e(M),e(S);var q=n(S,2);{var B=i=>{var s=te(),K=a(s,!0);e(s),d(()=>w(K,t(r).description)),p(i,s)};$(q,i=>{t(r).description&&i(B)})}e(k),e(y),e(_),d(()=>{v(c,"href",t(r).url),w(A,` ${t(r).name??""}`),v(u,"href",t(r).url)}),p(l,_)}),e(g),p(E,g),F()}export{he as component,fe as universal};
