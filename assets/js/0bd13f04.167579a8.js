"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[4986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||k[u]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Week 38 in Packit",date:new Date("2023-09-25T00:00:00.000Z"),tags:["2023-September",2023,"September"]},o=void 0,p={permalink:"/posts/weekly/2023/week-38",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/2023/week-38.md",source:"@site/weekly/2023/week-38.md",title:"Week 38 in Packit",description:"Week 38 (September 19th \u2013 September 25th)",date:"2023-09-25T00:00:00.000Z",formattedDate:"September 25, 2023",tags:[{label:"2023-September",permalink:"/posts/weekly/tags/2023-september"},{label:"2023",permalink:"/posts/weekly/tags/2023"},{label:"September",permalink:"/posts/weekly/tags/september"}],readingTime:.395,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Week 38 in Packit",date:"2023-09-25T00:00:00.000Z",tags:["2023-September","2023","September"]},prevItem:{title:"Week 39 in Packit",permalink:"/posts/weekly/2023/week-39"},nextItem:{title:"Week 37 in Packit",permalink:"/posts/weekly/2023/week-37"}},l={authorsImageUrls:[]},c=[{value:"Week 38 (September 19th \u2013 September 25th)",id:"week-38-september-19th--september-25th",level:2}],s={toc:c},m="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"week-38-september-19th--september-25th"},"Week 38 (September 19th \u2013 September 25th)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As part of the effort of implementing release syncing for CentOS Stream,\nPackit now supports the ",(0,a.kt)("inlineCode",{parentName:"li"},"pkg_tool")," option in the config\n(at the top-level or with specific packages when using the monorepo syntax).\nThis option can be used for switching between ",(0,a.kt)("inlineCode",{parentName:"li"},"fedpkg")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"centpkg"),".\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2085"},"packit#2085"),")"),(0,a.kt)("li",{parentName:"ul"},"When updating the ",(0,a.kt)("inlineCode",{parentName:"li"},"Version")," tag during ",(0,a.kt)("inlineCode",{parentName:"li"},"propose_downstream")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"pull_from_upstream"),",\nPackit now tries to update referenced macros (if any) rather than overwriting the references.\n(",(0,a.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/2087"},"packit#2087"),")")))}k.isMDXComponent=!0}}]);