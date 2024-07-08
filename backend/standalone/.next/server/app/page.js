(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},932:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>m,routeModule:()=>p,tree:()=>c}),s(8824),s(8520),s(4610);var t=s(3191),r=s(8716),o=s(7922),n=s.n(o),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(a,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8824)),"C:\\Users\\valer\\OneDrive\\Documents\\HTML Work\\Next Timure Site\\frontend\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8520)),"C:\\Users\\valer\\OneDrive\\Documents\\HTML Work\\Next Timure Site\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,4610)),"C:\\Users\\valer\\OneDrive\\Documents\\HTML Work\\Next Timure Site\\frontend\\src\\app\\not-found.tsx"]}],m=["C:\\Users\\valer\\OneDrive\\Documents\\HTML Work\\Next Timure Site\\frontend\\src\\app\\page.tsx"],d="/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9913:(e,a,s)=>{Promise.resolve().then(s.bind(s,3061)),Promise.resolve().then(s.bind(s,349))},3061:(e,a,s)=>{"use strict";s.d(a,{GameCarousel:()=>c});var t=s(326),r=s(7577),o=s(434),n=s(9654),i=s(6919),l=s(349);function c({games:e}){let[a,s]=(0,r.useState)(0),o=[e[(a-1+e.length)%e.length],e[a],e[(a+1)%e.length]];return(0,t.jsxs)("div",{className:"games-carousel flex w-h-100 fast-trans",children:[t.jsx("button",{onClick:function(){s(a=>(a-1+e.length)%e.length)},"aria-label":"Previous game",children:t.jsx(i.M,{iconName:"arrowLeft"})}),t.jsx("div",{className:"carousel-container flex w-h-100 fast-trans",children:o.map((e,a)=>t.jsx(m,{game:e,index:a-1},e.name))}),t.jsx("button",{onClick:function(){s(a=>(a+1)%e.length)},"aria-label":"Next game",children:t.jsx(i.M,{iconName:"arrowRight"})})]})}function m({game:e,index:a}){let{value:s,handleMouseEnter:r,handleMouseLeave:i}=(0,n.J)({defaultValue:e.screenshots[0],hoverValue:e.screenshots[1],condition:e.screenshots.length<2});return(0,t.jsxs)(o.default,{href:`/games/${encodeURIComponent(e.name)}`,className:"flex column align-center w-h-100 slow-trans",onMouseEnter:r,onMouseLeave:i,style:{transform:`translateX(${100*a}%)`},children:[(0,t.jsxs)("div",{className:"preview-body flex w-h-100",children:["yes"===e.isGameJam&&t.jsx("span",{className:"gmtk fast-trans",title:"Game{Jam} Submission","aria-label":"GameJam Submission",children:"JAM"}),t.jsx("span",{className:"icon fast-trans","aria-label":`Game meant playing on ${e.platform}`,children:e.platform.toUpperCase()}),t.jsx(l.ImageContainer,{src:s,alt:`${e.name} screenshot`})]}),(0,t.jsxs)("div",{className:"preview-info grid w-100 h-fit fast-trans",children:[t.jsx(l.ImageContainer,{src:e.icon,alt:`${e.name} icon`,className:"game-icon"}),t.jsx("h3",{children:e.name}),t.jsx("p",{children:e.note})]})]})}},9654:(e,a,s)=>{"use strict";s.d(a,{J:()=>r});var t=s(7577);function r(e){let{defaultValue:a,hoverValue:s,condition:r}=e,[o,n]=(0,t.useState)(a);return{value:o,handleMouseEnter:function(){r||n(s)},handleMouseLeave:function(){n(a)}}}},8824:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>h});var t=s(9510);async function r(e,a,s){let t=`/api/${a}`,r={method:e,headers:{"Content-Type":"application/json"}};"GET"!==e&&s&&(r.body=JSON.stringify(s));try{let e=await fetch(t,r),a=await e.json();if(!e.ok)throw Error(a.message||"An unknown error occurred");return a}catch(e){throw console.error("HTTP Service Error: ",e),e}}let o={getSocialLinks:function(){return[{iconName:"discord",link:"https://discord.gg/SeNsSRt",ariaLabel:"Go to Noffty's Discord channel"},{iconName:"itch",link:"https://t1mure.itch.io/",ariaLabel:"Go to T1mure's Itch.io account"},{iconName:"googlePlay",link:"https://play.google.com/store/apps/dev?id=8915839538887603911&",ariaLabel:"Go to Noffty's Google Play account"},{iconName:"youtube",link:"https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA",ariaLabel:"Go to Noffty's YouTube channel"}]}};var n=s(6967);function i({iconName:e,link:a,ariaLabel:s}){return(0,t.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":s,children:[t.jsx(n.M,{iconName:"rhombus"}),t.jsx(n.M,{iconName:e})]})}var l=s(3042),c=s(8570);let m=(0,c.createProxy)(String.raw`C:\Users\valer\OneDrive\Documents\HTML Work\Next Timure Site\frontend\src\components\game\GameCarousel.tsx`),{__esModule:d,$$typeof:u}=m;m.default;let p=(0,c.createProxy)(String.raw`C:\Users\valer\OneDrive\Documents\HTML Work\Next Timure Site\frontend\src\components\game\GameCarousel.tsx#GameCarousel`);function h(){let e=o.getSocialLinks();return t.jsx("main",{className:"home-page full w-h-100",children:(0,t.jsxs)("section",{className:"page-contents flex column align-center w-h-100 layout-row",children:[t.jsx("div",{className:"video-container flex column",children:(0,t.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,children:[t.jsx("source",{src:"https://res.cloudinary.com/djzid7ags/video/upload/v1719778348/video/diggiwi6prn2pbrzhfnd.webm",type:"video/webm"}),"Your browser does not support the video tag."]})}),(0,t.jsxs)("article",{className:"intro-part flex column full-center w-100 layout-row",children:[t.jsx(l.m,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1719919509/wkqirx5zx97olc5cofzn.avif",alt:"noffty logo"}),t.jsx("h2",{className:"text-center",children:"Welcome to Noffty Production's Website"}),t.jsx("div",{className:"noffty-links flex row",children:e.map(e=>t.jsx(i,{iconName:e.iconName,link:e.link,ariaLabel:e.ariaLabel},e.iconName))})]}),(0,t.jsxs)("article",{className:"game-content grid full-center w-100 layout-row",children:[t.jsx(p,{games:[{name:"Absurd^2",note:"Simple 2D platformer",platform:"html5",icon:"https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/robpcra0w1qdahbso1z5.avif",screenshots:["https://res.cloudinary.com/djzid7ags/image/upload/v1716713779/games/screenshots/aow5n7wehb2bvijvylqz.avif","https://res.cloudinary.com/djzid7ags/image/upload/v1716713777/games/screenshots/n2hrvpdq49uheetuis2l.avif"],isGameJam:"no"},{name:"Boiling Point Classic",note:"Reverse Horde Roguelite",platform:"html5",icon:"https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/aimouzhzjqx6j2hltqmv.avif",screenshots:["https://res.cloudinary.com/djzid7ags/image/upload/v1716713149/games/screenshots/ffeaahkmjbga6lnjxirm.avif","https://res.cloudinary.com/djzid7ags/image/upload/v1716713148/games/screenshots/qm52wn5sa81f3jsdpjla.avif"],isGameJam:"yes"},{name:"Gun Stick Dash Jump",note:"Corrupted action platformer",platform:"html5",icon:"https://res.cloudinary.com/djzid7ags/image/upload/v1716708223/games/icons/frxyvh0gxraa19qli7jf.avif",screenshots:["https://res.cloudinary.com/djzid7ags/image/upload/v1716712789/games/screenshots/ckujz51caydgcd111qpb.avif","https://res.cloudinary.com/djzid7ags/image/upload/v1716712791/games/screenshots/tm680ywli1ee22kv0yai.avif"],isGameJam:"yes"},{name:"WavePunk",note:"Wave merging adventure",platform:"html5",icon:"https://res.cloudinary.com/djzid7ags/image/upload/v1716708222/games/icons/k2zizoiquqqbm2eqi34s.avif",screenshots:["https://res.cloudinary.com/djzid7ags/image/upload/v1716713475/games/screenshots/wx2agit1icmycnts55zl.avif","https://res.cloudinary.com/djzid7ags/image/upload/v1716713475/games/screenshots/weucxxqyxygxsuqpxjbr.avif"],isGameJam:"yes"}]}),(0,t.jsxs)("div",{className:"content-info flex column",children:[t.jsx("h2",{className:"text-center",children:"From Platformer to Roguelike, we work hard to deliver to you the best Indie Web and Android games possible"}),(0,t.jsxs)("a",{href:"/games",className:"flex row align-center w-fit",title:"Go to games page?","aria-label":"Go to games page",children:[t.jsx(n.M,{iconName:"controller"}),t.jsx("span",{children:"Find Out Here!"}),t.jsx(n.M,{iconName:"controller"})]})]})]})]})})}}};var a=require("../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),t=a.X(0,[814,195,967],()=>s(932));module.exports=t})();