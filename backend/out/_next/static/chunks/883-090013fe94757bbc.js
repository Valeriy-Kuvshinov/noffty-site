"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{6463:function(e,t,a){var n=a(1169);a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}}),a.o(n,"useSearchParams")&&a.d(t,{useSearchParams:function(){return n.useSearchParams}})},6146:function(e,t,a){a.d(t,{E:function(){return m}});var n=a(7437),r=a(2265),o=a(1641),c=a(9714),l=a(8804),i=a(4769),s=a(4148);function u(e){var t;let{options:a,value:o,onChange:c,label:l,id:u}=e,[m,d]=(0,r.useState)(!1),f=(0,r.useRef)(null);return(0,i.O)(f,function(){d(!1)}),(0,n.jsxs)("article",{className:"select-option flex column",children:[(0,n.jsx)("label",{htmlFor:u,children:l}),(0,n.jsxs)("div",{ref:f,className:"custom-select-container w-100",id:u,children:[(0,n.jsxs)("div",{className:"selected-value flex row align-center justify-between fast-trans ".concat(m?"open":""),onClick:()=>d(!m),children:[null===(t=a.find(e=>e.value===o))||void 0===t?void 0:t.label,(0,n.jsx)(s.M,{iconName:"arrowRight"})]}),m&&(0,n.jsx)("div",{className:"options-container",children:a.map(e=>(0,n.jsxs)("div",{className:"option flex row align-center justify-between fast-trans",onClick:()=>{c(e.value),d(!1)},children:[e.label,(0,n.jsx)(s.M,{iconName:e.iconName})]},e.value))})]})]})}function m(e){let{defaultValues:t,updateSearchParams:a}=e,i=o.R.getGenres(),m=o.R.getPlatforms(),d=o.R.getGameJams(),[f,h]=(0,r.useState)(t),g=(0,l.N)(f,1e3);return(0,r.useEffect)(()=>{c.N.areEqual(g,t)||a(g)},[g,t]),(0,n.jsxs)("article",{className:"filter-area flex column layout-row w-100",children:[(0,n.jsx)("input",{type:"text",name:"title",placeholder:"Search by name...",maxLength:30,value:f.title||"",onChange:function(e){let{name:t,value:a}=e.target;h(e=>({...e,[t]:a}))}}),(0,n.jsx)(s.M,{iconName:"search"}),(0,n.jsxs)("div",{className:"select-options grid",children:[(0,n.jsx)(u,{options:m,value:f.platform||"",onChange:e=>h(t=>({...t,platform:e})),label:"Select Platform",id:"platform-select"}),(0,n.jsx)(u,{options:i,value:f.genre||"",onChange:e=>h(t=>({...t,genre:e})),label:"Select Genre",id:"genre-select"}),(0,n.jsx)(u,{options:d,value:f.isGameJam||"",onChange:e=>h(t=>({...t,isGameJam:e})),label:"Made for Jam?",id:"isGameJam-select"})]})]})}},2585:function(e,t,a){a.d(t,{b:function(){return u}});var n=a(7437),r=a(7138),o=a(6463),c=a(6370),l=a(4148);function i(e){let{game:t,isAdminPage:a}=e,i=(0,o.useRouter)();return(0,n.jsxs)(r.default,{"aria-label":"noffty-game",href:"/games/details?name=".concat(encodeURIComponent(t.title)),className:"flex column align-center w-100 text-capitalize",children:[(0,n.jsxs)("div",{className:"preview-body w-100 h-fit",children:[(0,n.jsx)(c.ImageContainer,{src:t.screenshots[0],alt:t.title}),"yes"===t.isGameJam&&(0,n.jsx)("span",{className:"gmtk fast-trans",title:"Game{Jam} Submission","aria-label":"GameJam Submission",children:"JAM"}),(0,n.jsx)("span",{className:"icon fast-trans","aria-label":"Game meant playing on ".concat(t.platform),children:t.platform.toUpperCase()}),a&&(0,n.jsx)("button",{className:"flex full-center",onClick:function(e){e.preventDefault(),i.push("/admin/edit?name=".concat(encodeURIComponent(t.title)))},children:(0,n.jsx)(l.M,{iconName:"edit"})})]}),(0,n.jsxs)("div",{className:"preview-info grid w-100 h-fit",children:[(0,n.jsx)(c.ImageContainer,{src:t.icon,alt:t.title}),(0,n.jsx)("h3",{title:t.title,children:t.title}),(0,n.jsx)("p",{title:t.subtitle,children:t.subtitle})]})]},t.title)}var s=a(1811);function u(e){let{games:t,isAdminPage:a}=e;return(0,n.jsx)("div",{className:"game-list grid w-100",children:0===t.length?(0,n.jsx)(s.m,{message:"No games found..."}):t.map(e=>(0,n.jsx)(i,{game:e,isAdminPage:a},e.title))})}},1811:function(e,t,a){a.d(t,{m:function(){return o}});var n=a(7437),r=a(6370);function o(e){let{message:t}=e;return(0,n.jsxs)("article",{className:"error-container flex column",children:[(0,n.jsxs)("div",{className:"error-area flex row align-center",children:[(0,n.jsx)(r.ImageContainer,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1716704407/hgqpxtysqdjvav72w8dl.avif",alt:"Error.."}),(0,n.jsx)("span",{children:t})]}),(0,n.jsx)("a",{href:"/","aria-label":"Go to home page",title:"Return to home page?",children:"Return to home?"})]})}},6370:function(e,t,a){a.d(t,{ImageContainer:function(){return l}});var n=a(7437),r=a(6648),o=a(2262),c=a(2265);function l(e){let{src:t,alt:a,style:l,className:i,width:s,height:u,onClick:m}=e,[d,f]=(0,c.useState)({width:s||100,height:u||100}),[h,g]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{if(t&&(!s||!u)){let e=new window.Image;e.onload=()=>{f({width:e.width,height:e.height})},e.src=t}},[t,s,u]),t)?(0,n.jsx)("div",{className:"image-container flex w-100 ".concat(i),style:l,onClick:m,children:(0,n.jsx)(r.default,{loader:o.default,src:t,alt:a,width:d.width,height:d.height,className:"w-h-100 ".concat(h?"opacity-100":"opacity-0"),onLoad:()=>g(!0),placeholder:"blur",blurDataURL:(0,o.default)({src:t,width:25,quality:1})})}):null}},2817:function(e,t,a){a.d(t,{a:function(){return c}});var n=a(7437),r=a(2265),o=a(6370);function c(){let e=["Fetching data...","Almost there...","One moment...","Loading content...","Hang tight...","Standby, gamer...","Boiling the point...","Cleansing corruption...","Combining waves...","Loading^2...","Subscribe to T1mure!","T2mure is also cool...","Where is T3mure?"],[t,a]=(0,r.useState)("");return(0,r.useEffect)(()=>{a(function(){let t=Math.floor(Math.random()*e.length);return e[t]}())},[]),(0,n.jsxs)("article",{className:"loader-container flex column align-center",children:[(0,n.jsx)("span",{className:"text-center",children:t}),(0,n.jsx)(o.ImageContainer,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1715092957/rofgvwuxaocbanu3fpzl.gif",alt:"Loading..."}),(0,n.jsx)(o.ImageContainer,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1716704406/ogkkverm9r1wxupucbxp.avif",alt:"Loading..."})]})}},4769:function(e,t,a){a.d(t,{O:function(){return r}});var n=a(2265);function r(e,t){(0,n.useEffect)(()=>{function a(a){e.current&&!e.current.contains(a.target)&&t()}return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e,t])}},8804:function(e,t,a){a.d(t,{N:function(){return r}});var n=a(2265);function r(e,t){let[a,r]=(0,n.useState)(e);return(0,n.useEffect)(()=>{let a=setTimeout(()=>{r(e)},t);return()=>clearTimeout(a)},[e,t]),a}},3671:function(e,t,a){a.d(t,{H:function(){return o}});var n=a(2265),r=a(6463);function o(){let e=(0,r.useRouter)(),t=(0,r.useSearchParams)(),a=(0,n.useMemo)(()=>new URLSearchParams(t.toString()),[t]);return{getDefaultFilterValues:(0,n.useCallback)(function(){return{title:a.get("title")||"",platform:a.get("platform")||"",genre:a.get("genre")||"",isGameJam:a.get("isGameJam")||""}},[a]),updateSearchParams:(0,n.useCallback)(function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=new URLSearchParams;Object.entries(t).forEach(e=>{let[t,a]=e;a?n.set(t,a):n.delete(t)});let r=a?"".concat(a,"?").concat(n.toString()):"?".concat(n.toString());e.push(r)},[e]),searchParams:a}}},2262:function(e,t,a){function n(e){let{src:t,width:a,quality:n}=e,[r,o]=t.split("/upload/");return"".concat(r,"/upload/").concat(["f_auto","c_limit","w_".concat(a),"q_".concat(n||"auto")].join(","),"/").concat(o)}a.r(t),a.d(t,{default:function(){return n}})},1641:function(e,t,a){a.d(t,{R:function(){return o}});var n=a(1635);let r="game/",o={query:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new URLSearchParams(e).toString();return n.R.get("".concat(r,"?").concat(t))},getById:async e=>n.R.get("".concat(r,"by-id/").concat(e)),getByName:async e=>n.R.get("".concat(r,"by-name/").concat(e)),checkNameAvailable:async e=>n.R.get("".concat(r,"check-name/").concat(e)),save:async e=>e._id?n.R.put("".concat(r,"update/").concat(e._id),e):n.R.post(r+"add/",e),remove:async e=>n.R.remove("".concat(r,"delete/").concat(e)),getGenres:()=>[{label:"Any",value:"",iconName:"globe"},{label:"Action",value:"action",iconName:"action"},{label:"Adventure",value:"adventure",iconName:"adventure"},{label:"Other",value:"other",iconName:"questionMark"},{label:"Platformer",value:"platformer",iconName:"platformer"},{label:"Puzzle",value:"puzzle",iconName:"puzzle"},{label:"Roguelike",value:"roguelike",iconName:"dice"}],getPlatforms:()=>[{label:"Any",value:"",iconName:"globe"},{label:"Android",value:"android",iconName:"android"},{label:"Browser",value:"html5",iconName:"html5"},{label:"Steam",value:"steam",iconName:"steam"}],getGameJams:()=>[{label:"Any",value:"",iconName:"globe"},{label:"Yes",value:"yes",iconName:"confirm"},{label:"No",value:"no",iconName:"cancel"}]}},1635:function(e,t,a){a.d(t,{R:function(){return n}});let n={get(e,t){let a=t?"?".concat(Object.entries(t).map(e=>{let[t,a]=e;return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(a)))}).join("&")):"";return r("GET","".concat(e).concat(a))},post:(e,t)=>r("POST",e,t),put:(e,t)=>r("PUT",e,t),remove:(e,t)=>t?r("DELETE",e,t):r("DELETE",e)};async function r(e,t,a){let n="".concat("https://noffty.com/api/").concat(t),r={method:e,headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"}};"GET"!==e&&a&&(r.body=JSON.stringify(a));try{let e=await fetch(n,r),t=await e.json();if(!e.ok)throw Error(t.message||"An unknown error occurred");return t}catch(e){throw console.error("HTTP Service Error: ",e),e}}},9714:function(e,t,a){a.d(t,{N:function(){return n}});let n={getBrowserName:()=>{let e=navigator.userAgent.toLowerCase();switch(!0){case e.includes("chrome")&&!e.includes("edg"):return"Chrome";case e.includes("firefox"):return"Firefox";case e.includes("safari")&&!e.includes("chrome"):return"Safari";case e.includes("edg"):return"Edge";default:return"Other"}},getAllowAttributes:()=>{switch(n.getBrowserName()){case"Chrome":case"Edge":return"fullscreen; midi; gyroscope; accelerometer; cross-origin-isolated;";case"Firefox":return"fullscreen; midi; accelerometer;";default:return"fullscreen; midi;"}},capitalizeString:e=>e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" "),upperCaseString:e=>e.toUpperCase(),formatDate:e=>{let t=new Date(1e3*e),a=t.getDate().toString().padStart(2,"0"),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],r=t.getFullYear();return"".concat(a," ").concat(n," ").concat(r)},getYouTubeEmbedUrl:e=>{let t=new URLSearchParams(new URL(e).search).get("v");return"https://www.youtube.com/embed/".concat(t)},formatText:e=>e.replace(/\n/g,"<br>"),areEqual:(e,t)=>{let a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(let n of a)if(e[n]!==t[n])return!1;return!0},getSocialLinks:()=>[{iconName:"discord",link:"https://discord.gg/SeNsSRt",ariaLabel:"Go to Noffty's Discord channel"},{iconName:"itch",link:"https://t1mure.itch.io/",ariaLabel:"Go to T1mure's Itch.io account"},{iconName:"googlePlay",link:"https://play.google.com/store/apps/dev?id=8915839538887603911&",ariaLabel:"Go to Noffty's Google Play account"},{iconName:"youtube",link:"https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA",ariaLabel:"Go to Noffty's YouTube channel"}]}}}]);