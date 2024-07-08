"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{6463:function(e,t,n){var a=n(1169);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}}),n.o(a,"useSearchParams")&&n.d(t,{useSearchParams:function(){return a.useSearchParams}})},1101:function(e,t,n){n.d(t,{o:function(){return l}});var a=n(7437),r=n(126);function l(e){var t;let{label:n,svg:l,type:o,name:i,value:s,onChange:c,placeholder:u,maxLength:d,error:m,onBlur:h,validationOptions:g}=e;return(0,a.jsxs)("div",{className:"input-area grid ".concat(m?"error":""),children:[(0,a.jsxs)("label",{className:"grid align-center",htmlFor:i,children:[(0,a.jsx)(r.M,{iconName:l}),(0,a.jsx)("span",{children:n}),m&&(0,a.jsx)("p",{title:m,children:m})]}),"textarea"===o?(0,a.jsx)("textarea",{id:i,name:i,value:s,onChange:c,onBlur:h,placeholder:u,maxLength:d,required:null==g?void 0:g.required}):(0,a.jsx)("input",{type:o,id:i,name:i,value:s,onChange:c,onBlur:h,placeholder:u,maxLength:d,required:null==g?void 0:g.required,pattern:null==g?void 0:null===(t=g.pattern)||void 0===t?void 0:t.source})]})}},7178:function(e,t,n){n.d(t,{GameForm:function(){return f}});var a=n(7437),r=n(2265),l=n(6463),o=n(1392),i=n(5682),s=n(8804),c=n(4021),u=n(6370);function d(e){let{index:t,defaultImgUrl:n,folderName:l,onUploaded:o}=e,[i,s]=(0,r.useState)(""),[d,m]=(0,r.useState)(!1),{cloudinary:h}=(0,c.n)(),{cloudName:g,uploadPreset:p}=h,f="imgUpload-".concat(t);async function v(e){let n=e.size/1024/1024>2?{isValid:!1,errorHeader:"Too Big!",errorMessage:"File size exceeds 2 MB!"}:["image/avif"].includes(e.type)?(console.log("File validation passed"),{isValid:!0}):{isValid:!1,errorHeader:"Invalid format!",errorMessage:"Only AVIF is allowed!"};if(!n.isValid){console.log("Validation failed: ".concat(n.errorHeader)),console.log("Error details: ".concat(n.errorMessage));return}m(!0);try{let n=await x(e,l,g,p);s(n.secure_url),o({url:n.secure_url,index:t})}catch(e){console.error("Upload failed",e)}finally{m(!1)}}async function x(e,t,n,a){try{let r=new FormData;r.append("upload_preset",a),r.append("file",e),r.append("folder",t);let l=await fetch("https://api.cloudinary.com/v1_1/".concat(n,"/image/upload"),{method:"POST",body:r});return await l.json()}catch(e){throw console.error("Failed to upload",e),e}}return(0,r.useEffect)(()=>{n!==i&&s(n)},[n]),(0,a.jsx)("article",{className:"upload-preview",role:"region","aria-labelledby":"upload-label","aria-describedby":"upload-description",onDragOver:function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.add("drag-over")},onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.remove("drag-over")},onDrop:function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.remove("drag-over");let t=e.dataTransfer.files;t&&t.length>0&&v(t[0])},children:(0,a.jsxs)("div",{className:"file-upload-container flex column",children:[(0,a.jsxs)("label",{htmlFor:f,className:"flex column fast-trans",id:"upload-label",children:[(0,a.jsx)("span",{id:"upload-description",className:"family-bold text-center fast-trans",children:i?"Replace Image?":d?"Uploading....":"Upload Image"}),i&&(0,a.jsx)(u.ImageContainer,{src:i,alt:"preview image"})]}),(0,a.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length>0&&v(e.target.files[0])},accept:"image/*",id:f,style:{display:"none"},"aria-labelledby":"upload-label","aria-describedby":"upload-description"})]})})}var m=n(126),h=n(1101),g=n(1567);function p(e){var t,n;let{game:r}=e,l="repeat(".concat(r.screenshots.length-1,", 1fr)");return(0,a.jsxs)("article",{className:"edit-preview",children:[(0,a.jsxs)("h2",{className:"text-center",children:["Preview: ",r.name]}),(0,a.jsxs)("div",{className:"game-frame flex column w-100 text-center",children:[(0,a.jsxs)("h3",{children:["You Are Now Playing ",r.name]}),"html5"===r.platform?r.gameLink?(0,a.jsx)("div",{className:"iframe-placeholder flex full-center",children:(0,a.jsx)("p",{children:"Gameplay would be shown here"})}):(0,a.jsx)("p",{children:"Game not published or inaccessible"}):(0,a.jsxs)("p",{children:["Game is for ",r.platform]})]}),(0,a.jsxs)("div",{className:"game-body flex column w-100 layout-row",children:[(0,a.jsx)("h3",{className:"text-center",children:r.note}),(0,a.jsx)("div",{className:"preview-screenshots grid ".concat("android"!==r.platform?"w-100":""),style:{gridTemplateColumns:l},children:r.screenshots.slice(1).map((e,t)=>(0,a.jsx)(u.ImageContainer,{src:e,alt:"".concat(r.name," screenshot number ").concat(t+1),className:"preview-screenshot ".concat("android"!==r.platform?"w-100":""),style:{maxHeight:r.screenshots.length<5?"215px":"auto",aspectRatio:"android"!==r.platform?"16 / 9":"9 / 16"}},t))}),(0,a.jsx)("p",{children:r.description||""}),(0,a.jsx)("p",{children:"Controls: ".concat(r.controls||"")}),(0,a.jsx)("p",{children:r.credits||""}),(0,a.jsxs)("div",{className:"video-wrapper grid w-100",children:[r.walkthrough&&(0,a.jsxs)("div",{className:"video flex column w-100",children:[(0,a.jsx)("p",{children:"If you're stuck, we've got you covered:"}),(0,a.jsx)("iframe",{src:g.t.getYouTubeEmbedUrl(r.walkthrough),title:"Game Walkthrough",allowFullScreen:!0,"aria-label":"Video walkthrough for the game",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]}),r.devlog&&(0,a.jsxs)("div",{className:"video flex column w-100",children:[(0,a.jsx)("p",{children:"Be sure to check out the developer's log:"}),(0,a.jsx)("iframe",{src:g.t.getYouTubeEmbedUrl(r.devlog),title:"Developer's Log",allowFullScreen:!0,"aria-label":"Video devlog about the game",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})]}),(0,a.jsxs)("div",{className:"game-info flex column w-100",children:[(0,a.jsxs)("p",{className:"flex",children:[(0,a.jsx)("span",{className:"text-right",children:"Published"}),g.t.formatDate(r.createdAt)," GMT / UTC"]}),(0,a.jsxs)("p",{className:"flex",children:[(0,a.jsx)("span",{className:"text-right",children:"Platform"}),r.platform.includes("html5")?g.t.upperCaseString(r.platform):g.t.capitalizeString(r.platform)]}),(0,a.jsxs)("p",{className:"flex",children:[(0,a.jsx)("span",{className:"text-right",children:"Genre"}),null===(t=r.genre)||void 0===t?void 0:t.map(e=>g.t.capitalizeString(e)).join(", ")]}),(null===(n=r.outsideLink)||void 0===n?void 0:n.includes("itch.io"))&&(0,a.jsxs)("a",{href:r.outsideLink,target:"_blank","aria-label":"navigation to itch.io",title:"Go to itch.io?",rel:"noopener noreferrer",className:"flex row align-center w-fit",children:[(0,a.jsx)(m.M,{iconName:"itch"}),(0,a.jsx)("span",{children:"Available on Itch.io as well!"}),(0,a.jsx)(m.M,{iconName:"itch"})]})]})]})]})}function f(e){let{game:t}=e,n=new o.h,c=(0,l.useRouter)(),{values:u,errors:g,setErrors:f,validateField:v,handleChange:x,handleSubmit:j,resetForm:b,setFieldValue:y}=(0,i.c)(t,{name:{required:!0,minLength:3,pattern:/[\s.\-!^&?']+/},note:{required:!0,minLength:3,pattern:/[\s.\-!?']+/},outsideLink:{required:!0,minLength:3,link:!0},gameLink:{minLength:3,link:!0},devlog:{minLength:3,link:!0},walkthrough:{minLength:3,link:!0},description:{required:!0,minLength:15,pattern:/[\s.\-!?@#$',^*_;():]+/},credits:{required:!0,minLength:3,pattern:/[\s.\-!?@#$',^*_;:]+/},controls:{required:!0,minLength:3,pattern:/[\s.\-!?@#$',^/*;:]+/}},async e=>{try{await n.save(e),console.log("Game saved successfully"),b(),c.push("/admin/games")}catch(e){console.error("Failed to save game",e)}}),N=(0,s.N)(u.name,500);function w(e){let t=[...u.screenshots];t[e.index]=e.url,y("screenshots",t)}async function k(){if(t._id)try{await n.remove(t._id.toString()),console.log("Game deleted successfully"),c.push("/admin/games")}catch(e){console.error("Failed to delete game",e)}}async function L(e){try{if(e===t.name){f(e=>({...e,name:null}));return}let{isAvailable:a}=await n.checkNameAvailable(e);f(e=>({...e,name:a?e.name:"Name is taken"}))}catch(e){console.error("Failed to check name availability",e)}}(0,r.useEffect)(()=>{N&&L(N)},[N]);let C=u.name&&u.note&&u.outsideLink&&u.description&&u.credits&&u.controls,S=Object.values(g).some(e=>e);return(0,a.jsxs)("form",{className:"grid layout-row w-100",onSubmit:j,children:[(0,a.jsxs)("article",{className:"form-inputs grid w-100",children:[(0,a.jsx)(h.o,{label:"Game Title*",svg:"title",type:"text",name:"name",maxLength:30,value:u.name,onChange:x,error:g.name,onBlur:()=>v("name",u.name)}),(0,a.jsx)(h.o,{label:"Game Note*",svg:"info",type:"text",name:"note",maxLength:40,value:u.note,onChange:x,error:g.note,onBlur:()=>v("note",u.note)}),(0,a.jsx)(h.o,{label:"Outside Link*",svg:"link",type:"text",name:"outsideLink",maxLength:120,value:u.outsideLink||"",onChange:x,error:g.outsideLink,onBlur:()=>v("outsideLink",u.outsideLink)}),(0,a.jsx)(h.o,{label:"Files Link",svg:"folder",type:"text",name:"gameLink",maxLength:120,value:u.gameLink||"",onChange:x,error:g.gameLink,onBlur:()=>v("gameLink",u.gameLink||"")}),(0,a.jsx)(h.o,{label:"Devlog Link",svg:"link",type:"text",name:"devlog",maxLength:120,value:u.devlog||"",onChange:x,error:g.devlog,onBlur:()=>v("devlog",u.devlog||"")}),(0,a.jsx)(h.o,{label:"Walkthrough Link",svg:"link",type:"text",name:"walkthrough",maxLength:120,value:u.walkthrough||"",onChange:x,error:g.walkthrough,onBlur:()=>v("walkthrough",u.walkthrough||"")}),(0,a.jsx)(h.o,{label:"Description*",svg:"description",type:"textarea",name:"description",maxLength:600,value:u.description||"",onChange:x,error:g.description,onBlur:()=>v("description",u.description)}),(0,a.jsx)(h.o,{label:"Credits*",svg:"agreement",type:"textarea",name:"credits",maxLength:120,value:u.credits||"",onChange:x,error:g.credits,onBlur:()=>v("credits",u.credits)}),(0,a.jsx)(h.o,{label:"Controls*",svg:"keyboard",type:"textarea",name:"controls",maxLength:120,value:u.controls||"",onChange:x,error:g.controls,onBlur:()=>v("controls",u.controls)}),(0,a.jsxs)("div",{className:"input-area grid",children:[(0,a.jsxs)("label",{className:"grid align-center",htmlFor:"genre",children:[(0,a.jsx)(m.M,{iconName:"action"}),(0,a.jsx)("span",{children:"Genre:"})]}),(0,a.jsxs)("select",{id:"genre",name:"genre",multiple:!0,value:u.genre,onChange:function(e){y("genre",Array.from(e.target.selectedOptions,e=>e.value))},children:[(0,a.jsx)("option",{value:"action",children:"Action"}),(0,a.jsx)("option",{value:"adventure",children:"Adventure"}),(0,a.jsx)("option",{value:"other",children:"Other"}),(0,a.jsx)("option",{value:"platformer",children:"Platformer"}),(0,a.jsx)("option",{value:"puzzle",children:"Puzzle"}),(0,a.jsx)("option",{value:"roguelike",children:"Roguelike"})]})]}),(0,a.jsxs)("div",{className:"input-area grid",children:[(0,a.jsxs)("label",{className:"grid align-center",htmlFor:"platform",children:[(0,a.jsx)(m.M,{iconName:"monitor"}),(0,a.jsx)("span",{children:"Platform:"})]}),(0,a.jsxs)("select",{id:"platform",name:"platform",value:u.platform,onChange:x,required:!0,children:[(0,a.jsx)("option",{value:"android",children:"Android"}),(0,a.jsx)("option",{value:"html5",children:"HTML5"}),(0,a.jsx)("option",{value:"steam",children:"Steam"})]})]}),(0,a.jsxs)("div",{className:"input-area grid",children:[(0,a.jsxs)("label",{className:"grid align-center",htmlFor:"isGameJam",children:[(0,a.jsx)(m.M,{iconName:"itch"}),(0,a.jsx)("span",{children:"Is Game Jam:"})]}),(0,a.jsxs)("select",{id:"isGameJam",name:"isGameJam",value:u.isGameJam,onChange:x,required:!0,children:[(0,a.jsx)("option",{value:"yes",children:"Yes"}),(0,a.jsx)("option",{value:"no",children:"No"})]})]}),(0,a.jsxs)("div",{className:"input-area grid",children:[(0,a.jsxs)("label",{className:"grid align-center",htmlFor:"screenshots",children:[(0,a.jsx)(m.M,{iconName:"images"}),(0,a.jsx)("span",{children:"Screenshots:"})]}),(0,a.jsxs)("div",{className:"upload-area grid",children:[u.screenshots.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(d,{index:t,defaultImgUrl:e||"https://res.cloudinary.com/djzid7ags/image/upload/v1719002299/zmbzvexomb5jmawvpqzd.avif",folderName:"/games/screenshots",onUploaded:w})},t)),(0,a.jsxs)("div",{className:"amount-management grid",children:[(0,a.jsxs)("button",{type:"button",onClick:()=>(function(e){if(u.screenshots.length>1){let t=[...u.screenshots];t.splice(e,1),y("screenshots",t)}})(u.screenshots.length-1),disabled:1===u.screenshots.length,className:"flex column full-center ".concat(1===u.screenshots.length?"disabled":""),children:[(0,a.jsx)(m.M,{iconName:"minus"}),(0,a.jsx)("span",{children:"Remove"})]}),(0,a.jsxs)("button",{type:"button",onClick:function(){u.screenshots.length<5&&y("screenshots",[...u.screenshots,""])},disabled:u.screenshots.length>=5,className:"flex column full-center ".concat(u.screenshots.length>=5?"disabled":""),children:[(0,a.jsx)(m.M,{iconName:"plus"}),(0,a.jsx)("span",{children:"Add"})]})]})]})]}),(0,a.jsxs)("div",{className:"input-area grid",children:[(0,a.jsxs)("label",{className:"grid align-center",htmlFor:"icon",children:[(0,a.jsx)(m.M,{iconName:"images"}),(0,a.jsx)("span",{children:"Icon:"})]}),(0,a.jsx)("div",{className:"upload-area grid",children:(0,a.jsx)(d,{index:-1,defaultImgUrl:t.icon||"https://res.cloudinary.com/djzid7ags/image/upload/v1719002261/vohr6yravygkly4duxhv.avif",folderName:"/games/icons",onUploaded:function(e){y("icon",e.url)}})})]}),(0,a.jsxs)("section",{className:"form-actions flex row align-center justify-between",children:[(0,a.jsx)("button",{className:"flex row align-center ".concat(!C||S?"disabled":""),type:"submit",disabled:!C||S,children:(0,a.jsx)("span",{children:"Send"})}),t._id&&(0,a.jsx)("button",{className:"flex row align-center",type:"button",onClick:k,children:(0,a.jsx)("span",{children:"Delete"})})]})]}),(0,a.jsx)(p,{game:u})]})}},6370:function(e,t,n){n.d(t,{ImageContainer:function(){return i}});var a=n(7437),r=n(6648),l=n(2262),o=n(2265);function i(e){let{src:t,alt:n,style:i,className:s,width:c,height:u}=e,[d,m]=(0,o.useState)({width:c||100,height:u||100}),[h,g]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{if(t&&(!c||!u)){let e=new window.Image;e.onload=()=>{m({width:e.width,height:e.height})},e.src=t}},[t,c,u]),t)?(0,a.jsx)("div",{className:"image-container w-100 ".concat(s),style:i,children:(0,a.jsx)(r.default,{loader:l.default,src:t,alt:n,width:d.width,height:d.height,className:"w-h-100 ".concat(h?"opacity-100":"opacity-0"),onLoad:()=>g(!0),placeholder:"blur",blurDataURL:(0,l.default)({src:t,width:25,quality:1})})}):null}},4021:function(e,t,n){n.d(t,{g:function(){return i},n:function(){return o}});var a=n(7437),r=n(2265);let l=(0,r.createContext)(null);function o(){let e=(0,r.useContext)(l);if(!e)throw Error("useApiKeys must be used within an ApiProvider");return e}function i(e){let{children:t,apiKeys:n}=e;return(0,a.jsx)(l.Provider,{value:n,children:t})}},8804:function(e,t,n){n.d(t,{N:function(){return r}});var a=n(2265);function r(e,t){let[n,r]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let n=setTimeout(()=>{r(e)},t);return()=>clearTimeout(n)},[e,t]),n}},5682:function(e,t,n){n.d(t,{c:function(){return r}});var a=n(2265);function r(e,t,n){let[r,l]=(0,a.useState)(e),[o,i]=(0,a.useState)({});function s(e,n){let a=t[e];if(!a)return;let r=null;if(!a.required&&""===n.trim()){i(t=>({...t,[e]:null}));return}for(let e of[{check:a.required,func:()=>""===n.trim()?"Cannot be left empty":null},{check:a.minLength,func:()=>{var e;return e=a.minLength,n.length<e?"Needs ".concat(e," characters at least"):null}},{check:a.noLetters,func:()=>/[a-zA-Z]/.test(n)?"Cannot insert letters":null},{check:a.noDigits,func:()=>/\d/.test(n)?"Cannot insert digits":null},{check:a.email,func:()=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)?null:"Invalid email format"},{check:a.link,func:()=>/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/[^\s]*)?$/.test(n)?null:"Invalid URL format"},{check:a.pattern,func:()=>RegExp("^[a-zA-Z0-9"+a.pattern.source+"]*$").test(n)?null:"Invalid characters used"}])if(!r&&e.check&&(r=e.func()))break;i(t=>({...t,[e]:r}))}async function c(e){e.preventDefault(),n(r)}return{values:r,errors:o,setErrors:i,validateField:s,handleChange:function(e){var n;let{name:a,value:r}=e.target;l(e=>({...e,[a]:r})),"select"!==e.target.tagName.toLowerCase()&&(null===(n=t[a])||void 0===n?void 0:n.required)&&s(a,r)},setFieldValue:function(e,n){var a;l(t=>({...t,[e]:n})),(null===(a=t[e])||void 0===a?void 0:a.required)&&s(e,n.toString())},handleSubmit:c,resetForm:function(){l(e),i({})}}}},2262:function(e,t,n){function a(e){let{src:t,width:n,quality:a}=e,[r,l]=t.split("/upload/");return"".concat(r,"/upload/").concat(["f_auto","c_limit","w_".concat(n),"q_".concat(a||"auto")].join(","),"/").concat(l)}n.r(t),n.d(t,{default:function(){return a}})},1392:function(e,t,n){n.d(t,{h:function(){return l}});var a=n(6863);let r="game/";class l{async query(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new URLSearchParams(e).toString();return console.log("Excepted request to backend: ".concat(r,"?").concat(t)),a.O.get("".concat(r,"?").concat(t))}async getById(e){return a.O.get("".concat(r,"by-id/").concat(e))}async getByName(e){return a.O.get("".concat(r,"by-name/").concat(e))}async checkNameAvailable(e){return a.O.get("".concat(r,"check-name/").concat(e))}async save(e){return e._id?a.O.put("".concat(r,"update/").concat(e._id),e):a.O.post(r+"add/",e)}async remove(e){return a.O.remove("".concat(r,"delete/").concat(e))}getDefaultFilter(){return{name:"",platform:"",genre:"",isGameJam:""}}getGenres(){return[{label:"Any",value:"",iconName:"globe"},{label:"Action",value:"action",iconName:"action"},{label:"Adventure",value:"adventure",iconName:"adventure"},{label:"Other",value:"other",iconName:"questionMark"},{label:"Platformer",value:"platformer",iconName:"platformer"},{label:"Puzzle",value:"puzzle",iconName:"puzzle"},{label:"Roguelike",value:"roguelike",iconName:"dice"}]}getPlatforms(){return[{label:"Any",value:"",iconName:"globe"},{label:"Android",value:"android",iconName:"android"},{label:"Browser",value:"html5",iconName:"html5"},{label:"Steam",value:"steam",iconName:"steam"}]}getGameJams(){return[{label:"Any",value:"",iconName:"globe"},{label:"Yes",value:"yes",iconName:"confirm"},{label:"No",value:"no",iconName:"cancel"}]}}},6863:function(e,t,n){n.d(t,{O:function(){return a}});let a={request:r,get:function(e,t){let n=t?"?".concat(new URLSearchParams(t).toString()):"";return r("GET","".concat(e).concat(n))},post:function(e,t){return r("POST",e,t)},put:function(e,t){return r("PUT",e,t)},remove:function(e,t){return t?r("DELETE",e,t):r("DELETE",e)}};async function r(e,t,n){let a="".concat("/api/").concat(t),r={method:e,headers:{"Content-Type":"application/json"}};"GET"!==e&&n&&(r.body=JSON.stringify(n));try{let e=await fetch(a,r),t=await e.json();if(!e.ok)throw Error(t.message||"An unknown error occurred");return t}catch(e){throw console.error("HTTP Service Error: ",e),e}}},1567:function(e,t,n){n.d(t,{t:function(){return r}});var a=n(6863);let r={getBrowserName:o,getAllowAttributes:function(){switch(o()){case"Chrome":case"Edge":return"fullscreen; midi; gyroscope; accelerometer; cross-origin-isolated;";case"Firefox":return"fullscreen; midi; accelerometer;";default:return"fullscreen; midi;"}},capitalizeString:function(e){return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")},upperCaseString:function(e){return e.toUpperCase()},formatDate:function(e){let t=new Date(1e3*e),n=t.getDate().toString().padStart(2,"0"),a=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],r=t.getFullYear();return"".concat(n," ").concat(a," ").concat(r)},getYouTubeEmbedUrl:function(e){let t=new URLSearchParams(new URL(e).search).get("v");return"https://www.youtube.com/embed/".concat(t)},areEqual:function(e,t){let n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(let a of n)if(e[a]!==t[a])return!1;return!0},getSocialLinks:function(){return[{iconName:"discord",link:"https://discord.gg/SeNsSRt",ariaLabel:"Go to Noffty's Discord channel"},{iconName:"itch",link:"https://t1mure.itch.io/",ariaLabel:"Go to T1mure's Itch.io account"},{iconName:"googlePlay",link:"https://play.google.com/store/apps/dev?id=8915839538887603911&",ariaLabel:"Go to Noffty's Google Play account"},{iconName:"youtube",link:"https://www.youtube.com/channel/UCUCpztVlwt_pz0xDZe_ajIA",ariaLabel:"Go to Noffty's YouTube channel"}]},getAPIKeys:l};async function l(){try{return await a.O.get("auth/api-keys")}catch(e){return console.error("Failed to fetch API keys:",e),{recaptchaSiteKey:"",cloudinary:{cloudName:"",uploadPreset:""}}}}function o(){let e=navigator.userAgent.toLowerCase();switch(!0){case e.includes("chrome")&&!e.includes("edg"):return"Chrome";case e.includes("firefox"):return"Firefox";case e.includes("safari")&&!e.includes("chrome"):return"Safari";case e.includes("edg"):return"Edge";default:return"Other"}}}}]);