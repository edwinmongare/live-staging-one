"use strict";(()=>{var e={};e.id=306,e.ids=[306],e.modules={5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},409:e=>{e.exports=require("payload")},2081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},9538:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>x,originalPathname:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d});var n=r(7096),i=r(6132),a=r(7284),s=r.n(a),o=r(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["Line",{children:["Quality",{children:["eng",{children:["[eng_line_name]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5941)),"C:\\Users\\85117049\\Downloads\\live-safety-trigger-main\\live-safety-trigger-main\\src\\app\\Line\\Quality\\eng\\[eng_line_name]\\page.tsx"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9451))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6466)),"C:\\Users\\85117049\\Downloads\\live-safety-trigger-main\\live-safety-trigger-main\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9451))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\85117049\\Downloads\\live-safety-trigger-main\\live-safety-trigger-main\\src\\app\\Line\\Quality\\eng\\[eng_line_name]\\page.tsx"],c="/Line/Quality/eng/[eng_line_name]/page",x={require:r,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/Line/Quality/eng/[eng_line_name]/page",pathname:"/Line/Quality/eng/[eng_line_name]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5941:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(4656),i=r(623),a=r(1412);let Page=async({params:e})=>{var t;let r,s;let{eng_line_name:o}=e,l=decodeURIComponent(o),d=await (0,i.T)(),{docs:p}=await d.find({collection:"Engineering_Quality_Inspection",limit:1,where:{"Line.eng_lines":{equals:l}}}),c=p[0];if(!c)return(0,a.notFound)();switch(c?.Trigger){case"low":s="bg-gradient-to-b from-green-500 to-green-900";break;case"medium":s="bg-gradient-to-b from-yellow-500 to-yellow-700";break;default:s="bg-gradient-to-b from-red-500 to-red-700"}return r=(0,n.jsxs)("div",{className:`${s} min-h-screen flex flex-col`,children:[n.jsx("div",{className:"p-8",children:(0,n.jsxs)("h1",{className:"text-6xl font-extrabold text-white text-pretty",children:["Line ",c.Line?.[0].eng_lines]})}),n.jsx("div",{className:"flex flex-col items-center justify-center flex-1",children:(0,n.jsxs)("h1",{className:"text-6xl font-extrabold text-white text-pretty",children:[(t=c?.Trigger).charAt(0).toUpperCase()+t.slice(1)," Risk!"]})}),n.jsx("div",{className:"p-8",children:(0,n.jsxs)("div",{className:"flex flex-col items-start justify-end flex-1",children:[n.jsx("h1",{className:"text-xl font-medium text-white text-pretty",children:(e=>{if(!e)return"";let t=new Date(e);return t.toLocaleString("en-GB",{day:"2-digit",month:"long",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})})(c.updatedAt)}),(0,n.jsxs)("h1",{className:"text-3xl font-medium text-white text-wrap mt-2",children:["By: ",c.user?.[0]?.email||"Unknown"]})]})})]}),n.jsx(n.Fragment,{children:r})},s=Page}};var t=require("../../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[821,323,64,262,751],()=>__webpack_exec__(9538));module.exports=r})();