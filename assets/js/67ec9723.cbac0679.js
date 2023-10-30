"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"(Tests) job triggering improvements",date:new Date("2023-07-11T06:46:18.000Z"),authors:"lbarczio",tags:["configuration"]},i=void 0,s={permalink:"/posts/manual-triggering",editUrl:"https://github.com/packit/packit.dev/tree/main/posts/manual-triggering/index.md",source:"@site/posts/manual-triggering/index.md",title:"(Tests) job triggering improvements",description:"Recently, we received multiple contributions from the Strimzi team, specifically Jakub Stejskal",date:"2023-07-11T06:46:18.000Z",formattedDate:"July 11, 2023",tags:[{label:"configuration",permalink:"/posts/tags/configuration"}],readingTime:2.88,hasTruncateMarker:!0,authors:[{name:"Laura Barcziov\xe1",email:"lbarczio@redhat.com",url:"https://github.com/lbarcziova",imageURL:"https://github.com/lbarcziova.png",key:"lbarczio"}],frontMatter:{title:"(Tests) job triggering improvements",date:"2023-07-11T06:46:18.000Z",authors:"lbarczio",tags:["configuration"]},prevItem:{title:"Call for volunteers: help to test us the release syncing using staging instance",permalink:"/posts/verify-sync-release-volunteers"},nextItem:{title:"Introducing monorepository support",permalink:"/posts/monorepos"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recently, we received multiple contributions from the Strimzi team, specifically ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Frawless"},"Jakub Stejskal"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kornys"},"David Kornel"),",\nfor the functionality of manual triggering of jobs and other related improvements, mostly focusing on the testing\nUX. We are very happy about these and would like to showcase the results of their awesome contributions."))}m.isMDXComponent=!0}}]);