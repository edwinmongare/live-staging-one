(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{2221:function(e,t,r){Promise.resolve().then(r.t.bind(r,413,23)),Promise.resolve().then(r.t.bind(r,8326,23)),Promise.resolve().then(r.bind(r,8058)),Promise.resolve().then(r.bind(r,1746)),Promise.resolve().then(r.bind(r,5443)),Promise.resolve().then(r.bind(r,8981)),Promise.resolve().then(r.bind(r,6119)),Promise.resolve().then(r.bind(r,9885))},8058:function(e,t,r){"use strict";r.r(t),r.d(t,{EngViewQuality:function(){return EngViewQuality}});var n=r(7437),a=r(2265),i=r(403),l=r(1396),o=r.n(l);let c=["Compressor","MHE","Water Treatment Plant","Boiler Room","Generator House"],Skeleton=e=>{let{color:t,trigger:r}=e;return(0,n.jsx)("div",{className:"flex mt-2 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ".concat(t),children:(0,n.jsx)("div",{className:"grid place-items-center text-white",children:r})})},formatCreatedAt=e=>{if(!e)return"No update";{let t=new Date(e);return t.toLocaleString("en-GB",{day:"2-digit",month:"long",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}};function EngViewQuality(){let[e,t]=(0,a.useState)([]);(0,a.useEffect)(()=>{let fetchData=()=>{fetch("".concat("http://10.131.135.30:3000","/api/Engineering_Quality_Inspection/?limit=10000")).then(e=>e.json()).then(e=>{let r=extractUniqueLines(e.docs);t(r)}).catch(e=>{console.error("Error fetching data:",e)})};fetchData();let e=setInterval(fetchData,1e4);return()=>clearInterval(e)},[]);let extractUniqueLines=e=>{let t=new Map;return e.forEach(e=>{e.Line.forEach(r=>{let n=t.get(r.id);(!n||isNewer(e,n))&&t.set(r.id,e)})}),Array.from(t.values())},isNewer=(e,t)=>new Date(e.updatedAt)>new Date(t.updatedAt),renderSkeleton=e=>{let t="";switch(e){case"high":t="from-red-700 to-red-900";break;case"medium":t="bg-gradient-to-b from-yellow-400 to-yellow-400";break;case"low":t="from-green-700 to-green-900";break;default:t="from-gray-700 to-gray-900"}return(0,n.jsx)(Skeleton,{color:"".concat(t),trigger:e})};return(0,n.jsx)(i.S,{className:"max-w-full mx-auto mt-5",children:c.map(t=>{let r=e.find(e=>e.Line.some(e=>e.eng_lines===t));if(!r)return(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated: ".concat(formatCreatedAt()),header:(0,n.jsx)(Skeleton,{color:"from-gray-700 to-gray-900",trigger:"No data recorded"}),className:"shadow-xl"},t);{var a,l;let e=r.Line.find(e=>e.eng_lines===t);return(0,n.jsx)(o(),{href:"/Line/Quality/eng/".concat(t),className:"h-full block",children:(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated ".concat(formatCreatedAt(r.createdAt)),header:renderSkeleton(r.Trigger),className:"shadow-xl"},null!==(a=null==e?void 0:e.id)&&void 0!==a?a:t)},null!==(l=null==e?void 0:e.id)&&void 0!==l?l:t)}})})}},1746:function(e,t,r){"use strict";r.r(t),r.d(t,{FmdViewQuality:function(){return FmdViewQuality}});var n=r(7437),a=r(2265),i=r(403),l=r(1396),o=r.n(l);let c=["KDF 1","KDF 2","KDF 3","KDF 4","KDF 5","KDF 6"],Skeleton=e=>{let{color:t,trigger:r}=e;return(0,n.jsx)("div",{className:"flex mt-2 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ".concat(t),children:(0,n.jsx)("div",{className:"grid place-items-center text-white",children:r})})},formatCreatedAt=e=>{if(!e)return"No update";{let t=new Date(e);return t.toLocaleString("en-GB",{day:"2-digit",month:"long",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}};function FmdViewQuality(){let[e,t]=(0,a.useState)([]);(0,a.useEffect)(()=>{let fetchData=()=>{fetch("".concat("http://10.131.135.30:3000","/api/FMD_Quality_Inspection/?limit=10000")).then(e=>e.json()).then(e=>{let r=extractUniqueLines(e.docs);t(r)}).catch(e=>{console.error("Error fetching data:",e)})};fetchData();let e=setInterval(fetchData,1e4);return()=>clearInterval(e)},[]);let extractUniqueLines=e=>{let t=new Map;return e.forEach(e=>{e.Line.forEach(r=>{let n=t.get(r.id);(!n||isNewer(e,n))&&t.set(r.id,e)})}),Array.from(t.values())},isNewer=(e,t)=>new Date(e.updatedAt)>new Date(t.updatedAt),renderSkeleton=e=>{let t="";switch(e){case"high":t="from-red-700 to-red-900";break;case"medium":t="bg-gradient-to-b from-yellow-400 to-yellow-400";break;case"low":t="from-green-700 to-green-900";break;default:t="from-gray-700 to-gray-900"}return(0,n.jsx)(Skeleton,{color:"".concat(t),trigger:e})};return(0,n.jsx)(i.S,{className:"max-w-full mx-auto mt-5",children:c.map(t=>{let r=e.find(e=>e.Line.some(e=>e.FMD_Lines===t));if(!r)return(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated: ".concat(formatCreatedAt()),header:(0,n.jsx)(Skeleton,{color:"from-gray-700 to-gray-900",trigger:"No data recorded"}),className:"shadow-xl"},t);{var a,l;let e=r.Line.find(e=>e.FMD_Lines===t);return(0,n.jsx)(o(),{href:"/Line/Quality/fmd/".concat(t),className:"h-full block",children:(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated ".concat(formatCreatedAt(r.createdAt)),header:renderSkeleton(r.Trigger),className:"shadow-xl"},null!==(a=null==e?void 0:e.id)&&void 0!==a?a:t)},null!==(l=null==e?void 0:e.id)&&void 0!==l?l:t)}})})}},5443:function(e,t,r){"use strict";r.r(t),r.d(t,{PmdViewQuality:function(){return PmdViewQuality}});var n=r(7437),a=r(2265),i=r(403),l=r(1396),o=r.n(l);let c=["Fibex making","Lamina conditioning","Stem conditioning","Ripping","CTT","Stem cutting","Lamina cutting"],Skeleton=e=>{let{color:t,trigger:r}=e;return(0,n.jsx)("div",{className:"flex mt-2 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ".concat(t),children:(0,n.jsx)("div",{className:"grid place-items-center text-white",children:r})})},formatCreatedAt=e=>{if(!e)return"No update";{let t=new Date(e);return t.toLocaleString("en-GB",{day:"2-digit",month:"long",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}};function PmdViewQuality(){let[e,t]=(0,a.useState)([]);(0,a.useEffect)(()=>{let fetchData=()=>{fetch("".concat("http://10.131.135.30:3000","/api/PMD_Quality_Inspection/?limit=10000")).then(e=>e.json()).then(e=>{let r=extractUniqueLines(e.docs);t(r)}).catch(e=>{console.error("Error fetching data:",e)})};fetchData();let e=setInterval(fetchData,1e4);return()=>clearInterval(e)},[]);let extractUniqueLines=e=>{let t=new Map;return e.forEach(e=>{e.Line.forEach(r=>{let n=t.get(r.id);(!n||isNewer(e,n))&&t.set(r.id,e)})}),Array.from(t.values())},isNewer=(e,t)=>new Date(e.updatedAt)>new Date(t.updatedAt),renderSkeleton=e=>{let t="";switch(e){case"high":t="from-red-700 to-red-900";break;case"medium":t="bg-gradient-to-b from-yellow-400 to-yellow-400";break;case"low":t="from-green-700 to-green-900";break;default:t="from-gray-700 to-gray-900"}return(0,n.jsx)(Skeleton,{color:"".concat(t),trigger:e})};return(0,n.jsx)(i.S,{className:"max-w-full mx-auto mt-5",children:c.map(t=>{let r=e.find(e=>e.Line.some(e=>e.pmd_lines===t));if(!r)return(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated: ".concat(formatCreatedAt()),header:(0,n.jsx)(Skeleton,{color:"from-gray-700 to-gray-900",trigger:"No data recorded"}),className:"shadow-xl"},t);{var a,l;let e=r.Line.find(e=>e.pmd_lines===t);return(0,n.jsx)(o(),{href:"/Line/Quality/pmd/".concat(t),className:"h-full block",children:(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated ".concat(formatCreatedAt(r.createdAt)),header:renderSkeleton(r.Trigger),className:"shadow-xl"},null!==(a=null==e?void 0:e.id)&&void 0!==a?a:t)},null!==(l=null==e?void 0:e.id)&&void 0!==l?l:t)}})})}},8981:function(e,t,r){"use strict";r.r(t),r.d(t,{SmdViewQuality:function(){return SmdViewQuality}});var n=r(7437),a=r(2265),i=r(403),l=r(1396),o=r.n(l);let c=["Line One","Line Two","Line Three","Line Four","Line Five","Line Six","Line Seven","Line Eight","Line Nine","Line Ten","Line Eleven","Line Twelve","Line Thirteen","Line Fourteen","Line Fifteen","Line Sixteen"],Skeleton=e=>{let{color:t,trigger:r}=e;return(0,n.jsx)("div",{className:"flex mt-2 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ".concat(t),children:(0,n.jsx)("div",{className:"grid place-items-center text-white",children:r})})},formatCreatedAt=e=>{if(!e)return"No update";{let t=new Date(e);return t.toLocaleString("en-GB",{day:"2-digit",month:"long",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}};function SmdViewQuality(){let[e,t]=(0,a.useState)([]);(0,a.useEffect)(()=>{let fetchData=()=>{fetch("".concat("http://10.131.135.30:3000","/api/SMD_Quality_Inspection/?limit=10000")).then(e=>e.json()).then(e=>{let r=extractUniqueLines(e.docs);t(r)}).catch(e=>{console.error("Error fetching data:",e)})};fetchData();let e=setInterval(fetchData,1e4);return()=>clearInterval(e)},[]);let extractUniqueLines=e=>{let t=new Map;return e.forEach(e=>{e.Line.forEach(r=>{let n=t.get(r.id);(!n||isNewer(e,n))&&t.set(r.id,e)})}),Array.from(t.values())},isNewer=(e,t)=>new Date(e.updatedAt)>new Date(t.updatedAt),renderSkeleton=e=>{let t="";switch(e){case"high":t="from-red-700 to-red-900";break;case"medium":t="bg-gradient-to-b from-yellow-400 to-yellow-400";break;case"low":t="from-green-700 to-green-900";break;default:t="from-gray-700 to-gray-900"}return(0,n.jsx)(Skeleton,{color:"".concat(t),trigger:e})};return(0,n.jsx)(i.S,{className:"max-w-full mx-auto mt-5",children:c.map(t=>{let r=e.find(e=>e.Line.some(e=>e.smd_line_name===t));if(!r)return(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated: ".concat(formatCreatedAt()),header:(0,n.jsx)(Skeleton,{color:"from-gray-700 to-gray-900",trigger:"No data recorded"}),className:"shadow-xl"},t);{var a,l;let e=r.Line.find(e=>e.smd_line_name===t);return(0,n.jsx)(o(),{href:"/Line/Quality/smd/".concat(t),className:"h-full block",children:(0,n.jsx)(i.x,{title:"".concat(t),description:"Last Updated ".concat(formatCreatedAt(r.createdAt)),header:renderSkeleton(r.Trigger),className:"shadow-xl"},null!==(a=null==e?void 0:e.id)&&void 0!==a?a:t)},null!==(l=null==e?void 0:e.id)&&void 0!==l?l:t)}})})}}},function(e){e.O(0,[409,522,482,837,971,472,744],function(){return e(e.s=2221)}),_N_E=e.O()}]);