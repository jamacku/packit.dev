"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[9759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,g=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Updating source-git",authors:["csomh","ttomecek"]},o="packit source-git update-source-git",s={unversionedId:"source-git/update",id:"source-git/update",title:"Updating source-git",description:"This research covers a command which synchronizes file changes from a dist-git",source:"@site/research/source-git/update.md",sourceDirName:"source-git",slug:"/source-git/update",permalink:"/research/source-git/update",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/source-git/update.md",tags:[],version:"current",frontMatter:{title:"Updating source-git",authors:["csomh","ttomecek"]},sidebar:"autogenerated",previous:{title:"Verifying the sync status of source-git and dist-git repos",permalink:"/research/source-git/sync-status"},next:{title:"Specfiles",permalink:"/research/category/specfiles"}},c={},l=[{value:"Spec file sync",id:"spec-file-sync",level:2},{value:"Packaging sources synchronization",id:"packaging-sources-synchronization",level:2},{value:"Code synchronization",id:"code-synchronization",level:2},{value:"Patches were changed",id:"patches-were-changed",level:3},{value:"Package was rebased",id:"package-was-rebased",level:3},{value:"CLI proposal",id:"cli-proposal",level:2}],p={toc:l},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packit-source-git-update-source-git"},(0,a.kt)("inlineCode",{parentName:"h1"},"packit source-git update-source-git")),(0,a.kt)("p",null,"This research covers a command which synchronizes file changes from a dist-git\nrepo back to a source-git repo."),(0,a.kt)("p",null,"Areas to cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec file synchronization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"packaging sources synchronization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"code synchronization"))),(0,a.kt)("p",null,"Let's break these down."),(0,a.kt)("h2",{id:"spec-file-sync"},"Spec file sync"),(0,a.kt)("p",null,"Packit should copy the file from dist-git back to source-git. But before doing\nthat, we should capture the ",(0,a.kt)("inlineCode",{parentName:"p"},"%version"),' spec file tag and check if it differs\nfrom the source-git spec. If it does, it means that we\'re dealing with a rebase\nwhich is not supported and packit should inform the user about this fact. See\n"Version changed" section below.'),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"%release")," tag has changed, packit should inform the user about the\ndifferent release numbers. This is not an issue and is actually expected to\nhappen during the proven-packager workflow when the release number is increased\nby 1 for sake of a rebuild."),(0,a.kt)("h2",{id:"packaging-sources-synchronization"},"Packaging sources synchronization"),(0,a.kt)("p",null,'These cover additional files in dist-git (except for patches and the "sources"\nfile). Packit should detect a removal of a file and also remove it in\nsource-git\'s ',(0,a.kt)("inlineCode",{parentName:"p"},".distro")," folder. Otherwise it's the same drill as with the spec\nfile - copy the files."),(0,a.kt)("h2",{id:"code-synchronization"},"Code synchronization"),(0,a.kt)("p",null,"There are 2 use cases in this bucket:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Patches were changed, removed or added"),(0,a.kt)("li",{parentName:"ol"},"The package was rebased to a new version")),(0,a.kt)("p",null,"At first, we should be able to detect that such a thing has happened. There are\nmultiple ways how to do that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inspect commits and check what files have changed: if sources file or patch files\nchanged, we can easily tell that source code has changed."),(0,a.kt)("li",{parentName:"ul"},"parse spec file and compare ",(0,a.kt)("inlineCode",{parentName:"li"},"%version")," between dist-git and source-git")),(0,a.kt)("p",null,"Packit should not support any of these 2 cases: users have to still perform\nwork in their source-git repos first and not in dist-git."),(0,a.kt)("p",null,"One problem with detecting changes is that we do not track which source-git\ncommit matches a dist-git commit and vice versa. We should start with requiring\na git-range which should be synchronized and over time figure out if this can\nbe automated. Alternatively we can start putting metadata into our dist-git\ncommits to tell which source-git commit they are matching."),(0,a.kt)("h3",{id:"patches-were-changed"},"Patches were changed"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A patch was removed"),(0,a.kt)("li",{parentName:"ol"},"A patch content changed"),(0,a.kt)("li",{parentName:"ol"},"A patch was added")),(0,a.kt)("h3",{id:"package-was-rebased"},"Package was rebased"),(0,a.kt)("p",null,"The package was rebased to a different version which likely resulted into\nseveral patches being dropped and a change in git-history in source-git."),(0,a.kt)("h2",{id:"cli-proposal"},"CLI proposal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: packit source-git update-source-git [OPTIONS] DIST_GIT SOURCE_GIT REVISION_RANGE\n\n  Update a source-git repository with selected checkout of a spec file and\n  additional packaging files from a dist-git repository.\n\n  Revision range represents dist-git history which should be synchronized. Use\n  `HEAD` if you want to synchronize the current checkout. For more info how to\n  specify the revision range, see git-log(1).\n\n  If patches or the sources file changed, the command exits with return code 2.\n  Such changes are not supported by this command - code changes should always\n  happen in the source-git repo first.\n\n  This command, by default, performs only local operations and uses the\n  content of the source-git and dist-git repository as it is: does not\n  checkout branches or fetches remotes.\n\n  After the synchronization is done, packit will inform about the changes it\n  has performed and about differences between the two repositories prior to the\n  synchronization process.\n\n  Commit messages are preserved by default.\n\n  Examples:\n\n  Take the current checkout (HEAD) of systemd dist-git repo and copy spec file\n  and other packaging files into the source-git repo at src/systemd\n\n    $ packit source-git update-source-git rpms/systemd src/systemd HEAD\n\n  Synchronize changes from the last three dist-git commits\n\n    $ packit source-git update-source-git rpms/systemd src/systemd HEAD~3..\n\nOptions:\n  -h, --help           Show this message and exit.\n")))}u.isMDXComponent=!0}}]);