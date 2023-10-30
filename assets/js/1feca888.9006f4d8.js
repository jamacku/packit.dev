"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[5728],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},17587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"How to split one Celery task into multiple tasks",authors:"lbarczio"},i=void 0,s={unversionedId:"celery/task-workflow-refactor",id:"celery/task-workflow-refactor",title:"How to split one Celery task into multiple tasks",description:"Let's talk about splitting the task.process_message into one processing task",source:"@site/research/celery/task-workflow-refactor.md",sourceDirName:"celery",slug:"/celery/task-workflow-refactor",permalink:"/research/celery/task-workflow-refactor",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/celery/task-workflow-refactor.md",tags:[],version:"current",frontMatter:{title:"How to split one Celery task into multiple tasks",authors:"lbarczio"},sidebar:"autogenerated",previous:{title:"Celery",permalink:"/research/category/celery"},next:{title:"Prioritizing of the Celery tasks",permalink:"/research/celery/tasks-prioritizing"}},o={},p=[{value:"Workflow 1",id:"workflow-1",level:2},{value:"How to pass the information needed by handlers (already discussed)",id:"how-to-pass-the-information-needed-by-handlers-already-discussed",level:4},{value:"What needs to be done",id:"what-needs-to-be-done",level:3},{value:"How the transition could be done in smaller steps",id:"how-the-transition-could-be-done-in-smaller-steps",level:3},{value:"Workflow 2",id:"workflow-2",level:2},{value:"What needs to be done",id:"what-needs-to-be-done-1",level:3},{value:"Which tasks do we want to have?",id:"which-tasks-do-we-want-to-have",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's talk about splitting the ",(0,r.kt)("inlineCode",{parentName:"p"},"task.process_message")," into one processing task\nand multiple tasks handling the specific events. The main benefit from this\nwill be the possibility to use more queues (for faster/slower tasks)\nand to differentiate tasks easily (Sentry)."),(0,r.kt)("h2",{id:"workflow-1"},"Workflow 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get webhook payload or message from message bus"),(0,r.kt)("li",{parentName:"ul"},"add aditional info which can make determining the event type easier\n(GH webhooks - X-GitHub-Event)"),(0,r.kt)("li",{parentName:"ul"},"send it to Celery as ",(0,r.kt)("inlineCode",{parentName:"li"},"task.process_message")," - this task will take care about:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"parsing of the event into object of class Event (this class provides ",(0,r.kt)("inlineCode",{parentName:"li"},"project"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"package_config")," properties, which enables us to make the checks)"),(0,r.kt)("li",{parentName:"ul"},"private repository check"),(0,r.kt)("li",{parentName:"ul"},"getting the handlers which handle the event"),(0,r.kt)("li",{parentName:"ul"},"whitelist check"),(0,r.kt)("li",{parentName:"ul"},"possibly creating records in DB (explained below)"),(0,r.kt)("li",{parentName:"ul"},"(running ",(0,r.kt)("inlineCode",{parentName:"li"},"pre-check")," here to filter out some events?)"),(0,r.kt)("li",{parentName:"ul"},"sending specific task to Celery"))),(0,r.kt)("li",{parentName:"ul"},"handle specific tasks, which directly run the handlers")),(0,r.kt)("h4",{id:"how-to-pass-the-information-needed-by-handlers-already-discussed"},"How to pass the information needed by handlers (already discussed)"),(0,r.kt)("p",null,"Handlers are currently using the information from event (with ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"package_config")," properties, specific for each event), service config and job config object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class JobHandler(Handler):\n   def __init__(\n       self, config: ServiceConfig, job_config: Optional[JobConfig], event: Event\n   )\n")),(0,r.kt)("p",null,"Possible solutions, which can be somehow combined:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"serialize the info about objects and pass it into ",(0,r.kt)("inlineCode",{parentName:"p"},"send_task")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this would need serializing and then again deserializing"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"save the info about objects in DB and pass IDs of models into ",(0,r.kt)("inlineCode",{parentName:"p"},"send_task")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"what models does make sense to have? possibilities:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"project"),(0,r.kt)("li",{parentName:"ul"},"package config"),(0,r.kt)("li",{parentName:"ul"},"service config"),(0,r.kt)("li",{parentName:"ul"},"job config"),(0,r.kt)("li",{parentName:"ul"},"event"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"each subclass of class Event stores different set of info -> does it make sense\nto create model for each?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"these could be reused since in ",(0,r.kt)("inlineCode",{parentName:"p"},"task_results")," table we store the event dict")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"pass just the arguments which are required by the specific handler"))),(0,r.kt)("h3",{id:"what-needs-to-be-done"},"What needs to be done"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create functions for serializing and deserializing the objects needed by each handler:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"service config"),(0,r.kt)("li",{parentName:"ul"},"package config"),(0,r.kt)("li",{parentName:"ul"},"job config"),(0,r.kt)("li",{parentName:"ul"},"project"))),(0,r.kt)("li",{parentName:"ul"},"for each event create method which serializes and deserializes event specific data"),(0,r.kt)("li",{parentName:"ul"},"after doing the checks and getting the handlers pass arguments to ",(0,r.kt)("inlineCode",{parentName:"li"},"send_task")," for each handler\ninstead of running it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    # serialize objects\n    serialized_config = self.config.serialize()\n    ...\n\n    handler = handler_kls(...)\n    if handler.pre_check():\n        celery_app.send_task(\n            name=handler.task_name,\n            kwargs={"config": serialized_config,\n                    "job_config": serialized_job_config,\n                    "package_config": serialized_package_config,\n                    "project": serialized_project,\n                    "specific_info": info_dict}\n        )\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create task for each handler -> create functions handling tasks:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@celery_app.task(name="task.run_copr_build_start_handler")\ndef process_message(self, ...):\n   # get objects from serialized data\n   ...\n\n   handler = CoprBuildStartHandler(...)\n   handler.run_n_clean()\n\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"change the code in handlers to handle changed attributes correctly\n(have project, config, job config, package config and specific data in separate attributes ,\nnot everthing in original event object)")),(0,r.kt)("h3",{id:"how-the-transition-could-be-done-in-smaller-steps"},"How the transition could be done in smaller steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"implement the helper functions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"serializing and deserializing common data (configs)"),(0,r.kt)("li",{parentName:"ul"},"serializing event-specific data"))),(0,r.kt)("li",{parentName:"ul"},"change the code in handlers without using Event class,\nso that the project and configs are separate attributes\nas well as event-specific info is deserialized into attributes"),(0,r.kt)("li",{parentName:"ul"},"when the changed handler code works, implement the division of 1 task into more tasks\n(described above - create functions for processing each task)")),(0,r.kt)("h2",{id:"workflow-2"},"Workflow 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get webhook payload or message from message bus"),(0,r.kt)("li",{parentName:"ul"},"add aditional info which can make determining the event type easier\n(GH webhooks - X-GitHub-Event)"),(0,r.kt)("li",{parentName:"ul"},"send it to Celery as ",(0,r.kt)("inlineCode",{parentName:"li"},"task.parse_message")," - this task will take care about:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"parsing of the info needed for the event object (doing event specific pre-check?)"))),(0,r.kt)("li",{parentName:"ul"},"send event specific task to Celery with all arguments needed to create object of specific event"),(0,r.kt)("li",{parentName:"ul"},"event specific tasks will take care about:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"private repository check"),(0,r.kt)("li",{parentName:"ul"},"getting the handlers which handle the event"),(0,r.kt)("li",{parentName:"ul"},"whitelist check"),(0,r.kt)("li",{parentName:"ul"},"run the handlers")))),(0,r.kt)("h3",{id:"what-needs-to-be-done-1"},"What needs to be done"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in each specific parser function send task to Celery:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def parse_pr_event(event):\n    ...\n    commit_sha = nested_get(event, "pull_request", "head", "sha")\n    https_url = event["repository"]["html_url"]\n\n    celery_app.send_task(\n        name="task.process_pr_event",\n        kwargs={"action": PullRequestAction[action],\n                "pr_id": pr_id,\n                "base_repo_namespace": base_repo_namespace,\n                "base_repo_name": base_repo_name,\n                "base_ref": base_ref,\n                "target_repo_namespace": target_repo_namespace,\n                "target_repo_name": target_repo_name,\n                "https_url": https_url,\n                "commit_sha": commit_sha,\n                "user_login":user_login}\n    )\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create task for each event -> create functions handling the event specific tasks,\nwhich create event object and do the things written above")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@celery_app.task(name="task.process_pull_request_GH_event")\ndef process_message(self, ...):\n   event = PullRequestGHEvent(...)\n   event.process()\n# process method would contain code moved from process_message(),\n# the checks and running jobs\n\n\n\n')),(0,r.kt)("h4",{id:"which-tasks-do-we-want-to-have"},"Which tasks do we want to have?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"task x job (what has to be done in general, independently on the trigger and git forge):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"propose_downstream"),(0,r.kt)("li",{parentName:"ul"},"build/copr_build"),(0,r.kt)("li",{parentName:"ul"},"sync_from_downstream"),(0,r.kt)("li",{parentName:"ul"},"production_build"),(0,r.kt)("li",{parentName:"ul"},"add_to_whitelist"),(0,r.kt)("li",{parentName:"ul"},"tests"),(0,r.kt)("li",{parentName:"ul"},"report_test_results"),(0,r.kt)("li",{parentName:"ul"},"pull_request_action"),(0,r.kt)("li",{parentName:"ul"},"copr_build_finished"),(0,r.kt)("li",{parentName:"ul"},"copr_build_started"))),(0,r.kt)("li",{parentName:"ul"},"task x handler (which handler handles the task)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ReleaseCoprBuildHandler"),(0,r.kt)("li",{parentName:"ul"},"PullRequestCoprBuildHandler"),(0,r.kt)("li",{parentName:"ul"},"PushCoprBuildHandler"),(0,r.kt)("li",{parentName:"ul"},"GitHubPullRequestCommentCoprBuildHandler"),(0,r.kt)("li",{parentName:"ul"},"CoprBuildStartHandler"),(0,r.kt)("li",{parentName:"ul"},"CoprBuildEndHandler"),(0,r.kt)("li",{parentName:"ul"},"GithubAppInstallationHandler"),(0,r.kt)("li",{parentName:"ul"},"GitHubPullRequestCommentTestingFarmHandler"),(0,r.kt)("li",{parentName:"ul"},"GithubTestingFarmHandler"),(0,r.kt)("li",{parentName:"ul"},"TestingFarmResultsHandler"),(0,r.kt)("li",{parentName:"ul"},"GitHubIssueCommentProposeUpdateHandler"),(0,r.kt)("li",{parentName:"ul"},"ProposeDownstreamHandler"),(0,r.kt)("li",{parentName:"ul"},"ReleaseGithubKojiBuildHandler"),(0,r.kt)("li",{parentName:"ul"},"PullRequestGithubKojiBuildHandler"),(0,r.kt)("li",{parentName:"ul"},"PushGithubKojiBuildHandler"),(0,r.kt)("li",{parentName:"ul"},"NewDistGitCommitHandler"),(0,r.kt)("li",{parentName:"ul"},"PagurePullRequestCommentCoprBuildHandler"))),(0,r.kt)("li",{parentName:"ul"},"task x event (what event triggered the task)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"InstallationEvent"),(0,r.kt)("li",{parentName:"ul"},"CoprBuildEvent"),(0,r.kt)("li",{parentName:"ul"},"KojiBuildEvent"),(0,r.kt)("li",{parentName:"ul"},"TestingFarmResultEvent"),(0,r.kt)("li",{parentName:"ul"},"ReleaseEvent"),(0,r.kt)("li",{parentName:"ul"},"PushGithubGHEvent"),(0,r.kt)("li",{parentName:"ul"},"PullRequestGHEvent"),(0,r.kt)("li",{parentName:"ul"},"PullRequestCommentGHEvent"),(0,r.kt)("li",{parentName:"ul"},"IssueCommentEvent"),(0,r.kt)("li",{parentName:"ul"},"PushPagureEvent"),(0,r.kt)("li",{parentName:"ul"},"PullRequestCommentPagureEvent"),(0,r.kt)("li",{parentName:"ul"},"PullRequestPagureEvent")))))}d.isMDXComponent=!0}}]);