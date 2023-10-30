"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[1923],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(a),c=l,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},56750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={title:"Packit Service deployment improvements",authors:"sakalosj"},i=void 0,o={unversionedId:"deployment/deployment-improvements/index",id:"deployment/deployment-improvements/index",title:"Packit Service deployment improvements",description:"Motivation",source:"@site/research/deployment/deployment-improvements/index.md",sourceDirName:"deployment/deployment-improvements",slug:"/deployment/deployment-improvements/",permalink:"/research/deployment/deployment-improvements/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/deployment/deployment-improvements/index.md",tags:[],version:"current",frontMatter:{title:"Packit Service deployment improvements",authors:"sakalosj"},sidebar:"autogenerated",previous:{title:"Deploy a testing instance",permalink:"/research/deployment/deploy-packit-pr"},next:{title:"Distributed workers",permalink:"/research/deployment/distributed-workers/"}},p={},m=[{value:"Motivation",id:"motivation",level:2},{value:"Current Flow",id:"current-flow",level:2},{value:"Research",id:"research",level:2},{value:"Installation source",id:"installation-source",level:3},{value:"Image build approach",id:"image-build-approach",level:3},{value:"High level build flow strategies",id:"high-level-build-flow-strategies",level:3},{value:"OpenShift vs. Public service",id:"openshift-vs-public-service",level:4},{value:"OpenShift",id:"openshift",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Discussion output",id:"discussion-output",level:2}],u={toc:m},s="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"motivation"},"Motivation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"docker image related dependencies -\npackit image which is providing dependencies for packit-service image, adding unwanted complexity and delays in deployment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"dependencies on fedora rpm release -"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for packit-service - deployment depends on rpm deployment, which can be quite long (to fix typo you have to go through whole rpm deployment process)"),(0,l.kt)("li",{parentName:"ul"},"for 3rd party packages - we are facing issues when package was not released as rpm for all required OS versions")))),(0,l.kt)("p",null,"Areas to be covered:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"how we handle dependencies in code(rpm vs github)"),(0,l.kt)("li",{parentName:"ul"},"how we handle container image dependencies (s2i vs base_image-final_image)"),(0,l.kt)("li",{parentName:"ul"},"how we will handle overall flow")),(0,l.kt)("h2",{id:"current-flow"},"Current Flow"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"new commit in master/stable branch"),(0,l.kt)("li",{parentName:"ol"},"image build is automatically triggered in dockerhub. There is some delay, but it can be triggered manually"),(0,l.kt)("li",{parentName:"ol"},"new image is pulled to OpenShift via OpenShift cron job and pods are rebuild:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"prod every Sunday at 2:00"),(0,l.kt)("li",{parentName:"ul"},"stg every hour")))),(0,l.kt)("h2",{id:"research"},"Research"),(0,l.kt)("h3",{id:"installation-source"},"Installation source"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"github"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pros:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"current changes in other projects are always in place - useful especially for stg branch"))),(0,l.kt)("li",{parentName:"ul"},"cons:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Handling of dependencies is harder (we need to mix ",(0,l.kt)("inlineCode",{parentName:"li"},"rpm")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"PyPI")," versions)."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rpm:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pros:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"All dependencies are installed similarly and automatically via ",(0,l.kt)("inlineCode",{parentName:"li"},"rpm"),"."))),(0,l.kt)("li",{parentName:"ul"},"cons:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"very long deployment process")))))),(0,l.kt)("h3",{id:"image-build-approach"},"Image build approach"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"s2i: Source-to-Image (S2I) is a tool for building reproducible, Docker-formatted container images. It produces ready-to-run images by injecting application source into a container image and assembling a new image. The new image incorporates the base image (the builder) and built source and is ready to use with the docker run command. S2I supports incremental builds, which re-use previously downloaded dependencies, previously built artifacts, etc."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pros:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"separating code and image development - probably advantage in bigger projects where development and devops is separated"))),(0,l.kt)("li",{parentName:"ul"},"cons:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"not copying .git to image, using default paths (/opt/app/src), maybe others which can probably require our scripts rework"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"normal image build (eg. ",(0,l.kt)("inlineCode",{parentName:"p"},"docker build ..."),"):"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pros:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"already in use in our environment"),(0,l.kt)("li",{parentName:"ul"},"no need to implement additional tool"),(0,l.kt)("li",{parentName:"ul"},"clean approach")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"image name"),(0,l.kt)("th",{parentName:"tr",align:null},"build time"),(0,l.kt)("th",{parentName:"tr",align:null},"size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps_normal_github_base"),(0,l.kt)("td",{parentName:"tr",align:null},"4m42.531s"),(0,l.kt)("td",{parentName:"tr",align:null},"797MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps_normal_github_final"),(0,l.kt)("td",{parentName:"tr",align:null},"0m12.925s"),(0,l.kt)("td",{parentName:"tr",align:null},"797MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"----------------------------------"),(0,l.kt)("td",{parentName:"tr",align:null},"-----------"),(0,l.kt)("td",{parentName:"tr",align:null},"------------")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps_normal_rpm_base"),(0,l.kt)("td",{parentName:"tr",align:null},"5m8.026s"),(0,l.kt)("td",{parentName:"tr",align:null},"804MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps_normal_rpm_final"),(0,l.kt)("td",{parentName:"tr",align:null},"0m15.766s"),(0,l.kt)("td",{parentName:"tr",align:null},"804MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"----------------------------------"),(0,l.kt)("td",{parentName:"tr",align:null},"-----------"),(0,l.kt)("td",{parentName:"tr",align:null},"------------")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps_s2i_github_base"),(0,l.kt)("td",{parentName:"tr",align:null},"4m38.620s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.12GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ps_s2i_github_final"),(0,l.kt)("td",{parentName:"tr",align:null},"0m10.715s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.12GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"----------------------------------"),(0,l.kt)("td",{parentName:"tr",align:null},"-----------"),(0,l.kt)("td",{parentName:"tr",align:null},"------------")))),(0,l.kt)("h3",{id:"high-level-build-flow-strategies"},"High level build flow strategies"),(0,l.kt)("h4",{id:"openshift-vs-public-service"},"OpenShift vs. Public service"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OpenShift:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pros:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"flexible"),(0,l.kt)("li",{parentName:"ul"},"no waiting in queue"))),(0,l.kt)("li",{parentName:"ul"},"cons:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"additional maintenance"),(0,l.kt)("li",{parentName:"ul"},"additional resources = additional costs/failures because of resource limit"))))),(0,l.kt)("li",{parentName:"ul"},"Public service:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pros:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"our current approach - no radical changes required"),(0,l.kt)("li",{parentName:"ul"},"simple and straightforward"),(0,l.kt)("li",{parentName:"ul"},"free"))),(0,l.kt)("li",{parentName:"ul"},"cons:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dependency on external service"),(0,l.kt)("li",{parentName:"ul"},"long queue time in case of service issue/high load")))))),(0,l.kt)("h4",{id:"openshift"},"OpenShift"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source-to-Image - (",(0,l.kt)("inlineCode",{parentName:"li"},"sourceStrategy")," in OC configuration) is using s2i tool for image deployment")),(0,l.kt)("p",null,"Links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build"},"s2i details"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/dev_guide/builds/build_strategies.html#source-to-image-strategy-options"},"s2i strategy options"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.openshift.com/blog/create-s2i-builder-image"},"s2i tool blog"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Image Stream - current configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Custom Build - need more details"))),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source-to-image (S2I) - no performance improvements, bigger image"),(0,l.kt)("li",{parentName:"ul"},"RPM vs github:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"from performance perspective basically same results"),(0,l.kt)("li",{parentName:"ul"},"github repos should not have issues with OS version - will make deployment easier"))),(0,l.kt)("li",{parentName:"ul"},"splitting image to base + final, will improve build times")),(0,l.kt)("h2",{id:"discussion-output"},"Discussion output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitHub will be used for installing internal projects",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Dependencies have to be installed via RPM's for security reasons"),(0,l.kt)("li",{parentName:"ul"},"There are 2 sources of dependencies - spec file and setup.cfg - both have to be taken into account"))),(0,l.kt)("li",{parentName:"ul"},"Deployment will use the same branch (master/stable) for all internal projects")))}d.isMDXComponent=!0}}]);