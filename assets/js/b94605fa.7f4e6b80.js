"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||r;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Controlling patch generation",date:new Date("2021-08-26T11:11:11.000Z"),sidebar_position:30},o="Controlling patch generation",l={unversionedId:"work-with-source-git/control-patch-generation",id:"work-with-source-git/control-patch-generation",title:"Controlling patch generation",description:"When syncing the content of a source-git repo to dist-git, distribution",source:"@site/source-git/work-with-source-git/control-patch-generation.md",sourceDirName:"work-with-source-git",slug:"/work-with-source-git/control-patch-generation",permalink:"/source-git/work-with-source-git/control-patch-generation",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/source-git/work-with-source-git/control-patch-generation.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Controlling patch generation",date:"2021-08-26T11:11:11.000Z",sidebar_position:30},sidebar:"autogenerated",previous:{title:"Pull fixes from the upstream",permalink:"/source-git/work-with-source-git/pull-upstream-fixes"},next:{title:"Build current checkout locally",permalink:"/source-git/work-with-source-git/build-locally"}},c={},p=[{value:"Patch-name",id:"patch-name",level:2},{value:"Patch-id",id:"patch-id",level:2},{value:"Patch-status",id:"patch-status",level:2},{value:"Patch-present-in-specfile",id:"patch-present-in-specfile",level:2},{value:"Ignore-patch",id:"ignore-patch",level:2},{value:"No-prefix",id:"no-prefix",level:2}],s={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"controlling-patch-generation"},"Controlling patch generation"),(0,a.kt)("p",null,"When syncing the content of a source-git repo to dist-git, distribution\ncommits from source-git are converted to patch files in dist-git using ",(0,a.kt)("inlineCode",{parentName:"p"},"git\nformat-patch"),", and the patch files are added to the spec-file with indexing\nstarting from 1."),(0,a.kt)("p",null,"This process can be customized with the help of ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-interpret-trailers"},"Git-trailers")," added to the\nend of commit messages. The value of these Git-trailers is expected to be a\nvalid YAML value."),(0,a.kt)("p",null,"When a source-git repo is initialized with ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli/source-git/init"},(0,a.kt)("inlineCode",{parentName:"a"},"packit source-git init")),", the\nGit-trailers bellow are used to capture the name, ID and patch-status from\ndist-git. This way existing distribution patches don't produce any change in\ndist-git when they are transformed and synced back."),(0,a.kt)("p",null,"Controlling patch generation with Git-trailers deprecates the ",(0,a.kt)("a",{parentName:"p",href:"/development/patch-metadata"},"source-git\npatch metadata")," mechanism in flavor of a Git-native format. This old patch\nmetadata format is still supported if none of the Git-trailers bellow are\nfound in any of the distribution commits."),(0,a.kt)("h2",{id:"patch-name"},"Patch-name"),(0,a.kt)("p",null,"This can be used to change the name of a patch-file from the one generated by\n",(0,a.kt)("inlineCode",{parentName:"p"},"git format-patch"),". To merge multiple adjacent commits in a single patch file,\nspecify an identical ",(0,a.kt)("inlineCode",{parentName:"p"},"Patch-name")," for each of them."),(0,a.kt)("p",null,"When merging multiple adjacent commits to a single patch file, Git-trailers\nwhich control the way in which patches are added to the spec-file (",(0,a.kt)("inlineCode",{parentName:"p"},"Patch-id"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"Patch-status"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Patch-present-in-specfile"),") are ignored for all commits\nexcept the first (oldest) one."),(0,a.kt)("p",null,"If no ",(0,a.kt)("inlineCode",{parentName:"p"},"Patch-name")," is present, the one generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"git format-patch")," is left\nunchanged."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Patch-name: downstream.patch\n")),(0,a.kt)("h2",{id:"patch-id"},"Patch-id"),(0,a.kt)("p",null,"This is to control the numerical ID used in the patch-tag when adding the\npatch to the spec-file. If none is specified, the previous ID is incremented.\nThe ID of the first distribution patch is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", unless otherwise specified."),(0,a.kt)("p",null,"The number of digits used for the IDs can be controlled with the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration#patch_generation_patch_id_digits"},(0,a.kt)("inlineCode",{parentName:"a"},"patch_generation_patch_id_digits"))," configuration option."),(0,a.kt)("p",null,"The following Git-trailer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Patch-id: 100\n")),(0,a.kt)("p",null,"results in a following patch-tag in the spec-file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Patch100: distribution.patch\n")),(0,a.kt)("h2",{id:"patch-status"},"Patch-status"),(0,a.kt)("p",null,"This is to specify the comment lines to be included before the patch-line in\nthe spec-file, to serve as patch status (clarifying the purpose of the patch\ndownstream)."),(0,a.kt)("p",null,"If none is specified, the commit message of the distribution commit is going\nto be used, after all Git-trailers are stripped."),(0,a.kt)("p",null,"To specify a pre-wrapped multiline string, use a YAML block scalar. To include\nempty lines, prepend each line with ",(0,a.kt)("inlineCode",{parentName:"p"},"# "),"."),(0,a.kt)("p",null,"For example, the following Git-trailer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Patch-status: |\n    # This is a patch status.\n    # Having multiple lines.\n    #\n    # With some empty lines, even.\n")),(0,a.kt)("p",null,"Will be rendered as bellow in the spec-file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# This is a patch status.\n# Having multiple lines.\n#\n# With some empty lines, even.\nPatch2: downstream.patch\n")),(0,a.kt)("h2",{id:"patch-present-in-specfile"},"Patch-present-in-specfile"),(0,a.kt)("p",null,"This tells whether the patch generated from the commit is already in the\nspec-file. The value is a YAML Boolean. If ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", the spec-file is not\nupdated with this patch. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,a.kt)("h2",{id:"ignore-patch"},"Ignore-patch"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", no patch-file is generated from this commit. ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," if not\nspecified."),(0,a.kt)("h2",{id:"no-prefix"},"No-prefix"),(0,a.kt)("p",null,"Strip source and destination prefixes from diffs. This is the same as running\n",(0,a.kt)("inlineCode",{parentName:"p"},"git format-patch --no-prefix"),"."))}u.isMDXComponent=!0}}]);