"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[8521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"Packit Service"},i="Packit Service deployment specifics",c={unversionedId:"specifics/packit-service",id:"specifics/packit-service",title:"Packit Service",description:"Staging instance",source:"@site/deployment/specifics/packit-service.md",sourceDirName:"specifics",slug:"/specifics/packit-service",permalink:"/deployment/specifics/packit-service",draft:!1,editUrl:"https://github.com/packit/deployment/tree/main/docs/deployment/specifics/packit-service.md",tags:[],version:"current",frontMatter:{title:"Packit Service"},sidebar:"autogenerated",previous:{title:"Fedora Source-git",permalink:"/deployment/specifics/fedora-source-git"},next:{title:"Testing Changes",permalink:"/deployment/testing-changes"}},s={},l=[{value:"Staging instance",id:"staging-instance",level:2},{value:"Repository cache",id:"repository-cache",level:2},{value:"How to add a repository to the cache",id:"how-to-add-a-repository-to-the-cache",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packit-service-deployment-specifics"},"Packit Service deployment specifics"),(0,r.kt)("h2",{id:"staging-instance"},"Staging instance"),(0,r.kt)("p",null,"Runs on the same cluster as production, but there are a few slight differences."),(0,r.kt)("p",null,"There are fewer workers and some components (namely ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),") have less resources."),(0,r.kt)("p",null,"The namespace has a default\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/latest/nodes/scheduling/nodes-scheduler-taints-tolerations.html"},"taint toleration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'scheduler.alpha.kubernetes.io/defaultTolerations:\n  [\n    {\n      "key": "environment",\n      "operator": "Equal",\n      "value": "stage",\n      "effect": "NoSchedule",\n    },\n  ]\n')),(0,r.kt)("p",null,"(see ",(0,r.kt)("inlineCode",{parentName:"p"},"oc describe namespace packit-stg"),") so that the pods can run also on nodes\nwith ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/spot"},"AWS Spot Instances"),".\nIf you want to explicitly request those nodes for some component (workers),\nyou need to add a\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/latest/nodes/scheduling/nodes-scheduler-node-selectors.html"},"node selector"),"\nto its ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nodeSelector:\n  env: stage\n")),(0,r.kt)("p",null,"We don't do that by default (as of Nov 30th '22) because those instances\nseem to be too unreliable even for staging workers."),(0,r.kt)("h2",{id:"repository-cache"},"Repository cache"),(0,r.kt)("p",null,"To shorten the cloning time and making it possible to clone big repositories\n(like kernel), the service supports caching git repositories."),(0,r.kt)("p",null,"To make it work, you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure the cache in the service config:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Path of the cache (mounted as a persistent volume in our case)\nrepository_cache: /repository-cache\n# The maintenance of the cache (adding, updating) is done externally,\n# not in the packit/packit-service code.\nadd_repositories_to_repository_cache: false\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Since our infrastructure does not support shared volumes, we need to attach\none volume with a cache to each worker and one to each corresponding sandbox\npod."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the case of workers, this is done during the deployment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For sandboxes, there is an option in the service config (the environment\nvariable needs to differ for each worker and is set during startup of the\nworker):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"command_handler_pvc_volume_specs:\n  - path: /repository-cache\n    pvc_from_env: SANDCASTLE_REPOSITORY_CACHE_VOLUME\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And finally, add some repositories to the cache."))),(0,r.kt)("h3",{id:"how-to-add-a-repository-to-the-cache"},"How to add a repository to the cache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone/copy the git repository to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/repository-cache")," directory.\n(Each project as a subdirectory.)"),(0,r.kt)("li",{parentName:"ul"},"Be aware, that all the volumes, both the ones used by workers and the ones\nused by sandbox pods, need to have the repository there."),(0,r.kt)("li",{parentName:"ul"},"For small projects, you can clone the repository from the pod's shell."),(0,r.kt)("li",{parentName:"ul"},"In the case of larger repositories (like kernel), you can clone the\nrepository on your localhost and use ",(0,r.kt)("inlineCode",{parentName:"li"},"oc rsync")," to copy the repository to\nthe volume."),(0,r.kt)("li",{parentName:"ul"},"For the worker's volume, you can ",(0,r.kt)("inlineCode",{parentName:"li"},"oc rsh")," to the worker pod to get to the\nvolume."),(0,r.kt)("li",{parentName:"ul"},"To populate volumes attached to sandbox pods, you can wait for some action\nto be executed or create a new pod (e.g.\n",(0,r.kt)("inlineCode",{parentName:"li"},"oc create -f ./openshift/repository-cache-filler.yml"),"\nusing and adjusting the name of\nthe volume in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/packit/deployment/blob/main/openshift/repository-cache-filler.yml"},"this definition"),")\nwith the volume attached. This will block the creation of the sandbox pods\nbecause the volume can't be mounted from multiple pods, so don't forget to\ndelete the pod after you finished populating the cache.")))}u.isMDXComponent=!0}}]);