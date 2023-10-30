"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||n;return a?r.createElement(d,o(o({ref:t},s),{},{components:a})):r.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={title:"May 2023",date:new Date("2023-05-10T06:41:12.000Z"),tags:[2023]},o=void 0,l={permalink:"/posts/weekly/May-2023",editUrl:"https://github.com/packit/packit.dev/tree/main/weekly/May-2023.md",source:"@site/weekly/May-2023.md",title:"May 2023",description:"Week 18 (May 4th - May 9th)",date:"2023-05-10T06:41:12.000Z",formattedDate:"May 10, 2023",tags:[{label:"2023",permalink:"/posts/weekly/tags/2023"}],readingTime:1.51,hasTruncateMarker:!1,authors:[],frontMatter:{title:"May 2023",date:"2023-05-10T06:41:12.000Z",tags:["2023"]},prevItem:{title:"June 2023",permalink:"/posts/weekly/June-2023"},nextItem:{title:"April 2023",permalink:"/posts/weekly/April-2023"}},c={authorsImageUrls:[]},p=[{value:"Week 18 (May 4th - May 9th)",id:"week-18-may-4th---may-9th",level:2},{value:"Week 19 (May 9th \u2013 May 15th)",id:"week-19-may-9th--may-15th",level:2},{value:"Week 20 (May 16th \u2013 May 22nd)",id:"week-20-may-16th--may-22nd",level:2},{value:"Week 21 (May 23rd \u2013 May 29th)",id:"week-21-may-23rd--may-29th",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"week-18-may-4th---may-9th"},"Week 18 (May 4th - May 9th)"),(0,i.kt)("p",null,"We have experienced issues with automatic Bodhi updates that we are investigating.\nIn case you miss a Bodhi update, you can\n",(0,i.kt)("a",{parentName:"p",href:"https://packit.dev/docs/fedora-releases-guide/#retriggering-2"},"retrigger the job")," via ",(0,i.kt)("inlineCode",{parentName:"p"},"/packit create-update"),"\ncomment in a dist-git pull request.\nBesides that, during this short week (another Czech Republic public holiday) we didn't manage to implement\nany significant new features."),(0,i.kt)("h2",{id:"week-19-may-9th--may-15th"},"Week 19 (May 9th \u2013 May 15th)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Packit now doesn't react to its own comments on Pagure and GitLab (on GitHub, this was already implemented).\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2048"},"packit-service#2048"),")")),(0,i.kt)("h2",{id:"week-20-may-16th--may-22nd"},"Week 20 (May 16th \u2013 May 22nd)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have implemented a denylisting mechanism allowing us to denylist namespaces/projects to prevent misuse of our service. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2046"},"packit-service#2046"),")"),(0,i.kt)("li",{parentName:"ul"},"Packit will now additionally require for each test job requiring build a build job definition to be present in the Packit configuration file. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2012"},"packit-service#2012"),")"),(0,i.kt)("li",{parentName:"ul"},"Packit now checks whether the configured architecture for the test target is supported by Testing Farm and in case it's not supported, Packit doesn't submit these test requests. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2053"},"packit-service#2053"),")")),(0,i.kt)("h2",{id:"week-21-may-23rd--may-29th"},"Week 21 (May 23rd \u2013 May 29th)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unsuccessful Image Builder requests now provide error details so you can fix the Image configuration. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1981"},"packit#1981"),")"),(0,i.kt)("li",{parentName:"ul"},"Copr projects created by Packit will not follow the Fedora branching from now. This decision has been made to lower the load on Copr from the temporary Copr projects created, mainly, for the PR builds. If you are releasing your packages to the Copr, please use the new setting ",(0,i.kt)("inlineCode",{parentName:"li"},"follow_fedora_branching"),".\nAlready existing projects are not affected by this change and it is also not enforced with the custom Copr repositories. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1970"},"packit#1970"),")"),(0,i.kt)("li",{parentName:"ul"},"Additional artifact(s) passed as ",(0,i.kt)("inlineCode",{parentName:"li"},"artifacts")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"tf_extra_params")," dictionary will be now combined with the artifact passed by Packit instead of rewriting it. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit-service/pull/2056"},"packit-service#2056"),")"),(0,i.kt)("li",{parentName:"ul"},"Specfile library now handles multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"%changelog")," sections. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/specfile/pull/230"},"specfile#230"),")")))}m.isMDXComponent=!0}}]);