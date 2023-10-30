"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[1060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Packit CLI",date:new Date("2019-07-09T00:00:00.000Z"),chapter:!1,sidebar_position:8},o="Packit CLI",l={unversionedId:"cli/index",id:"cli/index",title:"Packit CLI",description:"Installation",source:"@site/docs/cli/index.md",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/cli/",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/cli/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Packit CLI",date:"2019-07-09T00:00:00.000Z",chapter:!1,sidebar_position:8},sidebar:"autogenerated",previous:{title:"Examples",permalink:"/docs/configuration/examples"},next:{title:"init",permalink:"/docs/cli/init"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Fedora Linux",id:"fedora-linux",level:3},{value:"Red Hat Enterprise Linux or CentOS Stream 9",id:"red-hat-enterprise-linux-or-centos-stream-9",level:3},{value:"From Fedora Copr",id:"from-fedora-copr",level:3},{value:"From PyPI",id:"from-pypi",level:3},{value:"From Source",id:"from-source",level:3},{value:"In a container",id:"in-a-container",level:3},{value:"Copr build",id:"copr-build",level:4},{value:"Koji build",id:"koji-build",level:4},{value:"Commands",id:"commands",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packit-cli"},"Packit CLI"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"There are various ways how to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packit/packit"},"packit CLI"),".\nPick what suits you the best:"),(0,r.kt)("h3",{id:"fedora-linux"},"Fedora Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo dnf install packit\n")),(0,r.kt)("h3",{id:"red-hat-enterprise-linux-or-centos-stream-9"},"Red Hat Enterprise Linux or CentOS Stream 9"),(0,r.kt)("p",null,"On RHEL/CentOS Stream 9 you can install RPM from ",(0,r.kt)("a",{parentName:"p",href:"https://fedoraproject.org/wiki/EPEL"},"EPEL")," repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo dnf install epel-release\n$ sudo dnf install packit\n")),(0,r.kt)("h3",{id:"from-fedora-copr"},"From Fedora Copr"),(0,r.kt)("p",null,"You can also help us test the latest development snapshot by installing packit\nbuilt from the main branch in Copr:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo dnf copr enable packit/packit-dev\n$ sudo dnf install packit\n$ # OR in case you have packit already installed from the Fedora repositories:\n$ sudo dnf upgrade packit\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We have multiple Copr repositories:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packit-releases")," \u2014 contains latest releases, even before they get pushed to\n",(0,r.kt)("em",{parentName:"li"},"stable")," as updates by Bodhi"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packit-dev")," \u2014 contains latest Packit (from the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packit-stable")," \u2014 contains Packit that runs on our production"))),(0,r.kt)("h3",{id:"from-pypi"},"From PyPI"),(0,r.kt)("p",null,"When you install packit with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),",\nsome of the dependencies need to be compiled from sources,\nfor example on Fedora you first need to install a few devel packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo dnf install gcc python3-devel libcurl-devel krb5-devel openssl-devel\n")),(0,r.kt)("p",null,"Packit on PyPI is available as ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/packitos"},"packitos"),"\nproject (packit at PyPI is something different)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ pip install --user packitos\n")),(0,r.kt)("h3",{id:"from-source"},"From Source"),(0,r.kt)("p",null,"... or installing it directly from GitHub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ pip install --user git+https://github.com/packit/packit\n")),(0,r.kt)("p",null,"You will need to install some devel packages first, see above section."),(0,r.kt)("h3",{id:"in-a-container"},"In a container"),(0,r.kt)("p",null,"If none of the above work for you, try running it in a container\nfrom our Fedora based image. It contains packit installed from ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch,\ni.e. the same you'd get by pip installing from GitHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman run -ti --rm -v $PWD:/src:z quay.io/packit/packit bash\n$ packit\nUsage: packit [OPTIONS] COMMAND [ARGS]...\n")),(0,r.kt)("p",null,"Depending on the command you want to perform you need to mount secrets and\nconfiguration files, like in the following examples:"),(0,r.kt)("h4",{id:"copr-build"},"Copr build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman run -ti --rm -v ~/.config/copr:/root/.config/copr:z -v $PWD:/src:z quay.io/packit/packit bash\n$ packit build in-copr\n")),(0,r.kt)("h4",{id:"koji-build"},"Koji build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman run -ti --rm -v ~/.ssh/:/root/.ssh:z -v $PWD:/src:z quay.io/packit/packit bash\n$ fkinit -u <Fedora Account username>\n$ packit build in-koji\n")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/build/"},"build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/create-update/"},"create-update")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/init/"},"init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/propose-downstream/"},"propose-downstream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/push-updates"},"push-updates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/srpm/"},"srpm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/status"},"status")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/sync-from-downstream/"},"sync-from-downstream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/validate-config"},"validate-config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/source-git/init"},"source-git init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/source-git/update-dist-git"},"source-git update-dist-git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/source-git/update-source-git"},"source-git update-source-git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/source-git/status"},"source-git status"))))}d.isMDXComponent=!0}}]);