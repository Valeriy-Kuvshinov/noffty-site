(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{3943:function(t,e,n){Promise.resolve().then(n.bind(n,6370))},6370:function(t,e,n){"use strict";n.d(e,{ImageContainer:function(){return u}});var a=n(7437),c=n(6648),i=n(2262),o=n(2265);function u(t){let{src:e,alt:n,style:u,className:l,width:r,height:h,onClick:s}=t,[d,f]=(0,o.useState)({width:r||100,height:h||100}),[w,_]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{if(e&&(!r||!h)){let t=new window.Image;t.onload=()=>{f({width:t.width,height:t.height})},t.src=e}},[e,r,h]),e)?(0,a.jsx)("div",{className:"image-container flex w-100 ".concat(l),style:u,onClick:s,children:(0,a.jsx)(c.default,{loader:i.default,src:e,alt:n,width:d.width,height:d.height,className:"w-h-100 ".concat(w?"opacity-100":"opacity-0"),onLoad:()=>_(!0),placeholder:"blur",blurDataURL:(0,i.default)({src:e,width:25,quality:1})})}):null}},2262:function(t,e,n){"use strict";function a(t){let{src:e,width:n,quality:a}=t,[c,i]=e.split("/upload/");return"".concat(c,"/upload/").concat(["f_auto","c_limit","w_".concat(n),"q_".concat(a||"auto")].join(","),"/").concat(i)}n.r(e),n.d(e,{default:function(){return a}})}},function(t){t.O(0,[648,971,23,744],function(){return t(t.s=3943)}),_N_E=t.O()}]);