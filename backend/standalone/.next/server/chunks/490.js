"use strict";exports.id=490,exports.ids=[490],exports.modules={7490:(e,a,l)=>{l.d(a,{GameForm:()=>x});var n=l(326),r=l(7577),s=l(5047),t=l(3290),i=l(6941),o=l(6388),c=l(3816),d=l(349);function m({index:e,defaultImgUrl:a,folderName:l,onUploaded:s}){let[t,i]=(0,r.useState)(""),[o,m]=(0,r.useState)(!1),{cloudinary:u}=(0,c.n)(),{cloudName:h,uploadPreset:g}=u,p=`imgUpload-${e}`;async function x(a){let n=a.size/1024/1024>2?{isValid:!1,errorHeader:"Too Big!",errorMessage:"File size exceeds 2 MB!"}:["image/avif"].includes(a.type)?(console.log("File validation passed"),{isValid:!0}):{isValid:!1,errorHeader:"Invalid format!",errorMessage:"Only AVIF is allowed!"};if(!n.isValid){console.log(`Validation failed: ${n.errorHeader}`),console.log(`Error details: ${n.errorMessage}`);return}m(!0);try{let n=await v(a,l,h,g);i(n.secure_url),s({url:n.secure_url,index:e})}catch(e){console.error("Upload failed",e)}finally{m(!1)}}async function v(e,a,l,n){let r=`https://api.cloudinary.com/v1_1/${l}/image/upload`;try{let l=new FormData;l.append("upload_preset",n),l.append("file",e),l.append("folder",a);let s=await fetch(r,{method:"POST",body:l});return await s.json()}catch(e){throw console.error("Failed to upload",e),e}}return n.jsx("article",{className:"upload-preview",role:"region","aria-labelledby":"upload-label","aria-describedby":"upload-description",onDragOver:function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.add("drag-over")},onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.remove("drag-over")},onDrop:function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.remove("drag-over");let a=e.dataTransfer.files;a&&a.length>0&&x(a[0])},children:(0,n.jsxs)("div",{className:"file-upload-container flex column",children:[(0,n.jsxs)("label",{htmlFor:p,className:"flex column fast-trans",id:"upload-label",children:[n.jsx("span",{id:"upload-description",className:"family-bold text-center fast-trans",children:t?"Replace Image?":o?"Uploading....":"Upload Image"}),t&&n.jsx(d.ImageContainer,{src:t,alt:"preview image"})]}),n.jsx("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length>0&&x(e.target.files[0])},accept:"image/*",id:p,style:{display:"none"},"aria-labelledby":"upload-label","aria-describedby":"upload-description"})]})})}var u=l(6919),h=l(185),g=l(2936);function p({game:e}){let a=`repeat(${e.screenshots.length-1}, 1fr)`;return(0,n.jsxs)("article",{className:"edit-preview",children:[(0,n.jsxs)("h2",{className:"text-center",children:["Preview: ",e.name]}),(0,n.jsxs)("div",{className:"game-frame flex column w-100 text-center",children:[(0,n.jsxs)("h3",{children:["You Are Now Playing ",e.name]}),"html5"===e.platform?e.gameLink?n.jsx("div",{className:"iframe-placeholder flex full-center",children:n.jsx("p",{children:"Gameplay would be shown here"})}):n.jsx("p",{children:"Game not published or inaccessible"}):(0,n.jsxs)("p",{children:["Game is for ",e.platform]})]}),(0,n.jsxs)("div",{className:"game-body flex column w-100 layout-row",children:[n.jsx("h3",{className:"text-center",children:e.note}),n.jsx("div",{className:`preview-screenshots grid ${"android"!==e.platform?"w-100":""}`,style:{gridTemplateColumns:a},children:e.screenshots.slice(1).map((a,l)=>n.jsx(d.ImageContainer,{src:a,alt:`${e.name} screenshot number ${l+1}`,className:`preview-screenshot ${"android"!==e.platform?"w-100":""}`,style:{maxHeight:e.screenshots.length<5?"215px":"auto",aspectRatio:"android"!==e.platform?"16 / 9":"9 / 16"}},l))}),n.jsx("p",{children:e.description||""}),n.jsx("p",{children:`Controls: ${e.controls||""}`}),n.jsx("p",{children:e.credits||""}),(0,n.jsxs)("div",{className:"video-wrapper grid w-100",children:[e.walkthrough&&(0,n.jsxs)("div",{className:"video flex column w-100",children:[n.jsx("p",{children:"If you're stuck, we've got you covered:"}),n.jsx("iframe",{src:g.t.getYouTubeEmbedUrl(e.walkthrough),title:"Game Walkthrough",allowFullScreen:!0,"aria-label":"Video walkthrough for the game",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]}),e.devlog&&(0,n.jsxs)("div",{className:"video flex column w-100",children:[n.jsx("p",{children:"Be sure to check out the developer's log:"}),n.jsx("iframe",{src:g.t.getYouTubeEmbedUrl(e.devlog),title:"Developer's Log",allowFullScreen:!0,"aria-label":"Video devlog about the game",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})]}),(0,n.jsxs)("div",{className:"game-info flex column w-100",children:[(0,n.jsxs)("p",{className:"flex",children:[n.jsx("span",{className:"text-right",children:"Published"}),g.t.formatDate(e.createdAt)," GMT / UTC"]}),(0,n.jsxs)("p",{className:"flex",children:[n.jsx("span",{className:"text-right",children:"Platform"}),e.platform.includes("html5")?g.t.upperCaseString(e.platform):g.t.capitalizeString(e.platform)]}),(0,n.jsxs)("p",{className:"flex",children:[n.jsx("span",{className:"text-right",children:"Genre"}),e.genre?.map(e=>g.t.capitalizeString(e)).join(", ")]}),e.outsideLink?.includes("itch.io")&&(0,n.jsxs)("a",{href:e.outsideLink,target:"_blank","aria-label":"navigation to itch.io",title:"Go to itch.io?",rel:"noopener noreferrer",className:"flex row align-center w-fit",children:[n.jsx(u.M,{iconName:"itch"}),n.jsx("span",{children:"Available on Itch.io as well!"}),n.jsx(u.M,{iconName:"itch"})]})]})]})]})}function x({game:e}){let a=new t.h,l=(0,s.useRouter)(),{values:r,errors:c,setErrors:d,validateField:g,handleChange:x,handleSubmit:v,resetForm:f,setFieldValue:j}=(0,i.c)(e,{name:{required:!0,minLength:3,pattern:/[\s.\-!^&?']+/},note:{required:!0,minLength:3,pattern:/[\s.\-!?']+/},outsideLink:{required:!0,minLength:3,link:!0},gameLink:{minLength:3,link:!0},devlog:{minLength:3,link:!0},walkthrough:{minLength:3,link:!0},description:{required:!0,minLength:15,pattern:/[\s.\-!?@#$',^*_;():]+/},credits:{required:!0,minLength:3,pattern:/[\s.\-!?@#$',^*_;:]+/},controls:{required:!0,minLength:3,pattern:/[\s.\-!?@#$',^/*;:]+/}},async e=>{try{await a.save(e),console.log("Game saved successfully"),f(),l.push("/admin/games")}catch(e){console.error("Failed to save game",e)}});function b(e){let a=[...r.screenshots];a[e.index]=e.url,j("screenshots",a)}async function N(){if(e._id)try{await a.remove(e._id.toString()),console.log("Game deleted successfully"),l.push("/admin/games")}catch(e){console.error("Failed to delete game",e)}}(0,o.N)(r.name,500);let y=r.name&&r.note&&r.outsideLink&&r.description&&r.credits&&r.controls,w=Object.values(c).some(e=>e);return(0,n.jsxs)("form",{className:"grid layout-row w-100",onSubmit:v,children:[(0,n.jsxs)("article",{className:"form-inputs grid w-100",children:[n.jsx(h.o,{label:"Game Title*",svg:"title",type:"text",name:"name",maxLength:30,value:r.name,onChange:x,error:c.name,onBlur:()=>g("name",r.name)}),n.jsx(h.o,{label:"Game Note*",svg:"info",type:"text",name:"note",maxLength:40,value:r.note,onChange:x,error:c.note,onBlur:()=>g("note",r.note)}),n.jsx(h.o,{label:"Outside Link*",svg:"link",type:"text",name:"outsideLink",maxLength:120,value:r.outsideLink||"",onChange:x,error:c.outsideLink,onBlur:()=>g("outsideLink",r.outsideLink)}),n.jsx(h.o,{label:"Files Link",svg:"folder",type:"text",name:"gameLink",maxLength:120,value:r.gameLink||"",onChange:x,error:c.gameLink,onBlur:()=>g("gameLink",r.gameLink||"")}),n.jsx(h.o,{label:"Devlog Link",svg:"link",type:"text",name:"devlog",maxLength:120,value:r.devlog||"",onChange:x,error:c.devlog,onBlur:()=>g("devlog",r.devlog||"")}),n.jsx(h.o,{label:"Walkthrough Link",svg:"link",type:"text",name:"walkthrough",maxLength:120,value:r.walkthrough||"",onChange:x,error:c.walkthrough,onBlur:()=>g("walkthrough",r.walkthrough||"")}),n.jsx(h.o,{label:"Description*",svg:"description",type:"textarea",name:"description",maxLength:600,value:r.description||"",onChange:x,error:c.description,onBlur:()=>g("description",r.description)}),n.jsx(h.o,{label:"Credits*",svg:"agreement",type:"textarea",name:"credits",maxLength:120,value:r.credits||"",onChange:x,error:c.credits,onBlur:()=>g("credits",r.credits)}),n.jsx(h.o,{label:"Controls*",svg:"keyboard",type:"textarea",name:"controls",maxLength:120,value:r.controls||"",onChange:x,error:c.controls,onBlur:()=>g("controls",r.controls)}),(0,n.jsxs)("div",{className:"input-area grid",children:[(0,n.jsxs)("label",{className:"grid align-center",htmlFor:"genre",children:[n.jsx(u.M,{iconName:"action"}),n.jsx("span",{children:"Genre:"})]}),(0,n.jsxs)("select",{id:"genre",name:"genre",multiple:!0,value:r.genre,onChange:function(e){j("genre",Array.from(e.target.selectedOptions,e=>e.value))},children:[n.jsx("option",{value:"action",children:"Action"}),n.jsx("option",{value:"adventure",children:"Adventure"}),n.jsx("option",{value:"other",children:"Other"}),n.jsx("option",{value:"platformer",children:"Platformer"}),n.jsx("option",{value:"puzzle",children:"Puzzle"}),n.jsx("option",{value:"roguelike",children:"Roguelike"})]})]}),(0,n.jsxs)("div",{className:"input-area grid",children:[(0,n.jsxs)("label",{className:"grid align-center",htmlFor:"platform",children:[n.jsx(u.M,{iconName:"monitor"}),n.jsx("span",{children:"Platform:"})]}),(0,n.jsxs)("select",{id:"platform",name:"platform",value:r.platform,onChange:x,required:!0,children:[n.jsx("option",{value:"android",children:"Android"}),n.jsx("option",{value:"html5",children:"HTML5"}),n.jsx("option",{value:"steam",children:"Steam"})]})]}),(0,n.jsxs)("div",{className:"input-area grid",children:[(0,n.jsxs)("label",{className:"grid align-center",htmlFor:"isGameJam",children:[n.jsx(u.M,{iconName:"itch"}),n.jsx("span",{children:"Is Game Jam:"})]}),(0,n.jsxs)("select",{id:"isGameJam",name:"isGameJam",value:r.isGameJam,onChange:x,required:!0,children:[n.jsx("option",{value:"yes",children:"Yes"}),n.jsx("option",{value:"no",children:"No"})]})]}),(0,n.jsxs)("div",{className:"input-area grid",children:[(0,n.jsxs)("label",{className:"grid align-center",htmlFor:"screenshots",children:[n.jsx(u.M,{iconName:"images"}),n.jsx("span",{children:"Screenshots:"})]}),(0,n.jsxs)("div",{className:"upload-area grid",children:[r.screenshots.map((e,a)=>n.jsx("div",{children:n.jsx(m,{index:a,defaultImgUrl:e||"https://res.cloudinary.com/djzid7ags/image/upload/v1719002299/zmbzvexomb5jmawvpqzd.avif",folderName:"/games/screenshots",onUploaded:b})},a)),(0,n.jsxs)("div",{className:"amount-management grid",children:[(0,n.jsxs)("button",{type:"button",onClick:()=>(function(e){if(r.screenshots.length>1){let a=[...r.screenshots];a.splice(e,1),j("screenshots",a)}})(r.screenshots.length-1),disabled:1===r.screenshots.length,className:`flex column full-center ${1===r.screenshots.length?"disabled":""}`,children:[n.jsx(u.M,{iconName:"minus"}),n.jsx("span",{children:"Remove"})]}),(0,n.jsxs)("button",{type:"button",onClick:function(){r.screenshots.length<5&&j("screenshots",[...r.screenshots,""])},disabled:r.screenshots.length>=5,className:`flex column full-center ${r.screenshots.length>=5?"disabled":""}`,children:[n.jsx(u.M,{iconName:"plus"}),n.jsx("span",{children:"Add"})]})]})]})]}),(0,n.jsxs)("div",{className:"input-area grid",children:[(0,n.jsxs)("label",{className:"grid align-center",htmlFor:"icon",children:[n.jsx(u.M,{iconName:"images"}),n.jsx("span",{children:"Icon:"})]}),n.jsx("div",{className:"upload-area grid",children:n.jsx(m,{index:-1,defaultImgUrl:e.icon||"https://res.cloudinary.com/djzid7ags/image/upload/v1719002261/vohr6yravygkly4duxhv.avif",folderName:"/games/icons",onUploaded:function(e){j("icon",e.url)}})})]}),(0,n.jsxs)("section",{className:"form-actions flex row align-center justify-between",children:[n.jsx("button",{className:`flex row align-center ${!y||w?"disabled":""}`,type:"submit",disabled:!y||w,children:n.jsx("span",{children:"Send"})}),e._id&&n.jsx("button",{className:"flex row align-center",type:"button",onClick:N,children:n.jsx("span",{children:"Delete"})})]})]}),n.jsx(p,{game:r})]})}},6388:(e,a,l)=>{l.d(a,{N:()=>r});var n=l(7577);function r(e,a){let[l,r]=(0,n.useState)(e);return l}},3290:(e,a,l)=>{l.d(a,{h:()=>s});var n=l(3506);let r="game/";class s{async query(e={}){let a=new URLSearchParams(e).toString();return console.log(`Excepted request to backend: ${r}?${a}`),n.O.get(`${r}?${a}`)}async getById(e){return n.O.get(`${r}by-id/${e}`)}async getByName(e){return n.O.get(`${r}by-name/${e}`)}async checkNameAvailable(e){return n.O.get(`${r}check-name/${e}`)}async save(e){return e._id?n.O.put(`${r}update/${e._id}`,e):n.O.post(r+"add/",e)}async remove(e){return n.O.remove(`${r}delete/${e}`)}getDefaultFilter(){return{name:"",platform:"",genre:"",isGameJam:""}}getGenres(){return[{label:"Any",value:"",iconName:"globe"},{label:"Action",value:"action",iconName:"action"},{label:"Adventure",value:"adventure",iconName:"adventure"},{label:"Other",value:"other",iconName:"questionMark"},{label:"Platformer",value:"platformer",iconName:"platformer"},{label:"Puzzle",value:"puzzle",iconName:"puzzle"},{label:"Roguelike",value:"roguelike",iconName:"dice"}]}getPlatforms(){return[{label:"Any",value:"",iconName:"globe"},{label:"Android",value:"android",iconName:"android"},{label:"Browser",value:"html5",iconName:"html5"},{label:"Steam",value:"steam",iconName:"steam"}]}getGameJams(){return[{label:"Any",value:"",iconName:"globe"},{label:"Yes",value:"yes",iconName:"confirm"},{label:"No",value:"no",iconName:"cancel"}]}}}};