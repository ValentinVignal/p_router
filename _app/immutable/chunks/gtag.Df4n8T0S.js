import{b as l}from"./entry.BvPRSOBB.js";const c=(e,s)=>{const a=new URL(e);return a.pathname=l+s,a},o=(e,s)=>{const a=new URL(e);return e.searchParams.getAll("skill").includes(s)?a.searchParams.delete("skill",s):a.searchParams.append("skill",s),a};var t=(e=>(e.SkillClick="skill_filter",e.DownloadResume="download_resume",e))(t||{});const i=e=>{gtag("event",e.event,"data"in e?e.data:void 0)};export{t as G,c as a,o as c,i as g};
