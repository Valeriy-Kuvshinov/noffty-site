(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{5952:function(e,t,a){Promise.resolve().then(a.bind(a,7956))},6463:function(e,t,a){"use strict";var n=a(1169);a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}}),a.o(n,"useSearchParams")&&a.d(t,{useSearchParams:function(){return n.useSearchParams}})},7956:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(7437),r=a(2265),o=a(7138),l=a(6463),c=a(9714),i=a(1641),s=a(1551),u=a(1811),m=a(2817),d=a(4148),h=a(6370),g=a(6168);function f(){let e=(0,l.useSearchParams)(),[t,a]=(0,r.useState)(null),[o,c]=(0,r.useState)(!0),[s,d]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async function(){let t=e.get("name");if(!t){d("No game name provided."),c(!1);return}try{let e=await i.R.getByName(t);e?a(e):d("Sorry, no game found matching ".concat(t,"."))}catch(e){console.error("Failed to fetch game",e),d("An error occurred while fetching the game.")}finally{c(!1)}})()},[e]),(0,n.jsx)("main",{className:"game-page full w-h-100",children:(0,n.jsx)("section",{className:"page-contents flex column align-center w-h-100 layout-row",children:o?(0,n.jsx)(m.a,{}):s?(0,n.jsx)(u.m,{message:s}):t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{game:t}),(0,n.jsx)(x,{game:t})]}):null})})}function p(e){let{game:t}=e,[a,l]=(0,r.useState)(!1),[i,s]=(0,r.useState)(""),u=(0,r.useRef)(null);function m(){l(null!=document.fullscreenElement)}return(0,r.useEffect)(()=>(s(c.N.getAllowAttributes()),document.addEventListener("fullscreenchange",m),()=>document.removeEventListener("fullscreenchange",m)),[]),(0,n.jsxs)("div",{className:"game-frame flex column w-100 text-center",children:[(0,n.jsxs)("h2",{children:["You Are Now Playing ",t.title]}),"html5"===t.platform?t.gameLink?(0,n.jsxs)("div",{className:"iframe-container w-100",ref:u,children:[(0,n.jsx)("iframe",{className:"w-100 ".concat(a?"fullscreen":""),src:t.gameLink,title:t.title,allow:i,allowFullScreen:!0,"aria-label":"game frame"}),(0,n.jsx)("button",{onClick:function(){if(u.current){let e=u.current;a?(document.exitFullscreen&&document.exitFullscreen(),l(!1)):(e.requestFullscreen&&e.requestFullscreen(),l(!0))}},title:"Toggle fullscreen?","aria-label":"frame fullscreen toggle",children:(0,n.jsx)(d.M,{iconName:a?"compress":"expand"})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Sorry, seems like the game is not published yet or inaccessible right now."}),(0,n.jsxs)(o.default,{href:"/contact",className:"flex row","aria-label":"Navigate to contact page?",children:[(0,n.jsx)(d.M,{iconName:"mail"}),(0,n.jsx)("span",{children:"Contact The Owner?"}),(0,n.jsx)(d.M,{iconName:"mail"})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Whoa, looks like the game is not intended for the browser, but for",(0,n.jsxs)("span",{className:"text-capitalize",children:[" ",t.platform]})," instead."]}),(0,n.jsxs)("a",{href:t.outsideLink,className:"flex row",target:"_blank",rel:"noopener noreferrer","aria-label":"Navigate to game's actual platform?",children:[(0,n.jsx)(d.M,{iconName:t.platform}),(0,n.jsx)("span",{children:"Take Me to The Game!"}),(0,n.jsx)(d.M,{iconName:t.platform})]})]})]})}function x(e){var t,a;let{game:r}=e,{openModal:o}=(0,s.d)(),l="repeat(".concat(r.screenshots.length-1,", 1fr)"),i="Stoic^2"===r.title||"Absurd^2"===r.title;return(0,n.jsxs)("article",{className:"game-body flex column w-100 layout-row",children:[(0,n.jsx)("h3",{className:"text-center text-capitalize",children:r.subtitle}),(0,n.jsx)("div",{className:"screenshots grid ".concat("android"!==r.platform&&r.screenshots.length>=5?"w-100":""),style:{gridTemplateColumns:l},children:r.screenshots.slice(1).map((e,t)=>(0,n.jsx)(h.ImageContainer,{src:e,className:"h-100",alt:"".concat(r.title," screenshot number ").concat(t+1),style:{maxHeight:r.screenshots.length<5?"215px":"auto",aspectRatio:"android"!==r.platform?"16 / 9":"9 / 16"},onClick:()=>{o("image-modal",e)}},t))}),(0,n.jsx)(g.p,{string:r.description}),(0,n.jsx)(g.p,{string:"Controls: ".concat(r.controls)}),(0,n.jsx)(g.p,{string:r.credits}),r.specialNote&&(i?(0,n.jsx)(g.p,{string:r.specialNote,custom:"special"}):(0,n.jsx)(g.p,{string:r.specialNote})),(0,n.jsxs)("div",{className:"video-wrapper grid w-100",children:[r.walkthrough&&(0,n.jsxs)("div",{className:"video flex column w-100",children:[(0,n.jsx)("p",{className:"text-hide-overflow",children:"If you're stuck, we've got you covered:"}),(0,n.jsx)("iframe",{src:c.N.getYouTubeEmbedUrl(r.walkthrough),title:"Game Walkthrough",allowFullScreen:!0,"aria-label":"Video walkthrough for the game",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]}),r.devlog&&(0,n.jsxs)("div",{className:"video flex column w-100",children:[(0,n.jsx)("p",{className:"text-hide-overflow",children:"Be sure to check out the developer's log:"}),(0,n.jsx)("iframe",{src:c.N.getYouTubeEmbedUrl(r.devlog),title:"Developer's Log",allowFullScreen:!0,"aria-label":"Video devlog about the game",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})]}),(0,n.jsxs)("div",{className:"game-info flex column w-100",children:[(0,n.jsxs)("p",{className:"flex",children:[(0,n.jsx)("span",{className:"text-right",children:"Published"}),c.N.formatDate(r.createdAt)," GMT / UTC"]}),(0,n.jsxs)("p",{className:"flex",children:[(0,n.jsx)("span",{className:"text-right",children:"Platform"}),r.platform.includes("html5")?c.N.upperCaseString(r.platform):c.N.capitalizeString(r.platform)]}),(0,n.jsxs)("p",{className:"flex",children:[(0,n.jsx)("span",{className:"text-right",children:"Genre"}),null===(t=r.genre)||void 0===t?void 0:t.map(e=>c.N.capitalizeString(e)).join(", ")]}),(null===(a=r.outsideLink)||void 0===a?void 0:a.includes("itch.io"))&&(0,n.jsxs)("a",{href:r.outsideLink,target:"_blank","aria-label":"navigation to itch.io",title:"Go to itch.io?",rel:"noopener noreferrer",className:"flex row align-center w-fit",children:[(0,n.jsx)(d.M,{iconName:"itch"}),(0,n.jsx)("span",{children:"Available on Itch.io as well!"}),(0,n.jsx)(d.M,{iconName:"itch"})]})]})]})}},1811:function(e,t,a){"use strict";a.d(t,{m:function(){return o}});var n=a(7437),r=a(6370);function o(e){let{message:t}=e;return(0,n.jsxs)("article",{className:"error-container flex column",children:[(0,n.jsxs)("div",{className:"error-area flex row align-center",children:[(0,n.jsx)(r.ImageContainer,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1716704407/hgqpxtysqdjvav72w8dl.avif",alt:"Error.."}),(0,n.jsx)("span",{children:t})]}),(0,n.jsx)("a",{href:"/","aria-label":"Go to home page",title:"Return to home page?",children:"Return to home?"})]})}},6370:function(e,t,a){"use strict";a.d(t,{ImageContainer:function(){return c}});var n=a(7437),r=a(6648),o=a(2265);function l(e){let{src:t,width:a,quality:n}=e,[r,o]=t.split("/upload/");return"".concat(r,"/upload/").concat(["f_auto","c_limit","w_".concat(a),"q_".concat(n||"auto")].join(","),"/").concat(o)}function c(e){let{src:t,alt:a,style:c,className:i,width:s,height:u,onClick:m}=e,[d,h]=(0,o.useState)({width:s||100,height:u||100}),[g,f]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{if(t&&(!s||!u)){let e=new window.Image;e.onload=()=>{h({width:e.width,height:e.height})},e.src=t}},[t,s,u]),t)?(0,n.jsx)("div",{className:"image-container flex w-100 ".concat(i),style:c,onClick:m,children:(0,n.jsx)(r.default,{loader:l,src:t,alt:a,width:d.width,height:d.height,className:"w-h-100 ".concat(g?"opacity-100":"opacity-0"),onLoad:()=>f(!0),placeholder:"blur",blurDataURL:l({src:t,width:25,quality:1})})}):null}},2817:function(e,t,a){"use strict";a.d(t,{a:function(){return l}});var n=a(7437),r=a(2265),o=a(6370);function l(){let e=["Fetching data...","Almost there...","One moment...","Loading content...","Hang tight...","Standby, gamer...","Boiling the point...","Cleansing corruption...","Combining waves...","Loading^2...","Subscribe to T1mure!","T2mure is also cool...","Where is T3mure?"],[t,a]=(0,r.useState)("");return(0,r.useEffect)(()=>{a(function(){let t=Math.floor(Math.random()*e.length);return e[t]}())},[]),(0,n.jsxs)("article",{className:"loader-container flex column align-center",children:[(0,n.jsx)("span",{className:"text-center",children:t}),(0,n.jsx)(o.ImageContainer,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1715092957/rofgvwuxaocbanu3fpzl.gif",alt:"Loading..."}),(0,n.jsx)(o.ImageContainer,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1716704406/ogkkverm9r1wxupucbxp.avif",alt:"Loading..."})]})}},6168:function(e,t,a){"use strict";a.d(t,{p:function(){return o}});var n=a(7437),r=a(2265);function o(e){let{string:t,custom:a}=e;return(0,n.jsx)("p",{className:a,children:t.split("<br>").map((e,t,a)=>(0,n.jsxs)(r.Fragment,{children:[e,t<a.length-1&&(0,n.jsx)("br",{})]},t))})}},1551:function(e,t,a){"use strict";a.d(t,{D:function(){return l},d:function(){return c}});var n=a(7437),r=a(2265);let o=(0,r.createContext)({openModal:()=>{},closeModal:()=>{},activeModal:null,modalValue:null});function l(e){let{children:t}=e,[a,l]=(0,r.useState)(null),[c,i]=(0,r.useState)(null);return(0,n.jsx)(o.Provider,{value:{openModal:function(e,t){l(e),i(t||null)},closeModal:function(e){a===e&&(l(null),i(null))},activeModal:a,modalValue:c},children:t})}function c(){return(0,r.useContext)(o)}},1641:function(e,t,a){"use strict";a.d(t,{R:function(){return o}});var n=a(1635);let r="game/",o={query:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new URLSearchParams(e).toString();return n.R.get("".concat(r,"?").concat(t))},getById:async e=>n.R.get("".concat(r,"by-id/").concat(e)),getByName:async e=>n.R.get("".concat(r,"by-name/").concat(e)),checkNameAvailable:async e=>n.R.get("".concat(r,"check-name/").concat(e)),save:async e=>e._id?n.R.put("".concat(r,"update/").concat(e._id),e):n.R.post(r+"add/",e),remove:async e=>n.R.remove("".concat(r,"delete/").concat(e)),getGenres:()=>[{label:"Any",value:"",iconName:"globe"},{label:"Action",value:"action",iconName:"action"},{label:"Adventure",value:"adventure",iconName:"adventure"},{label:"Other",value:"other",iconName:"questionMark"},{label:"Platformer",value:"platformer",iconName:"platformer"},{label:"Puzzle",value:"puzzle",iconName:"puzzle"},{label:"Roguelike",value:"roguelike",iconName:"dice"}],getPlatforms:()=>[{label:"Any",value:"",iconName:"globe"},{label:"Android",value:"android",iconName:"android"},{label:"Browser",value:"html5",iconName:"html5"},{label:"Steam",value:"steam",iconName:"steam"}],getGameJams:()=>[{label:"Any",value:"",iconName:"globe"},{label:"Yes",value:"yes",iconName:"confirm"},{label:"No",value:"no",iconName:"cancel"}]}},1635:function(e,t,a){"use strict";a.d(t,{R:function(){return n}});let n={get(e,t){let a=t?"?".concat(Object.entries(t).map(e=>{let[t,a]=e;return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(a)))}).join("&")):"";return r("GET","".concat(e).concat(a))},post:(e,t)=>r("POST",e,t),put:(e,t)=>r("PUT",e,t),remove:(e,t)=>t?r("DELETE",e,t):r("DELETE",e)};async function r(e,t,a){let n="".concat("https://noffty.com/api/").concat(t),r={method:e,headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"}};"GET"!==e&&a&&(r.body=JSON.stringify(a));try{let e=await fetch(n,r),t=await e.json();if(!e.ok)throw Error(t.message||"An unknown error occurred");return t}catch(e){throw console.error("HTTP Service Error: ",e),e}}},9714:function(e,t,a){"use strict";a.d(t,{N:function(){return n}});let n={getBrowserName:()=>{let e=navigator.userAgent.toLowerCase();switch(!0){case e.includes("chrome")&&!e.includes("edg"):return"Chrome";case e.includes("firefox"):return"Firefox";case e.includes("safari")&&!e.includes("chrome"):return"Safari";case e.includes("edg"):return"Edge";default:return"Other"}},getAllowAttributes:()=>{switch(n.getBrowserName()){case"Chrome":case"Edge":return"fullscreen; midi; gyroscope; accelerometer; cross-origin-isolated;";case"Firefox":return"fullscreen; midi; accelerometer;";default:return"fullscreen; midi;"}},capitalizeString:e=>e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" "),upperCaseString:e=>e.toUpperCase(),formatDate:e=>{let t=new Date(1e3*e),a=t.getDate().toString().padStart(2,"0"),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],r=t.getFullYear();return"".concat(a," ").concat(n," ").concat(r)},getYouTubeEmbedUrl:e=>{let t=new URLSearchParams(new URL(e).search).get("v");return"https://www.youtube.com/embed/".concat(t)},formatText:e=>e.replace(/\n/g,"<br>"),areEqual:(e,t)=>{let a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(let n of a)if(e[n]!==t[n])return!1;return!0},getSocialLinks:()=>[{iconName:"discord",link:"https://discord.gg/SeNsSRt",ariaLabel:"Go to Noffty's Discord channel"},{iconName:"itch",link:"https://t1mure.itch.io/",ariaLabel:"Go to T1mure's Itch.io account"},{iconName:"googlePlay",link:"https://play.google.com/store/apps/dev?id=8915839538887603911&",ariaLabel:"Go to Noffty's Google Play account"},{iconName:"youtube",link:"https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA",ariaLabel:"Go to Noffty's YouTube channel"}]}}},function(e){e.O(0,[648,138,148,971,23,744],function(){return e(e.s=5952)}),_N_E=e.O()}]);