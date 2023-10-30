"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[4518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Working on the next major RHEL release, in your upstream repo",date:new Date("2020-10-04T00:00:00.000Z"),authors:"ttomecek",tags:["downstream"]},i=void 0,s={permalink:"/posts/fedora-eln",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/fedora-eln/index.md",source:"@site/posts/fedora-eln/index.md",title:"Working on the next major RHEL release, in your upstream repo",description:"Fedora EL Ni\xf1o (ELN) is such an",date:"2020-10-04T00:00:00.000Z",formattedDate:"October 4, 2020",tags:[{label:"downstream",permalink:"/posts/tags/downstream"}],readingTime:2.29,hasTruncateMarker:!0,authors:[{name:"Tom\xe1\u0161 Tome\u010dek",email:"ttomecek@redhat.com",url:"https://github.com/TomasTomecek",imageURL:"https://github.com/TomasTomecek.png",key:"ttomecek"}],frontMatter:{title:"Working on the next major RHEL release, in your upstream repo",date:"2020-10-04T00:00:00.000Z",authors:"ttomecek",tags:["downstream"]},prevItem:{title:"2021 in Numbers",permalink:"/posts/2021-in-numbers"}},c={authorsImageUrls:[void 0]},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/eln/"},"Fedora EL Ni\xf1o")," (ELN) is such an\nawesome idea. It enables building rawhide packages in two distinct buildroots:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the standard Fedora Rawhide buildroot and"),(0,o.kt)("li",{parentName:"ol"},"a second one, which mimics Red Hat Enterprise Linux")),(0,o.kt)("p",null,"This way you can make sure that your new upstream release builds fine in the\nnext RHEL."))}m.isMDXComponent=!0}}]);