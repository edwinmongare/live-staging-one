(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[389,931],{3094:function(e,t,r){Promise.resolve().then(r.bind(r,8527))},8527:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return page}});var a=r(7437),n=r(2265),s=r(6743),l=r(345);let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.f,{ref:t,className:(0,l.cn)("text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",r),...n})});o.displayName=s.f.displayName;var i=r(230),d=r(609),c=r(4034),u=r(3568);function _templateObject(){let e=(0,i._)(["\n        radial-gradient(\n          "," circle at ","px ","px,\n          var(--blue-500),\n          transparent 80%\n        )\n      "]);return _templateObject=function(){return e},e}let m=n.forwardRef((e,t)=>{let{className:r,type:s,...o}=e,[i,m]=n.useState(!1),p=(0,d.c)(0),x=(0,d.c)(0);function handleMouseMove(e){let{currentTarget:t,clientX:r,clientY:a}=e,{left:n,top:s}=t.getBoundingClientRect();p.set(r-n),x.set(a-s)}return(0,a.jsx)(c.E.div,{style:{background:(0,u.Y)(_templateObject(),i?"100px":"0px",p,x)},onMouseMove:handleMouseMove,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:(0,a.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \n          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\n           disabled:cursor-not-allowed disabled:opacity-50\n           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n           group-hover/input:shadow-none transition duration-400\n           ",r),ref:t,...o})})});m.displayName="Input";var p=r(8110),x=r(1865),f=r(4578);let h=f.z.object({email:f.z.string().email(),password:f.z.string().min(8,{message:"Password must be at least 8 characters long."})});var b=r(2783),g=r(1424),v=r(4033),w=r(6264);let j=n.memo(e=>{let{className:t,...r}=e,n=Array(150).fill(1),s=Array(100).fill(1),o=["--sky-300","--pink-300","--green-300","--yellow-300","--red-300","--purple-300","--blue-300","--indigo-300","--violet-300"],getRandomColor=()=>o[Math.floor(Math.random()*o.length)];return(0,a.jsx)("div",{style:{transform:"translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)"},className:(0,l.cn)("absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",t),...r,children:n.map((e,t)=>(0,a.jsx)(c.E.div,{className:"w-16 h-8  border-l  border-slate-700 relative",children:s.map((e,r)=>(0,a.jsx)(c.E.div,{whileHover:{backgroundColor:"var(".concat(getRandomColor(),")"),transition:{duration:0}},animate:{transition:{duration:2}},className:"w-16 h-8  border-r border-t border-slate-700 relative",children:r%2==0&&t%2==0?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})}):null},"col"+r))},"row"+t))})});function AwesomeBg(){return(0,a.jsxs)("div",{className:"h-screen w-full absolute top-0 left-0 z-0    overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg",children:[(0,a.jsx)("div",{className:"absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"}),(0,a.jsx)(j,{}),(0,a.jsx)("h1",{className:(0,l.cn)("md:text-4xl text-xl text-white relative z-20"),children:"Tailwind is Awesome"}),(0,a.jsx)("p",{className:"text-center mt-2 text-neutral-300 relative z-20",children:"Framer motion is the best animation library ngl"})]})}let BottomGradient=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"}),(0,a.jsx)("span",{className:"group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"})]}),LabelInputContainer=e=>{let{children:t,className:r}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-2 w-full",r),children:t})})};var page=()=>{let e=(0,v.useSearchParams)(),t=(0,v.useRouter)(),r=e.get("origin"),{register:n,handleSubmit:s,formState:{errors:i}}=(0,x.cI)({resolver:(0,p.F)(h)}),{mutate:d,isLoading:c}=b.S.auth.signIn.useMutation({onSuccess:async()=>{if(g.toast.success("Signed in successfully"),t.refresh(),r){t.push("/".concat(r));return}t.push("/Home")},onError:e=>{var t;(null===(t=e.data)||void 0===t?void 0:t.code)==="UNAUTHORIZED"&&g.toast.error("Invalid email or password.")}});return(0,a.jsxs)("div",{className:"min-h-screen z-40 flex items-center justify-center bg-cover bg-center relative",children:[(0,a.jsx)(AwesomeBg,{}),(0,a.jsxs)("div",{className:"max-w-screen-sm w-full mx-auto rounded-none md:rounded-sm p-4 md:p-8 z-40  shadow-input bg-white dark:bg-black",children:[(0,a.jsx)("h2",{className:"font-bold text-xl text-neutral-800 dark:text-neutral-200",children:"Welcome to SSA Digital Factory Screens"}),(0,a.jsx)("p",{className:"text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300",children:"Login to use the application"}),(0,a.jsxs)("form",{className:"my-8",onSubmit:s(e=>{let{email:t,password:r}=e;d({email:t,password:r})}),children:[(0,a.jsxs)(LabelInputContainer,{className:"mb-4",children:[(0,a.jsx)(o,{htmlFor:"email",children:"Email Address"}),(0,a.jsx)(m,{...n("email"),className:(0,l.cn)({"focus-visible:ring-red-500":i.email}),id:"email",placeholder:"enter your email address",type:"email"}),(null==i?void 0:i.email)&&(0,a.jsx)("p",{className:"text-sm text-red-500",children:i.email.message})]}),(0,a.jsxs)(LabelInputContainer,{className:"mb-4",children:[(0,a.jsx)(o,{htmlFor:"password",children:"Password"}),(0,a.jsx)(m,{...n("password"),className:(0,l.cn)({"focus-visible:ring-red-500":i.password}),placeholder:"••••••••",type:"password"}),(null==i?void 0:i.password)&&(0,a.jsx)("p",{className:"text-sm text-red-500",children:i.password.message})]}),(0,a.jsxs)("button",{disabled:c,className:" relative group/btn bg-gradient-to-br from-sky-400 dark:from-sky-500-900 dark:to-sky-950 to-sky-950 dark:bg-sky-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center // Center content horizontally and vertically ${isLoading ? 'opacity-50 cursor-not-allowed' : ''            ",type:"submit",children:[c&&(0,a.jsx)(w.Z,{className:"h-5 w-5 mr-3 animate-spin text-white "}),"Sign In →",(0,a.jsx)(BottomGradient,{})]}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"})]})]})]})}},345:function(e,t,r){"use strict";r.d(t,{cn:function(){return cn}});var a=r(7042),n=r(4769);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},2783:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var a=r(4244);let n=(0,a.ec)({})}},function(e){e.O(0,[409,522,34,244,135,971,472,744],function(){return e(e.s=3094)}),_N_E=e.O()}]);