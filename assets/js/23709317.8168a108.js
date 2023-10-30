"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[1820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(h,i(i({ref:t},s),{},{components:r})):o.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"Build current checkout locally",date:new Date("2021-01-27T22:59:59.000Z"),sidebar_position:40},i="Build your current checkout locally",l={unversionedId:"work-with-source-git/build-locally",id:"work-with-source-git/build-locally",title:"Build current checkout locally",description:"Once you are comfortable with your local changes, you can build them before",source:"@site/source-git/work-with-source-git/build-locally.md",sourceDirName:"work-with-source-git",slug:"/work-with-source-git/build-locally",permalink:"/source-git/work-with-source-git/build-locally",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/source-git/work-with-source-git/build-locally.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Build current checkout locally",date:"2021-01-27T22:59:59.000Z",sidebar_position:40},sidebar:"autogenerated",previous:{title:"Controlling patch generation",permalink:"/source-git/work-with-source-git/control-patch-generation"},next:{title:"Propose your source-git content to dist-git",permalink:"/source-git/work-with-source-git/propose-to-dist-git"}},c={},u=[{value:"How Packit generates an SRPM from a source-git repo?",id:"how-packit-generates-an-srpm-from-a-source-git-repo",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build-your-current-checkout-locally"},"Build your current checkout locally"),(0,n.kt)("p",null,"Once you are comfortable with your local changes, you can build them before\npushing them out. Just make sure that all code changes are committed, otherwise\nPackit won't be able to create patch files out of them."),(0,n.kt)("p",null,"We are going to use Packit to achieve such a thing, so please make sure you have it\n",(0,n.kt)("a",{parentName:"p",href:"/docs/guide#have-packit-tooling-installed-locally"},"installed locally"),"."),(0,n.kt)("p",null,"The command to create source RPMs is called ",(0,n.kt)("inlineCode",{parentName:"p"},"srpm")," and that's how you can create one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ packit srpm\nSRPM: /home/tt/g/systemd/systemd-stable/systemd-247.1-2.g68d22b32.fc33.src.rpm\n")),(0,n.kt)("p",null,"Our changes worked! We can try building them, either in our local environment\nusing Packit - this implies that all build dependencies are installed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ packit build locally\n")),(0,n.kt)("p",null,"...or in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rpm-software-management/mock"},"mock"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mock --rebuild -r fedora-rawhide-x86_64 ./systemd-247.1-2.g68d22b32.fc33.src.rpm\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-r")," allows you ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/upstream/copr_build#available-copr-build-targets"},"to pick a chroot"),"\nof your choice and these are exactly the same which you can specify for builds\nin your ",(0,n.kt)("inlineCode",{parentName:"p"},"packit.yaml"),"."),(0,n.kt)("p",null,"If the build is passing locally, it may be time to ",(0,n.kt)("a",{parentName:"p",href:"propose-to-dist-git"},"propose your changes to\ndist-git"),"."),(0,n.kt)("h2",{id:"how-packit-generates-an-srpm-from-a-source-git-repo"},"How Packit generates an SRPM from a source-git repo?"),(0,n.kt)("p",null,"These are the steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download archive specified in specfile's Source directive."),(0,n.kt)("li",{parentName:"ol"},"Create patch files from commits on top off ",(0,n.kt)("inlineCode",{parentName:"li"},"upstream_ref")," where necessary."),(0,n.kt)("li",{parentName:"ol"},"Bump release in the spec file."),(0,n.kt)("li",{parentName:"ol"},"Generate new changelog entry in the spec file."),(0,n.kt)("li",{parentName:"ol"},"Run rpmbuild and set paths so that rpmbuild can find patches, spec files,\narchive and additional sources.")))}d.isMDXComponent=!0}}]);