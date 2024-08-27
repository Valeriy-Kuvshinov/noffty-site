(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8216:function(e,t,n){Promise.resolve().then(n.bind(n,3934))},3934:function(e,t,n){"use strict";n.d(t,{ContactForm:function(){return g}});var r=n(7437),a=n(1907),i=n(2265),o=n(1635),l=n(5682),c=n(6975),s=n(4021),u=n(5456),d=n(6370),h=n(1101),m=n(4148);function g(e){let{initialValues:t}=e,n=(0,i.useRef)(null),{recaptchaSiteKey:g}=(0,s.n)();async function f(e){return o.R.post("mail/contact",e)}let{values:p,errors:v,validateField:x,handleChange:j,handleSubmit:y,resetForm:w}=(0,l.c)(t,{name:{required:!0,minLength:3,noDigits:!0,pattern:/[\s'.-]+/},email:{required:!0,email:!0,minLength:5},title:{required:!0,minLength:3,pattern:/[\s.\-!?']+/},message:{required:!0,minLength:15,pattern:/[\s.\-!?@#$',*;:]+/}},async e=>{var t,r;let a=await (null===(t=n.current)||void 0===t?void 0:t.executeAsync()),i={...e,recaptchaToken:a||""};try{await f(i),w(),null===(r=n.current)||void 0===r||r.reset()}catch(e){console.error("Failed to send contact mail:",e)}}),b=p.name&&p.email&&p.title&&p.message,C=Object.values(v).some(e=>e),{value:k,handleMouseEnter:L,handleMouseLeave:q}=(0,c.J)({defaultValue:"https://res.cloudinary.com/djzid7ags/image/upload/v1718830337/g373afizfrrnplfms5rf.avif",hoverValue:"https://res.cloudinary.com/djzid7ags/image/upload/v1718830337/ig5n5ytdmnrh5wopdajt.avif",condition:C});return(0,r.jsxs)("form",{className:"grid layout-row w-100",onSubmit:y,children:[(0,r.jsx)(h.o,{label:"Name*",type:"text",name:"name",svg:"person",maxLength:30,value:p.name,onChange:j,placeholder:"Your name",error:v.name,onBlur:()=>x("name",p.name)}),(0,r.jsx)(h.o,{label:"Email*",type:"email",name:"email",svg:"mail",maxLength:50,value:p.email,onChange:j,placeholder:"Your email",error:v.email,onBlur:()=>x("email",p.email)}),(0,r.jsx)(h.o,{label:"Title*",type:"text",name:"title",svg:"title",maxLength:50,value:p.title,onChange:j,placeholder:"Asking about...",error:v.title,onBlur:()=>x("title",p.title)}),(0,r.jsxs)("div",{className:"input-area grid",children:[(0,r.jsxs)("label",{className:"grid align-center",htmlFor:"requestType",children:[(0,r.jsx)(m.M,{iconName:"info"}),(0,r.jsx)("span",{children:"Subject"})]}),(0,r.jsxs)("select",{id:"requestType",name:"requestType",value:p.requestType,onChange:j,children:[(0,r.jsx)("option",{value:"Q&A",children:"Q&A"}),(0,r.jsx)("option",{value:"Suggestion",children:"Suggestion"}),(0,r.jsx)("option",{value:"Bug Report",children:"Bug Report"}),(0,r.jsx)("option",{value:"Volunteering",children:"Volunteering"}),(0,r.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,r.jsx)(h.o,{label:"Message*",type:"textarea",name:"message",svg:"message",maxLength:600,value:p.message,onChange:j,placeholder:"Yo, I got a question...",error:v.message,onBlur:()=>x("message",p.message)}),(0,r.jsxs)("section",{className:"form-actions flex row align-center justify-between",children:[(0,r.jsxs)("button",{className:"flex row align-center ".concat(!b||C?"disabled":""),type:"submit",disabled:!b||C,onMouseEnter:L,onMouseLeave:q,children:[(0,r.jsx)(d.ImageContainer,{src:k,alt:"Submit"}),(0,r.jsx)("span",{children:"Send"})]}),(0,r.jsx)(u.d,{})]}),(0,r.jsx)(a.Z,{sitekey:g,size:"invisible",ref:n})]})}},1101:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(7437),a=n(4148);function i(e){var t;let{label:n,svg:i,type:o,name:l,value:c,onChange:s,placeholder:u,maxLength:d,error:h,onBlur:m,validationOptions:g}=e;return(0,r.jsxs)("div",{className:"input-area grid ".concat(h?"error":""," h-fit"),children:[(0,r.jsxs)("label",{className:"grid align-center",htmlFor:l,children:[(0,r.jsx)(a.M,{iconName:i}),(0,r.jsx)("span",{children:n}),h&&(0,r.jsx)("p",{title:h,children:h})]}),"textarea"===o?(0,r.jsx)("textarea",{id:l,name:l,value:c,onChange:s,onBlur:m,placeholder:u,maxLength:d,required:null==g?void 0:g.required}):(0,r.jsx)("input",{type:o,id:l,name:l,value:c,onChange:s,onBlur:m,placeholder:u,maxLength:d,required:null==g?void 0:g.required,pattern:null==g?void 0:null===(t=g.pattern)||void 0===t?void 0:t.source})]})}},5456:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(7437),a=n(6370);function i(){return(0,r.jsxs)("div",{className:"recaptcha-branding grid align-center",children:[(0,r.jsx)(a.ImageContainer,{src:"https://res.cloudinary.com/djzid7ags/image/upload/v1718535143/hmxw916ycqxrrsgsatsu.avif",alt:"recaptcha logo"}),(0,r.jsx)("span",{children:"Protected by reCAPTCHA"}),(0,r.jsxs)("div",{className:"links flex row justify-between",children:[(0,r.jsx)("a",{href:"https://policies.google.com/privacy",children:"Privacy"}),(0,r.jsx)("a",{href:"https://policies.google.com/terms",children:"Terms"})]})]})}},6370:function(e,t,n){"use strict";n.d(t,{ImageContainer:function(){return l}});var r=n(7437),a=n(6648),i=n(2265);function o(e){let{src:t,width:n,quality:r}=e,[a,i]=t.split("/upload/");return"".concat(a,"/upload/").concat(["f_auto","c_limit","w_".concat(n),"q_".concat(r||"auto")].join(","),"/").concat(i)}function l(e){let{src:t,alt:n,style:l,className:c,width:s,height:u,onClick:d}=e,[h,m]=(0,i.useState)({width:s||100,height:u||100}),[g,f]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{if(t&&(!s||!u)){let e=new window.Image;e.onload=()=>{m({width:e.width,height:e.height})},e.src=t}},[t,s,u]),t)?(0,r.jsx)("div",{className:"image-container flex w-100 ".concat(c),style:l,onClick:d,children:(0,r.jsx)(a.default,{loader:o,src:t,alt:n,width:h.width,height:h.height,className:"w-h-100 ".concat(g?"opacity-100":"opacity-0"),onLoad:()=>f(!0),placeholder:"blur",blurDataURL:o({src:t,width:25,quality:1})})}):null}},4021:function(e,t,n){"use strict";n.d(t,{g:function(){return l},n:function(){return o}});var r=n(7437),a=n(2265);let i=(0,a.createContext)(null);function o(){let e=(0,a.useContext)(i);if(!e)throw Error("useApiKeys must be used within an ApiProvider");return e}function l(e){let{children:t,apiKeys:n}=e;return(0,r.jsx)(i.Provider,{value:n,children:t})}},5682:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var r=n(2265);function a(e,t,n){let[a,i]=(0,r.useState)(e),[o,l]=(0,r.useState)({});function c(e,n){let r=t[e];if(!r)return;let a=null;if(!r.required&&""===n.trim()){l(t=>({...t,[e]:null}));return}for(let e of[{check:r.required,func:()=>""===n.trim()?"Cannot be left empty":null},{check:r.minLength,func:()=>{var e;return e=r.minLength,n.length<e?"Needs ".concat(e," characters at least"):null}},{check:r.noLetters,func:()=>/[a-zA-Z]/.test(n)?"Cannot insert letters":null},{check:r.noDigits,func:()=>/\d/.test(n)?"Cannot insert digits":null},{check:r.email,func:()=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)?null:"Invalid email format"},{check:r.link,func:()=>/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/[^\s]*)?$/.test(n)?null:"Invalid URL format"},{check:r.pattern,func:()=>RegExp("^[a-zA-Z0-9"+r.pattern.source+"]*$").test(n)?null:"Invalid characters used"}])if(!a&&e.check&&(a=e.func()))break;l(t=>({...t,[e]:a}))}async function s(e){e.preventDefault(),n(a)}return{values:a,errors:o,setErrors:l,validateField:c,handleChange:function(e){var n;let{name:r,value:a}=e.target;i(e=>({...e,[r]:a})),"select"!==e.target.tagName.toLowerCase()&&(null===(n=t[r])||void 0===n?void 0:n.required)&&c(r,a)},setFieldValue:function(e,n){var r;i(t=>({...t,[e]:n})),(null===(r=t[e])||void 0===r?void 0:r.required)&&c(e,n.toString())},handleSubmit:s,resetForm:function(){i(e),l({})}}}},6975:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(2265);function a(e){let{defaultValue:t,hoverValue:n,condition:a}=e,[i,o]=(0,r.useState)(t);return{value:i,handleMouseEnter:function(){a||o(n)},handleMouseLeave:function(){o(t)}}}},1635:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});let r={get(e,t){let n=t?"?".concat(Object.entries(t).map(e=>{let[t,n]=e;return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))}).join("&")):"";return a("GET","".concat(e).concat(n))},post:(e,t)=>a("POST",e,t),put:(e,t)=>a("PUT",e,t),remove:(e,t)=>t?a("DELETE",e,t):a("DELETE",e)};async function a(e,t,n){let r="".concat("https://noffty.com/api/").concat(t),a={method:e,headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"}};"GET"!==e&&n&&(a.body=JSON.stringify(n));try{let e=await fetch(r,a),t=await e.json();if(!e.ok)throw Error(t.message||"An unknown error occurred");return t}catch(e){throw console.error("HTTP Service Error: ",e),e}}}},function(e){e.O(0,[648,907,148,971,23,744],function(){return e(e.s=8216)}),_N_E=e.O()}]);